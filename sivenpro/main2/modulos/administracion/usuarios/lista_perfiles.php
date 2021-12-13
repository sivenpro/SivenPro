<?php
    session_start();

    include("../../../../../conexion/config/connection.php");

    $query="SELECT id_perfil, nombre FROM perfiles
            WHERE estado = 'Activo'";
    
    $resultado = mysqli_query($conn, $query);
    if (!$resultado){ die("Error en la consulta"); }
    else {
    $required="required";
    echo '<div class="row">';
        while ($row=mysqli_fetch_array($resultado,MYSQLI_ASSOC) ) {
         //$arreglo["data"][] = array_map("utf8_encode", $data);
          $id_perfil=$row["id_perfil"];
          $nombre=$row["nombre"];
          echo '
              <div class="col-sm-4">
                <div class="choice" data-toggle="wizard-radio">
                  <input type="radio" name="perfil-unico" value="' . $id_perfil . '" ' . $required . '>
                  <div class="icon">
                    <i class="fa fa-address-card" aria-hidden="true" id="perfil-' . $id_perfil . '"></i>
                  </div>
                  <h6>' . $nombre . '</h6>
                </div>
              </div>  
          ';    
          $required="";      
          }
    echo ' </div>'; 
    
    //echo json_encode($arreglo);

    mysqli_free_result($resultado);
    mysqli_close($conn);
}

?>                          