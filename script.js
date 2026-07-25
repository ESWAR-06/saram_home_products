/**
 * SARAM HOME PRODUCTS — Main Script
 * ─────────────────────────────────────────────────────────────────────────────
 * Handles: product rendering, image lightbox, product detail modal,
 * cart management, checkout, WhatsApp order, navigation, scroll animations.
 */

'use strict';

/* ============================================================
   1. PRODUCT DETAIL DATA
   ============================================================ */

const PRODUCT_DETAILS = {

  'Hand Wash': {
    price: 95,
    tagline: 'Clean Hands, Healthy Life',
    description: 'SARAM Bio Enzyme Hand Wash is formulated with plant-based ingredients that effectively clean your hands while being gentle on skin. It removes dirt, germs, and impurities without causing dryness — suitable for everyday use by the entire family.',
    benefits: [
      'Plant-Based Formula',
      'Gentle on Skin — No Dryness',
      'Effectively Removes Dirt & Germs',
      'Eco-Friendly & Biodegradable',
      'Safe for Kids & Sensitive Skin',
      'Suitable for Daily Use'
    ],
    howToUse: [
      'Wet your hands with clean water.',
      'Apply one or two pumps of Hand Wash.',
      'Rub hands together for at least 20 seconds.',
      'Rinse well with clean water.',
      'Dry your hands with a clean towel.'
    ],
    suitableFor: ['Tiles', 'Granite', 'Marble', 'Other Washable Surfaces', 'Biodegradable', 'Eco-friendly']
  },

  'Floor Cleaner': {
    price: 135,
    tagline: 'Naturally Clean Floors Every Day',
    description: 'SARAM Bio Enzyme Floor Cleaner naturally cleans and removes everyday dirt without harsh chemicals. Its plant-based formula is safe for children, pets, and the environment, while leaving your floors fresh and hygienically clean.',
    benefits: [
      'Effective on All Floor Types',
      'Plant-Based & Biodegradable',
      'Safe for Kids & Pets',
      'No Harsh Chemical Residue',
      'Leaves Floors Fresh & Hygienic',
      'Eco-Friendly Formula'
    ],
    howToUse: [
      'Mix 40 ml of SARAM Floor Cleaner with 5 litres of water.',
      'Use a mop or cloth to clean the floor.',
      'No rinsing required after mopping.',
      'Suitable for everyday cleaning.'
    ],
    suitableFor: ['Tiles', 'Granite', 'Marble', 'Other Washable Surfaces', 'Plant-based', 'Biodegradable', 'Eco-friendly']
  },

  'Dish Wash': {
    price: 149,
    tagline: 'Tough on Grease, Gentle on Hands',
    description: 'SARAM Bio Enzyme Dish Wash naturally removes tough grease and food residue from utensils. The gentle, plant-based formula is safe for hands and the environment, making it an ideal everyday dishwashing solution.',
    benefits: [
      'Effectively Removes Grease & Food Residue',
      'Gentle on Hands',
      'Plant-Based & Eco-Friendly',
      'Biodegradable Formula',
      'Suitable for All Utensils',
      'No Harmful Chemicals'
    ],
    howToUse: [
      'Add 5–10 ml into water or directly onto a wet scrubber.',
      'Wash utensils thoroughly.',
      'Rinse with clean water.',
      'Suitable for everyday dishwashing.'
    ],
    suitableFor: ['Steel', 'Glass', 'Ceramic', 'Non-Stick', 'Other Washable Utensils', 'Plant-based', 'Eco-friendly']
  },

  'Kumkumathi Roll-On': {
    price: 299,
    tagline: 'Radiant Skin in Every Roll',
    netVolume: '15 ml',
    description: 'Reveal naturally healthy, glowing skin with Saram Kumkumathi Roll-On, a convenient blend of traditional herbal oils crafted to nourish and rejuvenate your skin. The easy-to-use roll-on applicator ensures mess-free application anytime, anywhere.',
    benefits: [
      'Brightens skin',
      'Enhances natural glow',
      'Helps reduce pigmentation',
      'Helps reduce blemishes',
      'Moisturizes skin',
      'Improves texture',
      'Lightweight',
      'Non-greasy',
      'Suitable for all skin types'
    ],
    howToUse: [
      'Cleanse your face thoroughly.',
      'Apply roll-on directly to the skin.',
      'Massage gently in circular motions.',
      'Leave overnight for best results.'
    ],
    directions: 'Use daily. Perform a patch test before first use. Store in a cool, dry place away from direct sunlight.',
    ingredients: [
      'Kumkumadi Oil',
      'Saffron',
      'Sandalwood',
      'Licorice',
      'Almond Oil',
      'Sesame Oil',
      'Vitamin E',
      'Traditional herbal ingredients'
    ],
    badges: [
      '100% Handmade',
      'Natural Care',
      'Cruelty Free',
      'Free from Harsh Chemicals'
    ]
  },

  'Almond Face Pack': {
    price: 150,
    tagline: 'Glow Naturally with the Power of Almonds',
    description: 'SARAM Natural Almond Face Pack is a carefully crafted herbal blend made from pure almond extracts and traditional botanicals. It brightens dull skin, removes excess oil, gently exfoliates, and improves overall skin texture — revealing naturally radiant, smooth skin with regular use.',
    benefits: [
      'Brightens skin naturally',
      'Removes excess oil & unclogs pores',
      'Gentle exfoliation for smooth skin',
      'Improves skin texture',
      'Suitable for all skin types',
      'Free from harsh chemicals',
      'Hydrates & nourishes skin',
      'Reduces dullness & uneven tone'
    ],
    ingredients: [
      'Almond Powder',
      'Sandalwood Powder',
      'Multani Mitti (Fuller\'s Earth)',
      'Rose Petal Powder',
      'Turmeric',
      'Neem Powder',
      'Traditional herbal extracts'
    ],
    howToUse: [
      'Mix 1–2 teaspoons of face pack with rose water or plain water to form a smooth paste.',
      'Apply evenly on cleansed face and neck.',
      'Leave on for 15–20 minutes until dry.',
      'Rinse off gently with lukewarm water.',
      'Pat dry and apply a light moisturizer.',
      'Use 2–3 times per week for best results.'
    ],
    storage: 'Store in a cool, dry place. Keep away from moisture and direct sunlight. Best used within 12 months of opening.',
    badges: [
      '100% Natural',
      'Chemical Free',
      'Cruelty Free',
      'Suitable for All Skin Types'
    ]
  },

  'Wooden Comb': {
    price: 100,
    tagline: 'Natural Hair Care, the Traditional Way',
    description: 'SARAM Wooden Comb is handcrafted from natural neem wood and designed for smooth, gentle hair care. The wide teeth help detangle hair comfortably while reducing breakage, static, and scalp irritation — the natural, chemical-free choice for healthy hair.',
    benefits: [
      'Made from Natural Neem Wood',
      'Reduces Hair Breakage',
      'Anti-Static Design',
      'Stimulates Scalp Blood Circulation',
      'Gentle on the Scalp',
      'Suitable for All Hair Types'
    ],
    howToUse: [
      'Use on dry or slightly damp hair.',
      'Start combing from the ends and gradually move upward.',
      'Clean the comb regularly with a dry cloth.',
      'Avoid soaking in water for extended periods.'
    ]
  },

  'Natural Loofah': {
    price: 199,
    tagline: 'Nature\'s Perfect Scrub',
    description: 'SARAM Natural Loofah is a biodegradable bath and kitchen scrub made from 100% natural plant fibers. It gently exfoliates the skin, removing dead skin cells and leaving your skin feeling fresh and smooth. Also effective as a natural scrubber for cleaning utensils.',
    benefits: [
      '100% Natural & Biodegradable',
      'Gentle Skin Exfoliation',
      'Eco-Friendly Alternative to Plastic Scrubbers',
      'Durable & Long Lasting',
      'Suitable for Bathing and Kitchen Use'
    ],
    howToUse: [
      'Soak the loofah in water for a few minutes before first use.',
      'Apply soap or body wash and gently scrub skin in circular motions.',
      'For kitchen use, apply dishwash liquid and clean utensils.',
      'Rinse thoroughly after use and hang in a dry place.'
    ]
  },

  'Bamboo Toothbrush': {
    price: 35,
    tagline: 'Brush Green, Live Clean',
    description: 'SARAM Bamboo Toothbrush is an eco-friendly alternative to conventional plastic toothbrushes. Made with a natural bamboo handle and soft charcoal-infused bristles, it provides effective cleaning while helping reduce plastic waste.',
    benefits: [
      'Eco-Friendly Bamboo Handle',
      'Comfortable Ergonomic Grip',
      'Soft Bristles for Gentle Cleaning',
      'Lightweight & Durable',
      'Sustainable Alternative to Plastic Toothbrushes',
      'Biodegradable Handle'
    ],
    howToUse: [
      'Apply toothpaste to the bristles.',
      'Brush teeth gently for about two minutes.',
      'Rinse the toothbrush thoroughly after use.',
      'Store in a dry place between uses.',
      'Replace every 2–3 months or as recommended by your dentist.'
    ]
  }

};

