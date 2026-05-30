// ROON Cosmetics — Full Product Catalogue
const products = [
  // ── SKINCARE ──
  { id:1, name:"Vitamin C Brightening Serum", category:"skincare", price:1800, tag:"Best Seller", emoji:"💧", desc:"Fades dark spots, evens skin tone, and gives a luminous glow. Suitable for all skin types.", ingredients:"Vitamin C, Niacinamide, Hyaluronic Acid" },
  { id:2, name:"Hydrating Rose Face Cream", category:"skincare", price:1500, tag:"New", emoji:"🌹", desc:"Rich, non-greasy moisturiser with rose extract to deeply hydrate and plump skin.", ingredients:"Rose Water, Shea Butter, Ceramides" },
  { id:3, name:"Gentle Foaming Cleanser", category:"skincare", price:1200, tag:"", emoji:"🫧", desc:"Removes impurities without stripping moisture. Leaves skin soft and balanced.", ingredients:"Green Tea, Aloe Vera, Glycerin" },
  { id:4, name:"Retinol Night Repair Serum", category:"skincare", price:2200, tag:"Premium", emoji:"🌙", desc:"Overnight serum that targets fine lines, wrinkles and uneven texture.", ingredients:"Retinol 0.3%, Peptides, Squalane" },
  { id:5, name:"SPF 50 Sunscreen Gel", category:"skincare", price:1400, tag:"", emoji:"☀️", desc:"Lightweight, non-greasy sun protection. No white cast for dark skin tones.", ingredients:"Zinc Oxide, Vitamin E, Aloe" },
  { id:6, name:"Kojic Acid Dark Spot Corrector", category:"skincare", price:1600, tag:"Hot", emoji:"⚡", desc:"Targeted treatment for hyperpigmentation, acne scars and melasma.", ingredients:"Kojic Acid, Alpha Arbutin, Licorice Root" },
  { id:7, name:"Niacinamide 10% Serum", category:"skincare", price:1350, tag:"", emoji:"✨", desc:"Minimises pores, controls oil and brightens dull complexion.", ingredients:"Niacinamide 10%, Zinc PCA" },
  { id:8, name:"Aloe Vera Soothing Gel", category:"skincare", price:900, tag:"", emoji:"🌵", desc:"Pure aloe vera gel to calm irritation, sunburn and redness.", ingredients:"99% Pure Aloe Vera" },
  { id:9, name:"Hyaluronic Acid Toner", category:"skincare", price:1100, tag:"", emoji:"💦", desc:"Weightless toner that floods skin with hydration and preps for serums.", ingredients:"Hyaluronic Acid, Panthenol, Rose Water" },
  { id:10, name:"Under Eye Brightening Cream", category:"skincare", price:1700, tag:"", emoji:"👁️", desc:"Reduces dark circles and puffiness. Firms delicate under-eye skin.", ingredients:"Caffeine, Peptides, Vitamin K" },

  // ── LIP COLOUR ──
  { id:11, name:"Matte Velvet Lipstick – Nude", category:"lips", price:850, tag:"", emoji:"💄", desc:"Long-lasting, velvety matte formula. Comfortable wear for 12+ hours.", ingredients:"" },
  { id:12, name:"Matte Velvet Lipstick – Berry", category:"lips", price:850, tag:"Hot", emoji:"💄", desc:"Deep berry shade with a plush matte finish. Bold and beautiful.", ingredients:"" },
  { id:13, name:"Matte Velvet Lipstick – Red", category:"lips", price:850, tag:"", emoji:"💄", desc:"Classic true red. The one shade every woman needs.", ingredients:"" },
  { id:14, name:"Glossy Lip Oil – Rose", category:"lips", price:950, tag:"New", emoji:"💋", desc:"High-shine lip oil that conditions and plumps with a gorgeous tint.", ingredients:"Castor Oil, Vitamin E, Rose Pigment" },
  { id:15, name:"Glossy Lip Oil – Clear", category:"lips", price:900, tag:"", emoji:"💋", desc:"Ultra-shiny clear gloss that nourishes while giving mirror-like shine.", ingredients:"Jojoba Oil, Hyaluronic Acid" },
  { id:16, name:"Liquid Matte Lip – Chocolate", category:"lips", price:1000, tag:"", emoji:"🍫", desc:"Deep chocolate brown liquid lip. Transfer-proof and moisturising.", ingredients:"" },
  { id:17, name:"Lip Liner – Nude", category:"lips", price:650, tag:"", emoji:"✏️", desc:"Define and shape lips with this long-wearing nude pencil.", ingredients:"" },
  { id:18, name:"Lip Liner – Brown", category:"lips", price:650, tag:"", emoji:"✏️", desc:"Rich brown liner for that perfect overlined look.", ingredients:"" },
  { id:19, name:"Sheer Tinted Balm", category:"lips", price:750, tag:"", emoji:"🌸", desc:"Moisturising tinted balm with a hint of colour. Perfect everyday lip.", ingredients:"Shea Butter, Beeswax, Tinted Pigment" },
  { id:20, name:"Plumping Lip Serum", category:"lips", price:1200, tag:"Premium", emoji:"💎", desc:"Peptide-powered serum that visibly plumps lips over time.", ingredients:"Peptides, Hyaluronic Acid, Ginger Extract" },

  // ── FACE ──
  { id:21, name:"Dewy Skin Foundation – Shade 1", category:"face", price:1800, tag:"", emoji:"✨", desc:"Lightweight, buildable coverage with a gorgeous dewy finish. Shade 1: Fair.", ingredients:"" },
  { id:22, name:"Dewy Skin Foundation – Shade 3", category:"face", price:1800, tag:"", emoji:"✨", desc:"Medium-light coverage dewy foundation. Shade 3: Medium.", ingredients:"" },
  { id:23, name:"Dewy Skin Foundation – Shade 5", category:"face", price:1800, tag:"Best Seller", emoji:"✨", desc:"Full-coverage dewy formula. Shade 5: Deep Medium.", ingredients:"" },
  { id:24, name:"Dewy Skin Foundation – Shade 7", category:"face", price:1800, tag:"", emoji:"✨", desc:"Rich, radiant formula for deeper skin tones. Shade 7: Deep.", ingredients:"" },
  { id:25, name:"Setting Powder – Translucent", category:"face", price:1300, tag:"", emoji:"🌟", desc:"Finely milled powder that sets makeup and controls shine all day.", ingredients:"" },
  { id:26, name:"Pressed Blush – Peachy Pink", category:"face", price:1100, tag:"", emoji:"🍑", desc:"Silky pigmented blush that gives the perfect flush of colour.", ingredients:"" },
  { id:27, name:"Pressed Blush – Coral", category:"face", price:1100, tag:"", emoji:"🧡", desc:"Warm coral blush perfect for golden and deep skin tones.", ingredients:"" },
  { id:28, name:"Contour Palette", category:"face", price:1600, tag:"Hot", emoji:"🎨", desc:"3-shade sculpting palette with matte shades for nose, cheekbones and jaw.", ingredients:"" },
  { id:29, name:"Highlight Powder – Gold", category:"face", price:1200, tag:"", emoji:"✨", desc:"Blinding gold highlight for an otherworldly glow on cheekbones.", ingredients:"" },
  { id:30, name:"Highlight Powder – Bronze", category:"face", price:1200, tag:"", emoji:"🥉", desc:"Warm bronze highlighter for a sun-kissed, healthy glow.", ingredients:"" },
  { id:31, name:"BB Cream SPF 30", category:"face", price:1500, tag:"", emoji:"💛", desc:"5-in-1 BB cream: moisturiser, primer, coverage, SPF and skincare.", ingredients:"Vitamin C, SPF 30, Hyaluronic Acid" },
  { id:32, name:"Translucent Setting Spray", category:"face", price:1100, tag:"", emoji:"💨", desc:"Lock makeup in place for up to 16 hours. Refreshing and hydrating.", ingredients:"" },

  // ── EYE MAKEUP ──
  { id:33, name:"Lengthening Mascara – Black", category:"eyes", price:1200, tag:"Best Seller", emoji:"👁️", desc:"Dramatically lengthens and defines every lash. Smudge-proof formula.", ingredients:"" },
  { id:34, name:"Volumising Mascara – Black", category:"eyes", price:1200, tag:"", emoji:"👁️", desc:"Builds intense volume from root to tip. Lash-conditioning formula.", ingredients:"" },
  { id:35, name:"Waterproof Kohl Pencil – Black", category:"eyes", price:750, tag:"", emoji:"✏️", desc:"Intense, smudge-proof kohl for lining inner rim and lash line.", ingredients:"" },
  { id:36, name:"Waterproof Kohl Pencil – Brown", category:"eyes", price:750, tag:"", emoji:"✏️", desc:"Soft brown kohl for a more natural, defined eye.", ingredients:"" },
  { id:37, name:"Liquid Eyeliner – Jet Black", category:"eyes", price:950, tag:"Hot", emoji:"🖊️", desc:"Precise felt-tip liner for sharp wings and graphic liner looks.", ingredients:"" },
  { id:38, name:"Nude Eyeshadow Palette (9 Shades)", category:"eyes", price:2000, tag:"New", emoji:"🎨", desc:"9 versatile nudes from light shimmer to deep matte for every eye look.", ingredients:"" },
  { id:39, name:"Smoky Eye Palette (9 Shades)", category:"eyes", price:2000, tag:"", emoji:"🎭", desc:"Sultry blacks, greys and golds for the perfect smoky eye.", ingredients:"" },
  { id:40, name:"Waterproof Brow Pencil", category:"eyes", price:850, tag:"", emoji:"✏️", desc:"Fill, define and shape brows with this hairlike-stroke pencil.", ingredients:"" },
  { id:41, name:"Brow Gel – Clear", category:"eyes", price:700, tag:"", emoji:"🌀", desc:"Sets brows in place all day. Gives a brushed-up, fluffy effect.", ingredients:"" },
  { id:42, name:"Lash Glue (Clear)", category:"eyes", price:600, tag:"", emoji:"🔗", desc:"Strong, safe lash adhesive for strip and individual lashes.", ingredients:"" },

  // ── FRAGRANCE ──
  { id:43, name:"Rose Oud Perfume (50ml)", category:"fragrance", price:3500, tag:"Premium", emoji:"🌹", desc:"Luxurious blend of Bulgarian rose and deep Arabian oud. Long-lasting, 12h wear.", ingredients:"" },
  { id:44, name:"Floral Musk Perfume (50ml)", category:"fragrance", price:3000, tag:"New", emoji:"🌸", desc:"Delicate bouquet of jasmine, peony and soft white musk.", ingredients:"" },
  { id:45, name:"Citrus Fresh Perfume (50ml)", category:"fragrance", price:2800, tag:"", emoji:"🍋", desc:"Energising burst of bergamot, lemon and green tea. Perfect for day wear.", ingredients:"" },
  { id:46, name:"Vanilla Dreams Perfume (50ml)", category:"fragrance", price:3200, tag:"Best Seller", emoji:"🍦", desc:"Warm, sensual vanilla and sandalwood. Irresistibly soft and feminine.", ingredients:"" },
  { id:47, name:"Rose Body Mist (200ml)", category:"fragrance", price:1200, tag:"", emoji:"🌹", desc:"Lightweight, refreshing rose mist for all-day fragrance layering.", ingredients:"" },
  { id:48, name:"Jasmine Body Mist (200ml)", category:"fragrance", price:1200, tag:"", emoji:"🌼", desc:"Intoxicating jasmine mist. Spritz after shower for lasting scent.", ingredients:"" },
  { id:49, name:"Perfume Oil – Oud (10ml)", category:"fragrance", price:1800, tag:"Hot", emoji:"🪔", desc:"Concentrated oil perfume. Long-lasting, alcohol-free oud fragrance.", ingredients:"" },
  { id:50, name:"Perfume Oil – Musk (10ml)", category:"fragrance", price:1600, tag:"", emoji:"🕯️", desc:"Sensual clean musk in pure oil form. Wear alone or layer.", ingredients:"" },

  // ── HAIR CARE ──
  { id:51, name:"Castor Oil Hair Growth Serum", category:"hair", price:1400, tag:"Best Seller", emoji:"💇", desc:"Promotes hair growth and reduces breakage. Rich in fatty acids.", ingredients:"Black Castor Oil, Jamaican Castor Oil, Peppermint" },
  { id:52, name:"Deep Conditioning Hair Mask", category:"hair", price:1600, tag:"", emoji:"🎀", desc:"Intensive 10-minute mask for dry, damaged and colour-treated hair.", ingredients:"Shea Butter, Argan Oil, Keratin" },
  { id:53, name:"Argan Oil Hair Serum", category:"hair", price:1300, tag:"New", emoji:"✨", desc:"Lightweight serum that tames frizz and adds mirror-like shine.", ingredients:"Pure Argan Oil, Vitamin E" },
  { id:54, name:"Moisturising Shampoo", category:"hair", price:1100, tag:"", emoji:"🚿", desc:"Sulphate-free shampoo that cleanses without stripping moisture.", ingredients:"Aloe Vera, Shea Butter, Biotin" },
  { id:55, name:"Leave-In Conditioner", category:"hair", price:1200, tag:"", emoji:"💦", desc:"Detangles, moisturises and protects hair from heat damage.", ingredients:"Coconut Milk, Aloe, Vitamin B5" },
  { id:56, name:"Edge Control Gel", category:"hair", price:800, tag:"Hot", emoji:"💪", desc:"Super-hold edge control that lays down edges and baby hairs for 48 hours.", ingredients:"" },
  { id:57, name:"Scalp Oil Treatment", category:"hair", price:1350, tag:"", emoji:"🌿", desc:"Nourishes scalp, reduces dandruff and promotes healthy hair growth.", ingredients:"Tea Tree, Peppermint, Rosemary" },
  { id:58, name:"Hair Growth Vitamins (30 caps)", category:"hair", price:2000, tag:"Premium", emoji:"💊", desc:"Biotin-rich supplement for stronger, longer hair from within.", ingredients:"Biotin 5000mcg, Collagen, Zinc" },

  // ── BODY ──
  { id:59, name:"Glow Body Lotion", category:"body", price:1300, tag:"Best Seller", emoji:"🌟", desc:"Luminous shimmer-infused lotion that makes skin look radiant and hydrated.", ingredients:"Shea Butter, Jojoba Oil, Mica" },
  { id:60, name:"Whitening Body Scrub", category:"body", price:1100, tag:"", emoji:"🧴", desc:"Exfoliating scrub with kojic acid and sugar to reveal brighter, smoother skin.", ingredients:"Sugar, Kojic Acid, Coconut Oil" },
  { id:61, name:"Shea Butter Body Cream", category:"body", price:1200, tag:"", emoji:"🧈", desc:"Rich, fast-absorbing cream that provides 24-hour deep moisture.", ingredients:"Raw Shea Butter, Cocoa Butter" },
  { id:62, name:"Brightening Body Oil", category:"body", price:1500, tag:"New", emoji:"✨", desc:"Lightweight oil blend that evens skin tone and gives a satin finish.", ingredients:"Rosehip Oil, Vitamin C, Sweet Almond" },
  { id:63, name:"Anti-Cellulite Body Oil", category:"body", price:1600, tag:"", emoji:"💪", desc:"Tones and firms skin while reducing appearance of cellulite.", ingredients:"Grapefruit, Juniper, Caffeine" },
  { id:64, name:"Deodorant – Rose (Roll-on)", category:"body", price:650, tag:"", emoji:"🌹", desc:"Aluminium-free deodorant that keeps you fresh for 24 hours.", ingredients:"Aloe Vera, Rose Extract, Baking Soda" },
];

function productCard(p) {
  const cartItem = getCart().find(c => c.id === p.id);
  return `
  <div class="product-card" data-id="${p.id}">
    ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
    <div class="product-emoji">${p.emoji}</div>
    <div class="product-info">
      <p class="product-cat">${p.category}</p>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-desc">${p.desc.substring(0,60)}${p.desc.length>60?'…':''}</p>
      <div class="product-footer">
        <span class="product-price">KSh ${p.price.toLocaleString()}</span>
        <button class="add-btn" onclick="addToCart(${p.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add
        </button>
      </div>
    </div>
  </div>`;
}
