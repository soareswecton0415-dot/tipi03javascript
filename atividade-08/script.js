// Exercício 1 – Psicólogo
function avaliarSessao(nomePaciente, quantidadeSessoes) {
  console.log(nomePaciente);
  return quantidadeSessoes >= 10;
}
console.log(avaliarSessao("Carlos", 12));
 
// Exercício 2 – Bolo de Pote
const calcularValorPedido = (quantidadeBolos, valorUnitario) => {
  const total = quantidadeBolos * valorUnitario;
  return quantidadeBolos >= 10 ? total * 0.9 : total;
}
console.log(calcularValorPedido(10, 8));
 
// Exercício 3 – Ateliê
function listarMateriais(materiais) {
  console.log(materiais.length);
  return materiais.map(material => material.toUpperCase());
}
console.log(listarMateriais(["tinta", "pincel", "tecido"]));
 
// Exercício 4 – Confeitaria
function filtrarSaboresDisponiveis(sabores, letra) {
  return sabores.filter(sabor =>
    sabor.toLowerCase().startsWith(letra.toLowerCase())
  );
}
console.log(filtrarSaboresDisponiveis(["Brigadeiro", "Beijinho", "Chocolate"], "b"));

// Exercício 5
const paciente = `{
  "nomeCompleto": "João Souza",
  "idade": 45,
  "planoDeSaude": false,
  "queixasPrincipais": ["estresse", "fadiga"],
  "ultimaSessao": {
    "data": new Date().toISOString(),
    "humor": 5,
    "tevePrescricaoAtividade": false
  }
}`;

console.log(paciente);

// Exercício 6
const pedido = `{
  "cliente": {
    "nome": "Ana Pereira",
    "telefone": "(11) 99999-9999"
  },
  "tipoPeca": "vestido", 
  "medidas": {
    "busto": 90,   // cm
    "cintura": 70, // cm
    "quadril": 98  // cm
  },
  "tecido": "algodão",
  "prazoDias": 7,
  "status": "em produção" 
}`;

console.log(pedido);

// Exercício 7
const catalogo = `[
  {
    "nome": "Bolo de pote de chocolate",
    "preco": 12.50,
    "contemLactose": true,
    "ingredientes": ["farinha", "açúcar", "cacau", "leite", "ovos"],
    "promocaoAtiva": true,
    "descontoPercentual": 10
  },
  {
    "nome": "Bolo de pote de morango",
    "preco": 13.00,
    "contemLactose": true,
    "ingredientes": ["farinha", "açúcar", "morango", "leite condensado", "ovos"],
    "promocaoAtiva": false,
    "descontoPercentual": 0
  },
  {
    "nome": "Bolo de pote vegano de banana",
    "preco": 14.00,
    "contemLactose": false,
    "ingredientes": ["farinha", "açúcar mascavo", "banana", "óleo vegetal"],
    "promocaoAtiva": true,
    "descontoPercentual": 5
  }
]`;

console.log(catalogo);

// Exercício 8
const Pedido = `{
  "idPedido": "Bolo1234",
  "dataDoPedido": "2026-03-23",

  "cliente": {
    "nome": "Maria Silva",
    "email": "maria@email.com"
  },

  "itens": [
    {
      "nomeProduto": "Bolo de Chocolate",
      "quantidade": 1,
      "precoUnitario": 50.00,
      "observacoes": "Sem açúcar"
    },
    {
      "nomeProduto": "Brigadeiro",
      "quantidade": 10,
      "precoUnitario": 2.50,
      "observacoes": "Tradicional"
    }
  ],

  "enderecoEntrega": {
    "rua": "Rua das Flores",
    "numero": 123,
    "bairro": "Centro",
    "cidade": "São Paulo",
    "CEP": "01000-000"
  },

  "pagamento": {
    "metodo": "cartao",
    "detalhes": {
      "bandeira": "Visa",
      "ultimos4Digitos": "1234"
    }
  },

  "totalCalculado": 0
}`;

// Função para calcular o total
function calcularTotal(pedido) {
  let total = 0;

  pedido.itens.forEach(item => {
    total += item.quantidade * item.precoUnitario;
  });

  return total;
}

// Atualiza o total
pedido.totalCalculado = calcularTotal(pedido);

// Exibir JSON final
console.log(JSON.stringify(pedido, null, 2));
