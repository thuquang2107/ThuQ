document.addEventListener('DOMContentLoaded', function() {
    const loaderOverlay = document.querySelector('.loader-overlay');

    // Check if the preloader has been shown before
    if (!sessionStorage.getItem('preloaderShown')) {
        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loaderOverlay.style.transform = 'translate3d(0px, -100%, 0px)'; // Move out of the viewport upwards
                    loaderOverlay.style.opacity = '0';
                    setTimeout(() => {
                        loaderOverlay.style.display = 'none';
                    }, 1500); // Match the CSS transition duration
                }, 500); // Delay for a smoother transition
            }
        }, 100); 

        
        sessionStorage.setItem('preloaderShown', 'true');
    } else {
       
        loaderOverlay.style.display = 'none';
    }
});
