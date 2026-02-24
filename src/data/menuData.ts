export type SpiceLevel = "mild" | "medium" | "spicy" | "hot" | "extra-hot";

export interface MenuItem {
  num?: number;
  name: string;
  description?: string;
  price: string;
  spice?: SpiceLevel;
}

export interface MenuCategory {
  title: string;
  description?: string;
  items: MenuItem[];
}

export const dinnerMenu: MenuCategory[] = [
  {
    title: "Traditionella Förrätter",
    items: [
      { num: 1, name: "Veg Samosa (2 st)", description: "Friterade smördegssnittar fyllda med grönsaker med färsk chili, koriander och rostade indiska kryddor.", price: "59 kr", spice: "mild" },
      { num: 1, name: "Kött Samosa (2 st)", description: "Friterade smördegssnittar fyllda med kött, kyckling med färsk chili, koriander och rostade indiska kryddor.", price: "69 kr", spice: "medium" },
      { num: 2, name: "Aloo Chana Chaat", description: "Typiska gatusnacks med kokt potatis, kikärter, röd lök, tomater, och 3 olika såser.", price: "80 kr", spice: "mild" },
      { num: 3, name: "Golgappe (Pani Puri)", description: "Friterade små bröd fyllda med potatis, kikärter och yoghurt. Serveras med söt och sur sås.", price: "90 kr", spice: "medium" },
      { num: 4, name: "Seekh Kabab (2 st)", description: "Lammfärs med lök, chili, vitlök och koriander, rullat på spett och kolgrillat.", price: "95 kr", spice: "spicy" },
      { num: 5, name: "Chicken Tikka (3 st)", description: "Yoghurt- och kryddmarinerad kycklingfilé, kolgrillad.", price: "79 kr", spice: "medium" },
      { num: 6, name: "Aloo Tikki (2 st)", description: "Potatisbiffar med färska örter och kryddor, stekta i panna.", price: "59 kr", spice: "mild" },
      { num: 7, name: "Mix Pakora", description: "Grönsaker, potatis, lök, chili och blomkål doppade i kikärtsmjölsmet och friterade.", price: "69 kr", spice: "mild" },
      { num: 8, name: "Chicken Pakora", description: "Strimlad kycklingfilé friterad i kikärtsmjölsmet.", price: "89 kr", spice: "medium" },
      { num: 9, name: "Paneer Pakora", description: "Hemgjord ost friterad i kikärtsmjölsmet.", price: "90 kr", spice: "mild" },
      { num: 10, name: "Jhinga Pakora (3 st)", description: "Räkor friterade i kikärtsmjölsmet.", price: "110 kr", spice: "medium" },
    ],
  },
  {
    title: "Biryani Rätter",
    description: "Traditionell Biryani tillagad med lamm, kyckling, nötkött, fisk eller grönsaker. Serveras med raita eller varm sås.",
    items: [
      { num: 11, name: "Lamm Biryani", price: "169 kr", spice: "medium" },
      { num: 12, name: "Kyckling Biryani", price: "150 kr", spice: "medium" },
      { num: 13, name: "Vegetarisk Biryani", price: "149 kr", spice: "mild" },
      { num: 14, name: "Scampi Biryani", price: "189 kr", spice: "medium" },
    ],
  },
  {
    title: "Sizzler / Grill Rätter",
    description: "Alla rätter serveras med grillade grönsaker och varm sås. Naan eller ris ingår.",
    items: [
      { num: 15, name: "Tandoori Chicken (½ kyckling, 2 ben)", price: "149 kr", spice: "spicy" },
      { num: 16, name: "Tandoori Chicken (hel, 4 ben)", price: "249 kr", spice: "spicy" },
      { num: 17, name: "Seekh Kabab (3 st)", price: "169 kr", spice: "spicy" },
      { num: 18, name: "Chicken Tikka", price: "169 kr", spice: "medium" },
      { num: 19, name: "Lamm Boti Tikka", price: "189 kr", spice: "medium" },
      { num: 20, name: "Fish Tikka", price: "189 kr", spice: "medium" },
      { num: 21, name: "Mix Grill", price: "249 kr", spice: "spicy" },
      { num: 22, name: "Lamm Chaanp", description: "Marinerad och grillad lammkotlett.", price: "219 kr", spice: "medium" },
    ],
  },
  {
    title: "Special Punjabi Grytor",
    description: "Tillagade i klassisk punjabistil med rika kryddor och färska ingredienser. Serveras med basmatiris eller naan.",
    items: [
      { num: 23, name: "Lammgryta", price: "159 kr", spice: "medium" },
      { num: 24, name: "Kycklinggryta", price: "149 kr", spice: "medium" },
      { num: 25, name: "Biffgryta", price: "155 kr", spice: "medium" },
      { num: 26, name: "Achar Gosht (biff, kyckling)", price: "169 kr / Lamm 179 kr", spice: "hot" },
      { num: 27, name: "Ginger Masala (kyckling, biff)", price: "169 kr / Lamm 179 kr", spice: "spicy" },
      { num: 28, name: "Jalfrezi (biff, kyckling)", price: "169 kr / Lamm 179 kr / Scampi 199 kr", spice: "hot" },
      { num: 29, name: "Palak Gosht (kyckling, biff)", price: "169 kr / Lamm 179 kr / Scampi 199 kr", spice: "medium" },
      { num: 30, name: "Dal Gosht (biff, kyckling)", price: "169 kr / Lamm 179 kr / Scampi 199 kr", spice: "medium" },
      { num: 31, name: "Cholle Gosht (kyckling eller biff)", price: "169 kr / Lamm 179 kr", spice: "medium" },
    ],
  },
  {
    title: "Tikka Masala Rätter",
    description: "Grillade rätter i mild, krämig och söt tomatbaserad sås med nötter och grädde. Serveras med ris eller naan.",
    items: [
      { num: 32, name: "Chicken Tikka Masala", price: "179 kr", spice: "mild" },
      { num: 33, name: "Scampi Tikka Masala", price: "189 kr", spice: "mild" },
      { num: 34, name: "Chicken & Scampi Tikka Masala", price: "189 kr", spice: "mild" },
      { num: 35, name: "Lamm Tikka Masala", price: "189 kr", spice: "mild" },
      { num: 36, name: "Zaffrani Tikka Butter Masala", price: "179 kr", spice: "mild" },
      { num: 37, name: "Paneer Tikka Masala", price: "169 kr", spice: "mild" },
    ],
  },
  {
    title: "Karahi Rätter",
    description: "Traditionella punjabirätter tillagade i wok/karahi med färska tomater, ingefära och vitlök. Serveras med ris eller naan.",
    items: [
      { num: 38, name: "Lamb Karahi", price: "179 kr", spice: "spicy" },
      { num: 39, name: "Scampi Karahi", price: "199 kr", spice: "spicy" },
      { num: 40, name: "Paneer Karahi", price: "169 kr", spice: "medium" },
      { num: 41, name: "Seekh Kebab Karahi", price: "159 kr", spice: "spicy" },
      { num: 42, name: "Shinwari Namkeen Karahi", description: "Lamm med chili (svart, röd eller grön).", price: "179 kr", spice: "extra-hot" },
      { num: 43, name: "White Butter Chicken Karahi", price: "179 kr", spice: "mild" },
      { num: 44, name: "White Lamb Karahi", price: "179 kr", spice: "mild" },
      { num: 45, name: "Dhaka Spicy Biff Karahi", price: "179 kr", spice: "hot" },
      { num: 46, name: "Chilli Garlic Karahi (Lamm, biff, kyckling)", price: "189 kr", spice: "extra-hot" },
      { num: 47, name: "Chilli Garlic Jhinga Karahi", price: "199 kr", spice: "extra-hot" },
    ],
  },
  {
    title: "Plain Grill Rätter",
    description: "Serveras med tre olika såser samt ris eller naan.",
    items: [
      { num: 48, name: "Seekh Kebab (3 st)", price: "159 kr" },
      { num: 49, name: "Kyckling Tikka (5 st)", price: "149 kr" },
      { num: 50, name: "Lamm Boti Tikka (5 st)", price: "179 kr" },
      { num: 51, name: "Fish Tikka (5 st)", price: "159 kr" },
      { num: 52, name: "Scampi Tikka", price: "199 kr" },
    ],
  },
  {
    title: "Tawa Rätter",
    description: "Serveras med ris eller naan.",
    items: [
      { num: 53, name: "Tawa Chaanp", description: "Lammkotletter med vitlök, ingefära, tomat och lök.", price: "229 kr" },
      { num: 54, name: "Tawa Scampi", description: "Tigerräkor med vitlök, koriander, tomat och chili.", price: "199 kr" },
      { num: 55, name: "Tawa Lax", description: "Laxfilé och tigerräkor i tomatsås med koriander och ingefära.", price: "189 kr" },
      { num: 56, name: "Tawa Qeema", description: "Köttfärsrätt med vitlök, koriander, tomat och chili.", price: "169 kr" },
      { num: 57, name: "Peshawari Chapli Kebab", description: "Klassisk kebab med färska kryddor.", price: "149 kr" },
    ],
  },
  {
    title: "Vegetariska Rätter",
    description: "Serveras med ris eller naan.",
    items: [
      { num: 58, name: "Dal Fry", description: "Linsgryta med punjabi tarka.", price: "139 kr" },
      { num: 59, name: "Punjabi Cholle", description: "Kikärtsgryta.", price: "139 kr" },
      { num: 60, name: "Aloo Baingan", description: "Potatis med aubergine.", price: "149 kr" },
      { num: 61, name: "Palak Paneer", description: "Spenat med färsk ost.", price: "159 kr" },
      { num: 62, name: "Aloo Palak", description: "Potatis med spenat.", price: "149 kr" },
      { num: 63, name: "Paneer Achari", description: "Kryddig paneergryta.", price: "169 kr" },
      { num: 64, name: "Paneer Jalfrezi", description: "Paneer med paprika, lök och tomatsås.", price: "159 kr" },
      { num: 65, name: "Shahi Paneer", description: "Krämig tomatsås med nötter, grädde och honung.", price: "169 kr" },
      { num: 66, name: "Paneer Korma", description: "Mild sås med mixade nötter och grädde.", price: "169 kr" },
      { num: 67, name: "Mix Sabzi", description: "Blandade grönsaker.", price: "159 kr" },
    ],
  },
  {
    title: "Specialmeny",
    items: [
      { num: 68, name: "Nihari Lamm", description: "Långkokt lamm med kryddor, lime, lök, chili och koriander.", price: "170 kr" },
      { num: 69, name: "Beef Paya", description: "Långkokta oxfötter i rik kryddblandning.", price: "169 kr" },
      { num: 70, name: "Kyckling Haleem", price: "149 kr" },
      { num: 71, name: "Kött Thali (6 personer)", description: "6 Chapli Kabab, 6 Tandoori Chicken, 6 naan, Chicken Karahi & Lamm Karahi.", price: "1080 kr" },
      { num: 72, name: "Veg Thali (6 personer)", description: "Mix av vegetariska rätter, naan & ris.", price: "1080 kr" },
    ],
  },
  {
    title: "Specialrullar / Wraps",
    description: "Serveras med färskbakat bröd, tre såser, sallad, gurka, tomat och lök.",
    items: [
      { num: 73, name: "Kycklingrulle", price: "99 kr" },
      { num: 74, name: "Seekh Kabab Rulle", price: "99 kr" },
      { num: 75, name: "Scampi Rulle", price: "129 kr" },
      { num: 76, name: "Vegetarisk Rulle", price: "99 kr" },
    ],
  },
  {
    title: "Färskbakat Bröd",
    items: [
      { num: 77, name: "Naan", price: "15 kr" },
      { num: 78, name: "Tandoori Roti", price: "20 kr" },
      { num: 79, name: "Tandoori Lacha Paratha", price: "40 kr" },
      { num: 80, name: "Lahori Kulcha", price: "25 kr" },
      { num: 81, name: "Peshawari Naan", price: "45 kr" },
      { num: 82, name: "Garlic Naan", price: "35 kr" },
      { num: 83, name: "Paneer Naan", price: "45 kr" },
      { num: 84, name: "Aloo Naan", price: "45 kr" },
      { num: 85, name: "Tawa Lacha Paratha", price: "45 kr" },
    ],
  },
  {
    title: "Tillbehör, Desserter & Drycker",
    items: [
      { num: 86, name: "Raita", price: "30 kr" },
      { num: 87, name: "Pickles", price: "25 kr" },
      { num: 88, name: "Kachumber Sallad", price: "45 kr" },
      { num: 89, name: "Gulab Jamun", price: "39 kr" },
      { num: 90, name: "Gajar Ka Halwa", price: "49 kr" },
      { num: 91, name: "Kulfi", price: "49 kr" },
      { num: 92, name: "Punjabi Lassi (söt eller salt)", price: "40 kr" },
      { num: 93, name: "Mango Lassi", price: "45 kr" },
      { num: 94, name: "Läsk", price: "20 kr" },
      { num: 95, name: "Chai", price: "35 kr" },
    ],
  },
];