/* ============================================================
   2. PRODUCT IMAGE LIGHTBOX (from product cards)
   ============================================================ */

let lightboxImages = PRODUCT_CATALOG.map(p => ({
  src: 'images/' + p.filename,
  title: p.title,
  subtitle: p.subtitle || ''
}));

let currentLightboxIndex = 0;

function openProductLightbox(productId) {
  const idx = PRODUCT_CATALOG.findIndex(p => p.id === productId);
  if (idx === -1) return;
  currentLightboxIndex = idx;
  _showLightbox();
}

function _showLightbox() {
  const lb = document.getElementById('productLightbox');
  if (!lb) return;
  _updateLightboxSlide();
  lb.classList.add('active');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function _updateLightboxSlide() {
  const lb = document.getElementById('productLightbox');
  if (!lb) return;
  const img    = lb.querySelector('.plb-img');
  const cap    = lb.querySelector('.plb-caption');
  const sub    = lb.querySelector('.plb-sub');
  const counter = lb.querySelector('.plb-counter');
  const data   = lightboxImages[currentLightboxIndex];
  if (!data) return;

  img.style.opacity = '0';
  img.style.transform = 'scale(0.96)';

  setTimeout(() => {
    img.src = data.src;
    img.alt = data.title;
    if (cap) cap.textContent = data.title;
    if (sub) sub.textContent = data.subtitle;
    if (counter) counter.textContent = (currentLightboxIndex + 1) + ' / ' + lightboxImages.length;
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }, 150);
}

function closeLightbox() {
  const lb = document.getElementById('productLightbox');
  if (!lb) return;
  lb.classList.remove('active');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function lightboxNext() {
  currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
  _updateLightboxSlide();
}

function lightboxPrev() {
  currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  _updateLightboxSlide();
}

/* ============================================================
   3. PRODUCT DETAILS MODAL
   ============================================================ */

function openDetailsModal(productId) {
  const product = getProductById(productId);
  if (!product || !product.detailedKey) return;
  const details = PRODUCT_DETAILS[product.detailedKey];
  if (!details) return;

  const modal = document.getElementById('productModal');
  const body  = modal.querySelector('.modal-body');
  if (!modal || !body) return;

  // Build badges HTML
  let badgesHTML = '';
  if (details.badges && details.badges.length) {
    badgesHTML = `
      <div class="modal-badges-row">
        ${details.badges.map(b => `<span class="modal-badge">${b}</span>`).join('')}
      </div>`;
  }

  // Build benefits HTML
  let benefitsHTML = '';
  if (details.benefits && details.benefits.length) {
    benefitsHTML = `
      <div class="modal-section">
        <h4 class="modal-section-title">Benefits</h4>
        <ul class="modal-list">
          ${details.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>`;
  }

  // Build suitable-for HTML (for cleaning products)
  let suitableHTML = '';
  if (details.suitableFor && details.suitableFor.length) {
    suitableHTML = `
      <div class="modal-section">
        <h4 class="modal-section-title">Suitable For</h4>
        <div class="suit-list">
          ${details.suitableFor.map(s => `<span class="suit-tag">${s}</span>`).join('')}
        </div>
      </div>`;
  }

  // Build ingredients HTML
  let ingredientsHTML = '';
  if (details.ingredients && details.ingredients.length) {
    ingredientsHTML = `
      <div class="modal-section">
        <h4 class="modal-section-title">Ingredients</h4>
        <ul class="modal-list modal-list--inline">
          ${details.ingredients.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>`;
  }

  // Build how-to-use HTML
  let howToUseHTML = '';
  if (details.howToUse && details.howToUse.length) {
    howToUseHTML = `
      <div class="modal-section">
        <h4 class="modal-section-title">How To Use</h4>
        <ol class="modal-list modal-list--ordered">
          ${details.howToUse.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>`;
  }

  // Build directions / storage HTML
  let directionsHTML = '';
  if (details.directions) {
    directionsHTML = `
      <div class="modal-section">
        <h4 class="modal-section-title">Directions</h4>
        <p class="modal-directions-text">${details.directions}</p>
      </div>`;
  }
  if (details.storage) {
    directionsHTML += `
      <div class="modal-section">
        <h4 class="modal-section-title">Storage</h4>
        <p class="modal-directions-text">${details.storage}</p>
      </div>`;
  }

  // Net volume (Roll-On)
  let volumeHTML = details.netVolume
    ? `<span class="modal-volume-tag">${details.netVolume}</span>` : '';

  body.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrapper">
        <img src="images/${product.filename}" alt="${product.title}" loading="lazy">
      </div>
      <div class="modal-content-area">
        <span class="product-category">${product.categoryLabel}</span>
        <h3 class="modal-title">${product.title}${product.subtitle ? ' <small class="modal-subtitle">' + product.subtitle + '</small>' : ''}</h3>
        ${details.tagline ? `<p class="modal-tagline">${details.tagline}</p>` : ''}
        <div class="modal-price-row">
          <span class="modal-price-tag">₹${product.price}</span>
          ${volumeHTML}
        </div>
        ${badgesHTML}
        <p class="modal-description">${details.description}</p>
        ${benefitsHTML}
        ${suitableHTML}
        ${ingredientsHTML}
        ${howToUseHTML}
        ${directionsHTML}
        <div class="modal-actions">
          <button class="btn btn-primary modal-add-cart-btn" onclick="handleAddToCart('${product.id}'); closeDetailsModal();">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Add to Cart
          </button>
          <button class="btn btn-secondary modal-close-btn" onclick="closeDetailsModal();">Close</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDetailsModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ============================================================
   4. PRODUCT GRID RENDERER
   ============================================================ */

function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = '';

  PRODUCT_CATALOG.forEach(product => {
    const hasDetails = product.detailedKey && PRODUCT_DETAILS[product.detailedKey];

    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;

    card.innerHTML = `
      <div class="product-img-wrapper product-img-clickable" 
           onclick="openProductLightbox('${product.id}')" 
           title="Click to view image"
           role="button" 
           tabindex="0" 
           aria-label="View ${product.title} image">
        <div class="product-img-zoom-hint">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
        <img src="images/${product.filename}" 
             alt="${product.title}" 
             class="product-img" 
             loading="lazy"
             onerror="this.onerror=null;">
      </div>
      <div class="product-info">
        <span class="product-category">${product.categoryLabel}</span>
        <h3 class="product-title">${product.title}</h3>
        ${product.subtitle ? `<span class="product-subtitle-tag">${product.subtitle}</span>` : ''}
        <p class="product-desc-short">${product.shortDesc}</p>
        <div class="product-meta">
          <span class="product-price">₹${product.price}</span>
        </div>
        <div class="product-card-actions">
          <button class="btn btn-add-cart" onclick="handleAddToCart('${product.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Add to Cart
          </button>
          ${hasDetails ? `<button class="btn btn-card-details" onclick="openDetailsModal('${product.id}')">View Details</button>` : ''}
        </div>
      </div>
    `;

    // Keyboard support for lightbox trigger
    card.querySelector('.product-img-clickable').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProductLightbox(product.id);
      }
    });

    grid.appendChild(card);
  });
}

