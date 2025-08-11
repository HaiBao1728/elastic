document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('elastic-image');
    const originalHeight = 1;
    const pressedHeight = 0.7;
    
    let isPressed = false;
    let currentScaleY = originalHeight;
    let targetScaleY = originalHeight;
    const scaleSpeed = 0.1;
    let animationFrameId = null;

    document.body.addEventListener('touchmove', preventAll, { passive: false });
    document.addEventListener('gesturestart', preventAll);
    document.addEventListener('contextmenu', preventAll);
    
    function preventAll(e) {
        if (!isPressed) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }

    function animate() {
        const scaleDiff = targetScaleY - currentScaleY;
        currentScaleY += scaleDiff * scaleSpeed;
        
        image.style.transform = `scaleY(${currentScaleY})`;
        
        if (Math.abs(scaleDiff) > 0.001) {
            animationFrameId = requestAnimationFrame(animate);
        }
    }
    
    function handlePress(e) {
        e.preventDefault();
        e.stopPropagation();
        isPressed = true;
        targetScaleY = pressedHeight;
        cancelAnimationFrame(animationFrameId);
        animate();
    }
    
    function handleRelease(e) {
        if (isPressed) {
            e.preventDefault();
            e.stopPropagation();
            isPressed = false;
            targetScaleY = originalHeight;
            cancelAnimationFrame(animationFrameId);
            animate();
        }
    }
    
    image.addEventListener('mousedown', handlePress);
    image.addEventListener('touchstart', handlePress, { passive: false });
    image.addEventListener('mouseup', handleRelease);
    image.addEventListener('touchend', handleRelease);
    
    animate();
});