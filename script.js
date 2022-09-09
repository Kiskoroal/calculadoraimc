//formula imc = peso(kg)/(altura^2)
//Peso inferior al normal	Menos de 18.5
//Normal	18.5 – 24.9
//Peso superior al normal	25.0 – 29.9
//Obesidad	Más de 30.0

var peso = document.getElementById('peso').value;
var alturacm = document.getElementById('altura').value;
var alturaenm = alturacm / 100;
var inputresultado = document.getElementById('resultado');
var inputPeso = document.getElementById('peso');
var inputAltura = document.getElementById('altura');

function calcular(){
   var resultado = peso/(alturaenm * alturaenm);
   if (resultado < 18.5) {
     return inputresultado.value = "Está en estado de delgadez con un IMC de: " + resultado;
   } else if (resultado > 18.5 && resultado < 25){
     return inputresultado.value = "Está en estado normal con un IMC de: " + resultado;
   } else if (resultado >= 25 && resultado <= 30) {
     return inputresultado.value = "Está en estado de sobrepeso con un IMC de: " + resultado;
   } else if (resultado >= 30 ) {
     return inputresultado.value = "Está en estado de obesidad con un IMC de: " + resultado;

   }
}

var btn = document.getElementById('btn');
btn.addEventListener('click', calcular);

if (inputPeso == true) {
  window.location.reload();
}