const provincias = [
    "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba",
    "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa",
    "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro",
    "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe",
    "Santiago del Estero", "Tierra del Fuego", "Tucumán"
];

let provinciaAleatoria;
let puntuacion = 0;
const preguntaElement = document.getElementById('pregunta');
const respuestaInput = document.getElementById('respuesta');
const enviarBoton = document.getElementById('enviar');
const resultadoElement = document.getElementById('resultado');
const puntuacionElement = document.getElementById('puntuacion');

function elegirProvincia() {
    provinciaAleatoria = provincias[Math.floor(Math.random() * provincias.length)];
    preguntaElement.textContent = "¿Cuál es esta provincia?";
    respuestaInput.value = ''; // Limpiar el campo de respuesta
    resultadoElement.textContent = ''; // Limpiar el mensaje de resultado anterior
    respuestaInput.focus(); // Pone el cursor directamente en el campo de texto
}

function verificarRespuesta() {
    const respuestaUsuario = respuestaInput.value.trim().toLowerCase(); // Elimina espacios extra y convierte a minúsculas
    const respuestaCorrecta = provinciaAleatoria.toLowerCase(); // Convierte la provincia correcta a minúsculas para comparar

    if (respuestaUsuario === respuestaCorrecta) {
        resultadoElement.textContent = "¡Correcto! ¡Muy bien!";
        resultadoElement.className = 'correcto'; // Añade clase para el estilo verde
        puntuacion++;
        puntuacionElement.textContent = `Puntuación: ${puntuacion}`;
        elegirProvincia(); // Pasa a la siguiente provincia
    } else {
        resultadoElement.textContent = `¡Incorrecto! La provincia correcta era: ${provinciaAleatoria}`;
        resultadoElement.className = 'incorrecto'; // Añade clase para el estilo rojo
        elegirProvincia(); // Pasa a la siguiente provincia (opcional: podrías dejar que lo intente de nuevo si quieres)
    }
}

// Escucha el clic del botón
enviarBoton.addEventListener('click', verificarRespuesta);

// Escucha la tecla Enter en el campo de respuesta
respuestaInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarRespuesta();
    }
});

elegirProvincia(); // Inicia el juego cuando la página carga
