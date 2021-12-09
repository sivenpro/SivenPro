<?php

    session_start();

    if($_SESSION['interno_id']=="" || $_SESSION['interno_id']==null || $_SESSION['interno_id']==0){
        die("No posees permiso!!");
    }

    include("../../../conexion/config/connection.php");
    $id = mysqli_real_escape_string($conn, $_POST["id_notificacion"]);

    $query="UPDATE id18070131_sivenpro.notificaciones 
            SET estado_notificacion = 'Eliminado'  
            WHERE id_notificacion='$id'";
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