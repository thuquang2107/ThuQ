///////text animation
document.addEventListener('DOMContentLoaded', function() {
    const homeContainer = document.querySelector('.home_container');
    const nav = document.querySelector('nav');
    
    // Add animation classes to trigger CSS animations
    homeContainer.classList.add('animateHomeContainer');
    if (nav) {
        // Add the animation class to the nav element
        nav.classList.add('animateNav');
    }
});