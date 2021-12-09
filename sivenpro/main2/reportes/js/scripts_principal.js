var lenguaje_tablas = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "decimal": ",",
    "thousands": ".",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
}

function load_content(elemento) {
    $("#cargacontent").html("Cargando...");
    $(".nav-item").removeClass("active");
    
    var titulo = "";
    switch (elemento.id) {
        case 'Dashboard':
            $("#cargacontent").load("dashboard.php");
            titulo = "Dashboard";
            HideMenuLat();
            break;
        case 'ods_proyectos':
            $("#cargacontent").load("administrar/proyectos/proyectos.php");
            titulo = "Proyectos";
            HideMenuLat();
            break;
        case 'Usuarios':
            $("#cargacontent").load("administrar/usuarios/usuarios.php");
            titulo = "Usuarios Contratistas";
            HideMenuLat();
            break;
        case 'perfiles':
            $("#cargacontent").load("administrar/perfiles/perfil.php");
            titulo = "Administrar Perfiles";
            HideMenuLat();
            break;
        case 'comunas':
            $("#cargacontent").load("administrar/comunas/comunas.php");
            titulo = "Comunas";
            HideMenuLat();
            break;
        case 'inspectores':
            $("#cargacontent").load("administrar/inspectores/inspectores.php");
            titulo = "Inspectores";
            HideMenuLat();
            break;
        case 'agrega_proyectos':
            $("#cargacontent").load("administrar/proyectos/proyectos.php");
            titulo = "Lista de Proyectos";
            HideMenuLat();
            break;
        case 'jefaturas':
            $("#cargacontent").load("administrar/jefaturas/jefaturas.php");
            titulo = "Lista de Jefaturas";
            HideMenuLat();
            break;
        case 'trabajos':
            $("#cargacontent").load("administrar/trabajos/trabajos.php");
            titulo = "Lista de Trabajos";
            HideMenuLat();
            break;
        case 'tipos_trabajos':
            $("#cargacontent").load("administrar/trabajos/tipos_trabajos.php");
            titulo = "Tipos de trabajo";
            HideMenuLat();
            break;
        case 'clasificacion_proyecto':
            $("#cargacontent").load("administrar/clasificacion_proyecto/clasificacion.php");
            titulo = "Clasificación de Proyecto";
            HideMenuLat();
            break;
        case 'tipo_instalacion':
            $("#cargacontent").load("administrar/tipo_instalacion/tipo_instalacion.php");
            titulo = "Tipo de Instalación";
            HideMenuLat();
            break;
        case 'tipo_proyecto_comercial':
            $("#cargacontent").load("administrar/tipo_proyecto_comercial/tipo_proyecto_comercial.php");
            titulo = "Tipo de Proyecto Comercial";
            HideMenuLat();
            break;
        default:
            break;
    }

    $("#titulo_superior").text(titulo);
    $("#" + elemento.id).addClass("active");
    $('.close-layer visible').click();

};

function HideMenuLat(){
    $('.close-layer').trigger('click');
}

var mensaje_cancelado = function() {
    $.notify({
        icon: "add_alert",
        message: "<strong>Información!</strong> No se registraron cambios."
    }, {
        type: "info",
        timer: 3,
        placement: {
            from: "top",
            align: "center"
        }
    });
}

var no_enter_submit = function() {
    $('.noEnterSubmit').keypress(function(e) {
        if (e.which == 13) return false;
        //or...
        if (e.which == 13) e.preventDefault();
    });
}


//funcion para validar formularios este llamará al archivo con validate()
//para llamar a funcion setFormValidation("#idformulario");
function setFormValidation(id) {
    $(id).validate({
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
            $(element).closest('.form-check').removeClass('has-success').addClass('has-danger');
        },
        success: function(element) {
            $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
            $(element).closest('.form-check').removeClass('has-danger').addClass('has-success');
        },
        errorPlacement: function(error, element) {
            $(element).closest('.form-group').append(error);
        },
    });
}

$(document).ajaxStart(function() {
    showLoading();
  });

$(document).ajaxStop(function(){
    setTimeout(() => {
            hideLoading();
          }, 500);
});

/* function showLoading() {
    $("#modal-loading").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
      });
      //console.log("SHOW");
}
function hideLoading() {
    $('#modal-loading').modal('hide');
    //console.log("HIDE");
} */

function showLoading() {
    if (!swal.isVisible()) {
        mensajeCargando('Cargando', 'Espera mientas se cargan los datos.');
    }
}

function hideLoading() {
    if (swal.isVisible()) {
        Swal.close();
    }
}
function mensajeCargando(titulo, mensaje) {

    Swal.fire({
        title: titulo,
        html: mensaje,

        allowOutsideClick: false,
        //timer: 5000,
        //timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading()
        },
        onClose: () => {
            //clearInterval(timerInterval)
        }
    })
}