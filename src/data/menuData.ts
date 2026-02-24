export type SpiceLevel = "mild" | "medium" | "spicy" | "hot" | "extra-hot";

export interface MenuItem {
  num?: number;
  name: string;
  nameEn?: string;
  description?: string;
  descriptionEn?: string;
  price: string;
  spice?: SpiceLevel;
}

export interface MenuCategory {
  title: string;
  titleEn?: string;
  description?: string;
  descriptionEn?: string;
  items: MenuItem[];
}

export const dinnerMenu: MenuCategory[] = [
  {
    title: "Traditionella Förrätter",
    titleEn: "Traditional Starters",
    items: [
      { num: 1, name: "Veg Samosa (2 st)", nameEn: "Veg Samosa (2 pcs)", description: "Friterade smördegssnittar fyllda med grönsaker med färsk chili, koriander och rostade indiska kryddor.", descriptionEn: "Fried pastry parcels filled with vegetables, fresh chili, coriander and roasted Indian spices.", price: "59 kr", spice: "mild" },
      { num: 1, name: "Kött Samosa (2 st)", nameEn: "Meat Samosa (2 pcs)", description: "Friterade smördegssnittar fyllda med kött, kyckling med färsk chili, koriander och rostade indiska kryddor.", descriptionEn: "Fried pastry parcels filled with meat, chicken with fresh chili, coriander and roasted Indian spices.", price: "69 kr", spice: "medium" },
      { num: 2, name: "Aloo Chana Chaat", description: "Typiska gatusnacks med kokt potatis, kikärter, röd lök, tomater, och 3 olika såser.", descriptionEn: "Typical street snacks with boiled potato, chickpeas, red onion, tomatoes, and 3 different sauces.", price: "80 kr", spice: "mild" },
      { num: 3, name: "Golgappe (Pani Puri)", description: "Friterade små bröd fyllda med potatis, kikärter och yoghurt. Serveras med söt och sur sås.", descriptionEn: "Small fried bread filled with potato, chickpeas and yoghurt. Served with sweet and sour sauce.", price: "90 kr", spice: "medium" },
      { num: 4, name: "Seekh Kabab (2 st)", nameEn: "Seekh Kabab (2 pcs)", description: "Lammfärs med lök, chili, vitlök och koriander, rullat på spett och kolgrillat.", descriptionEn: "Minced lamb with onion, chili, garlic and coriander, rolled on skewers and charcoal grilled.", price: "95 kr", spice: "spicy" },
      { num: 5, name: "Chicken Tikka (3 st)", nameEn: "Chicken Tikka (3 pcs)", description: "Yoghurt- och kryddmarinerad kycklingfilé, kolgrillad.", descriptionEn: "Yoghurt and spice-marinated chicken fillet, charcoal grilled.", price: "79 kr", spice: "medium" },
      { num: 6, name: "Aloo Tikki (2 st)", nameEn: "Aloo Tikki (2 pcs)", description: "Potatisbiffar med färska örter och kryddor, stekta i panna.", descriptionEn: "Potato patties with fresh herbs and spices, pan-fried.", price: "59 kr", spice: "mild" },
      { num: 7, name: "Mix Pakora", description: "Grönsaker, potatis, lök, chili och blomkål doppade i kikärtsmjölsmet och friterade.", descriptionEn: "Vegetables, potato, onion, chili and cauliflower dipped in chickpea flour batter and deep fried.", price: "69 kr", spice: "mild" },
      { num: 8, name: "Chicken Pakora", description: "Strimlad kycklingfilé friterad i kikärtsmjölsmet.", descriptionEn: "Sliced chicken fillet deep fried in chickpea flour batter.", price: "89 kr", spice: "medium" },
      { num: 9, name: "Paneer Pakora", description: "Hemgjord ost friterad i kikärtsmjölsmet.", descriptionEn: "Homemade cheese deep fried in chickpea flour batter.", price: "90 kr", spice: "mild" },
      { num: 10, name: "Jhinga Pakora (3 st)", nameEn: "Jhinga Pakora (3 pcs)", description: "Räkor friterade i kikärtsmjölsmet.", descriptionEn: "Prawns deep fried in chickpea flour batter.", price: "110 kr", spice: "medium" },
    ],
  },
  {
    title: "Biryani Rätter",
    titleEn: "Biryani Dishes",
    description: "Traditionell Biryani tillagad med lamm, kyckling, nötkött, fisk eller grönsaker. Serveras med raita eller varm sås.",
    descriptionEn: "Traditional Biryani cooked with lamb, chicken, beef, fish or vegetables. Served with raita or warm sauce.",
    items: [
      { num: 11, name: "Lamm Biryani", nameEn: "Lamb Biryani", price: "169 kr", spice: "medium" },
      { num: 12, name: "Kyckling Biryani", nameEn: "Chicken Biryani", price: "150 kr", spice: "medium" },
      { num: 13, name: "Vegetarisk Biryani", nameEn: "Vegetable Biryani", price: "149 kr", spice: "mild" },
      { num: 14, name: "Scampi Biryani", price: "189 kr", spice: "medium" },
    ],
  },
  {
    title: "Sizzler / Grill Rätter",
    titleEn: "Sizzler / Grill Dishes",
    description: "Alla rätter serveras med grillade grönsaker och varm sås. Naan eller ris ingår.",
    descriptionEn: "All dishes served with grilled vegetables and warm sauce. Naan or rice included.",
    items: [
      { num: 15, name: "Tandoori Chicken (½ kyckling, 2 ben)", nameEn: "Tandoori Chicken (½ chicken, 2 legs)", price: "149 kr", spice: "spicy" },
      { num: 16, name: "Tandoori Chicken (hel, 4 ben)", nameEn: "Tandoori Chicken (whole, 4 legs)", price: "249 kr", spice: "spicy" },
      { num: 17, name: "Seekh Kabab (3 st)", nameEn: "Seekh Kabab (3 pcs)", price: "169 kr", spice: "spicy" },
      { num: 18, name: "Chicken Tikka", price: "169 kr", spice: "medium" },
      { num: 19, name: "Lamm Boti Tikka", nameEn: "Lamb Boti Tikka", price: "189 kr", spice: "medium" },
      { num: 20, name: "Fish Tikka", price: "189 kr", spice: "medium" },
      { num: 21, name: "Mix Grill", price: "249 kr", spice: "spicy" },
      { num: 22, name: "Lamm Chaanp", nameEn: "Lamb Chaanp", description: "Marinerad och grillad lammkotlett.", descriptionEn: "Marinated and grilled lamb chop.", price: "219 kr", spice: "medium" },
    ],
  },
  {
    title: "Special Punjabi Grytor",
    titleEn: "Special Punjabi Curries",
    description: "Tillagade i klassisk punjabistil med rika kryddor och färska ingredienser. Serveras med basmatiris eller naan.",
    descriptionEn: "Prepared in classic Punjabi style with rich spices and fresh ingredients. Served with basmati rice or naan.",
    items: [
      { num: 23, name: "Lammgryta", nameEn: "Lamb Curry", price: "159 kr", spice: "medium" },
      { num: 24, name: "Kycklinggryta", nameEn: "Chicken Curry", price: "149 kr", spice: "medium" },
      { num: 25, name: "Biffgryta", nameEn: "Beef Curry", price: "155 kr", spice: "medium" },
      { num: 26, name: "Achar Gosht (biff, kyckling)", nameEn: "Achar Gosht (beef, chicken)", price: "169 kr / Lamm 179 kr", spice: "hot" },
      { num: 27, name: "Ginger Masala (kyckling, biff)", nameEn: "Ginger Masala (chicken, beef)", price: "169 kr / Lamm 179 kr", spice: "spicy" },
      { num: 28, name: "Jalfrezi (biff, kyckling)", nameEn: "Jalfrezi (beef, chicken)", price: "169 kr / Lamm 179 kr / Scampi 199 kr", spice: "hot" },
      { num: 29, name: "Palak Gosht (kyckling, biff)", nameEn: "Palak Gosht (chicken, beef)", price: "169 kr / Lamm 179 kr / Scampi 199 kr", spice: "medium" },
      { num: 30, name: "Dal Gosht (biff, kyckling)", nameEn: "Dal Gosht (beef, chicken)", price: "169 kr / Lamm 179 kr / Scampi 199 kr", spice: "medium" },
      { num: 31, name: "Cholle Gosht (kyckling eller biff)", nameEn: "Cholle Gosht (chicken or beef)", price: "169 kr / Lamm 179 kr", spice: "medium" },
    ],
  },
  {
    title: "Tikka Masala Rätter",
    titleEn: "Tikka Masala Dishes",
    description: "Grillade rätter i mild, krämig och söt tomatbaserad sås med nötter och grädde. Serveras med ris eller naan.",
    descriptionEn: "Grilled dishes in a mild, creamy and sweet tomato-based sauce with nuts and cream. Served with rice or naan.",
    items: [
      { num: 32, name: "Chicken Tikka Masala", price: "179 kr", spice: "mild" },
      { num: 33, name: "Scampi Tikka Masala", price: "189 kr", spice: "mild" },
      { num: 34, name: "Chicken & Scampi Tikka Masala", price: "189 kr", spice: "mild" },
      { num: 35, name: "Lamm Tikka Masala", nameEn: "Lamb Tikka Masala", price: "189 kr", spice: "mild" },
      { num: 36, name: "Zaffrani Tikka Butter Masala", price: "179 kr", spice: "mild" },
      { num: 37, name: "Paneer Tikka Masala", price: "169 kr", spice: "mild" },
    ],
  },
  {
    title: "Karahi Rätter",
    titleEn: "Karahi Dishes",
    description: "Traditionella punjabirätter tillagade i wok/karahi med färska tomater, ingefära och vitlök. Serveras med ris eller naan.",
    descriptionEn: "Traditional Punjabi dishes cooked in wok/karahi with fresh tomatoes, ginger and garlic. Served with rice or naan.",
    items: [
      { num: 38, name: "Lamb Karahi", price: "179 kr", spice: "spicy" },
      { num: 39, name: "Scampi Karahi", price: "199 kr", spice: "spicy" },
      { num: 40, name: "Paneer Karahi", price: "169 kr", spice: "medium" },
      { num: 41, name: "Seekh Kebab Karahi", price: "159 kr", spice: "spicy" },
      { num: 42, name: "Shinwari Namkeen Karahi", description: "Lamm med chili (svart, röd eller grön).", descriptionEn: "Lamb with chili (black, red or green).", price: "179 kr", spice: "extra-hot" },
      { num: 43, name: "White Butter Chicken Karahi", price: "179 kr", spice: "mild" },
      { num: 44, name: "White Lamb Karahi", price: "179 kr", spice: "mild" },
      { num: 45, name: "Dhaka Spicy Biff Karahi", nameEn: "Dhaka Spicy Beef Karahi", price: "179 kr", spice: "hot" },
      { num: 46, name: "Chilli Garlic Karahi (Lamm, biff, kyckling)", nameEn: "Chilli Garlic Karahi (Lamb, beef, chicken)", price: "189 kr", spice: "extra-hot" },
      { num: 47, name: "Chilli Garlic Jhinga Karahi", price: "199 kr", spice: "extra-hot" },
    ],
  },
  {
    title: "Plain Grill Rätter",
    titleEn: "Plain Grill Dishes",
    description: "Serveras med tre olika såser samt ris eller naan.",
    descriptionEn: "Served with three different sauces and rice or naan.",
    items: [
      { num: 48, name: "Seekh Kebab (3 st)", nameEn: "Seekh Kebab (3 pcs)", price: "159 kr" },
      { num: 49, name: "Kyckling Tikka (5 st)", nameEn: "Chicken Tikka (5 pcs)", price: "149 kr" },
      { num: 50, name: "Lamm Boti Tikka (5 st)", nameEn: "Lamb Boti Tikka (5 pcs)", price: "179 kr" },
      { num: 51, name: "Fish Tikka (5 st)", nameEn: "Fish Tikka (5 pcs)", price: "159 kr" },
      { num: 52, name: "Scampi Tikka", price: "199 kr" },
    ],
  },
  {
    title: "Tawa Rätter",
    titleEn: "Tawa Dishes",
    description: "Serveras med ris eller naan.",
    descriptionEn: "Served with rice or naan.",
    items: [
      { num: 53, name: "Tawa Chaanp", description: "Lammkotletter med vitlök, ingefära, tomat och lök.", descriptionEn: "Lamb chops with garlic, ginger, tomato and onion.", price: "229 kr" },
      { num: 54, name: "Tawa Scampi", description: "Tigerräkor med vitlök, koriander, tomat och chili.", descriptionEn: "Tiger prawns with garlic, coriander, tomato and chili.", price: "199 kr" },
      { num: 55, name: "Tawa Lax", nameEn: "Tawa Salmon", description: "Laxfilé och tigerräkor i tomatsås med koriander och ingefära.", descriptionEn: "Salmon fillet and tiger prawns in tomato sauce with coriander and ginger.", price: "189 kr" },
      { num: 56, name: "Tawa Qeema", description: "Köttfärsrätt med vitlök, koriander, tomat och chili.", descriptionEn: "Minced meat dish with garlic, coriander, tomato and chili.", price: "169 kr" },
      { num: 57, name: "Peshawari Chapli Kebab", description: "Klassisk kebab med färska kryddor.", descriptionEn: "Classic kebab with fresh spices.", price: "149 kr" },
    ],
  },
  {
    title: "Vegetariska Rätter",
    titleEn: "Vegetarian Dishes",
    description: "Serveras med ris eller naan.",
    descriptionEn: "Served with rice or naan.",
    items: [
      { num: 58, name: "Dal Fry", description: "Linsgryta med punjabi tarka.", descriptionEn: "Lentil curry with Punjabi tarka.", price: "139 kr" },
      { num: 59, name: "Punjabi Cholle", description: "Kikärtsgryta.", descriptionEn: "Chickpea curry.", price: "139 kr" },
      { num: 60, name: "Aloo Baingan", description: "Potatis med aubergine.", descriptionEn: "Potato with eggplant.", price: "149 kr" },
      { num: 61, name: "Palak Paneer", description: "Spenat med färsk ost.", descriptionEn: "Spinach with fresh cheese.", price: "159 kr" },
      { num: 62, name: "Aloo Palak", description: "Potatis med spenat.", descriptionEn: "Potato with spinach.", price: "149 kr" },
      { num: 63, name: "Paneer Achari", description: "Kryddig paneergryta.", descriptionEn: "Spicy paneer curry.", price: "169 kr" },
      { num: 64, name: "Paneer Jalfrezi", description: "Paneer med paprika, lök och tomatsås.", descriptionEn: "Paneer with bell pepper, onion and tomato sauce.", price: "159 kr" },
      { num: 65, name: "Shahi Paneer", description: "Krämig tomatsås med nötter, grädde och honung.", descriptionEn: "Creamy tomato sauce with nuts, cream and honey.", price: "169 kr" },
      { num: 66, name: "Paneer Korma", description: "Mild sås med mixade nötter och grädde.", descriptionEn: "Mild sauce with mixed nuts and cream.", price: "169 kr" },
      { num: 67, name: "Mix Sabzi", description: "Blandade grönsaker.", descriptionEn: "Mixed vegetables.", price: "159 kr" },
    ],
  },
  {
    title: "Specialmeny",
    titleEn: "Specials",
    items: [
      { num: 68, name: "Nihari Lamm", nameEn: "Nihari Lamb", description: "Långkokt lamm med kryddor, lime, lök, chili och koriander.", descriptionEn: "Slow-cooked lamb with spices, lime, onion, chili and coriander.", price: "170 kr" },
      { num: 69, name: "Beef Paya", description: "Långkokta oxfötter i rik kryddblandning.", descriptionEn: "Slow-cooked beef trotters in rich spice blend.", price: "169 kr" },
      { num: 70, name: "Kyckling Haleem", nameEn: "Chicken Haleem", price: "149 kr" },
      { num: 71, name: "Kött Thali (6 personer)", nameEn: "Meat Thali (6 persons)", description: "6 Chapli Kabab, 6 Tandoori Chicken, 6 naan, Chicken Karahi & Lamm Karahi.", descriptionEn: "6 Chapli Kabab, 6 Tandoori Chicken, 6 naan, Chicken Karahi & Lamb Karahi.", price: "1080 kr" },
      { num: 72, name: "Veg Thali (6 personer)", nameEn: "Veg Thali (6 persons)", description: "Mix av vegetariska rätter, naan & ris.", descriptionEn: "Mix of vegetarian dishes, naan & rice.", price: "1080 kr" },
    ],
  },
  {
    title: "Specialrullar / Wraps",
    titleEn: "Special Rolls / Wraps",
    description: "Serveras med färskbakat bröd, tre såser, sallad, gurka, tomat och lök.",
    descriptionEn: "Served with freshly baked bread, three sauces, salad, cucumber, tomato and onion.",
    items: [
      { num: 73, name: "Kycklingrulle", nameEn: "Chicken Roll", price: "99 kr" },
      { num: 74, name: "Seekh Kabab Rulle", nameEn: "Seekh Kabab Roll", price: "99 kr" },
      { num: 75, name: "Scampi Rulle", nameEn: "Scampi Roll", price: "129 kr" },
      { num: 76, name: "Vegetarisk Rulle", nameEn: "Vegetarian Roll", price: "99 kr" },
    ],
  },
  {
    title: "Färskbakat Bröd",
    titleEn: "Freshly Baked Bread",
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
    titleEn: "Sides, Desserts & Drinks",
    items: [
      { num: 86, name: "Raita", price: "30 kr" },
      { num: 87, name: "Pickles", price: "25 kr" },
      { num: 88, name: "Kachumber Sallad", nameEn: "Kachumber Salad", price: "45 kr" },
      { num: 89, name: "Gulab Jamun", price: "39 kr" },
      { num: 90, name: "Gajar Ka Halwa", price: "49 kr" },
      { num: 91, name: "Kulfi", price: "49 kr" },
      { num: 92, name: "Punjabi Lassi (söt eller salt)", nameEn: "Punjabi Lassi (sweet or salty)", price: "40 kr" },
      { num: 93, name: "Mango Lassi", price: "45 kr" },
      { num: 94, name: "Läsk", nameEn: "Soft Drink", price: "20 kr" },
      { num: 95, name: "Chai", price: "35 kr" },
    ],
  },
];

