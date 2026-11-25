let area = document.getElementById('area')

function entrar(){
    var nome = prompt("digite seu nome")

    if(nome === '' || nome === null){
        alert("ops algo deu errado")
        area.innerHTML = "clique no botao para entrar..."
    }else{
     area.innerHTML = "bem vindo " + nome + " ";

     let botaoSair = document.createElement("button");
     botaoSair.innerText = "sair da conta";
     botaoSair.onclick = sair;
     area.appendChild(botaoSair);
    }
}

function sair(){
    alert("ate mais")
    area.innerHTML = "voce saiu"
}

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("o aluno foi aprovado " + media)
    }else if(media < 7){
        console.log("o aluno foi reprovado " + media)
    }
}
