let listaAmigos = [];


function agregarAmigo(){
    let input = document.getElementById('amigo');
    if (input.value === '' || listaAmigos.includes(input.value)) {
        alert('Por favor, ingrese un nombre válido');
        return;
    } else {
        listaAmigos.push(input.value);
        console.log(listaAmigos);
        input.value = '';
    }
}

function sortearAmigo(){

}