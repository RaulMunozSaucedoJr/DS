function Validacion(event) {
    event.preventDefault();

    const formulario = document.getElementById("formulario");

    const nombre = document.getElementById("nombreCliente");
    const direccion = document.getElementById("direccionCliente");
    const correo = document.getElementById("correoCliente");
    const numero = document.getElementById("numeroCliente");
    const mensaje = document.getElementById("mensajeCliente");

    expresionCorreo = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])$/;
    expresionTelefono = /^\d([0-9]{1,3})+([0-9]{1,4})+([0-9]{1,4})+$/;

    if (nombre.length === "" || direccion.length === "" || correo.length === "" || numero.length === "" || mensaje.length === "") {
        swal({
            title: "¡ATENCIÓN!",
            text: "¡Ningún campo debe de permanecer vacio!.",
            icon: "warning",
            timer: 4000,
            closeOnClickOutside: false,
            button: false,
            closeOnEsc: true,
        });
        return false;
    } else if (!expresionCorreo.test(correo)) {
        swal({
            title: "¡ATENCIÓN!",
            text: "Ingrese un correo electrónico valido.",
            icon: "info",
            timer: 4000,
            closeOnClickOutside: false,
            button: false,
            closeOnEsc: true,
        });
        return false;
    } else if (!expresionTelefono.test(numero)) {
        swal({
            title: "¡ATENCIÓN!",
            text: "Ingrese un numero telefónico valido.",
            icon: "info",
            timer: 4000,
            closeOnClickOutside: false,
            button: false,
            closeOnEsc: true,
        });
        return false;
    } else {
        formulario.reset();
        return true;
    }




}