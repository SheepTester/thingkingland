var ctx = 0;

// ===== C =====
ctx = document.getElementById("c").getContext("2d");
ctx.fillStyle = "#CCC";
ctx.fillRect(0,0,1000,500);
ctx.fillStyle = "#555";

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.fill();

ctx.font = "30px Arial";
ctx.fillText("text",20,400);

ctx.strokeStyle = "#555";
ctx.moveTo(0,0);
ctx.lineTo(1000,500);
ctx.stroke();

var g = ctx.createLinearGradient(200,100,400,300);
g.addColorStop(0,"#555");
g.addColorStop(0.5,"#ccc");
ctx.fillStyle = g;
ctx.fillRect(200,100,200,200);

// ===== D =====
ctx = document.getElementById("d").getContext("2d");
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (30, 30, 55, 50);
ctx.fillStyle = "rgba(200, 0, 10, 0.5)";
ctx.fillRect (50, 10, 75, 30);