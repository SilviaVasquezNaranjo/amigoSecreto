// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[]

//Funcion para agregar amigos
function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value.trim(); 

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; 
    }else{
        amigos.push(nombreAmigo); 
        actualizarLista(); 
    }
    input.value = ""; 
}

//Funcion para actualizar la lista que se muestra en pagina
function actualizarLista(){
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

//Función para el sorteo del amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado"); 

    if (amigos.length === 0) { 
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>"; 
        return;
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
        let amigoSorteado = amigos[indiceAleatorio]; 
        resultado.innerHTML = `<li>¡¡El amigo secreto es: <strong>${amigoSorteado}!!</strong></li>`; 
    }   
}
