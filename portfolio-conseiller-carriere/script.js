/* ================================================================
   PORTFOLIO CONSEILLER CARRIÈRE v2 — Script Principal
   ================================================================ */

'use strict';

/* ── Utilitaires ───────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function debounce(fn, ms) {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

/* ── Loader ────────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => $('loader').classList.add('hidden'), 600);
});

/* ── AOS ───────────────────────────────────────────────────────── */
AOS.init({ duration: 700, once: true, offset: 70, easing: 'ease-out-cubic' });

/* ── Progress Bar ──────────────────────────────────────────────── */
const progressBar = $('progress-bar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
}, { passive: true });

/* ── Dark Mode ─────────────────────────────────────────────────── */
const darkToggle = $('dark-toggle');
const darkIcon   = $('dark-toggle-icon');
const html       = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  darkIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}
applyTheme(localStorage.getItem('theme') || 'light');

darkToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

/* ── Navbar ────────────────────────────────────────────────────── */
const navbar     = $('navbar');
const hamburger  = $('hamburger');
const navLinks   = $('nav-links');
const allNavLnks = $$('.nav-link');

window.addEventListener('scroll', debounce(() => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveNav();
  $('scroll-top').classList.toggle('visible', window.scrollY > 400);
}, 12), { passive: true });

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

allNavLnks.forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

function updateActiveNav() {
  const pos = window.scrollY + 100;
  $$('section[id]').forEach(sec => {
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (link) link.classList.toggle('active', pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight);
  });
}

/* ── Smooth Scroll ─────────────────────────────────────────────── */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' }); }
});

