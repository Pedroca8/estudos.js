// par nome/valor
const saudacao = 'opa' // contexto léxico 1 

function exec(){
    const saudacao = "falaaa" // constexto lexico 2
    return saudacao
}

const cliente = {
    nome: "pedro",
    idade: 21,
    peso: 90,
    endereco: {
        cep: "trindade",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)