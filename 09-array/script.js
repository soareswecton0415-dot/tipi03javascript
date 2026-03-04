//array
const nomes = ["João", "Maria", "José"];

console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]); //essa posição não existe (undefined)

//Adicionando um elemento no array
nomes.push("Beatriz");
console.log(nomes);

//Removendo o último elemnto do array
nomes.pop();
console.log("Beatriz foi removida " + nomes);

//Alterar um elemento do array
nomes[0] = "João Pedro";
console.log(nomes);