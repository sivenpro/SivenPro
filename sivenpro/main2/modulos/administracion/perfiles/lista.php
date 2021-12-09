<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

<script src="modulos/administracion/perfiles/lista.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>


<!-- Inicio formulario editar perfil -->
      <div class="container-fluid" >
        <div id="ediform" class="col-md-12 col-12 mr-auto ml-auto">
        <form action="" method="POST">
          <input type="hidden" id="id" name="id" value="">
          <input type="hidden" id="opcion" name="opcion" value="modificar">
          <div class="row">
            <div class="col-md-11 ml-auto mr-auto">
              <div class="page-categories">
                <h3 class="title text-center">Categorías</h3>
                <ul class="nav nav-pills nav-pills-warning nav-pills-icons justify-content-center" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#link_admin" role="tablist">
                      <i class="material-icons">assignment_ind</i> Administrador
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#link_bode" role="tablist">
                      <i class="material-icons">note_add</i> Bodeguero
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#link_cont" role="tablist">
                      <i class="material-icons">account_balance</i> Contador
                    </a>
                  </li>
                </ul>
                <div class="tab-content tab-space tab-subcategories" style="margin-bottom:-50px;">
                  <div class="tab-pane active" id="link_admin">
                    <div class="card">
                      <div class="card-header" style="margin-left:10px;">
                        <h4 class="card-title">Rol
                          <div class="togglebutton">
                            <label>
                              <input type="checkbox" id="rol_admin_click" name="rol_admin_click">
                              <span class="toggle"></span>
                            </label>
                          </div>
                        </h4>
                      </div>
                      <div class="col-md-12 col-12 mr-auto ml-auto">
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-body">
                              <div class="row">
                                <div class="col-md-6">
                                  <h4 class="card-title">Administrador</h4>
                                    <div class="togglebutton">
                                    <label>
                                      <input type="checkbox" id="admin_click" name="admin_click" disabled>
                                      <span class="toggle"></span>
                                    </label>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="link_bode">
                    <div class="card">
                      <div class="card-header" style="margin-left:10px;">
                        <h4 class="card-title">Rol
                          <div class="togglebutton">
                            <label>
                              <input type="checkbox" id="rol_bode_click" name="rol_bode_click">
                              <span class="toggle"></span>
                            </label>
                          </div>
                        </h4>
                      </div>
                      <div class="col-md-12 col-12 mr-auto ml-auto">
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-body">
                              <div class="row">
                                <div class="col-md-4">
                                  <h4 class="card-title">Bodeguero</h4>
                                  <div class="togglebutton">
                                    <label>
                                      <input type="checkbox" id="bodeguero_click" name="bodeguero_click" disabled>
                                      <span class="toggle"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="link_cont">
                    <div class="card">
                      <div class="card-header" style="margin-left:10px;">
                        <h4 class="card-title">Rol
                          <div class="togglebutton">
                            <label>
                              <input type="checkbox" id="rol_cont_click" name="rol_cont_click">
                              <span class="toggle"></span>
                            </label>
                          </div>
                        </h4>
                      </div>
                      <div class="col-md-12 col-12 mr-auto ml-auto">
                        <div class="col-md-12">
                          <div class="card">
                            <div class="card-body">
                              <div class="row">
                                <div class="col-md-6">
                                  <h4 class="card-title">Contador</h4>
                                  <div class="togglebutton">
                                    <label>
                                      <input type="checkbox" id="cont_click" name="cont_click" disabled>
                                      <span class="toggle"></span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <h4 class="card-title">Nombre de Perfil</h4>
                          <div class="form-group">
                            <input type="text" id="nombre_perfil" name="nombre_perfil" value="" class="form-control" required>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div class="ml-auto">
              <input type="submit" class="btn btn-finish btn-fill btn-rose btn-wd" name="Guardar" id="guardar_formulario" value="Guardar" style="float: right;margin-left: 10px;margin-right: 45px;">
              <input id="btn_cancelar" type="button" class="btn btn-default" value="Cancelar" style="float: right;">
            </div>
            <div class="clearfix"></div>
          </div>
        </form>
      </div>
    </div>
    <!--Fin formulario editar perfil -->


  <div id="lista" class="row">
    <div class="col-md-12" style="margin-top:20px;">
      <div class="card">
        <div class="card-body">
          <div class="toolbar">
          </div>
          <div class="material-datatables" id="TablaOriginal">
            <table id="ListaPerfiles" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>                     
            </table>
          </div>
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
							<h4 class="modal-title" id="modalEliminarLabel" style="color:#FF0000">Eliminar Perfil</h4>
						</div>
						<div class="modal-body">			
							¿Está seguro de eliminar el perfil <strong data-name="" id="a-eliminar"></strong>?<p></p>
              Si continúa se eliminarán <strong>todos los datos</strong> registrados sobre este perfil!
						</div>
						<div class="modal-footer">
							<button type="button" id="eliminar-it" class="btn btn-danger" data-dismiss="modal">eliminar</button><p></p>
							<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>