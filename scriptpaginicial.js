window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu","botoes");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
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
    btn.style.padding = "20px"
  } else {
    btn.style.transition = "0.5s"
    btn.style.bottom = "18px"
  }
  

}

function desanima(){
  if(window.scrollY > 1450){
    btn.style.transition = "linear 0.3s"
    
  } else {
    btn.style.bottom = "18px"
  }
}
function ocultar(){

    if(window.scrollY > 1450){
      btn.style.display = "flex";
      anima()
    } else {
      btn.style.display = "none";
      desanima()
    }
    

}






