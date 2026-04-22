// ===========================
// LOADING SCREEN
// ===========================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ===========================
// NAVIGATION
// ===========================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// SEARCH FUNCTIONALITY
// ===========================
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    searchInput.focus();
});

closeSearch.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
});

searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
    }
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        const description = product.querySelector('.product-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// ===========================
// FILTER FUNCTIONALITY
// ===========================
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        products.forEach(product => {
            if (filter === 'all') {
                product.style.display = 'block';
                setTimeout(() => {
                    product.style.opacity = '1';
                    product.style.transform = 'scale(1)';
                }, 10);
            } else {
                const category = product.getAttribute('data-category');
                if (category === filter) {
                    product.style.display = 'block';
                    setTimeout(() => {
                        product.style.opacity = '1';
                        product.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    product.style.opacity = '0';
                    product.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        product.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// ===========================
// PRODUCT DATA
// ===========================
const productData = [
    {
        title: "Royal Crystal Chandelier",
        description: "Magnificent 12-light crystal chandelier with premium quality crystals",
        price: "₹85,999",
        oldPrice: "₹1,05,999",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop"
    },
    {
        title: "Maharaja Golden Jhumar",
        description: "Traditional brass & gold plated jhumar with intricate designs",
        price: "₹1,25,999",
        oldPrice: "₹1,55,999",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=600&fit=crop"
    },
    {
        title: "Modern Glass Pendant",
        description: "Contemporary designer pendant light with artistic glass shade",
        price: "₹12,499",
        oldPrice: "₹18,999",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop"
    },
    {
        title: "Classic French Chandelier",
        description: "Elegant 8-light vintage chandelier with timeless appeal",
        price: "₹65,999",
        oldPrice: "₹85,999",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1534406113292-8d2c0f00d924?w=600&h=600&fit=crop"
    },
    {
        title: "Luxury Wall Sconce",
        description: "Crystal & brass wall light fixture for elegant wall lighting",
        price: "₹8,999",
        oldPrice: "₹12,999",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop"
    },
    {
        title: "Diamond Cut Jhumar",
        description: "Premium crystal jhumar with LED lights and diamond-cut crystals",
        price: "₹95,999",
        oldPrice: "₹1,25,999",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop"
    },
    {
        title: "Industrial Pendant Set",
        description: "Set of 3 industrial style pendants for modern interiors",
        price: "₹18,999",
        oldPrice: "₹25,999",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=600&h=600&fit=crop"
    },
    {
        title: "Contemporary LED Chandelier",
        description: "Smart LED ring chandelier with remote control and dimming",
        price: "₹45,999",
        oldPrice: "₹65,999",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1567225477277-c1b0e3d0b19f?w=600&h=600&fit=crop"
    }
];

// ===========================
// QUICK VIEW MODAL
// ===========================
const modal = document.getElementById('quickViewModal');

function openQuickView(index) {
    const product = productData[index];
    
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalOldPrice').textContent = product.oldPrice;
    
    // Generate rating stars
    let ratingHTML = '';
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        ratingHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        ratingHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = Math.ceil(product.rating); i < 5; i++) {
        ratingHTML += '<i class="far fa-star"></i>';
    }
    ratingHTML += `<span>(${product.rating})</span>`;
    
    document.getElementById('modalRating').innerHTML = ratingHTML;
    
    // Set buy button
    const cleanPrice = product.price.replace(/[₹,]/g, '');
    document.getElementById('modalBuyBtn').onclick = () => buyNow(product.title, cleanPrice);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===========================
// WHATSAPP BUY NOW
// ===========================
function buyNow(productName, price) {
    const phone = "919876543210"; // Replace with your WhatsApp number
    const message = `Hi! I'm interested in buying *${productName}* priced at ₹${price}. Please provide more details.`;
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// ===========================
// SCROLL TO TOP
// ===========================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// CONTACT FORM
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const interest = contactForm.querySelector('select').value;
    const message = contactForm.querySelector('textarea').value;
    
    const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Interest:* ${interest}\n*Message:* ${message}`;
    
    const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    contactForm.reset();
    alert('Thank you! Your message has been sent via WhatsApp.');
});

// ===========================
// NEWSLETTER FORM
// ===========================
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    
    alert(`Thank you for subscribing with email: ${email}`);
    newsletterForm.reset();
});

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .product-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ===========================
// CART FUNCTIONALITY (Basic)
// ===========================
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

function updateCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;
    cartCountElement.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 300);
}

// ===========================
// INITIALIZE
// ===========================
console.log('ARK DECOR - Website Loaded Successfully! ✨');