/* ── Scroll To Top ─────────────────────────────────────────────── */
$('scroll-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── WhatsApp button (show after 3s) ───────────────────────────── */
setTimeout(() => {
  const fab = document.querySelector('.whatsapp-fab');
  if (fab) fab.classList.add('visible');
}, 3000);

/* ── Typed Animation ───────────────────────────────────────────── */
(function initTyped() {
  const el = $('typed-text');
  if (!el) return;
  const phrases = ['votre carrière idéale', 'votre potentiel révélé', 'un avenir qui vous inspire'];
  let i = 0, j = 0, deleting = false;
  const speed = { type: 65, delete: 35, pause: 2000 };

  function tick() {
    const phrase = phrases[i];
    el.textContent = phrase.slice(0, j);
    if (!deleting && j < phrase.length) { j++; setTimeout(tick, speed.type); }
    else if (!deleting && j === phrase.length) { deleting = true; setTimeout(tick, speed.pause); }
    else if (deleting && j > 0) { j--; setTimeout(tick, speed.delete); }
    else { deleting = false; i = (i + 1) % phrases.length; setTimeout(tick, 400); }
  }
  tick();
})();

/* ── Counter Animation ─────────────────────────────────────────── */
(function initCounters() {
  const els = $$('[data-target]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.animated) return;
      entry.target.dataset.animated = '1';
      const target = parseFloat(entry.target.dataset.target);
      const isFloat = target % 1 !== 0;
      const start = performance.now();
      const dur = 1800;
      const update = now => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        entry.target.textContent = isFloat ? (eased * target).toFixed(1) : Math.floor(eased * target);
        if (p < 1) requestAnimationFrame(update);
        else entry.target.textContent = isFloat ? target.toFixed(1) : target;
      };
      requestAnimationFrame(update);
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
})();

/* ── Testimonials Carousel ─────────────────────────────────────── */
(function initCarousel() {
  const track = $('carousel-track');
  const dotsEl = $('carousel-dots');
  if (!track || !dotsEl) return;
  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;
  let current = 0, autoTimer, startX = 0;

  // Build dots
  cards.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Témoignage ${idx + 1}`);
    dot.addEventListener('click', () => goTo(idx));
    dotsEl.appendChild(dot);
  });

  function goTo(n) {
    current = (n + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    $$('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  $('carousel-prev').addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  $('carousel-next').addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  // Touch swipe
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
  });

  // Pause on hover
  track.closest('.carousel-wrap').addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.closest('.carousel-wrap').addEventListener('mouseleave', () => startAuto());

  function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 5000); }
  function resetAuto() { clearInterval(autoTimer); startAuto(); }
  startAuto();
})();

/* ── FAQ Accordion ─────────────────────────────────────────────── */
$$('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    $$('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-question').setAttribute('aria-expanded', 'false'); });
    if (!wasOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
  });
});

/* ── Pricing Toggle ────────────────────────────────────────────── */
const pricingSwitch = $('pricing-switch');
if (pricingSwitch) {
  pricingSwitch.addEventListener('change', () => {
    const monthly = pricingSwitch.checked;
    $$('.price-total').forEach(el => el.classList.toggle('hidden', monthly));
    $$('.price-monthly').forEach(el => el.classList.toggle('hidden', !monthly));
  });
}

/* ── Cookie Banner ─────────────────────────────────────────────── */
(function initCookies() {
  const banner = $('cookie-banner');
  if (!banner) return;
  if (localStorage.getItem('cookie-choice')) return;
  setTimeout(() => banner.classList.add('visible'), 1500);
  $('cookie-accept').addEventListener('click', () => { localStorage.setItem('cookie-choice', 'accepted'); banner.classList.remove('visible'); });
  $('cookie-decline').addEventListener('click', () => { localStorage.setItem('cookie-choice', 'declined'); banner.classList.remove('visible'); });
})();

/* ── Contact Form ──────────────────────────────────────────────── */
const contactForm = $('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validateContactForm()) return;
    const btn = $('cf-submit');
    btn.disabled = true;
    btn.querySelector('.submit-text').style.display = 'none';
    btn.querySelector('.submit-loader').style.display = 'inline';
    await sleep(1600);
    contactForm.style.display = 'none';
    $('form-success').style.display = 'block';
  });

  function validateContactForm() {
    let ok = true;
    const rules = [
      { id:'cf-prenom',  errId:'err-prenom',  check: v => v.trim().length >= 2, msg:'Prénom requis (2 caractères min).' },
      { id:'cf-nom',     errId:'err-nom',     check: v => v.trim().length >= 2, msg:'Nom requis (2 caractères min).' },
      { id:'cf-email',   errId:'err-email',   check: isEmail,                    msg:'Adresse email invalide.' },
      { id:'cf-service', errId:'err-service', check: v => v !== '',              msg:'Veuillez choisir un service.' },
      { id:'cf-message', errId:'err-message', check: v => v.trim().length >= 20, msg:'Message trop court (20 caractères min).' },
    ];
    rules.forEach(({ id, errId, check, msg }) => {
      const el = $(id), err = $(errId);
      const valid = check(el.value);
      err.textContent = valid ? '' : msg;
      err.classList.toggle('visible', !valid);
      if (!valid) ok = false;
    });
    const consent = $('cf-consent'), cErr = $('err-consent');
    if (!consent.checked) { cErr.textContent = 'Vous devez accepter pour continuer.'; cErr.classList.add('visible'); ok = false; }
    else { cErr.classList.remove('visible'); }
    return ok;
  }
}

/* ── Newsletter ────────────────────────────────────────────────── */
const newsletterForm = $('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async e => {
    e.preventDefault();
    const input = $('newsletter-email');
    const btn   = $('newsletter-btn');
    if (!isEmail(input.value)) { input.style.borderColor = '#e53e3e'; setTimeout(() => input.style.borderColor = '', 1500); return; }
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    await sleep(1200);
    btn.innerHTML = '<i class="fas fa-check"></i> Abonné(e) !';
    input.value = '';
    input.placeholder = 'Bienvenue ! Vérifiez vos emails 🎉';
    input.disabled = true;
  });
}

/* ── Booking Modal ─────────────────────────────────────────────── */
let selectedDate = null, selectedTime = null;
let calYear, calMonth;

function openModal() {
  const modal = $('booking-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  resetModal();
}

function closeModal() {
  const modal = $('booking-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

window.openModal = openModal;
window.closeModal = closeModal;

$('modal-close').addEventListener('click', closeModal);
$('booking-modal').addEventListener('click', e => { if (e.target === $('booking-modal')) closeModal(); });

// Nav booking buttons
['nav-booking-btn','hero-booking-btn'].forEach(id => { const el = $(id); if (el) el.addEventListener('click', openModal); });

function resetModal() {
  selectedDate = null; selectedTime = null;
  const now = new Date();
  calYear = now.getFullYear(); calMonth = now.getMonth();
  showStep(1);
  renderCalendar();
}

function showStep(n) {
  [1,2,3,4].forEach(i => {
    $(`modal-step-${i}`).style.display = i === n ? 'block' : 'none';
    const ind = document.querySelector(`.modal-step-indicator[data-step="${i}"]`);
    ind.classList.remove('active','done');
    if (i === n) ind.classList.add('active');
    else if (i < n) ind.classList.add('done');
  });
}

function renderCalendar() {
  const label = $('cal-month-label');
  const grid  = $('calendar-grid');
  const months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  label.textContent = `${months[calMonth]} ${calYear}`;
  grid.innerHTML = '';

  const today = new Date(); today.setHours(0,0,0,0);
  const first = new Date(calYear, calMonth, 1);
  const last  = new Date(calYear, calMonth + 1, 0);
  let startDay = (first.getDay() + 6) % 7; // Mon=0

  for (let i = 0; i < startDay; i++) {
    const btn = document.createElement('button');
    btn.className = 'cal-day other-month'; btn.disabled = true;
    const d = new Date(calYear, calMonth, 1 - startDay + i);
    btn.textContent = d.getDate();
    grid.appendChild(btn);
  }

  for (let d = 1; d <= last.getDate(); d++) {
    const date = new Date(calYear, calMonth, d);
    const day  = date.getDay(); // 0=Sun
    const isWeekend = day === 0 || day === 6;
    const isPast    = date < today;
    const btn = document.createElement('button');
    btn.className = 'cal-day';
    if (date.toDateString() === today.toDateString()) btn.classList.add('today');
    btn.textContent = d;
    btn.disabled = isWeekend || isPast;
    btn.addEventListener('click', () => selectDate(date, btn));
    grid.appendChild(btn);
  }
}

function selectDate(date, btn) {
  selectedDate = date;
  $$('.cal-day').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const months = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  $('modal-selected-date').textContent = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  setTimeout(() => showStep(2), 300);
}

$('cal-prev').addEventListener('click', () => { calMonth--; if (calMonth < 0) { calMonth=11; calYear--; } renderCalendar(); });
$('cal-next').addEventListener('click', () => { calMonth++; if (calMonth > 11) { calMonth=0; calYear++; } renderCalendar(); });

$$('.time-slot').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedTime = btn.dataset.time;
    $$('.time-slot').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    setTimeout(() => showStep(3), 300);
  });
});

$('modal-confirm-btn').addEventListener('click', async () => {
  const name  = $('modal-name');
  const email = $('modal-email');
  let ok = true;

  if (!name.value.trim()) { $('modal-err-name').textContent = 'Prénom & nom requis.'; ok = false; }
  else { $('modal-err-name').textContent = ''; }
  if (!isEmail(email.value)) { $('modal-err-email').textContent = 'Email invalide.'; ok = false; }
  else { $('modal-err-email').textContent = ''; }
  if (!ok) return;

  const btn = $('modal-confirm-btn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi…';
  await sleep(1400);

  const days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const months = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
  $('modal-success-msg').textContent =
    `Votre séance du ${days[selectedDate.getDay()]} ${selectedDate.getDate()} ${months[selectedDate.getMonth()]} à ${selectedTime} a bien été enregistrée, ${name.value.split(' ')[0]} !`;
  showStep(4);
});

/* ── Keyboard navigation ───────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); navLinks.classList.remove('open'); hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded','false'); }
});

/* ── Resize ────────────────────────────────────────────────────── */
window.addEventListener('resize', debounce(() => {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded','false');
  AOS.refresh();
}, 250));

/* ── Init first FAQ open ───────────────────────────────────────── */
const firstFaq = document.querySelector('.faq-item');
if (firstFaq) { firstFaq.classList.add('open'); firstFaq.querySelector('.faq-question')?.setAttribute('aria-expanded','true'); }
