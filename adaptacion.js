const col_aux = document.getElementsByClassName("col-aux")
function navegador(){
    let width = document.body.offsetWidth
    if (width>=768){
        document.getElementById("nav-pc").style.display = "flex";
        document.getElementById("nav-cel").style.display = "none";

        document.getElementById("fondo-pc").style.display = "flex";
        document.getElementById("fondo-cel").style.display = "none";

        for(let i=0;i<col_aux.length;i++) {
            col_aux[i].style.display = "flex";
        }
    }else{
        document.getElementById("nav-pc").style.display = "none";
        document.getElementById("nav-cel").style.display = "flex";

        document.getElementById("fondo-pc").style.display = "none";
        document.getElementById("fondo-cel").style.display = "flex";

        for(let i=0;i<col_aux.length;i++) {
            col_aux[i].style.display = "none";
        }
    }
}

function desplegar() {
    let bloques = document.getElementById("myLinks");
    if (bloques.style.display === "block") {
        bloques.style.display = "none";
    } else {
        bloques.style.display = "block";
    }
}

window.addEventListener("resize",navegador);