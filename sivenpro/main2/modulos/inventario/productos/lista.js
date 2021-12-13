$(document).ready(function() {
    listar_productos();
    $('select').selectpicker();
    guardar();
    subir_excel();
    eliminar();
    agregar_nueva_guia();
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
  $("#TablaOriginal").html('<table id="ListaProductos" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>N°</th><th>Nombre</th><th>Código</th><th>Cantidad</th><th>Precio</th><th>Fecha Vencimiento</th><th></th></tr></thead></table>');
  limpiar_datos();
  listar_productos();
  $('select').selectpicker();
});


$("#btn_cancelar2").on("click", function(){
  $("#TablaOriginal").html('<table id="ListaProductos" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>N°</th><th>Nombre</th><th>Código</th><th>Cantidad</th><th>Precio</th><th>Fecha Vencimiento</th><th></th></tr></thead></table>');
  $("#modalExcel").slideUp("slow");
  limpiar_datos();
  listar_productos();
  $('select').selectpicker();
  $("#name").val("");
});


$("#btn_cancelar3").on("click", function(){
  $("#TablaOriginal").html('<table id="ListaProductos" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>N°</th><th>Nombre</th><th>Código</th><th>Cantidad</th><th>Precio</th><th>Fecha Vencimiento</th><th></th></tr></thead></table>');
  limpiar_datos();
  listar_productos();
  $('select').selectpicker();
});


var agregar_nuevo_producto = function(){
  opcion = $("#opcion").val("registrar");
  limpiar_datos();
  $("#ediform").slideDown("slow");
  $("#lista").slideUp("slow");
}


var guardar = function(){
  $("#ediform").on("submit", function(e){
    e.preventDefault();
    $(".btn-wd").prop("disabled",true);
    var frm = $("#ediform form").serialize();
    var imagen = $("#url_imagen").val();
    // console.log(imagen);
    $.ajax({
      method: "POST",
      url: "modulos/inventario/productos/update.php",
      data: frm+"&imagen="+imagen
    }).done( function( info ){
        if (imagen!=""){ajaxSubeFoto();}else{}
        setTimeout(() => {
          var json_info = JSON.parse( info );
          mostrar_mensaje( json_info );
          //console.log( json_info.respuesta );
          if(json_info.respuesta=="VACIO" || 
             json_info.respuesta=="ERROR" ||
             json_info.respuesta=="EXISTE" ||
             json_info.respuesta=="ERROR_ACCESO"
            ){

          }else{
            limpiar_datos();
            listar_productos();
            $('select').selectpicker();
          }  
        }, 500);
      $(".btn-wd").prop("disabled",false);
    });
  });
}


var obtener_data_editar = function(tbody, table) {
  $(tbody).on("click", "button.editar", function(){
    var data = table.row( $(this).parents("tr")).data(); 
    var id=$("#id").val( data.id_producto );
    nombre=$("#nombre_producto").val( data.nombre_producto );
    codigo=$("#cod_producto").val( data.cod_producto );
    cantidad=$("#cantidad").val( data.cantidad );
    precio=$("#precio").val( data.precio );
    marca=$("#marca").val( data.marca );
    cont_neto=$("#cont_neto").val( data.cont_neto );
    fecha=$("#fecha_venc").val( data.fecha_venc );
    opcion = $("#opcion").val("modificar");

    $("#img_dinamico").attr("src","data:image/png;base64,"+data.imagen_ref).show();
    $("#imagen_defecto").hide();
    $("#elegir_imagen").text("cambiar imagen");

    $("#ediform").slideDown("slow");
    $("#lista").slideUp("slow");
  });
}


var limpiar_datos = function(){
  $("#id").val("");
  $("#nombre_producto").val("");
  $("#cod_producto").val("");
  $("#cantidad").val("");
  $("#precio").val("");
  $("#marca").val("");
  $("#cont_neto").val("");
  $("#fecha_venc").val("");
  $("#url_imagen").val("");
  $("#elegir_imagen").text("elegir imagen");
  $("#img_dinamico").hide().attr("src","");
  $("#imagen_defecto").show();
  $("#nombre_producto_guia").val("");
  $("#cantidad_guia").val("");
  $("#tipo_pago_guia").val("").change();
}


