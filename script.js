const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = 2000


    let x1 = 0;
    let y1 = 100;
    let x2 = canvas.width;
    let y2 = 100;

ctx.fillStyle = 'white';
ctx.font = '30px Arial';
// ctx.textAlign = 'center';
ctx.fillText('Click to draw a line', 50, 50);


function drawLine(x1, y1, x2, y2) {
ctx.strokeStyle = 'green';
ctx.lineWidth= 5
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    ctx.fillText(`${distance}`,x2/2,y2 -10)
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

drawLine(x1,y1,x2,y2)

let padding = 50

window.addEventListener('click', (e) => {

    x2 = x2/2

    y1 = y1 + padding;
    y2 = y2 + padding;

    drawLine(x1, y1, x2, y2);

})