function drawCanvas() {


    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Sky
    ctx.fillStyle = '#87ceeb';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Mountains
    ctx.beginPath()
    ctx.moveTo(0, 650)
    ctx.lineTo(70, 550)
    ctx.lineTo(10, 450)
    ctx.closePath()
    ctx.fillStyle = "#C2B280"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(50, 700)
    ctx.lineTo(250, 600)
    ctx.lineTo(80, 375)
    ctx.closePath()
    ctx.fillStyle = "#C2B280"
    ctx.fill()

    // ground
    ctx.fillStyle = "#C2B280"
    ctx.beginPath();
    ctx.fillRect(0, 570, 1440, 200)
    ctx.fillRect(50, 560, 300, 100)
    ctx.fillRect(200, 550, 800, 100)
    ctx.fillRect(500, 600, 300, 100)
    ctx.fill();
    ctx.stroke();


    //Sun
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(1200, 75, 125, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //Clouds 

    var i;
    var x = 55; //x coordinate changes per loop iteration

    //This loop generates the same set of clouds and spreads them across the X axis of the canvas
    for (i = 0; i < 4; i++) {

        // combine three white circles closely together to form a single cloud. X coordinates change.
        ctx.fillStyle = "whitesmoke";
        ctx.beginPath();
        ctx.arc(x, 300, 40, 0, 2 * Math.PI);
        ctx.arc(x + 40, 300, 40, 0, 2 * Math.PI);
        ctx.arc(x + 80, 300, 40, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "#A9A9A9";
        ctx.beginPath();
        ctx.arc(x, 80, 50, 0, 2 * Math.PI);
        ctx.arc(x + 40, 80, 50, 0, 2 * Math.PI);
        ctx.arc(x + 80, 120, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        //Ensures the next cloud is drawn directly ontop of the one before it by increasing X coordinates.
        x = x + 260;

    }

    //PLANE 

    //Front of the Plane
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(700, 340, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //Body of the plane
    ctx.fillStyle = "black";
    ctx.fillRect(300, 300, 400, 80);

    //Tail
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.moveTo(375, 300);
    ctx.lineTo(325, 250);
    ctx.lineTo(300, 250);
    ctx.lineTo(300, 300);
    ctx.lineTo(375, 300);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.moveTo(375, 380);
    ctx.lineTo(300, 380);
    ctx.lineTo(300, 450);
    ctx.lineTo(325, 450);
    ctx.lineTo(375, 380);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Left Wing
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();

    ctx.moveTo(550, 300);
    ctx.lineTo(450, 250);
    ctx.lineTo(400, 250);
    ctx.lineTo(475, 300);
    ctx.lineTo(550, 300);

    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //Right Wing

    ctx.fillStyle = "#ff0000";
    ctx.beginPath();

    ctx.moveTo(550, 360);
    ctx.lineTo(475, 450);
    ctx.lineTo(430, 450);
    ctx.lineTo(490, 360);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();


    //Cockpit Window

    ctx.fillStyle = '#a8ccd7';
    ctx.beginPath();
    ctx.arc(699, 340, 40, .01, Math.PI, true);
    ctx.fill();
    ctx.closePath();

    //Passenger windows

    ctx.fillStyle = '#a8ccd7';
    ctx.beginPath();
    ctx.arc(350, 337, 15, 0, 2 * Math.PI);
    ctx.arc(390, 337, 15, 0, 2 * Math.PI);
    ctx.arc(430, 337, 15, 0, 2 * Math.PI);
    ctx.arc(600, 337, 15, 0, 2 * Math.PI);
    ctx.arc(560, 337, 15, 0, 2 * Math.PI);
    ctx.arc(520, 337, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    //Flames Behind Plane
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(300, 320);
    ctx.lineTo(150, 290);
    ctx.lineTo(170, 300)
    ctx.lineTo(240, 330);
    ctx.lineTo(270, 340);
    ctx.lineTo(220, 340);
    ctx.lineTo(280, 350);
    ctx.lineTo(245, 350);
    ctx.lineTo(300, 365);
    ctx.fill();
    ctx.stroke();

    // tree

    // tree leaves
    ctx.fillStyle = "green"
    ctx.beginPath();
    ctx.fillRect(1000, 400, 100, 100)
    ctx.fillRect(1060, 350, 100, 100)
    ctx.fillRect(1100, 300, 100, 100)
    ctx.fillRect(1200, 350, 100, 100)
    ctx.fillRect(1140, 400, 100, 50)
    ctx.fillRect(1160, 440, 100, 110)
    ctx.fillRect(1480, 480, 100, 100)
    ctx.fillRect(1080, 460, 100, 100)
    ctx.fill();
    ctx.stroke();

    // stem
    ctx.fillStyle = "brown"
    ctx.beginPath();
    ctx.fillRect(1150, 500, 30, 30)
    ctx.fillRect(1155, 530, 30, 30)
    ctx.fillRect(1145, 560, 30, 30)
    ctx.fillRect(1150, 590, 30, 30)
    ctx.fillRect(1155, 610, 30, 30)
    ctx.fillRect(1155, 640, 30, 30)
    ctx.fill();
    ctx.stroke();

    //Draws Bird
    function drawBird(ctx, x, y, r) {
        ctx.beginPath();
        ctx.lineWidth = r * 0.2;
        ctx.moveTo(x - r, y);
        ctx.arc(x, y, r, Math.PI, Math.PI * 2);
        ctx.arc(x + 2 * r, y, r, Math.PI, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;
    }

    //grass
    var a = 10;
    for (let n = 0; n < 30; n++) {
        ctx.beginPath();
        ctx.moveTo(0 + a, 540);
        ctx.lineTo(10 + a, 640);
        ctx.lineTo(0 + a, 605);
        ctx.fillStyle = "#7CFC00";
        ctx.fill();
        ctx.closePath();
        a = a + 30;

    }


}
//context.lineTo();

document.addEventListener("DOMContentLoaded", drawing);