// ============================================
// PORTFOLIO V2 - JAVASCRIPT
// Smooth scrolling, Intersection Observer, Mobile menu, Translation system
// ============================================

// ============================================
// TRANSLATION SYSTEM (must be loaded first)
// ============================================

// Translations object
const translations = {
    en: {
        nav: { home: 'Home', projects: 'Projects', skills: 'Skills', about: 'About', contact: 'Contact' },
        hero: {
            overline: '> WEB DEVELOPER & TOOL BUILDER',
            title: 'Hi, I\'m Sina Foudehi.',
            subtitle: 'I build structured web interfaces and small tools using HTML, CSS, JavaScript and Python.',
            strength1: 'Focus on clear, functional UI',
            strength2: 'Experience with responsive layouts & vanilla JS',
            strength3: 'Python tools for image processing & automation',
            buttonProjects: 'View Projects',
            buttonContact: 'Get in Touch'
        },
        projects: {
            title: 'Projects',
            subtitle: 'A selection of things I\'ve built.',
            liveDemo: 'Live Demo',
            viewCode: 'View Code',
            portfolio: { title: 'Portfolio Website', description: 'A minimalist, responsive portfolio showcasing my work with a clean grid-based layout. Built with vanilla JavaScript for smooth scrolling, intersection observer animations, and a fully responsive design that works seamlessly across all devices. Features a dark theme with modern card-based sections and smooth reveal animations.' },
            garmfiles: { title: 'Garmfiles Shop', description: 'A modern e-commerce web application built with React and Vite. Features a responsive design with React Router for navigation, shopping cart functionality, and product management. Includes modern UI components with Lucide React icons and a clean, user-friendly interface for browsing and purchasing products.' },
            ecospark: { title: 'EcoSpark', description: 'A sustainable e-commerce platform built with Next.js 14 and TypeScript. Features a complete shopping experience with product catalog, shopping cart, checkout flow, and payment integration (PayPal & Mollie). Includes blog functionality, category pages, and a modern design with Tailwind CSS. Built with the Next.js App Router for optimal performance and SEO.' },
            matrixprinzip: { title: 'Matrix Prinzip Funnel', description: 'A financial education landing page and sales funnel built to help people escape the "hamster wheel" and achieve financial freedom. Features a conversion-optimized design with clear value propositions, email capture forms, and strategic call-to-action placements. Built with modern web technologies for fast loading and excellent user experience. Focuses on teaching systematic approaches to reducing expenses, building savings, and creating automated financial systems.' },
            handyarchive: { title: 'Handy Programs Archive', description: 'A carefully curated collection of handy programs and digital tools that solve real problems without bloat, ads, or unnecessary complexity. Each tool has been tested, approved, and packaged for convenience. Features a minimalist design with a focus on functionality. The archive includes desktop applications like sticky notes and batch image converters, all free and open source. A digital garden of useful tools that grows organically.' }
        },
        skills: { title: 'Skills & Tools', frontend: 'Frontend', tools: 'Tools & Workflows', python: 'Python & Other' },
        about: {
            title: 'About me',
            para1: 'My journey into web development started with a background in screen design and various professional experiences. Through vocational training and hands-on projects, I\'ve developed a passion for building structured, functional interfaces and practical tools.',
            para2: 'I enjoy the process of transforming ideas into clean, maintainable code. Whether it\'s crafting responsive layouts with CSS Grid and Flexbox, implementing smooth interactions with vanilla JavaScript, or building desktop tools with Python, I focus on clarity and user experience.',
            para3: 'Currently, I\'m seeking an entry-level web/IT position in or around Hamburg, ideally remote or hybrid. I\'m eager to contribute to a team while continuing to grow as a developer.',
            timeline1: 'Screen Design assistant (vocational school)',
            timeline2: 'Web design internship',
            timeline3: 'Built portfolio, advanced calculator and PNG→WEBP converter',
            timeline4: 'Software development training (Python, Scrum, CyberSecurity)',
            locationLabel: 'Location:', location: 'Hamburg, Germany',
            languagesLabel: 'Languages:', licenseLabel: 'Driver\'s License:', license: 'Yes'
        },
        contact: {
            title: 'Let\'s talk',
            intro: 'I\'m open to junior web/IT roles, remote or in Hamburg. Feel free to reach out if you\'d like to discuss opportunities or collaborate on a project.',
            email: 'Email', github: 'GitHub',
            formName: 'Name', formEmail: 'E-mail', formMessage: 'Message', formSubmit: 'Send message'
        },
        footer: { text: '© 2025 – Portfolio by Sina Foudehi — built with HTML, CSS & a bit of JS' },
        formMessages: { fillAll: 'Please fill in all fields.', invalidEmail: 'Please enter a valid email address.', success: 'Thank you for your message! I will get back to you soon.' }
    },
    de: {
        nav: { home: 'Startseite', projects: 'Projekte', skills: 'Fähigkeiten', about: 'Über mich', contact: 'Kontakt' },
        hero: {
            overline: '> WEB-ENTWICKLER & TOOL-ENTWICKLER',
            title: 'Hallo, ich bin Sina Foudehi.',
            subtitle: 'Ich erstelle strukturierte Web-Oberflächen und kleine Tools mit HTML, CSS, JavaScript und Python.',
            strength1: 'Fokus auf klare, funktionale Benutzeroberflächen',
            strength2: 'Erfahrung mit responsiven Layouts & Vanilla JS',
            strength3: 'Python-Tools für Bildverarbeitung & Automatisierung',
            buttonProjects: 'Projekte ansehen',
            buttonContact: 'Kontakt aufnehmen'
        },
        projects: {
            title: 'Projekte',
            subtitle: 'Eine Auswahl der Dinge, die ich gebaut habe.',
            liveDemo: 'Live Demo',
            viewCode: 'Code ansehen',
            portfolio: { title: 'Portfolio-Website', description: 'Ein minimalistisches, responsives Portfolio, das meine Arbeit mit einem sauberen, rasterbasierten Layout präsentiert. Erstellt mit Vanilla JavaScript für sanftes Scrollen, Intersection Observer-Animationen und ein vollständig responsives Design, das nahtlos auf allen Geräten funktioniert. Enthält ein dunkles Theme mit modernen kartenbasierten Abschnitten und sanften Enthüllungsanimationen.' },
            garmfiles: { title: 'Garmfiles Shop', description: 'Eine moderne E-Commerce-Webanwendung, die mit React und Vite erstellt wurde. Bietet ein responsives Design mit React Router für Navigation, Warenkorbfunktionalität und Produktverwaltung. Enthält moderne UI-Komponenten mit Lucide React-Icons und eine saubere, benutzerfreundliche Oberfläche zum Durchsuchen und Kaufen von Produkten.' },
            ecospark: { title: 'EcoSpark', description: 'Eine nachhaltige E-Commerce-Plattform, die mit Next.js 14 und TypeScript erstellt wurde. Bietet eine vollständige Shopping-Erfahrung mit Produktkatalog, Warenkorb, Checkout-Flow und Zahlungsintegration (PayPal & Mollie). Enthält Blog-Funktionalität, Kategorieseiten und ein modernes Design mit Tailwind CSS. Erstellt mit dem Next.js App Router für optimale Leistung und SEO.' },
            matrixprinzip: { title: 'Matrix Prinzip Funnel', description: 'Eine Finanzbildungs-Landingpage und Verkaufsfunnel, die Menschen dabei hilft, aus dem "Hamsterrad" auszubrechen und finanzielle Freiheit zu erreichen. Bietet ein konversionsoptimiertes Design mit klaren Wertversprechen, E-Mail-Erfassungsformularen und strategisch platzierten Call-to-Action-Elementen. Erstellt mit modernen Webtechnologien für schnelles Laden und hervorragende Benutzererfahrung. Fokussiert sich darauf, systematische Ansätze zur Reduzierung von Ausgaben, zum Aufbau von Ersparnissen und zur Schaffung automatisierter Finanzsysteme zu vermitteln.' },
            handyarchive: { title: 'Handy Programs Archive', description: 'Eine sorgfältig kuratierte Sammlung von praktischen Programmen und digitalen Tools, die echte Probleme lösen, ohne Ballast, Werbung oder unnötige Komplexität. Jedes Tool wurde getestet, genehmigt und für den Komfort verpackt. Bietet ein minimalistisches Design mit Fokus auf Funktionalität. Das Archiv enthält Desktop-Anwendungen wie Notizzettel und Batch-Bildkonverter, alle kostenlos und Open Source. Ein digitaler Garten nützlicher Tools, der organisch wächst.' }
        },
        skills: { title: 'Fähigkeiten & Tools', frontend: 'Frontend', tools: 'Tools & Workflows', python: 'Python & Sonstiges' },
        about: {
            title: 'Über mich',
            para1: 'Meine Reise in die Webentwicklung begann mit einem Hintergrund im Screendesign und verschiedenen beruflichen Erfahrungen. Durch Berufsausbildung und praktische Projekte habe ich eine Leidenschaft für den Aufbau strukturierter, funktionaler Oberflächen und praktischer Tools entwickelt.',
            para2: 'Ich genieße den Prozess, Ideen in sauberen, wartbaren Code zu verwandeln. Ob es darum geht, responsive Layouts mit CSS Grid und Flexbox zu erstellen, sanfte Interaktionen mit Vanilla JavaScript zu implementieren oder Desktop-Tools mit Python zu erstellen, ich konzentriere mich auf Klarheit und Benutzererfahrung.',
            para3: 'Derzeit suche ich eine Einstiegsposition im Web/IT-Bereich in oder um Hamburg, idealerweise remote oder hybrid. Ich bin gespannt darauf, zu einem Team beizutragen und gleichzeitig als Entwickler weiter zu wachsen.',
            timeline1: 'Screendesign-Assistent (Berufsschule)',
            timeline2: 'Webdesign-Praktikum',
            timeline3: 'Portfolio, erweiterten Taschenrechner und PNG→WEBP-Konverter erstellt',
            timeline4: 'Softwareentwicklungstraining (Python, Scrum, CyberSecurity)',
            locationLabel: 'Standort:', location: 'Hamburg, Deutschland',
            languagesLabel: 'Sprachen:', licenseLabel: 'Führerschein:', license: 'Ja'
        },
        contact: {
            title: 'Lass uns reden',
            intro: 'Ich bin offen für Junior-Web/IT-Rollen, remote oder in Hamburg. Kontaktieren Sie mich gerne, wenn Sie Möglichkeiten besprechen oder an einem Projekt zusammenarbeiten möchten.',
            email: 'E-Mail', github: 'GitHub',
            formName: 'Name', formEmail: 'E-Mail', formMessage: 'Nachricht', formSubmit: 'Nachricht senden'
        },
        footer: { text: '© 2025 – Portfolio von Sina Foudehi — erstellt mit HTML, CSS & ein bisschen JS' },
        formMessages: { fillAll: 'Bitte füllen Sie alle Felder aus.', invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.', success: 'Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.' }
    }
};

// Current language (default: English)
let currentLang = localStorage.getItem('portfolioLang') || 'de';

// Get translation function
function getTranslation(key, lang = currentLang) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    
    return value || key;
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations(lang = currentLang) {
    currentLang = lang;
    localStorage.setItem('portfolioLang', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update language toggle button text
    const langToggle = document.getElementById('langText');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'DE' : 'EN';
    }
}

// Language toggle button
const langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'de' : 'en';
        applyTranslations(newLang);
    });
}

