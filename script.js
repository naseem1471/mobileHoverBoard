const container = document.getElementById('container')
const colors = ['#3E4A89', '#FF7F50', '#8A2BE2','#7FFF00', '#D2691E', '#DC143C', '#00FFFF', '#00008B', '#8B008B', '#FF8C00']
const SQUARES = 600

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover',() => setColor(square))
    square.addEventListener('mouseout',() => removeColor(square))

    square.addEventListener('touchstart',() => setColor(square));
    square.addEventListener('touchend',() => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    square.style.transitionDuration = '0s';
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
    square.style.transitionDuration = '2s';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}