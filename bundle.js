const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\scratch\\sales-calculator';
const htmlPath = path.join(srcDir, 'index.html');
const cssPath = path.join(srcDir, 'style.css');
const jsPath = path.join(srcDir, 'app.js');
const outputPath = path.join(srcDir, 'حاسبة_الخصومات_يوسف_الدهمشي.html');

try {
    let html = fs.readFileSync(htmlPath, 'utf8');
    const css = fs.readFileSync(cssPath, 'utf8');
    const js = fs.readFileSync(jsPath, 'utf8');

    // Replace CSS link with embedded styles
    html = html.replace(
        '<link rel="stylesheet" href="style.css">',
        () => `<style>\n${css}\n</style>`
    );

    // Replace JS script tag with embedded scripts
    html = html.replace(
        '<script src="app.js"></script>',
        () => `<script>\n${js}\n</script>`
    );

    fs.writeFileSync(outputPath, html, 'utf8');
    console.log('Successfully bundled standalone HTML file at: ' + outputPath);
} catch (err) {
    console.error('Error during bundling:', err);
}
