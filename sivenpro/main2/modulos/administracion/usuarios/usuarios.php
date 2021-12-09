<!--  <div class="container-fluid"> -->
<div class="container-fluid">
  <div id="ediform" class="col-md-12 col-12 mr-auto ml-auto">
    <!--      Wizard container        -->
    <div class="wizard-container">
      <div class="card card-wizard active" data-color="rose" id="wizardProfile">
        <form action="" method="POST">
          <input type="hidden" id="id" name="id" value="">
          <input type="hidden" id="opcion" name="opcion" value="registrar">
          <!--        You can switch " data-color="primary" "  with one of the next bright colors: "green", "orange", "red", "blue"       -->
          <div class="card-header text-center">
            <!--<h3 class="card-title">
                      Detalles de la Cuenta
                    </h3>
                    <h5 class="card-description">Completa la información del contratista</h5>-->
          </div>
          <div class="wizard-navigation">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#about" data-toggle="tab" role="tab" id="cuenta_">
                  Cuenta
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#account" data-toggle="tab" role="tab">
                  Privilegios
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#address" data-toggle="tab" role="tab">
                  Detalles
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content">
              <div class="tab-pane active" id="about">
                <h5 class="info-text"> Información de acceso</h5>
                <div class="row justify-content-center">
                  <div class="col-sm-4">
                    <div class="picture-container" id="avatar_foto">
                      <div class="picture">
                        <img src="assets/img/default-avatar.png" class="picture-src" id="wizardPicturePreviewt" title="" />
                        <img src="assets/img/default-avatar.png" class="picture-src" id="wizardPicturePreview" title="" style="display:none;" />
                        <input type="file" id="wizard-picture" name="wizard-picture" accept="image/png, image/jpeg, image/jpg">
                        <input type="hidden" id="wizard-picture_0" name="wizard-picture_0">
                      </div>
                      <h6 class="description" id="desc-sinfoto">Seleccione imagen</h6>
                      <button class="btn btn-default btn-sm ncfoto" id="ncfoto">Cancelar<div class="ripple-container"></div></button>
                      <h6 class="description" id="desc-confoto">
                        <button class="btn btn-primary btn-sm cfoto" id="cfoto">Cambiar<div class="ripple-container"></div></button>
                      </h6>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-group form-control-lg">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">face</i>
                        </span>
                      </div>
                      <div class="form-group">
                        <label for="nombre_completo" class="bmd-label-floating">Nombre y Apellido (Requerido)</label>
                        <input type="text" class="form-control noEnterSubmit" id="nombre_completo" name="nombre_completo" required>
                      </div>
                    </div>
                    <div class="input-group form-control-lg">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">record_voice_over</i>
                        </span>
                      </div>
                      <div class="form-group">
                        <label for="n_usuario" class="bmd-label-floating">Nombre de usuario (Requerido)</label>
                        <input type="text" class="form-control noEnterSubmit" id="n_usuario" name="n_usuario" required>
                      </div>
                    </div>
                    <div class="input-group form-control-lg">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">lock</i>
                        </span>
                      </div>
                      <div class="form-group">
                        <label for="n_cpass" class="bmd-label-floating">Contraseña</label>
                        <button class="btn btn-primary btn-sm cclave" id="cclave">Cambiar<div class="ripple-container"></div></button>
                        <input type="text" class="form-control pw noEnterSubmit" id="n_cpass" name="n_cpass" style="display:none;" autocomplete="off">
                        <button class="btn btn-default btn-sm ncclave" id="ncclave" style="display:none;">No Cambiar<div class="ripple-container"></div></button>
                      </div>
                    </div>

                  </div>
                  <div class="col-lg-10 mt-3">
                    <div class="input-group form-control-lg">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">email</i>
                        </span>
                      </div>
                      <div class="form-group">
                        <label for="email" class="bmd-label-floating">Email (Requerido)</label>
                        <input type="email" class="form-control noEnterSubmit" id="email" name="email" required>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane" id="account">
                <h5 class="info-text"> Selecciona el tipo de acceso que tendrá el usuario</h5>
                <div class="row justify-content-center">
                  <div class="col-lg-10">
                    <?php include_once("lista_perfiles.php");?>
                  </div>
                </div>
              </div>

              <div class="tab-pane" id="address">
                <div class="row justify-content-center">
                  <div class="col-sm-12">
                    <h5 class="info-text"> Agrega información adicional </h5>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-group select-wizard">
                      <label>Dirección</label>
                      <input type="text" class="form-control noEnterSubmit" id="direccion" name="direccion" required>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="form-group select-wizard">
                      <label>Comuna</label>
                      <select class="selectpicker" id="comuna" name="comuna" data-size="7" data-style="select-with-transition" title="Seleccionar">
                        <option value="Los Ángeles">Los Ángeles</option>
                        <option value="Talcahuano">Talcahuano</option>
                        <option value="Concepción">Concepción</option>
                        <option value="Chiguayante">Chiguayante</option>
                        <option value="Hualpén">Hualpén</option>
                        <option value="Tomé">Tomé</option>
                        <option value="San Pedro de la Paz">San Pedro de la Paz</option>
                        <option value="Coronel">Coronel</option>
                        <option value="Lota">Lota</option>
                      </select>
                    </div>
                  </div>
                  <!-- <div class="col-sm-2">
                    <div class="form-group" style="margin-top: 16px;">
                      <label>Color Grafico</label>
                      <input type="color" id="color" name="color" value="#00100c" class="form-control noEnterSubmit">
                    </div>
                  </div> -->
                  <div class="col-md-4 col-sm-4" style="text-align: center;" id="marco_firma">
                    <h5 class="title" style="margin-bottom: 8px;"><strong>Firma Digital</strong></h5>
                    <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                      <div class="fileinput-new thumbnail">
                        <img src="assets/img/image_placeholder.jpg" id="foto_firma">
                      </div>
                      <div>
                        <div class="ml-auto">
                          <input id="btn_firma" type="button" class="btn btn-rose btn-round ing_firma" data-target="#modalFirma" data-toggle="modal" value="Firmar aquí">
                          <input id="btn_subir_firma" type="button" class="btn btn-info btn-round" data-target="#modalSubeFirma" data-toggle="modal" value="Subir firma">
                          <button type="button" id="btn_eli_firma" class="btn btn-danger btn-round" data-dismiss="modal"><span class="material-icons">close</span> eliminar</button>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="mr-auto">
              <input type="button" class="btn btn-previous btn-fill btn-default btn-wd disabled" name="previous" value="Atras">
            </div>
            <div class="ml-auto">
              <input id="btn_cancelar" type="button" class="btn btn-default" value="Cancelar">
              <input type="button" class="btn btn-next btn-fill btn-rose btn-wd" name="next" value="Siguiente">
              <input type="submit" class="btn btn-finish btn-fill btn-rose btn-wd" name="Guardar" id="guardar_formulario" value="Guardar" style="display: none;">
            </div>
            <div class="clearfix"></div>
          </div>
        </form>
      </div>
    </div>
    <!-- wizard container -->
  </div>
  <div id="lista" class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <div class="toolbar">
            <!--        Here you can write extra buttons/actions for the toolbar              -->
          </div>
          <div class="material-datatables" id="TablaOriginal"></div>
        </div>
        <!-- end content-->
      </div>
      <!--  end card  -->
    </div>
    <!-- end col-md-12 -->
  </div>
  <!-- end row -->
