let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos');
    if (nomeAmigo == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        amigos.push(nomeAmigo);

        listaAmigos.innerHTML = ''
        for (x = 0; x < amigos.length; x++) {
            listaAmigos.innerHTML += `<li>${amigos[x]}</li>`;
        }

        document.getElementById('amigo').value = '';
    }

}

function sortearAmigo() {
    let amigoSorteado = document.getElementById('resultado');
    if (amigos.length == 0) {
        alert('Por favor, para sortear um amigo primeiramente digite algum nome');
    } else {
        amigoSorteado.innerHTML = `<li>O amigo secreto sorteado é:${amigos[Math.floor(Math.random() * amigos.length)]}</li>`;
        listaAmigos.innerHTML = '';
        document.querySelector('.button-draw').setAttribute('disabled', true);
        document.querySelector('.button-add').setAttribute('disabled', true);
    }

}