export interface LunchDay {
  day: string;
  items: MenuItem[];
}

export const lunchMenu: LunchDay[] = [
  {
    day: "Måndag",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99 kr" },
      { name: "Aloo Gobi", description: "Potatis & blomkål med kryddor.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99 kr" },
      { name: "Lammgryta", description: "Mustig gryta med aromatiska kryddor.", price: "119 kr" },
      { name: "Kycklinggryta", description: "Smakrik gryta med kryddor.", price: "99 kr" },
      { name: "Achari Chicken", description: "Kyckling i syrlig och kryddig kryddsås.", price: "119 kr" },
    ],
  },
  {
    day: "Tisdag",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99 kr" },
      { name: "Palak Paneer", description: "Spenat och indisk färskost med kryddor och grädde.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99 kr" },
      { name: "Biff Sambal", description: "Biff i stark kryddsås.", price: "119 kr" },
      { name: "Butter Chicken", description: "Kyckling i krämig tomatsås.", price: "99 kr" },
    ],
  },
  {
    day: "Onsdag",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99 kr" },
      { name: "Mix Sabzi", description: "Blandade grönsaker.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99 kr" },
      { name: "Lamm Karahi", description: "Lamm med tomat & kryddor.", price: "119 kr" },
      { name: "Lamm Palak", description: "Lamm med spenat i mild sås.", price: "119 kr" },
      { name: "Chicken Sambal", description: "Kyckling i stark sås.", price: "99 kr" },
    ],
  },
  {
    day: "Torsdag",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99 kr" },
      { name: "Aloo Palak", description: "Potatis & spenat.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99 kr" },
      { name: "Biff Madras", description: "Biff i stark, kryddig sås.", price: "119 kr" },
      { name: "Lamm Palak", description: "Lamm med spenat i mild sås.", price: "119 kr" },
      { name: "Chicken Karahi", description: "Kyckling med tomat & kryddor.", price: "99 kr" },
    ],
  },
  {
    day: "Fredag",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99 kr" },
      { name: "Paneer Jalfrezi", description: "Indisk ost med grönsaker i kryddsås.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99 kr" },
      { name: "Lamm Palak", description: "Lamm med spenat i mild kryddsås.", price: "119 kr" },
      { name: "Achari Chicken", description: "Kyckling i syrlig och kryddig sås.", price: "119 kr" },
    ],
  },
];

export const UBER_EATS_URL = "https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg";
