<?php

    session_start();
    if($_SESSION['interno_id']=="" || $_SESSION['interno_id']==null || $_SESSION['interno_id']==0){
        die("No posees permiso!!");
    }
    include("../../../../conexion/config/connection.php");

    $query = "SELECT format(ifnull(round(p.precio,0),0),0, 'de_DE') AS precio_ind, p.nombre_producto AS producto, g.id_producto, SUM(g.cantidad) AS total_ventas,
              format(ifnull(sum(round(g.precio_total,0)),0),0, 'de_DE' ) AS contador,
              DATE_FORMAT(now(), '%d-%m-%Y %H:%i') AS fecha_ventas
              FROM id18070131_sivenpro.guia_despacho g
              INNER JOIN id18070131_sivenpro.productos p ON p.id_producto = g.id_producto
              WHERE g.estado='Activo'
              GROUP BY g.id_producto
              ORDER BY SUM(g.cantidad) DESC
              LIMIT 0,1";
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