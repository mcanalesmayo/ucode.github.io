var angle = 0,
img = document.getElementById('screw');

$(document).ready(
  setInterval(
    function() {
      img = document.getElementById('screw');
      angle = (angle + 1) % 360;
      img.style = "transform:rotate(" + angle + "deg); display:block; margin:auto; max-width:30%; max-height:30%; margin-top:5%; margin-bottom:5%;";
  }, 30)

);
