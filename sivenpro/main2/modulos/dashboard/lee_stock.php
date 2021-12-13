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
        $querySesion="AND empresa='$empresa'";
    }

    $query = "SELECT SUM(cantidad) AS contador,
              format(ifnull(sum(round(precio*cantidad,0)),0),0, 'de_DE' ) as total,
              DATE_FORMAT(now(), '%d-%m-%Y %H:%i:%s') as fecha_stock
              FROM productos 
              WHERE estado='Activo'
              $querySesion";
    // echo $query;
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