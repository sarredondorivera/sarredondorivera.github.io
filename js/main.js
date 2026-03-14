document.addEventListener('DOMContentLoaded', () => {
    // ScrollSpy is handled by Bootstrap via data-attributes in body
    // Just keeping console log for verification
    console.log('Economist Portfolio loaded.');

    // Optional: Add a class to navbar on scroll if want meaningful change, 
    // but the unified white look is often preferred for academic sites.
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
});
