export type Category = {
  id: string;
  name: string;
  slug: string;
  color: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  featuredImage: string;
  category: Category;
  author: string;
  publishedAt: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  viewCount: number;
  tags: string[];
};

export type Video = {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  duration: string;
  category: Category;
  publishedAt: string;
  viewCount: number;
};

export const categories: Category[] = [
  { id: "1", name: "बैतूल", slug: "betul", color: "#2563eb" },
  { id: "2", name: "राज्य", slug: "rajya", color: "#7c3aed" },
  { id: "3", name: "देश", slug: "desh", color: "#059669" },
  { id: "4", name: "अंतर्राष्ट्रीय", slug: "antarrashtriya", color: "#d97706" },
  { id: "5", name: "खेल", slug: "khel", color: "#dc2626" },
  { id: "6", name: "संस्कृति", slug: "sanskriti", color: "#db2777" },
  { id: "7", name: "व्यापार", slug: "vyapar", color: "#0891b2" },
  { id: "8", name: "स्वास्थ्य", slug: "swasthya", color: "#16a34a" },
];

const betulCat = categories[0];
const rajyaCat = categories[1];
const deshCat = categories[2];
const khelCat = categories[4];
const sanskritiCat = categories[5];
const swasthyaCat = categories[7];

export const articles: Article[] = [
  // FEATURED / HERO articles
  {
    id: "1",
    title: "बैतूल कलेक्टर ने की जिले की विकास योजनाओं की समीक्षा बैठक, अधिकारियों को दिए सख्त निर्देश",
    slug: "betul-collector-vikas-yojana-samiksha-baithak",
    summary: "जिला कलेक्टर ने सभी विभागों के अधिकारियों के साथ बैठक कर विकास कार्यों की प्रगति की समीक्षा की और लंबित कार्यों को जल्द पूरा करने के निर्देश दिए।",
    content: `जिला कलेक्टर श्री राजेश शर्मा ने आज कलेक्ट्रेट सभाकक्ष में जिले की विभिन्न विकास योजनाओं की समीक्षा बैठक आयोजित की। बैठक में जिले के सभी विभागों के अधिकारी उपस्थित थे।

कलेक्टर ने बताया कि प्रधानमंत्री आवास योजना, जल जीवन मिशन और सड़क निर्माण कार्यों की प्रगति संतोषजनक नहीं है। उन्होंने अधिकारियों को निर्देश दिए कि 31 मार्च तक सभी लंबित कार्य पूरे किए जाएं।

बैठक में ग्रामीण विकास, स्वास्थ्य, शिक्षा और कृषि विभाग के कार्यों की भी समीक्षा की गई। कलेक्टर ने कहा कि जो अधिकारी लक्ष्य पूरा नहीं करेंगे उनके विरुद्ध कार्रवाई की जाएगी।`,
    featuredImage: "https://picsum.photos/seed/betul1/800/500",
    category: betulCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    isBreaking: false,
    isFeatured: true,
    viewCount: 1423,
    tags: ["कलेक्टर", "विकास", "बैतूल", "समीक्षा"],
  },
  {
    id: "2",
    title: "मध्य प्रदेश में भारी बारिश की चेतावनी, 12 जिलों में अलर्ट जारी",
    slug: "mp-bhari-barish-alert-12-jile",
    summary: "मौसम विभाग ने मध्य प्रदेश के 12 जिलों में भारी से अति भारी बारिश की चेतावनी जारी की है। बैतूल सहित नर्मदापुरम संभाग के जिलों में येलो अलर्ट जारी किया गया।",
    content: `मौसम विभाग भोपाल ने मध्य प्रदेश के 12 जिलों में अगले 48 घंटों में भारी से अति भारी बारिश की चेतावनी जारी की है।

बैतूल, छिंदवाड़ा, होशंगाबाद, हरदा और बुरहानपुर जिलों में येलो अलर्ट जारी किया गया है। प्रशासन ने नागरिकों से अपील की है कि वे अनावश्यक यात्रा से बचें।`,
    featuredImage: "https://picsum.photos/seed/rajya2/800/500",
    category: rajyaCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    isBreaking: true,
    isFeatured: true,
    viewCount: 2891,
    tags: ["बारिश", "मौसम", "अलर्ट", "मध्य प्रदेश"],
  },
  {
    id: "3",
    title: "लोकसभा में पास हुआ नया शिक्षा बिल, छात्रों को मिलेगी मुफ्त उच्च शिक्षा",
    slug: "loksabha-shiksha-bill-pass-muft-shiksha",
    summary: "संसद के शीतकालीन सत्र में नया शिक्षा विधेयक पारित किया गया जिसके तहत आर्थिक रूप से कमजोर वर्ग के छात्रों को सरकारी कॉलेजों में मुफ्त शिक्षा मिलेगी।",
    content: `लोकसभा में आज नया शिक्षा सुधार विधेयक 2025 पारित कर दिया गया। विधेयक के पक्ष में 312 और विपक्ष में 89 मत पड़े।

इस विधेयक के तहत सालाना 8 लाख रुपये से कम आय वाले परिवारों के बच्चों को सरकारी विश्वविद्यालयों में पूरी तरह मुफ्त शिक्षा मिलेगी।`,
    featuredImage: "https://picsum.photos/seed/desh3/800/500",
    category: deshCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    isFeatured: true,
    viewCount: 4102,
    tags: ["शिक्षा", "लोकसभा", "छात्र", "सरकार"],
  },
  // BETUL local news
  {
    id: "4",
    title: "बैतूल में नए अस्पताल का उद्घाटन, 200 बेड की सुविधा",
    slug: "betul-naye-aspatal-udghaatan-200-bed",
    summary: "स्वास्थ्य मंत्री ने बैतूल में 200 बेड वाले नए जिला अस्पताल का उद्घाटन किया। इससे जिले के दूरस्थ क्षेत्रों के मरीजों को बेहतर स्वास्थ्य सेवाएं मिलेंगी।",
    content: `स्वास्थ्य मंत्री श्री प्रभुराम चौधरी ने आज बैतूल में 200 बिस्तर वाले नए जिला अस्पताल का उद्घाटन किया।`,
    featuredImage: "https://picsum.photos/seed/betul4/800/500",
    category: betulCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    viewCount: 867,
    tags: ["अस्पताल", "स्वास्थ्य", "बैतूल"],
  },
  {
    id: "5",
    title: "बैतूल पुलिस ने पकड़ा ₹50 लाख का नशीला पदार्थ, दो गिरफ्तार",
    slug: "betul-police-nashila-padarth-50-lakh-giraftaar",
    summary: "बैतूल पुलिस ने राष्ट्रीय राजमार्ग पर एक वाहन की जांच के दौरान 50 लाख रुपये के नशीले पदार्थ जब्त किए और दो संदिग्धों को गिरफ्तार किया।",
    content: `बैतूल पुलिस ने एनएच-69 पर वाहन जांच के दौरान एक ट्रक में छिपाए गए 50 लाख रुपये मूल्य के नशीले पदार्थ जब्त किए।`,
    featuredImage: "https://picsum.photos/seed/betul5/800/500",
    category: betulCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    viewCount: 2341,
    tags: ["पुलिस", "गिरफ्तारी", "नशा", "बैतूल"],
  },
  {
    id: "6",
    title: "बैतूल में किसानों को मिलेगी सोलर पंप सब्सिडी, ऑनलाइन करें आवेदन",
    slug: "betul-kisan-solar-pump-subsidy",
    summary: "जिले के किसान अब ऑनलाइन पोर्टल पर आवेदन करके सोलर पंप पर 90% सब्सिडी का लाभ उठा सकते हैं। आवेदन की अंतिम तिथि 31 मार्च है।",
    content: `मध्य प्रदेश ऊर्जा विकास निगम ने किसानों के लिए सोलर पंप सब्सिडी योजना का विस्तार किया है।`,
    featuredImage: "https://picsum.photos/seed/betul6/800/500",
    category: betulCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    viewCount: 1102,
    tags: ["किसान", "सोलर", "सब्सिडी", "बैतूल"],
  },
  // RAJYA (State) news
  {
    id: "7",
    title: "मध्य प्रदेश सरकार ने की 5,000 नई सरकारी नौकरियों की घोषणा",
    slug: "mp-sarkar-5000-sarkari-naukri-ghoshana",
    summary: "मुख्यमंत्री ने प्रेस कॉन्फ्रेंस में बताया कि अगले 3 महीनों में शिक्षक, पुलिस और स्वास्थ्य विभाग में 5,000 पद भरे जाएंगे।",
    content: `मुख्यमंत्री डॉ. मोहन यादव ने आज घोषणा की कि प्रदेश में 5,000 नए सरकारी पद जल्द भरे जाएंगे।`,
    featuredImage: "https://picsum.photos/seed/rajya7/800/500",
    category: rajyaCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    viewCount: 5621,
    tags: ["नौकरी", "सरकार", "मध्य प्रदेश", "भर्ती"],
  },
  {
    id: "8",
    title: "भोपाल में होगा 3 दिवसीय वैश्विक निवेश सम्मेलन, 50 देशों के प्रतिनिधि होंगे शामिल",
    slug: "bhopal-vaishvik-nivesh-sammelan-50-desh",
    summary: "मध्य प्रदेश सरकार 15 से 17 फरवरी को भोपाल में 'इन्वेस्ट एमपी' सम्मेलन आयोजित कर रही है जिसमें 50 देशों के निवेशक भाग लेंगे।",
    content: `भोपाल में अगले महीने होने वाले निवेश सम्मेलन की तैयारियां जोरों पर हैं।`,
    featuredImage: "https://picsum.photos/seed/rajya8/800/500",
    category: rajyaCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
    viewCount: 1834,
    tags: ["निवेश", "भोपाल", "मध्य प्रदेश", "सम्मेलन"],
  },
  {
    id: "9",
    title: "MP में बनेगा देश का पहला हाइड्रोजन एनर्जी प्लांट, 10,000 करोड़ का निवेश",
    slug: "mp-hydrogen-energy-plant-10000-crore",
    summary: "केंद्र और राज्य सरकार के बीच हुए समझौते के तहत मध्य प्रदेश में देश का पहला हाइड्रोजन ऊर्जा संयंत्र स्थापित किया जाएगा।",
    content: `मध्य प्रदेश में ऊर्जा के क्षेत्र में एक बड़ी उपलब्धि होने वाली है।`,
    featuredImage: "https://picsum.photos/seed/rajya9/800/500",
    category: rajyaCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString(),
    viewCount: 2109,
    tags: ["हाइड्रोजन", "ऊर्जा", "मध्य प्रदेश", "निवेश"],
  },
  // KHEL (Sports)
  {
    id: "10",
    title: "बैतूल के राहुल पटेल ने राष्ट्रीय जूडो प्रतियोगिता में जीता स्वर्ण पदक",
    slug: "betul-rahul-patel-national-judo-gold-medal",
    summary: "बैतूल के युवा खिलाड़ी राहुल पटेल ने नई दिल्ली में आयोजित राष्ट्रीय जूडो चैंपियनशिप में अंडर-21 वर्ग में स्वर्ण पदक जीता।",
    content: `बैतूल के होनहार खिलाड़ी राहुल पटेल ने जूडो में राष्ट्रीय स्तर पर स्वर्ण पदक जीतकर जिले का नाम रोशन किया है।`,
    featuredImage: "https://picsum.photos/seed/khel10/800/500",
    category: khelCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    viewCount: 3201,
    tags: ["जूडो", "स्वर्ण पदक", "बैतूल", "खेल"],
  },
  {
    id: "11",
    title: "MP क्रिकेट टीम ने रणजी ट्रॉफी के क्वार्टर फाइनल में बनाई जगह",
    slug: "mp-cricket-ranji-trophy-quarterfinal",
    summary: "मध्य प्रदेश क्रिकेट टीम ने राजस्थान के खिलाफ रोमांचक मैच में 6 विकेट से जीत दर्ज कर रणजी ट्रॉफी के क्वार्टर फाइनल में प्रवेश किया।",
    content: `मध्य प्रदेश क्रिकेट टीम ने जयपुर में राजस्थान को हराकर रणजी क्वार्टर फाइनल में जगह बनाई।`,
    featuredImage: "https://picsum.photos/seed/khel11/800/500",
    category: khelCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
    viewCount: 1892,
    tags: ["क्रिकेट", "रणजी", "मध्य प्रदेश"],
  },
  {
    id: "12",
    title: "भारत ने ऑस्ट्रेलिया को T20 सीरीज में 3-1 से हराया, विराट की शतकीय पारी",
    slug: "india-australia-t20-series-jeet-virat-century",
    summary: "भारतीय क्रिकेट टीम ने चौथे T20 मैच में ऑस्ट्रेलिया को 45 रन से हराकर सीरीज 3-1 से अपने नाम की। विराट कोहली ने 67 गेंदों में 102 रन की पारी खेली।",
    content: `भारत ने मेलबर्न में खेले गए चौथे T20 मैच में ऑस्ट्रेलिया पर बड़ी जीत दर्ज की।`,
    featuredImage: "https://picsum.photos/seed/khel12/800/500",
    category: khelCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    viewCount: 7823,
    tags: ["क्रिकेट", "भारत", "ऑस्ट्रेलिया", "T20"],
  },
  // SANSKRITI (Culture)
  {
    id: "13",
    title: "बैतूल में होगा तीन दिवसीय सांस्कृतिक महोत्सव, 50 से अधिक कलाकार देंगे प्रस्तुति",
    slug: "betul-teen-diwasiya-sanskritik-mahotsav",
    summary: "बैतूल नगर पालिका और जिला प्रशासन के संयुक्त तत्वावधान में 20 से 22 फरवरी तक सांस्कृतिक महोत्सव का आयोजन होगा।",
    content: `बैतूल में इस बार का सांस्कृतिक महोत्सव विशेष होगा। राज्य भर से 50 से अधिक कलाकार इसमें प्रस्तुति देंगे।`,
    featuredImage: "https://picsum.photos/seed/sanskriti13/800/500",
    category: sanskritiCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 16).toISOString(),
    viewCount: 945,
    tags: ["संस्कृति", "महोत्सव", "बैतूल", "कला"],
  },
  {
    id: "14",
    title: "प्रसिद्ध लोक गायिका मालिनी अवस्थी का बैतूल में कार्यक्रम, निःशुल्क प्रवेश",
    slug: "malini-awasthi-betul-karyakram-nihshulk",
    summary: "प्रसिद्ध लोक गायिका मालिनी अवस्थी 25 फरवरी को बैतूल में अपनी प्रस्तुति देंगी। कार्यक्रम में प्रवेश पूरी तरह निःशुल्क होगा।",
    content: `लोक संगीत की दुनिया में बेहद प्रसिद्ध मालिनी अवस्थी का बैतूल आगमन होने वाला है।`,
    featuredImage: "https://picsum.photos/seed/sanskriti14/800/500",
    category: sanskritiCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
    viewCount: 1567,
    tags: ["लोकगीत", "कार्यक्रम", "बैतूल"],
  },
  // SWASTHYA (Health)
  {
    id: "15",
    title: "बैतूल में निःशुल्क स्वास्थ्य जांच शिविर, 500 से अधिक लोगों ने लिया लाभ",
    slug: "betul-nihshulk-swasthya-janch-shivir",
    summary: "जिला अस्पताल और स्थानीय NGO के सहयोग से आयोजित स्वास्थ्य शिविर में मधुमेह, रक्तचाप और नेत्र जांच की सुविधा मुफ्त दी गई।",
    content: `आज बैतूल के टाउन हॉल में एक बड़े स्वास्थ्य शिविर का आयोजन किया गया जिसमें 500 से अधिक लोगों ने लाभ उठाया।`,
    featuredImage: "https://picsum.photos/seed/swasthya15/800/500",
    category: swasthyaCat,
    author: "विशाल पाटिल",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(),
    viewCount: 723,
    tags: ["स्वास्थ्य", "शिविर", "बैतूल", "मुफ्त"],
  },
];

