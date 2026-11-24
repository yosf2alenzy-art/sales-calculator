// Visitor & usage counters (replaces the retired counterapi.dev v1)
// GET  /api/stats               -> { visitors, usage }
// POST /api/stats { kind }      -> counts one 'visit' or 'usage' and returns the totals
// The same device (hashed IP) is counted at most once per window, so refreshes don't inflate numbers.
const crypto = require('crypto');
const { db, applyCors, send, getBody, clientIp } = require('./_lib');

const WINDOWS = { visit: '6 hours', usage: '30 minutes' };

function ipHash(ip) {
    return crypto.createHmac('sha256', process.env.AUTH_SECRET || 'stats').update(String(ip)).digest('hex').slice(0, 32);
}

async function totals(sql) {
    const rows = await sql`SELECT kind, count FROM stats_counters WHERE kind IN ('visit', 'usage')`;
    const out = { visitors: 0, usage: 0 };
    rows.forEach(r => { if (r.kind === 'visit') out.visitors = Number(r.count); if (r.kind === 'usage') out.usage = Number(r.count); });
    return out;
}

module.exports = async (req, res) => {
    if (applyCors(req, res)) return;
    try {
        const sql = db();
        if (req.method === 'GET') {
            return send(res, 200, await totals(sql));
        }
        if (req.method === 'POST') {
            const { kind } = getBody(req);
            if (!WINDOWS[kind]) return send(res, 400, { error: 'bad_kind' });
            const h = ipHash(clientIp(req));
            const recent = kind === 'visit'
                ? await sql`SELECT 1 FROM stats_hits WHERE kind = 'visit' AND ip_hash = ${h} AND at > now() - interval '6 hours' LIMIT 1`
                : await sql`SELECT 1 FROM stats_hits WHERE kind = 'usage' AND ip_hash = ${h} AND at > now() - interval '30 minutes' LIMIT 1`;
            let counted = false;
            if (!recent[0]) {
                await sql`INSERT INTO stats_hits (kind, ip_hash) VALUES (${kind}, ${h})`;
                await sql`UPDATE stats_counters SET count = count + 1, updated_at = now() WHERE kind = ${kind}`;
                counted = true;
            }
            // housekeeping
            if (Math.random() < 0.05) await sql`DELETE FROM stats_hits WHERE at < now() - interval '2 days'`;
            return send(res, 200, { ...(await totals(sql)), counted });
        }
        return send(res, 405, { error: 'method_not_allowed' });
    } catch (e) {
        console.error('stats error', e);
        return send(res, 500, { error: 'server_error' });
    }
};
