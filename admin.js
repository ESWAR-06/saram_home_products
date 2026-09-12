// admin.js
// Uses supabaseClient, PRODUCT_CATALOG, and loadProducts() from js/productData.js

const BUCKET_NAME = 'product-images';

// DOM Elements
const loginContainer = document.getElementById('loginContainer');
const dashboardContainer = document.getElementById('dashboardContainer');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const dashboardMessage = document.getElementById('dashboardMessage');
const adminProductGrid = document.getElementById('adminProductGrid');
const logoutBtn = document.getElementById('logoutBtn');
const adminHeader = document.getElementById('adminHeader');
const addBtn = document.getElementById('addBtn');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const productForm = document.getElementById('productForm');
const modalTitle = document.getElementById('modalTitle');
const saveBtn = document.getElementById('saveBtn');

// Internal username map
const usernameMap = { 'saram': 'saram@admin.local' };
let currentEditId = null;

// Helpers
function showMsg(el, msg, type) {
  el.textContent = msg;
  el.className = `message ${type}`;
  setTimeout(() => el.style.display = 'none', 5000);
}

function clearMsg(el) {
  el.textContent = '';
  el.className = 'message';
}

function toggleUI(isAuthenticated) {
  if (isAuthenticated) {
    loginContainer.style.display = 'none';
    dashboardContainer.style.display = 'block';
    adminHeader.style.display = 'flex';
    renderAdminDashboardProducts();
  } else {
    loginContainer.style.display = 'flex';
    dashboardContainer.style.display = 'none';
    adminHeader.style.display = 'none';
  }
}

// Authentication
async function checkSession() {
  const { data } = await supabaseClient.auth.getSession();
  toggleUI(!!data.session);
}
checkSession();

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const email = usernameMap[username];
  
  if (!email) {
    showMsg(loginMessage, 'Invalid login credentials.', 'error');
    return;
  }
  
  const btn = document.getElementById('loginBtn');
  btn.disabled = true;
  btn.textContent = 'Logging in...';
  
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  
  btn.disabled = false;
  btn.textContent = 'Login';
  
  if (error) {
    showMsg(loginMessage, 'Invalid login credentials.', 'error');
  } else {
    toggleUI(true);
  }
});

logoutBtn.addEventListener('click', async () => {
  await supabaseClient.auth.signOut();
  toggleUI(false);
});

// Dashboard Data
async function renderAdminDashboardProducts() {
  // Ensure the initial catalog load is done
  await catalogReady;
  
  adminProductGrid.innerHTML = '';
  PRODUCT_CATALOG.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.position = 'relative';
    
    const availabilityClass = product.available ? 'status-true' : 'status-false';
    const availabilityText = product.available ? 'Available' : 'Unavailable';
    
    card.innerHTML = `
      <span class="admin-status-pill ${availabilityClass}">${availabilityText}</span>
      <div class="product-img-wrapper" style="cursor: default;">
        <img src="${product.filename}" alt="${product.title}" class="product-img" loading="lazy" onerror="this.onerror=null;">
      </div>
      <div class="product-info">
        <span class="product-category" style="margin-bottom:4px;">${product.category} (ID: ${product.id})</span>
        <h3 class="product-title">${product.title}</h3>
        ${product.subtitle ? `<span class="product-subtitle-tag">${product.subtitle}</span>` : ''}
        <div class="product-meta">
          <span class="product-price">₹${product.price}</span>
        </div>
      </div>
      <div class="admin-card-actions">
        <button class="btn-icon btn-edit-action" onclick="openEditModal('${product.id}')" title="Edit product">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          Edit
        </button>
        <button class="btn-icon btn-delete-action" onclick="deleteProduct('${product.id}')" title="Delete product">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          Delete
        </button>
      </div>
    `;
    adminProductGrid.appendChild(card);
  });
}

// Modal Logic
function openAddModal() {
  currentEditId = null;
  modalTitle.textContent = 'Add Product';
  productForm.reset();
  document.getElementById('prodId').readOnly = false;
  document.getElementById('prodImage').required = true;
  document.getElementById('prodImageHint').style.display = 'none';
  productModal.classList.add('active');
}

window.openEditModal = async (id) => {
  currentEditId = id;
  modalTitle.textContent = 'Edit Product';
  productForm.reset();
  document.getElementById('prodId').readOnly = false;
  document.getElementById('prodImage').required = false;
  document.getElementById('prodImageHint').style.display = 'block';
  
  // Find product from PRODUCT_CATALOG
  const product = getProductById(id);
  if (!product) {
    showMsg(dashboardMessage, 'Error: Product not found in catalog.', 'error');
    return;
  }
  
  document.getElementById('prodId').value = product.id;
  document.getElementById('prodName').value = product.title;
  document.getElementById('prodPrice').value = product.price;
  document.getElementById('prodSize').value = product.subtitle;
  document.getElementById('prodCategory').value = product.category;
  document.getElementById('prodDesc').value = product.shortDesc;
  document.getElementById('prodAvailable').value = product.available === false ? 'false' : 'true'; // handle undefined/true as true
  
  productModal.classList.add('active');
};

