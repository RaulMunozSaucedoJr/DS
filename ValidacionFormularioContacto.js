const formulario = document.getElementById('Contacto');
const inputs = document.querySelectorAll('#Contacto input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]+$/,
    direccion: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]+$/,
    mensaje: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\u00E0-\u00FC]+$/,
    correo: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/,
    telefono: /^\d{7,14}$/
}

const campos = {
    nombre: false,
    correo: false,
    telefono: false,
    direccion: false,
    mensaje: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');
            break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        //Datos Correctos
        swal({
            icon: "success",
            title: "Mensaje Enviado",
            text: "Gracias por confiar en nosotros.\n" + "A la brevedad nos comunicaremos con usted",
            timer: 5000,
            button: false,
            closeOnClickOutside: false,
            closeOnEsc: false,
        });
        campos[campo] = true;
    } else {
        //Datos Incorrectos
        swal({
            icon: "error",
            title: "Mensaje Fallido",
            text: "El mensaje no pudo ser enviado.\n" + "Intente más tarde ó utilice otro medio de los proporcionados para contactarnos.",
            timer: 5000,
            button: false,
            closeOnClickOutside: false,
            closeOnEsc: false,
        });
        campos[campo] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombre && campos.correo && campos.telefono && campos.direccion && campos.mensaje) {
        swal({
            title: "¡ATENCIÓN!",
            text: "¡Ningún campo debe de permanecer vacio!.",
            icon: "warning",
            timer: 2000,
            closeOnClickOutside: false,
            button: false,
            closeOnEsc: true,
        });
        formulario.reset();

    }
});