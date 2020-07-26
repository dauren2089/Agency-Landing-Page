const container = document.getElementById('container')
const colors = ['#ff9a00', '#6fe7dd', '#ff5200', '#2eec71']
const squares = 300 //numbers of square

for (let i=0; i < squares; i++) {
    const square = document.createElement('div') //create squares
    square.classList.add('square') //add square style

    square.addEventListener('mouseover', () => {
        setColor(square)
    });

    square.addEventListener('mouseout', () => {
        removeColor(square)
    });

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    }

function removeColor(element) {
    element.style.background = '#7a3de0';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}