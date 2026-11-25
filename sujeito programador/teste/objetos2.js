class Celular {
    constructor(){
        this.cor = "red";
    };
        ligar(){
            console.log("uma ligação");
            return "ligando..."
        };
};
let objeto = new Celular();
console.log(objeto.cor);
