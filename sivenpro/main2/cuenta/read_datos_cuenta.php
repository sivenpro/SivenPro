<?php
session_start();

if ($_SESSION['interno_usuario'] == "") {
   

}else{
   
}

$arreglo = array();

$usuario->nombre = $_SESSION["interno_usuario"];
$usuario->id = $_SESSION["interno_id"];  //63
$usuario->foto = "sinfoto";
$usuario->correo = "correo@correo.cl";

array_push($arreglo, $usuario);

$usuarioJSON = json_encode($arreglo);

echo $usuarioJSON;


?>