</div>

<div>
  <form id="frmEliminar" action="" method="POST">
    <input type="hidden" id="idel" name="id" value="">
    <input type="hidden" id="opcioneliminar" name="opcion" value="eliminar">
    <!-- Modal -->
    <div class="modal fade" id="modalEliminar" tabindex="-1" role="dialog" aria-labelledby="modalEliminarLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="modalEliminarLabel" style="color:#FF0000"><strong>Eliminar Usuario</strong></h4>
          </div>
          <div class="modal-body">
            ¿Está seguro de eliminar al usuario <strong data-name="" id="a-eliminar"></strong>?<p></p>
            Si continúa se eliminarán <strong>todos los datos</strong> registrados sobre este usuario!
          </div>
          <div class="modal-footer">
            <button type="button" id="eliminar-it" class="btn btn-danger" data-dismiss="modal">eliminar</button>
            <p></p>
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
  </form>
</div>


<!-- Modal dibujar firma-->
<div>
  <form id="frmFirma" action="" method="POST">
    <input type="hidden" id="id_usu" name="id" value="">
    <input type="hidden" id="opcionfirma" name="opcion" value="firma">
    <div class="modal fade" id="modalFirma" tabindex="-1" role="dialog" aria-labelledby="modalFirmaLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;margin-right: 15px;margin-top: 5px;"><span aria-hidden="true">&times;</span></button>
          <h3 class="title" style="margin-bottom: 8px; margin-top: 0px;margin-left: 150px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> <strong> Dibuje su firma</strong></h3>
          <canvas id="canvas" style="margin-top:10px">Su navegador no soporta canvas :( </canvas>
          <div class="modal-footer">
            <button type="button" id="subeFirma-it" class="btn btn-success" data-dismiss="modal">Ingresar</button>
            <p></p>
            <button type="button" id="limpiar" class="btn btn-default">Limpiar</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
<!-- Fin Modal dibujar Firma-->


<!-- Modal subir firma-->
<div>
  <form id="frmSubeFirma" action="" method="POST">
    <input type="hidden" id="id_user" name="id" value="">
    <input type="hidden" id="opcionsubefirma" name="opcion" value="sube_firma">
    <div class="modal fade" id="modalSubeFirma" tabindex="-1" role="dialog" aria-labelledby="modalSubeFirmaLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;margin-right: 15px;margin-top: 5px;"><span aria-hidden="true">&times;</span></button>
          <h4 class="title" style="text-align:center"><strong>Subir Imagen de Firma</strong></h4>
          <div class="fileinput fileinput-new text-center" data-provides="fileinput">
            <div class="fileinput-new thumbnail">
              <img src="assets/img/image_placeholder.jpg" alt="...">
            </div>
            <div class="fileinput-preview fileinput-exists thumbnail"></div>
            <div>
              <span class="btn btn-info btn-round btn-file">
                <span class="fileinput-new">Seleccionar imagen</span>
                <span class="fileinput-exists">cambiar</span>
                <input type="file" name="up_firma" id="up_firma" />
              </span>
              <a href="#pablo" id="btn_quita_firma" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput"><span class="material-icons">close</span> quitar</a>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" id="subeFirma_" class="btn btn-success" data-dismiss="modal">agregar</button>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
<!-- Fin Modal subir Firma-->


<!-- Modal recortar foto -->
<div id="uploadimageModal" class="modal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Upload & Crop Image</h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-8 text-center">
            <div id="image_demo" style="width:350px; margin-top:30px"></div>
          </div>
          <div class="col-md-4" style="padding-top:30px;">
            <br />
            <br />
            <br />
            <button class="btn btn-success crop_image">Crop & Upload Image</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal recortar foto -->


<script src="assets/demo/demo.js"></script>
<script>
  $(document).ready(function(){
    listar_usuarios();
    guardar();
    $("#btn_eli_firma").hide();
    eliminar();
    subir_firma();
    subir_foto();
    subir_foto_firma();
    eliminar_firma();
    $('select').selectpicker();
    // $('.bootstrap-select').css({'width': '100% !important'});
    demo.initMaterialWizard(); //formulario usuario
    $("#ediform").hide();
    $('[data-toggle="wizard-radio"]').click(function() {
      const wizard = $(this).closest('.card-wizard');
      wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
      $(this).addClass('active');
      $(wizard).find('[type="radio"]').removeAttr('checked');
      $(this).find('[type="radio"]').attr('checked', 'true');
    });
    setTimeout(function() {
      $('.card.card-wizard').addClass('active');
    }, 600);
  });


  var buttonCommon = {
    exportOptions: {
      format: {
        body: function(data, row, column, node) {
          // Strip $ from salary column to make it numeric
          return column === 2 ?
            data.replace(/[.]/g, '.') :
            data;
        }
      }
    }
  };

  $("#btn_cancelar").on("click", function(){
    $("#cuenta_").click();
    $("#TablaOriginal").html('<table id="ListaUsuarios" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>ID</th><th>Nombre</th><th>Usuario</th><th>Comuna</th><th>Perfil</th><th></th></tr></thead></table>');
    limpiar_datos();
    listar_usuarios();
  });

  $(".close").on("click", function() {
    limpiar_firma();
    $("#btn_quita_firma").click();
  });

  var guardar = function() {
    $("#ediform").on("submit", function(e) {
      if ($("#wizard-picture").val() == "") {
        e.preventDefault();
        $(".btn-wd").prop("disabled", true);
        var frm = $("#ediform form").serialize();
        $.ajax({
          method: "POST",
          url: "modulos/administracion/usuarios/update.php",
          data: frm
        }).done(function(info) {
          var json_info = JSON.parse(info);
          switch (json_info.respuesta) {
            case "EXISTE":
              mostrar_mensaje(json_info);
              $("#cuenta_").click();
              $("#n_usuario").val("");
              $(".btn-wd").prop("disabled", false).click();
              break;

            default:
              mostrar_mensaje(json_info);
              limpiar_datos();
              listar_usuarios();
              $(".btn-wd").prop("disabled", false);
              break;
          }
        });
      } else {
        e.preventDefault();
        subir_foto();
      }
    });
  }


  var limpiar_datos = function() {
    $("#cuenta_").click();
    $('input:radio[name="perfil-unico"]').attr('checked', false);
    $(".choice").removeClass("active");
    $("#id").val("");
    $("#n_usuario, #n_cpass, #nombre_completo, #email").val("").parent().removeClass("is-filled has-danger has-success");
    $("#wizard-picture, #telefono, #direccion").val("");
    $("#comuna").val("").change();
    $("#wizardPicturePreview").attr("src", "assets/img/default-avatar.png");
    $("#desc-sinfoto").show();
    $("#desc-confoto").hide();
    $("#cfoto").click();
    $("#ncfoto").hide();
    $("#cclave, #ncclave").hide();
    $("#sube_firma, #foto_firma").val("");
    $("#avatar_foto, #marco_firma").show();
  }


  var limpiar_firma = function() {
    dibujar = false;
    ctx.clearRect(0, 0, cw, ch);
    Trazados.length = 0;
    puntos.length = 0;
  }


  var listar_usuarios = function() {
    $("#TablaOriginal").html('<table id="ListaUsuarios" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%"><thead><tr><th>ID</th><th>Nombre</th><th>Usuario</th><th>Comuna</th><th>Perfil</th><th></th></tr></thead></table>');
    $("#ediform").slideUp("slow");
    $("#lista").slideDown("slow");
    var currentDate = new Date()
    var dia = currentDate.getDate()
    var mes = currentDate.getMonth() + 1
    var año = currentDate.getFullYear()
    var fecha_ = dia + "-" + mes + "-" + año;
    var table = $("#ListaUsuarios").DataTable({
      //"destroy":true,
      "ajax": {
        "method": "POST",
        "url": "modulos/administracion/usuarios/read_usuarios.php"
      },
      "columns": [
        {"data": "id_usuario"},
        {"data": "nombre_completo"},
        {"data": "nombre"},
        {"data": "comuna"},
        {"data": "nombre_perfil"},
        { "defaultContent": "<button type='button' rel='tooltip' class='editar btn btn-success' style='margin: 0 !important;padding: 5px !important;' data-original-title='' title=''><i class='material-icons'>edit</i><div class='ripple-container'></div></button> <button type='button' rel='tooltip' class='btn btn-danger eliminar' data-target='#modalEliminar' data-toggle='modal' style='margin: 0 !important;padding: 5px !important;' data-original-title='' title=''><i class='material-icons'>close</i><div class='ripple-container'></div></button>"}
      ],
      responsive: true,
      columnDefs: [
        {responsivePriority: 1,targets: 0},
        {responsivePriority: 2,targets: 5},
        {responsivePriority: 3,targets: 1}
      ],
      "language": lenguaje_tablas,
      "dom": "<'row'<'form-group' <'col-sm-5'B>>>" +
        "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      pageLength: 20,
      lengthMenu: [20, 50, 75, 100],
      "buttons": [{
          "text": "<i class='material-icons'>note_add</i> nuevo",
          "tittleAttr": "Agregar Usuario",
          "action": function() {
            agregar_nuevo_usuario();
          }
        },
        {
          text: "<i class='fa fa-file-excel-o' aria-hidden='true'></i> exportar",
          extend: 'excelHtml5',
          filename: 'Lista de Usuarios ' + fecha_,
          title: '',
          fieldSeparator: '\t',
          exportOptions: {
            orthogonal: 'export',
            columns: [0, 1, 2, 3, 4]
          }
        },
        $.extend(true, {}, buttonCommon, {
          text: "<i class='material-icons'>picture_as_pdf</i> exportar",
          extend: 'pdfHtml5',
          title: 'Lista de Usuarios ' + fecha_,
          pageSize: 'letter',
          exportOptions: {
            orthogonal: 'export',
            columns: [0, 1, 2, 3, 4]
          },
          customize: function(doc) {
            doc.pageMargins = [60, 40, 60, 30];
            doc.content[1].table.widths =
              Array(doc.content[1].table.body[0].length + 1).join('*').split('');
          },
        })
      ]
    });
    obtener_data_editar("#ListaUsuarios tbody", table);
    obtener_id_eliminar("#ListaUsuarios tbody", table);
  }

  var agregar_nuevo_usuario = function() {
    limpiar_datos();
    $("#avatar_foto, #marco_firma").hide();
    $("#n_cpass").val("").show().prop("required", true);
    $("#opcion").val("registrar");
    $("#ediform").slideDown("slow");
    $("#lista").slideUp("slow");
  }

  var obtener_data_editar = function(tbody, table) {
    $(tbody).on("click", "button.editar", function() {
      $("#cuenta_").click();
      var data = table.row($(this).parents("tr")).data();
      var id = $("#id").val(data.id_usuario),
      nombre_completo = $("#nombre_completo").val(data.nombre_completo).parent().addClass("is-filled").removeClass("has-danger has-success"),
      n_usuario = $("#n_usuario").val(data.nombre).parent().addClass("is-filled").removeClass("has-danger has-success"),
      direccion = $("#direccion").val(data.direccion),
      comuna = $('#comuna option[value="' + data.comuna + '"]').prop("selected", "selected").change(),
      n_cpass = $("#n_cpass").hide().val(data.cpass).parent().addClass("is-filled").removeClass("has-danger has-success"),
      email = $("#email").val(data.correo).parent().addClass("is-filled").removeClass("has-danger has-success");
      $("#perfil-"+data.tipo_perfil).click();
      opcion = $("#opcion").val("modificar");
      $("#cclave").show();
      $("#ncclave").hide();

      //console.log(data.avatar);
      if (data.avatar == "") {
        $("#wizardPicturePreview").attr("src", "assets/img/default-avatar.png");
        $("#desc-sinfoto").show();
        $("#desc-confoto").hide();
        $("#cfoto").click();
      } else {
        $("#wizardPicturePreviewt").attr("src", "data:image/png;base64,"+data.avatar);
        $("#desc-sinfoto").hide();
        $("#desc-confoto").show();
        $("#ncfoto").click();
      }

      if (data.url_firma == "") {
        $("#foto_firma").attr("src", "assets/img/image_placeholder.jpg");
        $("#btn_eli_firma").hide();
        $("#btn_subir_firma").show();
        $("#btn_firma").show().val("firmar aquí");
      } else {
        $("#foto_firma").attr("src", data.url_firma);
        $("#btn_firma").hide();
        $("#btn_eli_firma").show();
        $("#btn_subir_firma").hide();
      }
      $("#ediform").slideDown("slow");
      $("#lista").slideUp("slow");
    });
  }

  var obtener_id_eliminar = function(tbody, table) {
    $(tbody).on("click", "button.eliminar", function() {
      var data = table.row($(this).parents("tr")).data();
      var id = $("#frmEliminar #idel").val(data.id_usuario);
      var nombre_usuario = data.nombre_completo;
      $("#a-eliminar").text(nombre_usuario);
    });
  }


  var eliminar = function() {
    $("#eliminar-it").on("click", function() {
      var id_eliminar = $("#frmEliminar #idel").val(),
        opcion = $("#frmEliminar #opcioneliminar").val();
      $.ajax({
        method: "POST",
        url: "modulos/administracion/usuarios/update.php",
        data: {
          "id": id_eliminar,
          "opcion": opcion
        }
      }).done(function(info) {
        var json_info = JSON.parse(info);
        mostrar_mensaje(json_info);
        limpiar_datos();
        listar_usuarios();
      });
    });
  }


  var mostrar_mensaje = function(informacion) {
    var texto = "",
      color = "";
    if (informacion.respuesta == "BIEN") {
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
    } else if (informacion.respuesta == "ERROR") {
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
    } else if (informacion.respuesta == "ERROR_FORMATO") {
      $.notify({
        icon: "warning",
        message: "<strong>Error</strong>, el formato de la imagen es incorrecto."
      }, {
        type: "danger",
        timer: 3,
        placement: {
          from: "top",
          align: "center"
        }
      });
    } else if (informacion.respuesta == "EXISTE") {
      $.notify({
        icon: "person_add_disabled",
        message: "<strong>Información!</strong> el usuario ya existe."
      }, {
        type: "warning",
        timer: 3,
        placement: {
          from: "top",
          align: "center"
        }
      });
    } else if (informacion.respuesta == "EXISTE_COLOR") {
      $.notify({
        icon: "warning",
        message: "<strong>Información!</strong> el color ya se encuentra asignado a otro usuario."
      }, {
        type: "warning",
        timer: 3,
        placement: {
          from: "top",
          align: "center"
        }
      });
    } else if (informacion.respuesta == "SUBE_FIRMA") {
      $.notify({
        icon: "check",
        message: "<strong>Bien!</strong> La firma se ha subido con éxito."
      }, {
        type: "success",
        timer: 3,
        placement: {
          from: "top",
          align: "center"
        }
      });
    } else if (informacion.respuesta == "VACIO") {
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
    } else if (informacion.respuesta == "FIRMA_VACIA") {
      $.notify({
        icon: "priority_high",
        message: "<strong>Advertencia!</strong> no se ha seleccionado ninguna imagen, inténtelo nuevamente."
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


  $("#cclave").on("click", function() {
    $("#cclave").hide();
    $("#n_cpass").show().val("").prop("required", "required");
    $("#ncclave").show();
    return false;
  });

  $("#ncclave").on("click", function() {
    $("#n_cpass").hide().val("").prop("required", false);
    $("#n_cpass").parent().removeClass("has-danger");
    $("#n_cpass").parent().removeClass("has-success");
    $("#ncclave").hide();
    $("#cclave").show();
    return false;
  });

  $("#cfoto").on("click", function() {
    $("#wizardPicturePreview").show();
    $("#wizardPicturePreview").attr("src", "assets/img/default-avatar.png");
    $("#wizardPicturePreviewt").hide();
    $("#cfoto").hide();
    $("#wizard-picture").show();
    $("#ncfoto").show();
    $("#desc-sinfoto").show();
    $("#desc-confoto").hide();
    return false;
  });

  $("#ncfoto").on("click", function() {
    $("#wizardPicturePreview").hide();
    $("#wizardPicturePreviewt").show();
    $("#wizard-picture").hide().val("");
    $("#ncfoto").hide();
    $("#desc-sinfoto").show();
    $("#cfoto").show();
    $("#desc-sinfoto").hide();
    $("#desc-confoto").show();
    return false;
  });


  var subir_foto = function() {
    if ($("#wizard-picture").val() != "") {
      var property = document.getElementById('wizard-picture').files[0];
      var image_name = property.name;
      var image_extension = image_name.split('.').pop().toLowerCase();
      if (jQuery.inArray(image_extension, ['png', 'jpg', 'jpeg']) == -1) {
        $.notify({
          icon: "error",
          message: "<strong>Ups!</strong> formato de imagen incorrecto solo se permite jpg, png y jpeg."
        }, {
          type: "warning",
          timer: 3,
          placement: {
            from: "top",
            align: "center"
          }
        });
        return false;
      }
      var image_size = property.size;
      if (image_size > 20000000) {
        $.notify({
          icon: "error",
          message: "<strong>Ups!</strong> Tamaño máximo de imagen superado!"
        }, {
          type: "warning",
          timer: 3,
          placement: {
            from: "top",
            align: "center"
          }
        });
        return false;
      } else {
        var form_data = new FormData();
        var id = $("#id").val();
        var user = $("#n_usuario").val();
        form_data.append("file", property);
        form_data.append('opcion', 'subir_foto');
        form_data.append('id', id);
        form_data.append('user', user);
        $.ajax({
          url: "modulos/administracion/usuarios/update.php",
          method: "POST",
          data: form_data,
          contentType: false,
          cache: false,
          processData: false,
          beforeSend: function() {
            $.notify({
              icon: "add_alert",
              message: "<strong>Espera</strong> mientras se guarda la nueva imagen."
            }, {
              type: "info",
              timer: 3,
              placement: {
                from: "top",
                align: "center"
              }
            });
          },
          success: function(data) {
            $.notify({
              icon: "check",
              message: "<strong>Bien!</strong> La nueva imagen fue cargada."
            }, {
              type: "success",
              timer: 3,
              placement: {
                from: "top",
                align: "center"
              }
            });
            if (id == "") {
              $("#wizard-picture_0").val(data.respuesta);
              $("#guardar_formulario").click();
            } else {
              $("#wizard-picture").val("");
              $("#guardar_formulario").click();
            }
          },
          error: function() {
            $.notify({
              icon: "error",
              message: "<strong>Ups!</strong> Imagen no fue cargada, ningun cambio fue realizado."
            }, {
              type: "danger",
              timer: 3,
              placement: {
                from: "top",
                align: "center"
              }
            });
          }
        });
      }
    }
  };



  var subir_foto_firma = function() {
    $("#subeFirma_").click(function() {
      var formdata = new FormData();
      var id = $("#id").val();
      var nombre = $("#n_usuario").val();
      var files = $('#up_firma')[0].files[0];
      formdata.append('file', files);
      formdata.append('opcion', 'subir_foto_firma');
      formdata.append('id', id);
      formdata.append('n_usuario', nombre);
      $.ajax({
        url: "modulos/administracion/usuarios/update.php",
        type: 'POST',
        data: formdata,
        contentType: false,
        cache: false,
        processData: false,
        beforeSend: function() {
          $.notify({
            icon: "add_alert",
            message: "<strong>Espere</strong> mientras se guarda la nueva firma."
          }, {
            type: "info",
            timer: 3,
            placement: {
              from: "top",
              align: "center"
            }
          });
        },
        success: function(info) {
          var json_info = JSON.parse(info);
          mostrar_mensaje(json_info);
          if (json_info.respuesta == "ERROR_FORMATO" ||
            json_info.respuesta == "FIRMA_VACIA" ||
            json_info.respuesta == "ERROR") {
            setTimeout(() => {
              $("#foto_firma").attr("src", "assets/img/image_placeholder.jpg");
              $("#btn_subir_firma").show();
              $("#btn_firma").show()
              $("#btn_eli_firma").hide();
              $("#btn_quita_firma").click();
            }, 150);
          } else {
            setTimeout(() => {
              lee_datos();
              $("#btn_eli_firma").show();
              $("#btn_subir_firma").hide();
              $("#btn_firma").hide();
              $("#btn_quita_firma").click();
            }, 150);
          }
        },
      });
    });
  }


  var subir_firma = function() {
    $('#subeFirma-it').unbind().click(function() {
      var id_usu = $("#id").val();
      var nombre = $("#n_usuario").val();
      var canvas1 = document.getElementById("canvas");
      var ctx1 = canvas1.getContext("2d");
      var img = canvas1.toDataURL("image/png");
      $.ajax({
        url: 'modulos/administracion/usuarios/subir_firma.php',
        data: {
          'imagen': img,
          'id_usu': id_usu,
          'nom_user': nombre
        },
        type: 'POST',
      }).done(function(info, data) {
        var json_info = JSON.parse(info);
        mostrar_mensaje(json_info);
        setTimeout(() => {
          lee_datos();
        }, 150);
        limpiar_firma();
        $("#btn_eli_firma").show();
        $("#btn_subir_firma").hide();
        $("#btn_firma").val("Cambiar");
      });
    });
  }


  var eliminar_firma = function() {
    $('#btn_eli_firma').unbind().click(function() {
      var id_usu = $("#id").val();
      $.ajax({
        url: 'modulos/administracion/usuarios/elimina_firma.php',
        data: {
          'id_usu': id_usu
        },
        type: 'POST',
      }).done(function(info, data) {
        setTimeout(() => {
          limpiar_firma();
          $("#foto_firma").attr("src", "assets/img/image_placeholder.jpg");
          $("#btn_eli_firma").hide();
          $("#btn_firma").show().val("firmar aquí");
          $("#btn_subir_firma").show();
        }, 150);
      });
    });
  };


  var lee_datos = function() {
    var id_usu = $("#id").val();
    $.ajax({
      url: 'modulos/administracion/usuarios/lee_datos.php',
      data: {
        'id_usu': id_usu
      },
      type: 'POST',
      success: function(data) {
        var json_info = JSON.parse(data);
        $("#foto_firma").attr("src", json_info['data'][0].url_firma);
      }
    });
  }


  // $image_crop = $('#image_demo').croppie({
  //   enableExif: true,
  //   viewport: {
  //     width:200,
  //     height:200,
  //     type:'square' //circle
  //   },
  //   boundary:{
  //     width:300,
  //     height:300
  //   }
  // });


  // $('#foto_firma').on('change', function(){
  //   var reader = new FileReader();
  //   reader.onload = function (event) {
  //     $image_crop.croppie('bind', {
  //       url: event.target.result
  //     }).then(function(){
  //       console.log('jQuery bind complete');
  //     });
  //   }
  //   reader.readAsDataURL(this.files[0]);
  //   $('#uploadimageModal').modal('show');
  // });


  /* Funciones de firmas */
  var limpiar = document.getElementById("limpiar");
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var cw = canvas.width = 350,
    cx = cw / 2;
  var ch = canvas.height = 300,
    cy = ch / 2;

  var dibujar = false;
  var factorDeAlisamiento = 5;
  var Trazados = [];
  var puntos = [];
  ctx.lineJoin = "round";

  limpiar.addEventListener('click', function(evt) {
    dibujar = false;
    ctx.clearRect(0, 0, cw, ch);
    Trazados.length = 0;
    puntos.length = 0;
  }, false);


  canvas.addEventListener('mousedown', function(evt) {
    dibujar = true;
    //ctx.clearRect(0, 0, cw, ch);
    puntos.length = 0;
    ctx.beginPath();

  }, false);

  canvas.addEventListener('mouseup', function(evt) {
    redibujarTrazados();
  }, false);

  canvas.addEventListener("mouseout", function(evt) {
    redibujarTrazados();
  }, false);

  canvas.addEventListener("mousemove", function(evt) {
    if (dibujar) {
      var m = oMousePos(canvas, evt);
      puntos.push(m);
      ctx.lineTo(m.x, m.y);
      ctx.stroke();
    }
  }, false);

  function reducirArray(n, elArray) {
    var nuevoArray = [];
    nuevoArray[0] = elArray[0];
    for (var i = 0; i < elArray.length; i++) {
      if (i % n == 0) {
        nuevoArray[nuevoArray.length] = elArray[i];
      }
    }
    nuevoArray[nuevoArray.length - 1] = elArray[elArray.length - 1];
    Trazados.push(nuevoArray);
  }

  function calcularPuntoDeControl(ry, a, b) {
    var pc = {}
    pc.x = (ry[a].x + ry[b].x) / 2;
    pc.y = (ry[a].y + ry[b].y) / 2;
    return pc;
  }

  function alisarTrazado(ry) {
    if (ry.length > 1) {
      var ultimoPunto = ry.length - 1;
      ctx.beginPath();
      ctx.moveTo(ry[0].x, ry[0].y);
      for (i = 1; i < ry.length - 2; i++) {
        var pc = calcularPuntoDeControl(ry, i, i + 1);
        ctx.quadraticCurveTo(ry[i].x, ry[i].y, pc.x, pc.y);
      }
      ctx.quadraticCurveTo(ry[ultimoPunto - 1].x, ry[ultimoPunto - 1].y, ry[ultimoPunto].x, ry[ultimoPunto].y);
      ctx.stroke();
    }
  }

  function redibujarTrazados() {
    dibujar = false;
    ctx.clearRect(0, 0, cw, ch);
    reducirArray(factorDeAlisamiento, puntos);
    for (var i = 0; i < Trazados.length; i++)
      alisarTrazado(Trazados[i]);
  }

  function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    return { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
    }
  }
  /* Fin de Funciones firmas */
</script>