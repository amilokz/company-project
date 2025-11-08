// ===== HERO BUTTON HOVER EFFECT =====
const heroButtons = document.querySelectorAll('.hero-buttons .btn');

heroButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});

// ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
const navLinks = document.querySelectorAll('.menu ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if(link.hash !== '') {
            e.preventDefault();
            const target = document.querySelector(link.hash);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== FADE-IN SECTIONS ON SCROLL =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});
