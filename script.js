document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('hidden');
    }, 2000);

    const messageDiv = document.getElementById('message');
    const encryptedText = "bG9hZHN0cmluZyhnYW1lOkh0dHBHZXQoImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9BY3R5cm4vU2NyaXB0cy9tYWluL0F6dXJlTW9kZGVkIikpKCk=";
    const decodedText = atob(encryptedText);

    messageDiv.innerHTML = `
<p>Azure Modded - DaHood Script</p>`;
    document.getElementById('copyArea').value = decodedText;
    document.querySelector('.copy-text').style.display = 'block';
    document.querySelector('.copy-button').style.display = 'block';
});

function copyText() {
    const encryptedText = "bG9hZHN0cmluZyhnYW1lOkh0dHBHZXQoImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9BY3R5cm4vU2NyaXB0cy9tYWluL0F6dXJlTW9kZGVkIikpKCk=";
    const decodedText = atob(encryptedText);
    const copyArea = document.getElementById('copyArea');
    copyArea.value = decodedText;
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
