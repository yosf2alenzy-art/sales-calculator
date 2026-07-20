const toEnglishDigits = (str) => {
    if (typeof str !== 'string') str = String(str);
    const arabicIndic = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
    for (let i = 0; i < 10; i++) {
        str = str.replace(arabicIndic[i], i);
    }
    return str;
};

const wordNumMap = {
    'واحد': 1, 'واحدة': 1, 'طن': 1,
    'اثنين': 2, 'اثنان': 2, 'حبتين': 2, 'زوج': 2, 'طنيين': 2, 'طنين': 2,
    'ثلاثة': 3, 'ثلاث': 3, 'تلاتة': 3, 'تلات': 3,
    'أربعة': 4, 'أربع': 4, 'اربعة': 4, 'اربع': 4,
    'خمسة': 5, 'خمس': 5,
    'ستة': 6, 'ست': 6,
    'سبعة': 7, 'سبع': 7,
    'ثمانية': 8, 'ثمان': 8, 'تمانية': 8, 'تمان': 8, 'ثمانة': 8, 'ثمانه': 8,
    'تسعة': 9, 'تسع': 9,
    'عشرة': 10, 'عشر': 10,
    'عشرين': 20, 'ثلاثين': 30, 'تلاتين': 30, 'أربعين': 40, 'اربعين': 40,
    'خمسين': 50, 'ستين': 60, 'سبعين': 70, 'ثمانين': 80, 'تمانين': 80, 'تسعين': 90,
    'مية': 100, 'مائة': 100, 'ميتين': 200, 'ألف': 1000, 'الف': 1000, 'آلاف': 1000, 'الاف': 1000
};

function parseArabicNumberWords(phrase) {
    if (!phrase) return 0;
    const clean = phrase.trim();
    if (/^\d+(?:\.\d+)?$/.test(clean)) return parseFloat(clean);

    const words = clean.split(/\s+/);
    let total = 0;
    let current = 0;

    words.forEach(w => {
        const val = wordNumMap[w];
        if (val !== undefined) {
            if (val === 1000) {
                total += (current || 1) * 1000;
                current = 0;
            } else if (val === 100 || val === 200) {
                total += val;
            } else {
                current += val;
            }
        } else if (/^\d+(?:\.\d+)?$/.test(w)) {
            current += parseFloat(w);
        }
    });
    return total + current;
}

