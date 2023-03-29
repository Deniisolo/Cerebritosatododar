// obtener el input
const input_usuario = document.getElementById('Usuario');

// Obtener boton
const boton_entrar = document.getElementById('Entrar');

const InputValue = input_usuario.value;


// escuchar evento de click
boton_entrar.addEventListener('click', ()=> {
    alert(`Hola ${InputValue}`)
})





