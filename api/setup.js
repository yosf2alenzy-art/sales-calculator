// POST /api/setup { setupCode, username, password }
// Creates the first admin account. Works only while no admin exists,
// and only with the one-time SETUP_CODE stored in the Vercel environment.
const crypto = require('crypto');
const {
    db, applyCors, send, getBody, clientIp,
    hashPassword, validatePassword, validateUsername, signToken, publicUser
} = require('./_lib');

function sameSecret(a, b) {
    const ha = crypto.createHash('sha256').update(String(a || '')).digest();
    const hb = crypto.createHash('sha256').update(String(b || '')).digest();
    return crypto.timingSafeEqual(ha, hb);
}

module.exports = async (req, res) => {
    if (applyCors(req, res)) return;
    if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' });
    try {
        const { setupCode, username, password } = getBody(req);
        const sql = db();
        const ip = clientIp(req);

        const recent = await sql`SELECT COUNT(*)::int AS n FROM login_attempts
            WHERE ip = ${ip} AND username_lc = '__setup__' AND success = false AND at > now() - interval '15 minutes'`;
        if (recent[0].n >= 5) return send(res, 429, { error: 'too_many_attempts' });

        const admins = await sql`SELECT COUNT(*)::int AS n FROM app_users WHERE is_admin = true`;
        if (admins[0].n > 0) return send(res, 409, { error: 'already_set_up' });

        if (!process.env.SETUP_CODE || !sameSecret(setupCode, process.env.SETUP_CODE)) {
            await sql`INSERT INTO login_attempts (ip, username_lc, success) VALUES (${ip}, '__setup__', false)`;
            return send(res, 403, { error: 'bad_setup_code' });
        }
        if (!validateUsername(username)) return send(res, 400, { error: 'bad_username' });
        if (!validatePassword(password)) return send(res, 400, { error: 'weak_password' });

        const name = username.trim();
        const hash = await hashPassword(password);
        const rows = await sql`INSERT INTO app_users (username, username_lc, pass_hash, is_admin, permissions)
            VALUES (${name}, ${name.toLowerCase()}, ${hash}, true, ${JSON.stringify({ createQuotation: true })}::jsonb)
            ON CONFLICT (username_lc) DO NOTHING
            RETURNING id, username, is_admin, permissions, token_version`;
        if (!rows[0]) return send(res, 409, { error: 'already_set_up' });
        return send(res, 200, { token: signToken(rows[0]), user: publicUser(rows[0]) });
    } catch (e) {
        console.error('setup error', e);
        return send(res, 500, { error: 'server_error' });
    }
};
