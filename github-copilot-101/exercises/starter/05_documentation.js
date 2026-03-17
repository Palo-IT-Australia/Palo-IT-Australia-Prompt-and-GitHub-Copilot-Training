/**
 * Exercise 5 — Documentation Generation
 * ========================================
 * Objective: Use Copilot to generate inline documentation and a README for a small module.
 *
 * Instructions:
 * PART A — JSDoc comments
 *   1. Select each undocumented function below
 *   2. Open inline chat (Ctrl+I / Cmd+I) and type: /doc
 *   3. Review and accept the generated JSDoc comment
 *   4. Verify the docs are accurate by reading the function logic
 *
 * PART B — Module README
 *   1. Select all the code in this file
 *   2. Open Copilot Chat (Ctrl+Shift+I / Cmd+Shift+I)
 *   3. Use this prompt:
 *      "Write a README.md for this JavaScript module. Include:
 *       - A one-paragraph overview of what the module does
 *       - An installation / usage section
 *       - A function reference table with function name, parameters, return value, and example
 *       - A section on error handling"
 *   4. Save the output as cart-utils.README.md in this folder
 */


// ---- No JSDoc yet — use Copilot to generate it ----

function createCart() {
  return { items: [], discountCode: null };
}

function addItem(cart, product, quantity = 1) {
  if (!product || typeof product.id === 'undefined') {
    throw new TypeError('product must have an id property');
  }
  if (!Number.isInteger(quantity) || quantity < 1) {
    throw new RangeError('quantity must be a positive integer');
  }
  const existing = cart.items.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({ id: product.id, name: product.name, priceInCents: product.priceInCents, quantity });
  }
  return cart;
}

function removeItem(cart, productId) {
  const index = cart.items.findIndex(item => item.id === productId);
  if (index === -1) {
    throw new Error(`Product ${productId} not found in cart`);
  }
  cart.items.splice(index, 1);
  return cart;
}

function applyDiscountCode(cart, code, discounts) {
  if (!discounts[code]) {
    throw new Error(`Invalid discount code: ${code}`);
  }
  cart.discountCode = code;
  return cart;
}

function calculateTotal(cart, discounts = {}) {
  const subtotal = cart.items.reduce((sum, item) => sum + item.priceInCents * item.quantity, 0);
  if (!cart.discountCode || !discounts[cart.discountCode]) {
    return subtotal;
  }
  const discount = discounts[cart.discountCode];
  if (discount.type === 'percentage') {
    return Math.round(subtotal * (1 - discount.value / 100));
  }
  if (discount.type === 'fixed') {
    return Math.max(0, subtotal - discount.value);
  }
  return subtotal;
}

function getItemCount(cart) {
  return cart.items.reduce((sum, item) => sum + item.quantity, 0);
}

function clearCart(cart) {
  cart.items = [];
  cart.discountCode = null;
  return cart;
}


module.exports = {
  createCart,
  addItem,
  removeItem,
  applyDiscountCode,
  calculateTotal,
  getItemCount,
  clearCart,
};
