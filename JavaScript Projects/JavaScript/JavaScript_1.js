function functionGetElementByClassName() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
console.log('canvas');

var myGradient = c.createLinearGradient(0, 0, 0, 170);
myGradient.addColorStop(0, "black");
myGradient.addColorStop(1, "white");
c.fillStyle = myGradient;
c.fillRect(20, 20, 150, 100);