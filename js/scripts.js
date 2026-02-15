// ===== EVENTS BY DELIGHTFUL DECOR - JAVASCRIPT FUNCTIONALITY =====

// ===== COMPREHENSIVE LOADING MANAGER =====
class LoadingManager {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.mainContent = document.getElementById('main-content-wrapper');
        this.progressBar = document.getElementById('loading-progress-bar');
        this.statusText = document.getElementById('loading-status-text');
        
        this.loadedResources = 0;
        this.totalResources = 0;
        this.videoReady = false;
        this.headerReady = false;
        this.criticalImagesReady = false;
        this.allReady = false;
        
        this.init();
    }

    init() {
        if (!this.loadingScreen) return;
        
        // Set initial state
        this.updateStatus('Initializing...', 0);
        
        // Start loading all resources
        this.loadVideo();
        this.loadCriticalImages();
        this.waitForHeader();
        
        // Set maximum timeout (safety net)
        setTimeout(() => {
            if (!this.allReady) {
                console.warn('Loading timeout reached, showing page anyway');
                this.completeLoading();
            }
        }, 10000); // 10 second max
    }

    loadVideo() {
        const heroVideo = document.querySelector('.hero-video');
        if (!heroVideo) {
            this.videoReady = true;
            this.checkIfReady();
            return;
        }

        this.updateStatus('Loading video...', 20);

        // Configure video for optimal loading
        heroVideo.muted = true;
        heroVideo.loop = true;
        heroVideo.playsInline = true;
        heroVideo.preload = 'auto';

        // Track video loading progress
        let hasStarted = false;

        // Start loading immediately
        heroVideo.load();

        // Update progress as video loads
        heroVideo.addEventListener('progress', () => {
            if (heroVideo.buffered.length > 0) {
                const buffered = heroVideo.buffered.end(0);
                const duration = heroVideo.duration;
                if (duration > 0) {
                    const progress = Math.min(90, 20 + (buffered / duration) * 50);
                    this.updateStatus('Loading video...', progress);
                }
            }
        });

        // Video can start playing (enough data buffered)
        heroVideo.addEventListener('canplay', () => {
            if (!hasStarted) {
                hasStarted = true;
                this.updateStatus('Video ready...', 85);
                this.videoReady = true;
                this.checkIfReady();
            }
        });

        // Video can play through (fully loaded)
        heroVideo.addEventListener('canplaythrough', () => {
            this.updateStatus('Video ready...', 90);
            this.videoReady = true;
            this.checkIfReady();
        });

        // Handle video errors
        heroVideo.addEventListener('error', () => {
            console.warn('Video loading error, continuing anyway');
            this.videoReady = true;
            this.checkIfReady();
        });

        // Fallback: if video takes too long, continue anyway
        setTimeout(() => {
            if (!this.videoReady) {
                console.warn('Video loading timeout, continuing');
                this.videoReady = true;
                this.checkIfReady();
            }
        }, 8000);
    }

    loadCriticalImages() {
        this.updateStatus('Loading images...', 30);
        
        const criticalImages = [
            'images/section_background.jpg',
            'images/wedding_img/Welcome_img_1.png',
            'images/wedding_img/quick-link-gallery.jpg',
            'images/wedding_img/quick-link-testimonials.jpg',
            'images/Corporate/quick-link-contact.jpg'
        ];

        let imagesLoaded = 0;
        const totalImages = criticalImages.length;

        criticalImages.forEach(src => {
            const img = new Image();
            img.onload = () => {
                imagesLoaded++;
                const progress = 30 + (imagesLoaded / totalImages) * 20;
                this.updateStatus('Loading images...', progress);
                
                if (imagesLoaded === totalImages) {
                    this.criticalImagesReady = true;
                    this.checkIfReady();
                }
            };
            img.onerror = () => {
                imagesLoaded++;
                if (imagesLoaded === totalImages) {
                    this.criticalImagesReady = true;
                    this.checkIfReady();
                }
            };
            img.src = src;
        });
    }

    waitForHeader() {
        // Wait for header to be inserted by components.js
        const checkHeader = setInterval(() => {
            const header = document.querySelector('.header');
            if (header) {
                clearInterval(checkHeader);
                this.updateStatus('Finalizing...', 95);
                this.headerReady = true;
                this.checkIfReady();
            }
        }, 100);

        // Timeout after 2 seconds
        setTimeout(() => {
            clearInterval(checkHeader);
            this.headerReady = true;
            this.checkIfReady();
        }, 2000);
    }

    updateStatus(text, progress) {
        if (this.statusText) {
            this.statusText.textContent = text;
        }
        if (this.progressBar) {
            this.progressBar.style.width = `${progress}%`;
        }
    }

    checkIfReady() {
        if (this.allReady) return;

        // Check if all critical resources are ready
        if (this.videoReady && this.headerReady && this.criticalImagesReady) {
            // Small delay to ensure smooth transition
            setTimeout(() => {
                this.completeLoading();
            }, 300);
        }
    }

    completeLoading() {
        if (this.allReady) return;
        this.allReady = true;

        this.updateStatus('Ready!', 100);

        // Start video playback
        const heroVideo = document.querySelector('.hero-video');
        if (heroVideo && this.videoReady) {
            const playPromise = heroVideo.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn('Video autoplay prevented:', error);
                });
            }
        }

        // Hide loading screen and show content
        setTimeout(() => {
            if (this.loadingScreen) {
                this.loadingScreen.classList.add('fade-out');
            }
            
            if (this.mainContent) {
                this.mainContent.style.opacity = '1';
                this.mainContent.style.visibility = 'visible';
                this.mainContent.classList.add('loaded');
            }

            // Remove loading screen from DOM after fade
            setTimeout(() => {
                if (this.loadingScreen) {
                    this.loadingScreen.style.display = 'none';
                }
            }, 800);
        }, 500);
    }
}

