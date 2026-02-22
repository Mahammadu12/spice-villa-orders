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
      { name: "Veg Samosa (2 st)", description: "Friterade smördegssnittar fyllda med grönsaker med färsk chili, koriander och rostade indiska kryddor.", price: "59:-" },
      { name: "Kött Samosa (2 st)", description: "Friterade smördegssnittar fyllda med kött, kyckling med färsk chili, koriander och rostade indiska kryddor.", price: "69:-" },
      { name: "Aloo Chana Chaat", description: "Typiska gatusnacks med kokt potatis, kikärter, röd lök, tomater, och 3 olika såser.", price: "80:-" },
      { name: "Golgappe (Pani Puri)", description: "Friterade små bröd fyllda med potatis, kikärter och yoghurt. Serveras med söt och sur sås.", price: "90:-" },
      { name: "Seekh Kabab (2 st)", description: "Lammfärs med lök, chili, vitlök och koriander, rullat på spett och kolgrillat.", price: "95:-" },
      { name: "Chicken Tikka (3 st)", description: "Yoghurt- och kryddmarinerad kycklingfilé, kolgrillad.", price: "79:-" },
      { name: "Aloo Tikki (2 st)", description: "Potatisbiffar med färska örter och kryddor, stekta i panna.", price: "59:-" },
      { name: "Mix Pakora", description: "Grönsaker, potatis, lök, chili och blomkål doppade i kikärtsmjölsmet och friterade.", price: "69:-" },
      { name: "Chicken Pakora", description: "Strimlad kycklingfilé friterad i kikärtsmjölsmet.", price: "89:-" },
      { name: "Paneer Pakora", description: "Hemgjord ost friterad i kikärtsmjölsmet.", price: "90:-" },
      { name: "Jhinga Pakora (3 st)", description: "Räkor friterade i kikärtsmjölsmet.", price: "110:-" },
    ],
  },
  {
    title: "Biryani Rätter",
    description: "Traditionell Biryani tillagad med lamm, kyckling, nötkött, fisk eller grönsaker. Serveras med raita eller varm sås.",
    items: [
      { name: "Lamm Biryani", price: "169:-" },
      { name: "Kyckling Biryani", price: "150:-" },
      { name: "Vegetarisk Biryani", price: "149:-" },
      { name: "Scampi Biryani", price: "189:-" },
    ],
  },
  {
    title: "Sizzler / Grill Rätter",
    description: "Alla rätter serveras med grillade grönsaker och varm sås. Naan eller ris ingår.",
    items: [
      { name: "Tandoori Chicken (½ kyckling, 2 ben)", price: "149:-" },
      { name: "Tandoori Chicken (hel, 4 ben)", price: "249:-" },
      { name: "Seekh Kabab (3 st)", price: "169:-" },
      { name: "Chicken Tikka", price: "169:-" },
      { name: "Lamm Boti Tikka", price: "189:-" },
      { name: "Fish Tikka", price: "189:-" },
      { name: "Mix Grill", price: "249:-" },
      { name: "Lamm Chaanp", description: "Marinerad och grillad lammkotlett.", price: "219:-" },
    ],
  },
  {
    title: "Special Punjabi Grytor",
    description: "Tillagade i klassisk punjabistil med rika kryddor och färska ingredienser. Serveras med basmatiris eller naan.",
    items: [
      { name: "Lammgryta", price: "159:-" },
      { name: "Kycklinggryta", price: "149:-" },
      { name: "Biffgryta", price: "155:-" },
      { name: "Achar Gosht (biff, kyckling)", price: "169:- / Lamm 179:-" },
      { name: "Ginger Masala (kyckling, biff)", price: "169:- / Lamm 179:-" },
      { name: "Jalfrezi (biff, kyckling)", price: "169:- / Lamm 179:- / Scampi 199:-" },
      { name: "Palak Gosht (lamm, biff, kyckling, scampi)", price: "179:-" },
      { name: "Dal Gosht (biff, kyckling)", price: "169:- / Lamm 179:- / Scampi 199:-" },
      { name: "Cholle Gosht (kyckling eller biff)", price: "169:- / Lamm 179:-" },
    ],
  },
  {
    title: "Tikka Masala Rätter",
    description: "Grillade rätter i mild, krämig och söt tomatbaserad sås med nötter och grädde. Serveras med ris eller naan.",
    items: [
      { name: "Chicken Tikka Masala", price: "179:-" },
      { name: "Scampi Tikka Masala", price: "189:-" },
      { name: "Chicken & Scampi Tikka Masala", price: "189:-" },
      { name: "Lamm Tikka Masala", price: "189:-" },
      { name: "Zaffrani Tikka Butter Masala", price: "179:-" },
      { name: "Paneer Tikka Masala", price: "169:-" },
    ],
  },
  {
    title: "Karahi Rätter",
    description: "Traditionella punjabirätter tillagade i wok/karahi med färska tomater, ingefära och vitlök. Serveras med ris eller naan.",
    items: [
      { name: "Lamb Karahi", price: "179:-" },
      { name: "Scampi Karahi", price: "199:-" },
      { name: "Paneer Karahi", price: "169:-" },
      { name: "Seekh Kebab Karahi", price: "159:-" },
      { name: "Shinwari Namkeen Karahi", description: "Lamm med chili (svart, röd eller grön).", price: "179:-" },
      { name: "White Butter Chicken Karahi", price: "179:-" },
      { name: "White Lamb Karahi", price: "179:-" },
      { name: "Dhaka Spicy Biff Karahi", price: "179:-" },
      { name: "Chilli Garlic Karahi (Lamm, biff, kyckling)", price: "189:-" },
      { name: "Chilli Garlic Jhinga Karahi", price: "199:-" },
    ],
  },
  {
    title: "Plain Grill Rätter",
    description: "Serveras med tre olika såser samt ris eller naan.",
    items: [
      { name: "Seekh Kebab (3 st)", price: "159:-" },
      { name: "Kyckling Tikka (5 st)", price: "149:-" },
      { name: "Lamm Boti Tikka (5 st)", price: "179:-" },
      { name: "Fish Tikka (5 st)", price: "159:-" },
      { name: "Scampi Tikka", price: "199:-" },
    ],
  },
  {
    title: "Tawa Rätter",
    description: "Serveras med ris eller naan.",
    items: [
      { name: "Tawa Chaanp", description: "Lammkotletter med vitlök, ingefära, tomat och lök.", price: "229:-" },
      { name: "Tawa Scampi", description: "Tigerräkor med vitlök, koriander, tomat och chili.", price: "199:-" },
      { name: "Tawa Lax", description: "Laxfilé och tigerräkor i tomatsås med koriander och ingefära.", price: "189:-" },
      { name: "Tawa Qeema", description: "Köttfärsrätt med vitlök, koriander, tomat och chili.", price: "169:-" },
      { name: "Peshawari Chapli Kebab", description: "Klassisk kebab med färska kryddor.", price: "149:-" },
    ],
  },
  {
    title: "Vegetariska Rätter",
    description: "Serveras med ris eller naan.",
    items: [
      { name: "Dal Fry", description: "Linsgryta med punjabi tarka.", price: "139:-" },
      { name: "Punjabi Cholle", description: "Kikärtsgryta.", price: "139:-" },
      { name: "Aloo Baingan", description: "Potatis med aubergine.", price: "149:-" },
      { name: "Palak Paneer", description: "Spenat med färsk ost.", price: "149:-" },
      { name: "Aloo Palak", description: "Potatis med spenat.", price: "149:-" },
      { name: "Paneer Achari", description: "Kryddig paneergryta.", price: "169:-" },
      { name: "Paneer Jalfrezi", description: "Paneer med paprika, lök och tomatsås.", price: "159:-" },
      { name: "Shahi Paneer", description: "Krämig tomatsås med nötter, grädde och honung.", price: "169:-" },
      { name: "Paneer Korma", description: "Mild sås med mixade nötter och grädde.", price: "169:-" },
      { name: "Mix Sabzi", description: "Blandade grönsaker.", price: "159:-" },
    ],
  },
  {
    title: "Specialmeny",
    items: [
      { name: "Nihari Lamm", description: "Långkokt lamm med kryddor, lime, lök, chili och koriander.", price: "170:-" },
      { name: "Beef Paya", description: "Långkokta oxfötter i rik kryddblandning.", price: "169:-" },
      { name: "Kyckling Haleem", price: "149:-" },
      { name: "Kött Thali (6 personer)", description: "6 Chapli Kabab, 6 Tandoori Chicken, 6 naan, Chicken Karahi & Lamm Karahi.", price: "1080:-" },
      { name: "Veg Thali (6 personer)", description: "Mix av vegetariska rätter, naan & ris.", price: "1080:-" },
    ],
  },
  {
    title: "Specialrullar / Wraps",
    description: "Serveras med färskbakat bröd, tre såser, sallad, gurka, tomat och lök.",
    items: [
      { name: "Kycklingrulle", price: "99:-" },
      { name: "Seekh Kabab Rulle", price: "99:-" },
      { name: "Scampi Rulle", price: "129:-" },
      { name: "Vegetarisk Rulle", price: "99:-" },
    ],
  },
  {
    title: "Färskbakat Bröd",
    items: [
      { name: "Naan", price: "15:-" },
      { name: "Tandoori Roti", price: "20:-" },
      { name: "Tandoori Lacha Paratha", price: "40:-" },
      { name: "Lahori Kulcha", price: "25:-" },
      { name: "Peshawari Naan", price: "45:-" },
      { name: "Garlic Naan", price: "35:-" },
      { name: "Paneer Naan", price: "45:-" },
      { name: "Aloo Naan", price: "45:-" },
      { name: "Tawa Lacha Paratha", price: "45:-" },
    ],
  },
  {
    title: "Tillbehör, Desserter & Drycker",
    items: [
      { name: "Raita", price: "30:-" },
      { name: "Pickles", price: "25:-" },
      { name: "Kachumber Sallad", price: "45:-" },
      { name: "Gulab Jamun", price: "39:-" },
      { name: "Gajar Ka Halwa", price: "49:-" },
      { name: "Kulfi", price: "49:-" },
      { name: "Punjabi Lassi (söt eller salt)", price: "40:-" },
      { name: "Mango Lassi", price: "45:-" },
      { name: "Läsk", price: "20:-" },
      { name: "Chai", price: "35:-" },
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
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99:-" },
      { name: "Aloo Gobi", description: "Potatis & blomkål med kryddor.", price: "99:-" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99:-" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99:-" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99:-" },
      { name: "Lammgryta", description: "Mustig gryta med aromatiska kryddor.", price: "119:-" },
      { name: "Kycklinggryta", description: "Smakrik gryta med kryddor.", price: "99:-" },
      { name: "Achari Chicken", description: "Kyckling i syrlig och kryddig kryddsås.", price: "119:-" },
    ],
  },
  {
    day: "Tisdag",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99:-" },
      { name: "Palak Paneer", description: "Spenat och indisk färskost med kryddor och grädde.", price: "99:-" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99:-" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99:-" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99:-" },
      { name: "Biff Sambal", description: "Biff i stark kryddsås.", price: "119:-" },
      { name: "Butter Chicken", description: "Kyckling i krämig tomatsås.", price: "99:-" },
    ],
  },
  {
    day: "Onsdag",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99:-" },
      { name: "Mix Sabzi", description: "Blandade grönsaker.", price: "99:-" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99:-" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99:-" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99:-" },
      { name: "Lamm Karahi", description: "Lamm med tomat & kryddor.", price: "119:-" },
      { name: "Chicken Sambal", description: "Kyckling i stark sås.", price: "99:-" },
      { name: "Achari Chicken", description: "Kyckling i syrlig och kryddig sås.", price: "119:-" },
    ],
  },
  {
    day: "Torsdag",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99:-" },
      { name: "Aloo Palak", description: "Potatis & spenat.", price: "99:-" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99:-" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99:-" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99:-" },
      { name: "Biff Madras", description: "Biff i stark, kryddig sås.", price: "119:-" },
      { name: "Lamm Palak", description: "Lamm med spenat i mild sås.", price: "119:-" },
      { name: "Chicken Karahi", description: "Kyckling med tomat & kryddor.", price: "99:-" },
    ],
  },
  {
    day: "Fredag",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", price: "99:-" },
      { name: "Paneer Jalfrezi", description: "Indisk ost med grönsaker i kryddsås.", price: "99:-" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", price: "99:-" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", price: "99:-" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", price: "99:-" },
      { name: "Lamm Palak", description: "Lamm med spenat i mild kryddsås.", price: "119:-" },
      { name: "Achari Chicken", description: "Kyckling i syrlig och kryddig sås.", price: "119:-" },
    ],
  },
];

export const UBER_EATS_URL = "#"; // Placeholder until URL is provided
