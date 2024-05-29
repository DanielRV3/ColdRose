let parcial = 0;
let altura= "77vh"
let nav = false;
let btncel = false;

const subtitulos= document.querySelectorAll(".subtitulo");
const secciones = document.querySelectorAll(".contenido");
const iframes =document.querySelectorAll("iframe");
const menus = document.querySelectorAll(".menu");
const botones=document.querySelectorAll(".button");
const nav_btn = document.querySelectorAll("#boton-nav ul li");
const botonMenu=document.querySelectorAll(".boton-menu img");


function transicion(){
    for(let i=0; secciones.length;i++){
        secciones[i].style.height = altura;
    }
    //document.body.style.overflow = "scroll"
    document.body.style.height = "auto"
}

function reset1(){
    iframes[0].src = "parcial_1/practicas/practica1.html";
    iframes[1].src = "parcial_1/trabajos/reto1.html";
    iframes[2].src = "parcial_1/sistema_solar/sistemasolar.html";
}
function reset2(){
    iframes[0].src = "parcial_2/practica_1/practica1.html";
    iframes[1].src = "parcial_2/practica_4/reto3.html";
    iframes[2].src = "parcial_2/practica_9/siete_barrios.html";
}
function reset3(){
    iframes[0].src = "parcial_3/menu-semana1.html";
    iframes[1].src = "parcial_3/semana2/retos/reto2.html";
    iframes[2].src = "parcial_3/semana3/ahorcado.html";
}
function parcial1(){
    document.body.style.backgroundColor = "rgba(137,163,255,0.65)"
    document.body.style.height = "200vh";

    if(document.body.offsetWidth <= 860){
        btncel=false;
        document.getElementById("selector").style.transition="height 0s, width 0.4s";document.getElementById("selector").style.transition="height 0s, width 0.4s";
        mininav();
    }

    nav_btn[0].style.backgroundColor = "whitesmoke"
    nav_btn[1].style.backgroundColor = "#222222"
    nav_btn[2].style.backgroundColor = "#222222"

    nav_btn[0].style.color = "black"
    nav_btn[1].style.color = "whitesmoke"
    nav_btn[2].style.color = "whitesmoke"

    for(let i=0; i<botones.length;i++){
        botones[i].style.backgroundColor = "rgba(47,46,80,0.74)";
    }
    for (let i = 0; i < secciones.length; i++) {
        ocultar(i);
        subtitulos[i].style.backgroundColor = "#3D405B";
        secciones[i].style.backgroundColor = "rgba(114,120,146,0.74)";
        secciones[i].style.height = "0";
        iframes[i].style.backgroundColor = "#eaeeff";
        secciones[i].getElementsByClassName("menu")[0].getElementsByClassName("button")[0].style.backgroundColor = "#044069";
    }
    for(let i = 0; i<botonMenu.length; i++){
        botonMenu[i].style.filter = "hue-rotate(0deg)";
    }
    for(let i=0;i<menus.length;i++){
        menus[i].style.backgroundColor = "rgba(87,102,162,0.74)";
        menus[i].style.overflowY = "hidden"
    }

    altura="77vh";
    setTimeout(transicion, 1100);
    setTimeout(reset1,1100);

    parcial=0;
}
function parcial2(){
    document.body.style.backgroundColor = "rgba(172,255,166,0.65)";
    document.body.style.height = "200vh";

    if(document.body.offsetWidth <=860){
        btncel=false;
        document.getElementById("selector").style.transition="height 0s, width 0.4s";
        mininav();
    }

    nav_btn[0].style.backgroundColor = "#222222"
    nav_btn[1].style.backgroundColor = "whitesmoke"
    nav_btn[2].style.backgroundColor = "#222222"

    nav_btn[0].style.color = "whitesmoke"
    nav_btn[1].style.color = "black"
    nav_btn[2].style.color = "whitesmoke"

    for(let i=0; i<botones.length;i++){
        botones[i].style.backgroundColor = "rgba(40,68,56,0.74)";
    }
    for(let i = 0; i<secciones.length; i++){
        ocultar(i);
        subtitulos[i].style.backgroundColor = "#3b5e3b";
        secciones[i].style.backgroundColor = "rgba(115,152,114,0.74)";
        secciones[i].style.height = "0";
        iframes[i].style.backgroundColor = "#edffea";
        secciones[i].getElementsByClassName("menu")[1].getElementsByClassName("button")[0].style.backgroundColor = "rgb(58, 107, 35)";
    }
    for(let i = 0; i<botonMenu.length; i++){
        botonMenu[i].style.filter = "hue-rotate(250deg)";
    }
    for(let i=0;i<menus.length;i++){
        menus[i].style.backgroundColor = "rgba(86,154,85,0.74)";
        menus[i].style.overflowY = "auto"
    }
    botones[0].style.backgroundColor = "rgb(58, 107, 35)";

    altura="77vh";
    setTimeout(transicion, 1100);
    setTimeout(reset2,1100);

    parcial=1;
}
function parcial3(){
    document.body.style.backgroundColor = "rgba(255,136,107,0.65)";
    document.body.style.height = "200vh";
    //document.body.style.overflow = "hidden";
    if(document.body.offsetWidth <=860){
        btncel=false;
        document.getElementById("selector").style.transition="height 0s, width 0.4s";
        mininav();
    }

    nav_btn[0].style.backgroundColor = "#222222"
    nav_btn[1].style.backgroundColor = "#222222"
    nav_btn[2].style.backgroundColor = "whitesmoke"

    nav_btn[0].style.color = "whitesmoke"
    nav_btn[1].style.color = "whitesmoke"
    nav_btn[2].style.color = "black"

    for(let i=0; i<botones.length;i++){
        botones[i].style.backgroundColor = "rgba(82,35,35,0.74)";
    }
    for(let i = 0; i<secciones.length; i++){
        ocultar(i);
        subtitulos[i].style.backgroundColor = "#774033";
        secciones[i].style.backgroundColor = "rgba(187,111,95,0.74)";
        secciones[i].style.height = "0";
        iframes[i].style.backgroundColor = "#ffeaea";
        secciones[i].getElementsByClassName("menu")[2].getElementsByClassName("button")[0].style.backgroundColor = "#b02d2d";
    }
    for(let i = 0; i<botonMenu.length; i++){
        botonMenu[i].style.filter = "hue-rotate(500deg)";
    }
    for(let i=0;i<menus.length;i++){
        menus[i].style.backgroundColor = "rgba(194,94,74,0.74)";
        menus[i].style.overflowY = "hidden"
    }

    altura="77vh";
    setTimeout(transicion, 1100);
    setTimeout(reset3,1100);

    parcial=2;
}

