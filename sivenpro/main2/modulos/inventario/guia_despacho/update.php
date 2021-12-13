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
    $id_productoElim = mysqli_real_escape_string($conn, $_POST["id_productoElim"]);
    $cantidad = mysqli_real_escape_string($conn, $_POST["cantidad"]);
    $cantidadElim = mysqli_real_escape_string($conn, $_POST["cantidadElim"]);
    $tipo_pago = mysqli_real_escape_string($conn, $_POST["tipo_pago"]);
    $opcion = mysqli_real_escape_string($conn, $_POST["opcion"]);
    $empresa = $_SESSION['interno_empresa'];
    $informacion = [];
    
    switch ($opcion){
        case 'modificar':
            modificar($id, $id_producto, $cantidad, $tipo_pago, $empresa, $conn);
            break;
        case 'eliminar':
            eliminar($id, $id_productoElim, $cantidadElim, $empresa, $conn);
            break;
        default:
            $informacion["respuesta"] = "OPCION_VACIA";
            echo json_encode($informacion);
            break;
    }


    function modificar($id, $id_producto, $cantidad, $tipo_pago, $empresa, $conn){

        $q_cantidad = consultaCantidadProducto($id_producto, $empresa, $conn);
        $q_precio = consultaPrecioProducto($id_producto, $empresa, $conn);
        $qg_cantidad = consultaCantidadGuia($id, $conn);

        if($q_cantidad[0]>=$cantidad){
            $query="UPDATE guia_despacho SET
                           cantidad = '$cantidad',
                           precio_total = $q_precio[0]*$cantidad,
                           tipo_pago ='$tipo_pago'
                    WHERE id_guia='$id'";
            $resultado = mysqli_query($conn, $query);

            $query_c = "UPDATE productos 
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


    function eliminar($id, $id_productoElim, $cantidadElim, $empresa, $conn){
        $q_producto = consultaProducto($id_productoElim, $empresa, $conn);

        if ($q_producto[0] != "" || $q_producto[0] != NULL){

            $query="UPDATE productos SET cantidad = cantidad +'$cantidadElim' 
                    WHERE id_producto = '$id_productoElim'";
            $resultado = mysqli_query($conn, $query);
        }

        $query="UPDATE guia_despacho SET estado='Eliminado' WHERE id_guia='$id'";
        $resultado = mysqli_query($conn, $query);
        verificar_resultado( $resultado );
        cerrar( $conn );
    }

    
    function verificar_resultado($resultado){
        if (!$resultado) $informacion["respuesta"] = "ERROR";
        else $informacion["respuesta"] = "BIEN";
        echo json_encode($informacion);
    }


    function consultaCantidadProducto($id_producto, $empresa, $conn){
        $arreglo = array();
        $consulta = "SELECT cantidad FROM productos WHERE id_producto='$id_producto' AND estado='Activo' AND empresa='$empresa'";
        $ejecuta = mysqli_query($conn,$consulta);
        while ($resultado = mysqli_fetch_assoc($ejecuta)){
            if($resultado["cantidad"] != null || $resultado["cantidad"] != ""){
                array_push($arreglo, $resultado["cantidad"]);
            }
        }
        return $arreglo;
    }


    function consultaPrecioProducto($id_producto, $empresa, $conn){
        $arreglo = array();
        $consulta = "SELECT precio FROM productos WHERE id_producto='$id_producto' AND estado='Activo' AND empresa='$empresa'";
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
        $consulta = "SELECT cantidad FROM guia_despacho WHERE id_guia='$id' AND estado='Activo'";
        $ejecuta = mysqli_query($conn,$consulta);
        while ($resultado = mysqli_fetch_assoc($ejecuta)){
            if($resultado["cantidad"] != null || $resultado["cantidad"] != ""){
                array_push($arreglo, $resultado["cantidad"]);
            }
        }
        return $arreglo;
    }


    function consultaProducto($id_productoElim, $empresa, $conn){
        $arreglo = array();
        $consulta = "SELECT * FROM productos 
                     WHERE id_producto='$id_productoElim' AND estado='Activo' AND empresa='$empresa'";
        $ejecuta = mysqli_query($conn,$consulta);
        while ($resultado = mysqli_fetch_assoc($ejecuta)){
            if($resultado["id_producto"] != null || $resultado["id_producto"] != ""){
                array_push($arreglo, $resultado["id_producto"]);
            }
        }
        return $arreglo;
    }


    function cerrar( $conn ){
        mysqli_close($conn);
    }

?>