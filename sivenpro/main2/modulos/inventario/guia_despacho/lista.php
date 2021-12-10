<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<script src="modulos/inventario/guia_despacho/lista.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"/>


<!-- Inicio formulario editar guia -->
<div class="container-fluid">
    <div id="ediform" class="col-md-12 col-12 mr-auto ml-auto" style="margin-top: 3%;">
        <form action="" method="POST">
            <input type="hidden" id="id" name="id" value="">
            <input type="hidden" id="id_producto" name="id_producto" value="">
            <input type="hidden" id="opcion" name="opcion" value="modificar">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-rose card-header-text">
                        <h4 class="card-title">Datos de Guía</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Nombre Producto</label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="text" name="nombre_producto" id="nombre_producto" value="" class="form-control" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Código Producto</label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="text" name="cod_producto" id="cod_producto" value="" class="form-control" disabled>
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
                            <label class="col-sm-2 col-form-label">Tipo de Pago</label>
                            <div class="col-sm-5">
                                <div class="form-group select-wizard">
                                    <select class="selectpicker" id="tipo_pago" name="tipo_pago" data-size="4" data-style="select-with-transition" title="Seleccionar" required>
                                        <option value="Efectivo"> Efectivo </option>
                                        <option value="Débito"> Débito </option>
                                        <option value="Crédito"> Crédito </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Precio Total</label>
                            <div class="col-sm-9">
                                <div class="form-group bmd-form-group">
                                    <input type="number" name="precio_total" id="precio_total" value="" class="form-control" disabled>
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
                    <div class="toolbar"></div>
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
            <input type="hidden" id="idproductoElim" name="idproductoElim" value="">
            <input type="hidden" id="cantidadElim" name="cantidadElim" value="">
            <!-- Modal -->
            <div class="modal fade" id="modaleliminar" tabindex="-1" role="dialog" aria-labelledby="modaleliminarLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modaleliminarLabel" style="color:#FF0000">Eliminar Guía</h4>
                        </div>
                        <div class="modal-body">
                            ¿Está seguro de eliminar la venta del producto <strong data-name="" id="a-eliminar"></strong>?
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
