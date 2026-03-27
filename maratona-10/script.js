// Exercício 1
// Classe 
class Psicologo {
  constructor(nome, valorSessao) {
    this.nome = nome;
    this.valorSessao = valorSessao;
  }

  // Método para calcular faturamento
  calcularFaturamento(qtdSessoes) {
    return this.valorSessao * qtdSessoes;
  }
}

// instância
const psicologo1 = new Psicologo("Dr. Rômulo", 150);

// Calculando o faturamento
const faturamento = psicologo1.calcularFaturamento(30);

console.log(`Faturamento: R$ ${faturamento}`);

// Exercício 2
class Servico {
    constructor(tipo, valor) {
        this.tipo = tipo;
        this.valor = valor;
    }
 
    descricao() {
        return "Serviço: " + this.tipo + "\nValor: R$ " + this.valor
    }
}
 
class Costura extends Servico {
    constructor(tipo, valor, prazoDias) {
        super(tipo, valor);
        this.prazoDias = prazoDias;
    }
}
 
let pedido = new Costura("Reforma de vestido", 150, 5);
 
console.log(pedido.descricao());
console.log("Prazo: " + pedido.prazoDias + "dias");