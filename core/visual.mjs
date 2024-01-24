function opacity(selector) {
    const element = document.querySelector(selector);

    if (element) {
        element.style.display = 'block';
        element.style.opacity = '0';

        const duration = 1000; // Set your desired duration in milliseconds
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = elapsed / duration;

            element.style.opacity = progress < 1 ? progress : 1;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }
}


export default {
    opacity
}