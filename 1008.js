var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split("\n"); //separa os elementos

var numero = parseInt(valores.shift());//converte em float 

var horasTrabalhadas = parseInt(valores.shift());

var valorHora = parseFloat(valores.shift());

var salario = (horasTrabalhadas * valorHora);

console.log("NUMBER = " + numero + "\nSALARY = U$ " + salario.toFixed(2))
