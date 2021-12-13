<?php
  session_start();
  if($_SESSION['interno_usuario']=="" || $_SESSION['interno_usuario']==null){
    $_SESSION = array();
		unset($_SESSION);
    session_destroy();
    header('Location: ../../index.php');
    die();
  }
?>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<script src="modulos/dashboard/lista.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"/>

<!-- Inicio dashboard -->
  <div class="content" style="margin-top:3%;">
  <input type="hidden" id="session" name="session" value="<?php echo $_SESSION['nombre_perfil']; ?>">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6" id="link_productos" style="cursor: pointer;">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="material-icons">store</i>
              </div>
              <p class="card-category">Stock de Productos</p>
              <h2 class="card-title" id="contador_stock"></h2>
              <h3 class="card-title" id="total_stock"></h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">date_range</i><i>Actualizado -</i><div id="fecha_stock"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6" id="link_total_ventas" style="cursor: pointer;">
          <div class="card card-stats">
            <div class="card-header card-header-success card-header-icon">
              <div class="card-icon">
                <i class="material-icons">attach_money</i>
              </div>
              <p class="card-category">Total de Ventas</p>
              <h2 class="card-title" id="contador_ventas"></h2>
              <h3 class="card-title" id="productos_ventas"></h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">date_range</i><i>Actualizado -</i><div id="fecha_ventas"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">file_upload</i>
              </div>
              <p class="card-category">Producto más exitoso</p>
              <h3 class="card-title" id="contador_exito"></h3>
              <h4 class="card-title" id="producto_exito"></h4>
              <h5 class="card-title" id="precio_exito"></h5>
              <h5 class="card-title" id="precio_exito_individual"></h5>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">date_range</i><i>Actualizado -</i><div id="fecha_exito"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6" style="margin-top:1%;">
          <div class="card card-stats">
            <div class="card-header card-header-secondary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">file_download</i>
              </div>
              <p class="card-category">Producto menos vendido</p>
              <h3 class="card-title" id="contador_menos"></h3>
              <h4 class="card-title" id="producto_menos"></h4>
              <h5 class="card-title" id="precio_menos"></h5>
              <h5 class="card-title" id="precio_menos_individual"></h5>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">date_range</i><i>Actualizado -</i><div id="fecha_menos"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>  