<?php

    session_start();
    if($_SESSION['interno_id']=="" || $_SESSION['interno_id']==null || $_SESSION['interno_id']==0){
        die("No posees permiso!!");
    }
    include("../../../../conexion/config/connection.php");

    $query = "SELECT format(ifnull(sum(round(precio_total,0)),0),0, 'de_DE' ) as contador,
              SUM(cantidad) AS contador_ventas,
              DATE_FORMAT(now(), '%d-%m-%Y %H:%i') as fecha_ventas
              FROM id18070131_sivenpro.guia_despacho 
              WHERE estado='Activo'";
    //echo $query;
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