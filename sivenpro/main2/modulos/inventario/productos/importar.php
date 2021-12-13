<?php

// error_reporting(E_ALL);
// ini_set('display_errors', '1');

session_start();
if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
    echo "no tienes los permisos";
    die();
}

include("../../../../../conexion/config/connection.php");
$informacion = [];
$arregloExcelIDMaterial = array();
$empresa = $_SESSION['interno_empresa'];

include "class.upload.php";

if(isset($_FILES["name"])){
    $up = new Upload($_FILES["name"]);
	if($up->uploaded){
        $up->Process("../../../biblioteca/excel/");
		if($up->processed){
            /// leer el archivo excel
            require_once '../../../assets/Classes/PHPExcel.php';
            $archivo = "../../../biblioteca/excel/".$up->file_dst_name;
            $inputFileType = PHPExcel_IOFactory::identify($archivo);
            $objReader = PHPExcel_IOFactory::createReader($inputFileType);
            $objPHPExcel = $objReader->load($archivo);
            $sheet = $objPHPExcel->getSheet(0); 
            $highestRow = $sheet->getHighestRow(); 
            $highestColumn = $sheet->getHighestColumn();

            $nombresVacios = validarNombresVacios($sheet, $highestRow);
            if(empty($nombresVacios)){
                $codigosVacios = validarCodigosVacios($sheet, $highestRow);
                if(empty($codigosVacios)){
                    $contenidoVacio = validarContenidosVacios($sheet, $highestRow);
                    if(empty($contenidoVacio)){
                        $filasNoNumericasPrecio = validarFilaNumericaPrecio($sheet, $highestRow);
                        if(empty($filasNoNumericasPrecio)){
                            $filasNoNumericasCantidad = validarFilaNumericaCantidad($sheet, $highestRow);
                            if(empty($filasNoNumericasCantidad)){
                                $validarDatosExistentes = verificaCodBD($sheet,$highestRow,$empresa,$conn);
                                $DatosExistentes = $validarDatosExistentes[0]['encontradas'];
                                if(empty($DatosExistentes)){
                                   
                                    for ($row = 2; $row <= $highestRow; $row++){
                                        $nombre = trim($sheet->getCell("A" . $row)->getValue());
                                        $codigo = trim($sheet->getCell("B" . $row)->getValue());
                                        $cantidad = trim($sheet->getCell("C" . $row)->getValue());
                                        $precio = trim($sheet->getCell("D" . $row)->getValue());
                                        $marca = trim($sheet->getCell("E" . $row)->getValue());
                                        $cont_neto = trim($sheet->getCell("F" . $row)->getValue());
                                        $fecha_venc = $sheet->getCell("G" . $row)->getValue();

                                        if(empty($fecha_venc) || $fecha_venc=="" || $fecha_venc==null){
                                            $fecha_ = "2050-12-20";
                                        }else{
                                            $fecha_vencim = date('Y-m-d', PHPExcel_Shared_Date::ExcelToPHP($sheet->getCell("G" . $row)->getValue()));
                                            $fecha_ = $fecha_vencim;
                                        }

                                        $query = "INSERT INTO productos (nombre_producto, cod_producto, cantidad, precio, marca, cont_neto, fecha_venc, empresa) VALUES";
                                        $query .= "('$nombre', \"$codigo\", \"$cantidad\", \"$precio\", \"$marca\", \"$cont_neto\", '$fecha_', '$empresa')";
                                        $conn->query($query);
                                        $informacion["respuesta"] = "INGRESADO";
                                    }
                                    echo json_encode($informacion);
                                }
                                else{
                                    $informacion["respuesta"] = "EXISTENTE";
                                    $informacion["data"] = $DatosExistentes;
                                    echo json_encode($informacion);
                                }
                            }
                            else{
                                $informacion["respuesta"] = "CANTIDAD_NO_NUM";
                                $informacion["data"] = $filasNoNumericasCantidad;
                                echo json_encode($informacion);
                            }
                        }
                        else{
                            $informacion["respuesta"] = "PRECIO_NO_NUM";
                            $informacion["data"] = $filasNoNumericasPrecio;
                            echo json_encode($informacion);
                        
                        }
                    }
                    else{
                        $informacion["respuesta"] = "CONT_VACIO";
                        $informacion["data"] = $contenidoVacio;
                        echo json_encode($informacion);
                    }
                }
                else{
                    $informacion["respuesta"] = "CODIGO_VACIO";
                    $informacion["data"] = $codigosVacios;
                    echo json_encode($informacion);
                }
            }
            else{
                $informacion["respuesta"] = "NOMBRE_VACIO";
                $informacion["data"] = $nombresVacios;
                echo json_encode($informacion);
            }
        }
    }
}


