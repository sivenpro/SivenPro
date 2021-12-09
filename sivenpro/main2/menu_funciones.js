var lenguaje_tablas = {
    sProcessing: "Procesando...",
    sLengthMenu: "Mostrar _MENU_ registros",
    sZeroRecords: "No se encontraron resultados",
    sEmptyTable: "Ningún dato disponible en esta tabla",
    sInfo: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
    sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
    sInfoPostFix: "",
    sSearch: "Buscar:",
    decimal: ",",
    thousands: ".",
    sUrl: "",
    sInfoThousands: ",",
    sLoadingRecords: "Cargando...",
    oPaginate: {
        sFirst: "Primero",
        sLast: "Último",
        sNext: "Siguiente",
        sPrevious: "Anterior",
    },
    oAria: {
        sSortAscending: ": Activar para ordenar la columna de manera ascendente",
        sSortDescending: ": Activar para ordenar la columna de manera descendente",
    },
    select: {
        rows: {
            _: "%d Filas",
            0: "",
            1: "%d fila",
        },
    },
};

function load_content(elemento) {
    $("#cargacontent").html("Cargando...");
    $(".nav-item").removeClass("active");
    var titulo = "";
    switch (elemento.id) {
        case "listaProductos":
            $("#cargacontent").load("modulos/inventario/productos/lista.php");
            titulo = "Registrar Producto";
            break;
        case "listaGuia":
            $("#cargacontent").load("modulos/inventario/guia_despacho/lista.php");
            titulo = "Registrar Guía Despacho";
            break;
        case "listaPerfiles":
            $("#cargacontent").load("modulos/administracion/perfiles/lista.php");
            titulo = "Perfiles";
            break;
        case "listaUsuarios":
            $("#cargacontent").load("modulos/administracion/usuarios/usuarios.php");
            titulo = "Usuarios";
            break;
        case "Dashboard":
            $("#cargacontent").load("modulos/dashboard/dashboard.php");
            titulo = "Dashboard";
            break;
        case "boton_general_volver":
            window.history.back();
            break;
        default: //
            break;
    }

    $("#titulo_superior").text(titulo);
    $("#" + elemento.id).addClass("active");
    HideMenuLat();
}

function cargaMenuLateral() {
    $("#menuLateral").html("Cargando...");
    return getAjaxSinFormData("menu_lateral.php").then(function(info) {
        var json_info = JSON.parse(info);
        // console.log(json_info);
        mostrarDesplegable(json_info);
        mostrarLinkMenu(json_info);
    });
}

function showLoading() {
    if (!swal.isVisible()) {
        mensajeCargando("Cargando", "Espera mientas se cargan los datos.");
        //leeNotificaciones();
        return getAjaxSinFormData("cuenta/estado_sesion.php").then(function(
            info
        ) {
            var json_info = JSON.parse(info);
            if (json_info.respuesta == "desactivo") {
                mensajeTerminoSession();
            }
        });
    }
}

function hideLoading() {
    if (swal.isVisible()) {
        titulo = swal.getTitle().textContent;
        titulo = titulo.toLowerCase();
        if (titulo == "cargando") {
            Swal.close();
        }
    }
}

function getAjaxFormData(form_data, url) {
    var call = $.ajax({
        type: "POST",
        url: url,
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function() {},
    });
    return call;
}

function getAjaxSinFormData(url) {
    var call = $.ajax({
        type: "POST",
        url: url,
        cache: false,
        contentType: false,
        processData: false,
        success: function() {},
    });
    return call;
}