function closeModal() {
  if (productModal) {
    productModal.classList.remove('active');
  }
}
window.closeModal = closeModal;

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (productModal) {
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    closeModal();
  }
});

addBtn.addEventListener('click', openAddModal);

// Save (Add / Edit) Product
productForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  saveBtn.disabled = true;
  saveBtn.textContent = 'Saving...';
  
  try {
    const id = document.getElementById('prodId').value.trim();
    const name = document.getElementById('prodName').value.trim();
    const price = parseFloat(document.getElementById('prodPrice').value);
    const size = document.getElementById('prodSize').value.trim();
    const category = document.getElementById('prodCategory').value;
    const description = document.getElementById('prodDesc').value.trim();
    const available = document.getElementById('prodAvailable').value === 'true';
    const imageFile = document.getElementById('prodImage').files[0];
    
    let imageUrl = null;
    
    // If editing and no new image, fetch old image url from local catalog
    if (currentEditId && !imageFile) {
      const existingProd = getProductById(id);
      if (existingProd) {
         imageUrl = existingProd.filename;
      } else {
         throw new Error("Could not find existing product to preserve image URL.");
      }
    }
    
    // Upload image if provided
    if (imageFile) {
      const uniqueName = `${id}_${Date.now()}_${imageFile.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const { error: uploadError } = await supabaseClient.storage.from(BUCKET_NAME).upload(uniqueName, imageFile);
      if (uploadError) throw new Error('Image upload failed: ' + uploadError.message);
      
      const { data: urlData } = supabaseClient.storage.from(BUCKET_NAME).getPublicUrl(uniqueName);
      imageUrl = urlData.publicUrl;
    }
    
    const payload = {
      ID: id, NAME: name, PRICE: price, SIZE: size,
      CATEGORY: category, DESCRIPTION: description,
      AVAILABLE: available, IMAGE_URL: imageUrl
    };
    
    if (currentEditId) {
      const { error } = await supabaseClient.from('PRODUCTS').update(payload).eq('ID', currentEditId);
      if (error) throw error;
      showMsg(dashboardMessage, 'Product updated successfully.', 'success');
    } else {
      const { error } = await supabaseClient.from('PRODUCTS').insert([payload]);
      if (error) throw error;
      showMsg(dashboardMessage, 'Product added successfully.', 'success');
    }
    
    productModal.classList.remove('active');
    
    // Refresh the public catalog array by calling the global loadProducts()
    await window.loadProducts(); 
    // Re-render the admin dashboard list
    renderAdminDashboardProducts();
    
  } catch (err) {
    console.error('Error saving product:', err);
    alert('Save failed: ' + err.message);
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = 'Save Product';
  }
});

// Delete Product
window.deleteProduct = async (id) => {
  if (!confirm('Are you sure you want to delete this product?')) return;
  
  try {
    const existingProd = getProductById(id);
    if (!existingProd) throw new Error('Product not found in local catalog.');
    
    const imageUrl = existingProd.filename;
    
    // 1. Delete product row
    const { error: delErr } = await supabaseClient.from('PRODUCTS').delete().eq('ID', id);
    if (delErr) throw delErr;
    
    // 2. Check shared storage
    const { count, error: countErr } = await supabaseClient.from('PRODUCTS')
      .select('*', { count: 'exact', head: true })
      .eq('IMAGE_URL', imageUrl);
      
    if (countErr) throw countErr;
    
    // 3. Delete storage if unused
    if (count === 0 && imageUrl) {
      const filename = imageUrl.split('/').pop();
      // attempt delete (may fail if RLS not set properly, but won't block UI)
      const { error: storageErr } = await supabaseClient.storage.from(BUCKET_NAME).remove([filename]);
      if (storageErr) {
          console.warn("Storage delete failed (this might be expected if RLS blocks it, or if file not found):", storageErr);
      }
    }
    
    showMsg(dashboardMessage, 'Product deleted successfully.', 'success');
    
    // Refresh the public catalog array by calling the global loadProducts()
    await window.loadProducts(); 
    // Re-render the admin dashboard list
    renderAdminDashboardProducts();
  } catch (err) {
    console.error('Error deleting product:', err);
    alert('Delete failed: ' + err.message);
  }
};
