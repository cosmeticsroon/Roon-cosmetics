# 🌹 ROON Cosmetics Website

**Live beauty e-commerce website for ROON Cosmetics — Nairobi, Kenya.**

---

## 📦 Files Included

```
roon-cosmetics/
├── index.html       ← Homepage (hero, categories, featured products)
├── shop.html        ← Full shop with search, filter & sort (64 products)
├── about.html       ← Brand story, values, testimonials
├── contact.html     ← Contact form + FAQ + M-Pesa info
├── style.css        ← Full stylesheet (responsive, 3D effects)
├── products.js      ← 64 product database across 8 categories
├── cart.js          ← Cart system with M-Pesa/WhatsApp checkout
├── main.js          ← Animations, 3D canvas, cursor effects
└── README.md        ← This file
```

---

## 🚀 How to Launch for FREE (GitHub Pages)

### Step 1 — Create a GitHub Account
Go to **https://github.com** → Sign Up (free)

### Step 2 — Create a New Repository
1. Click the **+** icon → **New repository**
2. Name it: `roon-cosmetics` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload Your Files
1. On the repo page, click **Add file → Upload files**
2. Drag and drop ALL 8 files from this folder
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Select branch: **main**, folder: **/ (root)**
5. Click **Save**

### Step 5 — Your Website is Live! 🎉
After 1–2 minutes, your website will be live at:
```
https://YOUR-USERNAME.github.io/roon-cosmetics/
```

**Example:** `https://rooncosmetics.github.io/roon-cosmetics/`

---

## 🌐 Custom Domain (Optional — Free via Freenom)

Want `www.rooncosmetics.com`? You can:
1. Buy a domain at **Namecheap** (~$10/yr) or get free at **Freenom** (.tk, .ml)
2. In GitHub Pages settings, enter your custom domain
3. Follow DNS instructions provided

---

## 💚 M-Pesa Checkout Flow

1. Customer adds products to bag
2. Clicks **"Pay via M-Pesa"**
3. WhatsApp opens with order summary sent to **+254 708 067 741**
4. You confirm order & send payment instructions
5. Customer pays via M-Pesa to **+254 708 067 741**
6. You dispatch the order

---

## 📱 Social Media Handles (Already Linked)

- Instagram: **@roon_cosmetics**
- TikTok: **@roon_cosmetics**
- Facebook: **@roon_cosmetics**
- Twitter/X: **@roon_cosmetics**
- Email: **cosmeticsroon@gmail.com**

---

## 🛍️ Products (64 total across 8 categories)

| Category | Products |
|----------|----------|
| Skincare | 10 |
| Lip Colour | 10 |
| Face | 12 |
| Eye Makeup | 10 |
| Fragrance | 8 |
| Hair Care | 8 |
| Body | 6 |
| **Total** | **64** |

---

## ✏️ How to Update Products

Open `products.js` and add/edit products in the `products` array:

```javascript
{ 
  id: 65,                          // unique number
  name: "New Product Name", 
  category: "skincare",            // skincare/lips/face/eyes/fragrance/hair/body
  price: 1500,                     // in KSh
  tag: "New",                      // Best Seller / New / Hot / Premium / ""
  emoji: "🌿", 
  desc: "Product description here.",
  ingredients: "Ingredient list"
},
```

---

## 🎨 How to Change Colors

Open `style.css` and edit the CSS variables at the top:

```css
:root {
  --rose: #c8856a;    ← Main accent color
  --gold: #c8a882;    ← Gold/text accent
  --dark: #1a1008;    ← Dark background
  --cream: #fdf6f0;   ← Page background
}
```

---

*Built with ❤️ for ROON Cosmetics, Nairobi 2024*
