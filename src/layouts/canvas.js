import GregCharacter from "../layouts/images/2d_animation-GRoth.pmg";
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function createMarkup() {
    return {__html: 'First &middot; Second'};
}
  
  function MyCanvas() {
    return <canvas dangerouslySetInnerHTML={createMarkup()} />;
  }

var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
            c.fillStyle = "#dd7745";
            c.fill();
            c.beginPath();
            c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
            c.fillStyle = "#cc5515";
            c.fill();
            c.drawImage(GregCharacter, 90, 130, 50, 60, 10, 10, 50, 60);
        };
        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        };
    }
}
var circleArray = [];
for (var i = 0; i < 100; i++) {
    var radius = 50;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

for (var i = 70; i < circleArray.length; i++) {
  circleArray[i].update();
  
}
  
  
}

animate();
