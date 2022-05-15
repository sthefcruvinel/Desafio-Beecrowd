var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linha = input.split("\n"); //separa os elementos
var valores = linha.shift().split(" ")

var hrInicio = parseInt(valores.shift());
var hrFim = parseInt(valores.shift());

var max = 24;
var totalJogo = 0;

duracaoJogo = hrInicio - hrFim;

if (hrInicio >= hrFim){
totalJogo = max - duracaoJogo;
}
else {
totalJogo = hrInicio - hrFim;
totalJogo = totalJogo * -1;
}
console.log("O JOGO DUROU " + totalJogo + " HORA(S)")
