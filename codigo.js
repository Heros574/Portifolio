document.addEventListener("DOMContentLoaded",function(){
    var projetosX = document.getElementById("designe")
    projetosX.classList.add("d-none")
    projetosX.classList.remove("d-block")
})


function liga(x,y){
    var projetosX = document.getElementById(x)
    var projetosY = document.getElementById(y)
    projetosY.classList.remove("d-none")
    projetosY.classList.add("d-block")
    //x desliga e liga y
    projetosX.classList.add("d-none")
    projetosX.classList.remove("d-block")



}