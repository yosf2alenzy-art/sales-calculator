const http = require('http');

const testPayload = JSON.stringify({
    url: 'https://example.com/test.mp3'
});

console.log('Sending JSON URL payload to http://localhost:3005/api/transcribe ...');

const req = http.request({
    hostname: 'localhost',
    port: 3005,
    path: '/api/transcribe',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(testPayload)
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

req.write(testPayload);
req.end();
