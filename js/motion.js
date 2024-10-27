let stars=document.getElementById("star");
let moon=document.getElementById("moon");
let mountains3=document.getElementById("mountains3");
let mountains4=document.getElementById("mountains4");
let river=document.getElementById("river");
let boat=document.getElementById("boat");
let mountains7=document.getElementById("mountains7");
let Name=document.getElementById("name");

window.onscroll=function () {
    let value=scrollY;
    console.log(scrollY)
    stars.style.left = value + 'px';
    moon.style.top= value*3 + 'px';
    mountains3.style.top= value*1.5 + 'px';
    mountains4.style.top= value*1.2 + 'px';
    river.style.top= value + 'px';
    boat.style.top= value + 'px';
    boat.style.left= value*3 + 'px';
    Name.style.fontSize=value*1.2 + 'px';
    if (scrollY >= 69) {
      Name.style.fontSize= 69 + 'px';
      Name.style.position= 'fixed';
      if (scrollY >= 400) {
        Name.style.display="none";
      }
      else{
        Name.style.display="block";
      }
      if (scrollY>115) {
        stars.style.background="linear-gradient(to top, #2196F3, transparent)";
        stars.style.backgroundRepeat="repeat-x"
      }
    }
    
}
