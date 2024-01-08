window.onscroll = function(){navbarScroll()};

var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;

function navbarScroll() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky"); // adicione uma propriedade css chamada stick assim que a barra é movida para baixo, fazendo com que o menu vá junto
  } else {
    navbar.classList.remove("sticky");// vai remover a propriedade stick se rolar para cima a barra horizontal. 
  }
}


const btn = document.querySelector("#back-to-top");// eu usei dom e selecionei o id do elemento que representar a imagem do botão "voltar ao topo"
btn.addEventListener("click", function() { // adicionei um evento de que quando clicar no elemento é para ele voltar
    window.scrollTo(0, 0);
});

document.addEventListener('scroll',ocultar)
document.addEventListener(aparece)
document.addEventListener(desaparece)


function aparece(){
  if(window.scrollY > 1450){
    btn.style.transition = "linear 0.3s"
    btn.style.padding = "25px"
    btn.style.display = "flex";
    btn.style.opacity = "1"
  } else {
    
  }
  

}



function desaparece(){
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
      aparece()
    } else {
      desaparece()
    }
    

}

// quando clicar na navabar para mobile ele vai mostrar o menu
function tela_celular(){
  var navbar = document.getElementById('menu');
  navbar.classList.toggle('show');
}







