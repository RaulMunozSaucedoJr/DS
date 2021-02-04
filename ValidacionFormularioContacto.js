! function DOMContentLoaded() {
    "use strict";
    window.addEventListener("DOMContentLoaded", function () {

        //ID FORMULARIO
        const formulario = document.getElementById("formulario");
        //ID´S INPUTS FORMULARIO
        const nombre = document.getElementById("nombreCliente");
        const direccion = document.getElementById("direccionCliente");
        const correo = document.getElementById("correoCliente");
        const numero = document.getElementById("numeroCliente");
        const mensaje = document.getElementById("mensajeCliente");
        /** El onSubmit que se encontraba en el formulario, se traslado aquí para tener una mayor limpieza en el archivo html/php**/
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();


            if (Campos()) {
                swal({
                    icon: "success",
                    title: "¡Registro Exitóso!",
                    text: "La información de el usuario se registró correctamente.",
                    timer: 5000,
                    button: false,
                    closeOnClickOutside: false,
                    closeOnEsc: false,
                });
                document.getElementById("nombreCliente").value = '';
                document.getElementById("direccionCliente").value = '';
                document.getElementById("correoCliente").value = '';
                document.getElementById("numeroCliente").value = '';
                document.getElementById("mensajeCliente").value = '';
                return true;
            } else {
                console.log("Nada se valido");
                return false;
            }

            function Campos() {

                if ((verificarVacio(nombre) || verificarVacio(direccion) || verificarVacio(correo) || verificarVacio(numero) || verificarVacio(mensaje))) return;

                if ((Tamanos(nombre) || Tamanos(direccion) || Tamanos(correo) || Tamanos(numero) || Tamanos(mensaje))) return;

                if ((!RegExs(correo, 1) || !RegExs(numero, 2))) return;

                return true;

            }

            //Verifica que ningún inputs se encuentre vacio
            function estaVacio(value) {
                //Operador Ternario
                return !!(value === "" || value === '' || value == "" || value == '');
            }
            //Muestra el mensaje de la funcion estaVacio
            function verificarVacio(field) {
                if (estaVacio(field.value.trim())) {
                    swal({
                        title: "¡ATENCIÓN!",
                        text: "¡Ningún campo debe de permanecer vacio!.",
                        icon: "warning",
                        timer: 2000,
                        closeOnClickOutside: false,
                        button: false,
                        closeOnEsc: true,
                    });
                    return true;
                } else {
                    return false;
                }
            }
            //Verifica que ningún campo tenga menos de 2 carácteres ni más de 30 carácteres.
            function MinMax(value) {
                //Operador Ternario
                return value.length <= 2 || value.length >= 30 ? true : false;
            }
            //Muestra mensaje de la funcion MinMax
            function Tamanos(field) {
                if (MinMax(field.value)) {
                    swal({
                        title: "¡ATENCIÓN!",
                        text: "¡Nigún campo debe de tener menos de 2 carácteres ni más de 30!.",
                        icon: "warning",
                        timer: 3000,
                        closeOnClickOutside: false,
                        button: false,
                        closeOnEsc: false,
                    });
                    return true;
                }
                return false;
            }
            //Letras minusculas, mayusculas, acentuadas y numeros.
            function RegExs(field, caso) {
                let regEx;
                switch (caso) {
                    case 1:
                        //CORREO ELECTRÓNICO PERSONAL Y DE TRABAJO
                        regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;
                        return CoincidirCorreoPersonalRegEx(regEx, field);
                    case 2:
                        //NUMEROS TELEFÓNICOS
                        regEx = /^\d([0-9]{1,3})+([0-9]{1,4})+([0-9]{1,4})+$/;
                        return CoincidirNumTelRegEx(regEx, field);
                    default:
                        return false;
                }
            }

            function CoincidirCorreoPersonalRegEx(regEx, field) {
                if (field.value.match(regEx)) {
                    return true;
                } else {
                    swal({
                        title: "¡ATENCIÓN!",
                        text: "Su correo electrónico tiene un formato incorrecto.\n" + "Favor de verificarlo.",
                        icon: "warning",
                        timer: 3000,
                        closeOnClickOutside: false,
                        button: false,
                        closeOnEsc: false,
                    });
                    return false;
                }
            }
            //Muestra el mensaje de la funcion NumTelRegEx
            function CoincidirNumTelRegEx(regEx, field) {
                if (field.value.match(regEx)) {
                    return true;
                } else {
                    swal({
                        title: "¡ATENCIÓN!",
                        text: "Su numero telefónico tiene un formato incorrecto.\n" + "Recuerde que la nueva marcación empieza con 55.\n" + "Favor de verificarlo.",
                        icon: "warning",
                        timer: 3000,
                        closeOnClickOutside: false,
                        button: false,
                        closeOnEsc: false,
                    });
                    return false;
                }
            }


        });
    });
}();