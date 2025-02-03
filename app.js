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
            listaAmigos.innerHTML += `<li>${amigos[x]}</li>` ;
        }

    }


};

function sortearAmigo() {
    let amigoSorteado = getElementById('resultado');

    amigoSorteado.innerHTML = ``
}