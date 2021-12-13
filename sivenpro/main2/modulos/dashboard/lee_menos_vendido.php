<?php

    session_start();
    if($_SESSION['interno_id']=="" || $_SESSION['interno_id']==null || $_SESSION['interno_id']==0){
        die("No posees permiso!!");
    }
    include("../../../../conexion/config/connection.php");
    $empresa = $_SESSION['interno_empresa'];
    /* $conn es la conexión ! */

    if ($_SESSION['sivenpro_admin_general']==1){
        $querySesion="";
    }else{
        $querySesion="AND p.empresa='$empresa'";
    }

    $query = "SELECT format(ifnull(round(p.precio,0),0),0, 'de_DE') AS precio_ind, p.nombre_producto as producto, g.id_producto, SUM(g.cantidad) AS total_ventas,
              format(ifnull(sum(round(g.precio_total,0)),0),0, 'de_DE' ) as contador,
              DATE_FORMAT(now(), '%d-%m-%Y %H:%i:%s') as fecha_ventas
              FROM guia_despacho g
              INNER JOIN productos p ON p.id_producto = g.id_producto
              WHERE g.estado='Activo'
              $querySesion
              GROUP BY g.id_producto
              ORDER BY SUM(g.cantidad) ASC
              LIMIT 0,1";
    //echo $query;
    
    $cantidad_datos=0;
    $resultado = mysqli_query($conn, $query);
    if (!$resultado){ die("Error en la consulta"); }
    else {
    while ($data = mysqli_fetch_assoc($resultado)) {
     $cantidad_datos++;
    $arreglo["data"][] = array_map("utf8_encode", $data);
    }

    if ($cantidad_datos==0) {
    echo ' {
    "draw": 0,
    "recordsTotal": 0,
    "recordsFiltered": 0,
    "data":[]
    }';
    }else {
    echo json_encode($arreglo);
    }   
    mysqli_free_result($resultado);
    mysqli_close($conn);
}

?>