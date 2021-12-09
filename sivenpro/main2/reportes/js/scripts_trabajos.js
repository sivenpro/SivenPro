function listar_opciones_tipos_trabajos(tipoTrabajo) {

    $.ajax({
        url: 'administrar/trabajos/genera_select_tipoTrabajo.php',
        type: 'post',
        dataType: 'json',
        data: { "tipoTrabajo": tipoTrabajo, },
        success: function(response) {
            var len = response.length;
            $("#tipoTrabajo").empty();
            for (var i = 0; i < len; i++) {
                var id = response[i]['id'];
                var nombre = response[i]['nombre'];
                $("#tipoTrabajo").append("<option value='" + id + "'>" + nombre + "</option>");
            }
            $('.selectpicker').selectpicker('refresh');
            $('#tipoTrabajo option[value="' + tipoTrabajo + '"]').prop("selected", "selected").change()
        }
    });

}