var importar_excel = function(){
  $("#modalExcel").slideDown("slow");
  $("#lista").slideUp("slow");
}


var subir_excel = function(){
  $('#formExcel').on('submit', function(event){
  event.preventDefault();
  $name = $("#name").val();
  if ($name != ""){
  $(".btn-imp").prop("disabled",true);
  $.ajax({
  url:"modulos/inventario/productos/importar.php",
  method:"POST",
  data:new FormData(this),
  contentType:false,
  cache:false,
  processData:false,
}).done( function( info ){
    var json_info = JSON.parse( info );
    mostrar_mensaje( json_info );
    if(json_info.respuesta=="NOMBRE_VACIO" ||
       json_info.respuesta=="CODIGO_VACIO" ||
       json_info.respuesta=="CONT_VACIO" ||
       json_info.respuesta=="PRECIO_NO_NUM" ||
       json_info.respuesta=="CANTIDAD_NO_NUM" ||
       json_info.respuesta=="EXISTENTE"){
      $("#modalExcel").slideDown("slow");
      $(".btn-imp").prop("disabled", false);
      limpiar_datos();
    }
    else
    {
      $("#modalExcel").slideUp("slow");
      limpiar_datos();
      listar_productos();
      $(".btn-imp").prop("disabled", false);
      $('select').selectpicker();
      $("#name").val("");
    }
    });
  }else{
    alert("Seleccione un archivo!");
  }
  });
}


var listar_productos = function(fecha_inicio_rango_picker, fecha_final_rango_picker){
  $("#TablaOriginal").html('<table id="ListaProductos" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>N°</th><th>Nombre</th><th>Código</th><th>Cantidad</th><th>Precio</th><th>Fecha Vencimiento</th><th></th></tr></thead></table>');
  $("#ediform").slideUp("slow");
  $("#lista").slideDown("slow");
  var currentDate = new Date()
  var dia = currentDate.getDate()
  var mes = currentDate.getMonth() + 1
  var año = currentDate.getFullYear()
  var fecha_ = dia + "-" + mes + "-" + año;
  inicio = fecha_inicio_rango_picker;
  final = fecha_final_rango_picker;
  var table = $("#ListaProductos").DataTable({
      "order": [[ 0, "asc" ]],
      //"destroy":true,
      "ajax":{
          "method":"POST",
          "url":"modulos/inventario/productos/read_datos.php",
          "data": {
            "fecha_inicio_rango": inicio,
            "fecha_final_rango": final
          }
      },
      "columns":[
          { "data": "id_producto" },
          { "data": "nombre_producto" }, 
          { "data": "cod_producto" }, 
          { "data": "cantidad" }, 
          { "data": "precio" },
          { "data": "fecha_convert" },
          { "defaultContent" : "<button type='button' rel='tooltip' class='editar btn btn-success' style='margin: 0 !important;padding: 5px !important;' data-original-title='' title='Editar Producto'><i class='material-icons'>edit</i><div class='ripple-container'></div></button> <button type='button' rel='tooltip' class='btn btn-danger eliminar' data-target='#modaleliminar' data-toggle='modal' style='margin: 0 !important;padding: 5px !important;' data-original-title='' title='Eliminar Producto'><i class='material-icons'>close</i><div class='ripple-container'></div></button> <button type='button' rel='tooltip' class='btn btn-primary nueva_guia' data-target='#modalGuia' data-toggle='modal' style='margin: 0 !important;padding: 5px !important;' data-original-title='' title='Bajada de stock'><i class='material-icons'>description</i><div class='ripple-container'></div></button>"}
        ],
        responsive: true,
        columnDefs: [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: 6 },
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
          filename: 'Lista de Productos_'+fecha_,
            exportOptions: {
              orthogonal: 'export',
              columns: [0, 1, 2, 3, 4, 5]
            },
          },
          $.extend( true, {}, buttonCommon, {
          text: "<i class='material-icons'>picture_as_pdf</i> exportar",
          extend: 'pdfHtml5',
          title: 'Lista de Productos '+fecha_,
          pageSize: 'letter',
          charset: "utf-8",
                  exportOptions: {
            orthogonal: 'export',
            columns: [0, 1, 2, 3, 4, 5]
          },
          customize : function(doc) {
            doc.pageMargins = [40, 40, 40, 60];
						var objLayout = {};
						objLayout['hLineColor'] = function(i) { return '#312E2E'; };
						objLayout['vLineColor'] = function(i) { return '#312E2E'; };
						objLayout['paddingLeft'] = function(i) { return 6; };
						objLayout['paddingRight'] = function(i) { return 6; };
						doc.content[1].layout = objLayout;
            doc.content[1].table.widths =
            Array(doc.content[1].table.body[0].length + 1).join('*').split('');
            doc.watermark = {text: 'SivenPro', color: 'blue', opacity: 0.1};
            doc.styles.tableHeader = {
                fontSize: 11,
                fillColor:'#171C3C',
                color:'white',
                alignment:'left'
            },
            doc.content.splice( 1, 0, {
              margin: [ 0, -50, 0, 20 ],
              alignment: 'right',
              image: 'data:image/png;base64,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',
              width: 50
            });
          },
        })
      ]
  });
  obtener_data_editar("#ListaProductos tbody",table);
  obtener_id_eliminar("#ListaProductos tbody",table);
  obtener_id_guia("#ListaProductos tbody",table);
}



