console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
//obj1["nome"] = "bola2"
console.log(obj1.nome)

function obj (nome){
    this.nome = nome // com o this ele ficara publico 
    this.exec = function(){
        console.log("ola mundo...")
    }
}

const obj3 = new obj("mesa")
const obj4 = new obj("cadeia")
console.log(obj3.nome)
console.log(obj4.nome)
obj3.exec()