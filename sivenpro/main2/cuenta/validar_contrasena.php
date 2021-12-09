<?php
// Given password
$password = $_POST["password"];
$confirmaPassword = $_POST["confirmaPassword"];
$flagConfirma = $_POST["flagConfirma"];

// Validate password strength
//$primeraletra = preg_match('@^[A-Z]$@', $password);
$uppercase = preg_match('@[A-Z]@', $password);
$lowercase = preg_match('@[a-z]@', $password);
$number    = preg_match('@[0-9]@', $password);
$specialChars = preg_match('@[^\w]@', $password);



switch($flagConfirma){
    case 1:
        if($password == $confirmaPassword){
            echo 'El campo si coincide con la contraseña.';
        }else{
            echo 'El campo debe coincidir con la contraseña ingresada.';
        }
    break;
    default:
    if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($password) < 8) {
        echo 'Contraseña debe tener al menos 8 caracteres, una letra mayuscula, un numero y un simbolo.';
    }else{
        echo 'Contraseña segura.';
    }
}
    
?>