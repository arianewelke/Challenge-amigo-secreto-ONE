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
    atualizarLista();
    inputNome.value = "";  
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    listaDeAmigosSecretos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (listaDeAmigosSecretos.length < 2) {
        alert("Adicione pelo menos 2 nomes para realizar o sorteio!");
        return;
    }

    let embaralhado = [...listaDeAmigosSecretos]; // Copia o array original
    embaralhado = embaralhado.sort(() => Math.random() - 0.5); // Embaralha

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa a lista antes de exibir os pares

    for (let i = 0; i < embaralhado.length; i++) {
        let amigo1 = embaralhado[i];
        let amigo2 = embaralhado[(i + 1) % embaralhado.length]; // Faz a rotação para evitar pares repetidos

        let li = document.createElement("li");
        li.textContent = `${amigo1} → ${amigo2}`;
        resultadoLista.appendChild(li);
    }
}