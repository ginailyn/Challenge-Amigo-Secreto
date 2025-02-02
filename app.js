// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
limpiarListaAmigos();
limpiarCampoEntrada();

function esNombreValido(nombre) {
    // Verificar longitud mínima y máxima del nombre
    if (nombre.length < 2 || nombre.length > 30) {
        return false;
    }

    // Verificar caracteres permitidos (solo letras y espacios)
    if (!/^[a-zA-Z\u00C0-\u017F\u00F1\u00D1\s]+$/.test(nombre)) {
        return false;
    }

    // Si pasa todas las validaciones, retornar true
    return true;
}

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo.trim().length === 0) {
        console.log("La cadena esta vacía");
        alert("Por favor, inserte un nombre.");
    }else if (!esNombreValido(nombreAmigo)) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios, entre 2 y 30 caracteres).");
        limpiarCampoEntrada();
        return;
    }else {
       amigos.push(nombreAmigo);
       limpiarCampoEntrada();
       recorrerArrayAmigos();
    }    
    
}

function limpiarCampoEntrada(){
    document.querySelector('#amigo').value = '';
}

function limpiarListaAmigos(){
    listaAmigos.innerHTML = "";

}


function recorrerArrayAmigos() {
    // Obtener el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    limpiarListaAmigos();

    // Iterar sobre el arreglo amigos y agregar cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        // Crear elemento <li> para cada amigo
        let amigo = amigos[i];
        let li = document.createElement('li');
        li.textContent = amigo;

        // Agregar el elemento <li> a la lista
        listaAmigos.appendChild(li);

    }
}

function sortearAmigo(){
    if (amigos.length >0) {
        //aplicarSorteo;
     
        //Generar Indice aleatorio del arreglo 
        let indiceAleatorio =  Math.floor(Math.random()*amigos.length);
        console.log (indiceAleatorio);

         document.getElementById("listaAmigos").innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`
         limpiarCampoEntrada();
         amigos = [];


    }
}