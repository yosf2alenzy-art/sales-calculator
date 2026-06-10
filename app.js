// Translations Dictionary
const translations = {
    ar: {
        title: "حاسبة الخصومات المتسلسلة",
        subtitle: "أداة حسابات المبيعات الذكية ومشاركتها مع العملاء",
        productsTitle: "المنتجات والأسعار",
        addProduct: "إضافة منتج",
        productPlaceholder: "اسم المنتج (اختياري)",
        unitPrice: "سعر الوحدة",
        quantity: "الكمية",
        currency: "العملة",
        customCurrencyLabel: "اكتب العملة المخصصة",
        customCurrencyPlaceholder: "مثال: يورو",
        applyVat: "تطبيق ضريبة القيمة المضافة",
        discountsTitle: "سلسلة الخصومات",
        addDiscount: "إضافة خصم",
        percentDiscount: "خصم نسبة (%)",
        fixedDiscount: "خصم مبلغ ثابت",
        resUnitPrice: "سعر الوحدة:",
        resQuantity: "الكمية:",
        resOriginalTotal: "إجمالي السعر الأصلي:",
        stepLabel: "الخطوة",
        resTotalDiscount: "إجمالي مبلغ الخصم:",
        resEffectiveDiscount: "النسبة الفعلية الكلية للخصم:",
        resPriceBeforeVat: "السعر بعد الخصم (قبل الضريبة):",
        resVatLabel: "ضريبة القيمة المضافة",
        resFinalPriceVat: "السعر النهائي الصافي (شامل الضريبة):",
        resFinalPriceNoVat: "السعر النهائي الصافي:",
        btnShareWhatsApp: "إرسال عبر واتساب",
        btnCopyReport: "نسخ التقرير المنسق",
        toastSuccess: "تم نسخ التقرير بنجاح! 🎉",
        noDiscounts: "لا توجد خطوات حسابية حالياً.",
        noProducts: "لا توجد منتجات مضافة. اضغط على 'إضافة منتج' للبدء.",
        signature: "عمل : يوسف عيد",
        shareReportTitle: "تقرير الحساب والخصومات المتسلسلة",
        shareProductsHeader: "المنتجات:",
        shareDiscountsHeader: "الخصومات المطبقة بالتسلسل:",
        shareOriginalTotal: "إجمالي السعر الأصلي:",
        shareTotalSaved: "إجمالي مبلغ الوفر:",
        shareEffectivePct: "نسبة الخصم الكلية الفعلية:",
        shareBeforeVat: "السعر قبل الضريبة:",
        shareVat: "ضريبة القيمة المضافة",
        shareFinalPriceVat: "السعر النهائي الصافي (شامل الضريبة):",
        shareFinalPriceNoVat: "السعر النهائي الصافي:",
        calcAppLabel: "تم الحساب عبر حاسبة المبيعات الذكية ✨",
        optSAR: "ريال سعودي (SAR)",
        optEGP: "جنيه مصري (EGP)",
        optAED: "درهم إماراتي (AED)",
        optKWD: "دينار كويتي (KWD)",
        optUSD: "دولار أمريكي ($)",
        optCustom: "أخرى (مخصص)",
        presetTitle: "نمط الخصم المعتمد",
        savePreset: "حفظ النمط",
        presetNamePlaceholder: "اسم النمط الجديد...",
        presetDefaultName: "نمط مخصص",
        defaultPreset1: "الخصم المعتمد 1",
        defaultPreset2: "الخصم المعتمد 2",
        addPercentDiscount: "خصم نسبة",
        addFixedDiscount: "خصم مبلغ",
        themeLabel: "المظهر:",
        themeRoyalDark: "داكن ملكي",
        themeLuxuryGold: "ذهبي فاخر",
        themeEmeraldGreen: "أخضر زمردي",
        themeClassicBlue: "أزرق كلاسيكي",
        themeElegantLight: "مضيء أنيق",
        headerCreator: "عمل : يوسف عيد"
    },
    en: {
        title: "Sequential Discount Calculator",
        subtitle: "Smart Sales Calculations & Client Sharing Tool",
        productsTitle: "Products & Prices",
        addProduct: "Add Product",
        productPlaceholder: "Product Name (Optional)",
        unitPrice: "Unit Price",
        quantity: "Qty",
        currency: "Currency",
        customCurrencyLabel: "Type Custom Currency",
        customCurrencyPlaceholder: "e.g. Euro",
        applyVat: "Apply Value Added Tax (VAT)",
        discountsTitle: "Sequential Discounts",
        addDiscount: "Add Discount",
        addPercentDiscount: "+ Percent",
        addFixedDiscount: "+ Amount",
        percentDiscount: "Percent Discount (%)",
        fixedDiscount: "Fixed Amount Discount",
        resUnitPrice: "Unit Price:",
        resQuantity: "Quantity:",
        resOriginalTotal: "Original Total Price:",
        stepLabel: "Step",
        resTotalDiscount: "Total Discount Value:",
        resEffectiveDiscount: "Effective Total Discount:",
        resPriceBeforeVat: "Price after Discount (before VAT):",
        resVatLabel: "Value Added Tax",
        resFinalPriceVat: "Final Net Price (incl. VAT):",
        resFinalPriceNoVat: "Final Net Price:",
        btnShareWhatsApp: "Share on WhatsApp",
        btnCopyReport: "Copy Formatted Report",
        toastSuccess: "Report copied successfully! 🎉",
        noDiscounts: "No calculation steps currently.",
        noProducts: "No products added. Click 'Add Product' to start.",
        signature: "Made by: Yousef Eid",
        shareReportTitle: "Sales & Sequential Discounts Calculation Report",
        shareProductsHeader: "Products:",
        shareDiscountsHeader: "Applied Sequential Discounts:",
        shareOriginalTotal: "Original Total Price:",
        shareTotalSaved: "Total Amount Saved:",
        shareEffectivePct: "Effective Discount Rate:",
        shareBeforeVat: "Price before VAT:",
        shareVat: "VAT",
        shareFinalPriceVat: "Final Net Price (incl. VAT):",
        shareFinalPriceNoVat: "Final Net Price:",
        calcAppLabel: "Calculated via Smart Sales Calculator ✨",
        optSAR: "Saudi Riyal (SAR)",
        optEGP: "Egyptian Pound (EGP)",
        optAED: "UAE Dirham (AED)",
        optKWD: "Kuwaiti Dinar (KWD)",
        optUSD: "US Dollar ($)",
        optCustom: "Other (Custom)",
        presetTitle: "Discount Template",
        savePreset: "Save Current",
        presetNamePlaceholder: "New template name...",
        presetDefaultName: "Custom Template",
        defaultPreset1: "Approved Discount 1",
        defaultPreset2: "Approved Discount 2",
        themeLabel: "Theme:",
        themeRoyalDark: "Royal Dark",
        themeLuxuryGold: "Luxury Gold",
        themeEmeraldGreen: "Emerald Green",
        themeClassicBlue: "Classic Blue",
        themeElegantLight: "Elegant Light",
        headerCreator: "Made by: Yousef Eid"
    }
};

