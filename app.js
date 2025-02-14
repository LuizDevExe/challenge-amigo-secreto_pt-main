let amigos = [];

function adicionarAmigo() {

    // Pega os elementos do html
    let nomeAmigo = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos');

    // Verifica se o input de texto está vazio
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        // Transforma toda primeira letra em letra maiúscula caso digitem as iniciais em minúsculas.
        amigos.push(nomeAmigo.charAt(0).toUpperCase() + nomeAmigo.slice(1));

        listaAmigos.innerHTML = ''
        for (x = 0; x < amigos.length; x++) {
            listaAmigos.innerHTML += `<li>${amigos[x]}</li>`;
        }

        document.getElementById('amigo').value = '';
    }

}

function limparLista(){
    listaAmigos.innerHTML = '';
}

function sortearAmigo() {
    let amigoSorteado = document.getElementById('resultado');

    // Verifica se existem nomes na lista para sorteio, caso não emite um alerta!
    if (amigos.length == 0) {
        alert('Por favor, para sortear um amigo primeiramente digite alguns nome');
    } else {
        amigoSorteado.innerHTML = `<li>O amigo secreto sorteado é:${amigos[Math.floor(Math.random() * amigos.length)]}</li>`;

        limparLista();

        //Limpa o campo input após sorteio
        document.getElementById('amigo').value = '';

        //Desabilita botões sorteio e adicionar
        document.querySelector('.button-draw').setAttribute('disabled', true);
        document.querySelector('.button-add').setAttribute('disabled', true);

        //Desabilita o input para não ser preenchido após sorteio
        document.getElementById('amigo').setAttribute('disabled', true);
    }

}