function mostrarLinkMenu(datos) {
    //console.log(datos);
    let value = "";
    datos.forEach((opcion) => {
        if (opcion.modulo == 'listaInventario') {
            var submenu = '';
            opcion.submenu.forEach((e) => {

                submenu += `<li class="nav-item ${e.modulo}"
                                id="${e.modulo}"
                                onClick="load_content(this)">
                            <a class="nav-link">
                                <i class="material-icons" style="margin-top: 4px;">${e.icono}</i>
                                <p> ${e.texto} </p>
                            </a>
                            </li>`;
            });

            value += `<li class="nav-item ${opcion.modulo}">
            <a class="nav-link" data-toggle="collapse" href="#componentsCollapse" aria-expanded="false">
                        <i class="material-icons">${opcion.icono}</i>
                        <p> ${opcion.texto} <b class="caret"></b></span></p>
            </a>
            <div class="collapse" id="componentsCollapse">
              <ul class="nav">
                ${ submenu }
              </ul>
            </div>
          </li>`;
        } else if (opcion.modulo == 'listaAdministracion') {
            var submenu = '';
            opcion.submenu.forEach((e) => {

                submenu += `<li class="nav-item ${e.modulo}" 
                                id="${e.modulo}"
                                onClick="load_content(this)">
                            <a class="nav-link">
                                <i class="material-icons" style="margin-top: 4px;">${e.icono}</i>
                                <p> ${e.texto} </p>
                            </a>
                            </li>`;
            });

            value += `<li class="nav-item ${opcion.modulo}">
            <a class="nav-link" data-toggle="collapse" href="#componentsCollapse4" aria-expanded="false">
                        <i class="material-icons">${opcion.icono}</i>
                        <p> ${opcion.texto} <b class="caret"></b></span></p>
            </a>
            <div class="collapse" id="componentsCollapse4">
              <ul class="nav">
                ${ submenu }
              </ul>
            </div>
          </li>`;
        } else {
            value += `<li class="nav-item ${opcion.modulo}" 
                      id="${opcion.modulo}"
                      onClick="load_content(this)">
                    <a class="nav-link">
                        <i class="material-icons">${opcion.icono}</i>
                        <p> ${opcion.texto} </p>
                    </a>
                  </li>`;
        }
    });
    $("#menuLateral").html(value);
    // console.log(value);
}

function mostrarDesplegable(datos) {
    value = "";
}

function mensajeCargando(titulo, mensaje) {
    Swal.fire({
        title: titulo,
        html: mensaje,

        allowOutsideClick: false,
        //timer: 5000,
        //timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading();
        },
        onClose: () => {
            //clearInterval(timerInterval)
        },
    });
}

// function leeNotificaciones() {
//     return getAjaxSinFormData('menu2/notificaciones/read_notificaciones.php').then(function(info) {
//         var json_info = JSON.parse(info);
//         desplegarNotificaciones(json_info);
//     });
// };

function desplegarNotificaciones(datos) {
    let value = "";
    let cantidad = 0;
    datos.forEach((notificacion) => {
        value += `<a class="dropdown-item" href="#">${notificacion.tipo_notificacion}</a>`;
        cantidad++;
    });
    $("#listaNotificaciones").html(value);
    $(".notification").text(cantidad);
}

function cargaDatosUsuario() {
    return getAjaxSinFormData("cuenta/read_datos_cuenta.php").then(
        function(info) {
            var json_info = JSON.parse(info);
            $(".usernamecollapsed > span").html(
                json_info[0].nombre + '<b class="caret"></b>'
            );
        }
    );
}

function mensajeSwalFire(titulo, tipoMensaje, tiempo = 2000) {
    swal({
        title: titulo,
        showConfirmButton: false,
        timer: tiempo,
        type: tipoMensaje,
    }).catch(swal.noop);
}

function HideMenuLat() {
    $(".close-layer").trigger("click");
}

function mensajeTerminoSession() {
    let timerInterval;
    Swal.fire({
        title: "Cerrando Sesión",
        html: "Se ha finalizado la sesión",
        timer: 4000,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
                const content = Swal.getContent();
                if (content) {
                    const b = content.querySelector("b");
                    if (b) {
                        b.textContent = Swal.getTimerLeft();
                    }
                }
            }, 100);
        },
        onClose: () => {
            clearInterval(timerInterval);
        },
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            location.reload();
        }
    });
}