const readline = require('readline');

// Cria uma interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita a entrada do usuário
rl.question('Digite algo para exibir no console: ', (mensagem) => {
  console.log(mensagem); // Exibe o texto digitado
  rl.close(); // Fecha a interface
});
