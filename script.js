document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.feature-card, .step, .faq-item, h2');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });

    // Footer links handling
    const datenschutzLink = document.getElementById('link-datenschutz');
    const impressumLink = document.getElementById('link-impressum');
    const kontaktLink = document.getElementById('link-kontakt');

    if (datenschutzLink) {
        datenschutzLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Datenschutz bei Panum-Grades:\n\nWir nehmen Datenschutz ernst. Panum agiert ausschließlich lokal in deinem Browser. Es werden keinerlei persönliche Daten (Noten, Namen, Logins) an externe Server gesendet oder gespeichert. Es findet kein Tracking statt.');
        });
    }

    if (impressumLink) {
        impressumLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Panum Project\nEntwickelt von Minoshek Kishokumar\nKontakt: Minoshekk@gmail.com\n\nPanum ist ein Open-Source Projekt.');
        });
    }

    if (kontaktLink) {
        kontaktLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'mailto:Minoshekk@gmail.com';
        });
    }
});
