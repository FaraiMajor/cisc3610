function draw() {
    const canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = 25;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.stroke();
}
draw()