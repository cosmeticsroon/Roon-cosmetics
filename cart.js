// ROON Cosmetics — Cart System

function getCart() {
  try { return JSON.parse(localStorage.getItem('roon_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('roon_cart', JSON.stringify(cart));
}

function addToCart(id) {
  const cart = getCart();
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty += 1; }
  else { cart.push({ id, name: product.name, price: product.price, qty: 1 }); }
  saveCart(cart);
  updateCartUI();
  showToast(`${product.name} added to bag!`);
  // Open cart
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}

function removeFromCart(id) {
  let cart = getCart().filter(c => c.id !== id);
  saveCart(cart);
  updateCartUI();
}

function updateQty(id, delta) {
  const cart = getCart();
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(id);
  saveCart(cart);
  updateCartUI();
}

function updateCartUI() {
  const cart = getCart();
  const count = cart.reduce((a, c) => a + c.qty, 0);
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  document.getElementById('cartCount').textContent = count;
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cart-empty">Your bag is empty</p>';
    footerEl.style.display = 'none';
    return;
  }
  footerEl.style.display = 'block';
  document.getElementById('cartTotal').textContent = total.toLocaleString();
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">KSh ${(item.price * item.qty).toLocaleString()}</p>
      </div>
      <div class="cart-item-qty">
        <button onclick="updateQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="updateQty(${item.id}, 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    </div>
  `).join('');
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

function checkout() {
  const cart = getCart();
  if (cart.length === 0) return;
  const total = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const items = cart.map(c => `${c.qty}x ${c.name} (KSh ${(c.price*c.qty).toLocaleString()})`).join('\n');
  const msg = encodeURIComponent(
    `Hello ROON Cosmetics! 🌹\n\nI'd like to place an order:\n\n${items}\n\nTotal: KSh ${total.toLocaleString()}\n\nPlease send M-Pesa payment details to +254708067741.\n\nThank you!`
  );
  window.open(`https://wa.me/254708067741?text=${msg}`, '_blank');
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 2500);
}

// Init on load
document.addEventListener('DOMContentLoaded', updateCartUI);
