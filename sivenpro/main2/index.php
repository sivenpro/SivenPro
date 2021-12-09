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


<!doctype html>
<html lang="es">
  <head>
    <title>Portal SivenPro - <?php echo $_SESSION['nombre_perfil']; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <!--     Fonts and icons     -->
    <link rel="icon" type="image/png" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="fonts.css" />
    <link rel="stylesheet" href="font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/print.css?2" media="print" />

    <!-- Material Dashboard CSS -->
    <link rel="stylesheet" href="assets/css/material-dashboard.min.css">
    <link rel="stylesheet" href="assets/css/canvas.css">
    <script src="assets/js/core/croppie.js"></script>
    <link rel="stylesheet" href="assets/css/croppie.css">
    <!-- CSS ChartJS -->
    <link rel="stylesheet" href="assets/css/Chart.min.css">
    <!-- <link rel="stylesheet" href="assets/css/jquery-ui.min.css"> -->

    <link rel="stylesheet" type="text/css" href="assets/css/daterangepicker.css" />

  </head>
  <body>
 <script src="menu_funciones.js" type="text/javascript"></script>
  <!--   Core JS Files   -->
  <script src="assets/js/core/jquery.min.js" type="text/javascript"></script>
  <!-- <script src="assets/js/core/jquery-ui.min.js" type="text/javascript"></script> -->
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <script src="assets/js/core/popper.min.js" type="text/javascript"></script>
  <script src="assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>

  <!-- Plugin for the Perfect Scrollbar -->
  <script src="assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>

  <!-- Plugin for the momentJs  -->
  <script src="assets/js/plugins/moment.min.js"></script>

  <!--  Plugin for Sweet Alert -->
  <script src="assets/js/plugins/sweetalert2.js"></script>

  <!-- Forms Validations Plugin -->
  <script src="assets/js/plugins/jquery.validate.min.js"></script>

  <!--  Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
  <script src="assets/js/plugins/jquery.bootstrap-wizard.js"></script>

  <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
  <script src="assets/js/plugins/bootstrap-selectpicker.js" ></script>

  <!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
  <script src="assets/js/plugins/bootstrap-datetimepicker.min.js"></script>

  <!--  DataTables.net Plugin, full documentation here: https://datatables.net/    -->
  <script src="assets/js/plugins/jquery.dataTables.min.js"></script>

  <!--	Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
  <script src="assets/js/plugins/bootstrap-tagsinput.js"></script>

  <!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
  <script src="assets/js/plugins/jasny-bootstrap.min.js"></script>

  <!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
  <script src="assets/js/plugins/fullcalendar.min.js"></script>

  <!-- Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ -->
  <script src="assets/js/plugins/jquery-jvectormap.js"></script>

  <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
  <script src="assets/js/plugins/nouislider.min.js" ></script>

  <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
  <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>-->
  <script src="core.js"></script>

  <!-- Library for adding dinamically elements -->
  <script src="assets/js/plugins/arrive.min.js"></script>

  <!--  Google Maps Plugin    -->
  <!-- <script  src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> -->

  <!-- Chartist JS -->
  <script src="assets/js/plugins/chartist.min.js"></script>

  <!-- Numbers with comma -->
  <script src="assets/js/plugins/numeric-comma.js"></script>

  <!--  Notifications Plugin    -->
  <script src="assets/js/plugins/bootstrap-notify.js"></script>

  <script src="assets/js/plugins/buttons.colVis.min.js"></script>

  <!--Plugin orden por fecha-->
  <script src="assets/js/date-cl.js" ></script>
  
  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="assets/js/material-dashboard.min.js" type="text/javascript"></script>
  <script src="assets/js/formatos.js?1" type="text/javascript"></script>

  <!-- JS ChartJS -->
  <script src="assets/js/plugins/Chart.bundle.min.js" type="text/javascript"></script>
  <script src="assets/js/plugins/Chart.min.js" type="text/javascript"></script>
  <script src="assets/js/plugins/chartjs-plugin-datalabels.min.js" type="text/javascript"></script>
  <!-- <script src="assets/js/plugins/Chart.Zoom.min.js" type="text/javascript"></script> -->
  <script src="assets/js/plugins/hammer.min.js" type="text/javascript"></script>
  <script src="assets/js/plugins/chartjs-plugin-zoom.min.js" type="text/javascript"></script>

  
<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script> -->
<script type="text/javascript" src="assets/js/plugins/daterangepicker.js"></script>
<script type="text/javascript" src="assets/js/plugins/jquery.easing.min.js"></script>

 <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.6.3/papaparse.min.js"></script>
 // <script src="https://editor.datatables.net/extensions/Editor/js/dataTables.editor.min.js"></script>
 // <script src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.min.js"></script>
 // <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
 // <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
 // <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
 // <script src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.html5.min.js"></script>
 // <script src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.print.min.js"></script> -->