// Currency Display Symbols Lookup
const currencyDisplaySymbols = {
    ar: {
        SAR: 'ر.س',
        EGP: 'ج.م',
        AED: 'د.إ',
        KWD: 'د.ك',
        USD: '$'
    },
    en: {
        SAR: 'SAR',
        EGP: 'EGP',
        AED: 'AED',
        KWD: 'KWD',
        USD: '$'
    }
};

// Application State
let state = {
    language: 'ar',
    currency: 'SAR',
    customCurrency: 'يورو',
    activePresetId: 'preset_1', // active template id
    theme: 'luxury-gold',
    applyVat: true,
    vatRate: 15,
    products: [
        { id: generateId(), name: '', price: 1000, quantity: 1 }
    ],
    discounts: [
        { id: generateId(), type: 'percent', value: 35 },
        { id: generateId(), type: 'percent', value: 5 },
        { id: generateId(), type: 'percent', value: 5 }
    ],
    presets: [
        {
            id: 'preset_1',
            isSystem: true,
            nameKey: 'defaultPreset1',
            discounts: [
                { type: 'percent', value: 35 },
                { type: 'percent', value: 5 },
                { type: 'percent', value: 5 }
            ]
        },
        {
            id: 'preset_2',
            isSystem: true,
            nameKey: 'defaultPreset2',
            discounts: [
                { type: 'percent', value: 6 }
            ]
        }
    ]
};

