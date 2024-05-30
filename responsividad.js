const col_aux = document.getElementsByClassName("col-aux");
const secciones = document.getElementsByTagName("section")

function navegador(){
    let width = document.body.offsetWidth
    if (width>=768){    //diseño de escritorio
        document.getElementById("nav-pc").style.display = "flex";
        document.getElementById("nav-cel").style.display = "none";

        document.getElementById("fondo-pc").style.display = "flex";
        document.getElementById("fondo-cel").style.display = "none";

        for(let i=0;i<col_aux.length;i++) {
            col_aux[i].style.display = "flex";
        }
        for(let i=0;i<secciones.length;i++){
            secciones[i].getElementsByTagName("h2")[0].style.scrollSnapAlign = "start";
        }
        document.getElementsByTagName("main")[0].style.scrollPaddingTop = "0";
    }else{          //diseño de celular
        document.getElementById("nav-pc").style.display = "none";
        document.getElementById("nav-cel").style.display = "block";

        document.getElementById("fondo-pc").style.display = "none";
        document.getElementById("fondo-cel").style.display = "flex";

        for(let i=0;i<col_aux.length;i++) {
            col_aux[i].style.display = "none";
        }
        for(let i=0;i<secciones.length;i++){
            secciones[i].getElementsByTagName("h2")[0].style.scrollSnapAlign = "none";
        }
        document.getElementsByTagName("main")[0].style.scrollPaddingTop = "55px";
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
function copiar(){
    navigator.clipboard.writeText("https://danielrv3.github.io/ColdRose/");
}

window.addEventListener("resize",navegador);

