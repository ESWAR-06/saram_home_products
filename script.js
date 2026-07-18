/**
 * SARAM HOME PRODUCTS - CLIENT JAVASCRIPT
 * Handles dynamic rendering, details modal, gallery lightbox, 
 * scroll animations, and navigation events.
 */

// 1. Static Image Database (relative to images/ folder)
const productImages = [
  'Loofah.jpeg',
  'basket2_rs15.jpeg',
  'basket3_rs30.jpeg',
  'basket_rs20.jpeg',
  'bio_enzyme_dishwash_cleaner.jpeg',
  'bio_enzyme_floor_cleaner.jpeg',
  'bio_enzyme_handwash.jpeg',
  'comb.jpeg',
  'koodai_rs100.jpeg',
  'muram_rs80.jpeg',
  'thing_rs25.jpeg',
  'toothbrush.jpeg'
];

// Curated short descriptions for every catalog item
const productDescriptions = {
  'Loofah': '100% natural plant fiber scrub made from dried gourd, perfect for gentle skin exfoliation.',
  'Basket': 'Handcrafted palm leaf storage basket, perfect for organizing household items sustainably.',
  'Basket 2': 'Sleek traditional hand-woven basket, ideal for fruit storage or natural home decor.',
  'Basket 3': 'Large handmade organizer basket, crafted from premium dried palm leaves.',
  'Bio Enzyme Dishwash Cleaner': 'Naturally removes tough grease. Gentle on hands and safe for the environment.',
  'Bio Enzyme Floor Cleaner': 'Naturally cleans and removes everyday dirt. Safe for kids, pets, and the environment.',
  'Bio Enzyme Handwash': 'Gentle plant-based hand wash infused with natural enzymes to cleanse without drying.',
  'Comb': 'Neem wood wide-tooth hair comb, stimulates scalp health and prevents static damage.',
  'Koodai': 'Premium traditional hand-woven carry basket with sturdy handles, durable and eco-friendly.',
  'Muram': 'Traditional handmade winnowing tray, made from strong bamboo splits for kitchen utility.',
  'Thing': 'Artisanal handcrafted utility container, bringing natural vintage aesthetics to your home.',
  'Toothbrush': 'Biodegradable bamboo toothbrush with soft charcoal-infused bristles for gentle oral care.'
};

// Detailed content for products (Keyed by their parsed titles)
const detailedProducts = {
  'Bio Enzyme Floor Cleaner': {
    description: 'Naturally cleans and removes everyday dirt. Safe for kids, pets, and the environment. Leaves floors fresh without harsh chemical residue.',
    suitable: ['Tiles', 'Granite', 'Marble', 'Other Washable Surfaces', 'Plant-based', 'Biodegradable', 'Eco-friendly'],
    howToUse: [
      'Mix 40 ml of SARAM Bio Enzyme Floor Cleaner with 5 litres of water.',
      'Use a mop or cloth to wipe the floor.',
      'No rinsing required.',
      'Suitable for everyday cleaning.'
    ]
  },
  'Bio Enzyme Dishwash Cleaner': {
    description: 'Naturally removes grease. Gentle on hands. Tough on dirt. Safe for the environment.',
    suitable: ['Steel', 'Glass', 'Ceramic', 'Other Washable Utensils', 'Plant-based', 'Eco-friendly'],
    howToUse: [
      'Add 5–10 ml into water or directly onto a wet scrubber.',
      'Wash utensils thoroughly.',
      'Rinse with clean water.'
    ]
  },
  'Loofah': {
    description: 'SARAM Natural Loofah is a biodegradable bath and kitchen scrub made from natural plant fibers. It gently exfoliates the skin while helping remove dead skin cells, leaving your skin feeling fresh and smooth. It can also be used as a natural scrubber for cleaning utensils and kitchen surfaces without scratching them.',
    benefits: [
      '100% Natural & Biodegradable',
      'Gentle Skin Exfoliation',
      'Eco-Friendly Alternative to Plastic Scrubbers',
      'Durable & Long Lasting',
      'Suitable for Bathing and Kitchen Use'
    ],
    howToUse: [
      'Soak the loofah in water for a few minutes before first use.',
      'Apply soap or body wash and gently scrub your skin using circular motions.',
      'For kitchen use, apply dishwash liquid and clean utensils normally.',
      'Rinse thoroughly after use and hang in a dry place.'
    ]
  },
  'Comb': {
    description: 'SARAM Wooden Comb is handcrafted from natural wood and designed for smooth, gentle hair care. The wide teeth help detangle hair comfortably while reducing breakage, static, and scalp irritation.',
    benefits: [
      'Made from Natural Wood',
      'Reduces Hair Breakage',
      'Anti-Static Design',
      'Gentle on the Scalp',
      'Suitable for All Hair Types'
    ],
    howToUse: [
      'Use on dry or slightly damp hair.',
      'Start combing from the ends and gradually move upward.',
      'Clean the comb regularly with a dry cloth.',
      'Avoid soaking the wooden comb in water for long periods.'
    ]
  },
  'Bio Enzyme Handwash': {
    description: 'SARAM Bio Enzyme Hand Wash is made using plant-based ingredients that effectively clean your hands while remaining gentle on your skin. It removes dirt and impurities without causing dryness, making it suitable for frequent everyday use.',
    benefits: [
      'Plant-Based Formula',
      'Gentle on Skin',
      'Effectively Removes Dirt & Germs',
      'Eco-Friendly & Biodegradable',
      'Suitable for Daily Use'
    ],
    howToUse: [
      'Wet your hands with clean water.',
      'Apply one or two pumps of hand wash.',
      'Rub your hands together thoroughly for at least 20 seconds.',
      'Rinse well with clean water and dry your hands.'
    ]
  },
  'Toothbrush': {
    description: 'SARAM Bamboo Toothbrush is an eco-friendly alternative to conventional plastic toothbrushes. Made with a natural bamboo handle and soft bristles, it provides effective cleaning while helping reduce plastic waste.',
    benefits: [
      'Eco-Friendly Bamboo Handle',
      'Comfortable Grip',
      'Soft Bristles for Gentle Cleaning',
      'Lightweight & Durable',
      'Sustainable Alternative to Plastic Toothbrushes'
    ],
    howToUse: [
      'Apply toothpaste to the brush.',
      'Brush your teeth gently for about two minutes.',
      'Rinse the toothbrush thoroughly after use.',
      'Store it in a dry place between uses.',
      'Replace the toothbrush every 2–3 months or as recommended by your dentist.'
    ]
  }
};

