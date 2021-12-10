$(document).ready(function() {
    listar_guia();
    $('select').selectpicker();
    guardar();
    eliminar();
    $("#ediform").hide();
    $("#modalExcel").hide();
    declarar_evento_range_picker();
});


var buttonCommon = {
    exportOptions: {
        format: {
            body: function ( data, row, column, node ) {
                // Strip $ from salary column to make it numeric
                return column === 2 ?
                    data.replace( /[.]/g, ',' ):
                    data;
            }
        }
    }
};


$("#btn_cancelar").on("click", function(){
  $("#TablaOriginal").html('<table id="ListaGuia" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>N°</th><th>Nombre</th><th>Código</th><th>Cantidad</th><th>Precio Total</th><th>Tipo Pago</th><th>Fecha</th><th></th></tr></thead></table>');
  limpiar_datos();
  listar_guia();
  $('select').selectpicker();
});


var guardar = function(){
  $("#ediform").on("submit", function(e){
    e.preventDefault();
    $(".btn-wd").prop("disabled",true);
    var frm = $("#ediform form").serialize();
    $.ajax({
      method: "POST",
      url: "modulos/inventario/guia_despacho/update.php",
      data: frm
    }).done( function( info ){
        var json_info = JSON.parse( info );
        mostrar_mensaje( json_info );
        //console.log( json_info.respuesta );
        if(json_info.respuesta=="VACIO" || 
           json_info.respuesta=="ERROR" ||
           json_info.respuesta=="EXCEDE"
          ){  
        }else{
          limpiar_datos();
          listar_guia();
          $('select').selectpicker();
        }
      $(".btn-wd").prop("disabled",false);
    });
  });
}


var obtener_data_editar = function(tbody, table){
  $(tbody).on("click", "button.editar", function(){
    var data = table.row( $(this).parents("tr")).data(); 
    var id=$("#id").val( data.id_guia );
    id_producto=$("#id_producto").val( data.id_producto );
    nombre=$("#nombre_producto").val( data.nombre_producto );
    codigo=$("#cod_producto").val( data.cod_producto );
    cantidad=$("#cantidad").val( data.cantidad );
    tipo_pago = $('#tipo_pago option[value="' + data.tipo_pago + '"]').prop("selected", "selected").change();
    precio=$("#precio_total").val( data.precio_total );
    opcion = $("#opcion").val("modificar");
    $("#ediform").slideDown("slow");
    $("#lista").slideUp("slow");
  });
}


var limpiar_datos = function(){
  $("#id").val("");
  $("#id_producto").val("");
  $("#nombre_producto").val("");
  $("#cod_producto").val("");
  $("#cantidad").val("");
  $("#tipo_pago").val("").change();
  $("#precio_total").val("");
}


var listar_guia = function(fecha_inicio_rango_picker, fecha_final_rango_picker){
  $("#TablaOriginal").html('<table id="ListaGuia" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>N°</th><th>Nombre</th><th>Código</th><th>Cantidad</th><th>Precio Total</th><th>Tipo Pago</th><th>Fecha</th><th></th></tr></thead></table>');
  $("#ediform").slideUp("slow");
  $("#lista").slideDown("slow");
  var currentDate = new Date()
  var dia = currentDate.getDate()
  var mes = currentDate.getMonth() + 1
  var año = currentDate.getFullYear()
  var fecha_ = dia + "-" + mes + "-" + año;
  inicio = fecha_inicio_rango_picker;
  final = fecha_final_rango_picker;
  var table = $("#ListaGuia").DataTable({
      "order": [[ 0, "asc" ]],
      //"destroy":true,
      "ajax":{
          "method":"POST",
          "url":"modulos/inventario/guia_despacho/read_datos.php",
          "data": {
            "fecha_inicio_rango": inicio,
            "fecha_final_rango": final
          }
      },
      "columns":[
          { "data": "id_guia" },
          { "data": "nombre_producto" }, 
          { "data": "cod_producto" },
          { "data": "cantidad" }, 
          { "data": "precio_total" },
          { "data": "tipo_pago" },
          { "data": "fecha" },
          { "defaultContent" : "<button type='button' rel='tooltip' class='editar btn btn-success' style='margin: 0 !important;padding: 5px !important;' data-original-title='' title='Editar Venta'><i class='material-icons'>edit</i><div class='ripple-container'></div></button> <button type='button' rel='tooltip' class='btn btn-danger eliminar' data-target='#modaleliminar' data-toggle='modal' style='margin: 0 !important;padding: 5px !important;' data-original-title='' title='Eliminar Venta'><i class='material-icons'>close</i><div class='ripple-container'></div></button>"}
        ],
        responsive: true,
        columnDefs: [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: 7 },
            { responsivePriority: 3, targets: 1 }
        ],
        "language": lenguaje_tablas,
        "dom": "<'row'<'form-group' <'col-sm-5'B>>>"
                +"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>"
                +"<'row'<'col-sm-12'tr>>"
                +"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        pageLength: 30,
        lengthMenu: [ 30, 50, 75, 100],
        "buttons":[
          {
          text: "<i class='fa fa-file-excel-o' aria-hidden='true'></i> exportar",
          extend: 'excelHtml5', 
          title: '',
          filename: 'Lista de Guias Despacho_'+fecha_,
            exportOptions: {
              orthogonal: 'export',
              columns: [0, 1, 2, 3, 4, 5, 6]
            },
          },
          $.extend( true, {}, buttonCommon, {
          text: "<i class='material-icons'>picture_as_pdf</i> exportar",
          extend: 'pdfHtml5',
          title: 'Lista de Guias Despacho '+fecha_,
          pageSize: 'letter',
          charset: "utf-8",
                  exportOptions: {
            orthogonal: 'export',
            columns: [0, 1, 2, 3, 4, 5, 6]
          },
          // customize : function(doc) {
          //   doc.pageMargins = [40, 40, 40, 60];
          //   doc.content[1].table.widths =
          //   Array(doc.content[1].table.body[0].length + 1).join('*').split('');
          // },
        })
      ]
  });
  obtener_data_editar("#ListaGuia tbody",table);
  obtener_id_eliminar("#ListaGuia tbody",table);
}



