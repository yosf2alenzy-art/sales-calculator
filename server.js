const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

function serveFile(filePath, res) {
    const extname = path.extname(filePath);
    let contentType = MIME_TYPES[extname] || 'application/octet-stream';
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(500);
            res.end(`Server Error: ${error.code}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}

const server = http.createServer((req, res) => {
    const urlPath = req.url.split('?')[0];
    let filePath = path.join(PUBLIC_DIR, urlPath);
    
    // Decode URI to support Arabic characters in filenames
    try {
        filePath = decodeURIComponent(filePath);
    } catch (e) {
        // ignore
    }

    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isFile()) {
            serveFile(filePath, res);
        } else if (!err && stats.isDirectory()) {
            const indexPath = path.join(filePath, 'index.html');
            fs.stat(indexPath, (indexErr, indexStats) => {
                if (!indexErr && indexStats.isFile()) {
                    serveFile(indexPath, res);
                } else {
                    serveFile(path.join(PUBLIC_DIR, 'index.html'), res);
                }
            });
        } else {
            // File does not exist. If it has a file extension, return 404.
            // Otherwise, route it to index.html (SPA routing).
            const extname = path.extname(filePath);
            if (extname) {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>404 Not Found / الملف غير موجود</h1>', 'utf-8');
            } else {
                serveFile(path.join(PUBLIC_DIR, 'index.html'), res);
            }
        }
    });
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error(`\nError: Port ${PORT} is already in use by another program.`);
        console.error(`Please close the other program or choose another port in server.js.\n`);
        process.exit(1);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

