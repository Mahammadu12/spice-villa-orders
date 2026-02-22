export interface MenuItem {
  name: string;
  description?: string;
  price: string;
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
      { name: "Veg Samosa (2 st)", description: "Friterade smördegssnittar fyllda med grönsaker med färsk chili, koriander och rostade indiska kryddor.", price: "59 kr" },
      { name: "Kött Samosa (2 st)", description: "Friterade smördegssnittar fyllda med kött, kyckling med färsk chili, koriander och rostade indiska kryddor.", price: "69 kr" },
      { name: "Aloo Chana Chaat", description: "Typiska gatusnacks med kokt potatis, kikärter, röd lök, tomater, och 3 olika såser.", price: "80 kr" },
      { name: "Golgappe (Pani Puri)", description: "Friterade små bröd fyllda med potatis, kikärter och yoghurt. Serveras med söt och sur sås.", price: "90 kr" },
      { name: "Seekh Kabab (2 st)", description: "Lammfärs med lök, chili, vitlök och koriander, rullat på spett och kolgrillat.", price: "95 kr" },
      { name: "Chicken Tikka (3 st)", description: "Yoghurt- och kryddmarinerad kycklingfilé, kolgrillad.", price: "79 kr" },
      { name: "Aloo Tikki (2 st)", description: "Potatisbiffar med färska örter och kryddor, stekta i panna.", price: "59 kr" },
      { name: "Mix Pakora", description: "Grönsaker, potatis, lök, chili och blomkål doppade i kikärtsmjölsmet och friterade.", price: "69 kr" },
      { name: "Chicken Pakora", description: "Strimlad kycklingfilé friterad i kikärtsmjölsmet.", price: "89 kr" },
      { name: "Paneer Pakora", description: "Hemgjord ost friterad i kikärtsmjölsmet.", price: "90 kr" },
      { name: "Jhinga Pakora (3 st)", description: "Räkor friterade i kikärtsmjölsmet.", price: "110 kr" },
    ],
  },
  {
    title: "Biryani Rätter",
    description: "Traditionell Biryani tillagad med lamm, kyckling, nötkött, fisk eller grönsaker. Serveras med raita eller varm sås.",
    items: [
      { name: "Lamm Biryani", price: "169 kr" },
      { name: "Kyckling Biryani", price: "150 kr" },
      { name: "Vegetarisk Biryani", price: "149 kr" },
      { name: "Scampi Biryani", price: "189 kr" },
    ],
  },
  {
    title: "Sizzler / Grill Rätter",
    description: "Alla rätter serveras med grillade grönsaker och varm sås. Naan eller ris ingår.",
    items: [
      { name: "Tandoori Chicken (½ kyckling, 2 ben)", price: "149 kr" },
      { name: "Tandoori Chicken (hel, 4 ben)", price: "249 kr" },
      { name: "Seekh Kabab (3 st)", price: "169 kr" },
      { name: "Chicken Tikka", price: "169 kr" },
      { name: "Lamm Boti Tikka", price: "189 kr" },
      { name: "Fish Tikka", price: "189 kr" },
      { name: "Mix Grill", price: "249 kr" },
      { name: "Lamm Chaanp", description: "Marinerad och grillad lammkotlett.", price: "219 kr" },
    ],
  },
  {
    title: "Special Punjabi Grytor",
    description: "Tillagade i klassisk punjabistil med rika kryddor och färska ingredienser. Serveras med basmatiris eller naan.",
    items: [
      { name: "Lammgryta", price: "159 kr" },
      { name: "Kycklinggryta", price: "149 kr" },
      { name: "Biffgryta", price: "155 kr" },
      { name: "Achar Gosht (biff, kyckling)", price: "169 kr / Lamm 179 kr" },
      { name: "Ginger Masala (kyckling, biff)", price: "169 kr / Lamm 179 kr" },
      { name: "Jalfrezi (biff, kyckling)", price: "169 kr / Lamm 179 kr / Scampi 199 kr" },
      { name: "Palak Gosht (lamm, biff, kyckling, scampi)", price: "179 kr" },
      { name: "Dal Gosht (biff, kyckling)", price: "169 kr / Lamm 179 kr / Scampi 199 kr" },
      { name: "Cholle Gosht (kyckling eller biff)", price: "169 kr / Lamm 179 kr" },
    ],
  },
  {
    title: "Tikka Masala Rätter",
    description: "Grillade rätter i mild, krämig och söt tomatbaserad sås med nötter och grädde. Serveras med ris eller naan.",
    items: [
      { name: "Chicken Tikka Masala", price: "179 kr" },
      { name: "Scampi Tikka Masala", price: "189 kr" },
      { name: "Chicken & Scampi Tikka Masala", price: "189 kr" },
      { name: "Lamm Tikka Masala", price: "189 kr" },
      { name: "Zaffrani Tikka Butter Masala", price: "179 kr" },
      { name: "Paneer Tikka Masala", price: "169 kr" },
    ],
  },
  {
    title: "Karahi Rätter",
    description: "Traditionella punjabirätter tillagade i wok/karahi med färska tomater, ingefära och vitlök. Serveras med ris eller naan.",
    items: [
      { name: "Lamb Karahi", price: "179 kr" },
      { name: "Scampi Karahi", price: "199 kr" },
      { name: "Paneer Karahi", price: "169 kr" },
      { name: "Seekh Kebab Karahi", price: "159 kr" },
      { name: "Shinwari Namkeen Karahi", description: "Lamm med chili (svart, röd eller grön).", price: "179 kr" },
      { name: "White Butter Chicken Karahi", price: "179 kr" },
      { name: "White Lamb Karahi", price: "179 kr" },
      { name: "Dhaka Spicy Biff Karahi", price: "179 kr" },
      { name: "Chilli Garlic Karahi (Lamm, biff, kyckling)", price: "189 kr" },
      { name: "Chilli Garlic Jhinga Karahi", price: "199 kr" },
    ],
  },
  {
    title: "Plain Grill Rätter",
    description: "Serveras med tre olika såser samt ris eller naan.",
    items: [
      { name: "Seekh Kebab (3 st)", price: "159 kr" },
      { name: "Kyckling Tikka (5 st)", price: "149 kr" },
      { name: "Lamm Boti Tikka (5 st)", price: "179 kr" },
      { name: "Fish Tikka (5 st)", price: "159 kr" },
      { name: "Scampi Tikka", price: "199 kr" },
    ],
  },
  {
    title: "Tawa Rätter",
    description: "Serveras med ris eller naan.",
    items: [
      { name: "Tawa Chaanp", description: "Lammkotletter med vitlök, ingefära, tomat och lök.", price: "229 kr" },
      { name: "Tawa Scampi", description: "Tigerräkor med vitlök, koriander, tomat och chili.", price: "199 kr" },
      { name: "Tawa Lax", description: "Laxfilé och tigerräkor i tomatsås med koriander och ingefära.", price: "189 kr" },
      { name: "Tawa Qeema", description: "Köttfärsrätt med vitlök, koriander, tomat och chili.", price: "169 kr" },
      { name: "Peshawari Chapli Kebab", description: "Klassisk kebab med färska kryddor.", price: "149 kr" },
    ],
  },
  {
    title: "Vegetariska Rätter",
    description: "Serveras med ris eller naan.",
    items: [
      { name: "Dal Fry", description: "Linsgryta med punjabi tarka.", price: "139 kr" },
      { name: "Punjabi Cholle", description: "Kikärtsgryta.", price: "139 kr" },
      { name: "Aloo Baingan", description: "Potatis med aubergine.", price: "149 kr" },
      { name: "Palak Paneer", description: "Spenat med färsk ost.", price: "149 kr" },
      { name: "Aloo Palak", description: "Potatis med spenat.", price: "149 kr" },
      { name: "Paneer Achari", description: "Kryddig paneergryta.", price: "169 kr" },
      { name: "Paneer Jalfrezi", description: "Paneer med paprika, lök och tomatsås.", price: "159 kr" },
      { name: "Shahi Paneer", description: "Krämig tomatsås med nötter, grädde och honung.", price: "169 kr" },
      { name: "Paneer Korma", description: "Mild sås med mixade nötter och grädde.", price: "169 kr" },
      { name: "Mix Sabzi", description: "Blandade grönsaker.", price: "159 kr" },
    ],
  },
  {
    title: "Specialmeny",
    items: [
      { name: "Nihari Lamm", description: "Långkokt lamm med kryddor, lime, lök, chili och koriander.", price: "170 kr" },
      { name: "Beef Paya", description: "Långkokta oxfötter i rik kryddblandning.", price: "169 kr" },
      { name: "Kyckling Haleem", price: "149 kr" },
      { name: "Kött Thali (6 personer)", description: "6 Chapli Kabab, 6 Tandoori Chicken, 6 naan, Chicken Karahi & Lamm Karahi.", price: "1080 kr" },
      { name: "Veg Thali (6 personer)", description: "Mix av vegetariska rätter, naan & ris.", price: "1080 kr" },
    ],
  },
  {
    title: "Specialrullar / Wraps",
    description: "Serveras med färskbakat bröd, tre såser, sallad, gurka, tomat och lök.",
    items: [
      { name: "Kycklingrulle", price: "99 kr" },
      { name: "Seekh Kabab Rulle", price: "99 kr" },
      { name: "Scampi Rulle", price: "129 kr" },
      { name: "Vegetarisk Rulle", price: "99 kr" },
    ],
  },
  {
    title: "Färskbakat Bröd",
    items: [
      { name: "Naan", price: "15 kr" },
      { name: "Tandoori Roti", price: "20 kr" },
      { name: "Tandoori Lacha Paratha", price: "40 kr" },
      { name: "Lahori Kulcha", price: "25 kr" },
      { name: "Peshawari Naan", price: "45 kr" },
      { name: "Garlic Naan", price: "35 kr" },
      { name: "Paneer Naan", price: "45 kr" },
      { name: "Aloo Naan", price: "45 kr" },
      { name: "Tawa Lacha Paratha", price: "45 kr" },
    ],
  },
  {
    title: "Tillbehör, Desserter & Drycker",
    items: [
      { name: "Raita", price: "30 kr" },
      { name: "Pickles", price: "25 kr" },
      { name: "Kachumber Sallad", price: "45 kr" },
      { name: "Gulab Jamun", price: "39 kr" },
      { name: "Gajar Ka Halwa", price: "49 kr" },
      { name: "Kulfi", price: "49 kr" },
      { name: "Punjabi Lassi (söt eller salt)", price: "40 kr" },
      { name: "Mango Lassi", price: "45 kr" },
      { name: "Läsk", price: "20 kr" },
      { name: "Chai", price: "35 kr" },
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
      { name: "Chicken Sambal", description: "Kyckling i stark sås.", price: "99 kr" },
      { name: "Achari Chicken", description: "Kyckling i syrlig och kryddig sås.", price: "119 kr" },
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
