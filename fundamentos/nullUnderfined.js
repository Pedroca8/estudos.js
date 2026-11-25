let valor; // nao inicializada 
console.log(valor);

valor = null; // asuencia de valor 
console.log(valor);
//console.log(valor.toString())// console.log erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 222
console.log(produto)

produto.preco = undefined // evite artibuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)