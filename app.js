// Translations Dictionary
const translations = {
    ar: {
        title: "حاسبة الدهمشي الذكية",
        subtitle: "أداة حسابات المبيعات الذكية ومشاركتها مع العملاء",
        productsTitle: "المنتجات والأسعار",
        addProduct: "إضافة منتج",
        productPlaceholder: "اسم المنتج (اختياري)",
        unitPrice: "سعر الوحدة",
        quantity: "الكمية",
        currency: "العملة:",
        customCurrencyLabel: "اكتب العملة المخصصة",
        customCurrencyPlaceholder: "مثال: يورو",
        applyVat: "الضريبة:",
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
        shareReportTitle: "تقرير بنتيجة المعادلة",
        shareProductsHeader: "المنتجات:",
        shareDiscountsHeader: "الخصومات المطبقة بالتسلسل:",
        shareOriginalTotal: "إجمالي السعر الأصلي:",
        shareTotalSaved: "إجمالي مبلغ الوفر:",
        shareEffectivePct: "نسبة الخصم الكلية الفعلية:",
        shareBeforeVat: "السعر قبل الضريبة:",
        shareVat: "ضريبة القيمة المضافة",
        shareFinalPriceVat: "السعر النهائي الصافي (شامل الضريبة):",
        shareFinalPriceNoVat: "السعر النهائي الصافي:",
        calcAppLabel: "تم الحساب عبر حاسبة الدهمشي الذكية ✨",
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
        headerCreator: "عمل : يوسف عيد",
        visitorCountLabel: "عدد زوار الحاسبة",
        usageCountLabel: "عدد مستخدمي البرنامج",
        addGroup: "إضافة مجموعة",
        groupPlaceholder: "اسم المجموعة (مثل: المجموعة الأولى)",
        groupsSectionTitle: "المجموعات والخصومات",
        groupTitle: "المجموعة",
        grandTotalHeader: "الإجمالي العام الكلي",
        grandOriginalTotal: "إجمالي السعر الأصلي الكلي:",
        grandTotalSaved: "إجمالي مبلغ الوفر الكلي:",
        grandPriceBeforeVat: "السعر الإجمالي قبل الضريبة:",
        grandFinalPriceVat: "السعر النهائي الكلي (شامل الضريبة):",
        grandFinalPriceNoVat: "السعر النهائي الكلي:",
        navLogin: "دخول الموظف",
        navLogout: "تسجيل الخروج",
        navSettings: "إعدادات الإدارة",
        loginHeader: "تسجيل دخول الموظف",
        lblUsername: "اسم المستخدم",
        lblPassword: "كلمة المرور",
        errLogin: "خطأ في اسم المستخدم أو كلمة المرور",
        btnLoginSubmit: "دخول",
        settingsHeader: "إعدادات الإدارة",
        settingsGeneral: "الإعدادات العامة",
        settingsShowProducts: "تفعيل مقترحات قائمة مكيفات جري في البحث",
        settingsLockTheme: "تثبيت مظهر موحد للحاسبة",
        settingsUserMgmt: "إدارة الموظفين والصلاحيات",
        permQuotation: "صلاحية تجهيز عرض سعر",
        btnAddUser: "إضافة موظف",
        quotationTitle: "عرض سعر رسمي",
        btnCreateQuotation: "تجهيز عرض سعر",
        errNoQuotationPermission: "عذراً، تحتاج إلى صلاحية من الإدارة لتجهيز عرض السعر. يرجى تسجيل الدخول بحساب موظف مصرح له.",
        errNotLoggedIn: "يرجى تسجيل الدخول لتجهيز عرض السعر.",
        footerCompany: "الشركة الأساسية - فرع حفر الباطن",
        pdfReportTitle: "تقرير نتائج الحسابات",
        pdfHeaderTitle: "تقرير حساب المبيعات والخصومات",
        btnCreateResultsPdf: "تصدير النتيجة PDF"
    },
    en: {
        title: "Al-Dahmashy Smart Calculator",
        subtitle: "Smart Sales Calculations & Client Sharing Tool",
        productsTitle: "Products & Prices",
        addProduct: "Add Product",
        productPlaceholder: "Product Name (Optional)",
        unitPrice: "Unit Price",
        quantity: "Qty",
        currency: "Currency:",
        customCurrencyLabel: "Type Custom Currency",
        customCurrencyPlaceholder: "e.g. Euro",
        applyVat: "Tax:",
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
        shareReportTitle: "Equation Result Report",
        shareProductsHeader: "Products:",
        shareDiscountsHeader: "Applied Sequential Discounts:",
        shareOriginalTotal: "Original Total Price:",
        shareTotalSaved: "Total Amount Saved:",
        shareEffectivePct: "Effective Discount Rate:",
        shareBeforeVat: "Price before VAT:",
        shareVat: "VAT",
        shareFinalPriceVat: "Final Net Price (incl. VAT):",
        shareFinalPriceNoVat: "Final Net Price:",
        calcAppLabel: "Calculated via Al-Dahmashy Smart Calculator ✨",
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
        headerCreator: "Made by: Yousef Eid",
        visitorCountLabel: "Calculator Visitors",
        usageCountLabel: "Calculator Users",
        addGroup: "Add Group",
        groupPlaceholder: "Group Name (e.g. Group One)",
        groupsSectionTitle: "Groups & Discounts",
        groupTitle: "Group",
        grandTotalHeader: "Grand Total",
        grandOriginalTotal: "Grand Original Total:",
        grandTotalSaved: "Grand Total Saved:",
        grandPriceBeforeVat: "Grand Total before VAT:",
        grandFinalPriceVat: "Grand Final Net (incl. VAT):",
        grandFinalPriceNoVat: "Grand Final Net Price:",
        navLogin: "Employee Login",
        navLogout: "Logout",
        navSettings: "Admin Settings",
        loginHeader: "Employee Login",
        lblUsername: "Username",
        lblPassword: "Password",
        errLogin: "Invalid username or password",
        btnLoginSubmit: "Login",
        settingsHeader: "Admin Settings",
        settingsGeneral: "General Settings",
        settingsShowProducts: "Enable Gree AC autocomplete suggestions",
        settingsLockTheme: "Lock global theme for all users",
        settingsUserMgmt: "Staff & Permissions Management",
        permQuotation: "Can create quotations",
        btnAddUser: "Add Employee",
        quotationTitle: "Official Quotation",
        btnCreateQuotation: "Create Quotation",
        errNoQuotationPermission: "Access Denied. You need management permission to generate quotations. Please log in with an authorized employee account.",
        errNotLoggedIn: "Please log in to generate quotations.",
        footerCompany: "Al-Asasiya Company - Hafar Al-Batin Branch",
        pdfReportTitle: "Calculation Results Report",
        pdfHeaderTitle: "Sales & Discount Calculation Report",
        btnCreateResultsPdf: "Export Results PDF"
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
    theme: 'luxury-gold',
    applyVat: true,
    vatRate: 15,
    showProductList: true,
    lockTheme: false,
    lockedTheme: 'luxury-gold',
    users: [
        { username: 'meyousef', password: '85197Qq', permissions: { createQuotation: true } }
    ],
    currentUser: null,
    groups: [
        {
            id: 'group_1',
            name: 'المجموعة الأولى',
            products: [
                { id: generateId(), name: '', price: 1000, quantity: 1 }
            ],
            discounts: [
                { id: generateId(), type: 'percent', value: 35 },
                { id: generateId(), type: 'percent', value: 5 },
                { id: generateId(), type: 'percent', value: 5 }
            ],
            activePresetId: 'preset_1'
        }
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

// Get generic group name based on index
function getGroupName(index, lang) {
    if (lang === 'ar') {
        const ordinals = [
            'الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة',
            'السادسة', 'السابعة', 'الثامنة', 'التاسعة', 'العاشرة',
            'الحادية عشرة', 'الثانية عشرة', 'الثالثة عشرة', 'الرابعة عشرة', 'الخامسة عشرة'
        ];
        if (index >= 0 && index < ordinals.length) {
            return `المجموعة ${ordinals[index]}`;
        }
        return `المجموعة ${index + 1}`;
    } else {
        const ordinals = [
            'One', 'Two', 'Three', 'Four', 'Five',
            'Six', 'Seven', 'Eight', 'Nine', 'Ten',
            'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen'
        ];
        if (index >= 0 && index < ordinals.length) {
            return `Group ${ordinals[index]}`;
        }
        return `Group ${index + 1}`;
    }
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

// Safe localStorage and sessionStorage wrappers to avoid SecurityErrors on local file schemes
function safeGetLocalStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.warn("localStorage access blocked:", e);
        return null;
    }
}

function safeSetLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn("localStorage access blocked:", e);
    }
}

function safeGetSessionStorage(key) {
    try {
        return sessionStorage.getItem(key);
    } catch (e) {
        console.warn("sessionStorage access blocked:", e);
        return null;
    }
}

function safeSetSessionStorage(key, value) {
    try {
        sessionStorage.setItem(key, value);
    } catch (e) {
        console.warn("sessionStorage access blocked:", e);
    }
}

// DOM Elements
const btnLangAr = document.getElementById('btnLangAr');
const btnLangEn = document.getElementById('btnLangEn');
const themeSelect = document.getElementById('themeSelect');
const groupsContainer = document.getElementById('groupsContainer');
const btnAddGroup = document.getElementById('btnAddGroup');
const currencySelect = document.getElementById('currencySelect');
const customCurrencyGroup = document.getElementById('customCurrencyGroup');
const customCurrencyInput = document.getElementById('customCurrency');
const btnShareWhatsApp = document.getElementById('btnShareWhatsApp');
const btnCopyReport = document.getElementById('btnCopyReport');
const toastMessage = document.getElementById('toastMessage');

