<?php
session_start();
$estado = 'activo';
if($_SESSION["interno_id"] == 0 && $_SESSION["interno_id"] == NULL){
    $estado = 'desactivo';
}
echo json_encode( Array('respuesta' => $estado));
?>