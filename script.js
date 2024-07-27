document.addEventListener("DOMContentLoaded", function() {
    const messageDiv = document.getElementById('message');
    const copyArea = document.getElementById('copyArea');
    const copyButton = document.getElementById('copyButton');
    copyArea.style.display = 'block';
    copyButton.style.display = 'block';
});

function copyText() {
    const copyArea = document.getElementById('copyArea');
    copyArea.select();
    document.execCommand('copy');
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

document.addEventListener("mousemove", function(event) {
    const image = document.querySelector('.image-container img');
    const rect = image.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;

    image.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.3)`;
});
