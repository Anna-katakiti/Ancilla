// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Alert on Enroll Now Button
document.getElementById('enroll-btn').addEventListener('click', function() {
    alert('Thank you for your interest! Admissions team will contact you shortly.');
});

// Mobile Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});
