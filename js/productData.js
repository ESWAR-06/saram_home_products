/**
 * SARAM HOME PRODUCTS
 * Product catalog loaded from Supabase
 */

const SUPABASE_URL = 'https://jadlkikzkpkceeqvcgia.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_ipcjX2LryepNnZA2y62nKQ_pxEVGxBJ';

// Authenticated client — used by admin.js for login, CRUD, storage.
// Persists the admin session in localStorage (default behavior).
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// Public (anonymous) client — used ONLY for public product reads.
// persistSession:false ensures it never picks up or sends an expired
// admin JWT, so public SELECT always works with the anon key alone.
const publicSupabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  }
);


// ============================================================
// PRODUCT CATALOG
// ============================================================

let PRODUCT_CATALOG = [];


// ============================================================
// CATEGORY LABELS
// ============================================================

const CATEGORY_LABELS = {
  cleaning: 'Eco Cleaning',
  skincare: 'Natural Skincare',
  handmade: 'Traditional Handmade'
};


// ============================================================
// LOAD PRODUCTS FROM SUPABASE
// ============================================================

async function loadProducts() {

  const { data, error } = await publicSupabaseClient
    .from('PRODUCTS')
    .select('*')
    .order('NAME');

  if (error) {
    console.error('Failed to load products from Supabase:', error);
    return;
  }

  PRODUCT_CATALOG = data.map(row => {

    return {
      id: row.ID,
      title: row.NAME,
      price: Number(row.PRICE),
      subtitle: row.SIZE || '',
      category: row.CATEGORY || '',
      categoryLabel: CATEGORY_LABELS[row.CATEGORY] || row.CATEGORY || '',
      shortDesc: row.DESCRIPTION || '',

      // Supabase Storage image URL
      filename: row.IMAGE_URL || '',

      // Used by the dashboard to toggle availability
      available: row.AVAILABLE,

      // Used by the existing PRODUCT_DETAILS object
      // in script.js. We are NOT storing this in the database.
      detailedKey: row.NAME
    };

  });

  console.log('Products loaded from Supabase:', PRODUCT_CATALOG);
}


// ============================================================
// FIND PRODUCT BY ID
// ============================================================

function getProductById(productId) {

  return PRODUCT_CATALOG.find(
    product => String(product.id) === String(productId)
  );

}


// ============================================================
// READY PROMISE
// ============================================================

const catalogReady = loadProducts();