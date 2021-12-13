<?php

    session_start();

    if($_SESSION['interno_id']=="" || $_SESSION['interno_id']==null || $_SESSION['interno_id']==0){
        die("No posees permiso!!");
    }

    include("../../../conexion/config/connection.php");
    $empresa = $_SESSION['interno_empresa'];

    if ($_SESSION['sivenpro_admin_general']==1){
        $querySesion="";
        $querySesionC="";
    }else{
        $querySesion="AND empresa='$empresa'";
        $querySesionC="AND b.empresa='$empresa'";
    }

    $consulta = "SELECT * FROM productos WHERE fecha_venc 
                BETWEEN curdate() AND date_add(curdate(), interval 7 day) AND estado = 'Activo' AND cantidad > 0
                $querySesion";
    $resultadoC = mysqli_query($conn, $consulta);
    
    while ($fila = mysqli_fetch_assoc($resultadoC)){

        $idProducto = $fila["id_producto"];

        if($fila!="" || $fila!=null){
            
            $consultaNot = "SELECT * FROM notificaciones WHERE id_producto = '$idProducto' and estado_notificacion = 'Activo'";
            $resultadoNot = mysqli_query($conn, $consultaNot);
            $row_query = mysqli_num_rows($resultadoNot);

            if($row_query <= 0){
                $consultaI = "INSERT INTO notificaciones(id_producto,fecha_insertado)
                              VALUES('$idProducto',now())";
                $resultadoI = mysqli_query($conn, $consultaI);
            }
        }
    }

    $query="SELECT count(*) as cantidad
            FROM notificaciones a 
            JOIN productos b 
            ON a.id_producto = b.id_producto
            WHERE a.estado_notificacion = 'Activo'
            AND b.estado='Activo'
            $querySesionC";
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