// VAT Elements
const applyVatCheckbox = document.getElementById('applyVat');
const vatRateInput = document.getElementById('vatRate');

// Grand Total Elements
const groupResultsContainer = document.getElementById('groupResultsContainer');
const grandOriginalPrice = document.getElementById('grandOriginalPrice');
const grandTotalDiscountValue = document.getElementById('grandTotalDiscountValue');
const grandEffectiveDiscountPct = document.getElementById('grandEffectiveDiscountPct');
const grandPriceBeforeVat = document.getElementById('grandPriceBeforeVat');
const grandVatValue = document.getElementById('grandVatValue');
const grandFinalPrice = document.getElementById('grandFinalPrice');
const grandVatRateLabel = document.getElementById('grandVatRateLabel');
const grandFinalPriceLabel = document.getElementById('grandFinalPriceLabel');
const grandVatRowBefore = document.getElementById('grandVatRowBefore');
const grandVatRowAmount = document.getElementById('grandVatRowAmount');
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
    let savedState = safeGetLocalStorage('sales_calculator_state_v11');
    let migrated = false;
    if (!savedState) {
        // Try to migrate from v10
        savedState = safeGetLocalStorage('sales_calculator_state_v10');
        if (savedState) migrated = true;
    }
    if (!savedState) {
        // Try to migrate from v9
        savedState = safeGetLocalStorage('sales_calculator_state_v9');
        if (savedState) migrated = true;
    }
    
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            // Migrate single products & discounts to groups array if coming from v9
            if (!state.groups && state.products) {
                state.groups = [
                    {
                        id: 'group_1',
                        name: state.language === 'ar' ? 'المجموعة الأولى' : 'Group One',
                        products: state.products || [{ id: generateId(), name: '', price: 1000, quantity: 1 }],
                        discounts: state.discounts || [
                            { id: generateId(), type: 'percent', value: 35 },
                            { id: generateId(), type: 'percent', value: 5 },
                            { id: generateId(), type: 'percent', value: 5 }
                        ],
                        activePresetId: state.activePresetId || 'preset_1'
                    }
                ];
                delete state.products;
                delete state.discounts;
                delete state.activePresetId;
            }

            // Verify structure of groups
            if (!Array.isArray(state.groups) || state.groups.length === 0) {
                state.groups = [
                    {
                        id: 'group_1',
                        name: state.language === 'ar' ? 'المجموعة الأولى' : 'Group One',
                        products: [{ id: generateId(), name: '', price: 1000, quantity: 1 }],
                        discounts: [
                            { id: generateId(), type: 'percent', value: 35 },
                            { id: generateId(), type: 'percent', value: 5 },
                            { id: generateId(), type: 'percent', value: 5 }
                        ],
                        activePresetId: 'preset_1'
                    }
                ];
            }

            state.groups.forEach(g => {
                if (!Array.isArray(g.products)) {
                    g.products = [{ id: generateId(), name: '', price: 1000, quantity: 1 }];
                }
                if (!Array.isArray(g.discounts)) g.discounts = [];
            });

            if (!Array.isArray(state.presets)) {
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
            
            // Migrate to v11 fields
            if (state.showProductList === undefined) state.showProductList = true;
            if (state.lockTheme === undefined) state.lockTheme = false;
            if (state.lockedTheme === undefined) state.lockedTheme = 'luxury-gold';
            if (!Array.isArray(state.users)) {
                state.users = [
                    { username: 'meyousef', password: '85197Qq', permissions: { createQuotation: true } }
                ];
            } else {
                // Ensure default user is updated or present
                const hasMeYousef = state.users.some(u => u.username === 'meyousef');
                if (!hasMeYousef) {
                    state.users.push({ username: 'meyousef', password: '85197Qq', permissions: { createQuotation: true } });
                } else {
                    // Force the password from requests to ensure sync
                    const mainAdmin = state.users.find(u => u.username === 'meyousef');
                    if (mainAdmin) mainAdmin.password = '85197Qq';
                }
            }
            state.currentUser = null; // reset session at startup
            if (!state.language) state.language = 'ar';
            
            saveState(); // save migrated state
        } catch (e) {
            console.error('Failed to parse saved state, using defaults', e);
        }
    } else {
        saveState();
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

    // Apply theme values based on theme lock
    if (state.lockTheme) {
        themeSelect.value = state.lockedTheme;
        themeSelect.disabled = true;
        applyTheme(state.lockedTheme);
    } else {
        themeSelect.disabled = false;
        // Set theme values based on device type
        if (isMobileDevice()) {
            state.theme = 'luxury-gold';
        } else {
            // If computer: if no saved theme in localStorage, default to royal-dark
            const hasSavedTheme = safeGetLocalStorage('sales_calculator_state_v9') !== null;
            if (!hasSavedTheme) {
                state.theme = 'royal-dark';
            }
        }
        themeSelect.value = state.theme;
        applyTheme(state.theme);
    }

    // Switch Language Setup
    setLanguage(state.language);

    setupEventListeners();
    updateUIForSession();
    handleStats();
    checkAdminHash();
}

function checkAdminHash() {
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    if (hash === '#settings' || hash === '#admin' || search.includes('settings') || search.includes('admin')) {
        const loginModal = document.getElementById('loginModal');
        const settingsModal = document.getElementById('settingsModal');
        if (state.currentUser) {
            settingsModal.style.display = 'flex';
            document.getElementById('settingsToggleProductList').checked = state.showProductList;
            document.getElementById('settingsToggleThemeLock').checked = state.lockTheme;
            document.getElementById('settingsLockedThemeSelect').value = state.lockedTheme;
            renderSettingsUsersList();
        } else {
            loginModal.style.display = 'flex';
            document.getElementById('loginUsername').value = '';
            document.getElementById('loginPassword').value = '';
            document.getElementById('loginErrorMsg').style.display = 'none';
            document.getElementById('loginUsername').focus();
        }
    }
}

// User / Session UI Updates
function updateUIForSession() {
    const lang = state.language;
    const btnUserLogin = document.getElementById('btnUserLogin');
    const loginBtnText = document.getElementById('loginBtnText');
    const btnAdminSettings = document.getElementById('btnAdminSettings');
    
    if (state.currentUser) {
        loginBtnText.textContent = translations[lang].navLogout + " (" + state.currentUser.username + ")";
        btnUserLogin.classList.add('active');
        btnAdminSettings.style.display = 'flex';
    } else {
        loginBtnText.textContent = translations[lang].navLogin;
        btnUserLogin.classList.remove('active');
        btnAdminSettings.style.display = 'none';
    }
}

// Login / Logout operations
function handleLogin(username, password) {
    username = username.trim();
    const user = state.users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
    if (user) {
        state.currentUser = { username: user.username, permissions: { ...user.permissions } };
        saveState();
        updateUIForSession();
        return true;
    }
    return false;
}

function handleLogout() {
    state.currentUser = null;
    saveState();
    updateUIForSession();
    document.getElementById('settingsModal').style.display = 'none';
}

// User Management
function addUser(username, password, permQuotation) {
    username = username.trim();
    if (!username || !password) return false;
    const exists = state.users.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (exists) return false;
    
    state.users.push({
        username: username,
        password: password,
        permissions: { createQuotation: permQuotation }
    });
    saveState();
    renderSettingsUsersList();
    return true;
}

function deleteUser(username) {
    if (username.toLowerCase() === 'meyousef') return false;
    state.users = state.users.filter(u => u.username.toLowerCase() !== username.toLowerCase());
    if (state.currentUser && state.currentUser.username.toLowerCase() === username.toLowerCase()) {
        handleLogout();
    }
    saveState();
    renderSettingsUsersList();
    return true;
}

function renderSettingsUsersList() {
    const container = document.getElementById('adminUsersListContainer');
    if (!container) return;
    container.innerHTML = '';
    const lang = state.language;
    
    state.users.forEach(user => {
        const row = document.createElement('div');
        row.className = 'settings-user-row';
        
        const canQuote = user.permissions && user.permissions.createQuotation;
        const permText = canQuote ? translations[lang].permQuotation : (lang === 'ar' ? 'بدون صلاحيات' : 'No permissions');
        
        row.innerHTML = `
            <div class="settings-user-info">
                <span class="settings-user-name">${user.username}</span>
                <span class="settings-user-perm">${permText}</span>
            </div>
            ${user.username !== 'meyousef' ? `
                <button type="button" class="btn-delete delete-user-btn" data-username="${user.username}" title="${lang === 'ar' ? 'حذف المستخدم' : 'Delete User'}" style="width: 2rem; height: 2rem;">
                    <i class="fa-solid fa-trash-can" style="font-size: 0.85rem;"></i>
                </button>
            ` : `<span style="font-size: 0.85rem; color: var(--primary); font-weight: bold;">مدير النظام</span>`}
        `;
        
        const deleteBtn = row.querySelector('.delete-user-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                deleteUser(user.username);
            });
        }
        container.appendChild(row);
    });
}

