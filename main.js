document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hover effects for the contact sections
    const contactSections = ['#beats', '#bites', '#bits', '#contact'];
    contactSections.forEach(section => {
        const element = document.querySelector(section);
        if (element) {
            element.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#e0e0e0';
                this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            });
            element.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#fff';
                this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            });
        }
    });

    // Social media icon hover effect
    const socialMediaIcons = document.querySelectorAll('.social-media a');
    socialMediaIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.color = '#007bff';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.color = '#333';
        });
    });
});
