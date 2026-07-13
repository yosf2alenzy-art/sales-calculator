// Test runner for Sales Calculator logic
const fs = require('fs');
const path = require('path');

// Mock window and document
global.window = {
    addEventListener: () => {},
    location: { hash: '', search: '' }
};
global.sessionStorage = {
    getItem: () => null,
    setItem: () => {}
};

// Map to store elements for assertion checks
const elementMap = {};

const dummyElement = (id = '') => {
    const el = {
        id: id,
        value: '',
        checked: false,
        disabled: false,
        dataset: {},
        style: { display: '' },
        classList: {
            add: () => {},
            remove: () => {},
            contains: () => false,
            toggle: () => {}
        },
        listeners: {},
        addEventListener: function(event, callback) {
            this.listeners[event] = callback;
        },
        trigger: function(event, ...args) {
            if (this.listeners[event]) {
                this.listeners[event](...args);
            }
        },
        appendChild: () => dummyElement(),
        getAttribute: (attr) => '',
        setAttribute: (attr, val) => {},
        querySelector: () => dummyElement(),
        querySelectorAll: () => [dummyElement()],
        innerHTML: '',
        outerHTML: '',
        textContent: ''
    };
    if (id) {
        elementMap[id] = el;
    }
    return el;
};

global.document = {
    body: dummyElement('body'),
    getElementById: (id) => {
        if (elementMap[id]) return elementMap[id];
        return dummyElement(id);
    },
    querySelector: () => dummyElement(),
    querySelectorAll: () => [dummyElement()],
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
appJsContent = appJsContent.replace('function init()', 'global.init = function init()');

// We want to run app.js in this context
// Let's eval it so that it registers the variables and functions on global
eval(appJsContent);

// Initialize application listeners and settings
init();

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

// Test Scenario 2: Settings Save Validation
console.log("Starting Settings Save & Sync unit tests...");
global.alert = () => {}; // mock alert

// Grab references to settings controls
const saveBtn = elementMap['btnSaveAdminSettings'];
const titleInput = elementMap['settingsProgramTitleInput'] || dummyElement('settingsProgramTitleInput');
const showProductListCb = elementMap['settingsToggleProductList'] || dummyElement('settingsToggleProductList');
const lockThemeCb = elementMap['settingsToggleThemeLock'] || dummyElement('settingsToggleThemeLock');
const lockedThemeSelect = elementMap['settingsLockedThemeSelect'] || dummyElement('settingsLockedThemeSelect');
const disableOfflineCb = elementMap['settingsToggleDisableOffline'] || dummyElement('settingsToggleDisableOffline');

// Configure checkboxes and inputs
titleInput.value = 'حاسبة الدهمشي المميزة';
showProductListCb.checked = false;
lockThemeCb.checked = true;
lockedThemeSelect.value = 'royal-dark';
disableOfflineCb.checked = true;

// Verify state before save
assert(state.programTitle !== 'حاسبة الدهمشي المميزة', "State title should not be set yet");

// Trigger save button click event handler
assert(saveBtn && typeof saveBtn.listeners.click === 'function', "Save button click handler should be registered");
saveBtn.trigger('click');

// Assertions after save settings handler ran
assert(state.programTitle === 'حاسبة الدهمشي المميزة', "State programTitle should be updated in state");
assert(state.showProductList === false, "State showProductList should be updated to false");
assert(state.lockTheme === true, "State lockTheme should be updated to true");
assert(state.lockedTheme === 'royal-dark', "State lockedTheme should be updated to royal-dark");
assert(state.disableOffline === true, "State disableOffline should be updated to true");
assert(elementMap['mainProgramTitle'].textContent === 'حاسبة الدهمشي المميزة', "Main title DOM text should be updated immediately");

console.log("All settings unit tests passed successfully! 🎉");

// Test Scenario 3: Smart Text Parser Validation
console.log("Starting Smart Text Parser unit tests...");

assert(typeof parseTextItems === 'function', "parseTextItems should be defined");
assert(typeof cleanArabicWawPrefix === 'function', "cleanArabicWawPrefix should be defined");

// Test cleanArabicWawPrefix
assert(cleanArabicWawPrefix("وبصل") === "بصل", "Should strip leading Waw from وبصل");
assert(cleanArabicWawPrefix("ورق عنب") === "ورق عنب", "Should NOT strip leading Waw from ورق عنب");
assert(cleanArabicWawPrefix("وخيار حار") === "خيار حار", "Should strip leading Waw from وخيار حار");

// Test parseTextItems with different separators
// 1. Commas
const list1 = parseTextItems("بصل، طماط، خيار");
assert(list1.length === 3 && list1[0].name === "بصل" && list1[1].name === "طماط" && list1[2].name === "خيار", "Should parse comma-separated list");

// 2. Spaces (fallback)
const list2 = parseTextItems("بصل طماط خيار وبطاط");
assert(list2.length === 4 && list2[0].name === "بصل" && list2[1].name === "طماط" && list2[2].name === "خيار" && list2[3].name === "بطاط", "Should parse space-separated list and clean waw");

// 3. Newlines
const list3 = parseTextItems("بصل\nطماط\nخيار");
assert(list3.length === 3 && list3[0].name === "بصل" && list3[1].name === "طماط" && list3[2].name === "خيار", "Should parse newline-separated list");

// 4. "و" conjunction with spaces
const list4 = parseTextItems("بصل و طماط و خيار");
assert(list4.length === 3 && list4[0].name === "بصل" && list4[1].name === "طماط" && list4[2].name === "خيار", "Should parse list joined by space-waw-space");

// 5. Quantity parsing tests
// Digit at start
const q1 = parseTextItems("3 تفاح");
assert(q1.length === 1 && q1[0].name === "تفاح" && q1[0].quantity === 3, "Should parse '3 تفاح' as 3 of تفاح");

// Digit at end
const q2 = parseTextItems("تفاح 5");
assert(q2.length === 1 && q2[0].name === "تفاح" && q2[0].quantity === 5, "Should parse 'تفاح 5' as 5 of تفاح");

// Arabic word at start
const q3 = parseTextItems("خمسة بصل");
assert(q3.length === 1 && q3[0].name === "بصل" && q3[0].quantity === 5, "Should parse 'خمسة بصل' as 5 of بصل");

// Arabic word + unit at start
const q4 = parseTextItems("ثلاث حبات طماطم");
assert(q4.length === 1 && q4[0].name === "طماطم" && q4[0].quantity === 3, "Should parse 'ثلاث حبات طماطم' as 3 of طماطم");

// Name with number inside and quantity at end
const q5 = parseTextItems("مكيف جري 5 طن عدد 2");
assert(q5.length === 1 && q5[0].name === "مكيف جري 5 طن" && q5[0].quantity === 2, "Should parse 'مكيف جري 5 طن عدد 2' as 2 of مكيف جري 5 طن");

// Voice continuous speech (no splitSpaces)
const voiceList = parseTextItems("ملفوف بنفسجي", false);
assert(voiceList.length === 1 && voiceList[0].name === "ملفوف بنفسجي" && voiceList[0].quantity === 1, "Should not split spaces for voice input");

// 6. Price and Synonym parsing tests
const p1 = parseTextItems("مكيف جري 5 طن العدد 4 سعر 1500 ريال");
assert(p1.length === 1 && p1[0].name === "مكيف جري 5 طن" && p1[0].quantity === 4 && p1[0].price === 1500, "Should parse 'مكيف جري 5 طن العدد 4 سعر 1500 ريال'");

const p2 = parseTextItems("مكيف جري 5 طن بسعر 1500 ريال عدد 4");
assert(p2.length === 1 && p2[0].name === "مكيف جري 5 طن" && p2[0].quantity === 4 && p2[0].price === 1500, "Should parse 'مكيف جري 5 طن بسعر 1500 ريال عدد 4'");

const p3 = parseTextItems("تفاح الكمية 10 بقيمة 20.5");
assert(p3.length === 1 && p3[0].name === "تفاح" && p3[0].quantity === 10 && p3[0].price === 20.5, "Should parse 'تفاح الكمية 10 بقيمة 20.5'");

// Additional synonyms
const p4 = parseTextItems("مكيف جري 5 طن عدد 6 قيمة 2500");
assert(p4.length === 1 && p4[0].name === "مكيف جري 5 طن" && p4[0].quantity === 6 && p4[0].price === 2500, "Should parse 'قيمة'");

const p5 = parseTextItems("مكيف جري 5 طن عدد 6 مبلغ 2500");
assert(p5.length === 1 && p5[0].name === "مكيف جري 5 طن" && p5[0].quantity === 6 && p5[0].price === 2500, "Should parse 'مبلغ'");

const p6 = parseTextItems("مكيف جري 5 طن عدد 6 بمبلغ 2500");
assert(p6.length === 1 && p6[0].name === "مكيف جري 5 طن" && p6[0].quantity === 6 && p6[0].price === 2500, "Should parse 'بمبلغ'");

const p7 = parseTextItems("مكيف جري 5 طن عدد 6 بي 2500");
assert(p7.length === 1 && p7[0].name === "مكيف جري 5 طن" && p7[0].quantity === 6 && p7[0].price === 2500, "Should parse 'بي'");

const p8 = parseTextItems("مكيف جري 5 طن عدد 6 بـ 2500");
assert(p8.length === 1 && p8[0].name === "مكيف جري 5 طن" && p8[0].quantity === 6 && p8[0].price === 2500, "Should parse 'بـ'");

const p9 = parseTextItems("مكيف جري 5 طن عدد 6 ب 2500");
assert(p9.length === 1 && p9[0].name === "مكيف جري 5 طن" && p9[0].quantity === 6 && p9[0].price === 2500, "Should parse 'ب'");

console.log("All text parser unit tests passed successfully! 🎉");
console.log("All unit tests passed successfully! 🎉");