// 2. Helper Functions for parsing names and prices
function parseProductName(filename) {
  // Remove extension
  let name = filename.substring(0, filename.lastIndexOf('.'));
  // Remove _rsXX
  name = name.replace(/_rs\d+/gi, '');
  // Format numbers (e.g. basket2 -> basket 2)
  name = name.replace(/([a-zA-Z])(\d+)/g, '$1 $2');
  // Convert underscores to spaces
  name = name.replace(/_/g, ' ');
  // Capitalize words
  return name.split(' ')
             .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
             .join(' ');
}

// Ensure exact name mapping for detailed products
function getParsedTitleKey(parsedTitle) {
  if (parsedTitle === 'Comb') return 'Comb';
  if (parsedTitle === 'Loofah') return 'Loofah';
  if (parsedTitle === 'Bio Enzyme Handwash') return 'Bio Enzyme Handwash';
  if (parsedTitle === 'Toothbrush') return 'Toothbrush';
  return parsedTitle;
}

function extractPrice(filename) {
  const match = filename.match(/_rs(\d+)/i);
  return match ? `₹${match[1]}` : null;
}

function determineCategory(filename) {
  if (filename.toLowerCase().includes('bio_enzyme')) {
    return 'cleaning';
  }
  return 'handmade';
}

function getCategoryLabel(category) {
  return category === 'cleaning' ? 'Eco Cleaning' : 'Traditional Handmade';
}

