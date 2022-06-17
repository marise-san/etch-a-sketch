function createGrid(size) {
    const container = document.querySelector('.container');
    const items = container.querySelectorAll('div');
    items.forEach((div) => div.remove())

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (let g = 0; g < (size * size); g++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover', defColor);
        container.appendChild(grid).className = 'grid-item';
    }
}

createGrid(16); // default grid size

function changeSize(inputSize) {
    if (inputSize >= 2 && inputSize <= 100) {
        createGrid(inputSize)
    } else {
        alert('Size must be between 2 and 100');
    }
}

// ################ COLORS ####################
let color = '';

function defColor() {
    if (color === 'rgb') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function pickColor(newColor) {
    color = newColor;
}
// ################################################

function resetGrid() {
    const container = document.querySelector('.container');
    const items = container.querySelectorAll('div');
    items.forEach((div) => (div.style.backgroundColor = 'white'));
}