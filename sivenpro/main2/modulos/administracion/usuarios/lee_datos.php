<?php
session_start();
if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
    echo "no tienes los permisos";
    die();
}

include("../../../../../conexion/config/connection.php");

$id_usuario=$_POST["id_usu"];

$query="SELECT url_firma from id18070131_sivenpro.usuarios WHERE id_usuario='$id_usuario'";
$resultado = mysqli_query($conn, $query);

if(!$resultado){ die("Error en la consulta"); 
}else{
    while ($data = mysqli_fetch_assoc($resultado)){
        $arreglo["data"][] = array_map("utf8_encode",$data);
    }

    echo json_encode($arreglo);
    mysqli_free_result($resultado);
    mysqli_close($conn);
}
?>