// Unique ID Generator
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Precise round to 2 decimal places to avoid JS floating-point issues
function preciseRound(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

// Convert Arabic-Indic and Persian-Urdu numerals to Latin (English) digits
function toEnglishDigits(str) {
    if (typeof str !== 'string') str = String(str);
    const arabicIndic = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
    const persianUrdu = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    for (let i = 0; i < 10; i++) {
        str = str.replace(arabicIndic[i], i).replace(persianUrdu[i], i);
    }
    return str;
}

// DOM Elements
const btnLangAr = document.getElementById('btnLangAr');
const btnLangEn = document.getElementById('btnLangEn');
const themeSelect = document.getElementById('themeSelect');
const productsListContainer = document.getElementById('productsList');
const btnAddProduct = document.getElementById('btnAddProduct');
const currencySelect = document.getElementById('currencySelect');
const customCurrencyGroup = document.getElementById('customCurrencyGroup');
const customCurrencyInput = document.getElementById('customCurrency');
const discountListContainer = document.getElementById('discountList');
const btnAddPercentDiscount = document.getElementById('btnAddPercentDiscount');
const btnAddFixedDiscount = document.getElementById('btnAddFixedDiscount');
const btnShareWhatsApp = document.getElementById('btnShareWhatsApp');
const btnCopyReport = document.getElementById('btnCopyReport');
const toastMessage = document.getElementById('toastMessage');

// Preset elements
const presetsListContainer = document.getElementById('presetsList');
const btnSavePreset = document.getElementById('btnSavePreset');
const newPresetNameInput = document.getElementById('newPresetName');

// VAT Elements
const applyVatCheckbox = document.getElementById('applyVat');
const vatRateInput = document.getElementById('vatRate');
const vatRowBefore = document.getElementById('vatRowBefore');
const vatRowAmount = document.getElementById('vatRowAmount');
const resPriceBeforeVat = document.getElementById('resPriceBeforeVat');
const resVatRateLabel = document.getElementById('resVatRateLabel');
const resVatValue = document.getElementById('resVatValue');
const resFinalPriceLabel = document.getElementById('resFinalPriceLabel');

// Result elements
const resultsProductsSummary = document.getElementById('resultsProductsSummary');
const resOriginalPrice = document.getElementById('resOriginalPrice');
const resTotalDiscountValue = document.getElementById('resTotalDiscountValue');
const resEffectiveDiscountPct = document.getElementById('resEffectiveDiscountPct');
const resFinalPrice = document.getElementById('resFinalPrice');
const breakdownFlow = document.getElementById('breakdownFlow');
const footerCredit = document.getElementById('footerCredit');

// Check if the current device is a mobile device (by UserAgent or screen width)
function isMobileDevice() {
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 768;
    return isMobileUA || isSmallScreen;
}

// Apply custom CSS theme class to body
function applyTheme(theme) {
    document.body.className = '';
    if (theme && theme !== 'luxury-gold') {
        document.body.classList.add('theme-' + theme);
    }
}

// Load state from localStorage on init
function init() {
    // Increment version key (v9) to clear user's old caches and apply Latin digit inputs
    const savedState = localStorage.getItem('sales_calculator_state_v9');
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            // Verify structure
            if (!Array.isArray(state.products)) {
                state.products = [{ id: generateId(), name: '', price: 1000, quantity: 1 }];
            }
            if (!Array.isArray(state.discounts)) state.discounts = [];
            if (!Array.isArray(state.presets)) {
                // Restore defaults if corrupted
                state.presets = [
                    {
                        id: 'preset_1',
                        isSystem: true,
                        nameKey: 'defaultPreset1',
                        discounts: [
                            { type: 'percent', value: 35 },
                            { type: 'percent', value: 5 },
                            { type: 'percent', value: 5 }
                        ]
                    },
                    {
                        id: 'preset_2',
                        isSystem: true,
                        nameKey: 'defaultPreset2',
                        discounts: [
                            { type: 'percent', value: 6 }
                        ]
                    }
                ];
            }
            if (!state.language) state.language = 'ar';
        } catch (e) {
            console.error('Failed to parse saved state, using defaults', e);
        }
    }

    // Load initial values to currency list based on currency option
    currencySelect.value = state.currency;
    customCurrencyInput.value = state.customCurrency;

    // Toggle custom currency field visibility
    toggleCustomCurrencyVisibility();

    // Set initial VAT values
    if (state.applyVat === undefined) state.applyVat = true;
    if (state.vatRate === undefined) state.vatRate = 15;
    applyVatCheckbox.checked = state.applyVat;
    vatRateInput.value = state.vatRate;

    // Set theme values based on device type
    if (isMobileDevice()) {
        state.theme = 'luxury-gold';
    } else {
        // If computer: if no saved theme in localStorage, default to royal-dark
        const hasSavedTheme = localStorage.getItem('sales_calculator_state_v9') !== null;
        if (!hasSavedTheme) {
            state.theme = 'royal-dark';
        }
    }
    themeSelect.value = state.theme;
    applyTheme(state.theme);

    // Switch Language Setup
    setLanguage(state.language);

    setupEventListeners();
}

