//VALORES random
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
};

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))


// teste meu pedro


// perfeito para fazer jogos de cartas 
function ftp({min = 0 , mis = 8}){
    const valor1 = Math.random() * (min - mis) + mis
    return Math.floor(valor1)
}
const bj1 = { min: 1, mis: 8 }
console.log("role o dado",ftp(bj1))




