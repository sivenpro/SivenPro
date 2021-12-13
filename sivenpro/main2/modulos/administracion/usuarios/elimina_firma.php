<?php
    session_start();
    //error_reporting(E_ALL);
    //ini_set('display_errors', '1');
    if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
        echo "no tienes los permisos";
        die();
    }

    include("../../../../../conexion/config/connection.php");
    mysqli_query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'",$conn);

    $id = mysqli_real_escape_string($conn, $_POST["id_usu"]);
    $informacion = [];

    $query = "UPDATE usuarios SET url_firma = null, posee_firma='No' where id_usuario = '$id'";
    $resultado = mysqli_query($conn, $query);
    mysqli_close($conn);
    $informacion["respuesta"] = "BIEN";
    echo json_encode($informacion);

?>