// Setup all event listeners
function setupEventListeners() {
    btnLangAr.addEventListener('click', () => setLanguage('ar'));
    btnLangEn.addEventListener('click', () => setLanguage('en'));

    btnSavePreset.addEventListener('click', saveCurrentDiscountsAsPreset);

    themeSelect.addEventListener('change', () => {
        state.theme = themeSelect.value;
        applyTheme(state.theme);
        saveState();
    });

    btnAddProduct.addEventListener('click', () => {
        state.products.push({
            id: generateId(),
            name: '',
            price: 1000,
            quantity: 1
        });
        saveState();
        renderProducts();
        calculate();
    });

    currencySelect.addEventListener('change', () => {
        state.currency = currencySelect.value;
        toggleCustomCurrencyVisibility();
        saveState();
        renderProducts(); // Update currency labels on products list
        renderDiscounts(); // Update currency labels on discounts
        calculate();
        renderPresets(); // Update preset badges symbols
    });

    customCurrencyInput.addEventListener('input', () => {
        state.customCurrency = customCurrencyInput.value;
        saveState();
        renderProducts();
        renderDiscounts();
        calculate();
        renderPresets();
    });

    applyVatCheckbox.addEventListener('change', () => {
        state.applyVat = applyVatCheckbox.checked;
        saveState();
        calculate();
    });

    vatRateInput.addEventListener('input', () => {
        let val = vatRateInput.value;
        val = toEnglishDigits(val);
        val = val.replace(/[^0-9.]/g, '');
        const parts = val.split('.');
        if (parts.length > 2) {
            val = parts[0] + '.' + parts.slice(1).join('');
        }
        vatRateInput.value = val;
        state.vatRate = parseFloat(val) || 0;
        saveState();
        calculate();
    });

    vatRateInput.addEventListener('blur', () => {
        vatRateInput.value = state.vatRate;
    });

    btnAddPercentDiscount.addEventListener('click', () => {
        state.discounts.push({
            id: generateId(),
            type: 'percent',
            value: 5
        });
        state.activePresetId = null;
        saveState();
        renderDiscounts();
        calculate();
        renderPresets();
    });

    btnAddFixedDiscount.addEventListener('click', () => {
        state.discounts.push({
            id: generateId(),
            type: 'fixed',
            value: 50
        });
        state.activePresetId = null;
        saveState();
        renderDiscounts();
        calculate();
        renderPresets();
    });

    btnCopyReport.addEventListener('click', copyReportToClipboard);
    btnShareWhatsApp.addEventListener('click', shareOnWhatsApp);
}

// Set active language and translate UI elements
function setLanguage(lang) {
    state.language = lang;
    saveState();

    // Set language direction and lang attributes
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Update active class on buttons
    if (lang === 'ar') {
        btnLangAr.classList.add('active');
        btnLangEn.classList.remove('active');
    } else {
        btnLangEn.classList.add('active');
        btnLangAr.classList.remove('active');
    }

    // Translate all static texts
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Keep child icons if present (e.g. <i>)
            const icon = element.querySelector('i');
            if (icon) {
                element.innerHTML = icon.outerHTML + ' ' + translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });


    // Re-render lists with new language configurations
    renderProducts();
    renderDiscounts();
    renderPresets();
    calculate();
}

// Toggle visibility of Custom Currency Input field
function toggleCustomCurrencyVisibility() {
    if (state.currency === 'custom') {
        customCurrencyGroup.style.display = 'flex';
    } else {
        customCurrencyGroup.style.display = 'none';
    }
}

// Get the currently active currency label in the correct language
function getActiveCurrency() {
    if (state.currency === 'custom') {
        return state.customCurrency;
    }
    const lang = state.language;
    if (currencyDisplaySymbols[lang] && currencyDisplaySymbols[lang][state.currency]) {
        return currencyDisplaySymbols[lang][state.currency];
    }
    return state.currency;
}

// Render presets vertically
function renderPresets() {
    presetsListContainer.innerHTML = '';
    const lang = state.language;
    const currency = getActiveCurrency();

    state.presets.forEach(preset => {
        const item = document.createElement('div');
        item.className = `preset-item ${state.activePresetId === preset.id ? 'active' : ''}`;
        
        // Translate name
        const presetName = preset.isSystem ? translations[lang][preset.nameKey] : preset.name;

        item.innerHTML = `
            <div class="preset-item-info">
                <span class="preset-item-name">${presetName}</span>
            </div>
            ${!preset.isSystem ? `
                <button type="button" class="btn-delete delete-preset-btn" title="حذف النمط" style="width: 2rem; height: 2rem; padding: 0;" aria-label="حذف النمط">
                    <i class="fa-solid fa-trash-can" style="font-size: 0.9rem;"></i>
                </button>
            ` : ''}
        `;

        // Event listener to select template
        item.addEventListener('click', (e) => {
            // If delete button was clicked, don't select
            if (e.target.closest('.delete-preset-btn')) return;
            selectPreset(preset.id);
        });

        // Event listener to delete custom template
        if (!preset.isSystem) {
            const deleteBtn = item.querySelector('.delete-preset-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deletePreset(preset.id);
            });
        }

        presetsListContainer.appendChild(item);
    });
}

