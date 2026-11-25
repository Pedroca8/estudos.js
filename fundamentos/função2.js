// armaznado uma função en uma variavel 
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 4)

// armazenando uma dunção arrow en uma variavel 
const soma = (a, b) => {
    return a + b 
}

console.log(soma(1,4))

// retorno implícito 
const subtracao = (a, b) => a - b 
console.log(subtracao(5,9))

const imprimir2 = a => console.log(a)
imprimir2('legal!!!')