document.addEventListener('DOMContentLoaded', function() {
    // Danh sách nhân vật
    const characters = [
        { id: 1, name: 'Penguin', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935197/1_r2z26y.png' },
        { id: 2, name: 'Cat', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935260/2_ziyaqr.png' },
        { id: 3, name: 'Dog', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935259/3_x8e4lk.png' },
        { id: 4, name: 'Rabbit', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935258/4_he8foq.png' },
        { id: 5, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935257/5_frbrxf.png' },
        { id: 6, name: 'Bear', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935256/6_tt8zaw.png' },
        { id: 7, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935258/7_zc7pjq.png' },
        { id: 8, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935255/8_m6wciu.png' },
        { id: 9, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935258/9_r0keug.png' },
        { id: 10, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935257/10_utbpre.png' },
        { id: 11, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935255/11_fkkunp.png' },
        { id: 12, name: 'Fox', url: 'https://res.cloudinary.com/duyf6wzx4/image/upload/v1754935254/12_wcnz39.png' }
    ];

    // DOM Elements
    const characterSelection = document.getElementById('character-selection');
    const gameScreen = document.getElementById('game-screen');
    const characterGrid = document.querySelector('.character-grid');
    const selectedGrid = document.querySelector('.selected-grid');
    const startButton = document.getElementById('start-button');
    const backButton = document.getElementById('back-button');
    const charactersRow = document.querySelector('.characters-row');

    // State
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
    
    // Thêm wrapper để đảm bảo căn giữa tốt hơn
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
    
    selectedCharacters.forEach(character => {
        const container = document.createElement('div');
        container.className = 'character-container';
        
        const img = document.createElement('img');
        img.className = 'elastic-character';
        img.src = character.url;
        img.alt = character.name;
        
        container.appendChild(img);
        charactersRow.appendChild(container);
        setupElasticEffect(img);
    });
    
    // Căn giữa các nhân vật
    if (selectedCharacters.length === 1) {
        charactersRow.style.justifyContent = 'center';
    }
}

    // Quay lại màn hình chọn
    function backToSelection() {
        characterSelection.style.display = 'block';
        gameScreen.style.display = 'none';
    }

    // Thiết lập hiệu ứng đàn hồi cho từng nhân vật
    function setupElasticEffect(imageElement) {
        const originalHeight = 1;
        const pressedHeight = 0.7;
        
        let isPressed = false;
        let currentScaleY = originalHeight;
        let targetScaleY = originalHeight;
        const scaleSpeed = 0.1;
        let animationFrameId = null;

        const preventUnwantedActions = (e) => {
            if (e.target === imageElement && e.type !== 'touchstart' && e.type !== 'mousedown') {
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
        
        imageElement.addEventListener('touchstart', handlePress, { passive: false });
        imageElement.addEventListener('mousedown', handlePress);
        imageElement.addEventListener('touchend', handleRelease);
        imageElement.addEventListener('mouseup', handleRelease);
        imageElement.addEventListener('touchcancel', handleRelease);
        
        animate();
    }

    // Event listeners
    startButton.addEventListener('click', startGame);
    backButton.addEventListener('click', backToSelection);

    // Khởi tạo
    initCharacterSelection();
});