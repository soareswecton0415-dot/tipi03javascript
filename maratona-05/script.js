// Exercício 1
for (let i = 1; i <= 10; i++) {
    console.log("Bolo de pote número " + i + " produzido!");
}
 
// Exercício 2
let sabores = ["Chocoloate", "Morango", "Baunilha", "Red Velvet"];
sabores.forEach(function(sabor){
console.log("Sabor disponivel: " + sabor);
});
 
//  Exercício 3
let faturamentoTotal = 0;
let valorServico = 200;

for (let i = 1; i <= 5; i++) {
    faturamentoTotal += valorServico;
}

console.log("Faturamento total do dia: R$ " + faturamentoTotal);

// Exercício 4
let pacientes = ["Ana", "Carlos", "Juliana", "Pedro"];

pacientes.forEach(function(paciente) {
    console.log("Paciente atendido: " + paciente);
});