// 3. Render Catalog & Gallery Elements
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  
  grid.innerHTML = ''; // Clear loader
  
  productImages.forEach(filename => {
    const title = parseProductName(filename);
    const price = extractPrice(filename);
    const category = determineCategory(filename);
    const categoryLabel = getCategoryLabel(category);
    const desc = productDescriptions[title] || 'Premium eco-friendly household item designed for sustainable, natural living.';
    
    // Create card element
    const card = document.createElement('div');
    card.className = `product-card fade-in-up`;
    card.dataset.category = category;
    
    // Check if product has detailed content
    const titleKey = getParsedTitleKey(title);
    const hasDetails = detailedProducts[titleKey] !== undefined;
    
    let detailsButtonHTML = '';
    if (hasDetails) {
      detailsButtonHTML = `<button class="btn btn-card-details" onclick="openDetailsModal('${titleKey}', 'images/${filename}')">View Details</button>`;
    }
    
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="images/${filename}" alt="${title}" class="product-img" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category">${categoryLabel}</span>
        <h3 class="product-title">${title}</h3>
        <p class="product-desc-short">${desc}</p>
        <div class="product-meta">
          <span class="product-price">${price ? price : '&nbsp;'}</span>
          <div class="product-action">
            ${detailsButtonHTML}
          </div>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function renderGallery() {
  const gallery = document.getElementById('gallery-grid');
  if (!gallery) return;
  
  gallery.innerHTML = '';
  
  productImages.forEach((filename, index) => {
    const title = parseProductName(filename);
    const category = determineCategory(filename);
    const categoryLabel = getCategoryLabel(category);
    
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('onclick', `openLightbox(${index})`);
    
    item.innerHTML = `
      <img src="images/${filename}" alt="${title}" loading="lazy">
      <div class="gallery-overlay">
        <h3>${title}</h3>
        <p>${categoryLabel}</p>
      </div>
    `;
    
    gallery.appendChild(item);
  });
}

// 4. Modal Pop-up Handlers
function openDetailsModal(title, imgSrc) {
  const modal = document.getElementById('productModal');
  const details = detailedProducts[title];
  if (!modal || !details) return;
  
  const modalBody = modal.querySelector('.modal-body');
  
  // Format Tags or Benefits Section dynamically
  let detailsSectionHTML = '';
  if (details.suitable) {
    const tagListHTML = details.suitable.map(tag => `<span class="suit-tag">${tag}</span>`).join('');
    detailsSectionHTML = `
      <h4 class="modal-section-title">Suitable For</h4>
      <div class="suit-list">
        ${tagListHTML}
      </div>
    `;
  } else if (details.benefits) {
    const benefitsListHTML = details.benefits.map(benefit => `<li>${benefit}</li>`).join('');
    detailsSectionHTML = `
      <h4 class="modal-section-title">Benefits</h4>
      <ul class="instructions-steps" style="margin-bottom: 24px;">
        ${benefitsListHTML}
      </ul>
    `;
  }
  
  // Format Steps
  const stepsHTML = details.howToUse.map(step => `<li>${step}</li>`).join('');
  
  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrapper">
        <img src="${imgSrc}" alt="${title}">
      </div>
      <div class="modal-content-area">
        <h3 class="modal-title">${title === 'Comb' ? 'Wooden Comb' : (title === 'Loofah' ? 'Natural Loofah' : (title === 'Toothbrush' ? 'Bamboo Toothbrush' : title))}</h3>
        <p class="modal-description">${details.description}</p>
        
        ${detailsSectionHTML}
        
        <h4 class="modal-section-title">How To Use</h4>
        <ul class="instructions-steps">
          ${stepsHTML}
        </ul>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeDetailsModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Release scroll
}

// 5. Gallery Lightbox Functions
let currentLightboxIndex = 0;

function openLightbox(index) {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;
  
  currentLightboxIndex = index;
  updateLightboxImage();
  
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;
  
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  
  if (currentLightboxIndex >= productImages.length) {
    currentLightboxIndex = 0;
  } else if (currentLightboxIndex < 0) {
    currentLightboxIndex = productImages.length - 1;
  }
  
  updateLightboxImage();
}

function updateLightboxImage() {
  const lightbox = document.getElementById('galleryLightbox');
  const img = lightbox.querySelector('.lightbox-img');
  const caption = lightbox.querySelector('.lightbox-caption');
  
  const filename = productImages[currentLightboxIndex];
  const title = parseProductName(filename);
  
  img.src = `images/${filename}`;
  img.alt = title;
  caption.textContent = title;
}

// 6. Navigation and Interactive Elements
function initNavScroll() {
  const header = document.querySelector('.main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section, header');
  
  // Sticky Navbar Scroll listener
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Highlight Active Nav Link
    let currentId = 'home';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id') || 'home';
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// ... Mobile Menu, Filters, Scroll observer
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const overlay = document.getElementById('mobileNavOverlay');
  const links = document.querySelectorAll('.mobile-link');
  
  if (!toggleBtn || !overlay) return;
  
  function toggle() {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    toggleBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = !isExpanded ? 'hidden' : '';
  }
  
  toggleBtn.addEventListener('click', toggle);
  
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.getElementsByClassName('product-card');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Set active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const filter = tab.dataset.filter;
      
      Array.from(cards).forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.scroll-anim-trigger').forEach(element => {
    observer.observe(element);
  });
}

// 7. Initializer and Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Render layout catalogs
  renderProducts();
  renderGallery();
  
  // Set up navigations
  initNavScroll();
  initMobileMenu();
  initFilterTabs();
  initScrollAnimations();
  
  // Modal Close listener
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.modal-close')) {
        closeDetailsModal();
      }
    });
  }
  
  // Lightbox navigation listener
  const lightbox = document.getElementById('galleryLightbox');
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    });
    
    lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
    
    lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }
  
  // Keyboard handlers for overlays
  document.addEventListener('keydown', (e) => {
    if (modal && modal.classList.contains('active') && e.key === 'Escape') {
      closeDetailsModal();
    }
    
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      }
    }
  });
});
