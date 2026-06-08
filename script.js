document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamic Footer Date Handler
    const yearContainer = document.getElementById('year');
    if (yearContainer) {
        yearContainer.textContent = new Date().getFullYear();
    }

    // 2. Image Fallback Manager
    const projectImages = document.querySelectorAll('.project-img');
    
    projectImages.forEach(img => {
        img.addEventListener('error', function() {
            this.classList.add('img-hidden');
            const fallbackMsg = this.nextElementSibling;
            if (fallbackMsg && fallbackMsg.classList.contains('fallback-text')) {
                fallbackMsg.style.display = 'block';
            }
        });
    });
});