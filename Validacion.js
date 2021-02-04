function Validacion() {
    event.preventDefault();

    const nombre = document.getElementById("nombreCliente");
    const direccion = document.getElementById("direccionCliente");
    const correo = document.getElementById("correoCliente");
    const numero = document.getElementById("numeroCliente");
    const mensaje = document.getElementById("mensajeCliente");

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
    } else {
        return true;
    }




}