function mostrar(seccion) {
    let menuParcial = document.getElementsByClassName("contenido")[seccion].getElementsByClassName("menu")[parcial];
    let botonesSeccion = menuParcial.getElementsByClassName("button");
    if(document.body.offsetWidth >= 1200){
        iframes[seccion].style.width = "75vw";
        menuParcial.style.width = "20vw";
    }else{
        iframes[seccion].style.width = "70vw";
        menuParcial.style.width = "25vw";
    }
    //document.getElementsByClassName("menu")[x].style.padding = "1%";
    for(let i=0; i<botonesSeccion.length;i++){
        botonesSeccion[i].style.color = "whitesmoke";
        botonesSeccion[i].style.transitionDelay = "0.3s";
    }

    document.getElementsByClassName("abrir")[seccion].style.display = "none";
    document.getElementsByClassName("cerrar")[seccion].style.display = "flex";
}

function ocultar(seccion) {
    let menuParcial = document.getElementsByClassName("contenido")[seccion].getElementsByClassName("menu")[parcial];
    let botonesSeccion = menuParcial.getElementsByClassName("button");

    iframes[seccion].style.width = "95vw";
    menuParcial.style.width = "0";
    //document.getElementsByClassName("menu")[x].style.padding ="1% 0 1% 0";
    for(let i=0; i<botonesSeccion.length;i++){
        botonesSeccion[i].style.color = "transparent";
        botonesSeccion[i].style.transitionDelay = "0s";
    }
    document.getElementsByClassName("abrir")[seccion].style.display = "flex";
    document.getElementsByClassName("cerrar")[seccion].style.display = "none";
}