function parseQuantityAndName(rawInput) {
    let name = rawInput.trim();
    let quantity = 1;
    let price = 0;
    let hasQuantity = false;
    let hasPrice = false;

    // 1. Extract Price (e.g., "خمسة آلاف ريال", "خمسين ألف ريال", "بسعر 5000", "8000 ريال")
    const priceRegex = /(?:بسعر|بقيمة|سعر|قيمتها|مبلغ|بمبلغ|بـ|ب)?\s*(\d+|واحد|واحدة|اثنين|اثنان|ثلاثة|ثلاث|أربعة|أربع|اربعة|اربع|خمسة|خمس|ستة|ست|سبعة|سبع|ثمانية|ثمان|تمانية|ثمانة|تسعة|تسع|عشرة|عشر|عشرين|ثلاثين|أربعين|خمسين|ستين|سبعين|ثمانين|تسعين|مية|مائة|ألف|الف|آلاف|الاف)\s*(?:ألاف|آلاف|الف|ألف)?\s*(?:ريال|ريالاً|ر\.س|SAR)/i;
    let pMatch = name.match(priceRegex);
    if (pMatch) {
        const pricePhrase = pMatch[0].replace(/بسعر|بقيمة|سعر|قيمتها|مبلغ|بمبلغ|بـ|ب|ريال|ريالاً|ر\.س|SAR/gi, '').trim();
        const pVal = parseArabicNumberWords(pricePhrase);
        if (pVal > 0) {
            price = pVal;
            hasPrice = true;
            name = name.replace(pMatch[0], '').trim();
        }
    } else {
        // Digits price match (e.g., "بسعر 5000" or "5000 ريال" or "سعر 5000")
        const digitPriceRegex = /(?:بسعر|بقيمة|سعر|مبلغ)\s*(\d+(?:\.\d+)?)|(\d+(?:\.\d+)?)\s*(?:ريال|ريالاً|ر\.س|SAR)/i;
        let dpMatch = name.match(digitPriceRegex);
        if (dpMatch) {
            const pVal = parseFloat(dpMatch[1] || dpMatch[2]);
            if (pVal > 0) {
                price = pVal;
                hasPrice = true;
                name = name.replace(dpMatch[0], '').trim();
            }
        }
    }

    // 2. Extract Quantity (e.g., "عدد تسعة", "خمس مكيفات", "عدد 5", "كمية 10")
    const explicitQtyRegex = /(?:العدد|عدد|الكمية|كمية)\s*[:=-]?\s*(\d+|واحد|واحدة|اثنين|اثنان|ثلاثة|ثلاث|تلاتة|أربعة|أربع|اربعة|اربع|خمسة|خمس|ستة|ست|سبعة|سبع|ثمانية|ثمان|تمانية|ثمانة|تسعة|تسع|عشرة|عشر)\s*(?:مكيفات|مكيف|مكفيات)?/i;
    let qMatch = name.match(explicitQtyRegex);
    if (qMatch) {
        hasQuantity = true;
        const qStr = qMatch[1].trim();
        quantity = wordNumMap[qStr] || parseInt(qStr, 10) || 1;
        name = name.replace(qMatch[0], '').trim();
    } else {
        // Quantity at start (e.g., "خمس مكيفات" or "5 مكيفات")
        const startQtyRegex = /^(\d+|واحد|واحدة|اثنين|اثنان|ثلاثة|ثلاث|أربعة|أربع|اربعة|اربع|خمسة|خمس|ستة|ست|سبعة|سبع|ثمانية|ثمان|تمانية|ثمانة|تسعة|تسع|عشرة|عشر)\s+(?=(?:مكيف|مكيفات|شاشة|ثلاجة|غسالة|فريزر|فرن|حبة|حبات|كرتون|علبة))/i;
        let sqMatch = name.match(startQtyRegex);
        if (sqMatch) {
            hasQuantity = true;
            const qStr = sqMatch[1].trim();
            quantity = wordNumMap[qStr] || parseInt(qStr, 10) || 1;
            name = name.replace(startQtyRegex, '').trim();
        }
    }

    // Convert word numbers in tonnage/capacity inside product name (e.g., "اربعة طن" -> "4 طن", "اثنين طن" -> "2 طن")
    name = name.replace(/(واحد|اثنين|اثنان|طنيين|طنين|ثلاثة|ثلاث|أربعة|أربع|اربعة|اربع|خمسة|خمس|ستة|ست)\s*طن/gi, (m, numWord) => {
        const digit = wordNumMap[numWord] || numWord;
        return `${digit} طن`;
    });

    // Clean up duplicate leading/trailing "مكيف" or punctuation
    name = name.replace(/\s+/g, ' ').replace(/^[,،;\-\s]+|[,،;\-\s]+$/g, '').trim();
    name = name.replace(/^(مكيفات|مكيف)\s+/gi, '').trim();
    if (name) name = 'مكيف ' + name;

    return { name, quantity, price, hasQuantity, hasPrice };
}

function parseTextItems(text) {
    if (!text) return [];
    let s = toEnglishDigits(text.trim());

    // Normalize speech typos
    s = s.replace(/مكييفات|مكيفات|مكيفه|مكفيات/gi, 'مكيف');
    s = s.replace(/اجري/gi, 'جري');
    s = s.replace(/في شر/gi, 'فيشر');
    s = s.replace(/لا\s*ف?\s*ريال|لاف\s*ريال|لافيال|لاف/gi, 'آلاف ريال');

    // Split continuous speech into item chunks
    const rawChunks = s.split(/[\n\r،,؛;\-•*]|\s+و\s+|\s+أو\s+|\s+ثم\s+|(?<=(?:ريال|ريالاً|آلاف|الف))\s+(?=(?:خمس|خمسة|ست|ستة|سبع|سبعة|ثمان|ثمانية|تسع|تسعة|عشر|عشرة|عدد|مكيف|شاشة|ثلاجة|غسالة|فريزر|فرن|\d+))/gi);

    const items = [];
    rawChunks.forEach(chunk => {
        const cleaned = chunk.trim();
        if (!cleaned) return;
        const parsed = parseQuantityAndName(cleaned);
        if (parsed.name) {
            items.push(parsed);
        }
    });

    return items;
}

// TEST USER TRANSCRIPT
const sampleTranscript = "خمس مكييفات اجري اربعة طن خمسة لا فريال مكييفات بيسك اثنين طن ثمانة لا فريال مكييفات في شر واحد طن عدد تسعة مكييفات خمسين الف ريال";

console.log("Input:", sampleTranscript);
console.log("Parsed Output:", JSON.stringify(parseTextItems(sampleTranscript), null, 2));
