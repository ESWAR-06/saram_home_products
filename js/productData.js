/**
 * SARAM HOME PRODUCTS - PRODUCT CATALOG
 * Clean, unique product catalog with no duplicate entries.
 */

const DEFAULT_PRODUCT_PRICE = 50;

const PRODUCT_CATALOG = [
  // ── Eco Cleaning ──────────────────────────────────────────────────────────
  {
    id: 'prod-citrus-bio-enzyme',
    filename: 'bio_enzyme_floor_cleaner.jpeg',
    title: 'Citrus Bio Enzyme',
    subtitle: '500 ml',
    category: 'cleaning',
    categoryLabel: 'Eco Cleaning',
    price: 80,
    shortDesc: 'Naturally fermented multi-purpose cleaner & plant booster made from citrus peels, jaggery, and water.',
    detailedKey: 'Citrus Bio Enzyme'
  },
  {
    id: 'prod-handwash',
    filename: 'bio_enzyme_handwash.jpeg',
    title: 'Hand Wash',
    subtitle: '250 ml',
    category: 'cleaning',
    categoryLabel: 'Eco Cleaning',
    price: 95,
    shortDesc: 'Gentle plant-based hand wash infused with natural enzymes to cleanse without drying.',
    detailedKey: 'Hand Wash'
  },
  {
    id: 'prod-floorwash',
    filename: 'bio_enzyme_floor_cleaner.jpeg',
    title: 'Floor Cleaner',
    subtitle: '500 ml',
    category: 'cleaning',
    categoryLabel: 'Eco Cleaning',
    price: 135,
    shortDesc: 'Naturally cleans and removes everyday dirt. Safe for kids, pets, and the environment.',
    detailedKey: 'Floor Cleaner'
  },
  {
    id: 'prod-dishwash',
    filename: 'bio_enzyme_dishwash_cleaner.jpeg',
    title: 'Dish Wash',
    subtitle: '500 ml',
    category: 'cleaning',
    categoryLabel: 'Eco Cleaning',
    price: 149,
    shortDesc: 'Naturally removes tough grease. Gentle on hands and safe for the environment.',
    detailedKey: 'Dish Wash'
  },

  // ── Skincare / Wellness ───────────────────────────────────────────────────
  {
    id: 'prod-rollon',
    filename: 'rollon.jpeg',
    title: 'Kumkumathi Roll-On',
    subtitle: '15 ml',
    category: 'skincare',
    categoryLabel: 'Natural Skincare',
    price: 299,
    shortDesc: 'Radiant Skin in Every Roll — a convenient blend of traditional herbal oils for glowing skin.',
    detailedKey: 'Kumkumathi Roll-On'
  },
  {
    id: 'prod-facepack',
    filename: 'almond_face_pack.jpeg',
    title: 'Almond Face Pack',
    subtitle: 'Natural & Organic',
    category: 'skincare',
    categoryLabel: 'Natural Skincare',
    price: 150,
    shortDesc: 'Brightens skin, removes excess oil, and gently exfoliates with natural almond extracts.',
    detailedKey: 'Almond Face Pack'
  },

  // ── Traditional Handmade ──────────────────────────────────────────────────
  {
    id: 'prod-comb',
    filename: 'comb.jpeg',
    title: 'Wooden Comb',
    subtitle: 'Natural Neem Wood',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 100,
    shortDesc: 'Neem wood wide-tooth hair comb that stimulates scalp health and prevents static damage.',
    detailedKey: 'Wooden Comb'
  },
  {
    id: 'prod-loofah',
    filename: 'Loofah.jpeg',
    title: 'Natural Loofah',
    subtitle: 'Plant Fiber Scrub',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 199,
    shortDesc: '100% natural plant fiber scrub made from dried gourd, perfect for gentle skin exfoliation.',
    detailedKey: 'Natural Loofah'
  },
  {
    id: 'prod-toothbrush',
    filename: 'toothbrush.jpeg',
    title: 'Bamboo Toothbrush',
    subtitle: 'Eco-Friendly',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 35,
    shortDesc: 'Biodegradable bamboo toothbrush with soft charcoal-infused bristles for gentle oral care.',
    detailedKey: 'Bamboo Toothbrush'
  },
  {
    id: 'prod-koodai',
    filename: 'koodai_rs100.jpeg',
    title: 'Traditional Koodai',
    subtitle: 'Handwoven Carry Basket',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 100,
    shortDesc: 'Premium traditional hand-woven carry basket with sturdy handles, durable and eco-friendly.',
    detailedKey: null
  },
  {
    id: 'prod-muram',
    filename: 'muram_rs80.jpeg',
    title: 'Bamboo Muram',
    subtitle: 'Winnowing Tray',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 80,
    shortDesc: 'Traditional handmade winnowing tray, made from strong bamboo splits for kitchen utility.',
    detailedKey: null
  },
  {
    id: 'prod-basket-small',
    filename: 'basket2_rs15.jpeg',
    title: 'Palm Basket (Small)',
    subtitle: 'Handwoven Palm',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 15,
    shortDesc: 'Sleek traditional hand-woven palm basket, ideal for fruit storage or natural home decor.',
    detailedKey: null
  },
  {
    id: 'prod-basket-medium',
    filename: 'basket3_rs30.jpeg',
    title: 'Palm Basket (Medium)',
    subtitle: 'Handwoven Palm',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 30,
    shortDesc: 'Large handmade organizer basket, crafted from premium dried palm leaves.',
    detailedKey: null
  },
  {
    id: 'prod-basket-storage',
    filename: 'basket_rs20.jpeg',
    title: 'Storage Palm Basket',
    subtitle: 'Palm Leaf',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 20,
    shortDesc: 'Handcrafted palm leaf storage basket, perfect for organizing household items sustainably.',
    detailedKey: null
  },
  {
    id: 'prod-bamboo-handle-basket',
    filename: 'bamboo_handle_basket.jpeg',
    title: 'Bamboo Handle Basket',
    subtitle: '8 × 8 × 3 inches',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 85,
    shortDesc: 'Handcrafted eco-friendly bamboo handle basket, lightweight & reusable for hampers & gifts.',
    detailedKey: 'Bamboo Handle Basket'
  },
  {
    id: 'prod-oval-bamboo-basket',
    filename: 'oval_bamboo_basket.jpeg',
    title: 'Oval Bamboo Basket',
    subtitle: '9 × 6.5 × 1 inch',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 95,
    shortDesc: 'Handcrafted oval bamboo tray basket, ideal for snack serving, fruits, hampers & festive decor.',
    detailedKey: 'Oval Bamboo Basket'
  },
  {
    id: 'prod-round-bamboo-basket',
    filename: 'round_bamboo_basket.jpeg',
    title: 'Round Bamboo Basket',
    subtitle: '7-inch Diameter',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 45,
    shortDesc: 'Handcrafted 7" round bamboo basket, lightweight & durable for fruit storage, snacks & return gifts.',
    detailedKey: 'Round Bamboo Basket'
  },
  {
    id: 'prod-bamboo-basket-with-handle',
    filename: 'bamboo_basket_with_handle.jpeg',
    title: 'Large Bamboo Carry Basket',
    subtitle: '16 × 11 × 5 inches',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 195,
    shortDesc: 'Spacious 16×11×5" handcrafted bamboo carry basket with sturdy handle for hampers & storage.',
    detailedKey: 'Bamboo Basket with Handle'
  },
  {
    id: 'prod-square-bamboo-basket',
    filename: 'square_bamboo_basket.jpeg',
    title: 'Square Bamboo Basket (Sandal)',
    subtitle: '6" | 8" | 10" Available',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 110,
    shortDesc: 'Handcrafted sandal shade square bamboo basket available in 6×6", 8×8", and 10×10" sizes.',
    detailedKey: 'Square Bamboo Basket'
  },
  {
    id: 'prod-bamboo-tray',
    filename: 'bamboo_tray.jpeg',
    title: 'Bamboo Serving Tray',
    subtitle: '8 × 12 × 3 inches',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 160,
    shortDesc: 'Premium 8×12×3" handcrafted bamboo serving & organizing tray for tea, snacks, hampers & decor.',
    detailedKey: 'Bamboo Tray'
  },
  {
    id: 'prod-coaster',
    filename: 'thing_rs25.jpeg',
    title: 'Handcrafted Woven Coaster',
    subtitle: 'Natural Woven',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 25,
    shortDesc: 'Artisanal handcrafted coaster, bringing natural vintage aesthetics to your home.',
    detailedKey: null
  }
];

// Helper to find a product by ID
function getProductById(id) {
  return PRODUCT_CATALOG.find(p => p.id === id) || null;
}
