const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
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
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            res.end(content, 'utf-8');
        }
    });
}

const { execFile } = require('child_process');

function handleApiTranscribe(req, res) {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
        const buffer = Buffer.concat(chunks);
        if (buffer.length === 0) {
            res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ success: false, error: 'No data received' }));
            return;
        }

        const contentType = (req.headers['content-type'] || '').toLowerCase();
        const pyScript = path.join(PUBLIC_DIR, 'transcribe_api.py');

        // Handle JSON URL payload
        if (contentType.includes('application/json')) {
            try {
                const bodyStr = buffer.toString('utf-8');
                const body = JSON.parse(bodyStr);
                const audioUrl = (body.url || body.audioUrl || '').trim();

                if (!audioUrl) {
                    res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ success: false, error: 'لم يتم توفير الرابط الصوتي' }));
                    return;
                }

                execFile('python', [pyScript, audioUrl], { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }, (pyErr, stdout, stderr) => {
                    if (pyErr && !stdout) {
                        console.error('Python transcribe URL error:', pyErr, stderr);
                        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                        res.end(JSON.stringify({ success: false, error: stderr || pyErr.message }));
                        return;
                    }

                    try {
                        const result = JSON.parse(stdout.trim());
                        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                        res.end(JSON.stringify(result));
                    } catch (e) {
                        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                        res.end(JSON.stringify({ success: true, text: stdout.trim() }));
                    }
                });
                return;
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
                return;
            }
        }

        // Handle raw binary file upload
        const tempFileName = `temp_audio_${Date.now()}.ogg`;
        const tempFilePath = path.join(PUBLIC_DIR, tempFileName);
        
        fs.writeFile(tempFilePath, buffer, err => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: false, error: 'Failed to write temp audio file' }));
                return;
            }

            execFile('python', [pyScript, tempFilePath], { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }, (pyErr, stdout, stderr) => {
                // Clean up temp file
                if (fs.existsSync(tempFilePath)) {
                    try { fs.unlinkSync(tempFilePath); } catch (e) {}
                }

                if (pyErr && !stdout) {
                    console.error('Python transcribe error:', pyErr, stderr);
                    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ success: false, error: stderr || pyErr.message }));
                    return;
                }

                try {
                    const result = JSON.parse(stdout.trim());
                    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify(result));
                } catch (e) {
                    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ success: true, text: stdout.trim() }));
                }
            });
        });
    });
}

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url.startsWith('/api/transcribe')) {
        handleApiTranscribe(req, res);
        return;
    }
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