// Quotation Formatter
function renderQuotation() {
    const lang = state.language;
    const currency = getActiveCurrency();
    
    // Set date
    const dateEl = document.getElementById('quoteDate');
    const today = new Date();
    const formattedDate = today.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    dateEl.textContent = formattedDate;
    
    // Set quote number
    const quoteNumEl = document.getElementById('quoteNumber');
    const quoteNumber = "QD-" + Math.floor(1000 + Math.random() * 9000);
    quoteNumEl.textContent = quoteNumber;
    
    // Set prepared by
    const preparedByInput = document.getElementById('quotePreparedByInput');
    preparedByInput.value = state.currentUser ? state.currentUser.username : (lang === 'ar' ? 'الموظف' : 'Staff');
    
    // Fill items table
    const tbody = document.querySelector('#quoteItemsTable tbody');
    tbody.innerHTML = '';
    
    let itemIndex = 1;
    let grandOriginalSum = 0;
    let grandNetSum = 0;
    
    state.groups.forEach((group, gIndex) => {
        let groupOriginalTotal = 0;
        group.products.forEach(p => groupOriginalTotal += p.price * p.quantity);
        
        let currentPrice = groupOriginalTotal;
        const totalQuantity = group.products.reduce((sum, p) => sum + (p.quantity || 0), 0);
        
        // Calculate group net price after discounts
        let groupNetPrice = groupOriginalTotal;
        if (group.discounts.length > 0 && groupOriginalTotal > 0) {
            group.discounts.forEach(discount => {
                let discountAmount = 0;
                if (discount.type === 'percent') {
                    discountAmount = preciseRound(currentPrice * (discount.value / 100));
                } else {
                    discountAmount = preciseRound(discount.value * totalQuantity);
                }
                currentPrice = Math.max(0, preciseRound(currentPrice - discountAmount));
            });
            groupNetPrice = currentPrice;
        }
        
        const groupDiscountRatio = groupOriginalTotal > 0 ? (groupOriginalTotal - groupNetPrice) / groupOriginalTotal : 0;
        
        group.products.forEach((product, pIndex) => {
            const prodName = product.name.trim() || (lang === 'ar' ? `منتج المجموعة ${gIndex+1} - رقم ${pIndex+1}` : `Product G${gIndex+1} - #${pIndex+1}`);
            const originalLineVal = product.price * product.quantity;
            const discountLineVal = originalLineVal * groupDiscountRatio;
            const netLineVal = originalLineVal - discountLineVal;
            
            const tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid #cbd5e1';
            
            const discountPctText = (groupDiscountRatio * 100).toFixed(1) + "%";
            
            tr.innerHTML = `
                <td style="padding: 0.75rem 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${itemIndex++}</td>
                <td style="padding: 0.75rem 0.5rem; border: 1px solid #cbd5e1;">${prodName}</td>
                <td style="padding: 0.75rem 0.5rem; text-align: center; border: 1px solid #cbd5e1;">${product.quantity}</td>
                <td style="padding: 0.75rem 0.5rem; text-align: center; border: 1px solid #cbd5e1; font-family: monospace;">${formatNumber(product.price)} ${currency}</td>
                <td style="padding: 0.75rem 0.5rem; text-align: center; border: 1px solid #cbd5e1; font-family: monospace;">${formatNumber(originalLineVal)} ${currency}</td>
                <td style="padding: 0.75rem 0.5rem; text-align: center; border: 1px solid #cbd5e1; color: var(--danger); font-weight: bold;">${discountPctText}</td>
                <td style="padding: 0.75rem 0.5rem; text-align: center; border: 1px solid #cbd5e1; font-weight: bold; font-family: monospace;">${formatNumber(netLineVal)} ${currency}</td>
            `;
            tbody.appendChild(tr);
        });
        
        grandOriginalSum += groupOriginalTotal;
        grandNetSum += groupNetPrice;
    });
    
    // Fill Totals Block
    const quoteOriginalSumEl = document.getElementById('quoteOriginalSum');
    const quoteDiscountSumEl = document.getElementById('quoteDiscountSum');
    const quoteBeforeVatSumEl = document.getElementById('quoteBeforeVatSum');
    const quoteVatRowEl = document.getElementById('quoteVatRow');
    const quoteVatSumEl = document.getElementById('quoteVatSum');
    const quoteVatRateLabelEl = document.getElementById('quoteVatRateLabel');
    const quoteFinalSumEl = document.getElementById('quoteFinalSum');
    
    const grandTotalSavedValue = Math.max(0, preciseRound(grandOriginalSum - grandNetSum));
    
    quoteOriginalSumEl.textContent = `${formatNumber(grandOriginalSum)} ${currency}`;
    quoteDiscountSumEl.textContent = `-${formatNumber(grandTotalSavedValue)} ${currency}`;
    quoteBeforeVatSumEl.textContent = `${formatNumber(grandNetSum)} ${currency}`;
    
    let vatAmount = 0;
    if (state.applyVat) {
        vatAmount = preciseRound(grandNetSum * (state.vatRate / 100));
        quoteVatRowEl.style.display = 'flex';
        quoteVatRateLabelEl.textContent = formatNumberForVatLabel(state.vatRate);
        quoteVatSumEl.textContent = `${formatNumber(vatAmount)} ${currency}`;
    } else {
        quoteVatRowEl.style.display = 'none';
    }
    
    const grandFinalNet = preciseRound(grandNetSum + vatAmount);
    quoteFinalSumEl.textContent = `${formatNumber(grandFinalNet)} ${currency}`;
}

// Results PDF Formatter
function renderResultsPdf() {
    const lang = state.language;
    const currency = getActiveCurrency();
    
    // Set date
    const dateEl = document.getElementById('pdfReportDate');
    const today = new Date();
    const formattedDate = today.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    dateEl.textContent = formattedDate;
    
    // Fill groups results container
    const pdfGroupsContainer = document.getElementById('pdfGroupsContainer');
    pdfGroupsContainer.innerHTML = '';
    
    let grandOriginalSum = 0;
    let grandNetSum = 0;
    
    state.groups.forEach((group, gIndex) => {
        let groupOriginalTotal = 0;
        group.products.forEach(p => groupOriginalTotal += p.price * p.quantity);
        grandOriginalSum += groupOriginalTotal;
        
        const totalQuantity = group.products.reduce((sum, p) => sum + (p.quantity || 0), 0);
        
        // Products rows html
        let productsRowsHtml = '';
        group.products.forEach((product, pIndex) => {
            const prodName = product.name.trim() || (lang === 'ar' ? `منتج المجموعة ${gIndex+1} - رقم ${pIndex+1}` : `Product G${gIndex+1} - #${pIndex+1}`);
            const lineTotal = product.price * product.quantity;
            productsRowsHtml += `
                <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 0.5rem; text-align: center; border: 1px solid #e2e8f0;">${pIndex + 1}</td>
                    <td style="padding: 0.5rem; border: 1px solid #e2e8f0;">${prodName}</td>
                    <td style="padding: 0.5rem; text-align: center; border: 1px solid #e2e8f0;">${product.quantity}</td>
                    <td style="padding: 0.5rem; text-align: center; border: 1px solid #e2e8f0; font-family: monospace;">${formatNumber(product.price)} ${currency}</td>
                    <td style="padding: 0.5rem; text-align: center; border: 1px solid #e2e8f0; font-family: monospace;">${formatNumber(lineTotal)} ${currency}</td>
                </tr>
            `;
        });
        
        // Trace steps and build discount steps html
        let discountStepsHtml = '';
        let currentPrice = groupOriginalTotal;
        let groupNetPrice = groupOriginalTotal;
        
        if (group.discounts.length === 0 || groupOriginalTotal <= 0) {
            discountStepsHtml = `<div style="color: #64748b; font-style: italic;">${translations[lang].noDiscounts}</div>`;
        } else {
            group.discounts.forEach((discount, dIndex) => {
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
                
                discountStepsHtml += `
                    <div style="display: flex; justify-content: space-between; gap: 0.5rem; border-bottom: 1px dashed #e2e8f0; padding-bottom: 0.25rem;">
                        <span style="color: #64748b;">${translations[lang].stepLabel} ${dIndex + 1}:</span>
                        <span>
                            ${formatNumber(startValue)} 
                            <span style="color: #e11d48; font-weight: bold;"> - ${detailsText} (${formatNumber(discountAmount)})</span>
                            ➔ <span style="font-weight: bold; color: #0f172a;">${formatNumber(endValue)} ${currency}</span>
                        </span>
                    </div>
                `;
            });
            groupNetPrice = currentPrice;
        }
        grandNetSum += groupNetPrice;
        
        // VAT & Final sums per group
        let groupVatAmount = 0;
        let groupFinalPrice = groupNetPrice;
        if (state.applyVat) {
            groupVatAmount = preciseRound(groupNetPrice * (state.vatRate / 100));
            groupFinalPrice = preciseRound(groupNetPrice + groupVatAmount);
        }
        
        const groupTitle = group.name.trim() || `${translations[lang].groupTitle} ${gIndex + 1}`;
        
        const groupSection = document.createElement('div');
        groupSection.className = 'pdf-group-card';
        groupSection.style.cssText = 'border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem; background: #fff; margin-bottom: 1rem; page-break-inside: avoid;';
        groupSection.innerHTML = `
            <h3 style="font-size: 1.15rem; font-weight: 800; color: #1e293b; border-bottom: 2px solid #cbd5e1; padding-bottom: 0.5rem; margin: 0 0 0.75rem 0; display: flex; justify-content: space-between;">
                <span>${groupTitle}</span>
            </h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 0.75rem; font-size: 0.9rem; text-align: right;">
                <thead>
                    <tr style="background: #f8fafc; border-bottom: 2px solid #cbd5e1;">
                        <th style="padding: 0.5rem; border: 1px solid #e2e8f0; width: 40px; text-align: center;">م</th>
                        <th style="padding: 0.5rem; border: 1px solid #e2e8f0;">اسم الصنف</th>
                        <th style="padding: 0.5rem; border: 1px solid #e2e8f0; text-align: center; width: 60px;">الكمية</th>
                        <th style="padding: 0.5rem; border: 1px solid #e2e8f0; text-align: center; width: 100px;">سعر الوحدة</th>
                        <th style="padding: 0.5rem; border: 1px solid #e2e8f0; text-align: center; width: 100px;">الإجمالي</th>
                    </tr>
                </thead>
                <tbody>
                    ${productsRowsHtml}
                </tbody>
            </table>
            
            <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 1rem; font-size: 0.85rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 0.75rem;">
                <div>
                    <h4 style="font-weight: 700; color: #475569; margin: 0 0 0.35rem 0;">خطوات الخصم المتسلسل:</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                        ${discountStepsHtml}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.3rem; justify-content: center; border-right: 1px solid #cbd5e1; padding-right: 1rem;">
                    <div style="display: flex; justify-content: space-between; gap: 0.5rem;">
                        <span style="color: #64748b;">إجمالي السعر الأصلي:</span>
                        <span style="font-weight: 700;">${formatNumber(groupOriginalTotal)} ${currency}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; gap: 0.5rem;">
                        <span style="color: #64748b;">مبلغ الخصم الكلي:</span>
                        <span style="font-weight: 700; color: #e11d48;">-${formatNumber(groupOriginalTotal - groupNetPrice)} ${currency}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; gap: 0.5rem;">
                        <span style="color: #64748b;">الصافي قبل الضريبة:</span>
                        <span style="font-weight: 700; color: #0f766e;">${formatNumber(groupNetPrice)} ${currency}</span>
                    </div>
                    ${state.applyVat ? `
                    <div style="display: flex; justify-content: space-between; gap: 0.5rem;">
                        <span style="color: #64748b;">الضريبة (${formatNumberForVatLabel(state.vatRate)}%):</span>
                        <span style="font-weight: 700;">${formatNumber(groupVatAmount)} ${currency}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; gap: 0.5rem; border-top: 1px dashed #cbd5e1; padding-top: 0.25rem; margin-top: 0.25rem; font-weight: 800; font-size: 0.9rem;">
                        <span style="color: #1e293b;">الصافي النهائي:</span>
                        <span style="color: #059669;">${formatNumber(groupFinalPrice)} ${currency}</span>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        pdfGroupsContainer.appendChild(groupSection);
    });
    
    // Fill overall totals
    const pdfGrandOriginalSum = document.getElementById('pdfGrandOriginalSum');
    const pdfGrandDiscountSum = document.getElementById('pdfGrandDiscountSum');
    const pdfGrandBeforeVatSum = document.getElementById('pdfGrandBeforeVatSum');
    const pdfGrandVatRow = document.getElementById('pdfGrandVatRow');
    const pdfGrandVatSum = document.getElementById('pdfGrandVatSum');
    const pdfGrandVatRateLabel = document.getElementById('pdfGrandVatRateLabel');
    const pdfGrandFinalSum = document.getElementById('pdfGrandFinalSum');
    
    const grandTotalSavedValue = Math.max(0, preciseRound(grandOriginalSum - grandNetSum));
    
    pdfGrandOriginalSum.textContent = `${formatNumber(grandOriginalSum)} ${currency}`;
    pdfGrandDiscountSum.textContent = `-${formatNumber(grandTotalSavedValue)} ${currency}`;
    pdfGrandBeforeVatSum.textContent = `${formatNumber(grandNetSum)} ${currency}`;
    
    let vatAmount = 0;
    if (state.applyVat) {
        vatAmount = preciseRound(grandNetSum * (state.vatRate / 100));
        pdfGrandVatRow.style.display = 'flex';
        pdfGrandVatRateLabel.textContent = formatNumberForVatLabel(state.vatRate);
        pdfGrandVatSum.textContent = `${formatNumber(vatAmount)} ${currency}`;
    } else {
        pdfGrandVatRow.style.display = 'none';
    }
    
    const grandFinalNet = preciseRound(grandNetSum + vatAmount);
    pdfGrandFinalSum.textContent = `${formatNumber(grandFinalNet)} ${currency}`;
}