/* ============================================================
   5. CART HELPERS
   ============================================================ */

function handleAddToCart(productId) {
  CartManager.addToCart(productId, 1);
  const product = getProductById(productId);
  showToast(`${product ? product.title : 'Item'} added to cart!`);
}

/* ============================================================
   6. TOAST NOTIFICATION
   ============================================================ */

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 2600);
}

/* ============================================================
   7. CART PAGE RENDERER
   ============================================================ */

function renderCartPage() {
  const cartContainer = document.getElementById('cart-content');
  if (!cartContainer) return;

  const items = CartManager.getCartWithDetails();

  if (items.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart-card">
        <svg class="empty-cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h3>Your Cart is Empty</h3>
        <p>Explore our natural eco-friendly products and traditional handmade items.</p>
        <button class="btn btn-primary" onclick="navigateToSection('products')">Continue Shopping</button>
      </div>
    `;
    return;
  }

  const itemsHTML = items.map(item => `
    <div class="cart-item-card" data-id="${item.productId}">
      <img src="images/${item.product.filename}" alt="${item.product.title}" class="cart-item-thumb">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.product.title}</h4>
        ${item.product.subtitle ? `<span class="cart-item-subtitle">${item.product.subtitle}</span>` : ''}
        <span class="cart-item-unit-price">₹${item.product.price} each</span>
      </div>
      <div class="cart-item-qty-controls">
        <button class="qty-btn" onclick="CartManager.updateQuantity('${item.productId}', ${item.quantity - 1})" aria-label="Decrease quantity">−</button>
        <span class="qty-val">${item.quantity}</span>
        <button class="qty-btn" onclick="CartManager.updateQuantity('${item.productId}', ${item.quantity + 1})" aria-label="Increase quantity">+</button>
      </div>
      <div class="cart-item-total">₹${item.itemTotal}</div>
      <button class="cart-item-remove-btn" onclick="CartManager.removeFromCart('${item.productId}')" title="Remove item" aria-label="Remove ${item.product.title}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    </div>
  `).join('');

  const totalItems = CartManager.getCartCount();
  const grandTotal = CartManager.getCartTotal();

  cartContainer.innerHTML = `
    <div class="cart-items-container">${itemsHTML}</div>
    <div class="cart-summary-card">
      <div class="cart-summary-rows">
        <div class="summary-row">
          <span>Total Items</span>
          <strong>${totalItems}</strong>
        </div>
        <div class="summary-row grand-total">
          <span>Grand Total</span>
          <strong>₹${grandTotal}</strong>
        </div>
      </div>
      <div class="cart-summary-actions">
        <button class="btn-clear-cart" onclick="CartManager.clearCart()">Clear Cart</button>
        <div class="cart-cta-group">
          <button class="btn btn-secondary" onclick="navigateToSection('products')">Continue Shopping</button>
          <button class="btn btn-primary" onclick="navigateToSection('checkout')">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   8. CHECKOUT RENDERER & WHATSAPP ORDER
   ============================================================ */

function renderCheckoutPage() {
  const items = CartManager.getCartWithDetails();
  if (items.length === 0) {
    navigateToSection('cart');
    return;
  }

  const itemsList = document.getElementById('checkout-items-list');
  const grandTotalEl = document.getElementById('checkout-grand-total');

  if (itemsList) {
    itemsList.innerHTML = items.map(item => `
      <div class="checkout-item-row">
        <span class="checkout-item-name">${item.product.title}${item.product.subtitle ? ' (' + item.product.subtitle + ')' : ''}</span>
        <span class="checkout-item-qty">× ${item.quantity}</span>
        <span class="checkout-item-price">₹${item.itemTotal}</span>
      </div>
    `).join('');
  }

  if (grandTotalEl) {
    grandTotalEl.textContent = '₹' + CartManager.getCartTotal();
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const nameEl    = document.getElementById('cust-name');
  const phoneEl   = document.getElementById('cust-phone');
  const addressEl = document.getElementById('cust-address');
  const errName   = document.getElementById('err-name');
  const errPhone  = document.getElementById('err-phone');
  const errAddr   = document.getElementById('err-address');

  // Reset validation state
  [nameEl, phoneEl, addressEl].forEach(el => el && el.classList.remove('invalid'));
  [errName, errPhone, errAddr].forEach(el => el && el.classList.remove('visible'));

  const name    = nameEl ? nameEl.value.trim() : '';
  const phone   = phoneEl ? phoneEl.value.trim() : '';
  const address = addressEl ? addressEl.value.trim() : '';
  let valid = true;

  if (!name) {
    nameEl.classList.add('invalid');
    if (errName) errName.classList.add('visible');
    valid = false;
  }
  if (!phone || phone.replace(/\D/g, '').length < 7) {
    phoneEl.classList.add('invalid');
    if (errPhone) errPhone.classList.add('visible');
    valid = false;
  }
  if (!address) {
    addressEl.classList.add('invalid');
    if (errAddr) errAddr.classList.add('visible');
    valid = false;
  }
  if (!valid) return;

  const cartItems  = CartManager.getCartWithDetails();
  if (cartItems.length === 0) return;

  const totalItems = CartManager.getCartCount();
  const grandTotal = CartManager.getCartTotal();

  const orderLines = cartItems.map(item => {
    const label = item.product.subtitle
      ? `${item.product.title} (${item.product.subtitle})`
      : item.product.title;
    return `• ${label} ×${item.quantity}\n  ₹${item.itemTotal}`;
  }).join('\n\n');

  const message =
`Hello,

I would like to place the following order.

----------------------------------

Customer Details

Name:
${name}

Phone:
${phone}

Delivery Address:
${address}

----------------------------------

Order Details

${orderLines}

----------------------------------

Total Items : ${totalItems}

Grand Total : ₹${grandTotal}

----------------------------------

Please confirm my order.

I will wait for your confirmation.

Thank you.`;

  // Show notice banner
  const notice = document.getElementById('checkout-notice');
  if (notice) notice.style.display = 'flex';

  const waUrl = `https://wa.me/918608495618?text=${encodeURIComponent(message)}`;
  setTimeout(() => window.open(waUrl, '_blank'), 350);
}

/* ============================================================
   9. NAVIGATION & VIEW MANAGEMENT
   ============================================================ */

function navigateToSection(targetId) {
  const cartEl     = document.getElementById('cart');
  const checkoutEl = document.getElementById('checkout');

  if (targetId === 'cart') {
    if (cartEl) {
      cartEl.style.display = 'block';
      renderCartPage();
      setTimeout(() => cartEl.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
    history.pushState(null, null, '#cart');
    return;
  }

  if (targetId === 'checkout') {
    if (checkoutEl) {
      checkoutEl.style.display = 'block';
      renderCheckoutPage();
      setTimeout(() => checkoutEl.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
    history.pushState(null, null, '#checkout');
    return;
  }

  // Standard anchor scroll
  const el = document.getElementById(targetId) || document.querySelector('.hero-section');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.pushState(null, null, '#' + (targetId || 'home'));
}

/* ============================================================
   10. CART BADGE
   ============================================================ */

function updateCartBadge() {
  const count = CartManager.getCartCount();
  ['cartBadge', 'mobileCartBadge'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = count;
    if (id === 'cartBadge') {
      el.classList.remove('bump');
      void el.offsetWidth; // reflow
      el.classList.add('bump');
    }
  });
}

/* ============================================================
   11. STICKY HEADER & NAV HIGHLIGHT
   ============================================================ */

function initNavScroll() {
  const header   = document.querySelector('.main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);

    let currentId = 'home';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 130) {
        currentId = sec.getAttribute('id') || 'home';
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  }, { passive: true });
}

/* ============================================================
   12. SCROLL REVEAL ANIMATIONS
   ============================================================ */

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.scroll-anim-trigger').forEach(el => observer.observe(el));
}

/* ============================================================
   13. FILTER TABS
   ============================================================ */

function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      Array.from(document.getElementsByClassName('product-card')).forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        if (show) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display = 'none'; }, 280);
        }
      });
    });
  });
}

