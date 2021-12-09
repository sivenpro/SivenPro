<?php
//    error_reporting(E_ALL);
//    ini_set('display_errors', '1');

    session_start();
    include("../../../../../conexion/config/connection.php");
    $hoy = date("d-m-Y");
    $hora = date("H:i:s");
    mysql_select_db('id18070131_sivenpro');
    mysql_query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', 
    character_set_database = 'utf8', character_set_server = 'utf8'");
    
    $id_usuario=$_POST['id'];
    $usuario = $_SESSION['interno_usuario'];
    
    $arr_file_types = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg'];
    
    if (!(in_array($_FILES['file']['type'], $arr_file_types))) {
        echo "false";
        return;
    }
    
    $image = $_FILES["file"]["tmp_name"];
    $type = pathinfo($image, PATHINFO_EXTENSION);
    $data = file_get_contents($image);
    $base64 = base64_encode($data);

    $sql = "UPDATE usuarios SET avatar = '$base64' WHERE id_usuario='$id_usuario'";
    $result = mysql_query($sql);
    echo "success";
    die();
?>