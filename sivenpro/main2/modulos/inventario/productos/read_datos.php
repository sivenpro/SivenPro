<?php
session_start();
if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
    echo "no tienes los permisos";
    die();
}

/* error_reporting(E_ALL);
ini_set('display_errors', '1'); */
include("../../../../../conexion/config/connection.php");
$empresa = $_SESSION['interno_empresa'];

if ($_SESSION['sivenpro_admin_general']==1){
    $querySesion="";
}else{
    $querySesion="AND empresa='$empresa'";
}

$fecha_filtro_inicio = mysqli_real_escape_string($conn, $_POST["fecha_inicio_rango"]);
$fecha_filtro_final = mysqli_real_escape_string($conn, $_POST["fecha_final_rango"]);

if($fecha_filtro_inicio!="" && $fecha_filtro_final!=""){
    $where = " AND CONVERT(productos.fecha_venc,DATE) BETWEEN CONVERT(STR_TO_DATE('$fecha_filtro_inicio', '%d/%m/%Y'),DATE) 
              AND CONVERT(STR_TO_DATE('$fecha_filtro_final', '%d/%m/%Y'),DATE)";
}else{
    $where = "";
}
    
$query="SELECT *,
        (SELECT DATE_FORMAT(fecha_venc, '%d-%m-%Y')) as fecha_convert
        FROM productos
        WHERE estado!='Eliminado'
        $querySesion
        $where";
// echo $query;

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