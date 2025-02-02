document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    yesButton.addEventListener('click', () => {
        window.location.href = "yes.html";
    });

    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('click', moveButton);

    function moveButton() {
        const button = document.getElementById('noButton');
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        button.style.position = 'fixed';
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    }
});
