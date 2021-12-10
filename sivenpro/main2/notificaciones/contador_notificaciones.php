<?php

    session_start();

    if($_SESSION['interno_id']=="" || $_SESSION['interno_id']==null || $_SESSION['interno_id']==0){
        die("No posees permiso!!");
    }

    include("../../../conexion/config/connection.php");

    $query="SELECT count(*) as cantidad
            FROM id18070131_sivenpro.notificaciones 
            WHERE estado_notificacion = 'Activo'";
    $resultado = mysqli_query($conn, $query);

    if(!$resultado){ die("Error en la consulta"); 
    }else{
    while ($data = mysqli_fetch_assoc($resultado)){
        $arreglo["data"][] = $data;
    }

    echo json_encode($arreglo);
    mysqli_free_result($resultado);
    mysqli_close($conn);
    
    }
?>