function listar_opciones_comunas(comuna) {

    $.ajax({
        url: 'administrar/comunas/genera_select_comunas.php',
        type: 'post',
        dataType: 'json',
        data: { "comuna": comuna, },
        success: function(response) {
            var len = response.length;
            $("#comuna").empty();
            for (var i = 0; i < len; i++) {
                var id = response[i]['id'];
                var nombre = response[i]['nombre'];
                $("#comuna").append("<option value='" + id + "'>" + nombre + "</option>");
            }
            $('.selectpicker').selectpicker('refresh');
            $('#comuna option[value="' + comuna + '"]').prop("selected", "selected").change()
        }
    });

}

function listar_opciones_clasificacion_proyecto(id_clasificacion) {

    $.ajax({
        url: 'administrar/clasificacion_proyecto/genera_select_clasificacion.php',
        type: 'post',
        dataType: 'json',
        data: { "id_clasificacion": id_clasificacion},
        success: function(response) {
            var len = response.length;
            $("#tipo_clasificacion_proyecto").empty();
            for (var i = 0; i < len; i++) {
                var id= response[i]['id'];
                var nombre = response[i]['nombre'];
                $("#tipo_clasificacion_proyecto").append("<option value='" + id + "'>" + nombre + "</option>");
            }
            $('#tipo_clasificacion_proyecto').selectpicker('refresh');
           $('#tipo_clasificacion_proyecto option[value="' + id_clasificacion + '"]').prop("selected", "selected").change()
        }
    });

}


function listar_opciones_tipo_instalacion_proyecto(id_tipo_instalacion) {

    $.ajax({
        url: 'administrar/tipo_instalacion/genera_select_tipo_instalacion.php',
        type: 'post',
        dataType: 'json',
        data: { "id_tipo_instalacion": id_tipo_instalacion},
        success: function(response) {
            var len = response.length;
            $("#tipo_instalacion_proyecto").empty();
            for (var i = 0; i < len; i++) {
                var id= response[i]['id'];
                var nombre = response[i]['nombre'];
                $("#tipo_instalacion_proyecto").append("<option value='" + id + "'>" + nombre + "</option>");
            }
            $('#tipo_instalacion_proyecto').selectpicker('refresh');
           $('#tipo_instalacion_proyecto option[value="' + id_tipo_instalacion + '"]').prop("selected", "selected").change()
        }
    });

}


function listar_opciones_tipo_proyecto_comercial(id_tipo_proyecto_comercial) {

    $.ajax({
        url: 'administrar/tipo_proyecto_comercial/genera_select_tipo_proyecto_comercial.php',
        type: 'post',
        dataType: 'json',
        data: { "id_tipo_proyecto_comercial": id_tipo_proyecto_comercial},
        success: function(response) {
            var len = response.length;
            $("#tipo_proyecto_comercial_select").empty();
            for (var i = 0; i < len; i++) {
                var id= response[i]['id'];
                var nombre = response[i]['nombre'];
                $("#tipo_proyecto_comercial_select").append("<option value='" + id + "'>" + nombre + "</option>");
            }
            $('#tipo_proyecto_comercial_select').selectpicker('refresh');
           $('#tipo_proyecto_comercial_select option[value="' + id_tipo_proyecto_comercial + '"]').prop("selected", "selected").change()
        }
    });

}

function listar_opciones_inspectores(inspector) {

    $.ajax({
        url: 'administrar/inspectores/genera_select_inspectores.php',
        type: 'post',
        dataType: 'json',
        data: { "inspector": inspector, },
        success: function(response) {
            var len = response.length;
            $("#inspector").empty();
            for (var i = 0; i < len; i++) {
                var id = response[i]['id'];
                var nombre = response[i]['nombre'];
                $("#inspector").append("<option value='" + id + "'>" + nombre + "</option>");
            }
            $('.selectpicker').selectpicker('refresh');
            $('#inspector option[value="' + inspector + '"]').prop("selected", "selected").change()
        }
    });

}

