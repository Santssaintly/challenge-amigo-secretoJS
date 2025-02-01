const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

 
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    listaAmigos.push(nome);
    input.value = "";

    
    atualizarLista();
}

function atualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; 

  
    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione ao menos um nome para realizar o sorteio!");
        return;
    }

    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>${sorteado} foi sorteado!</li>`;
}
