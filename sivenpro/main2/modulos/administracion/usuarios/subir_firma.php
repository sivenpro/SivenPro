<?php
    session_start();
    // error_reporting(E_ALL);
    // ini_set('display_errors', '1');

    if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
        echo "no tienes los permisos";
        die();
    }

    include("../../../../../conexion/config/connection.php");
    mysqli_query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'",$conn);
    date_default_timezone_set('America/Santiago');

    $id = mysqli_real_escape_string($conn, $_POST["id_usu"]);
    $nom_user = mysqli_real_escape_string($conn, $_POST["nom_user"]);
    $informacion = [];
    $hoy = date("d-m-Y");
    $hora = date("H:i:s");

    $base64 = mysqli_real_escape_string($conn, $_POST['imagen']);
    $query = "UPDATE id18070131_sivenpro.usuarios SET url_firma='$base64', posee_firma='Si' WHERE id_usuario='$id'";
    $resultado = mysqli_query($conn, $query);
    mysqli_close($conn);
    $informacion["respuesta"] = "SUBE_FIRMA";
    echo json_encode($informacion);

?>