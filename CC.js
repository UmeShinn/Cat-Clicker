document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    let x = 0;

    images.forEach(image => {
        moveImage(image);
        image.addEventListener('click', () => {
            x += 10;
            var outputParagraph = document.getElementById("output");
            outputParagraph.textContent = "スコア：" + x;
        });
    });

    function moveImage(image) {
        const containerWidth = document.querySelector('.container').offsetWidth;
        const containerHeight = document.querySelector('.container').offsetHeight;
        const imageWidth = image.offsetWidth;
        const imageHeight = image.offsetHeight;

        const getRandomPosition = () => Math.random() * (containerWidth - imageWidth);
        
        const newPosition = () => {
            image.style.left = getRandomPosition() + 'px';
            image.style.top = getRandomPosition() + 'px';
        }

        const moveRandomly = () => {
            const newLeft = getRandomPosition();
            const newTop = getRandomPosition();
            image.style.transition = 'transform 2s';
            image.style.transform = `translate(${newLeft}px, ${newTop}px)`;
        }

        newPosition();

        setInterval(() => {
            moveRandomly();
        }, 2000); 
    }
});
