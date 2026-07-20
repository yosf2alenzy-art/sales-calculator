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

function parseItemChunk(chunk) {
    let text = chunk.trim();

    // 1. Identify Brand (1: جري, 2: بيسك, 3: فيشر, 4: فوجي)
    let brand = '';
    if (/(جري|اجري|قري|gree)/i.test(text)) brand = 'جري';
    else if (/(بيسك|بيتك|basic)/i.test(text)) brand = 'بيسك';
    else if (/(فيشر|في\s*شر|fisher)/i.test(text)) brand = 'فيشر';
    else if (/(فوجي|فوجى|fuji)/i.test(text)) brand = 'فوجي';

    // 2. Extract Price
    let price = 0;
    const priceRegex = /(?:بسعر|بقيمة|سعر|قيمتها|مبلغ|بمبلغ|بـ|ب)?\s*(\d+|واحد|واحدة|اثنين|اثنان|ثلاثة|ثلاث|أربعة|أربع|اربعة|اربع|خمسة|خمس|ستة|ست|سبعة|سبع|ثمانية|ثمان|تمانية|ثمانة|تسعة|تسع|عشرة|عشر|عشرين|ثلاثين|أربعين|خمسين|ستين|سبعين|ثمانين|تسعين|مية|مائة|ألف|الف|آلاف|الاف)\s*(?:ألاف|آلاف|الف|ألف)?\s*(?:ريال|ريالاً|ر\.س|SAR)/i;
    let pMatch = text.match(priceRegex);
    if (pMatch) {
        const pricePhrase = pMatch[0].replace(/بسعر|بقيمة|سعر|قيمتها|مبلغ|بمبلغ|بـ|ب|ريال|ريالاً|ر\.س|SAR/gi, '').trim();
        price = parseArabicNumberWords(pricePhrase);
        text = text.replace(pMatch[0], '').trim();
    } else {
        const digitPriceRegex = /(?:بسعر|بقيمة|سعر|مبلغ)\s*(\d+(?:\.\d+)?)|(\d+(?:\.\d+)?)\s*(?:ريال|ريالاً|ر\.س|SAR)/i;
        let dpMatch = text.match(digitPriceRegex);
        if (dpMatch) {
            price = parseFloat(dpMatch[1] || dpMatch[2]);
            text = text.replace(dpMatch[0], '').trim();
        }
    }

    // 3. Extract Quantity
    let quantity = 1;
    const explicitQtyRegex = /(?:العدد|عدد|الكمية|كمية)\s*[:=-]?\s*(\d+|واحد|واحدة|اثنين|اثنان|ثلاثة|ثلاث|تلاتة|أربعة|أربع|اربعة|اربع|خمسة|خمس|ستة|ست|سبعة|سبع|ثمانية|ثمان|تمانية|ثمانة|تسعة|تسع|عشرة|عشر)\s*(?:مكيفات|مكيف|مكفيات)?/i;
    let qMatch = text.match(explicitQtyRegex);
    if (qMatch) {
        const qStr = qMatch[1].trim();
        quantity = wordNumMap[qStr] || parseInt(qStr, 10) || 1;
        text = text.replace(qMatch[0], '').trim();
    } else {
        const startQtyRegex = /^(\d+|واحد|واحدة|اثنين|اثنان|ثلاثة|ثلاث|أربعة|أربع|اربعة|اربع|خمسة|خمس|ستة|ست|سبعة|سبع|ثمانية|ثمان|تمانية|ثمانة|تسعة|تسع|عشرة|عشر)\s+(?=(?:مكيف|مكيفات|شاشة|ثلاجة|غسالة|فريزر|فرن|حبة|حبات|كرتون|علبة|جري|اجري|بيسك|بيتك|فيشر|في شر|فوجي))/i;
        let sqMatch = text.match(startQtyRegex);
        if (sqMatch) {
            const qStr = sqMatch[1].trim();
            quantity = wordNumMap[qStr] || parseInt(qStr, 10) || 1;
            text = text.replace(startQtyRegex, '').trim();
        }
    }

    // If total price was given for a batch (> 15000 SAR for multiple units) -> calculate unit price
    if (price > 15000 && quantity > 1) {
        price = Math.round(price / quantity);
    }

    // Extract capacity / tonnage
    let capacity = '';
    const capMatch = text.match(/(1\.5|2\.5|3\.5|\d+|واحد|اثنين|اثنان|طنيين|طنين|ثلاثة|ثلاث|أربعة|أربع|اربعة|اربع|خمسة|خمس|ستة|ست)\s*طن/i);
    if (capMatch) {
        const capNum = wordNumMap[capMatch[1]] || capMatch[1];
        capacity = `${capNum} طن`;
        text = text.replace(capMatch[0], '').trim();
    }

    // Build product name
    let name = brand ? `مكيف ${brand}` : 'مكيف';
    if (capacity) name += ` ${capacity}`;

    return { name, quantity, price };
}

function parseTextItems(text) {
    if (!text) return [];
    let s = toEnglishDigits(text.trim());

    // Normalize speech typos
    s = s.replace(/مكييفات|مكيفات|مكيفه|مكفيات/gi, 'مكيف');
    s = s.replace(/اجري|قري/gi, 'جري');
    s = s.replace(/في شر/gi, 'فيشر');
    s = s.replace(/فوجى/gi, 'فوجي');
    s = s.replace(/بيتك/gi, 'بيسك');
    s = s.replace(/لا\s*ف?\s*ريال|لاف\s*ريال|لافيال|لاف/gi, 'آلاف ريال');

    // Split on delimiters (newlines, commas, semicolons, and " و ", " أو ", " ثم ")
    let lines = s.split(/[\n\r،,؛;\-•*]|\s+و\s+|\s+أو\s+|\s+ثم\s+/);
    let chunks = [];

    // Further split lines when multiple brands occur in a single line
    lines.forEach(line => {
        const brandMatches = [...line.matchAll(/(?:خمس|خمسة|ست|ستة|سبع|سبعة|ثمان|ثمانية|تسع|تسعة|عشر|عشرة|عدد|كمية|\d+)?\s*(?:مكيف\s+)?(?:جري|بيسك|فيشر|فوجي)/gi)];
        if (brandMatches.length > 1) {
            for (let i = 0; i < brandMatches.length; i++) {
                const start = brandMatches[i].index;
                const end = (i < brandMatches.length - 1) ? brandMatches[i + 1].index : line.length;
                chunks.push(line.substring(start, end));
            }
        } else {
            chunks.push(line);
        }
    });

    const items = [];
    chunks.forEach(c => {
        if (c.trim()) {
            const item = parseItemChunk(c);
            if (item.name) items.push(item);
        }
    });

    return items;
}

// TEST CASES
console.log("=== TEST 1: User's Transcript ===");
const transcript1 = "خمس مكييفات اجري اربعة طن خمسة لا فريال مكييفات بيسك اثنين طن ثمانة لا فريال مكييفات في شر واحد طن عدد تسعة مكييفات خمسين الف ريال";
console.log(JSON.stringify(parseTextItems(transcript1), null, 2));

console.log("\n=== TEST 2: Fuji, Gree, Basic, Fisher ===");
const transcript2 = "مكيف فوجي 3 طن بسعر 4500 ريال مكيف جري 2 طن سعر 2800 ريال مكيف بيسك 1.5 طن سعر 1900 ريال";
console.log(JSON.stringify(parseTextItems(transcript2), null, 2));
