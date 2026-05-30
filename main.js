// ROON Cosmetics — Main JS

// ── LOADER ──
window.addEventListener('load', () => {
  const fill = document.getElementById('loaderFill');
  const loader = document.getElementById('loader');
  if (!fill || !loader) return;
  let w = 0;
  const iv = setInterval(() => {
    w += Math.random() * 15;
    if (w >= 100) { w = 100; clearInterval(iv); setTimeout(() => { loader.classList.add('hidden'); }, 400); }
    fill.style.width = w + '%';
  }, 80);
});

// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
if (cursor && follower) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    }, 80);
  });
  document.querySelectorAll('a, button, .product-card, .cat-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('big'); follower.classList.add('big'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('big'); follower.classList.remove('big'); });
  });
}

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── HERO CANVAS (particle field) ──
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function makeParticle() {
    return {
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    };
  }
  particles = Array.from({ length: 120 }, makeParticle);

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,200,180,${p.alpha})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });
    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 80) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,180,150,${0.15 * (1 - dist/80)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}
initHeroCanvas();

// ── BANNER CANVAS ──
function initBannerCanvas() {
  const canvas = document.getElementById('bannerCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let t = 0;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    for (let x = 0; x < W; x += 40) {
      for (let y = 0; y < H; y += 40) {
        const angle = Math.sin(x * 0.01 + t) + Math.cos(y * 0.01 + t);
        const r = Math.floor(200 + 30 * Math.sin(angle));
        const g = Math.floor(140 + 30 * Math.cos(angle));
        const b = Math.floor(100 + 20 * Math.sin(angle + 1));
        ctx.fillStyle = `rgba(${r},${g},${b},0.07)`;
        ctx.beginPath();
        ctx.arc(x + Math.sin(t + y * 0.05) * 10, y + Math.cos(t + x * 0.05) * 10, 15, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    t += 0.008;
    requestAnimationFrame(draw);
  }
  draw();
}
initBannerCanvas();

// ── TILT CARDS ──
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 20;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -20;
    card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(600px) rotateY(0) rotateX(0) scale(1)';
  });
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.product-card, .cat-card, .promise-card, .social-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ── NEWSLETTER ──
function subscribeNewsletter() {
  const email = document.getElementById('nlEmail')?.value;
  const note = document.getElementById('nlNote');
  if (!note) return;
  if (!email || !email.includes('@')) {
    note.textContent = 'Please enter a valid email.';
    note.style.color = '#ff6b6b';
    return;
  }
  note.textContent = '🎉 You\'re in! Check your inbox for your 10% off code.';
  note.style.color = '#c8a882';
  document.getElementById('nlEmail').value = '';
}