function validarNombresVacios($sheet, $highestRow){
    $arregloNombre = array();
    for ($row = 2; $row <= $highestRow; $row++){
        $nombre_producto = $sheet->getCell("A" . $row)->getValue();
        if($nombre_producto == "" || $nombre_producto == null){
            $nombre_producto_ = ["nombreProducto" => $nombre_producto, "fila" => $row];
            $arregloNombre[] = $row;
        }
    }
    return $arregloNombre;
}


function validarCodigosVacios($sheet, $highestRow){
    $arregloCodigo = array();
    for ($row = 2; $row <= $highestRow; $row++){
        $cod_producto = $sheet->getCell("B" . $row)->getValue();
        if($cod_producto == "" || $cod_producto == null){
            $cod_producto_ = ["nombreProducto" => $cod_producto, "fila" => $row];
            $arregloCodigo[] = $row;
        }
    }
    return $arregloCodigo;
}


function validarContenidosVacios($sheet, $highestRow){
    $arregloCont = array();
    for ($row = 2; $row <= $highestRow; $row++){
        $cont_neto = $sheet->getCell("F" . $row)->getValue();
        if($cont_neto == "" || $cont_neto == null){
            $cont_neto_ = ["nombreProducto" => $cont_neto, "fila" => $row];
            $arregloCont[] = $row;
        }
    }
    return $arregloCont;
}


function validarFilaNumericaPrecio($sheet, $highestRow){
    $arregloPrecio = array();
    for ($row = 2; $row <= $highestRow; $row++){
        $valorPrecio = $sheet->getCell("D" . $row)->getValue();
        if(!is_numeric($valorPrecio)){
            $valorPrecio_ = ["valor" => $valorPrecio, "fila" => $row];
            $arregloPrecio[] = $row;
        }
    }
    return $arregloPrecio;
}


function validarFilaNumericaCantidad($sheet, $highestRow){
    $arregloCantidadN = array();
    for ($row = 2; $row <= $highestRow; $row++){
        $cantidadFila = $sheet->getCell("C" . $row)->getValue();
        if(!is_numeric($cantidadFila)){
            $cantidadFila_ = ["valor" => $cantidadFila, "fila" => $row];
            $arregloCantidadN[] = $row;
        }
    }
    return $arregloCantidadN;
}


function verificaCodBD($sheet,$highestRow,$empresa,$conn){
    $tabla = 'productos';
    $campo = 'cod_producto';
    $arregloCod = array();
    $arregloCodconRow = array();
    for ($row = 2; $row <= $highestRow; $row++){
        $valor = trim($sheet->getCell("B" . $row)->getValue());
        if($valor != "" || $valor != null){
            array_push($arregloCod,$valor);
            $arregloCodconRow[] = ["cod_producto" => $valor, "fila" => $row];
        }
    }

    $arregloConjuntoID = array();
    $IDEncontradasEnBdd["encontradas"] = array();
    $IDNoEncontradasEnBdd["no_encontradas"] = array();
    foreach ($arregloCodconRow as $dato){
        $consultaSQL = ejecutarConsultaSelectMysqlWhere($conn,$tabla,$campo,$dato['cod_producto'],$empresa);
        if(!empty($consultaSQL)){
            $arregloConjuntoID = array_merge($arregloConjuntoID,$consultaSQL);
        }
    }
    
    foreach ($arregloCodconRow as $key){
        $valor = $key['cod_producto'];
        $elementoEncontrado = array_search($valor,$arregloConjuntoID);
        if( false !== $elementoEncontrado){
            array_push($IDEncontradasEnBdd["encontradas"],$key);
        }else{
            array_push($IDNoEncontradasEnBdd["no_encontradas"],$key);
        }
    }
    $arregloTotal = array();
    array_push($arregloTotal,$IDEncontradasEnBdd);
    array_push($arregloTotal,$IDNoEncontradasEnBdd);
    return $arregloTotal;
}


function ejecutarConsultaSelectMysqlWhere($conn,$tabla,$campo,$where,$empresa){
    $arreglo = array();
    $consulta = "SELECT $campo as valor FROM $tabla WHERE $campo = '$where' AND estado = 'ACTIVO' AND empresa='$empresa'";
    // echo $consulta;
    $ejecuta = mysqli_query($conn,$consulta);
    while ($resultado = mysqli_fetch_assoc($ejecuta) ){
        if($resultado["valor"] != null || $resultado["valor"] != ""){
            array_push($arreglo, $resultado["valor"]);
        }
    }
    return $arreglo;
}


function group_by($key, $data) {
    $result = array();

    foreach($data as $val) {
        if(array_key_exists($key, $val)){
            $result[$val[$key]][] = $val;
        }else{
            $result[""][] = $val;
        }
    }
    return $result;
}

?>
