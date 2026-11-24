// GET /api/settings            -> public central settings for every visitor
// PUT /api/settings { settings } -> admin only, replaces the central settings
const { db, applyCors, send, getBody, getAuthUser } = require('./_lib');

const THEMES = ['luxury-gold', 'royal-dark', 'emerald-green', 'classic-blue', 'elegant-light', 'warehouse-light'];
const BUTTON_KEYS = ['copyReport', 'exportPdf', 'exportCsv', 'whatsappSendPdf', 'createQuotation', 'saveProject', 'loadProject'];
const MAX_BYTES = 300 * 1024;

const str = (v, max) => (typeof v === 'string' ? v.slice(0, max) : undefined);
const strList = (v, maxItems, maxLen) =>
    Array.isArray(v) ? v.filter(x => typeof x === 'string').slice(0, maxItems).map(x => x.slice(0, maxLen)) : undefined;
const objList = (v, maxItems) =>
    Array.isArray(v)
        ? v.filter(x => x && typeof x === 'object' && !Array.isArray(x)).slice(0, maxItems).map(x => {
            const o = {};
            for (const [k, val] of Object.entries(x)) {
                if (typeof val === 'string') o[k.slice(0, 40)] = val.slice(0, 2000);
                else if (typeof val === 'number' || typeof val === 'boolean') o[k.slice(0, 40)] = val;
            }
            return o;
        })
        : undefined;

// Only known keys with the right types are stored
function sanitize(input) {
    const s = input && typeof input === 'object' ? input : {};
    const out = {};
    const set = (k, v) => { if (v !== undefined) out[k] = v; };
    set('programTitle', str(s.programTitle, 200));
    set('programSubtitle', str(s.programSubtitle, 300));
    set('customProducts', strList(s.customProducts, 5000, 300));
    set('tutorialLinks', objList(s.tutorialLinks, 50));
    set('customTutorials', objList(s.customTutorials, 100));
    if (s.visibleButtons && typeof s.visibleButtons === 'object') {
        out.visibleButtons = {};
        BUTTON_KEYS.forEach(k => { if (typeof s.visibleButtons[k] === 'boolean') out.visibleButtons[k] = s.visibleButtons[k]; });
    }
    if (typeof s.lockTheme === 'boolean') out.lockTheme = s.lockTheme;
    if (THEMES.includes(s.lockedTheme)) out.lockedTheme = s.lockedTheme;
    if (typeof s.showProductList === 'boolean') out.showProductList = s.showProductList;
    if (typeof s.disableOffline === 'boolean') out.disableOffline = s.disableOffline;
    set('currency', str(s.currency, 20));
    set('customCurrency', str(s.customCurrency, 40));
    if (typeof s.applyVat === 'boolean') out.applyVat = s.applyVat;
    if (typeof s.vatRate === 'number' && isFinite(s.vatRate) && s.vatRate >= 0 && s.vatRate <= 100) out.vatRate = s.vatRate;
    set('terms', strList(s.terms, 50, 1000));
    return out;
}

module.exports = async (req, res) => {
    if (applyCors(req, res)) return;
    try {
        const sql = db();
        if (req.method === 'GET') {
            const rows = await sql`SELECT data, version, updated_at FROM app_settings WHERE id = 1`;
            const r = rows[0] || { data: {}, version: 0, updated_at: null };
            res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=30, stale-while-revalidate=300');
            return send(res, 200, { settings: r.data || {}, version: r.version, updatedAt: r.updated_at });
        }
        if (req.method === 'PUT') {
            const user = await getAuthUser(req);
            if (!user) return send(res, 401, { error: 'unauthorized' });
            if (!user.is_admin) return send(res, 403, { error: 'forbidden' });
            const body = getBody(req);
            const clean = sanitize(body.settings);
            const json = JSON.stringify(clean);
            if (Buffer.byteLength(json) > MAX_BYTES) return send(res, 413, { error: 'too_large' });
            const rows = await sql`INSERT INTO app_settings (id, data, version, updated_at, updated_by)
                VALUES (1, ${json}::jsonb, 1, now(), ${user.username})
                ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, version = app_settings.version + 1,
                    updated_at = now(), updated_by = EXCLUDED.updated_by
                RETURNING version, updated_at`;
            return send(res, 200, { ok: true, version: rows[0].version, updatedAt: rows[0].updated_at, settings: clean });
        }
        return send(res, 405, { error: 'method_not_allowed' });
    } catch (e) {
        console.error('settings error', e);
        return send(res, 500, { error: 'server_error' });
    }
};
