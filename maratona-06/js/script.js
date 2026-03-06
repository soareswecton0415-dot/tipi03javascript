// lista de sabores
const sabores = [
    "🍫 Chocolate",
    "🍓 Morango",
    "🍦 Baunilha",
    "🍰 Red Velvet"
];
 
// pegar botão e lista
const botao = document.getElementById("mostrarSabores");
const lista = document.getElementById("listaSabores");
 
// quando clicar no botão
botao.addEventListener("click", function () {
 
    // limpar lista antes de adicionar
    lista.innerHTML = "";
 
    // percorrer sabores
    sabores.forEach(function(sabor){
        const item = document.createElement("li");
        item.textContent = sabor;
        lista.appendChild(item);
    });
 
});

function mostrarSabores() {
    document.getElementById("sabores").style.display = "grid";
}
 