// Apply preset values
function selectPreset(presetId) {
    const targetPreset = state.presets.find(p => p.id === presetId);
    if (!targetPreset) return;

    state.activePresetId = presetId;

    // Apply preset discounts mapping to dynamic state
    state.discounts = targetPreset.discounts.map(d => ({
        id: generateId(),
        type: d.type,
        value: d.value
    }));

    saveState();
    renderDiscounts();
    renderPresets();
    calculate();
}

// Save current discounts list as a new custom preset
function saveCurrentDiscountsAsPreset() {
    const lang = state.language;
    if (state.discounts.length === 0) return;

    let inputName = newPresetNameInput.value.trim();
    if (!inputName) {
        const customCount = state.presets.filter(p => !p.isSystem).length + 1;
        inputName = `${translations[lang].presetDefaultName} ${customCount}`;
    }

    const newPreset = {
        id: generateId(),
        isSystem: false,
        name: inputName,
        discounts: state.discounts.map(d => ({
            type: d.type,
            value: d.value
        }))
    };

    state.presets.push(newPreset);
    state.activePresetId = newPreset.id;
    newPresetNameInput.value = ''; // clear input

    saveState();
    renderPresets();
    calculate();
}

// Delete custom preset
function deletePreset(presetId) {
    state.presets = state.presets.filter(p => p.id !== presetId);
    if (state.activePresetId === presetId) {
        state.activePresetId = null;
    }
    saveState();
    renderPresets();
    calculate();
}

// Render dynamic products list
function renderProducts() {
    productsListContainer.innerHTML = '';
    const lang = state.language;
    const currency = getActiveCurrency();

    if (state.products.length === 0) {
        productsListContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 1.5rem 0; font-size: 1.1rem; font-weight: 700;">
                ${translations[lang].noProducts}
            </div>
        `;
        return;
    }

    state.products.forEach((product, index) => {
        const row = document.createElement('div');
        row.className = 'product-item';
        row.dataset.id = product.id;

        row.innerHTML = `
            <input type="text" class="product-name-input" value="${product.name}" 
                placeholder="${translations[lang].productPlaceholder} ${index + 1}" style="text-align: right;">
            
            <div class="input-container">
                <input type="text" inputmode="decimal" pattern="[0-9.]*" class="product-value-input product-price-input" value="${product.price}" placeholder="${translations[lang].unitPrice}">
                <span class="input-icon-left">${currency}</span>
            </div>

            <div class="input-container">
                <input type="text" inputmode="numeric" pattern="[0-9]*" class="product-value-input product-qty-input" value="${product.quantity}" placeholder="${translations[lang].quantity}">
                <span class="input-icon-left"><i class="fa-solid fa-calculator"></i></span>
            </div>

            <button type="button" class="btn-delete" title="حذف" aria-label="حذف">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;

        // Event listeners for product items
        const nameInput = row.querySelector('.product-name-input');
        const priceInput = row.querySelector('.product-price-input');
        const qtyInput = row.querySelector('.product-qty-input');
        const deleteBtn = row.querySelector('.btn-delete');

        // Text align configuration based on language
        nameInput.style.textAlign = lang === 'ar' ? 'right' : 'left';

        nameInput.addEventListener('input', () => {
            product.name = nameInput.value;
            saveState();
            calculate(); // Update WhatsApp summary report dynamically
        });

        priceInput.addEventListener('input', () => {
            let val = priceInput.value;
            val = toEnglishDigits(val);
            val = val.replace(/[^0-9.]/g, '');
            const parts = val.split('.');
            if (parts.length > 2) {
                val = parts[0] + '.' + parts.slice(1).join('');
            }
            priceInput.value = val;
            product.price = parseFloat(val) || 0;
            saveState();
            calculate();
        });

        priceInput.addEventListener('blur', () => {
            priceInput.value = product.price;
        });

        qtyInput.addEventListener('input', () => {
            let val = qtyInput.value;
            val = toEnglishDigits(val);
            val = val.replace(/[^0-9]/g, '');
            qtyInput.value = val;
            product.quantity = Math.max(1, parseInt(val, 10) || 1);
            saveState();
            calculate();
        });

        qtyInput.addEventListener('blur', () => {
            qtyInput.value = product.quantity;
        });

        deleteBtn.addEventListener('click', () => {
            state.products = state.products.filter(p => p.id !== product.id);
            saveState();
            renderProducts();
            calculate();
        });

        productsListContainer.appendChild(row);
    });
}

