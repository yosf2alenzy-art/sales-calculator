// POST /api/password { currentPassword, newPassword } -> { token }
// Changing the password signs out every other session of this account.
const {
    db, applyCors, send, getBody, getAuthUser,
    hashPassword, verifyPassword, validatePassword, signToken
} = require('./_lib');

module.exports = async (req, res) => {
    if (applyCors(req, res)) return;
    if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' });
    try {
        const me = await getAuthUser(req);
        if (!me) return send(res, 401, { error: 'unauthorized' });
        const { currentPassword, newPassword } = getBody(req);
        if (!validatePassword(newPassword)) return send(res, 400, { error: 'weak_password' });
        const sql = db();
        const rows = await sql`SELECT pass_hash FROM app_users WHERE id = ${me.id}`;
        if (!rows[0] || !(await verifyPassword(String(currentPassword || ''), rows[0].pass_hash))) {
            return send(res, 401, { error: 'invalid_credentials' });
        }
        const hash = await hashPassword(newPassword);
        const upd = await sql`UPDATE app_users SET pass_hash = ${hash}, token_version = token_version + 1
            WHERE id = ${me.id} RETURNING id, username, is_admin, permissions, token_version`;
        return send(res, 200, { token: signToken(upd[0]) });
    } catch (e) {
        console.error('password error', e);
        return send(res, 500, { error: 'server_error' });
    }
};
