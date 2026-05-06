// Create the floating character
const floatingBuddy = document.createElement('div');
floatingBuddy.id = 'web-study-buddy';
floatingBuddy.innerHTML = '🤖';
floatingBuddy.style.cssText = `
    position: fixed; 
    bottom: 20px; 
    right: 20px; 
    font-size: 50px; 
    z-index: 999999; 
    cursor: grab; 
    user-select: none;
    filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
    transition: transform 0.3s ease;
`;
document.body.appendChild(floatingBuddy);

// Make him hover slightly
let hoverUp = true;
setInterval(() => {
    floatingBuddy.style.transform = hoverUp ? 'translateY(-10px)' : 'translateY(0px)';
    hoverUp = !hoverUp;
}, 1500);

// Dragging Logic
let isDragging = false;
let startX, startY;

floatingBuddy.onmousedown = (e) => {
    isDragging = true;
    startX = e.clientX - floatingBuddy.offsetLeft;
    startY = e.clientY - floatingBuddy.offsetTop;
    floatingBuddy.style.cursor = 'grabbing';
};

document.onmousemove = (e) => {
    if (!isDragging) return;
    floatingBuddy.style.left = (e.clientX - startX) + 'px';
    floatingBuddy.style.top = (e.clientY - startY) + 'px';
    floatingBuddy.style.bottom = 'auto'; 
    floatingBuddy.style.right = 'auto';
};

document.onmouseup = () => {
    isDragging = false;
    floatingBuddy.style.cursor = 'grab';
};
