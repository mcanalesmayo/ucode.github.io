var angle = 0,
img = document.getElementById('screw');

$(document).ready(setInterval(function() {
  img = document.getElementById('screw');
  angle = (angle + 1) % 360;
  img.css("background-color", "yellow");
  img.style = "transform:rotate(" + angle + "deg);";
}, 300));
