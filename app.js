let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    if (input.value === '' || listaAmigos.includes(input.value)) {
        alert('Por favor, ingrese un nombre válido');
        return;
    } else {
        listaAmigos.push(input.value);
        console.log(listaAmigos);
        input.value = '';
        agregarLista();
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0){
        alert('Ingrese usuarios');
    } else {
        let indice = Math.floor(Math.random()*listaAmigos.length);
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = `${listaAmigos[indice]}`;
    }
}

function agregarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let index = 0; index < listaAmigos.length; index++) {
        let li = document.createElement('li');
        let element = listaAmigos[index];
        li.appendChild(document.createTextNode(`${element}`));
        lista.appendChild(li);
    }
}
