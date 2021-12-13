<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<script src="modulos/inventario/productos/lista.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"/>


<!-- Inicio formulario editar perfil -->
<div class="container-fluid">
    <div id="ediform" class="col-md-12 col-12 mr-auto ml-auto" style="margin-top: 3%;">
        <form action="" method="POST">
            <input type="hidden" id="id" name="id" value="">
            <input type="hidden" id="opcion" name="opcion" value="modificar">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-rose card-header-text">
                        <h4 class="card-title">Datos del Producto</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Nombre Producto</label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="text" name="nombre_producto" id="nombre_producto" value="" class="form-control" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Código Producto</label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="text" name="cod_producto" id="cod_producto" value="" class="form-control" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Contenido Neto</label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="text" name="cont_neto" id="cont_neto" value="" class="form-control" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Precio</label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="number" step="any" name="precio" id="precio" value="" class="form-control" onkeypress="return soloNum(event)" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Cantidad</label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="number" name="cantidad" id="cantidad" value="" class="form-control" onkeypress="return soloNum(event)" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Marca <i>(Opcional)</i></label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="text" name="marca" id="marca" value="" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Fecha Vencimiento</label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="date" name="fecha_venc" id="fecha_venc" value="" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="input-group form-control-lg">
                            <div class="col-md-4 col-sm-4" style="text-align:center;">
                              <h5 class="title" style="margin-bottom: 2%;">Imagen Referencial <i>(Opcional)</i></h5>
                              <img id="img_dinamico" src="" style="width: 190px;">
                              <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                                  <div class="fileinput-new thumbnail" style="width: 170px;">
                                      <img src="assets/img/image_placeholder.jpg" alt="..." id="imagen_defecto">
                                  </div>
                                  <div class="fileinput-preview fileinput-exists thumbnail" style="width: 170px;"></div>
                                  <div id="div_botones">
                                      <span class="btn btn-rose btn-round btn-file">
                                      <span class="fileinput-new" id="elegir_imagen">Elegir imagen</span>
                                      <span class="fileinput-exists">Cambiar</span>
                                      <input type="file" name="url_imagen" id="url_imagen" value="" accept="image/*"/>
                                      </span>
                                      <a href="#pablo" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Eliminar</a>
                                  </div>
                              </div>
                            </div>
                        </div>
                                                   
        </form>
    </div>
