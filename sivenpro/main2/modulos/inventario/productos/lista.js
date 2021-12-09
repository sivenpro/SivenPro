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
            doc.pageMargins = [20, 40, 40, 60];
            doc.content[1].table.widths =
            Array(doc.content[1].table.body[0].length + 1).join('*').split('');
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