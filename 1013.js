var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split("\n"); //separa os elementos

linha = valores.shift().split(" ")

var a = parseInt(linha.shift());
var b = parseInt(linha.shift());
var c = parseInt(linha.shift());

var maiorAB = (a  + b + Math.abs(a-b)) / 2;
var maiorMaior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;


console.log(maiorMaior + " eh o maior");
