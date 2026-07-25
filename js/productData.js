/**
 * SARAM HOME PRODUCTS - PRODUCT CATALOG
 * All products with unique IDs, correct prices, categories, and detail keys.
 */

const DEFAULT_PRODUCT_PRICE = 50;

const PRODUCT_CATALOG = [
  // ── Eco Cleaning ──────────────────────────────────────────────────────────
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
    title: 'Palm Basket',
    subtitle: 'Small',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 15,
    shortDesc: 'Sleek traditional hand-woven basket, ideal for fruit storage or natural home decor.',
    detailedKey: null
  },
  {
    id: 'prod-basket-medium',
    filename: 'basket3_rs30.jpeg',
    title: 'Palm Basket',
    subtitle: 'Medium',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 30,
    shortDesc: 'Large handmade organizer basket, crafted from premium dried palm leaves.',
    detailedKey: null
  },
  {
    id: 'prod-basket-storage',
    filename: 'basket_rs20.jpeg',
    title: 'Storage Basket',
    subtitle: 'Palm Leaf',
    category: 'handmade',
    categoryLabel: 'Traditional Handmade',
    price: 20,
    shortDesc: 'Handcrafted palm leaf storage basket, perfect for organizing household items sustainably.',
    detailedKey: null
  },
  {
    id: 'prod-coaster',
    filename: 'thing_rs25.jpeg',
    title: 'Handcrafted Coaster',
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
