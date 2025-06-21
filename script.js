// Go to top functionality
const goToTopBtn = document.getElementById('goToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        goToTopBtn.classList.add('show');
    } else {
        goToTopBtn.classList.remove('show');
    }
});

goToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Print/Download functionality
const downloadPdfBtn = document.getElementById('downloadPdf');

downloadPdfBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Show loading state
    const originalContent = downloadPdfBtn.innerHTML;
    downloadPdfBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,8H5A3,3 0 0,0 2,11V16H6V22L12,20L18,22V16H22V11A3,3 0 0,0 19,8Z"/>
        </svg>
        <span>Opening Print...</span>
    `;
    
    // Reset button after a short delay
    setTimeout(() => {
        downloadPdfBtn.innerHTML = originalContent;
    }, 1000);
    
    // Open print dialog
    window.print();
}); 