// Render dynamic discount inputs list
function renderDiscounts() {
    discountListContainer.innerHTML = '';
    const lang = state.language;
    const currency = getActiveCurrency();
    
    if (state.discounts.length === 0) {
        discountListContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 1.5rem 0; font-size: 1.1rem; font-weight: 700;">
                ${translations[lang].noDiscounts}
            </div>
        `;
        return;
    }

    state.discounts.forEach((discount, index) => {
        const item = document.createElement('div');
        item.className = 'discount-item';
        item.dataset.id = discount.id;

        item.innerHTML = `
            <div class="discount-number">${index + 1}</div>
            
            <select class="discount-type-select" aria-label="نوع الخصم">
                <option value="percent" ${discount.type === 'percent' ? 'selected' : ''}>${translations[lang].percentDiscount}</option>
                <option value="fixed" ${discount.type === 'fixed' ? 'selected' : ''}>${translations[lang].fixedDiscount}</option>
            </select>
            
            <div class="input-container">
                <input type="text" inputmode="decimal" pattern="[0-9.]*" class="discount-value-input" value="${discount.value}" aria-label="قيمة الخصم">
                <span class="input-icon-left">${discount.type === 'percent' ? '%' : currency}</span>
            </div>
            
            <button type="button" class="btn-delete" title="حذف الخصم" aria-label="حذف الخصم">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;

        // Event listeners for individual items
        const typeSelect = item.querySelector('.discount-type-select');
        const valueInput = item.querySelector('.discount-value-input');
        const deleteBtn = item.querySelector('.btn-delete');
        const iconLeft = item.querySelector('.input-icon-left');

        typeSelect.addEventListener('change', () => {
            discount.type = typeSelect.value;
            iconLeft.textContent = discount.type === 'percent' ? '%' : currency;
            state.activePresetId = null;
            saveState();
            renderPresets();
            calculate();
        });

        valueInput.addEventListener('input', () => {
            let val = valueInput.value;
            val = toEnglishDigits(val);
            val = val.replace(/[^0-9.]/g, '');
            const parts = val.split('.');
            if (parts.length > 2) {
                val = parts[0] + '.' + parts.slice(1).join('');
            }
            valueInput.value = val;
            discount.value = parseFloat(val) || 0;
            state.activePresetId = null;
            saveState();
            renderPresets();
            calculate();
        });

        valueInput.addEventListener('blur', () => {
            valueInput.value = discount.value;
        });

        deleteBtn.addEventListener('click', () => {
            state.discounts = state.discounts.filter(d => d.id !== discount.id);
            state.activePresetId = null;
            saveState();
            renderDiscounts();
            renderPresets();
            calculate();
        });

        discountListContainer.appendChild(item);
    });
}

