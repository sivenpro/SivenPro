<?php

    session_start();

    if($_SESSION['interno_id']=="" || $_SESSION['interno_id']==null || $_SESSION['interno_id']==0){
        die("No posees permiso!!");
    }

    include("../../../conexion/config/connection.php");
    $id = mysqli_real_escape_string($conn, $_POST["id_notificacion"]);

    $query="UPDATE notificaciones 
            SET estado_notificacion = 'Eliminado'
            WHERE id_notificacion='$id'";
    $resultado = mysqli_query($conn, $query);

    if(!$resultado){ die("Error en la consulta");
    }else{
        
        $data = mysqli_fetch_assoc($resultado);
        mysqli_free_result($resultado);
        mysqli_close($conn);
    }
?>