window.onload = inicio;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var entrada;
var peso;
var planeta;
var peso_final;

function inicio() {
  entrada = prompt("Ingrese su peso");
  peso = parseInt(entrada);
  planeta = parseInt(prompt("Elige tu planeta:\n1: Marte, 2: Jupiter"));

  if (planeta == 1) {
    peso_final = (peso * g_marte) / g_tierra;
    planeta = "Marte";
    respuesta();
  } else if (planeta == 2) {
    peso_final = (peso * g_jupiter) / g_tierra;
    planeta = "Jupiter";
    respuesta();
  } else {
    respuestaErrada();
  }
}

function respuesta() {
  peso_final = peso_final.toFixed(2);
  planeta = planeta.toUpperCase();
  document
    .querySelector(".box")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="azul">Tu peso en <span>${planeta}</span> sería : <span>${peso_final}</span> kgs</div>`
    );
}
function respuestaErrada() {
  document
    .querySelector(".box")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="rojo"> Ingrese un planeta correcto </div>`
    );
}
