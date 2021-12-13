$(document).ready(function() {
  listar_perfiles();
  guardar();
  eliminar();
  $("#ediform").hide();
});


$("#btn_cancelar").on("click", function(){
  $("#TablaOriginal").html('<table id="ListaPerfiles" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>ID</th><th>Nombre</th><th>Estado</th><th></th></tr></thead></table>');	
  limpiar_datos();
  listar_perfiles();
});


var agregar_nuevo_perfil = function(){
  limpiar_datos();
  opcion = $("#opcion").val("registrar");
  $("#ediform").slideDown("slow");
  $("#lista").slideUp("slow");
  $('#admin_general_click').change().prop('disabled', true);
  $('#admin_click').change().prop('disabled', true);
  $("#bodeguero_click").change().prop('disabled', true);
  $("#cont_click").change().prop('disabled', true);
}


var guardar = function(){
$("#ediform").on("submit", function(e){
  e.preventDefault();
  $(".btn-wd").prop("disabled",true);
  var frm = $("#ediform form").serialize();
  //console.log(frm);
  $.ajax({
      method: "POST",
      url: "modulos/administracion/perfiles/update.php",
      data: frm
    }).done( function( info ){				
      var json_info = JSON.parse( info );
      mostrar_mensaje( json_info );
      //console.log( json_info.respuesta );
      if(json_info.respuesta=="VACIO" || 
         json_info.respuesta=="ERROR" ||
         json_info.respuesta=="EXISTE"
        ){

      }else{
        limpiar_datos();
        listar_perfiles();
      }
      $(".btn-wd").prop("disabled",false);
    });
});
}


var obtener_data_editar = function(tbody, table) {
  $(tbody).on("click", "button.editar", function(){
    var data = table.row( $(this).parents("tr")).data(); 
    var id=$("#id").val( data.id_perfil );
    nombre_perfil=$("#nombre_perfil").val( data.nombre ).parent().addClass("is-filled");
    opcion = $("#opcion").val("modificar");

    if (data.admin_general==1){
      $('#rol_admin_click')[0].click();
      $("#admin_general_click")[0].click();
      $('#rol_bode_click, #bodeguero_click, #admin_click').change().prop('disabled', true);
      $('#rol_cont_click, #cont_click').change().prop('disabled', true);
    }

    if (data.administrador==1){
      $('#rol_admin_click')[0].click();
      $("#admin_click")[0].click();
      $('#rol_bode_click, #bodeguero_click, #admin_general_click').change().prop('disabled', true);
      $('#rol_cont_click, #cont_click').change().prop('disabled', true);
    }

    if (data.bodeguero==1){
      $("#rol_bode_click")[0].click();
      $("#bodeguero_click")[0].click();
      $('#rol_admin_click, #admin_click, #admin_general_click').change().prop('disabled', true);
      $('#rol_cont_click, #cont_click').change().prop('disabled', true);
    }

    if (data.contador==1){
      $("#rol_cont_click")[0].click();
      $("#cont_click")[0].click();
      $('#rol_bode_click, #bodeguero_click, #admin_general_click').change().prop('disabled', true);
      $('#rol_admin_click, #admin_click').change().prop('disabled', true);
    }

    $("#ediform").slideDown("slow");
    $("#lista").slideUp("slow");
  });
}


var limpiar_datos = function(){
  $("#id").val("");
  $("#nombre_perfil").val("");
  $('#rol_admin_click').prop('checked', false).change().prop('disabled', false);
  $('#admin_general_click').prop('checked', false).change().prop('disabled', false);
  $('#admin_click').prop('checked', false).change().prop('disabled', false);
  $('#rol_bode_click').prop('checked', false).change().prop('disabled', false);
  $('#bodeguero_click').prop('checked', false).change().prop('disabled', false);
  $('#rol_cont_click').prop('checked', false).change().prop('disabled', false);
  $('#cont_click').prop('checked', false).change().prop('disabled', false);
}


