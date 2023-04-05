
// obtener el formulario
const formulario_login = document.getElementById('login');

// obtener el input
const input_usuario = document.getElementById('Usuario');


// comenzar variable de ultimo valor del input
let ultimoValor = '';


// Agregar un event listener al input para que escuche cuando el usuario escribe
input_usuario.addEventListener('input', (event) => {
    ultimoValor = event.target.value;
});



// Agregar un event listener al formulario para escuchar el evento submit

formulario_login.addEventListener('submit', enviarFormulario)

function enviarFormulario(event) {

    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario de recargar la pagina

    const nombreUsuario = ultimoValor;
    alert(`Hola ${nombreUsuario}`)
}








