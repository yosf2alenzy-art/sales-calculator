const fs = require('fs');
const http = require('http');

const audioPath = 'C:\\Users\\Admin\\Downloads\\WhatsApp Ptt 2026-07-20 at 2.29.47 PM.ogg';
console.log('Sending audio file to http://localhost:3005/api/transcribe ...');

const fileBuffer = fs.readFileSync(audioPath);

const req = http.request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/transcribe',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Length': fileBuffer.length
    }
}, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('\n====================================');
        console.log('API RESPONSE FROM SERVER:');
        console.log(data);
        console.log('====================================\n');
    });
});

req.on('error', err => {
    console.error('Request error:', err);
});

req.write(fileBuffer);
req.end();
