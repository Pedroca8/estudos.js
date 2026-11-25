const valores = [1,2,3,4,5,6,7,8,232,2424]
console.log(valores[0], valores[3])
console.log(valores[4])
console.log(valores[12])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)