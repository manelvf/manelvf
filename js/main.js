
var n_of_balls = 3;

// return -1 or 1
function getRandomSign() {
}

function Ball (){
}

Ball.prototype.init = function(x,y) {
  this.dx = getRandomSign();
  this.dy = getRandomSign();
  this.x = x;
  this.y = y;
  this.radius = 50;
}

balls = [];


App = {
  x: 75,
  y: 75,
  dx : -1,
  dy : -1,
  availW: 0,
  availH: 0,
  radius : 50
}


function draw(ctx) {

    App.x += App.dx;
    App.y += App.dy;

    if ((App.x + App.radius) > App.availW)
      App.dx = -1;
    else if ((App.x - App.radius) < 0) 
      App.dx = 1;

    if ((App.y + App.radius) > App.availH)
      App.dy = -1;
    else if ((App.y - App.radius) < 0) 
      App.dy = 1;

    ctx.clearRect(0,0,App.availW,App.availH); // clear canvas
    ctx.save();

    ctx.fillStyle = "rgba(100, 255, 205, 0.5)";
    ctx.beginPath();
    ctx.arc(App.x, App.y, App.radius, 0, Math.PI*2,true);
    ctx.fill();

    ctx.restore();

}

function init() {
  if (document.body && document.body.offsetWidth) {
   winW = document.body.offsetWidth;
   winH = document.body.offsetHeight;
  }
  if (document.compatMode=='CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth ) {
    winW = document.documentElement.offsetWidth;
    winH = document.documentElement.offsetHeight;
  }
  if (window.innerWidth && window.innerHeight) {
    winW = window.innerWidth;
    winH = window.innerHeight;
  }

  el = document.getElementById("screenFrame");
  el.style["background-color"] = "transparent";
  el.style["color"] = "red";
  el.style.left = "0px";
  el.style.top = "0px";
  el.style.width = winW+"px";
  el.style.height = winH+"px";
  el.style.display="block";

  frame = document.getElementById("frame");
  frame.width = winW;
  frame.height= winH;

  App.availW = winW;
  App.availH = winH;


  if (frame.getContext) {
    ctx = frame.getContext("2d");

    for (var k=0; k<n_of_balls; k++) {
      balls.push(new Ball());
    }

    setInterval("draw(ctx)",1000/30);
  } 

}

// init 
$(document).ready( function() {
  $("#showMap").click( function() {
    $("#map").toggle();
  });

  init();
});

