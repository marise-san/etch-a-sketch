function createGrid(size) {
    const container = document.querySelector('.container');

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (let g = 0; g < (size * size); g++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover', function(e) {
            e.target.classList.add('color');
        });
        container.appendChild(grid).className = 'grid-item';
    }
}

createGrid(16); // default grid size

const changeSize = (inputSize) => createGrid(inputSize);