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
    }
    input.value = ""; // Limpia el campo de entrada
}