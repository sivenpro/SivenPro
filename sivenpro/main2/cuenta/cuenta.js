function leeCuenta() {
    return getAjaxSinFormData('menu2/cuenta/read_cuenta.php').then(function(info) {
        var json_info = JSON.parse(info);
        $('#nombreUsuario').val(json_info[0].nombre);
        $('#correoUsuario').val(json_info[0].correo);
        $('#nombreCompleto').val(json_info[0].nombre_completo);
        $('#perfilUsuario').val(json_info[0].nombre_perfil);
        $('#contrasenaUsuario').val(json_info[0].pass);
    });
};

function actualizaContrasena() {
    $('#alertaContrasena').empty();
    $('#alertaConfirma').empty();
    contrasenaNueva = $('#contrasenaNueva').val();
    $('#contrasenaUsuario').val(contrasenaNueva);
};

function actualizarCuenta() {
    $("#actualizarContrasena").on("click", function(e) {
        e.preventDefault();
        $("#actualizarContrasena").prop("disabled", true);
        var form = new FormData();
        form.append("password", $('#contrasenaConfirmar').val());
        //form.append("correo", $('#correoUsuario').val());
        return getAjaxFormData(form, 'menu2/cuenta/update_cuenta.php').then(function(info) {
            var json_info = JSON.parse(info);

            switch (json_info.respuesta) {
                case 'BIEN':
                    mensajes_segun_respuesta_backend('Guardado correctamente.', 'success');
                    leeCuenta();
                    break;
                default:
                    mensajes_segun_respuesta_backend('No se ha podido realizar la acción.', 'error');
                    break;
            }
            $("#actualizarContrasena").prop("disabled", false);
            $("#modalContrasena").modal('hide');
            //$("#ModalNuevo").modal("hide");
        });
    });
}

function mensajes_segun_respuesta_backend(mensaje, tipo) {
    Swal.fire({
        type: tipo,
        title: mensaje,
        showConfirmButton: false,
        timer: 4000
    })
}



$(document).ready(function() {
    leeCuenta();
    var timer = null;
    $("#contrasenaNueva").keypress(function(e) {
        if (e.which == 13) {
            clearTimeout(timer);
            timer = setTimeout(verificaSeguridad, 150)
        }
    });
    $("#contrasenaConfirmar").keydown(function() {
        clearTimeout(timer);
        timer = setTimeout(confirmaContrasena, 150)
    });

    actualizarCuenta();


    //user is "finished typing," do something
    function verificaSeguridad() {
        passText = $('#contrasenaNueva').val();
        $.ajax({
            type: 'POST',
            url: "menu2/cuenta/validar_contrasena.php",
            data: { "password": passText },
            success: function(html) {
                if (html) {
                    //cuando es true
                    if (html == "Contraseña segura.") {
                        $('#alertaConfirma').empty();
                        $('#alertaContrasena').empty();
                        $('#divContrasenaNueva').removeClass().addClass('form-group bmd-form-group is-focused is-filled has-success');
                        $('#contrasenaConfirmar').prop("disabled", false);
                    } else {
                        $('#alertaConfirma').empty();
                        $('#alertaContrasena').text(html);
                        $('#divContrasenaNueva').removeClass().addClass('form-group bmd-form-group is-focused is-filled has-danger');
                        $('#actualizarContrasena').prop("disabled", true);
                        $('#contrasenaConfirmar').prop("disabled", true);
                    }
                } else {
                    $('#alertaContrasena').empty();
                }
            }

        });
    }

    function confirmaContrasena() {
        passText = $('#contrasenaNueva').val();
        confirmaText = $('#contrasenaConfirmar').val();
        flagConfirma = 1;
        $.ajax({
            type: 'POST',
            url: "menu2/cuenta/validar_contrasena.php",
            data: { "password": passText, "confirmaPassword": confirmaText, "flagConfirma": flagConfirma },
            success: function(html) {
                if (html) {
                    //cuando es true
                    if (html == "El campo si coincide con la contraseña.") {
                        $('#alertaContrasena').empty();
                        $('#alertaConfirma').empty();
                        $('#divContrasenaConfirma').removeClass().addClass('form-group bmd-form-group is-focused is-filled has-success');
                        $('#actualizarContrasena').prop("disabled", false);
                    } else {
                        $('#alertaContrasena').empty();
                        $('#alertaConfirma').text(html);
                        $('#divContrasenaConfirma').removeClass().addClass('form-group bmd-form-group is-focused is-filled has-danger');
                        $('#actualizarContrasena').prop("disabled", true);
                    }
                } else {
                    $('#alertaConfirma').empty();
                }
            }

        });
    }
});