var angle = 0,
img = document.getElementById('screw');

$(document).ready(setInterval(function() {
  img = document.getElementById('screw');
  angle = (angle + 1) % 360;
  img.style = "transform:rotate(" + angle + "deg); z-index: 1;";
}, 30));
