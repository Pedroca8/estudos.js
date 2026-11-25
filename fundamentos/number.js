const peso1 = 1.0;
const peso2 = Number('1.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao = 9.748;
const avaliacao2 = 8.293;

const total = avaliacao * peso2 + avaliacao2 * peso1;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)) 
console.log(media.toString()) // em binario   
console.log(typeof media)
console.log(typeof Number)