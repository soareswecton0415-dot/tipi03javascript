/* Exercicio1- Bolo de pote (Switch-Sabor)
Pergunta: Uma empreendedora vende bolos de pote.
1- Chocolate
2-Morango
3-Leite ninho
Crie um programa que receba o numero do sabor e mostre o sabor escolhido
utilizando o switch
 */

let sabor = 2;

switch (sabor) {
  case 1:
    console.log("Chocolate");
    break;

  case 2:
    console.log("Morango");
    break;

  case 3:
    console.log("Leite Ninho");
    break;

  default:
    console.log("Opção inválida");
}


/*Exercicio 2- confeitaria (While-produçao de Bolos)
Pergunta:
uma confeiteira precisa produzir 5 bolos para uma encomenda.
crie um programa que utilize while para mostrar no console a produção de cada bolo
até completar os 5
 */

let quantidade = 1;

while (quantidade <= 5) {
  console.log("Produzindo bolo número " + quantidade);
  quantidade++;
}

// exercício 3
// Opção escolhida pelo cliente
let opcao = 3;
 
switch (opcao) {
    case 1:
        console.log("Serviço escolhido: Ajuste de barra");
        break;
    case 2:
        console.log("Serviço escolhido: Reforma de vestido");
        break;
    case 3:
        console.log("Serviço escolhido: Confecção sob medida");
        break;
    default:
        console.log("Opção inválida.");
}
 
 
// exercício 4
 
let sessoes = 1;
 
while (sessoes <= 4) {
    console.log("Sessão " + sessoes + " realizada.");
    sessoes++;
}
 
console.log("Todas as 4 sessões foram concluídas.");
 