document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const colors = ['#6a2c70', '#b83b5e', '#f08a5d', '#f9ed69'];

    function changeBackgroundColor() {
        const colorIndex = Math.floor(Math.random() * colors.length);
        document.body.style.transition = 'background-color 2s ease';
        document.body.style.backgroundColor = colors[colorIndex];
    }

    setInterval(changeBackgroundColor, 4000);
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        container.style.transform = `rotate3d(${mouseY * 2}, ${mouseX * 2}, 0, 20deg)`;
    });

    const boxes = document.querySelectorAll('.box-area li');
    boxes.forEach(box => {
        box.style.animationDuration = `${Math.random() * 15 + 5}s`;
        box.style.animationDelay = `${Math.random() * 5}s`;
    });
});
