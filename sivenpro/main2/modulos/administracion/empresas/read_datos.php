<?php
    //error_reporting(E_ALL);
    //ini_set('display_errors', '1');
    
    session_start();
    if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
    echo "no tienes los permisos";
    die();
    }

    include("../../../../../conexion/config/connection.php");
    include "../../../assets/php/funciones.php";
    $conn->set_charset('latin1');

    /* $conn es la conexión ! */
    
    $query = "SELECT * FROM empresas WHERE estado='Activo'";

    $cantidad_datos=0;
    $resultado = mysqli_query($conn, $query);
    if (!$resultado){ die("Error en la consulta"); }
    else {
        while ($data = mysqli_fetch_assoc($resultado) ) {
            $cantidad_datos++;
         $arreglo["data"][] = array_map("utf8_encode", $data);
    }
    if ($cantidad_datos==0) {
        echo ' {
        "draw": 0,
        "recordsTotal": 0,
        "recordsFiltered": 0,
        "data":[]
        }';
    }else {
        echo json_encode($arreglo);
    }   
    
    mysqli_free_result($resultado);
    mysqli_close($conn);
}

?>