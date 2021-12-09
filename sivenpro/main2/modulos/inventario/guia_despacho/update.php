<?php
    // error_reporting(E_ALL);
    // ini_set('display_errors', '1');

    session_start();
    if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
        echo "no tienes los permisos";
        die();
    }

    include "../../../../../conexion/config/connection.php";
    include "../../../php/funciones.php";
    /* $conn es la conexión ! */

    $id = mysqli_real_escape_string($conn, $_POST["id"]);
    $id_producto = mysqli_real_escape_string($conn, $_POST["id_producto"]);
    $cantidad = mysqli_real_escape_string($conn, $_POST["cantidad"]);
    $tipo_pago = mysqli_real_escape_string($conn, $_POST["tipo_pago"]);
    $opcion = mysqli_real_escape_string($conn, $_POST["opcion"]);
    $informacion = [];
    
    switch ($opcion){
        case 'modificar':
            modificar($id, $id_producto, $cantidad, $tipo_pago, $conn);
            break;
        case 'eliminar':
            eliminar($id, $conn);
            break;
        default:
            $informacion["respuesta"] = "OPCION_VACIA";
            echo json_encode($informacion);
            break;
    }


    function modificar($id, $id_producto, $cantidad, $tipo_pago, $conn){

        $q_cantidad = consultaCantidadProducto($id_producto, $conn);
        $q_precio = consultaPrecioProducto($id_producto, $conn);
        $qg_cantidad = consultaCantidadGuia($id, $conn);

        if($q_cantidad[0]>=$cantidad){
            $query="UPDATE id18070131_sivenpro.guia_despacho SET
                           cantidad = '$cantidad',
                           precio_total = $q_precio[0]*$cantidad,
                           tipo_pago ='$tipo_pago'
                    WHERE id_guia='$id'";
            $resultado = mysqli_query($conn, $query);

            $query_c = "UPDATE id18070131_sivenpro.productos 
                        SET cantidad = ($qg_cantidad[0]-$cantidad)+$q_cantidad[0]
                        WHERE id_producto='$id_producto'";
            $resultado = mysqli_query($conn, $query_c);

            verificar_resultado($resultado);
            cerrar( $conn );
        }
        else{
            $informacion["respuesta"] = "EXCEDE";
            echo json_encode($informacion);
        }
    }


    function eliminar($id, $conn){
        $query="UPDATE id18070131_sivenpro.guia_despacho SET estado='Eliminado' WHERE id_guia='$id'";
        $resultado = mysqli_query($conn, $query);
        verificar_resultado( $resultado );
        cerrar( $conn );
    }

    
    function verificar_resultado($resultado){
        if (!$resultado) $informacion["respuesta"] = "ERROR";
        else $informacion["respuesta"] = "BIEN";
        echo json_encode($informacion);
    }


    function consultaCantidadProducto($id_producto, $conn){
        $arreglo = array();
        $consulta = "SELECT cantidad FROM id18070131_sivenpro.productos WHERE id_producto='$id_producto' AND estado='Activo'";
        $ejecuta = mysqli_query($conn,$consulta);
        while ($resultado = mysqli_fetch_assoc($ejecuta)){
            if($resultado["cantidad"] != null || $resultado["cantidad"] != ""){
                array_push($arreglo, $resultado["cantidad"]);
            }
        }
        return $arreglo;
    }


    function consultaPrecioProducto($id_producto, $conn){
        $arreglo = array();
        $consulta = "SELECT precio FROM id18070131_sivenpro.productos WHERE id_producto='$id_producto' AND estado='Activo'";
        $ejecuta = mysqli_query($conn,$consulta);
        while ($resultado = mysqli_fetch_assoc($ejecuta)){
            if($resultado["precio"] != null || $resultado["precio"] != ""){
                array_push($arreglo, $resultado["precio"]);
            }
        }
        return $arreglo;
    }


    function consultaCantidadGuia($id, $conn){
        $arreglo = array();
        $consulta = "SELECT cantidad FROM id18070131_sivenpro.guia_despacho WHERE id_guia='$id'";
        $ejecuta = mysqli_query($conn,$consulta);
        while ($resultado = mysqli_fetch_assoc($ejecuta)){
            if($resultado["cantidad"] != null || $resultado["cantidad"] != ""){
                array_push($arreglo, $resultado["cantidad"]);
            }
        }
        return $arreglo;
    }


    function cerrar( $conn ){
        mysqli_close($conn);
    }

?>