// Translations are now applied above (either immediately or on DOMContentLoaded)

// ============================================
// THEME SYSTEM (Light/Dark Mode Toggle)
// ============================================

// Get current theme from localStorage or default to dark
// Dark mode is the default theme
let currentTheme = localStorage.getItem('portfolioTheme') || 'dark';

// Initialize theme immediately (before DOMContentLoaded to prevent FOUC)
// This ensures dark mode is active by default
if (!localStorage.getItem('portfolioTheme')) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Initialize theme on page load
function initTheme() {
    // Get theme from localStorage or use dark as default
    const savedTheme = localStorage.getItem('portfolioTheme');
    currentTheme = savedTheme || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

// Apply translations immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        applyTranslations(currentLang);
    });
} else {
    // DOM is already ready
    initTheme();
    applyTranslations(currentLang);
}

// Toggle theme function
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('portfolioTheme', currentTheme);
    updateThemeIcon();
}

// Update theme icon visibility
function updateThemeIcon() {
    // Icons are handled by CSS, but we can add any additional logic here if needed
}

// Theme toggle button event listener
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        toggleTheme();
    });
}

// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth Scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip empty hash or just #
        if (href === '#' || href === '') {
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            // Optional: unobserve after animation to improve performance
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with .reveal class
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission (no backend)
        // In a real implementation, you would send this to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Helper function to show form messages
function showFormMessage(text, type) {
    if (!formMessage) return;
    
    // Use translated messages if available
    let translatedText = text;
    
    if (type === 'error') {
        if (text.includes('fill in all fields')) {
            translatedText = getTranslation('formMessages.fillAll', currentLang);
        } else if (text.includes('valid email')) {
            translatedText = getTranslation('formMessages.invalidEmail', currentLang);
        }
    } else if (type === 'success') {
        translatedText = getTranslation('formMessages.success', currentLang);
    }
    
    formMessage.textContent = translatedText;
    formMessage.className = 'form-message';
    
    if (type === 'success') {
        formMessage.classList.add('success');
    }
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// Active Navigation Link Highlighting on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;
    const headerHeight = 80;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 20;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Throttle scroll event for performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            highlightActiveSection();
            ticking = false;
        });
        ticking = true;
    }
});

// Initialize active section on page load
highlightActiveSection();

// Add active state styling via CSS (optional enhancement)
// You can add this to styles.css if you want active nav links styled differently
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Console Easter Egg
console.log('%cAmir-Sina Foudehi', 'color: #2FD57A; font-size: 20px; font-weight: bold; font-family: "Fira Code", monospace;');
console.log('%cPortfolio V2', 'color: #1E9F5F; font-size: 14px; font-family: "Fira Code", monospace;');
console.log('%cBuilt with HTML, CSS & a bit of JS', 'color: #9CA6BB; font-size: 12px; font-family: "Fira Code", monospace;');