// function listar_tipos_proyectos(tipo_proyecto) {
//     $.ajax({
//         url: 'administrar/inspectores/genera_select_inspectores.php',
//         type: 'post',
//         dataType: 'json',
//         data: { "tipo_proyecto": tipo_proyecto, },
//         success: function(response) {
//             var len = response.length;
//             $("#inspector").empty();
//             for (var i = 0; i < len; i++) {
//                 var id = response[i]['id'];
//                 var nombre = response[i]['nombre'];
//                 $("#inspector").append("<option value='" + id + "'>" + nombre + "</option>");
//             }
//             $('.selectpicker').selectpicker('refresh');
//             $('#inspector option[value="' + inspector + '"]').prop("selected", "selected").change()
//         }
//     });
// }

function listar_opciones_jefaturas(jefatura) {

    $.ajax({
        url: 'administrar/jefaturas/genera_select_jefaturas.php',
        type: 'post',
        dataType: 'json',
        data: { "jefatura": jefatura, },
        success: function(response) {
            var len = response.length;
            $("#jefatura_a_cargo").empty();
            for (var i = 0; i < len; i++) {
                var id = response[i]['id'];
                var nombre = response[i]['nombre'];
                $("#jefatura_a_cargo").append("<option value='" + id + "'>" + nombre + "</option>");
            }
            $('.selectpicker').selectpicker('refresh');
            $('#jefatura_a_cargo option[value="' + jefatura + '"]').prop("selected", "selected").change()
        }
    });

}

function listar_tipo_trabajo(trabajo) {
    proyecto = $("#id_ed").val();
    $.ajax({
        url: 'administrar/proyectos/lista_trabajos.php',
        type: 'post',
        dataType: 'json',
        data: {
            "trabajo": trabajo,
            "proyecto": proyecto
        },
        success: function(response) {
            var len = response.length;
            $("#tipo_trabajo").empty();
            var id = 0;
            for (var i = 0; i < len; i++) {
                id = response[i]['id'];
                var nombre = response[i]['nombre'];
                $("#tipo_trabajo").append("<option value='" + id + "'>" + nombre + "</option>");
            }
            
            $('#tipo_trabajo option:eq(0)').prop('selected', true);    
            $('.selectpicker').selectpicker('refresh');
            GetEmpalmesTipoTrabajo(id);
        }
    });

}

function cambia_permiso_municipal() {
    //console.log("estoy cambiando el valor!!");

    if ($("#num_permiso_municipal").val() == "") {
       $("#input-adjuntos-proyecto-permiso").attr("required", false);
        $("#label_aviso").hide(); //oculto la advertencia del control de archivo pdf
        if ($("#input-adjuntos-proyecto-permiso").val() != "") {
             $("#label_warning").show();
         }
    } else {
        $("#label_warning").hide(); //oculto la advertencia del control de nro municipal
        if ($("#input-adjuntos-proyecto-permiso").val() == "" && $('#id_ed').val() =='') {
            $("#input-adjuntos-proyecto-permiso").attr("required", true);
            $("#label_aviso").show();
        }else{
            $("#input-adjuntos-proyecto-permiso").attr("required", false);
            $("#label_aviso").hide();
        }
        
    }
}

function cambia_adjunto_permiso() {
    if ($("#input-adjuntos-proyecto-permiso").val() == "") {
        $("#num_permiso_municipal").attr("required", false);
        $("#label_warning").hide();

        if ($("#num_permiso_municipal").val() != "") {
             $("#label_aviso").show();
         }
    } else {
        $("#label_aviso").hide(); //oculto la advertencia del control de input
        if ($("#num_permiso_municipal").val() == "") {
          $("#num_permiso_municipal").attr("required", true);
            $("#label_warning").show();
        }else{
            $("#num_permiso_municipal").attr("required", false);
            $("#label_warning").hide();
        }
    }
}

function cancelar_adjunto_permiso() {
    $("#num_permiso_municipal").attr("required", false);
    $("#label_warning").hide();
}

