<?php
    //error_reporting(E_ALL);
    //ini_set('display_errors', '1');
    
    session_start();
    if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
        echo "no tienes los permisos";
        die();
    }
    include("../../../../../conexion/config/connection.php");

    $id = mysqli_real_escape_string($conn, $_POST["id"]);
    $nombre_empresa = mysqli_real_escape_string($conn, $_POST["nombre"]);
    $rut_empresa = mysqli_real_escape_string($conn, $_POST["rut"]);
    $informacion = [];
    $opcion = mysqli_real_escape_string($conn, $_POST["opcion"]);

    switch ($opcion){
        case 'registrar':
            if ($nombre_empresa!="") {
                $existe = existe_empresa($nombre_empresa, $conn);
                if ( $existe > 0) {
                    $informacion["respuesta"] = "EXISTE";
                    echo json_encode($informacion);
                }else {
                    registrar($id, $nombre_empresa, $rut_empresa, $conn);
                }
            }else{
                $informacion["respuesta"] = "VACIO";
                echo json_encode($informacion);
            }
            break;
        case 'modificar':
            modificar($id, $nombre_empresa, $rut_empresa, $conn);
            break;
        case 'eliminar':
            eliminar($id, $conn);
            break;
        default:
            $informacion["respuesta"] = "OPCION_VACIA";
            echo json_encode($informacion);
            break;
    }


    function registrar($id, $nombre_empresa, $rut_empresa, $conn){
        $query = "INSERT INTO empresas(nombre, rut_empresa)
                  VALUES ('$nombre_empresa', '$rut_empresa')";
        $resultado = mysqli_query($conn, $query);
        verificar_resultado( $resultado );
        cerrar( $conn );
    }


    function modificar($id, $nombre_empresa, $rut_empresa, $conn){
        $query="UPDATE empresas SET nombre = '$nombre_empresa',
                                                    rut_empresa = '$rut_empresa'
                                                WHERE id='$id'";
        $resultado = mysqli_query($conn, $query);
        verificar_resultado( $resultado );        
        cerrar( $conn );
    }


    function eliminar($id, $conn){
        $query="UPDATE empresas SET estado='Eliminado' WHERE id='$id'";
        $resultado = mysqli_query($conn, $query);
        verificar_resultado( $resultado );
        cerrar( $conn );
    }

    
    function verificar_resultado($resultado){
        if (!$resultado) $informacion["respuesta"] = "ERROR";
        else $informacion["respuesta"] = "BIEN";
        echo json_encode($informacion);
    }


    function existe_empresa($nombre_empresa, $conn){
        $query = "SELECT nombre FROM empresas 
                  WHERE nombre='$nombre_empresa' AND estado='Activo'";
        $resultado = mysqli_query($conn, $query);
        $existe_empresa = mysqli_num_rows( $resultado );
        return $existe_empresa;
    }


    function cerrar( $conn ){
        mysqli_close($conn);
    }
?>