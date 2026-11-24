// Shared helpers for the calculator admin API (Vercel Node.js functions)
const crypto = require('crypto');
const { neon } = require('@neondatabase/serverless');

let _sql = null;
function db() {
    if (!_sql) {
        if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not configured');
        _sql = neon(process.env.DATABASE_URL);
    }
    return _sql;
}

// ---------- CORS ----------
const DEFAULT_ORIGINS = ['https://yosf2alenzy-art.github.io'];
function allowedOrigins() {
    const extra = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
    return DEFAULT_ORIGINS.concat(extra);
}
function applyCors(req, res) {
    const origin = req.headers.origin;
    if (origin && allowedOrigins().includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Vary', 'Origin');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Max-Age', '86400');
    }
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return true;
    }
    return false;
}

function send(res, status, body) {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(body));
}

function getBody(req) {
    let b = req.body;
    if (typeof b === 'string') {
        try { b = JSON.parse(b); } catch (e) { b = null; }
    }
    return b && typeof b === 'object' ? b : {};
}

function clientIp(req) {
    const xf = req.headers['x-forwarded-for'];
    if (xf) return String(xf).split(',')[0].trim();
    return (req.socket && req.socket.remoteAddress) || 'unknown';
}

// ---------- Passwords (scrypt) ----------
function hashPassword(password) {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(16);
        crypto.scrypt(password, salt, 64, { N: 16384, r: 8, p: 1 }, (err, key) => {
            if (err) return reject(err);
            resolve(`scrypt$${salt.toString('base64')}$${key.toString('base64')}`);
        });
    });
}
function verifyPassword(password, stored) {
    return new Promise((resolve) => {
        const parts = String(stored || '').split('$');
        if (parts.length !== 3 || parts[0] !== 'scrypt') return resolve(false);
        const salt = Buffer.from(parts[1], 'base64');
        const expected = Buffer.from(parts[2], 'base64');
        crypto.scrypt(password, salt, expected.length, { N: 16384, r: 8, p: 1 }, (err, key) => {
            if (err) return resolve(false);
            resolve(key.length === expected.length && crypto.timingSafeEqual(key, expected));
        });
    });
}
// Used to spend the same time when the username does not exist
const DUMMY_HASH = 'scrypt$AAAAAAAAAAAAAAAAAAAAAA==$' + Buffer.alloc(64).toString('base64');

function validatePassword(pw) {
    return typeof pw === 'string' && pw.length >= 8 && pw.length <= 128;
}
function validateUsername(u) {
    return typeof u === 'string' && /^[\p{L}\p{N}._-]{3,32}$/u.test(u.trim());
}

// ---------- Tokens (HMAC-signed, stateless) ----------
const TOKEN_TTL_SECONDS = 12 * 60 * 60;
function secret() {
    const s = process.env.AUTH_SECRET;
    if (!s || s.length < 32) throw new Error('AUTH_SECRET is not configured');
    return s;
}
function b64url(buf) {
    return Buffer.from(buf).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function signToken(user) {
    const payload = { uid: user.id, tv: user.token_version, exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS };
    const body = b64url(JSON.stringify(payload));
    const sig = b64url(crypto.createHmac('sha256', secret()).update(body).digest());
    return `${body}.${sig}`;
}
function readToken(token) {
    if (!token || typeof token !== 'string' || !token.includes('.')) return null;
    const [body, sig] = token.split('.');
    const expected = b64url(crypto.createHmac('sha256', secret()).update(body).digest());
    const a = Buffer.from(sig || ''), b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
    try {
        const payload = JSON.parse(Buffer.from(body.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8'));
        if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) return null;
        return payload;
    } catch (e) {
        return null;
    }
}

async function getAuthUser(req) {
    const h = req.headers.authorization || '';
    const token = h.startsWith('Bearer ') ? h.slice(7) : null;
    const payload = readToken(token);
    if (!payload) return null;
    const rows = await db()`SELECT id, username, is_admin, permissions, token_version FROM app_users WHERE id = ${payload.uid}`;
    const user = rows[0];
    if (!user || user.token_version !== payload.tv) return null;
    return user;
}

function publicUser(u) {
    return { username: u.username, isAdmin: !!u.is_admin, permissions: u.permissions || {} };
}

module.exports = {
    db, applyCors, send, getBody, clientIp,
    hashPassword, verifyPassword, DUMMY_HASH, validatePassword, validateUsername,
    signToken, getAuthUser, publicUser, TOKEN_TTL_SECONDS
};
