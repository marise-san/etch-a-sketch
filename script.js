function createGrid(size) {
    const container = document.querySelector('.container');
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (g = 0; g < (size * size); g++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = 'grid-item';
    }
}

createGrid(16);
