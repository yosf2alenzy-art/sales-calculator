// Translations Dictionary
const translations = {
    ar: {
        title: "حاسبة الدهمشي الذكية",
        subtitle: "أداة حسابات المبيعات الذكية ومشاركتها مع العملاء",
        contactPrefix: "للتواصل : للاقتراحات أو الملاحظات على البريد الإلكتروني :",
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
        btnCreateResultsPdf: "تصدير النتيجة PDF",
        btnAbout: "حول البرنامج",
        aboutHeader: "حول حاسبة الدهمشي الذكية",
        addTerm: "إضافة شرط",
        expandAll: "إلغاء الطي",
        collapseAllExceptFirst: "طي الكل",
        deleteExtraGroups: "إلغاء المجموعات المفتوحة",
        settingsProgramTitle: "اسم البرنامج:",
        settingsProgramTitlePlaceholder: "مثال: حاسبة الدهمشي الذكية",
        tutorialCardLabel: "شرح البرنامج",
        tutorialSelectPlaceholder: "القائمة",
        tutProduct: "إضافة منتج وحذفه",
        tutDiscount: "إضافة نسبة وحذفها",
        tutGroup: "إضافة مجموعة وحذفها",
        tutPdf: "تصدير النتيجة إلى ملف PDF",
        tutQuote: "عرض سعر",
        tutCopy: "نسخ التقرير المنسق",
        settingsSuggestions: "إدارة مقترحات المنتجات",
        btnAddSuggestion: "إضافة",
        backupSuggestionsLabel: "نسخة احتياطية للمقترحات:",
        btnDownloadSuggestions: "تنزيل النسخة",
        btnUploadSuggestions: "استيراد النسخة",
        settingsBackupRestoreHeader: "نسخ احتياطي واستيراد إعدادات البرنامج كاملة",
        settingsBackupRestoreDesc: "تصدير جميع الإعدادات الحالية (الموظفين، روابط الشروحات، مقترحات المنتجات، وإعدادات المظهر) إلى ملف خارجي، للتمكن من استعادتها بسهولة عند تحديث البرنامج أو تغيير الجهاز.",
        btnExportSettings: "تصدير الإعدادات (JSON)",
        btnImportSettings: "استيراد الإعدادات (JSON)",
        btnSaveAdminSettings: "حفظ واعتماد التعديلات",
        settingsTutorialLinks: "إدارة روابط شروحات البرنامج",
        btnAddTutorialLink: "إضافة رابط شرح",
        settingsCustomVideos: "شروحات الفيديو الإضافية",
        btnAddCustomVideo: "إضافة فيديو شرح",
        otherVideosTitle: "جميع شروحات الفيديو:",
        dashboardTitle: "تحليل وهيكل الصفقة المالية",
        legendNetPrice: "الصافي الفعلي:",
        legendVat: "الضريبة المضافة:",
        legendSaved: "مبلغ التوفير:",
        btnExportCSV: "تصدير إكسل (CSV)",
        btnSaveProject: "حفظ المشروع (JSON)",
        btnLoadProject: "استيراد مشروع (JSON)",
        importSuccess: "تم استيراد المشروع بنجاح! 🎉",
        importError: "فشل في استيراد المشروع. تأكد من صحة الملف.",
        noGroupData: "لا توجد بيانات صالحة للتصدير.",
        btnShowDetailedReport: "عرض التقرير والتحليل التفصيلي 📊",
        btnHideDetailedReport: "إخفاء التقرير والتحليل التفصيلي 📊",
        settingsButtonsVisibility: "إعدادات ظهور أزرار العمليات الكبرى",
        btnWhatsAppSendPdf: "إرسال عبر واتساب",
        waAlertTitle: "تنبيه لمستخدم الحاسبة",
        waAlertBody: "سيتم الآن فتح نافذة طباعة التقرير لحفظه كملف PDF على جهازك أولاً. بعد حفظ الملف، يرجى إرفاقه وإرساله يدوياً للعميل في محادثة الواتساب التي ستفتح تلقائياً.",
        smartImportBtn: "القارئ الذكي ✨",
        smartImportHeader: "القارئ الذكي للطلبات ✨",
        tabTextTitle: "استيراد نصي (الواتساب)",
        tabVoiceTitle: "الإملاء الصوتي الذكي 🎙️",
        textImportDesc: "انسخ قائمة الطلبات من الواتساب (سواء كانت سطرية، مفصولة بفواصل، أو بكلمة \"و\") والصقها هنا:",
        textImportPlaceholder: "مثال: بصل طماط خيار بيبسي لبن كاتشاب حار وآيسكريم فانيلا وبطاط",
        voiceImportDesc: "انقر على الميكروفون وابدأ بنطق أسماء المنتجات (مثل: \"بصل، طماط، خيار، بيبسي\"):",
        voiceStatusReady: "مستعد للتسجيل...",
        voiceStatusListening: "جاري الاستماع... تحدث الآن 🎙️",
        voiceStatusProcessing: "جاري معالجة الصوت...",
        voiceStatusError: "حدث خطأ في التسجيل الصوتي.",
        voiceStatusUnsupported: "متصفحك الحالي لا يدعم التعرف الصوتي.",
        parsedPreviewTitle: "المنتجات المستخرجة للمعاينة:",
        noImportItemsYet: "لم يتم استخراج أي منتجات بعد...",
        btnImportConfirm: "تأكيد وإدراج للتسعير",
        btnImportCancel: "إلغاء"
    },
    en: {
        title: "Al-Dahmashy Smart Calculator",
        subtitle: "Smart Sales Calculations & Client Sharing Tool",
        contactPrefix: "Contact: for suggestions or feedback email:",
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
        btnCreateResultsPdf: "Export Results PDF",
        btnAbout: "About App",
        aboutHeader: "About Al-Dahmashy Smart Calculator",
        addTerm: "Add Term",
        expandAll: "Expand All",
        collapseAllExceptFirst: "Collapse All",
        deleteExtraGroups: "Close Extra Groups",
        settingsProgramTitle: "Program Name:",
        settingsProgramTitlePlaceholder: "e.g. Al-Dahmashy Smart Calculator",
        tutorialCardLabel: "App Tutorials",
        tutorialSelectPlaceholder: "Menu",
        tutProduct: "Add & delete product",
        tutDiscount: "Add & delete percentage",
        tutGroup: "Add & delete group",
        tutPdf: "Export results to PDF",
        tutQuote: "Price quotation",
        tutCopy: "Copy formatted report",
        settingsSuggestions: "Manage Product Suggestions",
        btnAddSuggestion: "Add",
        backupSuggestionsLabel: "Suggestions Backup:",
        btnDownloadSuggestions: "Download Backup",
        btnUploadSuggestions: "Import Backup",
        settingsBackupRestoreHeader: "Full Program Settings Backup & Restore",
        settingsBackupRestoreDesc: "Export all current settings (employees, tutorial links, product suggestions, and theme settings) to an external file to easily restore them when updating the program or changing devices.",
        btnExportSettings: "Export Settings (JSON)",
        btnImportSettings: "Import Settings (JSON)",
        btnSaveAdminSettings: "Save & Apply Changes",
        settingsTutorialLinks: "Manage Tutorial Links",
        btnAddTutorialLink: "Add Tutorial Link",
        settingsCustomVideos: "Additional Video Tutorials",
        btnAddCustomVideo: "Add Video Tutorial",
        otherVideosTitle: "All Video Tutorials:",
        dashboardTitle: "Financial Deal Structure Analysis",
        legendNetPrice: "Actual Net Price:",
        legendVat: "Added Tax (VAT):",
        legendSaved: "Total Saved (Discounts):",
        btnExportCSV: "Export Excel (CSV)",
        btnSaveProject: "Save Project (JSON)",
        btnLoadProject: "Import Project (JSON)",
        importSuccess: "Project imported successfully! 🎉",
        importError: "Failed to import project. Please check the file.",
        noGroupData: "No valid group data to export.",
        btnShowDetailedReport: "Show Detailed Report & Analysis 📊",
        btnHideDetailedReport: "Hide Detailed Report & Analysis 📊",
        settingsButtonsVisibility: "Action Buttons Visibility Settings",
        btnWhatsAppSendPdf: "Send via WhatsApp",
        waAlertTitle: "Reminder for user",
        waAlertBody: "The print window will open to save the report as a PDF on your device first. After saving, please manually attach and send the file in the WhatsApp chat that opens automatically.",
        smartImportBtn: "Smart Reader ✨",
        smartImportHeader: "Smart List Reader ✨",
        tabTextTitle: "Text Import (WhatsApp)",
        tabVoiceTitle: "Smart Voice Dictation 🎙️",
        textImportDesc: "Copy the list of requests from WhatsApp (whether newline, comma, or space-separated) and paste it here:",
        textImportPlaceholder: "e.g., onions tomato cucumber pepsi milk hot ketchup and vanilla ice cream and potatoes",
        voiceImportDesc: "Click the microphone and start speaking product names (e.g. \"onions, tomato, cucumber, pepsi\"): ",
        voiceStatusReady: "Ready to record...",
        voiceStatusListening: "Listening... Speak now 🎙️",
        voiceStatusProcessing: "Processing audio...",
        voiceStatusError: "An error occurred during voice recording.",
        voiceStatusUnsupported: "Your current browser does not support Speech Recognition.",
        parsedPreviewTitle: "Extracted Products Preview:",
        noImportItemsYet: "No products extracted yet...",
        btnImportConfirm: "Confirm & Insert for Pricing",
        btnImportCancel: "Cancel"
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

// Default Products list
const defaultProducts = [
    "مكيف جرى جدارى PULAR طن بارد",
    "مكيف جرى جدارى PULAR طن ونصف بارد",
    "مكيف جرى جدارى PULAR طنين بارد",
    "مكيف جرى جدارى PULAR طنين ونصف بارد",
    "مكيف جرى جدارى PULAR ثلاثة طن بارد",
    "مكيف جرى جدارى PULAR طن حار بارد",
    "مكيف جرى جدارى PULAR طن ونصف حار بارد",
    "مكيف جرى جدارى PULAR طنين حار بارد",
    "مكيف جرى جدارى PULAR طنين ونصف حار بارد",
    "مكيف جرى جدارى PULAR ثلاثة طن حار بارد",
    "مكيف جرى جداري PULAR PRO طن بارد",
    "مكيف جرى جدارى PULAR PRO طن ونصف بارد",
    "مكيف جرى جدارى PULAR PRO طنين بارد",
    "مكيف جرى جدارى PULAR PRO طنين ونصف بارد",
    "مكيف جرى جدارى PULAR PRO ثلاثة طن بارد",
    "مكيف جرى جدارى PULAR PRO طن حار بارد",
    "مكيف جرى جدارى PULAR PRO طن ونصف حار بارد",
    "مكيف جرى جدارى PULAR PRO طنين حار بارد",
    "مكيف جرى جدارى PULAR PRO طنين ونصف حار بارد",
    "مكيف جرى جدارى PULAR PRO ثلاثة طن حار بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX طن بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX طن ونصف بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX طنين بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX طنين ونصف بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX ثلاثة طن بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX طن حار بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX طن ونصف حار بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX طنين حار بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX طنين ونصف حار بارد",
    "مكيف جرى جدارى ( R410 ) AIMAX ثلاثة طن حار بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX طن بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX طن ونصف بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX طنين بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX طنين ونصف بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX ثلاثة طن بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX طن حار بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX طن ونصف حار بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX طنين حار بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX طنين ونصف حار بارد",
    "مكيف جرى جدارى ( R32 ) AIMAX ثلاثة طن حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS طن بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS طن ونصف بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS طنين بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS طنين ونصف بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS ثلاثة طن بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS طن حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS طن ونصف حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS طنين حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS طنين ونصف حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPLUS ثلاثة طن حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO طن بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO طن ونصف بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO طنين بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO طنين ونصف بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO ثلاثة طن بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO طن حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO طن ونصف حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO طنين حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO طنين ونصف حار بارد",
    "مكيف جرى جدارى ( R32 ) AIPRO ثلاثة طن حار بارد",
    "مكيف جرى دولابى 4 طن بارد",
    "مكيف جرى دولابى 4 طن حار بارد",
    "مكيف جرى دولابى 5 طن بارد",
    "مكيف جرى دولابى 5 طن حار بارد",
    "مكيف جرى دولابى 66000 ألف وحدة تبريد RF28 حار بارد",
    "مكيف جرى مخفي طن ونصف حار بارد ( R410 )",
    "مكيف جرى مخفي طنين حار بارد ( R410 )",
    "مكيف جرى مخفي 3 طن حار بارد ( R410 )",
    "مكيف جرى مخفي 4 طن حار بارد ( R410 )",
    "مكيف جرى مخفي 5 طن حار بارد ( R410 )",
    "مكيف جرى كاسيت طن ونصف حار بارد ( R410 )",
    "مكيف جرى كاسيت طنين حار بارد ( R410 )",
    "مكيف جرى كاسيت 3 طن حار بارد ( R410 )",
    "مكيف جرى كاسيت 4 طن حار بارد ( R410 )",
    "مكيف جرى مخفي طن ونصف حار بارد ( R32 )",
    "مكيف جرى مخفي طنين حار بارد ( R32 )",
    "مكيف جرى مخفي 3 طن حار بارد ( R32 )",
    "مكيف جرى مخفي 4 طن حار بارد ( R32 )",
    "مكيف جرى مخفي 5 طن حار بارد ( R32 )",
    "مكيف جرى كاسيت طن ونصف حار بارد ( R32 )",
    "مكيف جرى كاسيت طنين حار بارد ( R32 )",
    "مكيف جرى كاسيت 3 طن حار بارد ( R32 )",
    "مكيف جرى كاسيت 4 طن حار بارد ( R32 )",
    "مكيف جرى كاسيت دائري طن ونصف حار بارد ( R32 )",
    "مكيف جرى كاسيت دائري طنين حار بارد ( R32 )",
    "مكيف جرى كاسيت دائري 3 طن حار بارد ( R32 )",
    "مكيف جرى كاسيت دائري 4 طن حار بارد ( R32 )"
];

// Application State
let state = {
    language: 'ar',
    programTitle: '',
    currency: 'SAR',
    customCurrency: 'يورو',
    theme: 'luxury-gold',
    applyVat: true,
    vatRate: 15,
    showProductList: true,
    lockTheme: false,
    lockedTheme: 'luxury-gold',
    visibleButtons: {
        copyReport: true,
        exportPdf: true,
        exportCsv: true,
        whatsappSendPdf: true,
        createQuotation: true,
        saveProject: true,
        loadProject: true
    },
    users: [
        { username: 'yousef', password: '851978', permissions: { createQuotation: true } }
    ],
    currentUser: null,
    groups: [
        {
            id: 'group_1',
            name: 'المجموعة الأولى',
            products: [
                { id: generateId(), name: '', price: '', quantity: '' }
            ],
            discounts: [
                { id: generateId(), type: 'percent', value: 35 },
                { id: generateId(), type: 'percent', value: 5 },
                { id: generateId(), type: 'percent', value: 5 }
            ],
            activePresetId: 'preset_1',
            collapsed: false
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
    ],
    terms: [
        "هذا العرض ساري المفعول لمدة 15 يوماً من تاريخ صدوره.",
        "الأسعار المذكورة أعلاه تشمل التركيب الأساسي (إن كان متفقاً عليه).",
        "لاعتراض أو تعديل العرض يرجى مراجعة إدارة الفرع بحفر الباطن."
    ],
    customProducts: [...defaultProducts],
    tutorialLinks: [
        { key: 'product', label: 'إضافة منتج وحذفه', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+اضافة+منتج+وحذفه' },
        { key: 'discount', label: 'إضافة نسبة وحذفها', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+اضافة+نسبة+وخصم' },
        { key: 'group', label: 'إضافة مجموعة وحذفها', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+اضافة+مجموعة' },
        { key: 'pdf', label: 'تصدير النتيجة إلى ملف PDF', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+تصدير+النتيجة+PDF' },
        { key: 'quote', label: 'عرض سعر', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+تجهيز+عرض+سعر' },
        { key: 'copy', label: 'نسخ التقرير المنسق', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+نسخ+التقرير+المنسق' }
    ]
};

let pendingPrintRedirect = null;

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

// Show/Hide action buttons based on admin settings visibility state
function applyVisibleButtons() {
    const copyBtn = document.getElementById('btnCopyReport');
    const pdfBtn = document.getElementById('btnCreateResultsPdf');
    const csvBtn = document.getElementById('btnExportCSV');
    const waBtn = document.getElementById('btnWhatsAppSendPdf');
    const quoteBtn = document.getElementById('btnCreateQuotation');
    const saveBtn = document.getElementById('btnSaveProject');
    const loadBtn = document.getElementById('btnLoadProject');

    if (copyBtn) copyBtn.style.display = state.visibleButtons.copyReport ? 'inline-flex' : 'none';
    if (pdfBtn) pdfBtn.style.display = state.visibleButtons.exportPdf ? 'inline-flex' : 'none';
    if (csvBtn) csvBtn.style.display = state.visibleButtons.exportCsv ? 'inline-flex' : 'none';
    if (waBtn) waBtn.style.display = state.visibleButtons.whatsappSendPdf ? 'inline-flex' : 'none';
    if (quoteBtn) quoteBtn.style.display = state.visibleButtons.createQuotation ? 'inline-flex' : 'none';
    if (saveBtn) saveBtn.style.display = state.visibleButtons.saveProject ? 'inline-flex' : 'none';
    if (loadBtn) loadBtn.style.display = state.visibleButtons.loadProject ? 'inline-flex' : 'none';
    
    // Hide utility bar if both are hidden
    const utilityBar = document.querySelector('.utility-actions-bar');
    if (utilityBar) {
        const isAnyVisible = state.visibleButtons.saveProject || state.visibleButtons.loadProject;
        utilityBar.style.display = isAnyVisible ? 'flex' : 'none';
    }
}

// Populate action buttons visibility checkboxes in Admin Settings
function populateVisibilityCheckboxes() {
    const copyCb = document.getElementById('visibilityBtnCopyReport');
    const pdfCb = document.getElementById('visibilityBtnCreateResultsPdf');
    const csvCb = document.getElementById('visibilityBtnExportCSV');
    const waCb = document.getElementById('visibilityBtnWhatsAppSendPdf');
    const quoteCb = document.getElementById('visibilityBtnCreateQuotation');
    const saveCb = document.getElementById('visibilityBtnSaveProject');
    const loadCb = document.getElementById('visibilityBtnLoadProject');

    if (copyCb) copyCb.checked = state.visibleButtons.copyReport;
    if (pdfCb) pdfCb.checked = state.visibleButtons.exportPdf;
    if (csvCb) csvCb.checked = state.visibleButtons.exportCsv;
    if (waCb) waCb.checked = state.visibleButtons.whatsappSendPdf;
    if (quoteCb) quoteCb.checked = state.visibleButtons.createQuotation;
    if (saveCb) saveCb.checked = state.visibleButtons.saveProject;
    if (loadCb) loadCb.checked = state.visibleButtons.loadProject;
}

// Format Saudi phone number and trigger PDF print + WhatsApp redirect after alert modal confirmation
function triggerWhatsAppSendPDF(phoneInputId) {
    const lang = state.language || 'ar';
    const modal = document.getElementById('whatsappAlertModal');
    
    // Set text labels dynamically in the current language
    const titleEl = document.querySelector('#whatsappAlertModal h3 span[data-i18n="waAlertTitle"]');
    if (titleEl) titleEl.textContent = translations[lang].waAlertTitle;
    
    const bodyEl = document.getElementById('waAlertBodyText');
    if (bodyEl) bodyEl.textContent = translations[lang].waAlertBody;
    
    const confirmBtn = document.getElementById('btnConfirmWhatsAppAlert');
    const cancelBtn = document.getElementById('btnCancelWhatsAppAlert');
    const closeBtn = document.getElementById('btnCloseWhatsAppAlert');
    
    if (modal) {
        modal.style.display = 'flex';
    }
    
    // Define confirmation handler
    const onConfirm = () => {
        modal.style.display = 'none';
        cleanupListeners();
        executeWhatsAppSendPDF(phoneInputId);
    };
    
    // Define cancel handler
    const onCancel = () => {
        modal.style.display = 'none';
        cleanupListeners();
    };
    
    const cleanupListeners = () => {
        confirmBtn.removeEventListener('click', onConfirm);
        cancelBtn.removeEventListener('click', onCancel);
        closeBtn.removeEventListener('click', onCancel);
    };
    
    confirmBtn.addEventListener('click', onConfirm);
    cancelBtn.addEventListener('click', onCancel);
    closeBtn.addEventListener('click', onCancel);
}

// Executes print layout and redirects to WhatsApp Web with cleaned client-facing message
function executeWhatsAppSendPDF(phoneInputId) {
    const phoneVal = document.getElementById(phoneInputId) ? document.getElementById(phoneInputId).value.trim() : '';
    
    // 1. Format the Saudi phone number if entered
    let cleanedPhone = '';
    if (phoneVal) {
        cleanedPhone = phoneVal.replace(/\D/g, ''); // keep only digits
        if (cleanedPhone.startsWith('05')) {
            cleanedPhone = '966' + cleanedPhone.substring(1);
        } else if (cleanedPhone.startsWith('5') && cleanedPhone.length === 9) {
            cleanedPhone = '966' + cleanedPhone;
        }
    }
    
    // 2. Trigger printing layout
    const isQuotation = (phoneInputId === 'quoteCustomerPhone');
    
    if (isQuotation) {
        // Sync printer values for quotation print layout
        const nameVal = document.getElementById('quoteCustomerName').value.trim();
        const phoneInputVal = document.getElementById('quoteCustomerPhone').value.trim();
        const compVal = document.getElementById('quoteCompanyName').value.trim() || 'الشركة الأساسية';
        const branchVal = document.getElementById('quoteBranchName').value.trim() || 'فرع حفر الباطن';
        const prepVal = document.getElementById('quotePreparedByInput').value.trim() || 'الموظف';
        
        document.getElementById('printCustomerName').textContent = nameVal || '--';
        document.getElementById('printCustomerPhone').textContent = phoneInputVal || '--';
        document.getElementById('printQuoteCompanyName').textContent = compVal;
        document.getElementById('printQuoteBranchName').textContent = branchVal;
        document.getElementById('printQuotePreparedBy').textContent = prepVal;
        
        document.getElementById('quoteCustomerName').setAttribute('value', nameVal);
        document.getElementById('quoteCustomerPhone').setAttribute('value', phoneInputVal);
        document.getElementById('quoteCompanyName').setAttribute('value', compVal);
        document.getElementById('quoteBranchName').setAttribute('value', branchVal);
        document.getElementById('quotePreparedByInput').setAttribute('value', prepVal);
        
        document.body.classList.add('printing-quote');
    } else {
        // Sync printer values for results PDF print layout
        const nameVal = document.getElementById('pdfCustomerName').value.trim();
        const phoneInputVal = document.getElementById('pdfCustomerPhone').value.trim();
        
        document.getElementById('printPdfCustomerName').textContent = nameVal || '--';
        document.getElementById('printPdfCustomerPhone').textContent = phoneInputVal || '--';
        
        document.getElementById('pdfCustomerName').setAttribute('value', nameVal);
        document.getElementById('pdfCustomerPhone').setAttribute('value', phoneInputVal);
        
        document.body.classList.add('printing-results');
    }

    const message = encodeURIComponent(`السلام عليكم، مرفق لكم ملف الـ PDF الخاص بالمعادلات وعرض السعر من حاسبة الدهمشي الذكية.`);
    const whatsappUrl = cleanedPhone 
        ? `https://api.whatsapp.com/send?phone=${cleanedPhone}&text=${message}`
        : `https://api.whatsapp.com/send?text=${message}`;
    
    pendingPrintRedirect = whatsappUrl;

    setTimeout(() => {
        window.print();
    }, 350);
}

// Load state from localStorage on init
function init() {
    let savedState = safeGetLocalStorage('sales_calculator_state_v13');
    let migrated = false;
    if (!savedState) {
        savedState = safeGetLocalStorage('sales_calculator_state_v12');
        if (savedState) migrated = true;
    }
    if (!savedState) {
        savedState = safeGetLocalStorage('sales_calculator_state_v11');
        if (savedState) migrated = true;
    }
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
                        products: state.products || [{ id: generateId(), name: '', price: '', quantity: '' }],
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
                        products: [{ id: generateId(), name: '', price: '', quantity: '' }],
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
                    g.products = [{ id: generateId(), name: '', price: '', quantity: '' }];
                } else {
                    g.products.forEach(p => {
                        if (p.name && (p.name.includes('\n') || p.name.includes('تقرير بنتيجة') || p.name.includes('Result Report') || p.name.includes('🛍️') || p.name.includes('-----\n'))) {
                            p.name = '';
                        }
                    });
                }
                if (!Array.isArray(g.discounts)) g.discounts = [];
                if (g.collapsed === undefined) g.collapsed = false;
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
            if (state.programTitle === undefined) state.programTitle = '';
            
            if (!state.visibleButtons) {
                state.visibleButtons = {
                    copyReport: true,
                    exportPdf: true,
                    exportCsv: true,
                    whatsappSendPdf: true,
                    createQuotation: true,
                    saveProject: true,
                    loadProject: true
                };
            } else {
                if (state.visibleButtons.copyReport === undefined) state.visibleButtons.copyReport = true;
                if (state.visibleButtons.exportPdf === undefined) state.visibleButtons.exportPdf = true;
                if (state.visibleButtons.exportCsv === undefined) state.visibleButtons.exportCsv = true;
                if (state.visibleButtons.whatsappSendPdf === undefined) state.visibleButtons.whatsappSendPdf = true;
                if (state.visibleButtons.createQuotation === undefined) state.visibleButtons.createQuotation = true;
                if (state.visibleButtons.saveProject === undefined) state.visibleButtons.saveProject = true;
                if (state.visibleButtons.loadProject === undefined) state.visibleButtons.loadProject = true;
            }

            if (!Array.isArray(state.users)) {
                state.users = [
                    { username: 'yousef', password: '851978', permissions: { createQuotation: true } }
                ];
            } else {
                // Remove old meyousef if it exists
                state.users = state.users.filter(u => u.username !== 'meyousef');
                
                // Ensure default user is updated or present
                const hasMeYousef = state.users.some(u => u.username === 'yousef');
                if (!hasMeYousef) {
                    state.users.push({ username: 'yousef', password: '851978', permissions: { createQuotation: true } });
                } else {
                    // Force the password from requests to ensure sync
                    const mainAdmin = state.users.find(u => u.username === 'yousef');
                    if (mainAdmin) mainAdmin.password = '851978';
                }
            }
            state.currentUser = null; // reset session at startup
            if (!state.language) state.language = 'ar';
            if (!Array.isArray(state.terms) || state.terms.length === 0) {
                state.terms = [
                    "هذا العرض ساري المفعول لمدة 15 يوماً من تاريخ صدوره.",
                    "الأسعار المذكورة أعلاه تشمل التركيب الأساسي (إن كان متفقاً عليه).",
                    "لاعتراض أو تعديل العرض يرجى مراجعة إدارة الفرع بحفر الباطن."
                ];
            }
            if (!Array.isArray(state.customProducts) || state.customProducts.length === 0) {
                state.customProducts = [...defaultProducts];
            }
            if (!state.tutorialLinks) {
                state.tutorialLinks = [
                    { key: 'product', label: 'إضافة منتج وحذفه', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+اضافة+منتج+وحذفه' },
                    { key: 'discount', label: 'إضافة نسبة وحذفها', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+اضافة+نسبة+وخصم' },
                    { key: 'group', label: 'إضافة مجموعة وحذفها', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+اضافة+مجموعة' },
                    { key: 'pdf', label: 'تصدير النتيجة إلى ملف PDF', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+تصدير+النتيجة+PDF' },
                    { key: 'quote', label: 'عرض سعر', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+تجهيز+عرض+سعر' },
                    { key: 'copy', label: 'نسخ التقرير المنسق', url: 'https://www.youtube.com/results?search_query=حاسبة+الدهمشي+شرح+نسخ+التقرير+المنسق' }
                ];
            } else if (!Array.isArray(state.tutorialLinks)) {
                const obj = state.tutorialLinks;
                const defaults = [
                    { key: 'product', label: 'إضافة منتج وحذفه' },
                    { key: 'discount', label: 'إضافة نسبة وحذفها' },
                    { key: 'group', label: 'إضافة مجموعة وحذفها' },
                    { key: 'pdf', label: 'تصدير النتيجة إلى ملف PDF' },
                    { key: 'quote', label: 'عرض سعر' },
                    { key: 'copy', label: 'نسخ التقرير المنسق' }
                ];
                state.tutorialLinks = defaults.map(item => ({
                    key: item.key,
                    label: item.label,
                    url: obj[item.key] || ''
                }));
            }
            if (!state.customTutorials) {
                state.customTutorials = [];
            }
            
            saveState(); // save migrated state
        } catch (e) {
            console.error('Failed to parse saved state, using defaults', e);
        }
    } else {
        saveState();
    }

    renderDatalist();

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
    applyVisibleButtons();
    updateUIForSession();
    handleStats();
    checkAdminHash();
}

function checkAdminHash() {
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    const path = (window.location.pathname || '').toLowerCase();

    // 1. Detect language from pathname (e.g. /ar/login or /ar or /en/login or /en)
    if (path.startsWith('/ar') || path === '/ar') {
        if (state.language !== 'ar') {
            state.language = 'ar';
            setLanguage('ar');
        }
    } else if (path.startsWith('/en') || path === '/en') {
        if (state.language !== 'en') {
            state.language = 'en';
            setLanguage('en');
        }
    }

    const wantsSettings = hash === '#settings' || hash === '#admin' || 
                         search.includes('settings') || search.includes('admin') ||
                         path.includes('/settings') || path.includes('/admin');

    const wantsLogin = hash === '#login' || search.includes('login') || path.includes('/login');

    if (wantsSettings || wantsLogin) {
        const loginModal = document.getElementById('loginModal');
        const settingsModal = document.getElementById('settingsModal');
        if (state.currentUser) {
            if (wantsSettings) {
                settingsModal.style.display = 'flex';
                document.getElementById('settingsToggleProductList').checked = state.showProductList;
                document.getElementById('settingsToggleThemeLock').checked = state.lockTheme;
                document.getElementById('settingsLockedThemeSelect').value = state.lockedTheme;
                document.getElementById('settingsProgramTitleInput').value = state.programTitle || '';
                renderSettingsUsersList();
                populateVisibilityCheckboxes();
                renderAdminSuggestionsList();
                renderAdminTutorialLinksList();
                renderAdminCustomVideosList();
            }
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
    if (username.toLowerCase() === 'yousef') return false;
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
            ${user.username !== 'yousef' ? `
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

// Render autocomplete datalist in index.html dynamically
function renderDatalist() {
    const datalist = document.getElementById('defaultProductNames');
    if (!datalist) return;
    datalist.innerHTML = '';
    if (state.customProducts) {
        state.customProducts.forEach(name => {
            if (name && name.trim()) {
                const opt = document.createElement('option');
                opt.value = name.trim();
                datalist.appendChild(opt);
            }
        });
    }
}

// Render product autocomplete suggestions list in Admin Settings
function renderAdminSuggestionsList() {
    const container = document.getElementById('adminSuggestionsListContainer');
    if (!container) return;
    container.innerHTML = '';
    const lang = state.language;

    if (!state.customProducts) {
        state.customProducts = [];
    }

    state.customProducts.forEach((productName, index) => {
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; background: rgba(255, 255, 255, 0.02); padding: 0.4rem 0.5rem; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.04);';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'btn-delete';
        deleteBtn.style.cssText = 'width: 1.8rem; height: 1.8rem; display: flex; justify-content: center; align-items: center; min-height: unset;';
        deleteBtn.title = lang === 'ar' ? 'حذف المقترح' : 'Delete Suggestion';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can" style="font-size: 0.75rem;"></i>';
        
        deleteBtn.addEventListener('click', () => {
            state.customProducts.splice(index, 1);
            saveState();
            renderAdminSuggestionsList();
            renderDatalist();
        });
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = productName;
        input.style.cssText = 'flex-grow: 1; font-size: 0.85rem; padding: 0.35rem 0.6rem; text-align: right; border: 1px dashed rgba(255,255,255,0.15); border-radius: 4px; background: transparent; color: var(--text-primary); font-family: var(--font-family) !important;';
        
        input.addEventListener('input', () => {
            state.customProducts[index] = input.value;
            saveState();
            renderDatalist();
        });
        
        row.appendChild(deleteBtn);
        row.appendChild(input);
        container.appendChild(row);
    });
}

// Render tutorial links manager in Admin Settings
function renderAdminTutorialLinksList() {
    const container = document.getElementById('adminTutorialLinksContainer');
    if (!container) return;
    container.innerHTML = '';
    const lang = state.language || 'ar';
    
    if (!Array.isArray(state.tutorialLinks)) {
        state.tutorialLinks = [];
    }
    
    if (state.tutorialLinks.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.style.cssText = 'text-align: center; color: var(--text-muted); font-size: 0.9rem; padding: 1rem 0;';
        emptyMsg.textContent = lang === 'ar' ? 'لا توجد شروحات مضافة حالياً.' : 'No tutorial links added yet.';
        container.appendChild(emptyMsg);
        return;
    }
    
    state.tutorialLinks.forEach((item, index) => {
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; background: rgba(255, 255, 255, 0.02); padding: 0.55rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.04); margin-bottom: 0.4rem; flex-wrap: wrap;';
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'lang-btn';
        deleteBtn.style.cssText = 'background: rgba(220, 53, 69, 0.15); border-color: rgba(220, 53, 69, 0.3); color: #f87171; padding: 0.25rem 0.5rem; font-size: 0.8rem; height: auto; min-height: unset; display: flex; align-items: center; justify-content: center;';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.title = lang === 'ar' ? 'حذف رابط الشرح' : 'Delete Tutorial Link';
        
        deleteBtn.addEventListener('click', () => {
            const confirmMsg = lang === 'ar'
                ? `هل أنت متأكد من حذف رابط الشرح "${item.label}"؟`
                : `Are you sure you want to delete the tutorial link "${item.label}"?`;
            if (confirm(confirmMsg)) {
                state.tutorialLinks.splice(index, 1);
                saveState();
                renderAdminTutorialLinksList();
                populateTutorialSelect();
            }
        });
        
        // Title input
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = item.label || '';
        titleInput.placeholder = lang === 'ar' ? 'عنوان الشرح' : 'Tutorial Title';
        titleInput.style.cssText = 'flex: 1 1 150px; font-size: 0.85rem; padding: 0.35rem 0.6rem; text-align: right; border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; background: rgba(0, 0, 0, 0.25); color: var(--text-primary); font-family: var(--font-family) !important;';
        
        titleInput.addEventListener('input', () => {
            state.tutorialLinks[index].label = titleInput.value.trim();
            saveState();
            populateTutorialSelect();
        });
        
        // URL input
        const urlInput = document.createElement('input');
        urlInput.type = 'url';
        urlInput.value = item.url || '';
        urlInput.placeholder = 'https://...';
        urlInput.style.cssText = 'flex: 2 1 250px; font-size: 0.85rem; padding: 0.35rem 0.6rem; text-align: left; direction: ltr; border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; background: rgba(0, 0, 0, 0.25); color: var(--text-primary);';
        
        urlInput.addEventListener('input', () => {
            state.tutorialLinks[index].url = urlInput.value.trim();
            saveState();
        });
        
        row.appendChild(deleteBtn);
        row.appendChild(titleInput);
        row.appendChild(urlInput);
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
    
    renderTerms();
}

// Render dynamic terms and conditions
function renderTerms() {
    const editContainer = document.getElementById('quoteTermsEditContainer');
    const printList = document.getElementById('quoteTermsPrintList');
    if (!editContainer || !printList) return;
    
    editContainer.innerHTML = '';
    printList.innerHTML = '';
    
    state.terms.forEach((term, index) => {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.gap = '0.5rem';
        row.style.marginBottom = '0.25rem';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = term;
        input.style.flexGrow = '1';
        input.style.fontSize = '0.85rem';
        input.style.padding = '0.3rem 0.5rem';
        input.style.border = '1px dashed #cbd5e1';
        input.style.background = '#fff';
        input.style.color = '#333';
        input.style.borderRadius = '4px';
        input.style.textAlign = 'right';
        
        input.addEventListener('input', () => {
            state.terms[index] = input.value;
            li.textContent = input.value;
            saveState();
        });
        
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.innerHTML = '&times;';
        removeBtn.style.color = '#ef4444';
        removeBtn.style.fontSize = '1.3rem';
        removeBtn.style.cursor = 'pointer';
        removeBtn.style.padding = '0 0.25rem';
        removeBtn.style.border = 'none';
        removeBtn.style.background = 'transparent';
        removeBtn.style.lineHeight = '1';
        removeBtn.title = state.language === 'ar' ? 'حذف الشرط' : 'Delete Term';
        
        removeBtn.addEventListener('click', () => {
            state.terms.splice(index, 1);
            saveState();
            renderTerms();
        });
        
        row.appendChild(removeBtn);
        row.appendChild(input);
        editContainer.appendChild(row);
        
        const li = document.createElement('li');
        li.textContent = term;
        printList.appendChild(li);
    });
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
                    <td style="padding: 0.5rem; text-align: center; border: 1px solid #e2e8f0; font-family: monospace;">${lineTotal ? formatNumber(lineTotal) : '0.00'} ${currency}</td>
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

// openPrintWindow removed - printing is now inline

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
            products: [{ id: generateId(), name: '', price: '', quantity: '' }],
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
            document.getElementById('settingsProgramTitleInput').value = state.programTitle || '';
            renderSettingsUsersList();
            populateVisibilityCheckboxes();
            renderAdminSuggestionsList();
            renderAdminTutorialLinksList();
            renderAdminCustomVideosList();
        } else {
            document.getElementById('loginErrorMsg').style.display = 'block';
        }
    });

    // Hash change and popstate event listeners for settings and routing
    window.addEventListener('hashchange', checkAdminHash);
    window.addEventListener('popstate', checkAdminHash);

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
        document.getElementById('settingsProgramTitleInput').value = state.programTitle || '';
        renderSettingsUsersList();
        populateVisibilityCheckboxes();
        renderAdminSuggestionsList();
        renderAdminTutorialLinksList();
        renderAdminCustomVideosList();
    });
    
    btnCloseSettings.addEventListener('click', () => {
        settingsModal.style.display = 'none';
    });
    
    document.getElementById('settingsToggleProductList').addEventListener('change', () => {
        state.showProductList = document.getElementById('settingsToggleProductList').checked;
        saveState();
        renderGroups();
    });

    // Button visibility settings listeners
    const btnVisibilityToggles = [
        { id: 'visibilityBtnCopyReport', key: 'copyReport' },
        { id: 'visibilityBtnCreateResultsPdf', key: 'exportPdf' },
        { id: 'visibilityBtnExportCSV', key: 'exportCsv' },
        { id: 'visibilityBtnWhatsAppSendPdf', key: 'whatsappSendPdf' },
        { id: 'visibilityBtnCreateQuotation', key: 'createQuotation' },
        { id: 'visibilityBtnSaveProject', key: 'saveProject' },
        { id: 'visibilityBtnLoadProject', key: 'loadProject' }
    ];

    btnVisibilityToggles.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
            el.addEventListener('change', () => {
                state.visibleButtons[item.key] = el.checked;
                saveState();
                applyVisibleButtons();
            });
        }
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
    
    document.getElementById('settingsProgramTitleInput').addEventListener('input', () => {
        state.programTitle = document.getElementById('settingsProgramTitleInput').value;
        saveState();
        applyProgramTitle();
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

    // Expand all groups globally (Uncollapse all)
    document.getElementById('btnExpandAll').addEventListener('click', () => {
        state.groups.forEach(g => g.collapsed = false);
        saveState();
        renderGroups();
    });

    // Collapse all except first group globally
    document.getElementById('btnCollapseAllExceptFirst').addEventListener('click', () => {
        state.groups.forEach((g, index) => {
            g.collapsed = (index !== 0);
        });
        saveState();
        renderGroups();
    });

    // Delete/Close extra groups (Collective Group Deletion)
    const btnDeleteExtraGroups = document.getElementById('btnDeleteExtraGroups');
    if (btnDeleteExtraGroups) {
        btnDeleteExtraGroups.addEventListener('click', () => {
            if (state.groups.length > 1) {
                const confirmMsg = state.language === 'ar' 
                    ? 'هل أنت متأكد من إغلاق وحذف جميع المجموعات المفتوحة والإبقاء على المجموعة الأولى فقط؟' 
                    : 'Are you sure you want to close and delete all extra groups and keep only the first group?';
                if (confirm(confirmMsg)) {
                    state.groups = [state.groups[0]];
                    saveState();
                    renderGroups();
                    calculate();
                }
            }
        });
    }

    // Tutorial dropdown navigation -> Video Gallery Modal
    document.getElementById('tutorialSelect').addEventListener('change', (e) => {
        const val = e.target.value;
        if (!val) return;
        
        const allVideos = getAllVideosList();
        let activeIdx = -1;
        
        if (val.startsWith('custom_')) {
            const idx = parseInt(val.replace('custom_', ''), 10);
            activeIdx = allVideos.findIndex(v => v.isCustom && v.customIndex === idx);
        } else {
            activeIdx = allVideos.findIndex(v => !v.isCustom && v.key === val);
        }
        
        if (activeIdx !== -1) {
            openVideoGallery(activeIdx);
        }
        
        e.target.value = ''; // Reset select placeholder
    });

    // Form to add autocomplete product suggestions
    const addSuggestionForm = document.getElementById('addSuggestionForm');
    if (addSuggestionForm) {
        addSuggestionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('newSuggestionName');
            const val = input.value.trim();
            if (val) {
                if (!state.customProducts) {
                    state.customProducts = [];
                }
                if (!state.customProducts.includes(val)) {
                    state.customProducts.unshift(val);
                    saveState();
                    renderAdminSuggestionsList();
                    renderDatalist();
                    input.value = '';
                } else {
                    alert(state.language === 'ar' ? 'هذا المقترح مضاف بالفعل.' : 'This suggestion already exists.');
                }
            }
        });
    }

    // Form to bulk add autocomplete product suggestions
    const bulkAddSuggestionsForm = document.getElementById('bulkAddSuggestionsForm');
    if (bulkAddSuggestionsForm) {
        bulkAddSuggestionsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const textarea = document.getElementById('bulkSuggestionsTextarea');
            const lines = textarea.value.split('\n');
            let addedCount = 0;
            if (!state.customProducts) {
                state.customProducts = [];
            }
            lines.forEach(line => {
                const val = line.trim();
                if (val && !state.customProducts.includes(val)) {
                    state.customProducts.unshift(val);
                    addedCount++;
                }
            });
            if (addedCount > 0) {
                saveState();
                renderAdminSuggestionsList();
                renderDatalist();
                textarea.value = '';
                alert(state.language === 'ar' ? `تم إضافة ${addedCount} مقترح بنجاح.` : `Successfully added ${addedCount} suggestions.`);
            } else {
                alert(state.language === 'ar' ? 'لم يتم إضافة أي مقترحات جديدة (قد تكون مضافة مسبقاً أو الحقل فارغ).' : 'No new suggestions were added (they might already exist).');
            }
        });
    }

    // Bulk Search and Replace Suggestions
    const btnBulkReplace = document.getElementById('btnBulkReplace');
    if (btnBulkReplace) {
        btnBulkReplace.addEventListener('click', () => {
            const searchVal = document.getElementById('replaceSearchTerm').value.trim();
            const replaceVal = document.getElementById('replaceValue').value.trim();
            if (!searchVal) {
                alert(state.language === 'ar' ? 'يرجى كتابة الكلمة المراد البحث عنها.' : 'Please enter the term to search for.');
                return;
            }
            if (!state.customProducts || state.customProducts.length === 0) {
                alert(state.language === 'ar' ? 'لا توجد مقترحات منتجات لتعديلها.' : 'No product suggestions found to update.');
                return;
            }

            let count = 0;
            state.customProducts = state.customProducts.map(name => {
                if (name.includes(searchVal)) {
                    const updated = name.split(searchVal).join(replaceVal);
                    count++;
                    return updated;
                }
                return name;
            });

            if (count > 0) {
                saveState();
                renderAdminSuggestionsList();
                renderDatalist();
                alert(state.language === 'ar' ? `تم استبدال الكلمة بنجاح في ${count} مقترح.` : `Successfully replaced term in ${count} suggestions.`);
                document.getElementById('replaceSearchTerm').value = '';
                document.getElementById('replaceValue').value = '';
            } else {
                alert(state.language === 'ar' ? 'لم يتم العثور على الكلمة في أي من المقترحات.' : 'Term not found in any suggestions.');
            }
        });
    }

    // Form to add a new tutorial link
    const addTutorialLinkForm = document.getElementById('addTutorialLinkForm');
    if (addTutorialLinkForm) {
        addTutorialLinkForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const titleInput = document.getElementById('newTutorialTitle');
            const urlInput = document.getElementById('newTutorialUrl');
            const title = titleInput.value.trim();
            const url = urlInput.value.trim();
            
            if (title && url) {
                if (!Array.isArray(state.tutorialLinks)) {
                    state.tutorialLinks = [];
                }
                state.tutorialLinks.push({
                    key: generateId(),
                    label: title,
                    url: url
                });
                saveState();
                renderAdminTutorialLinksList();
                populateTutorialSelect();
                
                titleInput.value = '';
                urlInput.value = '';
                alert(state.language === 'ar' ? 'تم إضافة رابط الشرح بنجاح.' : 'Tutorial link added successfully.');
            }
        });
    }

    // Download suggestions backup
    const btnDownloadSuggestions = document.getElementById('btnDownloadSuggestions');
    if (btnDownloadSuggestions) {
        btnDownloadSuggestions.addEventListener('click', () => {
            if (!state.customProducts || state.customProducts.length === 0) {
                alert(state.language === 'ar' ? 'لا توجد مقترحات منتجات لأخذ نسخة احتياطية لها.' : 'No suggestions available to back up.');
                return;
            }
            const fileContent = state.customProducts.join('\n');
            const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'suggestions_backup.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Trigger upload file input
    const btnTriggerUploadSuggestions = document.getElementById('btnTriggerUploadSuggestions');
    const uploadSuggestionsFile = document.getElementById('uploadSuggestionsFile');
    if (btnTriggerUploadSuggestions && uploadSuggestionsFile) {
        btnTriggerUploadSuggestions.addEventListener('click', () => {
            uploadSuggestionsFile.click();
        });
    }

    // Handle file upload
    if (uploadSuggestionsFile) {
        uploadSuggestionsFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(evt) {
                const text = evt.target.result;
                const imported = text.split('\n')
                                     .map(line => line.trim())
                                     .filter(line => line.length > 0);
                
                if (imported.length === 0) {
                    alert(state.language === 'ar' ? 'الملف فارغ أو لا يحتوي على مقترحات صالحة.' : 'The file is empty or does not contain valid suggestions.');
                    return;
                }
                
                const confirmReplace = confirm(
                    state.language === 'ar'
                        ? `تم العثور على ${imported.length} مقترح.\n\nهل تريد استبدال (مسح) المقترحات الحالية بالمقترحات المستوردة؟\nاضغط "موافق" للاستبدال، أو "إلغاء" للإضافة للمقترحات الحالية.`
                        : `Found ${imported.length} suggestions.\n\nDo you want to replace (clear) the current suggestions with the imported ones?\nClick "OK" to replace, or "Cancel" to append/add them.`
                );
                
                if (!state.customProducts) {
                    state.customProducts = [];
                }
                
                if (confirmReplace) {
                    state.customProducts = imported;
                } else {
                    // Append unique items
                    const set = new Set([...state.customProducts, ...imported]);
                    state.customProducts = Array.from(set);
                }
                
                saveState();
                renderAdminSuggestionsList();
                renderDatalist();
                
                alert(state.language === 'ar' ? 'تم استيراد النسخة الاحتياطية بنجاح! 🎉' : 'Backup imported successfully! 🎉');
                e.target.value = ''; // reset file input
            };
            reader.readAsText(file);
        });
    }

    // Save settings explicitly and notify user
    const btnSaveAdminSettings = document.getElementById('btnSaveAdminSettings');
    if (btnSaveAdminSettings) {
        btnSaveAdminSettings.addEventListener('click', () => {
            // Explicitly sync input values to state to ensure no updates are missed
            const showProdCb = document.getElementById('settingsToggleProductList');
            if (showProdCb) state.showProductList = showProdCb.checked;
            
            const lockThemeCb = document.getElementById('settingsToggleThemeLock');
            if (lockThemeCb) state.lockTheme = lockThemeCb.checked;
            
            const lockedThemeSelect = document.getElementById('settingsLockedThemeSelect');
            if (lockedThemeSelect) state.lockedTheme = lockedThemeSelect.value;
            
            const programTitleInput = document.getElementById('settingsProgramTitleInput');
            if (programTitleInput) state.programTitle = programTitleInput.value.trim();
            
            // Button visibility checkboxes
            const btnVisibilityToggles = [
                { id: 'visibilityBtnCopyReport', key: 'copyReport' },
                { id: 'visibilityBtnCreateResultsPdf', key: 'exportPdf' },
                { id: 'visibilityBtnExportCSV', key: 'exportCsv' },
                { id: 'visibilityBtnWhatsAppSendPdf', key: 'whatsappSendPdf' },
                { id: 'visibilityBtnCreateQuotation', key: 'createQuotation' },
                { id: 'visibilityBtnSaveProject', key: 'saveProject' },
                { id: 'visibilityBtnLoadProject', key: 'loadProject' }
            ];
            btnVisibilityToggles.forEach(item => {
                const el = document.getElementById(item.id);
                if (el) {
                    state.visibleButtons[item.key] = el.checked;
                }
            });
            
            saveState();
            
            // Force apply and verify changes immediately in the UI
            applyProgramTitle();
            applyVisibleButtons();
            renderGroups();
            
            if (state.lockTheme) {
                if (themeSelect) {
                    themeSelect.value = state.lockedTheme;
                    themeSelect.disabled = true;
                }
                applyTheme(state.lockedTheme);
            } else {
                if (themeSelect) {
                    themeSelect.value = state.theme;
                    themeSelect.disabled = false;
                }
                applyTheme(state.theme);
            }
            
            alert(state.language === 'ar' ? 'تم حفظ واعتماد التعديلات بنجاح في المتصفح! 🎉' : 'Settings saved and applied successfully in browser! 🎉');
            const settingsModal = document.getElementById('settingsModal');
            if (settingsModal) settingsModal.style.display = 'none';
        });
    }

    // Export all program settings as a JSON file
    const btnExportSettings = document.getElementById('btnExportSettings');
    if (btnExportSettings) {
        btnExportSettings.addEventListener('click', () => {
            const settingsData = {
                programTitle: state.programTitle || '',
                customProducts: state.customProducts || [],
                tutorialLinks: state.tutorialLinks || [],
                customTutorials: state.customTutorials || [],
                visibleButtons: state.visibleButtons || {},
                users: state.users || [],
                lockTheme: state.lockTheme || false,
                lockedTheme: state.lockedTheme || 'luxury-gold',
                showProductList: state.showProductList !== false,
                currency: state.currency || 'SAR',
                customCurrency: state.customCurrency || '',
                applyVat: state.applyVat !== false,
                vatRate: state.vatRate || 15,
                terms: state.terms || []
            };
            const blob = new Blob([JSON.stringify(settingsData, null, 4)], { type: 'application/json;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'calculator_settings_backup.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Trigger full settings JSON file upload
    const btnTriggerImportSettings = document.getElementById('btnTriggerImportSettings');
    const importSettingsFile = document.getElementById('importSettingsFile');
    if (btnTriggerImportSettings && importSettingsFile) {
        btnTriggerImportSettings.addEventListener('click', () => {
            importSettingsFile.click();
        });
    }

    // Handle full settings JSON file import
    if (importSettingsFile) {
        importSettingsFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const data = JSON.parse(evt.target.result);
                    
                    if (data.users && Array.isArray(data.users)) {
                        state.users = data.users;
                    }
                    if (data.customProducts && Array.isArray(data.customProducts)) {
                        state.customProducts = data.customProducts;
                    }
                    if (data.tutorialLinks && Array.isArray(data.tutorialLinks)) {
                        state.tutorialLinks = data.tutorialLinks;
                    }
                    if (data.customTutorials && Array.isArray(data.customTutorials)) {
                        state.customTutorials = data.customTutorials;
                    }
                    if (data.visibleButtons) {
                        state.visibleButtons = { ...state.visibleButtons, ...data.visibleButtons };
                    }
                    if (data.programTitle !== undefined) state.programTitle = data.programTitle;
                    if (data.lockTheme !== undefined) state.lockTheme = data.lockTheme;
                    if (data.lockedTheme !== undefined) state.lockedTheme = data.lockedTheme;
                    if (data.showProductList !== undefined) state.showProductList = data.showProductList;
                    if (data.currency !== undefined) state.currency = data.currency;
                    if (data.customCurrency !== undefined) state.customCurrency = data.customCurrency;
                    if (data.applyVat !== undefined) state.applyVat = data.applyVat;
                    if (data.vatRate !== undefined) state.vatRate = data.vatRate;
                    if (data.terms && Array.isArray(data.terms)) {
                        state.terms = data.terms;
                    }
                    
                    saveState();
                    alert(state.language === 'ar' ? 'تم استيراد إعدادات البرنامج وتطبيقها بنجاح! 💾🎉 وسيتم تحديث الصفحة الآن.' : 'Settings imported and applied successfully! 💾🎉 Reloading page now.');
                    window.location.reload();
                } catch (err) {
                    alert(state.language === 'ar' ? 'فشل استيراد ملف الإعدادات. يرجى التأكد من صحة ملف الـ JSON.' : 'Failed to import settings. Please check the JSON file.');
                }
            };
            reader.readAsText(file);
            e.target.value = '';
        });
    }

    const resultsPdfModal = document.getElementById('resultsPdfModal');
    const aboutModal = document.getElementById('aboutModal');
    const videoGalleryModal = document.getElementById('videoGalleryModal');
    const whatsappAlertModal = document.getElementById('whatsappAlertModal');
    // Close modal when clicking outside card
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === settingsModal) settingsModal.style.display = 'none';
        if (e.target === quotationModal) quotationModal.style.display = 'none';
        if (e.target === resultsPdfModal) resultsPdfModal.style.display = 'none';
        if (e.target === aboutModal) aboutModal.style.display = 'none';
        if (e.target === videoGalleryModal) closeVideoGallery();
        if (e.target === whatsappAlertModal) whatsappAlertModal.style.display = 'none';
    });
    
    // Video Gallery Buttons listeners
    const btnCloseVideoGallery = document.getElementById('btnCloseVideoGallery');
    if (btnCloseVideoGallery) {
        btnCloseVideoGallery.addEventListener('click', closeVideoGallery);
    }
    const btnGalleryPrev = document.getElementById('btnGalleryPrev');
    if (btnGalleryPrev) {
        btnGalleryPrev.addEventListener('click', prevVideo);
    }
    const btnGalleryNext = document.getElementById('btnGalleryNext');
    if (btnGalleryNext) {
        btnGalleryNext.addEventListener('click', nextVideo);
    }

    // Form to add custom video tutorial
    const addCustomVideoForm = document.getElementById('addCustomVideoForm');
    if (addCustomVideoForm) {
        addCustomVideoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const titleInput = document.getElementById('newVideoTitle');
            const urlInput = document.getElementById('newVideoUrl');
            
            const title = titleInput.value.trim();
            const url = urlInput.value.trim();
            
            if (title && url) {
                if (!state.customTutorials) {
                    state.customTutorials = [];
                }
                state.customTutorials.push({ title, url });
                saveState();
                
                renderAdminCustomVideosList();
                populateTutorialSelect();
                
                titleInput.value = '';
                urlInput.value = '';
                
                const lang = state.language || 'ar';
                alert(lang === 'ar' ? 'تم إضافة فيديو الشرح بنجاح!' : 'Video tutorial added successfully!');
            }
        });
    }
    
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
        quotationModal.classList.add('active-print');
    });
    
    btnCloseQuotation.addEventListener('click', () => {
        quotationModal.style.display = 'none';
        quotationModal.classList.remove('active-print');
    });
    
    btnCloseQuotationFooter.addEventListener('click', () => {
        quotationModal.style.display = 'none';
        quotationModal.classList.remove('active-print');
    });
    
    document.getElementById('btnQuoteAddTerm').addEventListener('click', () => {
        state.terms.push(state.language === 'ar' ? 'شرط جديد...' : 'New term...');
        saveState();
        renderTerms();
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
        
        // Sync attributes so they are exported in copied innerHTML
        document.getElementById('quoteCustomerName').setAttribute('value', nameVal);
        document.getElementById('quoteCustomerPhone').setAttribute('value', phoneVal);
        document.getElementById('quoteCompanyName').setAttribute('value', compVal);
        document.getElementById('quoteBranchName').setAttribute('value', branchVal);
        document.getElementById('quotePreparedByInput').setAttribute('value', prepVal);
        
        document.body.classList.add('printing-quote');
        setTimeout(() => {
            window.print();
        }, 350);
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
        
        const resultsPdfModal = document.getElementById('resultsPdfModal');
        resultsPdfModal.style.display = 'flex';
        resultsPdfModal.classList.add('active-print');
    });

    document.getElementById('btnPdfPrintPDF').addEventListener('click', () => {
        const nameVal = document.getElementById('pdfCustomerName').value.trim();
        const phoneVal = document.getElementById('pdfCustomerPhone').value.trim();
        
        const printName = document.getElementById('printPdfCustomerName');
        const printPhone = document.getElementById('printPdfCustomerPhone');
        
        printName.textContent = nameVal || '--';
        printPhone.textContent = phoneVal || '--';
        
        // Sync attributes so they are exported in copied innerHTML
        document.getElementById('pdfCustomerName').setAttribute('value', nameVal);
        document.getElementById('pdfCustomerPhone').setAttribute('value', phoneVal);
        
        document.body.classList.add('printing-results');
        setTimeout(() => {
            window.print();
        }, 350);
    });

    document.getElementById('btnCloseResultsPdf').addEventListener('click', () => {
        const resultsPdfModal = document.getElementById('resultsPdfModal');
        resultsPdfModal.style.display = 'none';
        resultsPdfModal.classList.remove('active-print');
    });

    document.getElementById('btnCloseResultsPdfFooter').addEventListener('click', () => {
        const resultsPdfModal = document.getElementById('resultsPdfModal');
        resultsPdfModal.style.display = 'none';
        resultsPdfModal.classList.remove('active-print');
    });

    // About Modal Events
    document.getElementById('btnAboutApp').addEventListener('click', () => {
        document.getElementById('aboutModal').style.display = 'flex';
    });

    document.getElementById('btnCloseAbout').addEventListener('click', () => {
        document.getElementById('aboutModal').style.display = 'none';
    });

    const cleanupPrintClasses = () => {
        document.body.classList.remove('printing-quote');
        document.body.classList.remove('printing-results');
        if (pendingPrintRedirect) {
            const redirectUrl = pendingPrintRedirect;
            pendingPrintRedirect = null;
            window.open(redirectUrl, '_blank');
        }
    };

    window.addEventListener('afterprint', cleanupPrintClasses);
    
    // Focus event fallback for mobile webviews where afterprint might not trigger correctly
    window.addEventListener('focus', () => {
        if (document.body.classList.contains('printing-quote') || document.body.classList.contains('printing-results')) {
            setTimeout(cleanupPrintClasses, 500);
        }
    });

    // Collapsible Report Toggle Event Listener
    const btnToggleDetailedReport = document.getElementById('btnToggleDetailedReport');
    const detailedReportWrapper = document.getElementById('detailedReportWrapper');
    let showDetailedReport = false; // Collapsed by default
    
    btnToggleDetailedReport.addEventListener('click', () => {
        showDetailedReport = !showDetailedReport;
        if (showDetailedReport) {
            detailedReportWrapper.style.display = 'flex';
            btnToggleDetailedReport.setAttribute('data-i18n', 'btnHideDetailedReport');
            btnToggleDetailedReport.innerHTML = `<i class="fa-solid fa-chevron-up" id="toggleReportIcon"></i> ${translations[state.language].btnHideDetailedReport}`;
        } else {
            detailedReportWrapper.style.display = 'none';
            btnToggleDetailedReport.setAttribute('data-i18n', 'btnShowDetailedReport');
            btnToggleDetailedReport.innerHTML = `<i class="fa-solid fa-chevron-down" id="toggleReportIcon"></i> ${translations[state.language].btnShowDetailedReport}`;
        }
    });

    // Utility Actions Event Listeners
    document.getElementById('btnExportCSV').addEventListener('click', exportCSV);
    document.getElementById('btnSaveProject').addEventListener('click', saveProjectJSON);
    
    const btnLoadProject = document.getElementById('btnLoadProject');
    const importProjectFile = document.getElementById('importProjectFile');
    btnLoadProject.addEventListener('click', () => {
        importProjectFile.click();
    });
    importProjectFile.addEventListener('change', loadProjectJSON);

    // WhatsApp Send PDF Event Listeners
    const btnWhatsAppSendPdf = document.getElementById('btnWhatsAppSendPdf');
    if (btnWhatsAppSendPdf) {
        btnWhatsAppSendPdf.addEventListener('click', () => {
            renderResultsPdf();
            document.getElementById('pdfCustomerName').value = '';
            document.getElementById('pdfCustomerPhone').value = '';
            document.getElementById('printPdfCustomerName').style.display = 'none';
            document.getElementById('printPdfCustomerPhone').style.display = 'none';
            document.getElementById('pdfCustomerName').style.display = 'inline-block';
            document.getElementById('pdfCustomerPhone').style.display = 'inline-block';
            
            document.getElementById('resultsPdfModal').style.display = 'flex';
            document.getElementById('pdfCustomerPhone').focus();
        });
    }

    const btnPdfWhatsAppSend = document.getElementById('btnPdfWhatsAppSend');
    if (btnPdfWhatsAppSend) {
        btnPdfWhatsAppSend.addEventListener('click', () => {
            triggerWhatsAppSendPDF('pdfCustomerPhone');
        });
    }

    const btnQuoteWhatsAppSend = document.getElementById('btnQuoteWhatsAppSend');
    if (btnQuoteWhatsAppSend) {
        btnQuoteWhatsAppSend.addEventListener('click', () => {
            triggerWhatsAppSendPDF('quoteCustomerPhone');
        });
    }

    // Groups Smart Import Button Click
    groupsContainer.addEventListener('click', (e) => {
        const smartImportBtn = e.target.closest('.smart-import-btn');
        if (smartImportBtn) {
            const groupCard = smartImportBtn.closest('.group-card');
            const gIndex = Array.from(groupsContainer.children).indexOf(groupCard);
            openSmartImportModal(gIndex);
        }
    });

    // Close Smart Import Modal
    const smartImportModal = document.getElementById('smartImportModal');
    const closeSmartImport = () => {
        smartImportModal.style.display = 'none';
        if (isSpeechRecording && speechRecognition) {
            speechRecognition.stop();
        }
    };
    document.getElementById('btnCloseSmartImport').addEventListener('click', closeSmartImport);
    document.getElementById('btnCancelSmartImport').addEventListener('click', closeSmartImport);

    // Tab switches
    const tabTextImport = document.getElementById('tabTextImport');
    const tabVoiceImport = document.getElementById('tabVoiceImport');
    const contentTextImport = document.getElementById('contentTextImport');
    const contentVoiceImport = document.getElementById('contentVoiceImport');

    tabTextImport.addEventListener('click', () => {
        tabTextImport.classList.add('active');
        tabVoiceImport.classList.remove('active');
        contentTextImport.style.display = 'block';
        contentVoiceImport.style.display = 'none';
        if (isSpeechRecording && speechRecognition) {
            speechRecognition.stop();
        }
    });

    tabVoiceImport.addEventListener('click', () => {
        tabVoiceImport.classList.add('active');
        tabTextImport.classList.remove('active');
        contentVoiceImport.style.display = 'block';
        contentTextImport.style.display = 'none';
    });

    // Text Area Input Parser listener
    const importTextArea = document.getElementById('importTextArea');
    importTextArea.addEventListener('input', (e) => {
        parsedImportItems = parseTextItems(e.target.value, true);
        updateImportBadges();
    });

    // Remove badge event listener delegation
    document.getElementById('importBadgesContainer').addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-badge');
        if (removeBtn) {
            const index = parseInt(removeBtn.dataset.index, 10);
            parsedImportItems.splice(index, 1);
            updateImportBadges();
            
            // Sync text area if it was a manual text paste
            if (tabTextImport.classList.contains('active')) {
                importTextArea.value = parsedImportItems.map(item => {
                    return item.quantity > 1 ? `${item.quantity} ${item.name}` : item.name;
                }).join('، ');
            }
        }
    });

    // Voice dictation events
    const btnVoiceRecord = document.getElementById('btnVoiceRecord');
    const voiceWaves = document.getElementById('voiceWaves');
    const voiceMicIcon = document.getElementById('voiceMicIcon');
    const voiceStatusText = document.getElementById('voiceStatusText');

    btnVoiceRecord.addEventListener('click', () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            voiceStatusText.setAttribute('data-i18n', 'voiceStatusUnsupported');
            voiceStatusText.textContent = translations[state.language].voiceStatusUnsupported;
            return;
        }

        if (!speechRecognition) {
            speechRecognition = new SpeechRecognition();
            speechRecognition.continuous = true;
            speechRecognition.interimResults = false;
            
            speechRecognition.onstart = () => {
                isSpeechRecording = true;
                btnVoiceRecord.classList.add('recording');
                voiceWaves.style.display = 'flex';
                voiceMicIcon.className = 'fa-solid fa-square';
                voiceStatusText.setAttribute('data-i18n', 'voiceStatusListening');
                voiceStatusText.textContent = translations[state.language].voiceStatusListening;
            };

            speechRecognition.onend = () => {
                isSpeechRecording = false;
                btnVoiceRecord.classList.remove('recording');
                voiceWaves.style.display = 'none';
                voiceMicIcon.className = 'fa-solid fa-microphone';
                voiceStatusText.setAttribute('data-i18n', 'voiceStatusReady');
                voiceStatusText.textContent = translations[state.language].voiceStatusReady;
            };

            speechRecognition.onerror = (e) => {
                console.error('Speech recognition error:', e);
                voiceStatusText.setAttribute('data-i18n', 'voiceStatusError');
                voiceStatusText.textContent = translations[state.language].voiceStatusError;
            };

            speechRecognition.onresult = (event) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript + ' ';
                    }
                }
                if (finalTranscript.trim()) {
                    const newItems = parseTextItems(finalTranscript, false);
                    newItems.forEach(item => {
                        const exists = parsedImportItems.some(existing => existing.name.toLowerCase() === item.name.toLowerCase());
                        if (!exists) {
                            parsedImportItems.push(item);
                        }
                    });
                    updateImportBadges();
                }
            };
        }

        speechRecognition.lang = state.language === 'ar' ? 'ar-SA' : 'en-US';

        if (isSpeechRecording) {
            speechRecognition.stop();
        } else {
            speechRecognition.start();
        }
    });

    // Confirm Smart Import Action
    document.getElementById('btnConfirmSmartImport').addEventListener('click', () => {
        if (parsedImportItems.length === 0) {
            closeSmartImport();
            return;
        }

        const group = state.groups[currentImportGIndex];
        if (!group) return;

        // Initialize products array if missing
        group.products = group.products || [];

        // Save index of the first newly added product
        const startFocusIndex = group.products.length;

        // Add parsed items to products list
        parsedImportItems.forEach(item => {
            group.products.push({
                id: generateId(),
                name: item.name,
                price: 0,
                quantity: item.quantity
            });
        });

        saveState();
        renderGroups();
        calculate();
        closeSmartImport();

        // Auto-focus loop: Focus on the price field of the first newly added product row!
        setTimeout(() => {
            const groupCards = groupsContainer.querySelectorAll('.group-card');
            const targetGroupCard = groupCards[currentImportGIndex];
            if (targetGroupCard) {
                const productRows = targetGroupCard.querySelectorAll('.product-row');
                const firstNewRow = productRows[startFocusIndex];
                if (firstNewRow) {
                    const priceInput = firstNewRow.querySelector('.product-price-input');
                    if (priceInput) {
                        priceInput.focus();
                        priceInput.select();
                    }
                }
            }
        }, 100);
    });
}

// Apply dynamic program title updates
function applyProgramTitle() {
    const defaultAr = "حاسبة الدهمشي الذكية";
    const defaultEn = "Al-Dahmashy Smart Calculator";
    const customTitle = state.programTitle ? state.programTitle.trim() : "";
    const lang = state.language || 'ar';
    const displayTitle = customTitle || (lang === 'ar' ? defaultAr : defaultEn);

    // Update translations dictionary dynamically
    translations.ar.title = customTitle || defaultAr;
    translations.en.title = customTitle || defaultEn;

    translations.ar.aboutHeader = "حول " + (customTitle || defaultAr);
    translations.en.aboutHeader = "About " + (customTitle || defaultEn);

    translations.ar.calcAppLabel = `تم الحساب عبر ${customTitle || defaultAr} ✨`;
    translations.en.calcAppLabel = `Calculated via ${customTitle || defaultEn} ✨`;

    // Update document title
    if (customTitle) {
        document.title = customTitle + (lang === 'ar' ? ' الاحترافية للمبيعات' : ' - Professional Sales');
    } else {
        document.title = lang === 'ar' ? 'حاسبة الدهمشي الذكية الاحترافية للمبيعات' : 'Al-Dahmashy Smart Calculator - Professional Sales';
    }

    // Update main header h1
    const mainTitleEl = document.getElementById('mainProgramTitle');
    if (mainTitleEl) {
        mainTitleEl.textContent = displayTitle;
    }

    // Update about modal header
    const aboutHeaderEl = document.querySelector('#aboutModal .modal-header h3 span[data-i18n="aboutHeader"]');
    if (aboutHeaderEl) {
        aboutHeaderEl.textContent = translations[lang].aboutHeader;
    }

    // Update about modal body h2
    const aboutBodyTitleEl = document.getElementById('aboutBodyTitle');
    if (aboutBodyTitleEl) {
        if (customTitle) {
            aboutBodyTitleEl.textContent = customTitle + (lang === 'ar' ? ' الاحترافية للمبيعات' : ' - Professional Sales');
        } else {
            aboutBodyTitleEl.textContent = lang === 'ar' ? 'حاسبة الدهمشي الذكية الاحترافية للمبيعات' : 'Al-Dahmashy Smart Calculator - Professional Sales';
        }
    }

    // Update about modal footer copyright
    const aboutFooterCopyrightEl = document.getElementById('aboutFooterCopyright');
    if (aboutFooterCopyrightEl) {
        if (lang === 'ar') {
            aboutFooterCopyrightEl.textContent = `${customTitle || defaultAr} فكرة وتصميم وإنشاء يوسف عيد الدهمشي العنزي © 2026`;
        } else {
            aboutFooterCopyrightEl.textContent = `${customTitle || defaultEn} - Idea, Design & Creation by Yousef Eid Al-Dahmashy Al-Anazi © 2026`;
        }
    }
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

    applyProgramTitle();

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
    populateTutorialSelect();
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

        if (group.collapsed) {
            groupCard.classList.add('collapsed');
        }

        // Render Group Card Header
        groupCard.innerHTML = `
            <div class="group-card-header" style="cursor: pointer; user-select: none;">
                <div style="display: flex; align-items: center; gap: 0.75rem; flex-grow: 1;" class="group-title-container">
                    <button type="button" class="btn-toggle-collapse" style="background: transparent; border: none; color: var(--text-secondary); cursor: pointer; font-size: 1.15rem; display: flex; align-items: center; justify-content: center; width: 1.8rem; height: 1.8rem; transition: var(--transition);">
                        <i class="fa-solid ${group.collapsed ? 'fa-chevron-down' : 'fa-chevron-up'}"></i>
                    </button>
                    <i class="fa-solid fa-boxes-stacked" style="color: var(--primary); font-size: 1.4rem;"></i>
                    <input type="text" class="group-name-input" value="${group.name}" 
                        placeholder="${translations[lang].groupPlaceholder}" aria-label="${translations[lang].groupTitle}"
                        style="cursor: text;">
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    ${state.groups.length > 1 ? `
                        <button type="button" class="btn-delete delete-group-btn" title="${lang === 'ar' ? 'حذف المجموعة' : 'Delete Group'}" style="width: 2.2rem; height: 2.2rem; display: flex; justify-content: center; align-items: center;">
                            <i class="fa-solid fa-trash-can" style="font-size: 1rem;"></i>
                        </button>
                    ` : ''}
                </div>
            </div>
            
            <!-- Group Body Container -->
            <div class="group-card-body" style="${group.collapsed ? 'display: none;' : ''}">
                <!-- Products Section -->
                <div style="margin-bottom: 1.5rem;">
                    <div class="discounts-section-title" style="margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
                        <h2><i class="fa-solid fa-cart-shopping"></i> <span>${translations[lang].productsTitle}</span></h2>
                        <div style="display: flex; gap: 0.45rem; flex-wrap: wrap;">
                            <button type="button" class="btn btn-secondary add-product-btn" style="width: auto; padding: 0.4rem 1rem; font-size: 0.9rem;">
                                <i class="fa-solid fa-plus"></i> <span>${translations[lang].addProduct}</span>
                            </button>
                            <button type="button" class="btn btn-secondary smart-import-btn" style="width: auto; padding: 0.4rem 1rem; font-size: 0.9rem; border: 1px dashed var(--primary); color: var(--primary); background: transparent;">
                                <i class="fa-solid fa-wand-magic-sparkles"></i> <span>${translations[lang].smartImportBtn}</span>
                            </button>
                        </div>
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
            deleteGroupBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                state.groups = state.groups.filter(g => g.id !== group.id);
                saveState();
                renderGroups();
                calculate();
            });
        }

        // Toggle collapse header click listener
        const headerEl = groupCard.querySelector('.group-card-header');
        headerEl.addEventListener('click', (e) => {
            if (e.target.closest('.group-name-input') || e.target.closest('.btn-delete')) {
                return;
            }
            group.collapsed = !group.collapsed;
            saveState();
            renderGroups();
        });

        // Add Product button listener
        addProductBtn.addEventListener('click', () => {
            group.products.push({ id: generateId(), name: '', price: '', quantity: '' });
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
                product.price = val === '' ? '' : (parseFloat(val) || 0);
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
                product.quantity = val === '' ? '' : (parseInt(val, 10) || 0);
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

    // Update Deal Dashboard Section
    const totalStructureValue = grandOriginalTotalValue + vatAmount;
    
    const segmentNet = document.getElementById('chartSegmentNet');
    const segmentVat = document.getElementById('chartSegmentVat');
    const segmentSaved = document.getElementById('chartSegmentSaved');
    
    const legendNetVal = document.getElementById('legendNetValue');
    const legendNetPct = document.getElementById('legendNetPercent');
    
    const legendVatBox = document.getElementById('legendVatBox');
    const legendVatVal = document.getElementById('legendVatValue');
    const legendVatPct = document.getElementById('legendVatPercent');
    
    const legendSavedVal = document.getElementById('legendSavedValue');
    const legendSavedPct = document.getElementById('legendSavedPercent');
    
    if (totalStructureValue > 0) {
        const pctNet = (grandNetSum / totalStructureValue) * 100;
        const pctVat = state.applyVat ? (vatAmount / totalStructureValue) * 100 : 0;
        const pctSaved = (grandTotalSavedValue / totalStructureValue) * 100;
        
        // Update Chart segments
        if (pctNet > 5) {
            segmentNet.style.width = `${pctNet}%`;
            segmentNet.textContent = `${pctNet.toFixed(0)}%`;
        } else if (pctNet > 0) {
            segmentNet.style.width = `${pctNet}%`;
            segmentNet.textContent = '';
        } else {
            segmentNet.style.width = '0%';
            segmentNet.textContent = '';
        }
        
        if (state.applyVat && pctVat > 5) {
            segmentVat.style.width = `${pctVat}%`;
            segmentVat.textContent = `${pctVat.toFixed(0)}%`;
            segmentVat.style.display = 'flex';
        } else if (state.applyVat && pctVat > 0) {
            segmentVat.style.width = `${pctVat}%`;
            segmentVat.textContent = '';
            segmentVat.style.display = 'flex';
        } else {
            segmentVat.style.width = '0%';
            segmentVat.textContent = '';
            segmentVat.style.display = 'none';
        }
        
        if (pctSaved > 5) {
            segmentSaved.style.width = `${pctSaved}%`;
            segmentSaved.textContent = `${pctSaved.toFixed(0)}%`;
        } else if (pctSaved > 0) {
            segmentSaved.style.width = `${pctSaved}%`;
            segmentSaved.textContent = '';
        } else {
            segmentSaved.style.width = '0%';
            segmentSaved.textContent = '';
        }
        
        // Update Legends
        legendNetVal.textContent = `${formatNumber(grandNetSum)} ${currency}`;
        legendNetPct.textContent = `(${pctNet.toFixed(1)}%)`;
        
        if (state.applyVat) {
            legendVatBox.style.display = 'flex';
            legendVatVal.textContent = `${formatNumber(vatAmount)} ${currency}`;
            legendVatPct.textContent = `(${pctVat.toFixed(1)}%)`;
        } else {
            legendVatBox.style.display = 'none';
        }
        
        legendSavedVal.textContent = `${formatNumber(grandTotalSavedValue)} ${currency}`;
        legendSavedPct.textContent = `(${pctSaved.toFixed(1)}%)`;
    } else {
        segmentNet.style.width = '0%';
        segmentNet.textContent = '';
        segmentVat.style.width = '0%';
        segmentVat.textContent = '';
        segmentVat.style.display = 'none';
        segmentSaved.style.width = '0%';
        segmentSaved.textContent = '';
        
        legendNetVal.textContent = `0.00 ${currency}`;
        legendNetPct.textContent = `(0%)`;
        legendVatBox.style.display = state.applyVat ? 'flex' : 'none';
        legendVatVal.textContent = `0.00 ${currency}`;
        legendVatPct.textContent = `(0%)`;
        legendSavedVal.textContent = `0.00 ${currency}`;
        legendSavedPct.textContent = `(0%)`;
    }
}

// Save state to localStorage
function saveState() {
    safeSetLocalStorage('sales_calculator_state_v13', JSON.stringify(state));
}

// Export calculations data to a highly compatible Excel CSV spreadsheet
function exportCSV() {
    triggerUsageStats();
    const lang = state.language;
    const currency = getActiveCurrency();
    
    if (!state.groups || state.groups.length === 0) {
        alert(translations[lang].noGroupData || "No data to export");
        return;
    }
    
    let csvContent = "\uFEFFsep=,\n"; // UTF-8 BOM and Excel separator declaration
    
    // Headers
    const headers = lang === 'ar' ? 
        ["المجموعة", "اسم الصنف", "سعر الوحدة", "الكمية", "الإجمالي قبل الخصم", "نسبة الخصم", "الصافي بعد الخصم"] :
        ["Group", "Item Name", "Unit Price", "Quantity", "Total Before Discount", "Discount Ratio", "Net Price"];
        
    csvContent += headers.join(",") + "\n";
    
    let grandOriginal = 0;
    let grandNet = 0;
    
    state.groups.forEach((group, gIndex) => {
        const groupName = group.name.trim() || (lang === 'ar' ? `المجموعة ${gIndex + 1}` : `Group ${gIndex + 1}`);
        
        let groupOriginalTotal = 0;
        group.products.forEach(p => groupOriginalTotal += (p.price || 0) * (p.quantity || 0));
        
        let currentPrice = groupOriginalTotal;
        const totalQuantity = group.products.reduce((sum, p) => sum + (p.quantity || 0), 0);
        
        // Calculate group net price after discounts
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
        }
        
        const groupDiscountRatio = groupOriginalTotal > 0 ? (groupOriginalTotal - currentPrice) / groupOriginalTotal : 0;
        
        group.products.forEach((product) => {
            const prodName = product.name.trim() || (lang === 'ar' ? "منتج بدون اسم" : "Unnamed Product");
            const originalLineVal = (product.price || 0) * (product.quantity || 0);
            const discountLineVal = originalLineVal * groupDiscountRatio;
            const netLineVal = originalLineVal - discountLineVal;
            
            const row = [
                `"${groupName.replace(/"/g, '""')}"`,
                `"${prodName.replace(/"/g, '""')}"`,
                product.price || 0,
                product.quantity || 0,
                originalLineVal,
                `"${(groupDiscountRatio * 100).toFixed(1)}%"`,
                netLineVal
            ];
            csvContent += row.join(",") + "\n";
        });
        
        grandOriginal += groupOriginalTotal;
        grandNet += currentPrice;
    });
    
    // Add blank row
    csvContent += "\n";
    
    // Add Grand Totals summary
    const labelCol = lang === 'ar' ? "الإجمالي العام" : "Grand Totals";
    const savedVal = Math.max(0, preciseRound(grandOriginal - grandNet));
    const effectivePct = grandOriginal > 0 ? (savedVal / grandOriginal) * 100 : 0;
    let vatAmount = 0;
    if (state.applyVat) {
        vatAmount = preciseRound(grandNet * (state.vatRate / 100));
    }
    const finalNet = preciseRound(grandNet + vatAmount);
    
    const totals = [
        [labelCol, lang === 'ar' ? "إجمالي السعر الأصلي الكلي" : "Grand Original Total", grandOriginal, currency],
        [labelCol, lang === 'ar' ? "إجمالي الوفر الكلي" : "Grand Total Saved", savedVal, currency],
        [labelCol, lang === 'ar' ? "النسبة الكلية الفعلية للخصم" : "Effective Discount Rate", `${effectivePct.toFixed(2)}%`, ""],
        [labelCol, lang === 'ar' ? "الإجمالي قبل الضريبة" : "Grand Total Before VAT", grandNet, currency]
    ];
    
    if (state.applyVat) {
        totals.push([labelCol, `${lang === 'ar' ? 'ضريبة القيمة المضافة' : 'VAT'} (${state.vatRate}%)`, vatAmount, currency]);
    }
    totals.push([labelCol, lang === 'ar' ? "الصافي النهائي الكلي" : "Grand Final Net", finalNet, currency]);
    
    totals.forEach(t => {
        const row = [
            `"${t[0]}"`,
            `"${t[1]}"`,
            t[2],
            "",
            "",
            "",
            t[3] ? `"${t[2]} ${t[3]}"` : `"${t[2]}"`
        ];
        csvContent += row.join(",") + "\n";
    });
    
    // Download triggering
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", lang === 'ar' ? "حسابات_المبيعات_الدهشي.csv" : "sales_calculations_report.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Export quote settings and data to JSON file safely (excluding secure login data)
function saveProjectJSON() {
    triggerUsageStats();
    const lang = state.language;
    
    const exportData = {
        groups: state.groups,
        presets: state.presets,
        terms: state.terms,
        customProducts: state.customProducts,
        currency: state.currency,
        customCurrency: state.customCurrency,
        applyVat: state.applyVat,
        vatRate: state.vatRate,
        programTitle: state.programTitle,
        visibleButtons: state.visibleButtons
    };
    
    const jsonString = JSON.stringify(exportData, null, 4);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", lang === 'ar' ? "مشروع_حسابات_الدهمشي.json" : "sales_calculator_project.json");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Import project calculations JSON back into the state
function loadProjectJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const lang = state.language;
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            // Validate basic structure
            if (!data || !Array.isArray(data.groups) || data.groups.length === 0) {
                throw new Error("Invalid groups array");
            }
            
            // Perform schema validation on groups
            const isValid = data.groups.every(g => {
                return g && typeof g === 'object' && g.id && typeof g.name === 'string' && Array.isArray(g.products) && Array.isArray(g.discounts);
            });
            
            if (!isValid) {
                throw new Error("Invalid group schema");
            }
            
            // Safely merge imported project state
            state.groups = data.groups;
            if (Array.isArray(data.presets)) state.presets = data.presets;
            if (Array.isArray(data.terms)) state.terms = data.terms;
            if (Array.isArray(data.customProducts)) state.customProducts = data.customProducts;
            if (data.currency) state.currency = data.currency;
            if (data.customCurrency) state.customCurrency = data.customCurrency;
            if (data.applyVat !== undefined) state.applyVat = data.applyVat;
            if (data.vatRate !== undefined) state.vatRate = data.vatRate;
            if (data.programTitle !== undefined) state.programTitle = data.programTitle;
            if (data.visibleButtons) state.visibleButtons = { ...state.visibleButtons, ...data.visibleButtons };
            
            // Save state and update UI
            saveState();
            
            // Sync UI widgets
            currencySelect.value = state.currency;
            customCurrencyInput.value = state.customCurrency;
            toggleCustomCurrencyVisibility();
            applyVatCheckbox.checked = state.applyVat;
            vatRateInput.value = state.vatRate;
            
            if (state.lockTheme) {
                themeSelect.value = state.lockedTheme;
                themeSelect.disabled = true;
                applyTheme(state.lockedTheme);
            } else {
                themeSelect.disabled = false;
                themeSelect.value = state.theme;
                applyTheme(state.theme);
            }
            
            // Full redraw
            applyProgramTitle();
            renderDatalist();
            renderGroups();
            calculate();
            applyVisibleButtons();
            
            alert(translations[lang].importSuccess || "Project imported successfully! 🎉");
        } catch (err) {
            console.error("Failed to import project JSON:", err);
            alert(translations[lang].importError || "Failed to import project. Please check the file.");
        } finally {
            event.target.value = ''; // Reset input element so same file can be loaded again
        }
    };
    
    reader.onerror = function() {
        alert(translations[lang].importError || "Failed to import project. Please check the file.");
        event.target.value = '';
    };
    
    reader.readAsText(file);
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



// Helper to call CounterAPI with local caching for robust fallbacks
async function handleStats() {
    const namespace = "yousef_aldahmashy_calculators";
    const visitorKey = "visitor_count";
    const usageKey = "usage_count";

    const visitorValEl = document.getElementById('visitorCountVal');
    const usageValEl = document.getElementById('usageCountVal');

    // 0. Load last known values from localStorage immediately to prevent layout shifts or empty state
    const cachedVisitors = safeGetLocalStorage('last_known_visitors') || "1,248";
    const cachedUsage = safeGetLocalStorage('last_known_usage') || "954";

    if (visitorValEl) visitorValEl.textContent = cachedVisitors;
    if (usageValEl) usageValEl.textContent = cachedUsage;

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

        if (visitorCount) {
            const formatted = formatStatNumber(visitorCount);
            if (visitorValEl) visitorValEl.textContent = formatted;
            safeSetLocalStorage('last_known_visitors', formatted);
        }
    } catch (e) {
        console.error("Error loading visitor count:", e);
        // Retains cached value
    }

    // 2. Handle Usage Count (Get current value)
    try {
        const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${usageKey}`);
        let usageCount;
        if (res.ok) {
            const data = await res.json();
            usageCount = data.value;
        }
        if (usageCount) {
            const formatted = formatStatNumber(usageCount);
            if (usageValEl) usageValEl.textContent = formatted;
            safeSetLocalStorage('last_known_usage', formatted);
        }
    } catch (e) {
        console.error("Error loading usage count:", e);
        // Retains cached value
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
                const formatted = formatStatNumber(data.value);
                if (usageValEl) {
                    usageValEl.textContent = formatted;
                }
                safeSetLocalStorage('last_known_usage', formatted);
            }
        } catch (e) {
            console.error("Error incrementing usage count:", e);
        }
    }
}

function formatStatNumber(num) {
    return num.toLocaleString('en-US');
}

// Dynamic script loader helper
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Show blurred backdrop loading overlay with spinner
function showLoading(message) {
    let overlay = document.getElementById('dynamicLoadingOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'dynamicLoadingOverlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0, 0, 0, 0.75)';
        overlay.style.backdropFilter = 'blur(5px)';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '99999';
        overlay.style.color = '#fff';
        overlay.style.fontFamily = "'Tajawal', sans-serif";
        
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.style.width = '50px';
        spinner.style.height = '50px';
        spinner.style.border = '5px solid rgba(255, 255, 255, 0.1)';
        spinner.style.borderTop = '5px solid var(--primary)';
        spinner.style.borderRadius = '50%';
        spinner.style.animation = 'spin 1s linear infinite';
        spinner.style.marginBottom = '1rem';
        
        if (!document.getElementById('spinStyle')) {
            const style = document.createElement('style');
            style.id = 'spinStyle';
            style.innerHTML = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        overlay.appendChild(spinner);
        
        const text = document.createElement('div');
        text.id = 'dynamicLoadingText';
        text.style.fontSize = '1.2rem';
        text.style.fontWeight = 'bold';
        overlay.appendChild(text);
        
        document.body.appendChild(overlay);
    }
    document.getElementById('dynamicLoadingText').textContent = message;
    overlay.style.display = 'flex';
}

// Hide loading overlay
function hideLoading() {
    const overlay = document.getElementById('dynamicLoadingOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}




// YouTube embed parser utility
function getYoutubeEmbedUrl(url) {
    if (!url) return null;
    
    // Check if it's already an embed link
    if (url.includes('youtube.com/embed/')) {
        return url;
    }
    
    // Check standard watch url
    // youtube.com/watch?v=ID or v=ID&...
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    
    if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
    }
    
    // Check shorts url
    // youtube.com/shorts/ID
    if (url.includes('youtube.com/shorts/')) {
        let parts = url.split('/shorts/');
        if (parts[1]) {
            let id = parts[1].split(/[?#&]/)[0];
            return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
        }
    }
    
    return null; // Not a direct video link
}

// Get unified list of default and custom videos
function getAllVideosList() {
    const list = [];
    
    if (Array.isArray(state.tutorialLinks)) {
        state.tutorialLinks.forEach((item, index) => {
            list.push({
                key: item.key || `tutorial_${index}`,
                title: item.label || '',
                url: item.url || '',
                isCustom: false
            });
        });
    }
    
    if (state.customTutorials && state.customTutorials.length > 0) {
        state.customTutorials.forEach((item, index) => {
            list.push({
                key: `custom_${index}`,
                title: item.title,
                url: item.url,
                isCustom: true,
                customIndex: index
            });
        });
    }
    
    return list;
}

// Populate the main tutorial dropdown dynamically
function populateTutorialSelect() {
    const select = document.getElementById('tutorialSelect');
    if (!select) return;
    
    const lang = state.language || 'ar';
    const currentVal = select.value;
    
    select.innerHTML = '';
    
    // Placeholder
    const placeholderOpt = document.createElement('option');
    placeholderOpt.value = '';
    placeholderOpt.disabled = true;
    placeholderOpt.selected = !currentVal;
    placeholderOpt.textContent = translations[lang].tutorialSelectPlaceholder || (lang === 'ar' ? 'القائمة' : 'Menu');
    select.appendChild(placeholderOpt);
    
    // Dynamic tutorial links
    if (Array.isArray(state.tutorialLinks)) {
        state.tutorialLinks.forEach((item, index) => {
            const opt = document.createElement('option');
            opt.value = item.key || `tutorial_${index}`;
            opt.selected = (currentVal === (item.key || `tutorial_${index}`));
            opt.textContent = item.label || '';
            select.appendChild(opt);
        });
    }
    
    // Custom tutorials
    if (state.customTutorials && state.customTutorials.length > 0) {
        state.customTutorials.forEach((item, index) => {
            const opt = document.createElement('option');
            opt.value = `custom_${index}`;
            opt.selected = (currentVal === `custom_${index}`);
            opt.textContent = item.title;
            select.appendChild(opt);
        });
    }
}

// Video Gallery Modal Management
let currentVideoIndex = 0;

function openVideoGallery(index) {
    currentVideoIndex = index;
    const modal = document.getElementById('videoGalleryModal');
    if (modal) {
        modal.style.display = 'flex';
        renderActiveVideo();
    }
}

function renderActiveVideo() {
    const allVideos = getAllVideosList();
    if (currentVideoIndex < 0 || currentVideoIndex >= allVideos.length) {
        currentVideoIndex = 0;
    }
    
    const activeVideo = allVideos[currentVideoIndex];
    if (!activeVideo) return;
    
    // Set title
    document.getElementById('galleryActiveTitle').textContent = activeVideo.title;
    
    // Progress text
    document.getElementById('galleryProgressText').textContent = `${currentVideoIndex + 1} / ${allVideos.length}`;
    
    // Check embed link
    const embedUrl = getYoutubeEmbedUrl(activeVideo.url);
    const iframe = document.getElementById('galleryIframe');
    const fallbackUI = document.getElementById('galleryFallbackUI');
    
    if (embedUrl) {
        iframe.src = embedUrl;
        iframe.style.display = 'block';
        fallbackUI.style.display = 'none';
    } else {
        iframe.src = '';
        iframe.style.display = 'none';
        fallbackUI.style.display = 'flex';
        
        document.getElementById('galleryFallbackText').textContent = 
            state.language === 'ar' 
            ? `الرابط "${activeVideo.title}" عبارة عن رابط خارجي أو بحث يوتيوب.`
            : `The link for "${activeVideo.title}" is an external or search link.`;
            
        const fallbackLink = document.getElementById('galleryFallbackLink');
        fallbackLink.href = activeVideo.url || '#';
    }
    
    renderGalleryPlaylist();
}

function renderGalleryPlaylist() {
    const track = document.getElementById('galleryPlaylistTrack');
    if (!track) return;
    track.innerHTML = '';
    
    const allVideos = getAllVideosList();
    const lang = state.language || 'ar';
    
    allVideos.forEach((video, index) => {
        const item = document.createElement('div');
        item.className = `playlist-item${index === currentVideoIndex ? ' active' : ''}`;
        
        const isEmbeddable = !!getYoutubeEmbedUrl(video.url);
        const iconHtml = isEmbeddable 
            ? '<i class="fa-solid fa-play"></i>' 
            : '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
        const typeText = video.isCustom 
            ? (lang === 'ar' ? 'فيديو مخصص' : 'Custom Video')
            : (lang === 'ar' ? 'شرح أساسي' : 'Core Tutorial');
            
        item.innerHTML = `
            <span class="playlist-item-title">${video.title}</span>
            <div class="playlist-item-badge">
                ${iconHtml}
                <span>${typeText}</span>
            </div>
        `;
        
        item.addEventListener('click', () => {
            currentVideoIndex = index;
            renderActiveVideo();
        });
        
        track.appendChild(item);
    });
    
    // Auto scroll the active playlist item into view
    setTimeout(() => {
        const activeItem = track.querySelector('.playlist-item.active');
        if (activeItem) {
            const trackWidth = track.clientWidth;
            const itemLeft = activeItem.offsetLeft;
            const itemWidth = activeItem.clientWidth;
            track.scrollLeft = itemLeft - (trackWidth / 2) + (itemWidth / 2);
        }
    }, 100);
}

function nextVideo() {
    const allVideos = getAllVideosList();
    if (allVideos.length === 0) return;
    currentVideoIndex = (currentVideoIndex + 1) % allVideos.length;
    renderActiveVideo();
}

function prevVideo() {
    const allVideos = getAllVideosList();
    if (allVideos.length === 0) return;
    currentVideoIndex = (currentVideoIndex - 1 + allVideos.length) % allVideos.length;
    renderActiveVideo();
}

function closeVideoGallery() {
    const modal = document.getElementById('videoGalleryModal');
    if (modal) {
        modal.style.display = 'none';
    }
    const iframe = document.getElementById('galleryIframe');
    if (iframe) {
        iframe.src = ''; // immediately stops any playing video
    }
}

// Render dynamic custom videos list in Admin settings
function renderAdminCustomVideosList() {
    const container = document.getElementById('adminCustomVideosListContainer');
    if (!container) return;
    container.innerHTML = '';
    
    state.customTutorials = state.customTutorials || [];
    const lang = state.language || 'ar';
    
    if (state.customTutorials.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.style.cssText = 'text-align: center; color: var(--text-muted); font-size: 0.9rem; padding: 1rem 0;';
        emptyMsg.textContent = lang === 'ar' ? 'لا توجد شروحات فيديو مضافة حالياً.' : 'No custom videos added yet.';
        container.appendChild(emptyMsg);
        return;
    }
    
    state.customTutorials.forEach((video, index) => {
        const row = document.createElement('div');
        row.className = 'settings-user-row';
        row.style.cssText = 'display: flex; justify-content: space-between; align-items: center; background: rgba(0, 0, 0, 0.15); padding: 0.55rem 0.75rem; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.04); margin-bottom: 0.4rem; gap: 0.5rem;';
        
        const info = document.createElement('div');
        info.style.cssText = 'display: flex; flex-direction: column; gap: 0.15rem; flex-grow: 1; min-width: 0;';
        
        const titleSpan = document.createElement('span');
        titleSpan.style.cssText = 'font-weight: 700; font-size: 0.9rem; color: var(--text-primary); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;';
        titleSpan.textContent = video.title;
        
        const urlSpan = document.createElement('span');
        urlSpan.style.cssText = 'font-size: 0.75rem; color: var(--text-muted); text-align: left; direction: ltr; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;';
        urlSpan.textContent = video.url;
        
        info.appendChild(titleSpan);
        info.appendChild(urlSpan);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'lang-btn';
        deleteBtn.style.cssText = 'background: rgba(220, 53, 69, 0.15); border-color: rgba(220, 53, 69, 0.3); color: #f87171; padding: 0.25rem 0.5rem; font-size: 0.8rem; height: auto; min-height: unset;';
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.title = lang === 'ar' ? 'حذف الفيديو' : 'Delete Video';
        
        deleteBtn.addEventListener('click', () => {
            const confirmMsg = lang === 'ar'
                ? `هل أنت متأكد من حذف فيديو الشرح "${video.title}"؟`
                : `Are you sure you want to delete the video tutorial "${video.title}"?`;
            if (confirm(confirmMsg)) {
                state.customTutorials.splice(index, 1);
                saveState();
                renderAdminCustomVideosList();
                populateTutorialSelect();
            }
        });
        
        row.appendChild(info);
        row.appendChild(deleteBtn);
        container.appendChild(row);
    });
}

let currentImportGIndex = 0;
let parsedImportItems = [];
let speechRecognition = null;
let isSpeechRecording = false;

// Clean leading Arabic waw prefix from word
function cleanArabicWawPrefix(word) {
    word = word.trim();
    // List of common Arabic words starting with Waw that we should NOT strip Waw from
    const keepWaw = ["ورق", "ولد", "وفاء", "وطن", "وضوء", "وجه", "وقت", "وسام", "وجبة", "وصفة", "ورد", "وردة", "وبر", "وتد", "وتار", "وجع", "وحش", "وداد", "وديع", "وسادة", "وسخ", "وسط", "وسيط", "وصف", "وصل", "وصول", "وعد", "وفاة", "وفد", "وقود", "وقوف", "وكيل", "ولاء", "وليد", "وهب", "وهج", "وهم"];
    if (word.startsWith('و') && word.length > 2) {
        // Check if the first word itself is a known word starting with Waw
        const firstWordOfItem = word.split(/\s+/)[0];
        if (keepWaw.some(k => firstWordOfItem.startsWith(k))) {
            return word;
        }
        return word.substring(1).trim();
    }
    return word;
}

// Parse quantity and name from a token
function parseQuantityAndName(token) {
    let name = token.trim();
    let quantity = 1;
    
    // 1. Check for explicit "عدد [رقم]" at the end
    // Example: "مكيف جري 5 طن عدد 2" or "طماطم عدد 4"
    const countAtEndRegex = /^(.*?)\s+عدد\s+(\d+)$/;
    let match = name.match(countAtEndRegex);
    if (match) {
        return { name: match[1].trim(), quantity: parseInt(match[2], 10), hasQuantity: true };
    }
    
    // 2. Check for number at the start: "[رقم] [اسم]"
    // Example: "3 تفاح" or "15 علبة مناديل"
    const numAtStartRegex = /^(\d+)\s+(.+)$/;
    match = name.match(numAtStartRegex);
    if (match) {
        let qty = parseInt(match[1], 10);
        let rest = match[2].trim();
        // Remove unit if present at the start of rest, e.g. "علبة مناديل" -> "مناديل"
        const unitStartRegex = /^(حبة|حبات|كرتون|علبة|كيس|كيلو|مل)\s+(.+)$/;
        let unitMatch = rest.match(unitStartRegex);
        if (unitMatch) {
            rest = unitMatch[2].trim();
        }
        return { name: rest, quantity: qty, hasQuantity: true };
    }

    // 3. Check for number + unit at the end: "[اسم] [رقم] [وحدة]"
    // Example: "تفاح 5 حبات" or "طماطم 2 كرتون"
    const numUnitAtEndRegex = /^(.*?)\s+(\d+)\s*(حبة|حبات|كرتون|علبة|كيس|كيلو|مل)$/;
    match = name.match(numUnitAtEndRegex);
    if (match) {
        return { name: match[1].trim(), quantity: parseInt(match[2], 10), hasQuantity: true };
    }

    // 4. Check for Arabic number word at start
    // Example: "ثلاثة تفاح" or "خمس حبات بصل"
    const arabicNumbersMap = {
        'واحد': 1, 'واحدة': 1,
        'اثنين': 2, 'اثنان': 2, 'زوج': 2,
        'ثلاثة': 3, 'ثلاث': 3, 'تلاتة': 3, 'تلات': 3,
        'أربعة': 4, 'أربع': 4,
        'خمسة': 5, 'خمس': 5,
        'ستة': 6, 'ست': 6,
        'سبعة': 7, 'سبع': 7,
        'ثمانية': 8, 'ثمان': 8, 'تمانية': 8, 'تمان': 8,
        'تسعة': 9, 'تسع': 9,
        'عشرة': 10, 'عشر': 10
    };
    
    const words = name.split(/\s+/);
    if (words.length > 1) {
        const firstWord = words[0];
        if (arabicNumbersMap[firstWord]) {
            let qty = arabicNumbersMap[firstWord];
            let restIndex = 1;
            // check if second word is a unit like "حبات" or "كرتون"
            if (words.length > 2 && /^(حبة|حبات|كرتون|علبة|كيس|كيلو|مل)$/.test(words[1])) {
                restIndex = 2;
            }
            const restName = words.slice(restIndex).join(' ').trim();
            if (restName) {
                return { name: restName, quantity: qty, hasQuantity: true };
            }
        }
    }

    // 5. Check for Arabic number word or unit at end
    // Example: "تفاح حبتين" or "تفاح ثلاث حبات"
    if (words.length > 1) {
        const lastWord = words[words.length - 1];
        if (lastWord === 'حبتين' || lastWord === 'زوج') {
            const restName = words.slice(0, words.length - 1).join(' ').trim();
            return { name: restName, quantity: 2, hasQuantity: true };
        }
        
        if (words.length > 2) {
            const secondToLast = words[words.length - 2];
            const last = words[words.length - 1];
            if (/^(حبة|حبات|كرتون|علبة|كيس|كيلو|مل)$/.test(last)) {
                if (arabicNumbersMap[secondToLast]) {
                    const restName = words.slice(0, words.length - 2).join(' ').trim();
                    return { name: restName, quantity: arabicNumbersMap[secondToLast], hasQuantity: true };
                }
            }
        }
    }

    // 6. Check for simple number at the end: "[اسم] [رقم]"
    // Example: "تفاح 3"
    const numAtEndRegex = /^(.*?)\s+(\d+)$/;
    match = name.match(numAtEndRegex);
    if (match) {
        return { name: match[1].trim(), quantity: parseInt(match[2], 10), hasQuantity: true };
    }
    
    return { name, quantity, hasQuantity: false };
}

// Parse text list of items
function parseTextItems(text, splitSpaces = true) {
    if (!text) return [];
    const trimmed = text.trim();
    // Split by newlines, commas, semicolons, dashes, bullet points, or " و " / " أو " / " ثم "
    const rawTokens = trimmed.split(/[\n\r،,؛;\-•*]|\s+و\s+|\s+أو\s+|\s+ثم\s+/);
    let items = [];
    
    rawTokens.forEach(token => {
        let cleaned = token.trim();
        if (!cleaned) return;
        cleaned = cleanArabicWawPrefix(cleaned);
        if (cleaned) {
            const parsed = parseQuantityAndName(cleaned);
            if (parsed.name) {
                items.push(parsed);
            }
        }
    });
    
    // Fallback for space-separated single lines (like: "بصل طماط خيار")
    if (items.length === 1 && !items[0].hasQuantity && splitSpaces && trimmed.split(/\s+/).length > 1 && !trimmed.includes('،') && !trimmed.includes(',') && !trimmed.includes('\n') && !trimmed.includes('\r')) {
        const words = trimmed.split(/\s+/);
        items = [];
        words.forEach(word => {
            let cleaned = word.trim();
            if (!cleaned) return;
            cleaned = cleanArabicWawPrefix(cleaned);
            if (cleaned) {
                const parsed = parseQuantityAndName(cleaned);
                if (parsed.name) {
                    items.push(parsed);
                }
            }
        });
    }
    
    return items;
}

// Open Smart Import dialog
function openSmartImportModal(gIndex) {
    currentImportGIndex = gIndex;
    parsedImportItems = [];
    
    // Reset inputs
    document.getElementById('importTextArea').value = '';
    
    // Reset tabs
    document.getElementById('tabTextImport').classList.add('active');
    document.getElementById('tabVoiceImport').classList.remove('active');
    document.getElementById('contentTextImport').style.display = 'block';
    document.getElementById('contentVoiceImport').style.display = 'none';
    
    // Stop recording if active
    if (isSpeechRecording && speechRecognition) {
        speechRecognition.stop();
    }
    
    // Reset speech states
    const recordBtn = document.getElementById('btnVoiceRecord');
    recordBtn.classList.remove('recording');
    document.getElementById('voiceWaves').style.display = 'none';
    document.getElementById('voiceMicIcon').className = 'fa-solid fa-microphone';
    document.getElementById('voiceStatusText').setAttribute('data-i18n', 'voiceStatusReady');
    document.getElementById('voiceStatusText').textContent = translations[state.language].voiceStatusReady;
    
    updateImportBadges();
    
    const smartImportModal = document.getElementById('smartImportModal');
    smartImportModal.style.display = 'flex';
}

// Update badges container
function updateImportBadges() {
    const container = document.getElementById('importBadgesContainer');
    const noItemsText = document.getElementById('noImportItemsText');
    const countBadge = document.getElementById('parsedCountBadge');
    
    // Remove existing badges except the "no items" text
    const badges = container.querySelectorAll('.import-badge');
    badges.forEach(b => b.remove());
    
    countBadge.textContent = parsedImportItems.length;
    
    if (parsedImportItems.length === 0) {
        noItemsText.style.display = 'block';
        return;
    }
    
    noItemsText.style.display = 'none';
    
    parsedImportItems.forEach((item, index) => {
        const badge = document.createElement('div');
        badge.className = 'import-badge';
        const quantityLabel = item.quantity > 1 ? ` (${item.quantity}x)` : '';
        badge.innerHTML = `
            <span>${item.name}${quantityLabel}</span>
            <span class="remove-badge" data-index="${index}">&times;</span>
        `;
        container.appendChild(badge);
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);

