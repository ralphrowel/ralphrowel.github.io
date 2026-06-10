function continueToPortfolio() {
    document.getElementById('mobile-notice').style.display = 'none';
}

window.addEventListener('load', () => {

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        document.getElementById('mobile-notice').style.display = 'flex';
    }

});