var obtener_id_eliminar = function(tbody, table) {
  $(tbody).on("click", "button.eliminar", function(){
    var data = table.row( $(this).parents("tr")).data();
    var id=$("#frmeliminar #idel").val( data.id_guia );
    var id_productoElim = $("#idproductoElim").val( data.id_producto );
    var cantidadElim = $("#cantidadElim").val( data.cantidad );
    var descripcion= data.nombre_producto;
    $("#a-eliminar").text(descripcion);
  });
}


var eliminar = function() {
  $("#eliminar-it").on("click", function() {
    var id_eliminar = $("#frmeliminar #idel").val(),
        opcion = $("#frmeliminar #opcioneliminar").val();
        id_productoElim = $("#frmeliminar #idproductoElim").val();
        cantidadElim = $("#frmeliminar #cantidadElim").val();
    $.ajax({
      method:"POST",
      url: "modulos/inventario/guia_despacho/update.php",
      data:{"id": id_eliminar, "opcion": opcion, 
            "id_productoElim": id_productoElim, "cantidadElim": cantidadElim}
    }).done(function(info) {
      var json_info = JSON.parse( info );
      mostrar_mensaje( json_info );
      limpiar_datos();
      listar_guia();
      $('select').selectpicker();
    });
  });
}


var mostrar_mensaje = function( informacion ){
 var texto = "", color = "";
  if( informacion.respuesta == "BIEN" ){
    $.notify({
      icon: "check",
      message: "<strong>Bien!</strong> Se han guardado los cambios correctamente."
      }, {
      type: "success",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "ERROR"){
    $.notify({
      icon: "warning",
      message: "<strong>Error</strong>, no se ejecutó la consulta."
      }, {
      type: "danger",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "EXISTE" ){
    $.notify({
      icon: "person_add_disabled",
      message: "<strong>Información!</strong> el producto ya existe."
      }, {
      type: "warning",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "INGRESADO" ){
    $.notify({
      icon: "check",
      message: "<strong>Bien!</strong> los datos se ingresaron correctamente."
      }, {
      type: "success",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "VACIO" ){
    $.notify({
      icon: "priority_high",
      message: "<strong>Advertencia!</strong> debe llenar todos los campos solicitados."
      }, {
      type: "warning",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "EXCEDE" ){
    $.notify({
    icon: "priority_high",
    message: "<strong>Advertencia!</strong> la cantidad excede a la disponible."
    }, {
    type: "warning",
    timer: 3,
    placement: {
    from: "top",
    align: "center"
    }
    });
  }
}

function soloNum(e){
     key = e.keyCode || e.which;
     tecla = String.fromCharCode(key).toLowerCase();
     letras = "0123456789";
     especiales = "8-37-39-46";

     tecla_especial = false
     for(var i in especiales){
          if(key == especiales[i]){
              tecla_especial = true;
              break;
          }
      }

      if(letras.indexOf(tecla)==-1 && !tecla_especial){
          return false;
      }
  };


  function declarar_evento_range_picker(){
    var start = moment().startOf('month');
    var end = moment().endOf('month');
    $('#rango_fechas').daterangepicker({
      startDate: start,
      endDate: end,
      opens: 'center',
      showDropdowns: true,
        locale: {
            format: "DD-MM-YYYY",
            separator: " Hasta ",
            cancelLabel: 'Limpiar',
            applyLabel: 'Aplicar',
            "daysOfWeek": [
              "Do",
              "Lu",
              "Ma",
              "Mi",
              "Ju",
              "Vi",
              "Sa"
          ],
          "monthNames": [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre"
          ],
          "firstDay": 1
        }
    });
    
    $('#rango_fechas').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD-MM-YYYY') + ' Hasta ' + picker.endDate.format('DD-MM-YYYY'));
      fecha_inicio_rango_picker = picker.startDate.format('DD/MM/YYYY');
      fecha_final_rango_picker = picker.endDate.format('DD/MM/YYYY');
      listar_guia(fecha_inicio_rango_picker, fecha_final_rango_picker);
      $('select').selectpicker();
    });
    
    $('#rango_fechas').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD-MM-YYYY') + ' Hasta ' + picker.endDate.format('DD-MM-YYYY'));
      fecha_inicio_rango_picker = '';
      fecha_final_rango_picker = '';
      listar_guia();
      $('select').selectpicker();
    });
  }
