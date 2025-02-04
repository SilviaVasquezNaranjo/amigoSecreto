// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[]

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value.trim(); // Captura y elimina espacios en blanco

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si el campo está vacío
    }else{
        amigos.push(nombreAmigo); // Agrega el nombre a la lista
        actualizarLista(); // Llama a la función para actualizar la lista en el HTML
    }
    input.value = ""; // Limpia el campo de entrada
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos"); // Selecciona la lista del HTML
    lista.innerHTML = ""; // Limpia la lista para evitar duplicados

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crea un nuevo elemento <li>
        li.textContent = amigos[i]; // Asigna el nombre del amigo al elemento <li>
        lista.appendChild(li); // Agrega el <li> a la lista en el HTML
    }
}