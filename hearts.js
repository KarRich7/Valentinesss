// hearts.js
function createFallingHearts() {
    const hearts = ['❤️', '💖', '💗', '💓', '💞', '💕'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Случайная позиция и размер
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 5) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.color = getRandomHeartColor();
        
        document.body.appendChild(heart);
    }
}

function getRandomHeartColor() {
    const colors = [
        '#ff5252', '#ec407a', '#ab47bc', 
        '#7e57c2', '#5c6bc0', '#42a5f5'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Запускаем создание сердечек при загрузке страницы
window.addEventListener('DOMContentLoaded', createFallingHearts);