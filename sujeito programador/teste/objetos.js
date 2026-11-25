let celular = function(){
    this.cor = "red";
    this.ligar =  function(){
        console.log("uma ligação");
        return "ligando..."
    };
};
let objeto = new celular();
console.log(objeto.ligar());
