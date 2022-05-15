var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var linha = input.split("\n"); //separa os elementos
var valores = linha.shift().split(" ")

var PValor = parseFloat(valores.shift()); // pega somente o primeiro elemento do vetor e transforma em int/float
var SValor = parseFloat(valores.shift());
var TValor = parseFloat(valores.shift());

var vetor = [];

vetor.push(PValor)
vetor.push(SValor)
vetor.push(TValor)

var sorted = vetor.sort((a,b) => b-a);

var a = sorted.shift();
var b = sorted.shift();
var c = sorted.shift();

if (a < (b+c)){

    if (a*a == b*b + c*c){
        console.log("TRIANGULO RETANGULO")
    }

    else if (a * a > b * b + c * c){
        console.log("TRIANGULO OBTUSANGULO")
    }

    else if (a*a < b*b + c*c){
        console.log("TRIANGULO ACUTANGULO")
    }
}else 
console.log("NAO FORMA TRIANGULO")

if (a == b && b == c ){
    console.log("TRIANGULO EQUILATERO")
}

else if (a == b || a == c || b == c){
    console.log("TRIANGULO ISOSCELES")
}
