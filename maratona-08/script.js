// Exercício 1
 
let cliente = {
    nome: "Maria",
    telefone: "11999999999",
    pedidoFavorito: "Bolo de chocolate"
};
 
// Mostrar nome
console.log(cliente.nome);
 
// Adicionar cidade
cliente.cidade = "São Paulo";
 
// Remover telefone
delete cliente.telefone;
 
// Mostrar objeto final
console.log(cliente);
 
// Exercício 2
 
let bolo = {
    sabor: "Chocolate",
    preco: 30
};
 
let ingredientes = {
    massa: "Baunilha",
    recheio: "Brigadeiro"
};
 
let produtoFinal = Object.assign({}, bolo, ingredientes);
 
console.log(produtoFinal);
 
// Exercício 3
 
let servico = {
    tipo: "Ajuste de roupa",
    preco: 50
};
 
// alterar preço
servico.preco = 70;
 
// adicionar prazo de entrega
servico.prazoEntrega = "3 dias";
 
// mostrar no console
console.log(servico);
 

// Exercício 4
const paciente = {
    nome: "João",
    idade: 30,
    problema: "Ansiedade"
};

const prontuario = Object.keys(paciente);

console.log(paciente);

// Exercício 5
const costureira = {
    nome: "Maria",
    experiencia: 44,
    especialidade: "costura"
};

costureira.experiencia += 1;

console.log(costureira);

// exercício 6
const terapeuta = {
    nome: "Rômulo",
    especialidade: "psicologia",
    cidade: "São Paulo"
};

const [nome, especialidade, cidade] =
Object.values(terapeuta);

console.log("nome:", nome);
console.log("especialidade:", especialidade);
console.log("cidade:", cidade);