var recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
const button = document.getElementById("speakBtn");

const speakMessage = () => {
        if (button.innerHTML === "Speak") {
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            recognition.start();
            // Change button value to "Stop" once clicked
            button.innerHTML = "Stop";

        } else if (button.innerHTML === "Stop") {
            recognition.stop();
            button.innerHTML = "Speak";
        }
    }
    // function to speak instructions
const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
};

cssColorNames = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

// Deafault color and size
var currentRadius = 25;
var currentColor = 'black'
var X = canvas.width / 2;
var Y = canvas.height / 2;
ctx.beginPath();
ctx.arc(X, Y, currentRadius, 0, 2 * Math.PI, false);
ctx.fillStyle = currentColor;
ctx.fill()
ctx.stroke();

// speech commands
recognition.onresult = function(event) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var message = event.results[0][0].transcript;
        if (message >= 25 && message <= 300) {
            draw(message, currentColor);
            currentRadius = message;
        } else if (message < 25) {
            speak('Size too small, the minimum size is 25.')

        } else if (message > 300) {
            speak('Sorry, but the size limit is 300.')

        } else if (cssColorNames.includes(message)) {
            draw(currentRadius, message);
            currentColor = message;

        } else
        if (message === "help") {
            speak("Say a color to change the circle's color or say a radius of size between 25 and 300");
        } else if (message === "about") {
            speak("Farai Major, Copyright 2022.");
        } else {
            draw(currentRadius, 'black')
        }
        console.log('You said: ', event.results[0][0].transcript);
    }
    // function to change radius and color
function draw(r, color) {
    X = canvas.width / 2;
    Y = canvas.height / 2;
    ctx.beginPath();
    ctx.arc(X, Y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill()
    ctx.stroke();
}