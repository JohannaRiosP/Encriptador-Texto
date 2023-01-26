function visualizar() {
    document.querySelector(".muhneco").style.display = "none";
    document.querySelector(".ningun-mensaje").style.display = "none";
    document.querySelector(".ingrese-mostrar").style.display = "none";
    document.querySelector(".mostrar-textarea").style.display = "show";
    document.querySelector(".mostrar-textarea").style.display = "inherit";
    document.querySelector(".boton-copiar").style.display = "show";
    document.querySelector(".boton-copiar").style.display = "inherit"; 
    document.querySelector(".ingrese-textarea").value = "";
  }

function encriptar(){
    var text = document.querySelector(".ingrese-textarea").value.toLowerCase();
    var newtext=text.replace(/e/igm,"enter");
    var newtext=newtext.replace(/i/igm,"imes");
    var newtext=newtext.replace(/a/igm,"ai");
    var newtext=newtext.replace(/o/igm,"ober");
    var newtext=newtext.replace(/u/igm,"ufat");
    visualizar();
    document.querySelector(".mostrar-textarea").innerHTML = newtext;
}

function desencriptar(){
    var text = document.querySelector(".ingrese-textarea").value.toLowerCase();
    var newtext=text.replace(/enter/gm, "e");
    var newtext=newtext.replace(/imes/gm, "i");
    var newtext=newtext.replace(/ai/gm, "a");
    var newtext=newtext.replace(/ober/gm, "o");
    var newtext=newtext.replace(/ufat/gm, "u");
    visualizar();
    document.querySelector(".mostrar-textarea").innerHTML = newtext;
}

function copiar(){
    var copy = document.querySelector(".mostrar-textarea")
    navigator.clipboard.writeText(copy.value);
}

var buttonE = document.querySelector(".boton-encriptar");
buttonE.onclick = encriptar;

var buttonD = document.querySelector(".boton-desencriptar");
buttonD.onclick = desencriptar;

var buttonC = document.querySelector(".boton-copiar");
buttonC.onclick = copiar;