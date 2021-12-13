<?php

    session_start();

    if($_SESSION['interno_id']=="" || $_SESSION['interno_id']==null || $_SESSION['interno_id']==0){
        die("No posees permiso!!");
    }

    include("../../../conexion/config/connection.php");
    $empresa = $_SESSION['interno_empresa'];

    if ($_SESSION['sivenpro_admin_general']==1){
        $querySesion="";
    }else{
        $querySesion="AND b.empresa='$empresa'";
    }

    $query="SELECT count(*) as cantidad
            FROM notificaciones a 
            JOIN productos b 
            ON a.id_producto = b.id_producto
            WHERE a.estado_notificacion = 'Activo'
            AND b.estado='Activo'
            $querySesion";
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