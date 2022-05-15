var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var linha = input.split("\n"); //separa os elementos

var numberArray = linha.map(Number);//converte array de string em array de números

var a = 0;
var g = 0;
var d = 0;

for (let i = 0; i<numberArray.length; i++){
    var x = parseInt(linha.shift())

        if(x == 1){
            a++;
        }
        else if(x == 2){
            g++;
        }
        else if(x == 3){
            d++;
        }
    
    if(x == 4){
        console.log("MUITO OBRIGADO" + "\nAlcool: " + a + "\nGasolina: " + g + "\nDiesel: " + d);
    }
}
