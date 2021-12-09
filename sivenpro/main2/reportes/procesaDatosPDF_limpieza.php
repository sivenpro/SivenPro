<?php
session_start();
if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
    echo "no tienes los permisos";
    die();
}

// error_reporting(E_ALL);
// ini_set('display_errors', '1');

include("../../../gassur/config/connection.php");
include("generaPdf_formularios.php");

$id_registro = $_POST["id_registro"];

/* $conn es la conexión ! */

$query = "SELECT r.*, p.nombre as plantilla, e.nombre as empresa, u.nombre_completo as empleado
          FROM sistema_interno_formularios.respuestas_limpieza r
          JOIN sistema_interno_formularios.plantillas p ON p.id = r.id_plantilla
          JOIN sistema_interno.empresas e ON e.id = r.id_empresa
          JOIN sistema_interno.usuarios u ON u.id = r.id_empleado
          WHERE r.id='$id_registro'";
// echo $query;

$resultado = mysqli_query($conn, $query);
if (!$resultado) {
    die("Error en la consulta || " . $query);
} else {
    $data_final = mysqli_fetch_assoc($resultado);

    $sql_firma = "SELECT a.nombre_completo, c.nombre as nombre_perfil, url_firma, DATE_FORMAT(b.fecha_modif,'%d-%m-%Y') as fecha_modif_
                  FROM sistema_interno.usuarios a
                  INNER JOIN sistema_interno_formularios.respuestas_limpieza b ON a.nombre = b.usuario
                  INNER JOIN sistema_interno.perfiles c ON a.tipo_perfil = c.id
                  WHERE b.id='$id_registro' LIMIT 1";

    $data_final["firma_usuario"] = null;
    $resultado = mysqli_query($conn, $sql_firma);
    while ($da = mysqli_fetch_assoc($resultado)) {
        $data_final["firma_usuario"] = (object) $da;
    }

    $data_final = (object) $data_final;
    $fecha_ = $data_final->fecha;
    $fecha_emision = date('d-m-Y', strtotime($fecha_));

    $hora_ = $data_final->hora;
    $hora_final = date('H:m', strtotime($hora_));

    if($data_final->herramientas=="1"){
        $div_herramientas = "<li>Herramientas</li>";
    }else{
        $div_herramientas = "";
    }

    if($data_final->deteccion_gases=="1"){
        $div_deteccion = "<li>Equipo Detección de Gases</li>";
    }else{
        $div_deteccion = "";
    }

    if($data_final->respiracion=="1"){
        $div_respiracion = "<li>Equipo de Respiración Autónoma</li>";
    }else{
        $div_respiracion = "";
    }

    if($data_final->otros=="1"){
        $div_otros = "<li>Otros: ".$data_final->otros_obs."</li>";
    }else{
        $div_otros = "";
    }

    $cuerpo_html .= '<h3 style="margin-top:-5px;margin-bottom:5%;text-align:center;">'.$data_final->plantilla.'</h3>';
    
    //AQUI LLENAR LOS CAMPOS DE INFORMACION DINAMICOS //SI UNA TABLA DE DATOS NO TIENE INFORMACION, QUE NO SE CONSTRUYA
    $cuerpo_html .= '<div style="font-size: larger; margin-left:5%;line-height: 200%;">
                        <p><strong>Empresa: </strong>'.$data_final->empresa.'</p>
                        <p><strong>Personal Encargado: </strong>'.$data_final->empleado.'</p>
                        <p><strong>Fecha: </strong>'.$fecha_emision.'</p>
                        <p><strong>Hora: </strong>'.$hora_final.'</p>
                        <p>&nbsp;</p>
                        <p><strong>Equipos: </strong></p>
                        <ul>
                          <p>'.$div_herramientas.'</p>
                          <p>'.$div_deteccion.'</p>
                          <p>'.$div_respiracion.'</p>
                          <p>'.$div_otros.'</p>
                        </ul><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                    </div>';


    //AQUI AGREGAR FIRMAS E IMAGENES PARA ELLAS
    if ($data_final->firma_usuario != null) {

        $html_firmas = "";
        $data_firmas = null;

        if ($data_final->firma_usuario != null) {

            if ($data_final->firma_usuario->url_firma != "") {
                $img = $data_final->firma_usuario->url_firma;
            }
            else{
                $img = dirname(__FILE__) . "/../biblioteca/firmas/default.png";
            }

            $celda_arriba = '<td style="width: 100%; text-align: center; height: 100px;"><img src="' . $img . '" style="height: 190px; width: 320px;"></td>';
            $celda_abajo = '<td style="width: 100%; text-align: center; height: 30px;">
                <p style="font-size:17px;">' . $data_final->firma_usuario->nombre_completo . '</p>
                <p style="font-size:14px;">' . $data_final->firma_usuario->nombre_perfil . '</p>
                </td>';
            $data_firmas[] = (object) ['nombre' => 'firma_usuario', 'celda_arriba' => $celda_arriba, 'celda_abajo' => $celda_abajo];
        }

        if (count($data_firmas) > 0) {

            $cuerpo_html .= '<table style="border-collapse: collapse; width: 100%;" border-style: none;" border="0", text-align:center;>
                    <tbody>
                    <tr style="height: 200px;">';

            foreach ($data_firmas as $key) {
                $cuerpo_html .= $key->celda_arriba;
            }

            $cuerpo_html .= '</tr>';
            $cuerpo_html .= '<tr style="height: 50px;">';

            foreach ($data_firmas as $key) {
                $cuerpo_html .= $key->celda_abajo;
            }

            $cuerpo_html .= '</tr></tbody></table>';
        }
    }


    // echo $cuerpo_html;

    //echo json_encode($data_final);
    $nombre_archivo = "Registro_Limpieza_N_" . $id_registro . "_" . date("dmY");
    $data_return = generaPDFParametros($id_registro, $nombre_archivo, $cuerpo_html);
    $informacion["base_64"] = $data_return;
    $informacion["nombre_archivo"] = $nombre_archivo;
    echo json_encode($informacion);
}