// ===== ADVANCED LOADING OPTIMIZATION =====
class PerformanceOptimizer {
    constructor() {
        this.resourcesLoaded = 0;
        this.totalResources = 0;
        this.isInitialized = false;
        this.loadingStartTime = performance.now();
        
        // Don't auto-init if LoadingManager is handling it
        // this.init();
    }

    init() {
        this.preloadCriticalResources();
        this.optimizeImages();
        this.initializeVideoPlayback();
        this.setupSimultaneousLoading();
    }

    preloadCriticalResources() {
        // Preload critical images
        const criticalImages = [
            'images/wedding_img/Welcome_img_1.png',
            'images/wedding_img/quick-link-gallery.jpg',
            'images/wedding_img/quick-link-testimonials.jpg',
            'images/Corporate/quick-link-contact.jpg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.onload = () => this.resourceLoaded();
            img.onerror = () => this.resourceLoaded();
            img.src = src;
        });

        // Preload fonts
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => this.resourceLoaded());
        }

        // Preload CSS
        this.totalResources = criticalImages.length + 2; // +2 for fonts and CSS
    }

    optimizeImages() {
        // Add loading="eager" to above-the-fold images
        const aboveFoldImages = document.querySelectorAll('img[src*="Welcome"], img[src*="quick-link"]');
        aboveFoldImages.forEach(img => {
            img.loading = 'eager';
            img.decoding = 'sync';
        });

        // Add loading="lazy" to below-the-fold images
        const belowFoldImages = document.querySelectorAll('img:not([src*="Welcome"]):not([src*="quick-link"])');
        belowFoldImages.forEach(img => {
            img.loading = 'lazy';
        });

        // Add error handling for missing images
        const allImages = document.querySelectorAll('img');
        allImages.forEach(img => {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                // Add fallback content if needed
                const fallback = document.createElement('div');
                fallback.className = 'image-fallback';
                fallback.textContent = 'Image unavailable';
                fallback.style.cssText = 'display: flex; align-items: center; justify-content: center; background: #f5f5f5; color: #666; min-height: 200px;';
                this.parentNode.insertBefore(fallback, this.nextSibling);
            });
        });
    }

    initializeVideoPlayback() {
        // Video loading is now handled by LoadingManager
        // This method is kept for compatibility but does minimal work
        const heroVideo = document.querySelector('.hero-video');
        const videoLoading = document.querySelector('.hero-video-loading');

        if (!heroVideo) return;

        // Hide the small video loading indicator (main loading screen handles it)
        if (videoLoading) {
            videoLoading.style.display = 'none';
        }

        // Video will be started by LoadingManager when ready
    }

    setupSimultaneousLoading() {
        // Ensure all critical elements load simultaneously
        const criticalElements = [
            document.querySelector('.header'),
            document.querySelector('.hero'),
            document.querySelector('.welcome'),
            document.querySelector('.quick-links')
        ];

        criticalElements.forEach(element => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });

        // Show all elements simultaneously when ready
        this.showElementsSimultaneously();
    }

    resourceLoaded() {
        this.resourcesLoaded++;
        if (this.resourcesLoaded >= this.totalResources && !this.isInitialized) {
            this.showElementsSimultaneously();
        }
    }

    showElementsSimultaneously() {
        if (this.isInitialized) return;
        this.isInitialized = true;

        const loadingTime = performance.now() - this.loadingStartTime;

        // Show all critical elements simultaneously
        const criticalElements = document.querySelectorAll('.header, .hero, .welcome, .quick-links');
        criticalElements.forEach(element => {
            if (element) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });

        // Initialize other components
        this.initializeComponents();
    }

    initializeComponents() {
        // Initialize navigation
        this.initializeNavigation();
        
        // Initialize scroll effects
        this.initializeScrollEffects();
        
        // Initialize interactions
        this.initializeInteractions();
    }

    initializeNavigation() {
        // Navigation is handled by components.js
        // This method is kept for compatibility but does nothing
        // to avoid conflicts with the main navigation system
    }

    initializeScrollEffects() {
        // Optimized scroll handling with parallax effect for welcome overlay
        let ticking = false;
        
        const updateScrollEffects = () => {
            // Handle navbar scroll behavior
            const header = document.querySelector('.header');
            if (header) {
                const scrollY = window.scrollY;
                if (scrollY > 100) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            }
            
            // Parallax scroll effect for welcome overlay image
            const welcomeBgImage = document.querySelector('.welcome-bg-image');
            if (welcomeBgImage) {
                const welcomeSection = document.querySelector('.welcome');
                if (welcomeSection) {
                    const rect = welcomeSection.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    
                    if (isVisible) {
                        // Calculate parallax offset based on scroll position within section
                        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
                        const parallaxOffset = scrollProgress * 50; // Adjust multiplier for effect intensity
                        welcomeBgImage.style.transform = `translateY(${parallaxOffset}px) scale(1.05)`;
                    }
                }
            }
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    initializeInteractions() {
        // Initialize hover effects and interactions
        const interactiveElements = document.querySelectorAll('.quick-link-card, .service-card, .gallery-item');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-5px)';
                element.style.transition = 'transform 0.3s ease';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0)';
            });
        });
    }
}