<div class="wrapper ">
<div class="sidebar" data-color="rose" data-background-color="white" data-image=">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
      <div class="logo">
        <a href="/sivenpro/main2/" class="simple-text logo-mini">                    
          <img src="favicon.ico" class="logo-img" alt="Image" style="width: 30px;">                    
        </a>
        <a href="/sivenpro/main2/" class="simple-text logo-normal">
          <div class="texto-logo" style="padding-bottom: 0px;font-size: 27px;">
            <img src="logo_2login.png" class="img_lateral_logo">
          </div>
        </a>
      </div>
      <div class="sidebar-wrapper">
        <div class="user">
          <div class="photo">
            <img src="data:image/png;base64,<?php echo $_SESSION["interno_avatar"]; ?>">
          </div>
          <div class="user-info">
            <a data-toggle="collapse" href="#collapseuser" class="usernamecollapsed" aria-expanded="false">
              <span>
                <?php echo $_SESSION["interno_nombre"]; ?>
                <b class="caret"></b>
              </span>
            </a>
             <div class="collapse" id="collapseuser">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" data-toggle="modal" data-target="#modalNotificaciones" onclick="cargaModalNotificaciones()">
                    <i class="material-icons">notifications</i>
                    <p> Notificaciones <span class='contador-rojo'></span></p>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="logout.php">
                    <i class="material-icons">logout</i>
                    <p> Cerrar Sesión </p>
                  </a>
                </li>
              </ul>
            </div> 
          </div>
        </div>
        <ul class="nav" id="menuLateral">
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-minimize">
              <button id="minimizeSidebar" class="btn btn-just-icon btn-white btn-fab btn-round">
                <i class="material-icons text_align-center visible-on-sidebar-regular">more_vert</i>
                <i class="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
              </button>
            </div>
            <a class="navbar-brand" id="titulo_superior">Inicio / <?php echo $_SESSION['nombre_perfil']; ?></a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          
        </div>
      </nav>
      <!-- End Navbar -->
     <!--Start content -->
 <div style="margin-top: 3%!important;" class="content" id="cargacontent">

  </div>

  <div id="content">
    <div id="pageFooter" style="visibility: hidden;"></div>
  </div>

     <!-- END content-->
                  <footer class="footer">
                    <div class="container-fluid">                    
                      <div class="copyright float-right">
                        &copy;
                        <script>
                          document.write(new Date().getFullYear())
                        </script>, Potenciado por
                        <a href="#">SivenPro</a>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
    <!-- loading modal -->
  <div class="modal fade" id="modal-loading" data-keyboard="false"  data-backdrop="static">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
                  <div class="loader"></div>
          <div clas="loader-txt" style="text-align: center;">
            <p>Cargando...</p>
          </div>
              </div>
          </div>
      </div>
  </div>
  <!-- fin loading modal -->
  </body>


  <!-- Modal Notificaciones -->
  <div>
	  <form id="frmNotificaciones" action="" method="POST">
	  	<input type="hidden" id="opcionNotif" name="opcionNotif" value="opcion_notif">
	  	<div class="modal fade" id="modalNotificaciones" tabindex="-1" role="dialog" aria-labelledby="modalNotificacionesLabel">
	  		<div class="modal-dialog" role="document">
	  			<div class="modal-content" style="width: 80%;margin-left: 10%;">
	  				<div class="modal-header">
	  					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	  					<h4 class="modal-title" id="modalNotificacionesLabel"><strong style="color: red;">Notificaciones de Caducidad</strong></h4>
	  				</div>
	  				<div class="modal-body" id="contenido_notificaciones"></div>
	  			</div>
	  		</div>
	  	</div>
	  </form>
  </div>
  <!-- Fin Modal Notificaciones-->

</html>
<script>
<!-- javascript for activating the Perfect Scrollbar -->
$('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

<!-- javascript for detroying the Perfect Scrollbar -->
$('.main-panel').perfectScrollbar('destroy');

<!-- javascript for updating the Perfect Scrollbar when the content of the page is changing -->
$('.main-panel').perfectScrollbar('update');

$('.main-panel').perfectScrollbar('update');
$(document).ajaxStart(function() {
  showLoading();
});

$(document).ajaxStop(function(){
  setTimeout(() => {
    hideLoading();
  }, 1000);
});


$(document).ready(function() {
  $(".nav-link").css("cursor","pointer");
  cargaMenuLateral();
  cuentaNotificaciones();
  setTimeout(() => {
    $("#Dashboard").click();
  }, 1000);
});
 
$(document).on('hidden.bs.modal', function (event) {
  if ($('.modal:visible').length) {
    $('body').addClass('modal-open');
  }
});

var cuentaNotificaciones = function(){
  $.ajax({
    url: 'notificaciones/cuenta_notificaciones.php',
    type: 'POST',
    success: function(data){
      var json_info = JSON.parse( data );
      $(".contador-rojo").html(json_info['data'][0].cantidad);
    }
  });
}

var cargaModalNotificaciones = function(){
  $.ajax({
    url: 'notificaciones/modal_notificaciones.php',
    type: 'POST',
    success: function(data){
      $("#contenido_notificaciones").html(data);
    }
  });
}

var descartarNotificacion = function(id_notificacion){
  var id_noti = id_notificacion;
  $.ajax({
    url: 'notificaciones/descarta_notificacion.php',
    data: {'id_notificacion': id_noti},
    type: 'POST',
    success: function(data){
      cuentaNotificaciones();
      cargaModalNotificaciones();
    }
  });
}

</script>