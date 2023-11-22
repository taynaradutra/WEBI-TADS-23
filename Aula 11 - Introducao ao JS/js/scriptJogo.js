function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(parseInt(getRandomArbitrary(0, 3)));

// Deve solicitar nome do Jogador
// Deve solicitar a opção do Jogador (utilizando números)
// Deve gerar número randomico
// Informar qual o nome do jogador e a opção dele
// Informar qual foi a opção do computador
// Apresentar resultado

const jogar = (nomeJogador, opcao) => {
  let opcaoComputador = parseInt(getRandomArbitrary(0, 3));
  alert(`Computador escolheu a opcão: ${opcaoComputador}`);
  alert(`Jogador ${nomeJogador} escolheu a opcão: ${opcao}`);

  if (opcao == opcaoComputador) {
    alert("Empate!");
  } else if (
    // 0 -- Pedra  e 2 -- Tesoura
    (opcao == 0 && opcaoComputador == 2) ||
    // 1 -- Papel  e 0 -- Pedra
    (opcao == 1 && opcaoComputador == 0) ||
    // 2 -- Tesoura e 1 -- Papel
    (opcao == 2 && opcaoComputador == 1)
  ) {
    alert(`Jogador ${nomeJogador} ganhou!`);
  } else {
    alert("Computador venceu!");
  }
};
var nomeJogador = prompt("Informe seu nome");

var opcao = prompt(`
    Selecione uma opção: \n
    0 - Pedra \n
    1 - Papel \n
    2 - Tesoura
`);

opcao = parseInt(opcao);
jogar(nomeJogador, opcao);
