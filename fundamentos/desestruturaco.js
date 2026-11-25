// novo recurso do ES2015
const pessoa = {
    nome: "pedro",
    idade: 21,
    endereco: {
        localizacao: "rua triste",
         numero: 1000,
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)

const { endereco: { localizacao, numero}} = pessoa
console.log(localizacao, numero)

const {conta:{ag, num}} = pessoa
console.log(ag, num)
