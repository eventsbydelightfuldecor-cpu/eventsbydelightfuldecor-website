// ===== SHARED COMPONENTS FOR MULTI-PAGE WEBSITE =====

// Header Component
function createHeader() {
    // Determine if we're in a subdirectory
    const isInPages = window.location.pathname.includes('/pages/');
    
    return `
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-menu" id="nav-menu">
                    <ul class="nav-list">
                        <li class="nav-item"><a href="${isInPages ? '../' : ''}index.html" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="${isInPages ? '' : 'pages/'}services.html" class="nav-link">Services</a></li>
                        <li class="nav-item"><a href="${isInPages ? '' : 'pages/'}about.html" class="nav-link">About</a></li>
                        <li class="nav-item"><a href="${isInPages ? '' : 'pages/'}testimonials.html" class="nav-link">Testimonials</a></li>
                        <li class="nav-item"><a href="${isInPages ? '' : 'pages/'}gallery.html" class="nav-link">Gallery</a></li>
                        <li class="nav-item"><a href="${isInPages ? '' : 'pages/'}contact.html" class="nav-link">Contact</a></li>
                        <li class="nav-item"><a href="${isInPages ? '' : 'pages/'}give-a-gift.html" class="nav-link">Give-A-Gift</a></li>
                        <li class="nav-item"><a href="${isInPages ? '' : 'pages/'}faq.html" class="nav-link">FAQ</a></li>
                    </ul>
                </div>
                <div class="hamburger" id="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
    </header>
    `;
}

// Footer Component
function createFooter() {
    // Determine if we're in a subdirectory
    const isInPages = window.location.pathname.includes('/pages/');
    
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-text">
                    <p class="follow-us">Follow Us</p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/Eventsbydelightfuldecor" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/Eventsbydelightfuldecor" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.tiktok.com/@eventsbydelightfuldecor?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <i class="fab fa-tiktok"></i>
                        </a>
                    </div>
                    <div class="footer-links">
                        <a href="${isInPages ? '' : 'pages/'}faq.html" class="footer-link">FAQ</a>
                        <a href="${isInPages ? '' : 'pages/'}contact.html" class="footer-link">Contact Us</a>
                    </div>
                    <p class="copyright">© 2035 by Events by Delightful Decor</p>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// Initialize components on page load
document.addEventListener('DOMContentLoaded', function() {
    // Insert header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = createHeader();
    }
    
    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = createFooter();
    }
    
    // Initialize mobile navigation after header is inserted
    setTimeout(initializeMobileNav, 100);
    
    // Set active navigation link
    setActiveNavLink();
    
    // Initialize page transitions after components are loaded
    // Wait a bit longer to ensure header is fully inserted and visible
    setTimeout(initializePageTransitions, 600);
});

// Mobile Navigation Initialization
function initializeMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Page Transitions and Loading Screen (optimized for instant navigation)
function initializePageTransitions() {
    // Removed page transition overlay for instant navigation
    // Navigation is now handled directly by browser for better performance
    
    // Navigation links work naturally - browser handles .html links automatically
    // We only need to handle anchor links (#) for smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    const footerLinks = document.querySelectorAll('.footer-link');
    const allLinks = [...navLinks, ...footerLinks];
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default for anchor links, not for page navigation
            if (href && href.startsWith('#')) {
                e.preventDefault();
                // Handle smooth scrolling for anchor links
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // For page navigation (.html links), let browser handle naturally
        });
    });
    
    // Also handle any other internal links (excluding already handled nav and footer links)
    const internalLinks = document.querySelectorAll('a[href$=".html"]:not(.nav-link):not(.footer-link)');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only prevent default for anchor links, not for page navigation
            if (href && href.startsWith('#')) {
                e.preventDefault();
                // Handle smooth scrolling for anchor links
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // For page navigation, let browser handle naturally
        });
    });
}

// Navigate to page with transition (optimized for instant navigation)
function navigateToPage(url) {
    // Fix duplicate paths issue
    const cleanUrl = url.replace('/pages/pages/', '/pages/');
    
    // Instant navigation - remove transition delay for better UX
    window.location.href = cleanUrl;
}
