function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([31,32]))
console.log(rand([992]))
console.log(rand([,32]))
console.log(rand([]))
