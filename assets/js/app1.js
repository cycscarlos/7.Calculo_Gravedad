window.onload = inicio;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso;
var planeta;
var peso_final;

function inicio() {
  peso = parseInt(prompt("Ingrese su peso"));
  planeta = prompt("Ingrese el planeta: marte o jupiter");
  planeta = planeta.toUpperCase();

  if (planeta == "MARTE") {
    peso_final = (peso * g_marte) / g_tierra;
    respuesta();
  } else {
    if (planeta == "JUPITER") {
      peso_final = (peso * g_jupiter) / g_tierra;
      respuesta();
    } else {
      respuestaErrada();
    }
  }
}
function respuesta() {
  peso_final = peso_final.toFixed(2);
  document
    .querySelector(".box")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="azul">Tu peso en ${planeta} sería : ${peso_final} kgs</div>`
    );
}
function respuestaErrada() {
  document
    .querySelector(".box")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="rojo"> Ingrese un nombre de planeta correcto </div>`
    );
}
