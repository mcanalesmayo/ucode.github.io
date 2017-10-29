var angle = 0,
img = document.getElementById('screw');

$(document).ready(setInterval(function() {
  angle = (angle + 1) % 360;
  img.style = "transform:rotate(" + angle + ");";
}, 300));
