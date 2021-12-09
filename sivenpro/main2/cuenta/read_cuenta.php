<?php
session_start();
if($_SESSION["interno_id"] == 0 && $_SESSION["interno_id"] == NULL){
    echo "no tienes los permisos";
    die();
}
/* error_reporting(E_ALL);
ini_set('display_errors', '1'); */
include "../../../conexion/config/connection.php";
include "../assets/php/funciones.php";

$id_usuario = $_SESSION["interno_id"];

$query = "SELECT Usuario.*, p.nombre_perfil from id18070131_sivenpro.usuarios as Usuario
            INNER JOIN sivenpro.perfiles p
            ON p.id_perfil = Usuario.tipo_perfil
            WHERE Usuario.id_usuario = $id_usuario";


$cantidad_datos=0;
    $resultado = mysqli_query($conn, $query);
    if (!$resultado){ die("Error en la consulta"); }
    else {
        while ($data = mysqli_fetch_assoc($resultado) ) {
            $cantidad_datos++;
         $arreglo[] = $data;
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