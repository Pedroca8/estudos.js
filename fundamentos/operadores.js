// novo resurso do ES2025

const pessoa = {
    nome: "ana",
    idade: "21",
    endereco: {
        local: "rua trindade",
        numero: 123
    }
}

const{nome, idade} = pessoa
console.log(nome,idade)
const {nome: n, idade: i} = pessoa
console.log(i,n)