var listar_perfiles = function(){
  $("#TablaOriginal").html('<table id="ListaPerfiles" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>ID</th><th>Nombre</th><th>Estado</th><th></th></tr></thead></table>'); //elimina el formato de la tabla y la regenera vacía
  $("#ediform").slideUp("slow");
  $("#lista").slideDown("slow");
var table = $("#ListaPerfiles").DataTable({
    //"destroy":true,
    "ajax":{
        "method":"POST",
        "url":"modulos/administracion/perfiles/read_perfiles.php"
    },
    "columns":[
        { "data": "id_perfil" },
        { "data": "nombre" },
        { "data": "estado" },
        { "defaultContent" : "<button type='button' rel='tooltip' class='editar btn btn-success' style='margin: 0 !important;padding: 5px !important;' data-original-title='' title=''><i class='material-icons'>edit</i><div class='ripple-container'></div></button> <button type='button' rel='tooltip' class='btn btn-danger eliminar' data-target='#modalEliminar' data-toggle='modal' style='margin: 0 !important;padding: 5px !important;' data-original-title='' title=''><i class='material-icons'>close</i><div class='ripple-container'></div></button>"}
    ],
    responsive: true,
    columnDefs: [
        { responsivePriority: 1, targets: 0 },
        { responsivePriority: 2, targets: 3 },
        { responsivePriority: 3, targets: 1 }
    ],
    "language": lenguaje_tablas,
    "dom": "Bfrtip",
    "buttons":[
      {
        "text": "<i class='fa fa-user-plus' aria-hidden='true'></i> nuevo",
        "tittleAttr": "Agregar Perfil",
        "action": function(){
            agregar_nuevo_perfil();
        }
      }
    ]
});
  obtener_data_editar("#ListaPerfiles tbody",table);
  obtener_id_eliminar("#ListaPerfiles tbody",table);
}



var obtener_id_eliminar = function(tbody, table) {
$(tbody).on("click", "button.eliminar", function(){
  var data = table.row( $(this).parents("tr")).data();
  var id=$("#frmEliminar #idel").val( data.id_perfil );
  var nombre_perfil= data.nombre;
  $("#a-eliminar").text(nombre_perfil);
});
}


var eliminar = function() {
$("#eliminar-it").on("click", function() {
  var id_eliminar = $("#frmEliminar #idel").val(),
      opcion = $("#frmEliminar #opcioneliminar").val();
  $.ajax({
    method:"POST",
    url: "modulos/administracion/perfiles/update.php",
    data:{"id": id_eliminar, "opcion": opcion}
  }).done(function(info) {
    var json_info = JSON.parse( info );
    mostrar_mensaje( json_info );
    limpiar_datos();
    listar_perfiles();
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
      message: "<strong>Información!</strong> el perfil ya existe."
      }, {
      type: "warning",
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
  }
}


$('#rol_admin_click').click(function(){
  if($(this).is(':checked')){
    $('#admin_general_click, #admin_click').change().prop('disabled', false);
    $('#rol_bode_click').change().prop('disabled', true);
    $('#rol_cont_click').change().prop('disabled', true);
  }
  else{
    $('#admin_general_click, #admin_click').prop('checked', false).change().prop('disabled', true);
    $('#rol_bode_click').change().prop('disabled', false);
    $('#rol_cont_click').change().prop('disabled', false);
  }
});


$('#rol_bode_click').click(function(){
  if($(this).is(':checked')){
    $("#bodeguero_click").change().prop('disabled', false);
    $('#rol_admin_click').change().prop('disabled', true);
    $('#rol_cont_click').change().prop('disabled', true);
  }
  else{
    $('#bodeguero_click').prop('checked', false).change().prop('disabled', true);
    $('#rol_admin_click').change().prop('disabled', false);
    $('#rol_cont_click').change().prop('disabled', false);
  }
});


$('#rol_cont_click').click(function(){
  if($(this).is(':checked')){
    $("#cont_click").change().prop('disabled', false);
    $('#rol_admin_click').change().prop('disabled', true);
    $('#rol_bode_click').change().prop('disabled', true);
  }
  else{
    $("#cont_click").prop('checked', false).change().prop('disabled', true);
    $('#rol_admin_click').change().prop('disabled', false);
    $('#rol_bode_click').change().prop('disabled', false);
  }
});


$('#admin_general_click').click(function(){
  if($(this).is(':checked')){
    $("#admin_click").change().prop('disabled', true);
  }
  else{
    $("#admin_click").change().prop('disabled', false);
  }
});


$('#admin_click').click(function(){
  if($(this).is(':checked')){
    $("#admin_general_click").change().prop('disabled', true);
  }
  else{
    $("#admin_general_click").change().prop('disabled', false);
  }
});