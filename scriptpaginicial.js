window.onscroll = function(){myFunction()};

var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


const btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

document.addEventListener('scroll',ocultar)
document.addEventListener(anima)
document.addEventListener(desanima)


function anima(){
  if(window.scrollY > 1450){
    btn.style.transition = "linear 0.3s"
    btn.style.padding = "25px"
    btn.style.display = "flex";
    btn.style.opacity = "1"
  } else {
    
  }
  

}



function desanima(){
  if(window.scrollY < 1450){
    btn.style.transition = "linear 0.3s"
    btn.style.bottom = "0px"
    btn.style.opacity = "0"
    
  } 
  if(window.scrollY < 1300){
    btn.style.display = "none";
  }
}

function ocultar(){

    if(window.scrollY > 1450){
      btn.style.display = "flex";
      anima()
    } else {
      desanima()
    }
    

}


function myFuncti(){
  var navbar = document.getElementById('menu');
  navbar.classList.toggle('show');
}







