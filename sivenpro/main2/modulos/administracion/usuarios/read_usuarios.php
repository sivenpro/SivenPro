<?php
    session_start();
    if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
        echo "no tienes los permisos";
        die();
    }

    include("../../../../../conexion/config/connection.php");
    $conn->set_charset('latin1');
    $empresa = $_SESSION['interno_empresa'];
    /* $conn es la conexión ! */

    if ($_SESSION['sivenpro_admin_general']==1){
        $querySesion="";
    }else{
        $querySesion="AND empresa='$empresa'";
    }

    $query="SELECT *,
           (SELECT nombre FROM empresas WHERE id = empresa) as nombre_empresa,
           (SELECT nombre FROM perfiles WHERE id_perfil = tipo_perfil) as nombre_perfil
           FROM usuarios
           WHERE estado = 'ACTIVO'
           $querySesion";

    $cantidad_datos=0;
    $resultado = mysqli_query($conn, $query);
    if (!$resultado){ die("Error en la consulta"); }
    else {
        while ($data = mysqli_fetch_assoc($resultado) ) {
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