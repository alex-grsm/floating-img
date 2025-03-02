document.addEventListener('DOMContentLoaded', () => {
    let ticking = false;

    document.addEventListener('mousemove', (e) => {
        // document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`;
        if (!ticking) {
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--move-x', `${e.clientX}px`);
                document.documentElement.style.setProperty('--move-y', `${e.clientY}px`);
                ticking = false;
            });
            ticking = true;
        }
    });
});