// Setup all event listeners
function setupEventListeners() {
    btnLangAr.addEventListener('click', () => setLanguage('ar'));
    btnLangEn.addEventListener('click', () => setLanguage('en'));

    themeSelect.addEventListener('change', () => {
        if (state.lockTheme) {
            themeSelect.value = state.lockedTheme;
            return;
        }
        state.theme = themeSelect.value;
        applyTheme(state.theme);
        saveState();
    });

    btnAddGroup.addEventListener('click', () => {
        state.groups.push({
            id: generateId(),
            name: getGroupName(state.groups.length, state.language),
            products: [{ id: generateId(), name: '', price: 1000, quantity: 1 }],
            discounts: [],
            activePresetId: null
        });
        saveState();
        renderGroups();
        calculate();
    });

    currencySelect.addEventListener('change', () => {
        state.currency = currencySelect.value;
        toggleCustomCurrencyVisibility();
        saveState();
        renderGroups();
        calculate();
    });

    customCurrencyInput.addEventListener('input', () => {
        state.customCurrency = customCurrencyInput.value;
        saveState();
        renderGroups();
        calculate();
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

    btnCopyReport.addEventListener('click', copyReportToClipboard);
    btnShareWhatsApp.addEventListener('click', shareOnWhatsApp);

    // Modal toggle buttons & elements
    const btnUserLogin = document.getElementById('btnUserLogin');
    const btnAdminSettings = document.getElementById('btnAdminSettings');
    const btnCreateQuotation = document.getElementById('btnCreateQuotation');
    
    const loginModal = document.getElementById('loginModal');
    const settingsModal = document.getElementById('settingsModal');
    const quotationModal = document.getElementById('quotationModal');
    
    const btnCloseLogin = document.getElementById('btnCloseLogin');
    const btnCloseSettings = document.getElementById('btnCloseSettings');
    const btnCloseQuotation = document.getElementById('btnCloseQuotation');
    const btnCloseQuotationFooter = document.getElementById('btnCloseQuotationFooter');
    
    // Login Modal events
    btnUserLogin.addEventListener('click', () => {
        if (state.currentUser) {
            handleLogout();
        } else {
            loginModal.style.display = 'flex';
            document.getElementById('loginUsername').value = '';
            document.getElementById('loginPassword').value = '';
            document.getElementById('loginErrorMsg').style.display = 'none';
            document.getElementById('loginUsername').focus();
        }
    });
    
    btnCloseLogin.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
    
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('loginUsername').value;
        const passwordInput = document.getElementById('loginPassword').value;
        const success = handleLogin(usernameInput, passwordInput);
        if (success) {
            loginModal.style.display = 'none';
            document.getElementById('settingsModal').style.display = 'flex';
            document.getElementById('settingsToggleProductList').checked = state.showProductList;
            document.getElementById('settingsToggleThemeLock').checked = state.lockTheme;
            document.getElementById('settingsLockedThemeSelect').value = state.lockedTheme;
            renderSettingsUsersList();
        } else {
            document.getElementById('loginErrorMsg').style.display = 'block';
        }
    });

    // Hash change event listener for settings
    window.addEventListener('hashchange', checkAdminHash);

    // Logout from admin settings
    const btnAdminLogout = document.getElementById('btnAdminLogout');
    if (btnAdminLogout) {
        btnAdminLogout.addEventListener('click', () => {
            handleLogout();
            window.location.hash = '';
        });
    }
    
    // Settings Modal events
    btnAdminSettings.addEventListener('click', () => {
        settingsModal.style.display = 'flex';
        document.getElementById('settingsToggleProductList').checked = state.showProductList;
        document.getElementById('settingsToggleThemeLock').checked = state.lockTheme;
        document.getElementById('settingsLockedThemeSelect').value = state.lockedTheme;
        renderSettingsUsersList();
    });
    
    btnCloseSettings.addEventListener('click', () => {
        settingsModal.style.display = 'none';
    });
    
    document.getElementById('settingsToggleProductList').addEventListener('change', () => {
        state.showProductList = document.getElementById('settingsToggleProductList').checked;
        saveState();
        renderGroups();
    });
    
    document.getElementById('settingsToggleThemeLock').addEventListener('change', () => {
        state.lockTheme = document.getElementById('settingsToggleThemeLock').checked;
        if (state.lockTheme) {
            themeSelect.disabled = true;
            themeSelect.value = state.lockedTheme;
            applyTheme(state.lockedTheme);
        } else {
            themeSelect.disabled = false;
            themeSelect.value = state.theme;
            applyTheme(state.theme);
        }
        saveState();
    });
    
    document.getElementById('settingsLockedThemeSelect').addEventListener('change', () => {
        state.lockedTheme = document.getElementById('settingsLockedThemeSelect').value;
        if (state.lockTheme) {
            themeSelect.value = state.lockedTheme;
            applyTheme(state.lockedTheme);
        }
        saveState();
    });
    
    document.getElementById('addUserForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsernameInput = document.getElementById('newUsername');
        const newUserPasswordInput = document.getElementById('newUserPassword');
        const newUserPermQuotationInput = document.getElementById('newUserPermQuotation');
        
        const success = addUser(newUsernameInput.value, newUserPasswordInput.value, newUserPermQuotationInput.checked);
        if (success) {
            newUsernameInput.value = '';
            newUserPasswordInput.value = '';
            newUserPermQuotationInput.checked = true;
        } else {
            alert(state.language === 'ar' ? 'عذراً، هذا الموظف مسجل مسبقاً.' : 'Employee username already exists.');
        }
    });
    
    const resultsPdfModal = document.getElementById('resultsPdfModal');
    // Close modal when clicking outside card
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === settingsModal) settingsModal.style.display = 'none';
        if (e.target === quotationModal) quotationModal.style.display = 'none';
        if (e.target === resultsPdfModal) resultsPdfModal.style.display = 'none';
    });
    
    // Quotation events
    btnCreateQuotation.addEventListener('click', () => {
        renderQuotation();
        document.getElementById('quoteCustomerName').value = '';
        document.getElementById('quoteCustomerPhone').value = '';
        document.getElementById('quoteCompanyName').value = 'الشركة الأساسية';
        document.getElementById('quoteBranchName').value = 'فرع حفر الباطن';
        document.getElementById('quotePreparedByInput').value = state.currentUser ? state.currentUser.username : 'الموظف';
        document.getElementById('printCustomerName').style.display = 'none';
        document.getElementById('printCustomerPhone').style.display = 'none';
        document.getElementById('quoteCustomerName').style.display = 'inline-block';
        document.getElementById('quoteCustomerPhone').style.display = 'inline-block';
        
        quotationModal.style.display = 'flex';
    });
    
    btnCloseQuotation.addEventListener('click', () => {
        quotationModal.style.display = 'none';
    });
    
    btnCloseQuotationFooter.addEventListener('click', () => {
        quotationModal.style.display = 'none';
    });
    
    document.getElementById('btnQuotePrintPDF').addEventListener('click', () => {
        const nameVal = document.getElementById('quoteCustomerName').value.trim();
        const phoneVal = document.getElementById('quoteCustomerPhone').value.trim();
        
        const printName = document.getElementById('printCustomerName');
        const printPhone = document.getElementById('printCustomerPhone');
        
        printName.textContent = nameVal || '--';
        printPhone.textContent = phoneVal || '--';
        
        const compVal = document.getElementById('quoteCompanyName').value.trim() || 'الشركة الأساسية';
        const branchVal = document.getElementById('quoteBranchName').value.trim() || 'فرع حفر الباطن';
        const prepVal = document.getElementById('quotePreparedByInput').value.trim() || 'الموظف';
        
        const printCompName = document.getElementById('printQuoteCompanyName');
        const printBranchName = document.getElementById('printQuoteBranchName');
        const printPrep = document.getElementById('printQuotePreparedBy');
        
        printCompName.textContent = compVal;
        printBranchName.textContent = branchVal;
        printPrep.textContent = prepVal;
        
        printName.style.setProperty('display', 'inline', 'important');
        printPhone.style.setProperty('display', 'inline', 'important');
        printCompName.style.setProperty('display', 'block', 'important');
        printBranchName.style.setProperty('display', 'block', 'important');
        printPrep.style.setProperty('display', 'inline', 'important');
        
        document.getElementById('quoteCustomerName').style.display = 'none';
        document.getElementById('quoteCustomerPhone').style.display = 'none';
        document.getElementById('quoteCompanyName').style.display = 'none';
        document.getElementById('quoteBranchName').style.display = 'none';
        document.getElementById('quotePreparedByInput').style.display = 'none';
        
        document.body.classList.add('printing-quote');
        
        if (navigator.webdriver) {
            console.log("Mock print execution for automation");
        } else {
            window.print();
        }
        
        document.body.classList.remove('printing-quote');
        
        printName.style.display = 'none';
        printPhone.style.display = 'none';
        printCompName.style.display = 'none';
        printBranchName.style.display = 'none';
        printPrep.style.display = 'none';
        
        document.getElementById('quoteCustomerName').style.display = 'inline-block';
        document.getElementById('quoteCustomerPhone').style.display = 'inline-block';
        document.getElementById('quoteCompanyName').style.display = 'inline-block';
        document.getElementById('quoteBranchName').style.display = 'inline-block';
        document.getElementById('quotePreparedByInput').style.display = 'inline-block';
    });
    
    document.getElementById('btnQuoteShareWhatsApp').addEventListener('click', () => {
        triggerUsageStats();
        const lang = state.language;
        
        const custName = document.getElementById('quoteCustomerName').value.trim() || '--';
        const custPhone = document.getElementById('quoteCustomerPhone').value.trim() || '--';
        const quoteNo = document.getElementById('quoteNumber').textContent;
        const dateText = document.getElementById('quoteDate').textContent;
        
        const compNameVal = document.getElementById('quoteCompanyName').value.trim() || 'الشركة الأساسية';
        const branchNameVal = document.getElementById('quoteBranchName').value.trim() || 'فرع حفر الباطن';
        const prepVal = document.getElementById('quotePreparedByInput').value.trim() || 'الموظف';
        
        let msg = `📄 *${translations[lang].quotationTitle} - ${compNameVal}*\n`;
        if (branchNameVal) msg += `${branchNameVal}\n`;
        msg += `رقم العرض: ${quoteNo}\n`;
        msg += `التاريخ: ${dateText}\n`;
        msg += `العميل: ${custName}\n`;
        if (custPhone !== '--') msg += `جوال: ${custPhone}\n`;
        msg += `بواسطة: ${prepVal}\n`;
        msg += `----\n`;
        
        state.groups.forEach((group, index) => {
            const groupTitle = group.name.trim() || `${translations[lang].groupTitle} ${index + 1}`;
            msg += `*${groupTitle}*:\n`;
            
            group.products.forEach((product, pIndex) => {
                const prodName = product.name.trim() || `${translations[lang].productPlaceholder} ${pIndex + 1}`;
                msg += `  - ${prodName} (العدد: ${product.quantity})\n`;
            });
        });
        
        const finalPriceText = document.getElementById('quoteFinalSum').textContent;
        msg += `----\n`;
        msg += `💵 *السعر الصافي النهائي: ${finalPriceText}*\n`;
        msg += `📱 تم الإنشاء عبر حاسبة الدهمشي الذكية`;
        
        const urlEncodedText = encodeURIComponent(msg);
        window.open(`https://api.whatsapp.com/send?text=${urlEncodedText}`, '_blank');
    });

    // Results PDF Events
    document.getElementById('btnCreateResultsPdf').addEventListener('click', () => {
        renderResultsPdf();
        document.getElementById('pdfCustomerName').value = '';
        document.getElementById('pdfCustomerPhone').value = '';
        document.getElementById('printPdfCustomerName').style.display = 'none';
        document.getElementById('printPdfCustomerPhone').style.display = 'none';
        document.getElementById('pdfCustomerName').style.display = 'inline-block';
        document.getElementById('pdfCustomerPhone').style.display = 'inline-block';
        
        document.getElementById('resultsPdfModal').style.display = 'flex';
    });

    document.getElementById('btnPdfPrintPDF').addEventListener('click', () => {
        const nameVal = document.getElementById('pdfCustomerName').value.trim();
        const phoneVal = document.getElementById('pdfCustomerPhone').value.trim();
        
        const printName = document.getElementById('printPdfCustomerName');
        const printPhone = document.getElementById('printPdfCustomerPhone');
        
        printName.textContent = nameVal || '--';
        printPhone.textContent = phoneVal || '--';
        
        printName.style.setProperty('display', 'inline', 'important');
        printPhone.style.setProperty('display', 'inline', 'important');
        
        document.getElementById('pdfCustomerName').style.display = 'none';
        document.getElementById('pdfCustomerPhone').style.display = 'none';
        
        document.body.classList.add('printing-results');
        
        if (navigator.webdriver) {
            console.log("Mock print execution for automation");
        } else {
            window.print();
        }
        
        document.body.classList.remove('printing-results');
        
        printName.style.display = 'none';
        printPhone.style.display = 'none';
        
        document.getElementById('pdfCustomerName').style.display = 'inline-block';
        document.getElementById('pdfCustomerPhone').style.display = 'inline-block';
    });

    document.getElementById('btnCloseResultsPdf').addEventListener('click', () => {
        document.getElementById('resultsPdfModal').style.display = 'none';
    });

    document.getElementById('btnCloseResultsPdfFooter').addEventListener('click', () => {
        document.getElementById('resultsPdfModal').style.display = 'none';
    });
}

