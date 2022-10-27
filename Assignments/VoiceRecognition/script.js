var recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;

const canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
const button = document.getElementById("speakBtn");

const speakMessage = () => {
    if (button.innerHTML === "Speak") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        recognition.start();
        // Change button value to "Stop" once clicked
        button.innerHTML = "Stop";

    } else if (button.innerHTML === "Stop") {
        recognition.stop();
        button.innerHTML = "Speak";
    }
}
const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
};

recognition.onresult = function(event) {
    var message = event.results[0][0].transcript;
    if (message != NaN) {
        draw((message));

        // } else if (message === '100') {
        //     draw(message);

    } else {
        // Write unknown on canvas
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText('Unknown', 70, 50);

        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('You said: ' + event.results[0][0].transcript, 70, 110);
    }
    console.log('You said: ', event.results[0][0].transcript);
}

function draw(color) {
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = color;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.fillStyle = "black";
    ctx.fill()
    ctx.stroke();
}