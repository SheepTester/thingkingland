/* SEAN MADE THIS https://plus.google.com/u/0/+SeanYentheHumansperson */
document.styleSheets[0].addRule('::selection', 'background: rgba(0, 188, 212, 0.4);');
/* CREATE SVG */
var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
s.id = "BILLYNEVERDIED";
var pff = "position:fixed;top:0;left:0;z-index:1000;height:100vh;width:100vw;-moz-user-select: -moz-none;-khtml-user-select: none;-webkit-user-select: none;-o-user-select: none;user-select: none;cursor: crosshair;";
s.style = "pointer-events:none;" + pff;
document.body.appendChild(s);
/* GET FONT */
var ui = document.createElement("link");
ui.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
ui.rel = "stylesheet";
document.head.appendChild(ui);
/* CREATE UI */
ui = document.createElement("ul");
ui.id = "MAGICBAR";
ui.style = "z-index:1001;padding:0;margin:0;position:fixed;top:10px;left:10px;background:rgba(255,255,255,0.8);border-radius:15px;";
var ico;
/* POINTER */
ico = document.createElement("li");
ico.className = "CLICK ACTIV";
ico.id = "POINTER";
ico.style = "border:none";
ico.title = "Normally use mouse";
ico.innerHTML = '<i style="font-size:20px;color:#555;border-radius:10px;"class="material-icons">mouse</i>';
ui.appendChild(ico);
/* DRAWER */
ico = document.createElement("li");
ico.className = "CLICK";
ico.id = "DRAWER";
ico.title = "Draw";
ico.innerHTML = '<i style="font-size:20px;color:#555;border-radius:10px;"class="material-icons">create</i>';
ui.appendChild(ico);
/* ERASER 
ico = document.createElement("li");
ico.className = "CLICK";
ico.id = "ERASER";
ico.title = "Erase";
ico.innerHTML = '<i style="font-size:20px;color:#555;border-radius:10px;"class="material-icons">remove_circle_outline</i>';
ui.appendChild(ico);*/
/* UNDOER */
ico = document.createElement("li");
ico.className = "CLICK";
ico.id = "UNDOER";
ico.title = "Undo";
ico.innerHTML = '<i style="font-size:20px;color:#555;border-radius:10px;"class="material-icons">undo</i>';
ui.appendChild(ico);
/* CLEARER */
ico = document.createElement("li");
ico.className = "CLICK";
ico.id = "CLEARER";
ico.title = "Clear";
ico.innerHTML = '<i style="font-size:20px;color:#555;border-radius:10px;"class="material-icons">delete</i>';
ui.appendChild(ico);
/* MAKER */
ico = document.createElement("li");
ico.className = "CLICK";
ico.id = "MAKER";
ico.title = "CREDITS: Me, Google's Material Icons, and the Internet";
ico.innerHTML = '<a href="https://plus.google.com/u/0/+SeanYentheHumansperson"><i style="font-size:20px;color:#555;border-radius:10px;"class="material-icons">person</i></a>';
ui.appendChild(ico);
/* CLOSER */
ico = document.createElement("li");
ico.className = "CLICK";
ico.id = "CLOSER";
ico.title = "Close";
ico.innerHTML = '<i style="font-size:20px;color:#F44336;border-radius:10px;"class="material-icons">close</i>';
ui.appendChild(ico);
document.body.appendChild(ui);
document.styleSheets[0].addRule('#MAGICBAR', '-moz-user-select: -moz-none;-khtml-user-select: none;-webkit-user-select: none;-o-user-select: none;user-select: none;');
document.styleSheets[0].addRule('#MAGICBAR .CLICK', 'display:inline-block;height:20px;padding:5px;border-left:1px solid rgba(0,0,0,0.1);cursor: default;');
document.styleSheets[0].addRule('#MAGICBAR .CLICK i:hover', 'background: rgba(0,0,0,0.1);');
document.styleSheets[0].addRule('#MAGICBAR .ACTIV i', 'border:1px solid rgba(0,0,0,0.1);');
document.styleSheets[0].addRule('#MAGICBAR .ACTIV', 'padding:4px;');
/* DRAW WITH MOUSE */
var path, flag = false,
  dot_flag = false,
  uh, mode = "POINTER";
document.addEventListener("mousemove", function(e) {
  if (flag) {
    stuff('move', e);
  }
});
document.addEventListener("mousedown", function(e) {
  if (mode == "DRAWER") {
    stuff('down', e);
  }
});

function erase(tt) {
  if (mode == "ERASER") {
    document.getElementById('BILLYNEVERDIED').removeChild(tt);
  }
  console.log(mode + tt);
}
document.addEventListener("mouseup", function(e) {
  if (flag) {
    stuff('up', e);
  }
});

function stuff(r, e) {
  if (r == 'down') {
    uh = "";
    flag = true;
    dot_flag = true;
    if (dot_flag) {
      uh += e.clientX + "," + e.clientY;
      path = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      path.className = "POLEH";
      path.setAttribute("onclick", "erase(this);");
      path.setAttribute("style", "stroke:rgba(0,0,0,0.7);stroke-width:5px;fill:none;");
      document.getElementById('BILLYNEVERDIED').appendChild(path);
      dot_flag = false;
    }
  }
  if (r == 'up') {
    path.setAttribute("points", uh);
    flag = false;
    if (uh.match(/,/g).length < 6) {
      delLast();
    }
  }
  if (r == 'move') {
    uh += " " + e.clientX + "," + e.clientY;
    path.setAttribute("points", uh);
  }
}
/* SWITCH BETWEEN THE MAGICS */
document.getElementById("MAGICBAR").addEventListener("click", function(e) {
  if (!flag && ["DRAWER", "ERASER", "POINTER"].includes(e.target.parentElement.id)) {
    mode = e.target.parentElement.id;
    document.querySelector(".ACTIV").className =
      document.querySelector(".ACTIV").className.replace(/(?:^|\s)ACTIV(?!\S)/g, '');
    e.target.parentElement.className += " ACTIV";
    if (mode == "POINTER") {
      document.getElementById("BILLYNEVERDIED").style = "pointer-events:none;" + pff;
    } else if (mode == "DRAWER") {
      document.getElementById("BILLYNEVERDIED").style = "pointer-events:auto;" + pff;
    }
  }
  if (e.target.parentElement.id == "UNDOER") {
    delLast();
  }
  if (e.target.parentElement.id == "CLEARER") {
    var whoo = document.getElementById("BILLYNEVERDIED");
		while (whoo.firstChild) {
				whoo.removeChild(whoo.firstChild);
		}
  }
  if (e.target.parentElement.id == "CLOSER") {
    document.body.removeChild(document.getElementById("BILLYNEVERDIED"));
    document.body.removeChild(document.getElementById("MAGICBAR"));
  }
});

function delLast() {
  var whoo = document.getElementById("BILLYNEVERDIED");
  whoo.removeChild(whoo.childNodes[whoo.childNodes.length - 1]);
}
