document.querySelectorAll('.service-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('open');
    });
});