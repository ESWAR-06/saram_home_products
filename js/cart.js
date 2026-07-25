/**
 * SARAM HOME PRODUCTS - CART MANAGER
 * Handles localStorage persistence, cart items, item quantities, totals,
 * and cart state events.
 */

const CART_STORAGE_KEY = 'saram_cart';

const CartManager = {
  // Load raw items array from localStorage
  getCart() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse cart from localStorage:', e);
      return [];
    }
  },

  // Save raw items array to localStorage & notify listeners
  saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      window.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart } }));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  },

  // Hydrate cart items with catalog data
  getCartWithDetails() {
    const rawCart = this.getCart();
    return rawCart.map(item => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return {
        ...item,
        product,
        itemTotal: product.price * item.quantity
      };
    }).filter(Boolean);
  },

  // Add product to cart or increment quantity
  addToCart(productId, quantity = 1) {
    const cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.productId === productId);
    
    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }
    
    this.saveCart(cart);
  },

  // Update item quantity directly
  updateQuantity(productId, quantity) {
    let cart = this.getCart();
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const existingIndex = cart.findIndex(item => item.productId === productId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity = quantity;
      this.saveCart(cart);
    }
  },

  // Remove item from cart
  removeFromCart(productId) {
    const cart = this.getCart().filter(item => item.productId !== productId);
    this.saveCart(cart);
  },

  // Clear all items in cart
  clearCart() {
    this.saveCart([]);
  },

  // Calculate total number of items
  getCartCount() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  // Calculate total cart value in INR
  getCartTotal() {
    const hydrated = this.getCartWithDetails();
    return hydrated.reduce((sum, item) => sum + item.itemTotal, 0);
  }
};
