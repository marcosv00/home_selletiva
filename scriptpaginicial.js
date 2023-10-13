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

function anima(){
  if(window.scrollY > 1450){
    btn.style.transition = "linear 0.3s"
    btn.style.padding = "30px"
    btn.style.opacity = "1"
  } else {
    
  }
  

}



function desanima(){
  if(window.scrollY < 1450){
    btn.style.transition = "linear 0.2s"
    btn.style.bottom = "0px"
    btn.style.opacity = "0"
  } else {

  }
}

function desan(){
  if(window.scrollY < 1000){
       btn.style.display = 'none'
  } else {
    
  }
}



function ocultar(){

    if(window.scrollY > 1450){
      btn.style.display = "flex";
      anima()
    } else {
      btn.style.transition = "linear 0.3s"
      desanima()
      desan()
     

    }
    

}