export const breakingNewsItems = [
  "बैतूल: जिले में आज से गेहूं खरीदी शुरू — किसान अपना पंजीयन ऑनलाइन करें",
  "MP में 2 दिन बंद रहेंगे स्कूल — ग्रीष्म अवकाश की घोषणा",
  "बैतूल पुलिस ने मुठभेड़ में एक अपराधी को किया गिरफ्तार",
  "राज्य सरकार का बड़ा फैसला: किसानों का 2 लाख तक का कर्ज माफ",
  "बैतूल में कल बंद रहेगा यातायात — मेगा मैराथन का आयोजन",
];

export const videos: Video[] = [
  {
    id: "v1",
    title: "बैतूल कलेक्टर का जिले की समस्याओं पर विशेष साक्षात्कार",
    slug: "betul-collector-interview",
    thumbnail: "https://picsum.photos/seed/vid1/400/300",
    duration: "5:23",
    category: betulCat,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    viewCount: 4521,
  },
  {
    id: "v2",
    title: "MP में मानसून का अपडेट — मौसम विभाग की रिपोर्ट",
    slug: "mp-mansoon-update",
    thumbnail: "https://picsum.photos/seed/vid2/400/300",
    duration: "3:45",
    category: rajyaCat,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    viewCount: 2134,
  },
  {
    id: "v3",
    title: "बैतूल के राहुल पटेल का स्वर्ण पदक जीतने के बाद पहला इंटरव्यू",
    slug: "rahul-patel-gold-medal-interview",
    thumbnail: "https://picsum.photos/seed/vid3/400/300",
    duration: "7:12",
    category: khelCat,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    viewCount: 5891,
  },
  {
    id: "v4",
    title: "सांस्कृतिक महोत्सव की झलकियां — बैतूल का रंगारंग कार्यक्रम",
    slug: "betul-mahotsav-jhalki",
    thumbnail: "https://picsum.photos/seed/vid4/400/300",
    duration: "4:30",
    category: sanskritiCat,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 11).toISOString(),
    viewCount: 1230,
  },
  {
    id: "v5",
    title: "जिले में किसानों की समस्याएं — ग्राउंड रिपोर्ट",
    slug: "betul-kisan-ground-report",
    thumbnail: "https://picsum.photos/seed/vid5/400/300",
    duration: "6:05",
    category: betulCat,
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 15).toISOString(),
    viewCount: 3102,
  },
];

// Helper to get articles by category
export function getArticlesByCategory(slug: string, limit?: number): Article[] {
  const filtered = articles.filter((a) => a.category.slug === slug);
  return limit ? filtered.slice(0, limit) : filtered;
}

// Helper to get featured articles
export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.isFeatured);
}

// Helper to get latest articles
export function getLatestArticles(limit = 8): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

// Helper to get article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}
