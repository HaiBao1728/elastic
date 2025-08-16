document.addEventListener('DOMContentLoaded', function() {
    const characters = [
        { id: 1, name: 'Penguin', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353692/1_xizcuw.png' },
        { id: 2, name: 'Cat', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353696/2_owfsfz.png' },
        { id: 3, name: 'Dog', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353697/3_murkxc.png' },
        { id: 4, name: 'Rabbit', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353697/4_oq3l4h.png' },
        { id: 5, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353697/5_ktji1m.png' },
        { id: 6, name: 'Bear', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353698/6_bfqpol.png' },
        { id: 7, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353698/7_vghzrt.png' },
        { id: 8, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353698/8_vyurqa.png' },
        { id: 9, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353699/9_k9avwq.png' },
        { id: 10, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353694/10_d1xagx.png' },
        { id: 11, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353694/11_nft3uy.png' },
        { id: 12, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353694/12_mxmddc.png' },
        { id: 13, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353694/13_jutziq.png' },
        { id: 14, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353695/14_u5nwax.png' },
        { id: 15, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353692/15_ws26sq.png' },
        { id: 16, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353693/16_xmpq5p.png' },
        { id: 17, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353695/17_dultaq.png' },
        { id: 18, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353695/18_r3rcvq.png' },
        { id: 19, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353695/19_z3ymsc.png' },
        { id: 20, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353696/20_m36d5v.png' },
        { id: 21, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353696/21_uylayq.png' }
    ];

    const transformedCharacters = [
        { id: 1, name: 'Penguin Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353693/1.1_rodsov.png' },
        { id: 2, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353696/2.1_vnt9su.png' },
        { id: 3, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353697/3.1_doivtz.png' },
        { id: 4, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353697/3.1_doivtz.png' },
        { id: 5, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353697/5.1_sx2pmo.png' },
        { id: 6, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353698/6.1_ppmrkd.png' },
        { id: 8, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353698/8.1_bw64zb.png' },
        { id: 9, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353699/9.1_ztezfb.png' },
        { id: 10, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353694/10.1_clxchi.png' },
        { id: 13, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353695/13.1_nm9vqr.png' },
        { id: 18, name: 'Cat Angry', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1755353695/18.1_hemtp1.png' },
    ];

    const characterSelection = document.getElementById('character-selection');
    const gameScreen = document.getElementById('game-screen');
    const characterGrid = document.querySelector('.character-grid');
    const selectedGrid = document.querySelector('.selected-grid');
    const startButton = document.getElementById('start-button');
    const backButton = document.getElementById('back-button');
    const charactersRow = document.querySelector('.characters-row');

    let selectedCharacters = [];

    function initCharacterSelection() {
    characterGrid.innerHTML = '';
    characters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.className = 'character-item';
        characterItem.dataset.id = character.id;
        
        const img = document.createElement('img');
        img.src = character.url;
        img.alt = character.name;
        
        characterItem.appendChild(img);
        characterItem.addEventListener('click', () => selectCharacter(character));
        characterGrid.appendChild(characterItem);
    });
}

function selectCharacter(character) {
    const index = selectedCharacters.findIndex(c => c.id === character.id);
    
    if (index === -1) {
        if (selectedCharacters.length < 2) {
            selectedCharacters.push(character);
            updateSelectedCharacters();
        }
    } else {
        selectedCharacters.splice(index, 1);
        updateSelectedCharacters();
    }
    
    startButton.disabled = selectedCharacters.length === 0;
}

function updateSelectedCharacters() {
    selectedGrid.innerHTML = '';

    const centerContainer = document.createElement('div');
    centerContainer.className = 'selected-center';
    
    const innerWrapper = document.createElement('div');
    innerWrapper.style.display = 'flex';
    innerWrapper.style.justifyContent = 'center';
    innerWrapper.style.width = '100%';
    innerWrapper.style.gap = '14px';

    selectedCharacters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.className = 'character-item selected';
        characterItem.dataset.id = character.id;

        const img = document.createElement('img');
        img.src = character.url;
        img.alt = character.name;

        characterItem.appendChild(img);
        characterItem.addEventListener('click', () => selectCharacter(character));
        innerWrapper.appendChild(characterItem);
    });

    centerContainer.appendChild(innerWrapper);

    if (selectedCharacters.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.style.opacity = '0.6';
        placeholder.style.fontSize = '14px';
        placeholder.style.color = '#888';
        placeholder.textContent = 'Chưa chọn nhân vật';
        selectedGrid.appendChild(placeholder);
    } else {
        selectedGrid.appendChild(centerContainer);
    }

    document.querySelectorAll('.character-grid .character-item').forEach(item => {
        const id = parseInt(item.dataset.id);
        item.classList.toggle('selected', selectedCharacters.some(c => c.id === id));
    });

    startButton.disabled = selectedCharacters.length === 0;
}

function startGame() {
    if (selectedCharacters.length === 0) return;
    
    characterSelection.style.display = 'none';
    gameScreen.style.display = 'flex';
    
    const charactersRow = document.querySelector('.characters-row');
    charactersRow.innerHTML = '';
    
    const cleanups = [];
    
    selectedCharacters.forEach(character => {
        const container = document.createElement('div');
        container.className = 'character-container';
        
        const img = document.createElement('img');
        img.className = 'elastic-character';
        img.src = character.url;
        img.alt = character.name;
        
        container.appendChild(img);
        charactersRow.appendChild(container);
        const cleanup = setupElasticEffect(img, character);
        cleanups.push(cleanup);
    });
    
    if (selectedCharacters.length === 1) {
        charactersRow.style.justifyContent = 'center';
    }
    
    // Cleanup khi quay lại màn hình chọn nhân vật
    backButton.addEventListener('click', function cleanupHandler() {
        cleanups.forEach(cleanup => cleanup());
        backButton.removeEventListener('click', cleanupHandler);
    }, { once: true });
}

    function backToSelection() {
        characterSelection.style.display = 'block';
        gameScreen.style.display = 'none';
    }

function setupElasticEffect(imageElement, character) {
    const originalHeight = 1;
    const pressedHeight = 0.7;
    
    let isPressed = false;
    let currentScaleY = originalHeight;
    let targetScaleY = originalHeight;
    const scaleSpeed = 0.1;
    let animationFrameId = null;
    
    let pressCount = 0;
    let pressStartTime = 0;
    let isTransformed = false;
    let transformTimeout = null;
    
    const originalSrc = imageElement.src;
    
    const transformedCharacter = transformedCharacters.find(c => c.id === character.id);
    
    function transformCharacter() {
        if (!transformedCharacter || isTransformed) return;
        
        isTransformed = true;
        imageElement.src = transformedCharacter.url;
        
        transformTimeout = setTimeout(() => {
            imageElement.src = originalSrc;
            isTransformed = false;
            pressCount = 0;
        }, 5000);
    }
    
    const preventUnwantedActions = (e) => {
        if (e.target === imageElement && e.type !== 'touchstart' && e.type !== 'mousedown') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    };
    
    function animate() {
        const scaleDiff = targetScaleY - currentScaleY;
        currentScaleY += scaleDiff * scaleSpeed;
        imageElement.style.transform = `scaleY(${currentScaleY})`;
        
        if (Math.abs(scaleDiff) > 0.001) {
            animationFrameId = requestAnimationFrame(animate);
        }
    }
    
    function handlePress(e) {
        e.preventDefault();
        e.stopPropagation();
        isPressed = true;
        targetScaleY = pressedHeight;
        pressStartTime = Date.now();
        pressCount++;
        
        if (pressCount >= 100) {
            transformCharacter();
        }
        
        cancelAnimationFrame(animationFrameId);
        animate();
    }
    
    function handleRelease(e) {
        if (isPressed) {
            e.preventDefault();
            e.stopPropagation();
            isPressed = false;
            targetScaleY = originalHeight;
            
            // Kiểm tra thời gian nhấn giữ
            const pressDuration = Date.now() - pressStartTime;
            if (pressDuration >= 5000) { // 5 giây
                transformCharacter();
            }
            
            cancelAnimationFrame(animationFrameId);
            animate();
        }
    }
    
    // Xóa timeout khi component unmount
    const cleanup = () => {
        if (transformTimeout) {
            clearTimeout(transformTimeout);
        }
        document.removeEventListener('contextmenu', preventUnwantedActions);
        document.removeEventListener('selectstart', preventUnwantedActions);
        document.removeEventListener('dragstart', preventUnwantedActions);
        window.removeEventListener('touchmove', preventUnwantedActions);
        imageElement.removeEventListener('touchstart', handlePress);
        imageElement.removeEventListener('mousedown', handlePress);
        imageElement.removeEventListener('touchend', handleRelease);
        imageElement.removeEventListener('mouseup', handleRelease);
        imageElement.removeEventListener('touchcancel', handleRelease);
    };
    
    document.addEventListener('contextmenu', preventUnwantedActions);
    document.addEventListener('selectstart', preventUnwantedActions);
    document.addEventListener('dragstart', preventUnwantedActions);
    window.addEventListener('touchmove', preventUnwantedActions, { passive: false });
    
    imageElement.addEventListener('touchstart', handlePress, { passive: false });
    imageElement.addEventListener('mousedown', handlePress);
    imageElement.addEventListener('touchend', handleRelease);
    imageElement.addEventListener('mouseup', handleRelease);
    imageElement.addEventListener('touchcancel', handleRelease);
    
    animate();
    
    return cleanup;
}

    startButton.addEventListener('click', startGame);
    backButton.addEventListener('click', backToSelection);

    initCharacterSelection();
});