/* ============================================
   PORTFOLIO CONSEILLER CARRIÈRE - JAVASCRIPT
   Sophie Mercier · Coach Certifiée
   ============================================ */

// ─── Loader ──────────────────────────────────
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 800);
});
document.body.style.overflow = 'hidden';

// ─── AOS Init ────────────────────────────────
AOS.init({
    duration: 750,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
});

// ─── Navbar ───────────────────────────────────
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

const handleScroll = debounce(() => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('scrollTopBtn').classList.toggle('visible', window.scrollY > 400);
    updateActiveNav();
}, 10);
window.addEventListener('scroll', handleScroll, { passive: true });

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.id;
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollPos >= top && scrollPos < top + height);
        }
    });
}

// ─── Smooth Scroll ───────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
        }
    });
});

// ─── Scroll to Top ───────────────────────────
document.getElementById('scrollTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── Counter Animation ───────────────────────
function animateCounter(element, target, suffix = '', duration = 2000) {
    const isFloat = target % 1 !== 0;
    const start = performance.now();
    const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
        const value = eased * target;
        element.textContent = isFloat
            ? value.toFixed(1)
            : Math.floor(value).toString();
        if (progress < 1) requestAnimationFrame(update);
        else element.textContent = isFloat ? target.toFixed(1) : target.toString();
    };
    requestAnimationFrame(update);
}

function initCounters() {
    const counterEls = document.querySelectorAll('.counter, .stat-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                const target = parseFloat(entry.target.dataset.target);
                animateCounter(entry.target, target);
            }
        });
    }, { threshold: 0.5 });
    counterEls.forEach(el => observer.observe(el));
}

// ─── FAQ Accordion ───────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        // Toggle current
        if (!isOpen) item.classList.add('open');
    });
});

// ─── Contact Form ────────────────────────────
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

        // Simulate async send
        await delay(1800);

        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

// ─── Newsletter ──────────────────────────────
function handleNewsletter(e) {
    e.preventDefault();
    const input = document.querySelector('.newsletter-input');
    const btn = e.target.closest('button');
    const email = input.value.trim();

    if (!email || !isValidEmail(email)) {
        shakeElement(input);
        input.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Abonné(e) !';
        input.value = '';
        input.placeholder = 'Bienvenue ! Vérifiez vos emails.';
        input.disabled = true;
    }, 1200);
}

// ─── Utilities ───────────────────────────────
function debounce(fn, wait) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeElement(el) {
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = 'shake 0.4s ease';
    el.addEventListener('animationend', () => { el.style.animation = ''; }, { once: true });
}

// ─── Inject Shake Keyframe ───────────────────
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-6px); }
  40%, 80% { transform: translateX(6px); }
}`;
document.head.appendChild(shakeStyle);

// ─── Service Card Hover Effects ──────────────
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.service-icon');
        if (icon) icon.style.transform = 'rotate(-5deg) scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.service-icon');
        if (icon) icon.style.transform = '';
    });
});

// ─── Value Items Entrance (About) ────────────
function initValueItems() {
    const items = document.querySelectorAll('.value-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
            }
        });
    }, { threshold: 0.3 });
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(12px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(item);
    });
}

// ─── Navbar background adapt on hero ─────────
function adaptNavbarForHero() {
    const hero = document.getElementById('home');
    if (!hero) return;
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const onHero = window.scrollY < heroBottom - 100;
    if (onHero && window.scrollY < 60) {
        navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)';
    } else {
        navbar.style.borderBottomColor = '';
    }
}
window.addEventListener('scroll', adaptNavbarForHero, { passive: true });
adaptNavbarForHero();

// ─── Resize handler ──────────────────────────
window.addEventListener('resize', debounce(() => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    AOS.refresh();
}, 250));

// ─── Init on DOM Ready ───────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initCounters();
    initValueItems();
    updateActiveNav();

    // Open first FAQ by default
    const firstFaq = document.querySelector('.faq-item');
    if (firstFaq) firstFaq.classList.add('open');
});

// ─── Keyboard Navigation ─────────────────────
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    }
});