export interface LunchDay {
  day: string;
  dayEn?: string;
  items: MenuItem[];
}

export const lunchMenu: LunchDay[] = [
  {
    day: "Måndag",
    dayEn: "Monday",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", descriptionEn: "Spiced lentil soup with tomatoes, onion and spices.", price: "99 kr" },
      { name: "Aloo Gobi", description: "Potatis & blomkål med kryddor.", descriptionEn: "Potato & cauliflower with spices.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", descriptionEn: "Grilled chicken in creamy tomato sauce.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", descriptionEn: "Marinated and grilled chicken.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", descriptionEn: "Hot sizzling plate with chicken and vegetables.", price: "99 kr" },
      { name: "Lammgryta", nameEn: "Lamb Curry", description: "Mustig gryta med aromatiska kryddor.", descriptionEn: "Rich curry with aromatic spices.", price: "119 kr" },
      { name: "Kycklinggryta", nameEn: "Chicken Curry", description: "Smakrik gryta med kryddor.", descriptionEn: "Flavorful curry with spices.", price: "99 kr" },
      { name: "Achari Chicken", description: "Kyckling i syrlig och kryddig kryddsås.", descriptionEn: "Chicken in tangy and spicy pickle sauce.", price: "119 kr" },
    ],
  },
  {
    day: "Tisdag",
    dayEn: "Tuesday",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", descriptionEn: "Spiced lentil soup with tomatoes, onion and spices.", price: "99 kr" },
      { name: "Palak Paneer", description: "Spenat och indisk färskost med kryddor och grädde.", descriptionEn: "Spinach and Indian cottage cheese with spices and cream.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", descriptionEn: "Grilled chicken in creamy tomato sauce.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", descriptionEn: "Marinated and grilled chicken.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", descriptionEn: "Hot sizzling plate with chicken and vegetables.", price: "99 kr" },
      { name: "Biff Sambal", nameEn: "Beef Sambal", description: "Biff i stark kryddsås.", descriptionEn: "Beef in spicy sambal sauce.", price: "119 kr" },
      { name: "Butter Chicken", description: "Kyckling i krämig tomatsås.", descriptionEn: "Chicken in creamy tomato sauce.", price: "99 kr" },
    ],
  },
  {
    day: "Onsdag",
    dayEn: "Wednesday",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", descriptionEn: "Spiced lentil soup with tomatoes, onion and spices.", price: "99 kr" },
      { name: "Mix Sabzi", description: "Blandade grönsaker.", descriptionEn: "Mixed vegetables.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", descriptionEn: "Grilled chicken in creamy tomato sauce.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", descriptionEn: "Marinated and grilled chicken.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", descriptionEn: "Hot sizzling plate with chicken and vegetables.", price: "99 kr" },
      { name: "Lamm Karahi", nameEn: "Lamb Karahi", description: "Lamm med tomat & kryddor.", descriptionEn: "Lamb with tomato & spices.", price: "119 kr" },
      { name: "Lamm Palak", nameEn: "Lamb Palak", description: "Lamm med spenat i mild sås.", descriptionEn: "Lamb with spinach in mild sauce.", price: "119 kr" },
      { name: "Chicken Sambal", description: "Kyckling i stark sås.", descriptionEn: "Chicken in spicy sauce.", price: "99 kr" },
    ],
  },
  {
    day: "Torsdag",
    dayEn: "Thursday",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", descriptionEn: "Spiced lentil soup with tomatoes, onion and spices.", price: "99 kr" },
      { name: "Aloo Palak", description: "Potatis & spenat.", descriptionEn: "Potato & spinach.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", descriptionEn: "Grilled chicken in creamy tomato sauce.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", descriptionEn: "Marinated and grilled chicken.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", descriptionEn: "Hot sizzling plate with chicken and vegetables.", price: "99 kr" },
      { name: "Biff Madras", nameEn: "Beef Madras", description: "Biff i stark, kryddig sås.", descriptionEn: "Beef in hot, spicy sauce.", price: "119 kr" },
      { name: "Lamm Palak", nameEn: "Lamb Palak", description: "Lamm med spenat i mild sås.", descriptionEn: "Lamb with spinach in mild sauce.", price: "119 kr" },
      { name: "Chicken Karahi", description: "Kyckling med tomat & kryddor.", descriptionEn: "Chicken with tomato & spices.", price: "99 kr" },
    ],
  },
  {
    day: "Fredag",
    dayEn: "Friday",
    items: [
      { name: "Dal Fry", description: "Kryddad linssoppa med tomater, lök och kryddor.", descriptionEn: "Spiced lentil soup with tomatoes, onion and spices.", price: "99 kr" },
      { name: "Paneer Jalfrezi", description: "Indisk ost med grönsaker i kryddsås.", descriptionEn: "Indian cheese with vegetables in spiced sauce.", price: "99 kr" },
      { name: "Chicken Tikka Masala", description: "Grillad kyckling i krämig tomatsås.", descriptionEn: "Grilled chicken in creamy tomato sauce.", price: "99 kr" },
      { name: "Chicken Tandoori", description: "Marinerad och grillad kyckling.", descriptionEn: "Marinated and grilled chicken.", price: "99 kr" },
      { name: "Chicken Tikka Sizzler", description: "Het järnplatta med kyckling och grönsaker.", descriptionEn: "Hot sizzling plate with chicken and vegetables.", price: "99 kr" },
      { name: "Lamm Palak", nameEn: "Lamb Palak", description: "Lamm med spenat i mild kryddsås.", descriptionEn: "Lamb with spinach in mild spiced sauce.", price: "119 kr" },
      { name: "Achari Chicken", description: "Kyckling i syrlig och kryddig sås.", descriptionEn: "Chicken in tangy and spicy sauce.", price: "119 kr" },
    ],
  },
];

export const UBER_EATS_URL = "https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg";
