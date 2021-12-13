<?php
    //error_reporting(E_ALL);
    //ini_set('display_errors', '1');
    
    session_start();
    if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
        echo "no tienes los permisos";
        die();
    }

    include("../../../../../conexion/config/connection.php");
    /* $conn es la conexión ! */

    $usuario = $_SESSION['interno_usuario'];
    $id = mysqli_real_escape_string($conn, $_POST["id"]);
    $nombre_perfil = mysqli_real_escape_string($conn, $_POST["nombre_perfil"]);
    $admin_general_click = mysqli_real_escape_string($conn, $_POST["admin_general_click"]);
    $admin_click = mysqli_real_escape_string($conn, $_POST["admin_click"]);
    $bode_click = mysqli_real_escape_string($conn, $_POST["bodeguero_click"]);
    $cont_click = mysqli_real_escape_string($conn, $_POST["cont_click"]);
    $opcion = mysqli_real_escape_string($conn, $_POST["opcion"]);
    $informacion = [];

    if($admin_general_click=="on"){
        $admin_general_click=1;
    }else{
        $admin_general_click=0;
    }

    if($admin_click=="on"){
        $admin_click=1;
    }else{
        $admin_click=0;
    }

    if($bode_click=="on"){
        $bode_click=1;
    }else{
        $bode_click=0;
    }
    
    if($cont_click=="on"){
        $cont_click=1;
    }else{
        $cont_click=0;
    }
    

    switch ($opcion){
        case 'registrar':
            if ($nombre_perfil!= "") {
                $existe = existe_perfil($nombre_perfil, $conn);
                if ( $existe > 0) {
                    $informacion["respuesta"] = "EXISTE";
                    echo json_encode($informacion);
                }else{
                    registrar($nombre_perfil, $admin_general_click, $admin_click, $bode_click, $cont_click, $conn);
                }
            }else{
                $informacion["respuesta"] = "VACIO";
                echo json_encode($informacion);
            }
            break;
        case 'modificar':
            modificar($id, $nombre_perfil, $admin_general_click, $admin_click, $bode_click, $cont_click, $conn);
            break;
        case 'eliminar':
            eliminar($id, $conn);
            break;
        default:
            $informacion["respuesta"] = "OPCION_VACIA";
            echo json_encode($informacion);
            break;
    }


    function registrar($nombre_perfil, $admin_general_click, $admin_click, $bode_click, $cont_click, $conn){
        $query = "INSERT INTO perfiles(nombre, admin_general, administrador, bodeguero, contador)
                  VALUES('$nombre_perfil', '$admin_general_click', '$admin_click', '$bode_click', '$cont_click')";
        $resultado = mysqli_query($conn, $query);
        verificar_resultado( $resultado );
        cerrar( $conn );
    }


    function modificar($id, $nombre_perfil, $admin_general_click, $admin_click, $bode_click, $cont_click, $conn){
        $query="UPDATE perfiles SET nombre= '$nombre_perfil',
                                                        admin_general = '$admin_general_click',
                                                        administrador ='$admin_click',
                                                        bodeguero='$bode_click',
                                                        contador='$cont_click'
                                                    WHERE id_perfil='$id'";
        $resultado = mysqli_query($conn, $query);
        verificar_resultado( $resultado );        
        cerrar( $conn );
    }


    function eliminar($id, $conn){
        $query = "UPDATE perfiles SET estado ='Eliminado' WHERE id_perfil='$id'";
        $resultado = mysqli_query($conn, $query);
        verificar_resultado( $resultado );
        cerrar( $conn );
    }

    
    function verificar_resultado($resultado){
        if (!$resultado) $informacion["respuesta"] = "ERROR";
        else $informacion["respuesta"] = "BIEN";
        echo json_encode($informacion);
    }


    function existe_perfil($nombre_perfil, $conn){
        $query = "SELECT nombre FROM perfiles WHERE nombre='$nombre_perfil'";
        $resultado = mysqli_query($conn, $query);
        $existe_perfil = mysqli_num_rows( $resultado );
        return $existe_perfil;
    }


    function cerrar( $conn ){
        mysqli_close($conn);
    }
?>