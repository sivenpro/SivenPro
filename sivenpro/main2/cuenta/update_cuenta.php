<?php
 session_start();
        
 if($_SESSION["usuario_movil_id"] == 0 && $_SESSION["usuario_movil_id"] == NULL){
            echo "no tienes los permisos";
            die();
 }
 
    include "../../../../gassur/config/connection.php";
        
    $idCuenta = $_SESSION["usuario_movil_id"];
    $pass = mysqli_real_escape_string($conn, $_POST["password"]);
    $correo = mysqli_real_escape_string($conn, $_POST["correo"]);


        $query="UPDATE gassur_otros.usuarios_nuevo SET pass= '$pass', correo= '$correo'
                                                    WHERE id='$idCuenta'";
                                                    
        $resultado = mysqli_query($conn, $query);

        verificar_resultado( $resultado );        
        mysqli_close($conn);

    function verificar_resultado($resultado){
        if (!$resultado) $informacion["respuesta"] = "ERROR";
        else $informacion["respuesta"] = "BIEN";
        echo json_encode($informacion);
    }
?>