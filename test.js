// Test runner for Sales Calculator logic
const fs = require('fs');
const path = require('path');

// Mock window and document
global.window = {
    addEventListener: () => {}
};

// Map to store elements for assertion checks
const elementMap = {};

const dummyElement = (id = '') => {
    const el = {
        id: id,
        value: '',
        style: { display: '' },
        classList: {
            add: () => {},
            remove: () => {},
            contains: () => {}
        },
        addEventListener: () => {},
        appendChild: () => {},
        setAttribute: () => {},
        querySelector: () => dummyElement(),
        querySelectorAll: () => [dummyElement()],
        innerHTML: '',
        textContent: ''
    };
    if (id) {
        elementMap[id] = el;
    }
    return el;
};

global.document = {
    getElementById: (id) => {
        if (elementMap[id]) return elementMap[id];
        return dummyElement(id);
    },
    querySelectorAll: () => [],
    createElement: (tag) => dummyElement(),
    documentElement: {
        dir: '',
        lang: ''
    }
};

global.localStorage = {
    getItem: () => null,
    setItem: () => {}
};

// Load app.js
const appJsPath = path.join(__dirname, 'app.js');
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Replace declarations to make them global properties
appJsContent = appJsContent.replace('let state =', 'global.state =');
appJsContent = appJsContent.replace('function calculate()', 'global.calculate = function calculate()');
appJsContent = appJsContent.replace('function preciseRound(num)', 'global.preciseRound = function preciseRound(num)');

// We want to run app.js in this context
// Let's eval it so that it registers the variables and functions on global
eval(appJsContent);

// Assert helper
function assert(condition, message) {
    if (!condition) {
        throw new Error(`Assertion failed: ${message}`);
    }
}

console.log("Starting Sales Calculator unit tests...");

// Test Scenario:
// 1 Product: price=1500, quantity=8. TotalOriginalPrice = 12000.
// Discounts:
// 1. Percent: 10%
// 2. Fixed: 100
// Expected calculations:
// totalOriginalPrice = 12000
// Step 1: 12000 - 10% = 12000 - 1200 = 10800
// Step 2: 10800 - (100 * 8) = 10800 - 800 = 10000
// netPriceBeforeVat = 10000
// totalDiscount = 2000
// VAT (15%) = 1500
// finalPrice = 11500

// Setup state
state.groups = [
    {
        id: 'group_1',
        name: 'ACs',
        products: [
            { id: 'prod_1', name: 'AC', price: 1500, quantity: 8 }
        ],
        discounts: [
            { id: 'disc_1', type: 'percent', value: 10 },
            { id: 'disc_2', type: 'fixed', value: 100 }
        ],
        activePresetId: null
    }
];
state.applyVat = true;
state.vatRate = 15;
state.currency = 'SAR';

// Run calculate
calculate();

// Verify results
const resOriginalPrice = elementMap['grandOriginalPrice'];
const resTotalDiscountValue = elementMap['grandTotalDiscountValue'];
const resPriceBeforeVat = elementMap['grandPriceBeforeVat'];
const resVatValue = elementMap['grandVatValue'];
const resFinalPrice = elementMap['grandFinalPrice'];

console.log(`Original Price Text: ${resOriginalPrice.textContent}`);
console.log(`Total Discount Text: ${resTotalDiscountValue.textContent}`);
console.log(`Price Before VAT: ${resPriceBeforeVat.textContent}`);
console.log(`VAT Value: ${resVatValue.textContent}`);
console.log(`Final Price: ${resFinalPrice.textContent}`);

assert(resOriginalPrice.textContent.includes("12,000.00"), "Original price should be 12,000.00");
assert(resTotalDiscountValue.textContent.includes("2,000.00"), "Total discount should be 2,000.00");
assert(resPriceBeforeVat.textContent.includes("10,000.00"), "Price before VAT should be 10,000.00");
assert(resVatValue.textContent.includes("1,500.00"), "VAT value should be 1,500.00");
assert(resFinalPrice.textContent.includes("11,500.00"), "Final price should be 11,500.00");

// Test precision rounding:
// If startValue = 29.175, let's test preciseRound
console.log(`preciseRound(29.175) = ${preciseRound(29.175)}`);
assert(preciseRound(29.175) === 29.18, "preciseRound should round 29.175 to 29.18");

console.log("All unit tests passed successfully! 🎉");
