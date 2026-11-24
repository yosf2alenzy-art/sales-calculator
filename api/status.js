// GET /api/status -> { ok, needsSetup }
const { db, applyCors, send } = require('./_lib');

module.exports = async (req, res) => {
    if (applyCors(req, res)) return;
    if (req.method !== 'GET') return send(res, 405, { error: 'method_not_allowed' });
    try {
        const rows = await db()`SELECT COUNT(*)::int AS n FROM app_users WHERE is_admin = true`;
        return send(res, 200, { ok: true, needsSetup: rows[0].n === 0 });
    } catch (e) {
        console.error('status error', e);
        return send(res, 500, { error: 'server_error' });
    }
};
