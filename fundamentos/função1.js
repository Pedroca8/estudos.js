// funçao sem retorno 
function imprimirSoma(a,b){
    console.log(a * b)
};

imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2,3,4,5,6,7,2);
imprimirSoma();

//função que tem valor
function soma(a,b){
    return a * b
};

console.log(soma(2,5))
console.log(soma(2))
console.log(soma())

function soma1(a = 1,b = 1){
    return a * b
};

console.log(soma1(2,5))
console.log(soma1(2))
console.log(soma1())
