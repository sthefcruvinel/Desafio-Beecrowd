var linha = input.split("\n"); //separa os elementos

var salario = parseFloat(linha.shift()); // pega somente o primeiro elemento do vetor e transforma em int/float

var reajuste = 0;

var novoSalario = 0;

var percentual = 0;

if (salario >= 0 && salario <= 400.00){
    reajuste = salario * 0.15;
    novoSalario = salario + reajuste;
    percentual = 0.15 * 100;
}

if (salario >= 400.01 && salario <= 800.00){
    reajuste = salario * 0.12;
    novoSalario = salario + reajuste;
    percentual = 0.12 * 100;
}

if (salario >= 800.01 && salario <= 1200.00){
    reajuste = salario * 0.10;
    novoSalario = salario + reajuste;
    percentual = 0.10 * 100;
}

if (salario >= 1200.01 && salario <= 2000.00){
    reajuste = salario * 0.07;
    novoSalario = salario + reajuste;
    percentual = 0.07 * 100;
}

if (salario > 2000.00){
    reajuste = salario * 0.04;
    novoSalario = salario + reajuste;
    percentual = 0.04 * 100;
}



console.log("Novo salario: " + novoSalario.toFixed(2) + "\nReajuste ganho: " + reajuste.toFixed(2) + "\nEm percentual: " + parseInt(percentual) + " %")
