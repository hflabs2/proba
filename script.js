// Интерактив для страницы продуктов
function addToCart(productName) {
    const notification = document.getElementById('cartNotification');
    const message = document.getElementById('cartMessage');
    
    if (notification && message) {
        message.textContent = `${productName} добавлен в корзину!`;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Интерактив для контактной формы
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const notification = document.getElementById('formNotification');
        
        if (notification) {
            notification.classList.add('show');
            
            // Очистка формы
            contactForm.reset();
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
    });
}

// Анимация при прокрутке для карточек
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

// Применяем анимацию ко всем карточкам
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .product-card');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Добавление эффекта параллакса для hero секции
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-image');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

console.log('BladeMaster сайт загружен успешно! 🪒');