// Initialize performance optimizer
const performanceOptimizer = new PerformanceOptimizer();

// Initialize loading manager - start immediately if DOM ready, otherwise wait
let loadingManager;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadingManager = new LoadingManager();
    });
} else {
    // DOM already ready, initialize immediately
    loadingManager = new LoadingManager();
}

document.addEventListener('DOMContentLoaded', function() {

    // ===== IMMEDIATE CONTENT DISPLAY =====
    // Content is now displayed immediately without loading screen

    // ===== HERO VIDEO LOADING =====
    // Video loading is now handled by LoadingManager class
    // This section is kept minimal for compatibility
    function initializeHeroVideo() {
        const heroVideo = document.querySelector('.hero-video');
        const videoLoading = document.querySelector('.hero-video-loading');

        // Hide the small video loading indicator
        if (videoLoading) {
            videoLoading.style.display = 'none';
        }

        // Video playback is handled by LoadingManager
    }

    // Initialize hero video (minimal setup)
    initializeHeroVideo();

    // ===== MOBILE NAVIGATION TOGGLE =====
    // Mobile navigation is handled by components.js
    // This section is disabled to prevent conflicts

    // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
    // Only handle anchor links, not page navigation
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== ACTIVE NAVIGATION HIGHLIGHTING =====
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const headerHeight = document.querySelector('.header').offsetHeight;

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Call once on load

    // ===== FAQ ACCORDION FUNCTIONALITY =====
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });

            // Open clicked item if it wasn't already active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ===== CONTACT FORM HANDLING =====
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form elements
            const submitBtn = document.getElementById('submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const messagesDiv = document.getElementById('form-messages');

            // Show loading state
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'flex';

            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};

            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Basic form validation
            if (validateForm(formObject)) {
                // Submit to Formspree
                fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
                        contactForm.reset();
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(error => {
                    showFormMessage('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
                })
                .finally(() => {
                    // Reset button state
                    submitBtn.disabled = false;
                    btnText.style.display = 'block';
                    btnLoading.style.display = 'none';
                });
            } else {
                // Reset button state if validation fails
                submitBtn.disabled = false;
                btnText.style.display = 'block';
                btnLoading.style.display = 'none';
            }
        });
    }

    // ===== FORM VALIDATION =====
    function validateForm(data) {
        let isValid = true;
        const errors = [];

        // Name validation - check both first and last name
        if (!data.firstName || data.firstName.trim().length < 2) {
            errors.push('Please enter a valid first name');
            isValid = false;
        }

        if (!data.lastName || data.lastName.trim().length < 2) {
            errors.push('Please enter a valid last name');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            errors.push('Please enter a valid email address');
            isValid = false;
        }

        // Event type validation
        if (!data.eventType) {
            errors.push('Please select an event type');
            isValid = false;
        }

        // Message validation
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Please enter a message with at least 10 characters');
            isValid = false;
        }

        if (!isValid) {
            showFormMessage(errors.join('<br>'), 'error');
        }

        return isValid;
    }

    // ===== MESSAGE DISPLAY FUNCTION =====
    function showMessage(message, type) {
        // Remove existing message if any
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.innerHTML = message;

        // Style the message
        messageDiv.style.cssText = `
            padding: 15px;
            margin: 20px 0;
            border-radius: 10px;
            font-weight: 600;
            text-align: center;
            ${type === 'success'
                ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;'
                : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;

        // Insert message after form
        contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);

        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }

    // ===== FORM MESSAGE DISPLAY FUNCTION =====
    function showFormMessage(message, type) {
        const messagesDiv = document.getElementById('form-messages');
        if (messagesDiv) {
            messagesDiv.className = `form-messages ${type}`;
            messagesDiv.innerHTML = message;
            messagesDiv.style.display = 'block';

            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    messagesDiv.style.display = 'none';
                }, 5000);
            }
        }
    }

    // ===== SCROLL ANIMATIONS =====
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .testimonial-card, .gift-card, .gallery-item');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in-up');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Call once on load
    // ===== NAVBAR SCROLL BEHAVIOR =====
    let lastScrollTop = 0;
    let isScrolling = false;
    let scrollTimeout;

    function handleNavbarScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDifference = Math.abs(currentScrollTop - lastScrollTop);

        // Clear any existing timeout
        clearTimeout(scrollTimeout);

        // ALWAYS show navbar when at the very top
        if (currentScrollTop <= 10) {
            header.style.transform = 'translateY(0)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            lastScrollTop = 0;
            return;
        }

        // Only trigger if scroll difference is significant (prevents jittery behavior)
        if (scrollDifference < 5) return;

        if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            // Scrolling down - hide navbar with small delay to prevent flickering
            scrollTimeout = setTimeout(() => {
                header.style.transform = 'translateY(-100%)';
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            }, 10);
        } else {
            // Scrolling up - show navbar immediately
            header.style.transform = 'translateY(0)';
            if (currentScrollTop <= 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            }
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }

    // Initialize navbar scroll behavior
    window.addEventListener('scroll', debounce(handleNavbarScroll, 10));
    // ===== GALLERY LIGHTBOX EFFECT =====
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // In a real implementation, this would open a lightbox
            // For now, we'll just add a visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // ===== TESTIMONIALS CAROUSEL (Basic Implementation) =====
    let currentTestimonial = 0;
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }

    // Auto-rotate testimonials every 5 seconds (if there are multiple)
    if (testimonialCards.length > 1) {
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // ===== FORM INPUT ENHANCEMENTS =====
    const formInputs = document.querySelectorAll('input, select, textarea');

    formInputs.forEach(input => {
        // Add focus/blur effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (this.value) {
                this.parentElement.classList.add('filled');
            } else {
                this.parentElement.classList.remove('filled');
            }
        });

        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('filled');
        }
    });

    // ===== GIFT CARD HOVER EFFECTS =====
    const giftCards = document.querySelectorAll('.gift-card');

    giftCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = '';
            }
        });
    });

    // ===== ENHANCED LOADING ANIMATION =====
    function hideLoader() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    }

    // Hide loader when page is fully loaded (fallback)
    window.addEventListener('load', () => {
        hideLoader();
        // Ensure loading screen is hidden even if LoadingManager fails
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen && loadingScreen.style.display !== 'none') {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800);
        }
    });

    // ===== SOCIAL MEDIA LINKS =====
    // Social media links now work directly with target="_blank" and rel="noopener noreferrer"
    // No need for preventDefault or custom handling

    // ===== PERFORMANCE OPTIMIZATION =====
    // Debounce scroll events for better performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(() => {
        updateActiveNavLink();
        animateOnScroll();
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }

        // Enter key on FAQ questions
        if (e.key === 'Enter' && e.target.classList.contains('faq-question')) {
            e.target.click();
        }
    });

    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');

    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #d4af37';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // ===== ERROR HANDLING & DEBUGGING =====
    // Add global error handler
    window.addEventListener('error', function(e) {
        // Global error handler
    });

    // Add unhandled promise rejection handler
    window.addEventListener('unhandledrejection', function(e) {
        // Unhandled promise rejection handler
    });
});

// ===== UTILITY FUNCTIONS =====

// Function to get current section in viewport
function getCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.querySelector('.header').offsetHeight;

    for (let section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight + 100 && rect.bottom >= headerHeight + 100) {
            return section.id;
        }
    }
    return null;
}

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export functions for potential external use
window.EventsByDelightfulDecor = {
    scrollToTop,
    getCurrentSection,
    isInViewport
};
