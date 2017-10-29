var angle = 0,
img = document.getElementById('screw');

$(document).ready(setInterval(function() {
  img = document.getElementById('screw');
  angle = (angle + 1) % 360;
  img.style = "transform:rotate(" + angle + "deg); display:block; margin:auto; max-width:100%; max-height:100%;";
}, 30));