// Perform sequential discount calculation
function calculate() {
    const lang = state.language;
    const currency = getActiveCurrency();

    // Render products summary list inside results card
    resultsProductsSummary.innerHTML = '';
    let totalOriginalPrice = 0;
    const totalQuantity = state.products.reduce((sum, p) => sum + (p.quantity || 0), 0);

    if (state.products.length > 0) {
        state.products.forEach((product, index) => {
            const prodName = product.name.trim() || `${translations[lang].productPlaceholder} ${index + 1}`;
            const lineTotal = product.price * product.quantity;
            totalOriginalPrice += lineTotal;

            const prodRow = document.createElement('div');
            prodRow.style.display = 'flex';
            prodRow.style.justify = 'space-between';
            prodRow.style.fontSize = '1.05rem';
            prodRow.style.color = 'var(--text-secondary)';
            prodRow.style.fontWeight = '700';
            
            prodRow.innerHTML = `
                <span>${prodName} (${product.quantity} × ${formatNumber(product.price)} ${currency})</span>
                <span style="color: var(--text-primary);">${formatNumber(lineTotal)} ${currency}</span>
            `;
            resultsProductsSummary.appendChild(prodRow);
        });
    } else {
        totalOriginalPrice = 0;
        resultsProductsSummary.innerHTML = `
            <div style="color: var(--text-muted); font-size: 1.05rem; font-weight: 700; text-align: center;">
                ${translations[lang].noProducts}
            </div>
        `;
    }

    resOriginalPrice.textContent = `${formatNumber(totalOriginalPrice)} ${currency}`;

    let currentPrice = totalOriginalPrice;
    breakdownFlow.innerHTML = '';

    if (state.discounts.length === 0 || totalOriginalPrice <= 0) {
        breakdownFlow.innerHTML = `
            <div style="color: var(--text-muted); font-size: 1.05rem; font-weight: 700; text-align: center;">
                ${translations[lang].noDiscounts}
            </div>
        `;
        resTotalDiscountValue.textContent = `0.00 ${currency}`;
        resEffectiveDiscountPct.textContent = '0.00%';
        updateVatLayout(totalOriginalPrice, 0, currency);
        return;
    }

    state.discounts.forEach((discount, index) => {
        const startValue = currentPrice;
        let discountAmount = 0;
        let detailsText = '';

        if (discount.type === 'percent') {
            const pct = discount.value || 0;
            discountAmount = startValue * (pct / 100);
            discountAmount = preciseRound(discountAmount);
            detailsText = `${pct}%`;
        } else {
            const val = discount.value || 0;
            discountAmount = preciseRound(val * totalQuantity);
            if (totalQuantity > 1) {
                detailsText = `${formatNumber(val)} ${currency} × ${totalQuantity}`;
            } else {
                detailsText = `${formatNumber(val)} ${currency}`;
            }
        }

        const endValue = Math.max(0, preciseRound(startValue - discountAmount));
        currentPrice = endValue;

        // Render this step in the UI breakdown
        const stepDiv = document.createElement('div');
        stepDiv.className = 'breakdown-step';
        stepDiv.innerHTML = `
            <span class="step-meta">${translations[lang].stepLabel} ${index + 1}:</span>
            <span class="step-calc">
                ${formatNumber(startValue)} 
                <span class="discount-detail"> - ${detailsText} (${formatNumber(discountAmount)})</span>
                ➔ <span class="new-subtotal">${formatNumber(endValue)} ${currency}</span>
            </span>
        `;
        breakdownFlow.appendChild(stepDiv);
    });

    const netPriceBeforeVat = currentPrice;
    const totalDiscountValue = Math.max(0, preciseRound(totalOriginalPrice - netPriceBeforeVat));
    const effectiveDiscountPct = totalOriginalPrice > 0 ? (totalDiscountValue / totalOriginalPrice) * 100 : 0;

    // Update main discount result tags
    resTotalDiscountValue.textContent = `${formatNumber(totalDiscountValue)} ${currency}`;
    resEffectiveDiscountPct.textContent = `${effectiveDiscountPct.toFixed(2)}%`;

    // Apply VAT calculations and update layout
    updateVatLayout(netPriceBeforeVat, totalOriginalPrice, currency);
}

// Handle VAT layout toggling and displaying
function updateVatLayout(netPriceBeforeVat, originalPrice, currency) {
    const lang = state.language;
    let vatAmount = 0;
    
    if (state.applyVat) {
        vatAmount = preciseRound(netPriceBeforeVat * (state.vatRate / 100));
        vatRowBefore.style.display = 'flex';
        vatRowAmount.style.display = 'flex';
        resPriceBeforeVat.textContent = `${formatNumber(netPriceBeforeVat)} ${currency}`;
        resVatRateLabel.textContent = formatNumberForVatLabel(state.vatRate);
        resVatValue.textContent = `${formatNumber(vatAmount)} ${currency}`;
        resFinalPriceLabel.textContent = translations[lang].resFinalPriceVat;
    } else {
        vatRowBefore.style.display = 'none';
        vatRowAmount.style.display = 'none';
        resFinalPriceLabel.textContent = translations[lang].resFinalPriceNoVat;
    }

    const finalPrice = preciseRound(netPriceBeforeVat + vatAmount);
    resFinalPrice.textContent = `${formatNumber(finalPrice)} ${currency}`;
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('sales_calculator_state_v9', JSON.stringify(state));
}

