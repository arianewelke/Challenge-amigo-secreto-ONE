let listaDeAmigosSecretos = []; // array para armazenar nomes

//Função para adicionar nomes a lista
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaDeAmigosSecretos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaDeAmigosSecretos.push(nome);
    inputNome.value = "";
    console.log(listaDeAmigosSecretos);
    let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
}