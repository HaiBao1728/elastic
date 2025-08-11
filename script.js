const image = document.getElementById('elastic-image');
const originalHeight = 1;
const pressedHeight = 0.7;

let isPressed = false;
let currentScaleY = originalHeight;
let targetScaleY = originalHeight;
const scaleSpeed = 0.1;
let animationFrameId = null;
    
function animate() {
    const scaleDiff = targetScaleY - currentScaleY;
    currentScaleY += scaleDiff * scaleSpeed;
    
    image.style.transform = `scaleY(${currentScaleY})`;
    
    if (Math.abs(scaleDiff) > 0.001) {
        animationFrameId = requestAnimationFrame(animate);
    }
}

function handlePress() {
    isPressed = true;
    targetScaleY = pressedHeight;
    cancelAnimationFrame(animationFrameId);
    animate();
}

function handleRelease() {
    if (isPressed) {
        isPressed = false;
        targetScaleY = originalHeight;
        cancelAnimationFrame(animationFrameId);
        animate();
    }
}

image.addEventListener('mousedown', handlePress);
image.addEventListener('touchstart', handlePress);
document.addEventListener('mouseup', handleRelease);
document.addEventListener('touchend', handleRelease);
image.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

animate();