// Force formatting with English (Latin) numbers always
function formatNumber(num) {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Format VAT rate label with latin digits
function formatNumberForVatLabel(num) {
    return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

// Generate text report dynamically in the current language
function generateTextReport() {
    const lang = state.language;
    const currency = getActiveCurrency();
    
    let report = `📊 *${translations[lang].shareReportTitle}*\n`;
    report += `-------------------------------------------\n`;
    
    // Add Products summary
    if (state.products.length > 0) {
        report += `🛍️ *${translations[lang].shareProductsHeader}*\n`;
        state.products.forEach((product, index) => {
            const prodName = product.name.trim() || `${translations[lang].productPlaceholder} ${index + 1}`;
            report += `  ${index + 1}. ${prodName}: ${product.quantity} × ${formatNumber(product.price)} ${currency} = ${formatNumber(product.price * product.quantity)} ${currency}\n`;
        });
        report += `\n`;
    }

    let originalPriceSum = 0;
    state.products.forEach(p => originalPriceSum += p.price * p.quantity);

    report += `💰 *${translations[lang].shareOriginalTotal}* ${formatNumber(originalPriceSum)} ${currency}\n\n`;

    let currentPrice = originalPriceSum;
    const totalQuantity = state.products.reduce((sum, p) => sum + (p.quantity || 0), 0);

    if (state.discounts.length > 0 && originalPriceSum > 0) {
        report += `📉 *${translations[lang].shareDiscountsHeader}*\n`;
        
        const numberEmojis = ['➊', '➋', '➌', '➍', '➎', '➏', '➐', '➑', '➒', '➓'];

        state.discounts.forEach((discount, index) => {
            const startValue = currentPrice;
            let discountAmount = 0;
            let typeLabel = '';

            if (discount.type === 'percent') {
                const pct = discount.value || 0;
                discountAmount = preciseRound(startValue * (pct / 100));
                typeLabel = `${pct}%`;
            } else {
                const val = discount.value || 0;
                discountAmount = preciseRound(val * totalQuantity);
                if (totalQuantity > 1) {
                    typeLabel = `${formatNumber(val)} ${currency} × ${totalQuantity}`;
                } else {
                    typeLabel = `${formatNumber(val)} ${currency}`;
                }
            }

            const endValue = Math.max(0, preciseRound(startValue - discountAmount));
            currentPrice = endValue;
            
            const emoji = numberEmojis[index] || `[${index + 1}]`;
            report += `  ${emoji} ${translations[lang].stepLabel} ${index + 1}: ${formatNumber(startValue)} - ${typeLabel} ➔ ${formatNumber(endValue)} ${currency}\n`;
        });
        
        const netPriceBeforeVat = currentPrice;
        const totalDiscountValue = Math.max(0, preciseRound(originalPriceSum - netPriceBeforeVat));
        const effectiveDiscountPct = originalPriceSum > 0 ? (totalDiscountValue / originalPriceSum) * 100 : 0;

        report += `\n-------------------------------------------\n`;
        report += `🎁 *${translations[lang].shareTotalSaved}* *${formatNumber(totalDiscountValue)} ${currency}*\n`;
        report += `📈 *${translations[lang].shareEffectivePct}* *${effectiveDiscountPct.toFixed(2)}%*\n`;

        let finalPrice = netPriceBeforeVat;
        if (state.applyVat) {
            const vatAmount = preciseRound(netPriceBeforeVat * (state.vatRate / 100));
            finalPrice = preciseRound(netPriceBeforeVat + vatAmount);
            report += `💵 *${translations[lang].shareBeforeVat}* ${formatNumber(netPriceBeforeVat)} ${currency}\n`;
            report += `⚡ *${translations[lang].shareVat} (${state.vatRate}%):* ${formatNumber(vatAmount)} ${currency}\n`;
            report += `💵 *${translations[lang].shareFinalPriceVat}* *${formatNumber(finalPrice)} ${currency}*\n`;
        } else {
            report += `💵 *${translations[lang].shareFinalPriceNoVat}* *${formatNumber(finalPrice)} ${currency}*\n`;
        }
    } else {
        report += `⚠️ ${translations[lang].noDiscounts}\n`;
        let finalPrice = originalPriceSum;
        if (state.applyVat) {
            const vatAmount = preciseRound(originalPriceSum * (state.vatRate / 100));
            finalPrice = preciseRound(originalPriceSum + vatAmount);
            report += `⚡ *${translations[lang].shareVat} (${state.vatRate}%):* ${formatNumber(vatAmount)} ${currency}\n`;
            report += `💵 *${translations[lang].shareFinalPriceVat}* *${formatNumber(finalPrice)} ${currency}*\n`;
        } else {
            report += `💵 *${translations[lang].shareFinalPriceNoVat}* *${formatNumber(finalPrice)} ${currency}*\n`;
        }
    }
    
    report += `-------------------------------------------\n`;
    report += `✍️ *${translations[lang].signature}*\n`;
    report += `📱 ${translations[lang].calcAppLabel}`;
    return report;
}

// Copy the text report to the clipboard
function copyReportToClipboard() {
    const text = generateTextReport();
    const lang = state.language;
    
    // Modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => showToast(lang)).catch(err => {
            console.error('Failed to copy text: ', err);
            fallbackCopyText(text, lang);
        });
    } else {
        fallbackCopyText(text, lang);
    }
}

// Fallback method for older browsers or environments
function fallbackCopyText(text, lang) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";  // Avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) showToast(lang);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
}

// Show Toast feedback in the correct language
function showToast(lang) {
    toastMessage.textContent = translations[lang].toastSuccess;
    toastMessage.classList.add('show');
    setTimeout(() => {
        toastMessage.classList.remove('show');
    }, 2500);
}

// Share the report directly to WhatsApp
function shareOnWhatsApp() {
    const text = generateTextReport();
    const urlEncodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${urlEncodedText}`;
    window.open(whatsappUrl, '_blank');
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);
