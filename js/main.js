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
    //console.log(App.x, App.y, App.availW, App.availH);

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

    ctx.fillStyle = "rgba(200, 255, 200, 0.5)";
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
    function drawMe() {
      draw(ctx);
    }
    setInterval(drawMe,1000/30);
  } 

}

window.onload = function() {
  console.log(1);
  init();
}
