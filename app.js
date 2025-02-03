let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos');

    if (nomeAmigo == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        amigos.push(nomeAmigo);
        listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
        document.getElementById('amigo').value = ''
    }
    

};

function sortearAmigo(){
    let amigoSorteado = getElementById('resultado');


    
}