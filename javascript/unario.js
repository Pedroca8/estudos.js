// escreva algo simples sem comfução
// refaturando

let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

/*
----------exemplo------------

    js antes:

        let a = 10
        let b = 20
        let soma = a + b
        console.log(soma)

    js refatorando:

        function somar(a, b) {
        return a + b
        }
        console.log(somar(10, 20))

*/