</div>

        <div>
            <div class="ml-auto">
                <input type="submit" class="btn btn-finish btn-fill btn-rose btn-wd" name="Guardar" id="guardar_formulario" value="Guardar" style="float: right;margin-left: 10px;">
                <input id="btn_cancelar" type="button" class="btn btn-default" value="Cancelar" style="float: right;">
            </div>
            <div class="clearfix"></div>
        </div>
        </form>
        </div>
    </div>
    <!--Fin formulario editar perfil -->


    <div id="lista" class="row" style="margin-top: 35px;">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header card-header-primary card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">assignment</i>
                  </div>
                  <h4 class="card-title">Lista de Registros</h4>
                </div>
                  <!-- Filtro Fechas -->
                  <div id="body_original" class="modal-body">
                    <div class="row" id="row_rango_fechas">
                      <div class="col-md-4">
                        <div class="form-group bmd-form-group">
                          <label class="bmd-label-static">Filtro Rango Fechas</label>
                          <input type="text" id="rango_fechas" class="form-control"/>
                        </div>
                      </div>
                    </div>
                  </div>
                <div class="card-body">
                    <div class="toolbar">
                    </div>
                    <button id="boton_agregar_nuevo" type="button" class="btn btn-success" onclick="agregar_nuevo_producto()">
                      <i class="material-icons">post_add</i> Nuevo
                    </button>
                    <button id="boton_importar_excel" type="button" class="btn btn-warning" onclick="importar_excel()">
                    <i class='fa fa-file-excel-o' aria-hidden='true'></i> importar
                    </button>
                    <div class="material-datatables" id="TablaOriginal"></div>
                    <!-- end content-->
                </div>
                <!--  end card  -->
            </div>
            <!-- end col-md-12 -->
        </div>
        <!-- end row -->
    </div>

    <div>
        <form id="frmeliminar" action="" method="POST">
            <input type="hidden" id="idel" name="id" value="">
            <input type="hidden" id="opcioneliminar" name="opcion" value="eliminar">
            <!-- Modal -->
            <div class="modal fade" id="modaleliminar" tabindex="-1" role="dialog" aria-labelledby="modaleliminarLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modaleliminarLabel" style="color:#FF0000">Eliminar Producto</h4>
                        </div>
                        <div class="modal-body">
                            ¿Está seguro de eliminar el producto <strong data-name="" id="a-eliminar"></strong>?
                            <p></p>
                            Si continúa se borrarán <strong>todos los datos</strong> registrados sobre este producto!
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="eliminar-it" class="btn btn-danger" data-dismiss="modal">eliminar</button>
                            <p></p>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>


    <!-- Modal Importar Excel -->
    <div class="container-fluid">
        <div class="col-md-12" id="modalExcel">
            <div class="card">
                <div class="card-header" style="margin-bottom: -20px;">
                    <h4 class="card-title">Importar archivo Excel
                        <small class="description"> - Productos</small>
                    </h4>
                </div>
                <div class="card-body">
                    <div id="accordion" role="tablist">
                        <div class="card-collapse">
                            <div class="card-header" role="tab" id="headingOne">
                                <h5 class="mb-0">
                                    <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="collapsed">
                                        <i class="material-icons" style="font-size:35px; float:left;">get_app</i> Subir Archivo
                                        <i class="material-icons">keyboard_arrow_down</i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" style="margin-top: 3%;">
                                <form method="post" id="formExcel" enctype="multipart/form-data" role="form">
                                    <div class="row" style="margin-right: 450px;margin-bottom: 10px"></div>
                                    <div>
                                        <input type="file" name="name" id="name" accept=".xlsx, .xls">
                                        <br><br>
                                        <button type="submit" class="btn btn-primary btn-imp" id="importar_datos" style="margin-bottom: 30px;">Importar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="card-collapse">
                            <div class="card-header" role="tab" id="headingTwo">
                                <h5 class="mb-0">
                                    <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <i class="material-icons" style="font-size:35px; float:left;">live_help</i> Manual de Ayuda
                                        <i class="material-icons">keyboard_arrow_down</i>
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                    Para poder importar desde un archivo excel hacia su tabla, debe respetar la estructura de esta tabla, al cometer un error de escritura o confudir los campos, posiblemente estos datos se ingresarán de manera incorrecta.
                                    <p></p>Completar su archivo Excel con la siguiente estructura:</strong>
                                    <p></p>
                                    <strong>1. Nombre del Producto</strong><br>
                                    <strong>2. Código del Producto</strong><br>
                                    <strong>3. Cantidad de stock del producto</strong> <i>(sólo números)</i><br>
                                    <strong>4. Precio individual del producto</strong> <i>(sólo números)</i><br>
                                    <strong>5. Marca del producto</strong> <i>(Opcional)</i><br>
                                    <strong>6. Contenido Neto del producto</strong><br>
                                    <strong>7. Fecha de Vencimiento del producto</strong> <i>(Opcional)</i>
                                    <p></p>

                                    Cada campo debe estar en el lugar correspondiente, y debe estar tal como se ve en el <strong>siguiente ejemplo:</strong>
                                    <p></p>
                                    <img src="modulos/inventario/productos/ejemplo_excel.png" style="max-inline-size: -webkit-fill-available;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            
            <div>
                <div class="ml-auto">
                    <input id="btn_cancelar2" type="button" class="btn btn-default" value="Cancelar" style="float: right;">
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <!-- Fin Modal Importar Excel -->


    <!-- Modal Guia despacho -->
    <div>
        <form id="frmGuia" action="" method="POST">
            <input type="hidden" id="id_guia" name="id_guia" value="">
            <input type="hidden" id="opcionguia" name="opcionguia" value="agregar_guia">
            <!-- Modal -->
            <div class="modal fade" id="modalGuia" tabindex="-1" role="dialog" aria-labelledby="modalGuiaLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modalGuiaLabel"><strong>Bajada de Stock</strong></h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <label class="col-sm-2 col-form-label">Producto Seleccionado: </label>
                                <div class="col-sm-9">
                                    <div class="form-group bmd-form-group">
                                    <input id="nombre_producto_guia" name="nombre_producto_guia" value="" type="text" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-sm-2 col-form-label">Cantidad</label>
                                <div class="col-sm-9">
                                    <div class="form-group bmd-form-group">
                                    <input class="quantity" id="cantidad_guia" min="1" name="cantidad_guia" value="1" type="number" onkeypress="return soloNum(event)" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-sm-2 col-form-label">Tipo de Pago</label>
                                <div class="col-sm-5">
                                    <div class="form-group select-wizard">
                                        <select class="selectpicker" id="tipo_pago_guia" name="tipo_pago_guia" data-size="4" data-style="select-with-transition" title="Seleccionar" required>
                                            <option value="Efectivo"> Efectivo </option>
                                            <option value="Débito"> Débito </option>
                                            <option value="Crédito"> Crédito </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="agregar-it" class="btn btn-success" data-dismiss="modal">Agregar</button>
                            <p></p>
                            <button type="button" id="boton_cancelar3" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <!-- FIN Modal Guia despacho -->