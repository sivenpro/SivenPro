<?php
    session_start();
    if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
        echo "no tienes los permisos";
        die();
    }

    include("../../../../../conexion/config/connection.php");
    $conn->set_charset('latin1');
    /* $conn es la conexión ! */

    $query="SELECT *,
           (SELECT nombre FROM id18070131_sivenpro.perfiles WHERE id_perfil = tipo_perfil) as nombre_perfil
           FROM id18070131_sivenpro.usuarios
           WHERE estado = 'ACTIVO'";

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