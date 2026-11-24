// Admin-only staff management
// GET    /api/users                                   -> list
// POST   /api/users { username, password, permissions } -> create employee
// DELETE /api/users?username=NAME                     -> delete employee
const {
    db, applyCors, send, getBody, getAuthUser,
    hashPassword, validatePassword, validateUsername, publicUser
} = require('./_lib');

module.exports = async (req, res) => {
    if (applyCors(req, res)) return;
    try {
        const me = await getAuthUser(req);
        if (!me) return send(res, 401, { error: 'unauthorized' });
        if (!me.is_admin) return send(res, 403, { error: 'forbidden' });
        const sql = db();

        if (req.method === 'GET') {
            const rows = await sql`SELECT username, is_admin, permissions FROM app_users ORDER BY is_admin DESC, created_at ASC`;
            return send(res, 200, { users: rows.map(publicUser) });
        }

        if (req.method === 'POST') {
            const { username, password, permissions } = getBody(req);
            if (!validateUsername(username)) return send(res, 400, { error: 'bad_username' });
            if (!validatePassword(password)) return send(res, 400, { error: 'weak_password' });
            const name = username.trim();
            const perms = { createQuotation: !!(permissions && permissions.createQuotation) };
            const hash = await hashPassword(password);
            const rows = await sql`INSERT INTO app_users (username, username_lc, pass_hash, is_admin, permissions)
                VALUES (${name}, ${name.toLowerCase()}, ${hash}, false, ${JSON.stringify(perms)}::jsonb)
                ON CONFLICT (username_lc) DO NOTHING
                RETURNING username, is_admin, permissions`;
            if (!rows[0]) return send(res, 409, { error: 'user_exists' });
            return send(res, 201, { user: publicUser(rows[0]) });
        }

        if (req.method === 'DELETE') {
            const target = String((req.query && req.query.username) || '').trim().toLowerCase();
            if (!target) return send(res, 400, { error: 'missing_username' });
            if (target === me.username.toLowerCase()) return send(res, 400, { error: 'cannot_delete_self' });
            const rows = await sql`SELECT is_admin FROM app_users WHERE username_lc = ${target}`;
            if (!rows[0]) return send(res, 404, { error: 'not_found' });
            if (rows[0].is_admin) {
                const admins = await sql`SELECT COUNT(*)::int AS n FROM app_users WHERE is_admin = true`;
                if (admins[0].n <= 1) return send(res, 400, { error: 'last_admin' });
            }
            await sql`DELETE FROM app_users WHERE username_lc = ${target}`;
            return send(res, 200, { ok: true });
        }

        return send(res, 405, { error: 'method_not_allowed' });
    } catch (e) {
        console.error('users error', e);
        return send(res, 500, { error: 'server_error' });
    }
};