var obtener_id_eliminar = function(tbody, table) {
  $(tbody).on("click", "button.eliminar", function(){
    var data = table.row( $(this).parents("tr")).data();
    var id=$("#frmeliminar #idel").val( data.id_producto );
    var descripcion= data.nombre_producto;
    $("#a-eliminar").text(descripcion);
  });
}


var eliminar = function() {
  $("#eliminar-it").on("click", function() {
    var id_eliminar = $("#frmeliminar #idel").val(),
        opcion = $("#frmeliminar #opcioneliminar").val();        
    $.ajax({
      method:"POST",
      url: "modulos/inventario/productos/update.php",
      data:{"id": id_eliminar, "opcion": opcion}
    }).done(function(info) {
      var json_info = JSON.parse( info );
      mostrar_mensaje( json_info );
      limpiar_datos();
      listar_productos();
      $('select').selectpicker();
    });
  });
}


var obtener_id_guia = function(tbody, table) {
  $(tbody).on("click", "button.nueva_guia", function(){
    var data = table.row( $(this).parents("tr")).data();
    var id=$("#frmGuia #id_guia").val( data.id_producto );
    var descripcion= data.nombre_producto;
    $("#nombre_producto_guia").val(descripcion);
  });
}


var agregar_nueva_guia = function() {
  $("#agregar-it").on("click", function() {
    var id_prod_guia = $("#frmGuia #id_guia").val(),
        cantidad = $("#frmGuia #cantidad_guia").val(),
        tipo_pago = $("#frmGuia #tipo_pago_guia").val(),
        opcion = $("#frmGuia #opcionguia").val();
    $.ajax({
      method:"POST",
      url: "modulos/inventario/productos/update.php",
      data:{"id": id_prod_guia,
            "cantidad": cantidad,
            "tipo_pago": tipo_pago,
            "opcion": opcion}
    }).done(function(info) {
      var json_info = JSON.parse( info );
      mostrar_mensaje( json_info );
      //console.log( json_info.respuesta );
      if(json_info.respuesta=="VACIO" || 
         json_info.respuesta=="ERROR" ||
         json_info.respuesta=="EXCEDE"
        ){}else{
          limpiar_datos();
          listar_productos();
          $('select').selectpicker();
        }
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
  }else if( informacion.respuesta == "EXISTENTE" ){
    informacion.data.forEach(element => {
      texto+="Fila: <strong> " + element.fila +  "</strong> Código: <strong>" + element.cod_producto + "</strong><br>";
    });

    $.notify({
      icon: "person_add_disabled",
      message: "<strong>Información!</strong> se encontraron datos ya registrados, por favor revisar Excel. <br/>"+ texto,
      }, {
      type: "warning",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "NOMBRE_VACIO" ){
    if(informacion.data.length == 1){
      filas = "Fila: <strong>" + informacion.data.join() + "</strong>";
    }else{
      filas = "Filas: <strong>" + informacion.data.join() + "</strong>";
    }

    $.notify({
      icon: "person_add_disabled",
      message: "<strong>Información!</strong> el documento contiene nombres de productos vacíos! (intente modificar).<br/>" +filas,
      }, {
      type: "warning",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "CODIGO_VACIO" ){
    if(informacion.data.length == 1){
      filas = "Fila: <strong>" + informacion.data.join() + "</strong>";
    }else{
      filas = "Filas: <strong>" + informacion.data.join() + "</strong>";
    }

    $.notify({
      icon: "person_add_disabled",
      message: "<strong>Información!</strong> el documento contiene códigos vacíos! (intente modificar).<br/>"+filas,
      }, {
      type: "warning",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "CONT_VACIO" ){
    if(informacion.data.length == 1){
      filas = "Fila: <strong>" + informacion.data.join() + "</strong>";
    }else{
      filas = "Filas: <strong>" + informacion.data.join() + "</strong>";
    }

    $.notify({
      icon: "person_add_disabled",
      message: "<strong>Información!</strong> el documento contiene filas de Cont. Neto vacías! (intente modificar).<br/>"+filas,
      }, {
      type: "warning",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "UN_COMPRA_VACIO" ){
    if(informacion.data.length == 1){
      filas = "Fila: <strong>" + informacion.data.join() + "</strong>";
    }else{
      filas = "Filas: <strong>" + informacion.data.join() + "</strong>";
    }

    $.notify({
      icon: "person_add_disabled",
      message: "<strong>Información!</strong> el documento contiene materiales sin unidad de compra! (intente modificar).<br/>"+filas,
      }, {
      type: "warning",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "PRECIO_NO_NUM" ){
    if(informacion.data.length == 1){
      filas = "Fila: <strong>" + informacion.data.join() + "</strong>";
    }else{
      filas = "Filas: <strong>" + informacion.data.join() + "</strong>";
    }

    $.notify({
      icon: "person_add_disabled",
      message: "<strong>Información!</strong> el documento contiene precios erróneos! (intente modificar).<br/>"+filas,
      }, {
      type: "warning",
      timer: 3,
      placement: {
      from: "top",
      align: "center"
      }
    });
  }else if( informacion.respuesta == "CANTIDAD_NO_NUM" ){
    if(informacion.data.length == 1){
      filas = "Fila: <strong>" + informacion.data.join() + "</strong>";
    }else{
      filas = "Filas: <strong>" + informacion.data.join() + "</strong>";
    }

    $.notify({
      icon: "person_add_disabled",
      message: "<strong>Información!</strong> el documento contiene cantidades erróneas! (intente modificar).<br/>"+filas,
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
      listar_productos(fecha_inicio_rango_picker, fecha_final_rango_picker);
      $('select').selectpicker();
    });
    
    $('#rango_fechas').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD-MM-YYYY') + ' Hasta ' + picker.endDate.format('DD-MM-YYYY'));
      fecha_inicio_rango_picker = '';
      fecha_final_rango_picker = '';
      listar_productos();
      $('select').selectpicker();
    });
  }


  var ajaxSubeFoto = function() {
    var formdata = new FormData();
    var files = $('#url_imagen')[0].files[0],
    id_producto = $("#id").val();
    formdata.append('file', files);
    formdata.append('opcion', 'subir_foto');
    formdata.append('id', id_producto);
    $.ajax({
      url: "modulos/inventario/productos/update.php",
      type: 'POST',
      data: formdata,
      contentType: false,
      cache: false,
      processData: false,
      success: function(info) {
        $('a[href="#pablo"]').click();
        $("#id").val("");
      },
    });
  }


  $( "#url_imagen" ).click(function() {
    $("#imagen_defecto").show();
    $("#img_dinamico").hide().attr("src", "");
  });