// Set active language and translate UI elements
function setLanguage(lang) {
    // Automatically translate default group names if they haven't been customized
    if (state.groups) {
        state.groups.forEach((group, index) => {
            const arName = getGroupName(index, 'ar');
            const enName = getGroupName(index, 'en');
            if (group.name === arName && lang === 'en') {
                group.name = enName;
            } else if (group.name === enName && lang === 'ar') {
                group.name = arName;
            }
        });
    }

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
    renderGroups();
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

// Render all groups inside #groupsContainer
function renderGroups() {
    groupsContainer.innerHTML = '';
    const lang = state.language;
    const currency = getActiveCurrency();

    state.groups.forEach((group, gIndex) => {
        const groupCard = document.createElement('div');
        groupCard.className = 'card group-card';
        groupCard.dataset.id = group.id;

        // Render Group Card Header
        groupCard.innerHTML = `
            <div class="group-card-header">
                <div style="display: flex; align-items: center; gap: 0.75rem; flex-grow: 1;">
                    <i class="fa-solid fa-boxes-stacked" style="color: var(--primary); font-size: 1.4rem;"></i>
                    <input type="text" class="group-name-input" value="${group.name}" 
                        placeholder="${translations[lang].groupPlaceholder}" aria-label="${translations[lang].groupTitle}">
                </div>
                ${state.groups.length > 1 ? `
                    <button type="button" class="btn-delete delete-group-btn" title="${lang === 'ar' ? 'حذف المجموعة' : 'Delete Group'}" style="width: 2.2rem; height: 2.2rem; display: flex; justify-content: center; align-items: center;">
                        <i class="fa-solid fa-trash-can" style="font-size: 1rem;"></i>
                    </button>
                ` : ''}
            </div>
            
            <!-- Products Section -->
            <div style="margin-bottom: 1.5rem;">
                <div class="discounts-section-title" style="margin-bottom: 1rem;">
                    <h2><i class="fa-solid fa-cart-shopping"></i> <span>${translations[lang].productsTitle}</span></h2>
                    <button type="button" class="btn btn-secondary add-product-btn" style="width: auto; padding: 0.4rem 1rem; font-size: 0.9rem;">
                        <i class="fa-solid fa-plus"></i> <span>${translations[lang].addProduct}</span>
                    </button>
                </div>
                <div class="products-list-container" style="display: flex; flex-direction: column; gap: 0.85rem;">
                    <!-- Dynamic products rows go here -->
                </div>
            </div>
            
            <!-- Discounts Section -->
            <div style="border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 1.5rem;">
                <div class="discounts-section-title" style="margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
                    <h2><i class="fa-solid fa-percent"></i> <span>${translations[lang].discountsTitle}</span></h2>
                    <div style="display: flex; gap: 0.4rem;">
                        <button type="button" class="btn btn-secondary add-pct-discount-btn" style="width: auto; padding: 0.4rem 0.85rem; font-size: 0.85rem;">
                            <i class="fa-solid fa-plus"></i> <span>${translations[lang].addPercentDiscount}</span>
                        </button>
                        <button type="button" class="btn btn-secondary add-fixed-discount-btn" style="width: auto; padding: 0.4rem 0.85rem; font-size: 0.85rem;">
                            <i class="fa-solid fa-plus"></i> <span>${translations[lang].addFixedDiscount}</span>
                        </button>
                    </div>
                </div>
                
                <div class="discounts-list-container" style="display: flex; flex-direction: column; gap: 0.85rem;">
                    <!-- Dynamic discounts rows go here -->
                </div>
                
                <!-- Presets Row -->
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed rgba(255, 255, 255, 0.05);">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
                        <label style="font-size: 0.95rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0;">
                            <i class="fa-solid fa-tags"></i> <span>${translations[lang].presetTitle}</span>
                        </label>
                        <div class="presets-badges-container" style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
                            <!-- Dynamic preset items go here -->
                        </div>
                    </div>
                    
                    <!-- Save Preset Form -->
                    <div style="display: grid; grid-template-columns: 1fr auto; gap: 0.5rem;">
                        <input type="text" class="new-preset-name-input" placeholder="${translations[lang].presetNamePlaceholder}" style="padding: 0.5rem 0.75rem; font-size: 0.95rem; border-radius: var(--radius-sm);">
                        <button type="button" class="btn btn-secondary save-preset-btn" style="width: auto; padding: 0.5rem 1rem; font-size: 0.95rem;">
                            <i class="fa-solid fa-floppy-disk"></i> <span>${translations[lang].savePreset}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Get inner containers
        const productsListEl = groupCard.querySelector('.products-list-container');
        const discountsListEl = groupCard.querySelector('.discounts-list-container');
        const presetsListEl = groupCard.querySelector('.presets-badges-container');
        const groupNameInput = groupCard.querySelector('.group-name-input');
        const deleteGroupBtn = groupCard.querySelector('.delete-group-btn');
        const addProductBtn = groupCard.querySelector('.add-product-btn');
        const addPctDiscountBtn = groupCard.querySelector('.add-pct-discount-btn');
        const addFixedDiscountBtn = groupCard.querySelector('.add-fixed-discount-btn');
        const newPresetNameInput = groupCard.querySelector('.new-preset-name-input');
        const savePresetBtn = groupCard.querySelector('.save-preset-btn');

        // Group Name input listener
        groupNameInput.addEventListener('input', () => {
            group.name = groupNameInput.value;
            saveState();
            calculate();
        });

        // Group Delete button listener
        if (deleteGroupBtn) {
            deleteGroupBtn.addEventListener('click', () => {
                state.groups = state.groups.filter(g => g.id !== group.id);
                saveState();
                renderGroups();
                calculate();
            });
        }

        // Add Product button listener
        addProductBtn.addEventListener('click', () => {
            group.products.push({ id: generateId(), name: '', price: 1000, quantity: 1 });
            saveState();
            renderGroups();
            calculate();
        });

        // Add Percent Discount button listener
        addPctDiscountBtn.addEventListener('click', () => {
            group.discounts.push({ id: generateId(), type: 'percent', value: 5 });
            group.activePresetId = null;
            saveState();
            renderGroups();
            calculate();
        });

        // Add Fixed Discount button listener
        addFixedDiscountBtn.addEventListener('click', () => {
            group.discounts.push({ id: generateId(), type: 'fixed', value: 50 });
            group.activePresetId = null;
            saveState();
            renderGroups();
            calculate();
        });

        // Save Preset button listener
        savePresetBtn.addEventListener('click', () => {
            if (group.discounts.length === 0) return;
            let inputName = newPresetNameInput.value.trim();
            if (!inputName) {
                const customCount = state.presets.filter(p => !p.isSystem).length + 1;
                inputName = `${translations[lang].presetDefaultName} ${customCount}`;
            }

            const newPreset = {
                id: generateId(),
                isSystem: false,
                name: inputName,
                discounts: group.discounts.map(d => ({ type: d.type, value: d.value }))
            };

            state.presets.push(newPreset);
            group.activePresetId = newPreset.id;
            saveState();
            renderGroups();
            calculate();
        });

        // Render products for this group
        group.products.forEach((product, pIndex) => {
            const row = document.createElement('div');
            row.className = 'product-item';
            row.dataset.id = product.id;

            const listAttr = state.showProductList ? 'list="defaultProductNames"' : '';
            row.innerHTML = `
                <input type="text" class="product-name-input" ${listAttr} value="${product.name}" 
                    placeholder="${translations[lang].productPlaceholder} ${pIndex + 1}">
                
                <div class="input-container">
                    <input type="text" inputmode="decimal" pattern="[0-9.]*" class="product-value-input product-price-input" value="${product.price}" placeholder="${translations[lang].unitPrice}">
                    <span class="input-icon-left">${currency}</span>
                </div>

                <div class="input-container">
                    <input type="text" inputmode="numeric" pattern="[0-9]*" class="product-value-input product-qty-input" value="${product.quantity}" placeholder="${translations[lang].quantity}">
                    <span class="input-icon-left"><i class="fa-solid fa-calculator"></i></span>
                </div>

                <button type="button" class="btn-delete delete-product-btn" title="${lang === 'ar' ? 'حذف' : 'Delete'}" aria-label="${lang === 'ar' ? 'حذف' : 'Delete'}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;

            const nameInput = row.querySelector('.product-name-input');
            const priceInput = row.querySelector('.product-price-input');
            const qtyInput = row.querySelector('.product-qty-input');
            const deleteProdBtn = row.querySelector('.delete-product-btn');

            nameInput.style.textAlign = lang === 'ar' ? 'right' : 'left';

            nameInput.addEventListener('input', () => {
                product.name = nameInput.value;
                saveState();
                calculate();
            });

            priceInput.addEventListener('input', () => {
                let val = priceInput.value;
                val = toEnglishDigits(val).replace(/[^0-9.]/g, '');
                const parts = val.split('.');
                if (parts.length > 2) val = parts[0] + '.' + parts.slice(1).join('');
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
                val = toEnglishDigits(val).replace(/[^0-9]/g, '');
                qtyInput.value = val;
                product.quantity = Math.max(1, parseInt(val, 10) || 1);
                saveState();
                calculate();
            });

            qtyInput.addEventListener('blur', () => {
                qtyInput.value = product.quantity;
            });

            deleteProdBtn.addEventListener('click', () => {
                group.products = group.products.filter(p => p.id !== product.id);
                saveState();
                renderGroups();
                calculate();
            });

            productsListEl.appendChild(row);
        });

        // Render discounts for this group
        group.discounts.forEach((discount, dIndex) => {
            const item = document.createElement('div');
            item.className = 'discount-item';
            item.dataset.id = discount.id;

            item.innerHTML = `
                <div class="discount-number">${dIndex + 1}</div>
                
                <select class="discount-type-select" aria-label="${lang === 'ar' ? 'نوع الخصم' : 'Discount Type'}">
                    <option value="percent" ${discount.type === 'percent' ? 'selected' : ''}>${translations[lang].percentDiscount}</option>
                    <option value="fixed" ${discount.type === 'fixed' ? 'selected' : ''}>${translations[lang].fixedDiscount}</option>
                </select>
                
                <div class="input-container">
                    <input type="text" inputmode="decimal" pattern="[0-9.]*" class="discount-value-input" value="${discount.value}" aria-label="${lang === 'ar' ? 'قيمة الخصم' : 'Discount Value'}">
                    <span class="input-icon-left">${discount.type === 'percent' ? '%' : currency}</span>
                </div>
                
                <button type="button" class="btn-delete delete-discount-btn" title="${lang === 'ar' ? 'حذف الخصم' : 'Delete Discount'}" aria-label="${lang === 'ar' ? 'حذف الخصم' : 'Delete Discount'}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;

            const typeSelect = item.querySelector('.discount-type-select');
            const valueInput = item.querySelector('.discount-value-input');
            const deleteDiscBtn = item.querySelector('.delete-discount-btn');
            const iconLeft = item.querySelector('.input-icon-left');

            typeSelect.addEventListener('change', () => {
                discount.type = typeSelect.value;
                iconLeft.textContent = discount.type === 'percent' ? '%' : currency;
                group.activePresetId = null;
                saveState();
                renderGroups();
                calculate();
            });

            valueInput.addEventListener('input', () => {
                let val = valueInput.value;
                val = toEnglishDigits(val).replace(/[^0-9.]/g, '');
                const parts = val.split('.');
                if (parts.length > 2) val = parts[0] + '.' + parts.slice(1).join('');
                valueInput.value = val;
                discount.value = parseFloat(val) || 0;
                group.activePresetId = null;
                saveState();
                calculate();
            });

            valueInput.addEventListener('blur', () => {
                valueInput.value = discount.value;
                renderGroups();
            });

            deleteDiscBtn.addEventListener('click', () => {
                group.discounts = group.discounts.filter(d => d.id !== discount.id);
                group.activePresetId = null;
                saveState();
                renderGroups();
                calculate();
            });

            discountsListEl.appendChild(item);
        });

        // Render presets badges
        state.presets.forEach(preset => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `lang-btn preset-tab-btn ${group.activePresetId === preset.id ? 'active' : ''}`;
            btn.style.padding = '0.35rem 0.85rem';
            btn.style.fontSize = '0.9rem';
            btn.style.borderRadius = 'var(--radius-sm)';

            const presetName = preset.isSystem ? translations[lang][preset.nameKey] : preset.name;
            btn.innerHTML = presetName;

            // Add delete button inside custom preset button if not system preset
            if (!preset.isSystem) {
                btn.innerHTML = `
                    <span>${presetName}</span>
                    <i class="fa-solid fa-circle-xmark delete-preset-icon" style="margin-right: 0.35rem; font-size: 0.85rem; opacity: 0.7; cursor: pointer;"></i>
                `;
                const deleteIcon = btn.querySelector('.delete-preset-icon');
                deleteIcon.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Delete preset globally
                    state.presets = state.presets.filter(p => p.id !== preset.id);
                    state.groups.forEach(g => {
                        if (g.activePresetId === preset.id) g.activePresetId = null;
                    });
                    saveState();
                    renderGroups();
                    calculate();
                });
            }

            btn.addEventListener('click', (e) => {
                if (e.target.closest('.delete-preset-icon')) return;
                group.activePresetId = preset.id;
                group.discounts = preset.discounts.map(d => ({
                    id: generateId(),
                    type: d.type,
                    value: d.value
                }));
                saveState();
                renderGroups();
                calculate();
            });

            presetsListEl.appendChild(btn);
        });

        groupsContainer.appendChild(groupCard);
    });
}


// Perform sequential discount calculation
function calculate() {
    const lang = state.language;
    const currency = getActiveCurrency();

    // Clear previous group results in UI
    groupResultsContainer.innerHTML = '';

    let grandOriginalSum = 0;
    let grandNetSum = 0; // sum of final net values for all groups before VAT

    state.groups.forEach((group, index) => {
        let groupOriginalTotal = 0;
        const totalQuantity = group.products.reduce((sum, p) => sum + (p.quantity || 0), 0);

        // Calculate group original total
        group.products.forEach(product => {
            groupOriginalTotal += product.price * product.quantity;
        });
        grandOriginalSum += groupOriginalTotal;

        // Group Result Card Section
        const groupResultDiv = document.createElement('div');
        groupResultDiv.className = 'results-group-section';
        groupResultDiv.style.marginBottom = '1.5rem';
        groupResultDiv.style.paddingBottom = '1.5rem';
        groupResultDiv.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';

        const groupTitle = group.name.trim() || `${translations[lang].groupTitle} ${index + 1}`;
        
        let vatSectionHtml = '';
        if (state.applyVat) {
            vatSectionHtml = `
                <div class="result-row" style="font-size: 0.95rem; padding: 0.4rem 0; display: flex; justify-content: space-between; border-top: 1px dashed rgba(255, 255, 255, 0.08);">
                    <span class="result-label" style="color: var(--text-secondary);">${translations[lang].resPriceBeforeVat}</span>
                    <span class="result-value" style="font-weight: 700;" id="groupNetVal_${group.id}">0.00</span>
                </div>
                <div class="result-row" style="font-size: 0.95rem; padding: 0.4rem 0; display: flex; justify-content: space-between;">
                    <span class="result-label" style="color: var(--text-secondary);">${translations[lang].resVatLabel} (${formatNumberForVatLabel(state.vatRate)}%):</span>
                    <span class="result-value" style="color: var(--accent); font-weight: 700;" id="groupVatVal_${group.id}">0.00</span>
                </div>
                <div class="result-row highlight" style="font-size: 1.15rem; padding: 0.6rem 0; font-weight: 800; display: flex; justify-content: space-between; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                    <span class="result-label" style="color: var(--text-primary);">${translations[lang].resFinalPriceVat}</span>
                    <span class="result-value" style="color: var(--success); font-weight: 900; text-shadow: 0 0 10px rgba(16, 185, 129, 0.2);" id="groupFinalVal_${group.id}">0.00</span>
                </div>
            `;
        } else {
            vatSectionHtml = `
                <div class="result-row highlight" style="font-size: 1.15rem; padding: 0.6rem 0; font-weight: 800; display: flex; justify-content: space-between; border-top: 1px dashed rgba(255, 255, 255, 0.08);">
                    <span class="result-label" style="color: var(--text-primary);">${translations[lang].resFinalPriceNoVat}</span>
                    <span class="result-value" style="color: var(--success); font-weight: 900;" id="groupNetVal_${group.id}">0.00</span>
                </div>
            `;
        }

        groupResultDiv.innerHTML = `
            <div class="results-group-title" style="font-size: 1.2rem; font-weight: 800; color: var(--primary); margin-bottom: 0.75rem; border-bottom: 1px dashed var(--card-border); padding-bottom: 0.25rem;">
                <i class="fa-solid fa-boxes-stacked"></i> ${groupTitle}
            </div>
            <div class="results-products-summary" style="display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.75rem;">
                <!-- Products list summary goes here -->
            </div>
            <div class="result-row" style="font-size: 1rem; padding: 0.4rem 0; display: flex; justify-content: space-between;">
                <span class="result-label" style="font-size: 0.95rem;">${translations[lang].resOriginalTotal}</span>
                <span class="result-value" style="font-size: 1.1rem; font-weight: 700;">${formatNumber(groupOriginalTotal)} ${currency}</span>
            </div>
            <div class="breakdown-section" style="margin-top: 0.5rem;">
                <div class="breakdown-flow" style="display: flex; flex-direction: column; gap: 0.5rem; padding: 0.5rem 0.75rem; background: var(--item-bg); border-radius: var(--radius-sm);">
                    <!-- Breakdown steps go here -->
                </div>
            </div>
            ${vatSectionHtml}
        `;

        const productsSummaryEl = groupResultDiv.querySelector('.results-products-summary');
        const breakdownFlowEl = groupResultDiv.querySelector('.breakdown-flow');
        const groupNetValEl = groupResultDiv.querySelector(`#groupNetVal_${group.id}`);
        const groupVatValEl = groupResultDiv.querySelector(`#groupVatVal_${group.id}`);
        const groupFinalValEl = groupResultDiv.querySelector(`#groupFinalVal_${group.id}`);

        const updateGroupResults = (netPrice) => {
            if (groupNetValEl) {
                groupNetValEl.textContent = `${formatNumber(netPrice)} ${currency}`;
            }
            if (state.applyVat) {
                const vatVal = preciseRound(netPrice * (state.vatRate / 100));
                const finalVal = preciseRound(netPrice + vatVal);
                if (groupVatValEl) groupVatValEl.textContent = `${formatNumber(vatVal)} ${currency}`;
                if (groupFinalValEl) groupFinalValEl.textContent = `${formatNumber(finalVal)} ${currency}`;
            }
        };

        // Render products summary list
        if (group.products.length > 0) {
            group.products.forEach((product, pIndex) => {
                const prodName = product.name.trim() || `${translations[lang].productPlaceholder} ${pIndex + 1}`;
                const lineTotal = product.price * product.quantity;

                const prodRow = document.createElement('div');
                prodRow.style.display = 'flex';
                prodRow.style.justifyContent = 'space-between';
                prodRow.style.fontSize = '1rem';
                prodRow.style.color = 'var(--text-secondary)';
                prodRow.style.fontWeight = '500';
                prodRow.innerHTML = `
                    <span>${prodName} (${product.quantity} × ${formatNumber(product.price)} ${currency})</span>
                    <span style="color: var(--text-primary); font-weight: 700;">${formatNumber(lineTotal)} ${currency}</span>
                `;
                productsSummaryEl.appendChild(prodRow);
            });
        } else {
            productsSummaryEl.innerHTML = `
                <div style="color: var(--text-muted); font-size: 0.95rem; text-align: center;">
                    ${translations[lang].noProducts}
                </div>
            `;
        }

        // Trace sequential discounts
        let currentPrice = groupOriginalTotal;

        if (group.discounts.length === 0 || groupOriginalTotal <= 0) {
            breakdownFlowEl.innerHTML = `
                <div style="color: var(--text-muted); font-size: 0.95rem; text-align: center;">
                    ${translations[lang].noDiscounts}
                </div>
            `;
            updateGroupResults(groupOriginalTotal);
            grandNetSum += groupOriginalTotal;
        } else {
            group.discounts.forEach((discount, dIndex) => {
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

                // Render step
                const stepDiv = document.createElement('div');
                stepDiv.className = 'breakdown-step';
                stepDiv.style.display = 'flex';
                stepDiv.style.justifyContent = 'space-between';
                stepDiv.style.fontSize = '0.95rem';
                stepDiv.innerHTML = `
                    <span class="step-meta" style="color: var(--text-muted);">${translations[lang].stepLabel} ${dIndex + 1}:</span>
                    <span class="step-calc" style="font-weight: 700;">
                        ${formatNumber(startValue)} 
                        <span class="discount-detail" style="color: var(--danger); font-weight: 800;"> - ${detailsText} (${formatNumber(discountAmount)})</span>
                        ➔ <span class="new-subtotal" style="color: var(--text-primary); font-weight: 800;">${formatNumber(endValue)} ${currency}</span>
                    </span>
                `;
                breakdownFlowEl.appendChild(stepDiv);
            });

            updateGroupResults(currentPrice);
            grandNetSum += currentPrice;
        }

        groupResultsContainer.appendChild(groupResultDiv);
    });

    // Calculate Grand Totals
    const grandOriginalTotalValue = grandOriginalSum;
    const grandTotalSavedValue = Math.max(0, preciseRound(grandOriginalTotalValue - grandNetSum));
    const grandEffectiveDiscountPctValue = grandOriginalTotalValue > 0 ? (grandTotalSavedValue / grandOriginalTotalValue) * 100 : 0;

    // Update global settings summary labels
    grandOriginalPrice.textContent = `${formatNumber(grandOriginalTotalValue)} ${currency}`;
    grandTotalDiscountValue.textContent = `${formatNumber(grandTotalSavedValue)} ${currency}`;
    grandEffectiveDiscountPct.textContent = `${grandEffectiveDiscountPctValue.toFixed(2)}%`;

    // Apply VAT global calculation
    let vatAmount = 0;
    if (state.applyVat) {
        vatAmount = preciseRound(grandNetSum * (state.vatRate / 100));
        grandVatRowBefore.style.display = 'flex';
        grandVatRowAmount.style.display = 'flex';
        grandPriceBeforeVat.textContent = `${formatNumber(grandNetSum)} ${currency}`;
        grandVatRateLabel.textContent = formatNumberForVatLabel(state.vatRate);
        grandVatValue.textContent = `${formatNumber(vatAmount)} ${currency}`;
        grandFinalPriceLabel.textContent = translations[lang].grandFinalPriceVat;
    } else {
        grandVatRowBefore.style.display = 'none';
        grandVatRowAmount.style.display = 'none';
        grandFinalPriceLabel.textContent = translations[lang].grandFinalPriceNoVat;
    }

    const grandFinalNet = preciseRound(grandNetSum + vatAmount);
    grandFinalPrice.textContent = `${formatNumber(grandFinalNet)} ${currency}`;
}

// Save state to localStorage
function saveState() {
    safeSetLocalStorage('sales_calculator_state_v11', JSON.stringify(state));
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
    
    let grandOriginalSum = 0;
    let grandNetSum = 0;

    state.groups.forEach((group, index) => {
        report += `-----\n`;
        const groupTitle = group.name.trim() || `${translations[lang].groupTitle} ${index + 1}`;
        report += `🏢 *${groupTitle}*\n`;

        // Add Products summary for this group
        if (group.products.length > 0) {
            report += `🛍️ *${translations[lang].shareProductsHeader}*\n`;
            group.products.forEach((product, pIndex) => {
                const prodName = product.name.trim() || `${translations[lang].productPlaceholder} ${pIndex + 1}`;
                report += `  ${pIndex + 1}. ${prodName}: ${product.quantity} × ${formatNumber(product.price)} ${currency} = ${formatNumber(product.price * product.quantity)} ${currency}\n`;
            });
        }

        let groupOriginalTotal = 0;
        group.products.forEach(p => groupOriginalTotal += p.price * p.quantity);
        grandOriginalSum += groupOriginalTotal;

        report += `💰 *${translations[lang].shareOriginalTotal}* ${formatNumber(groupOriginalTotal)} ${currency}\n`;

        let currentPrice = groupOriginalTotal;
        const totalQuantity = group.products.reduce((sum, p) => sum + (p.quantity || 0), 0);

        let groupNetPrice = groupOriginalTotal;
        if (group.discounts.length > 0 && groupOriginalTotal > 0) {
            report += `📉 *${translations[lang].shareDiscountsHeader}*\n`;
            
            const numberEmojis = ['➊', '➋', '➌', '➍', '➎', '➏', '➐', '➑', '➒', '➓'];

            group.discounts.forEach((discount, dIndex) => {
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
                
                const emoji = numberEmojis[dIndex] || `[${dIndex + 1}]`;
                report += `  ${emoji} ${translations[lang].stepLabel} ${dIndex + 1}: ${formatNumber(startValue)} - ${typeLabel} ➔ ${formatNumber(endValue)} ${currency}\n`;
            });
            groupNetPrice = currentPrice;
        } else {
            if (groupOriginalTotal > 0) {
                report += `⚠️ ${translations[lang].noDiscounts}\n`;
            }
        }

        if (groupOriginalTotal > 0) {
            if (state.applyVat) {
                const groupVat = preciseRound(groupNetPrice * (state.vatRate / 100));
                const groupFinal = preciseRound(groupNetPrice + groupVat);
                report += `💵 *${translations[lang].resPriceBeforeVat}* ${formatNumber(groupNetPrice)} ${currency}\n`;
                report += `⚡ *${translations[lang].resVatLabel} (${state.vatRate}%):* ${formatNumber(groupVat)} ${currency}\n`;
                report += `💵 *${translations[lang].resFinalPriceVat}* *${formatNumber(groupFinal)} ${currency}*\n`;
            } else {
                report += `💵 *${translations[lang].resFinalPriceNoVat}* *${formatNumber(groupNetPrice)} ${currency}*\n`;
            }
        }
        grandNetSum += groupNetPrice;
    });

    const grandTotalSavedValue = Math.max(0, preciseRound(grandOriginalSum - grandNetSum));
    const grandEffectiveDiscountPctValue = grandOriginalSum > 0 ? (grandTotalSavedValue / grandOriginalSum) * 100 : 0;

    report += `\n=====\n`;
    report += `🧮 *${translations[lang].grandTotalHeader}*\n`;
    report += `💰 *${translations[lang].grandOriginalTotal}* ${formatNumber(grandOriginalSum)} ${currency}\n`;
    report += `🎁 *${translations[lang].grandTotalSaved}* *${formatNumber(grandTotalSavedValue)} ${currency}*\n`;
    report += `📈 *${translations[lang].shareEffectivePct}* *${grandEffectiveDiscountPctValue.toFixed(2)}%*\n`;

    let finalPrice = grandNetSum;
    if (state.applyVat) {
        const vatAmount = preciseRound(grandNetSum * (state.vatRate / 100));
        finalPrice = preciseRound(grandNetSum + vatAmount);
        report += `💵 *${translations[lang].grandPriceBeforeVat}* ${formatNumber(grandNetSum)} ${currency}\n`;
        report += `⚡ *${translations[lang].shareVat} (${state.vatRate}%):* ${formatNumber(vatAmount)} ${currency}\n`;
        report += `💵 *${translations[lang].grandFinalPriceVat}* *${formatNumber(finalPrice)} ${currency}*\n`;
    } else {
        report += `💵 *${translations[lang].grandFinalPriceNoVat}* *${formatNumber(finalPrice)} ${currency}*\n`;
    }

    report += `-----\n`;
    report += `📱 ${translations[lang].calcAppLabel}`;
    return report;
}

// Copy the text report to the clipboard
function copyReportToClipboard() {
    triggerUsageStats();
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
    triggerUsageStats();
    const text = generateTextReport();
    const urlEncodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${urlEncodedText}`;
    window.open(whatsappUrl, '_blank');
}

// Helper to call CounterAPI
async function handleStats() {
    const namespace = "yousef_aldahmashy_calculators";
    const visitorKey = "visitor_count";
    const usageKey = "usage_count";

    const visitorValEl = document.getElementById('visitorCountVal');
    const usageValEl = document.getElementById('usageCountVal');

    // 1. Handle Visitor Count
    try {
        let visitorCount;
        if (!safeGetSessionStorage('visited')) {
            // First time in this session, increment
            const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${visitorKey}/up`);
            if (res.ok) {
                const data = await res.json();
                visitorCount = data.value;
                safeSetSessionStorage('visited', 'true');
            }
        }
        
        if (!visitorCount) {
            // Get current count
            const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${visitorKey}`);
            if (res.ok) {
                const data = await res.json();
                visitorCount = data.value;
            }
        }

        if (visitorCount && visitorValEl) {
            visitorValEl.textContent = formatStatNumber(visitorCount);
        } else if (visitorValEl) {
            visitorValEl.textContent = "1,248"; // Good fallback if API is unreachable
        }
    } catch (e) {
        console.error("Error loading visitor count:", e);
        if (visitorValEl) visitorValEl.textContent = "1,248";
    }

    // 2. Handle Usage Count (Get current value)
    try {
        const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${usageKey}`);
        let usageCount;
        if (res.ok) {
            const data = await res.json();
            usageCount = data.value;
        }
        if (usageCount && usageValEl) {
            usageValEl.textContent = formatStatNumber(usageCount);
        } else if (usageValEl) {
            usageValEl.textContent = "954"; // Good fallback if API is unreachable
        }
    } catch (e) {
        console.error("Error loading usage count:", e);
        if (usageValEl) usageValEl.textContent = "954";
    }
}

// Function to increment usage count (called on copy/share)
async function triggerUsageStats() {
    const namespace = "yousef_aldahmashy_calculators";
    const usageKey = "usage_count";
    const usageValEl = document.getElementById('usageCountVal');

    if (!safeGetSessionStorage('used')) {
        try {
            const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${usageKey}/up`);
            if (res.ok) {
                const data = await res.json();
                safeSetSessionStorage('used', 'true');
                if (usageValEl) {
                    usageValEl.textContent = formatStatNumber(data.value);
                }
            }
        } catch (e) {
            console.error("Error incrementing usage count:", e);
        }
    }
}

function formatStatNumber(num) {
    return num.toLocaleString('en-US');
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);