/* ============================================================
   14. MOBILE MENU
   ============================================================ */

function initMobileMenu() {
  const toggleBtn  = document.querySelector('.mobile-menu-toggle');
  const overlay    = document.getElementById('mobileNavOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !overlay) return;

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
    toggleBtn.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
}

/* ============================================================
   15. INITIALISE APP
   ============================================================ */

function initApp() {
  renderProducts();
  updateCartBadge();
  initNavScroll();
  initScrollAnimations();
  initFilterTabs();
  initMobileMenu();

  // Cart state listener
  window.addEventListener('cart:updated', () => {
    updateCartBadge();
    const cartEl     = document.getElementById('cart');
    const checkoutEl = document.getElementById('checkout');
    if (cartEl && cartEl.style.display === 'block')     renderCartPage();
    if (checkoutEl && checkoutEl.style.display === 'block') renderCheckoutPage();
  });

  // Anchor-link interceptor (smooth + view routing)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const id = hash.slice(1);
      const known = ['cart', 'checkout', 'home', 'about', 'products', 'why-choose-us', 'contact', 'gallery'];
      if (known.includes(id)) {
        e.preventDefault();
        navigateToSection(id);
      }
    });
  });

  // Checkout form
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  // Back to Cart button
  const btnBack = document.getElementById('btnBackToCart');
  if (btnBack) btnBack.addEventListener('click', () => navigateToSection('cart'));

  // Initial hash routing
  const initHash = window.location.hash.slice(1);
  if (initHash === 'cart' || initHash === 'checkout') navigateToSection(initHash);

  // ── Product Modal setup ───────────────────────────────────────────────────
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.closest('.modal-close')) closeDetailsModal();
    });
  }

  // ── Product Lightbox setup ────────────────────────────────────────────────
  const lb = document.getElementById('productLightbox');
  if (lb) {
    lb.addEventListener('click', e => {
      if (e.target === lb || e.target.closest('.plb-close')) closeLightbox();
    });
    const prevBtn = lb.querySelector('.plb-prev');
    const nextBtn = lb.querySelector('.plb-next');
    if (prevBtn) prevBtn.addEventListener('click', e => { e.stopPropagation(); lightboxPrev(); });
    if (nextBtn) nextBtn.addEventListener('click', e => { e.stopPropagation(); lightboxNext(); });
  }

  // ── Keyboard shortcuts ────────────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    // Modal
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'Escape') closeDetailsModal();
    }
    // Lightbox
    if (lb && lb.classList.contains('active')) {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
