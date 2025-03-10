const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const formulario = document.getElementById("formulario");

let regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regexNumero = /^\d{9}$/;
let regexApellidos = /^[A-Za-z\s]{1,40}$/;
let regexNombre = /^[A-Za-z]{1,15}$/; 

formulario.addEventListener("submit", function (e) {
    let mensajes = []

    // validacion del nombre 
    if (nombre.value === '' || nombre.value == null) {
        mensajes.push("Se necesita un nombre");
    } else if (nombre.length > 15) {
        mensajes.push("El nombre puede tener máximo 15 caracteres");
    } else if (!regexNombre.test(nombre.value)) {
        mensajes.push("El nombre tiene un formato incorrecto");
    }

    // validacion de los apellidos
    if (apellidos.value === '' || apellidos.value == null) {
        mensajes.push("Se necesita al menos un apellido");
    } else if (apellidos.length > 40) {
        mensajes.push("Los apellidos pueden tener máximo 40 caracteres");
    } else if (!regexApellidos.test(apellidos.value)){
        mensajes.push("Los apellidos tienen un formato incorrecto");
    }

    // validacion del telefono
    if (telefono.value === '' || telefono.value == null) {
        mensajes.push("Se necesita un número de teléfono");
    } else if (!regexNumero.test(telefono.value)) {
        mensajes.push("El número de teléfono debe tener 9 dígitos");
    }

    // validacion del correo
    if (correo.value === '' || correo.value == null) {
        mensajes.push("Se necesita un correo");
    } else if (!regexCorreo.test(correo.value)){
        mensajes.push("El formato del correo es incorrecto");
    }

    if (mensajes.length > 0) {
        e.preventDefault();
        window.alert(mensajes.join(', '));
    }
})