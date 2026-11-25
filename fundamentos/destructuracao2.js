const [a] = [10]
console.log(a)

const [n1,n2,n3,n4, n5 = 0] = [10,21,2,34,90]
console.log(n1,n2,n3,n4,n5)

const [, [, nota]] = [[, 8,8], [,232,3,23]]
console.log(nota)