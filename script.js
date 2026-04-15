/**
 * Portfolio - David Garrido Quiles
 * JavaScript Vanilla - Sin frameworks
 * Elemento diferenciador: Dark/Light mode toggle
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== Variables =====
    const body = document.body;
    const header = document.getElementById('header');
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('nav a');
    const currentYearSpan = document.getElementById('current-year');
    
    // ===== Tema (Dark/Light Mode) =====
    // Cargar tema guardado o usar 'dark' por defecto
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    function setTheme(theme) {
        body.classList.remove('dark', 'light');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
        
        // Actualizar iconos de los botones
        const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';
        const iconClass = `fas ${icon}`;
        
        if (themeToggle) {
            themeToggle.innerHTML = `<i class="${iconClass}"></i>`;
        }
        if (themeToggleMobile) {
            themeToggleMobile.innerHTML = `<i class="${iconClass}"></i>`;
        }
    }
    
    function toggleTheme() {
        const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }
    
    // Event listeners para botones de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    // ===== Menú Móvil =====
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('open');
            mobileMenu.classList.toggle('open');
            
            // Cambiar icono del botón
            const icon = isOpen ? 'fa-bars' : 'fa-times';
            menuToggle.innerHTML = `<i class="fas ${icon}"></i>`;
        });
        
        // Cerrar menú al hacer click en un enlace
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // ===== Header con scroll =====
    let lastScrollY = 0;
    
    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        // Añadir clase cuando hay scroll
        if (currentScrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // ===== Navegación suave =====
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo para enlaces internos
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== Año actual en footer =====
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // ===== Animaciones de entrada (Intersection Observer) =====
    const animatedElements = document.querySelectorAll('.section-title, .skill-card, .timeline-card, .project-card, .contact-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===== Cerrar menú móvil al hacer click fuera =====
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                mobileMenu.classList.remove('open');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
    
    // ===== Console mensaje =====
    console.log('%c¡Hola! 👋', 'font-size: 24px; font-weight: bold; color: #3B82F6;');
    console.log('%cPortfolio de David Garrido Quiles', 'font-size: 14px; color: #06B6D4;');
    console.log('%cDesarrollador de Aplicaciones Multiplataforma', 'font-size: 12px; color: #94a3b8;');
});