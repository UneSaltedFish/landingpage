



function circle2(){
  document.getElementById("circle").src = "circle1.png";
}
function circle1(){
  document.getElementById("circle").src = "circle.png";
}
function right2(){
  document.getElementById("right").src = "right2.png";
  document.getElementById("right1").style.opacity=1;
  document.getElementById("right2").style.opacity=1;
}
function right1(){
  document.getElementById("right").src = "right.png";
  document.getElementById("right1").style.opacity=0;
  document.getElementById("right2").style.opacity=0;
}
function bottom2(){
  document.getElementById("bottom").src = "bottom2.png";
  document.getElementById("bottomtext").style.opacity=1;

}
function bottom1(){
  document.getElementById("bottom").src = "bottom.png";
  document.getElementById("bottomtext").style.opacity=0;

}
