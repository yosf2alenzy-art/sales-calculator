// POST /api/login { username, password } -> { token, user }
// Brute-force protection: 5 failed tries per account or 20 per IP within 15 minutes.
const {
    db, applyCors, send, getBody, clientIp,
    verifyPassword, DUMMY_HASH, signToken, publicUser
} = require('./_lib');

module.exports = async (req, res) => {
    if (applyCors(req, res)) return;
    if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' });
    try {
        const { username, password } = getBody(req);
        if (typeof username !== 'string' || typeof password !== 'string' || !username.trim() || !password) {
            return send(res, 400, { error: 'missing_fields' });
        }
        const sql = db();
        const ip = clientIp(req);
        const ulc = username.trim().toLowerCase().slice(0, 64);

        const limits = await sql`SELECT
            COUNT(*) FILTER (WHERE username_lc = ${ulc})::int AS per_user,
            COUNT(*) FILTER (WHERE ip = ${ip})::int AS per_ip
            FROM login_attempts
            WHERE success = false AND at > now() - interval '15 minutes' AND (username_lc = ${ulc} OR ip = ${ip})`;
        if (limits[0].per_user >= 5 || limits[0].per_ip >= 20) {
            return send(res, 429, { error: 'too_many_attempts' });
        }

        const rows = await sql`SELECT id, username, pass_hash, is_admin, permissions, token_version
            FROM app_users WHERE username_lc = ${ulc}`;
        const user = rows[0];
        const ok = await verifyPassword(password, user ? user.pass_hash : DUMMY_HASH);

        await sql`INSERT INTO login_attempts (ip, username_lc, success) VALUES (${ip}, ${ulc}, ${!!(user && ok)})`;
        // housekeeping: keep the attempts table small
        await sql`DELETE FROM login_attempts WHERE at < now() - interval '7 days'`;

        if (!user || !ok) return send(res, 401, { error: 'invalid_credentials' });
        return send(res, 200, { token: signToken(user), user: publicUser(user) });
    } catch (e) {
        console.error('login error', e);
        return send(res, 500, { error: 'server_error' });
    }
};