function navegador() {
    const head = document.querySelector("header");
    const navbar= document.getElementById("selector");
    const altura = head.offsetHeight*0.75;

    if(document.body.offsetWidth >= 860){
        if (window.scrollY >= altura){
            navbar.style.height = "13vh";
            nav=true;
        }else{
            navbar.style.height = "0";
            nav= false;
        }
    }else{
        if (btncel === false && window.scrollY >= altura) {
            navbar.style.transition = "height 0.4s, width 0s";
            mininav();
            nav = true;
        }
        if(window.scrollY < altura){
            navbar.style.transition="height 0.4s, width 0s";
            navbar.style.height = "0";
            btncel= false;
            nav= false;
        }
    }
}

function mininav(){
    document.getElementById("boton-nav").style.display="none";
    document.getElementById("selector").style.width="100vw";
    document.getElementById("selector").style.height="8vh";
    document.getElementById("selector").style.flexDirection="row";
    document.getElementById("selector").style.alignItems="center";
    document.getElementById("titulo").style.margin="0 auto";
    document.getElementById("titulo").querySelectorAll("div")[0].style.fontSize="clamp(2rem, 4vw, 4rem)";
    document.getElementById("titulo").querySelectorAll("div")[1].style.display="none";
}
function maxnav(){
    document.getElementById("boton-nav").style.display="flex";
    document.getElementById("titulo").style.margin="0 auto 0 2vw";
    document.getElementById("titulo").querySelectorAll("div")[0].style.fontSize="clamp(1.5rem, 2.5vw, 2.5rem)";
    document.getElementById("titulo").querySelectorAll("div")[1].style.display="unset";
}

function mostrarnav(){
    if(btncel===false){
        document.getElementById("boton-nav").style.display="flex";
        document.getElementById("selector").style.transition="height 0.4s, width 0s";
        document.getElementById("selector").style.flexDirection="column";
        document.getElementById("selector").style.alignItems="flex-start";
        document.getElementById("selector").style.width="25vw";
        document.getElementById("selector").style.height="100vh";
        document.getElementById("titulo").style.margin="0 2vw auto 2vw";
        document.getElementById("titulo").querySelectorAll("div")[0].style.fontSize="clamp(1.3rem, 2vh, 2rem)";
        document.getElementById("titulo").querySelectorAll("div")[1].style.display="unset";
        btncel = true;
    }else{
        document.getElementById("selector").style.transition="height 0s, width 0.4s";
        mininav();
        btncel = false;
    }
}
function botonesMenu(seccion,numboton){
    let botonM = document.getElementsByClassName("contenido")[seccion].getElementsByClassName("menu")[parcial].querySelectorAll(".button");
    for(let i=0;i<botonM.length;i++){
        if(parcial===0){
            botonM[i].style.backgroundColor = "rgba(47,46,80,0.74)";
        }
        if(parcial===1){
            botonM[i].style.backgroundColor = "rgba(40,68,56,0.74)";
        }
        if(parcial===2){
            botonM[i].style.backgroundColor = "rgba(82,35,35,0.74)";
        }
    }
    if(parcial===0){
        botonM[numboton].style.backgroundColor = "#044069";
    }
    if(parcial===1){
        botonM[numboton].style.backgroundColor = "rgb(58, 107, 35)";
    }
    if(parcial===2){
        botonM[numboton].style.backgroundColor = "#b02d2d";
    }
}
function sites(){
    document.getElementsByName("practicas")[0].src = "media_index/sabaton.html";
}
function canva(){
    document.getElementsByName("practicas")[0].src = "media_index/sabaton_canva.html";
}
function check(){
    const navbar= document.getElementById("selector");
    if(nav===true){
        if (document.body.offsetWidth >= 860) {
            navbar.style.height = "13vh";
            maxnav();
        } else if(btncel===false){
            navbar.style.height = "8vh";
            mininav();
        }
    }else{
        navbar.style.height = "0";
    }

    if(document.body.offsetWidth >860){
        document.getElementById("btn-cel").style.display="none";
    }else{
        document.getElementById("btn-cel").style.display="flex";
    }

}
window.addEventListener("resize",check);