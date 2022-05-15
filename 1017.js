var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var valores = input.split("\n"); //separa os elementos

var tempoGasto = parseInt(valores.shift());

var velMedia = parseInt(valores.shift());

var distPercorrida = velMedia * tempoGasto;

var totalCombustivel = distPercorrida / 12;

console.log(totalCombustivel.toFixed(3));

