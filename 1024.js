var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var linha = input.split("\n"); //separa os elementos

var qtd = linha.shift();

for (let i = 0; i < qtd; i++){
    var string = linha.shift();
    const msgEtapa1 = novaMensagem(string)
    const msgEtapa2 = inverterString(msgEtapa1)
    const msgEtapa3 = deslocarMetade(msgEtapa2)
    console.log(msgEtapa3)
}

function ASCII(caractere){
    return caractere.charCodeAt(0)
}

function letra(caractere){
    const codigo = ASCII(caractere)
    if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)){
        return true;
    }else{
    return false;
    }
}

function converteCaractere(codigo){
    return String.fromCharCode(codigo);
}

function deslocarASCII(caractere, pos){
    const codigo = ASCII(caractere)
    const novoCodigo = codigo + pos
    const novoCaractere = converteCaractere(novoCodigo)
    
    return novoCaractere;
}

function novaMensagem(mensagem){

    let novaMensagem = ''

    for (caractere of string){
        if (letra(caractere)){
            const criptografado = deslocarASCII(caractere, 3)
            novaMensagem += criptografado
        }
        else{
            novaMensagem += caractere
        }
    }
    return novaMensagem;
}

function inverterString(texto){
    let novaMsg = ''
    for (let i = texto.length - 1; i >= 0; i--){
        novaMsg += texto[i];
    }
    return novaMsg
}

function deslocarMetade(mensagem){
    const metade = Math.trunc(mensagem.length / 2)

    let newMessage = ''

    for (let i = 0; i < mensagem.length; i++){
        if (i < metade){
            newMessage += mensagem[i]
        }else{
            newMessage += deslocarASCII(mensagem[i], -1)
        }
    }
    return newMessage;
}
