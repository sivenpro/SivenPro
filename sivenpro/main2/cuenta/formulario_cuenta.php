<script src="menu2/cuenta/cuenta.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
<script src="menu2/assets/js/plugins/jquery.validate.min.js"></script>
<link rel="stylesheet" type="text/css" href="menu2/cuenta/estiloCuenta.css">

<div class="content col-lg-8">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header card-header-icon card-header-rose">
                <link rel="stylesheet" type="text/css" href="mantenimiento/globales/formulario/header/estiloHeaderFormulario.css">
                  <h4 class="card-title titulo">Datos de Cuenta
                  </h4>
                </div>
                <div class="card-body responsive-scroll">
                  <form id="formCuenta">

                    <div class="row justify-content-center">
                      <div class="col-md-4 ">
                        <div class="form-group ">
                          <label>Nombre de Usuario</label>
                          <input type="text" id="nombreUsuario" class="form-control" disabled>
                        </div>
                      </div>
                      </div>
                      <div class="row justify-content-center">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Correo</label>
                          <input type="email" id="correoUsuario" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Nombre Completo</label>
                          <input type="text" id="nombreCompleto" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="form-group">
                          <label>Tipo de Perfil</label>
                          <input type="text" id="perfilUsuario" class="form-control" disabled>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <input type="button" id="cambiarContrasena" data-toggle="modal" data-target="#modalContrasena" class="btn btn-info btn-sm" value="Cambiar Contraseña...">
                    </div>
                    <div class="row justify-content-center">
                    <input type="submit" id="botonActualizar" value="Actualizar" class="btn btn-rose pull-right">
                    </div>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MODAL CONTRASEÑA -->
      <!-- Modal -->
      <div id="modalContrasena" class="modal fade" role="dialog">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header flex-column">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h3 class="modal-title">Editar Contraseña</h3>
                <h6 class="modal-title">Presione enter para verificar o confirmar contraseña.</h6>
            </div>
            <form>
            <div class="modal-body">
                  <form id="formularioContrasena" class="form-horizontal" action method novalidate="novalidate">
                    <div class="row">
                      <div class="col-md-4 col-md-offset-4">
                        <div id="divContrasenaNueva" class="form-group bmd-form-group">
                          <label class="bmd-label-floating">Escribir nueva contraseña</label>
                          <input type="password" id="contrasenaNueva" class="form-control valid" required="true" aria-required="true" aria-invalid="false">
                          <label id="alertaContrasena" class="error" for="required"></label>
                        </div>
                      
                        <div id="divContrasenaConfirma" class="form-group bmd-form-group">
                          <label class="bmd-label-floating">Repetir contraseña para confirmar</label>
                          <input type="password" id="contrasenaConfirmar" class="form-control" equalto="#contrasenaNueva" required="true" aria-required="true" aria-invalid="false" disabled>
                          <label id="alertaConfirma" class="error" for="contrasenaNueva"></label>
                        </div>
                      </div>
                    </div>
                  </form>
            </div>
            <div class="modal-footer">
              <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancelar">
              <input type="button" class="btn btn-success" data-dismiss="modal" value="Confirmar Cambio" id="actualizarContrasena" disabled>
            </div>
            </form>
          </div>

        </div>
      </div>