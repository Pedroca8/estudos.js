const escola = "pedro2";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf("3"));

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('escola '.concat(escola).concat("!"));
console.log('escola '.concat(escola).concat + "!");
console.log(escola.replace(/\e/,'d'));
console.log(escola.replace(2,'d'));

console.log("ana,maria,pedro".split(/,/));
console.log("ana,maria,pedro".split('.'));
console.log("ana,maria,pedro".split(/./));
console.log("ana,maria,pedro".split(','));

