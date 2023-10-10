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

function ocultar(){
    if(window.scrollY > 1600){
      btn.style.display = "flex"
      
    } else {
      btn.style.display = "none"
    }

}

ocultar()

