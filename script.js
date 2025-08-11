document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('elastic-image');
    const originalHeight = 1;
    const pressedHeight = 0.7;
    
    let isPressed = false;
    let currentScaleY = originalHeight;
    let targetScaleY = originalHeight;
    const scaleSpeed = 0.1;
    let animationFrameId = null;

    const preventUnwantedActions = (e) => {
        if (e.target === image && e.type !== 'touchstart' && e.type !== 'mousedown') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    };

    document.addEventListener('contextmenu', preventUnwantedActions);
    document.addEventListener('selectstart', preventUnwantedActions);
    document.addEventListener('dragstart', preventUnwantedActions);
    window.addEventListener('touchmove', preventUnwantedActions, { passive: false });
    
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
    
    image.addEventListener('touchstart', handlePress, { passive: false });
    image.addEventListener('mousedown', handlePress);
    image.addEventListener('touchend', handleRelease);
    image.addEventListener('mouseup', handleRelease);
    image.addEventListener('touchcancel', handleRelease);
    
    animate();
});