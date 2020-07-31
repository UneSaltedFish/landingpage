

if(performance.navigation.type == 2){
   location.reload(true);
}

function circle2(){
  document.getElementById("circle").src = "pictures/circle1.png";
}
function circle1(){
  document.getElementById("circle").src = "pictures/circle.png";
}
function right2(){
  document.getElementById("right").src = "pictures/right2.png";
  document.getElementById("right1").style.opacity=1;
  document.getElementById("right2").style.opacity=1;
}
function right1(){
  document.getElementById("right").src = "pictures/right.png";
  document.getElementById("right1").style.opacity=0;
  document.getElementById("right2").style.opacity=0;
}
function bottom2(){
  document.getElementById("bottom").src = "pictures/bottom2.png";
  document.getElementById("bottomtext").style.opacity=1;

}
function bottom1(){
  document.getElementById("bottom").src = "pictures/bottom.png";
  document.getElementById("bottomtext").style.opacity=0;

}
function above2(){
  document.getElementById("above").src = "pictures/above2.png";
}
function above1(){
  document.getElementById("above").src = "pictures/above.png";
}
function left2(){
  document.getElementById("left").src = "pictures/left2.png";
}
function left1(){
  document.getElementById("left").src = "pictures/left.png";
}
