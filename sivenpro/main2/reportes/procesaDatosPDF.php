<?php
session_start();
if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
    echo "no tienes los permisos";
    die();
}

// error_reporting(E_ALL);
// ini_set('display_errors', '1');

include("../../../gassur/config/connection.php");
include("generaPdf.php");

$id_orden = $_POST["id_orden"];

/* $conn es la conexión ! */

$query = "SELECT * FROM sistema_interno.registro_ssee WHERE id = '$id_orden'";
// echo $query;

$resultado = mysqli_query($conn, $query);
if (!$resultado) {
    die("Error en la consulta || " . $query);
} else {
    $data_final = mysqli_fetch_assoc($resultado);

    $sql_materiales = "SELECT * FROM sistema_interno.materiales_ssee WHERE id_registro = '$id_orden'";
    $sql_firma = "SELECT nombre_completo, a.nombre, c.nombre as nombre_perfil, url_firma, tipo_perfil, n_orden, direccion, DATE_FORMAT(b.fecha_modif,'%d-%m-%Y') as fecha_modif_
                  FROM sistema_interno.usuarios a
                  INNER JOIN sistema_interno.registro_ssee b ON a.nombre = b.nombre_usuario
                  INNER JOIN sistema_interno.perfiles c ON a.tipo_perfil = c.id
                  WHERE b.id='$id_orden' LIMIT 1";

    $data_final["lista_materiales"] = null;
    $data_final["firma_usuario"] = null;

    $resultado = mysqli_query($conn, $sql_materiales);
    while ($da = mysqli_fetch_assoc($resultado)) {
        $data_final["lista_materiales"][] = (object) $da;
    }

    $resultado = mysqli_query($conn, $sql_firma);
    while ($da = mysqli_fetch_assoc($resultado)) {
        $data_final["firma_usuario"] = (object) $da;
    }

    $data_final = (object) $data_final;
    $cuerpo_html = "";
    $total_clp_materiales = 0;

    $fecha_ = $data_final->fecha_modif;
    $fecha_emision = date('d-m-Y', strtotime($fecha_));

    $cuerpo_html .= '<div style="width: 100% !important">';

    //AQUI LLENAR LOS CAMPOS DE INFORMACION DINAMICOS //SI UNA TABLA DE DATOS NO TIENE INFORMACION, QUE NO SE CONSTRUYA
    $cuerpo_html .= '<div>
            <table style="border-collapse: collapse; margin-bottom: 2%; width: 100%;" border-style: none;" border="0">
              <tbody>
                  <tr style="height: 23px;">
                    <td style="width: 33.3%; text-align: center; height: 21px;"><strong>N&deg; Orden</strong></td>
                    <td style="width: 33.3%; text-align: center; height: 21px;"><strong>Direcci&oacute;n</strong></td>
                    <td style="width: 33.3%; text-align: center; height: 21px;"><strong>Fecha</strong></td>
                  </tr>
                  <tr style="height: 21px;">
                    <td style="width: 33.3%; text-align: center; height: 21px;">' . $data_final->n_orden . '</td>
                    <td style="width: 33.3%; text-align: center; height: 21px;">' . $data_final->direccion . '</td>
                    <td style="width: 33.3%; text-align: center; height: 21px;">' . $fecha_emision . '</td>
                  </tr>
              </tbody>
            </table>';
            

    $html_lista_materiales = "";
    if ($data_final->lista_materiales != null && count($data_final->lista_materiales) > 0) {
        $html_lista_materiales = '<h4>Materiales asignados</h4>
            <table style="border-collapse: collapse; margin-bottom: 3%; width: 100%; border-color: #d3d3d3; border-style: dotted; " border="1">
              <tbody>
                <tr style="height: 21px;">
                  <td style="width: 25%; text-align: center; height: 21px; border-style: dotted; "><strong>C&oacute;digo Material</strong></td>
                  <td style="width: 25%; text-align: center; height: 21px; border-style: dotted; "><strong>Descripci&oacute;n</strong></td>
                  <td style="width: 25%; text-align: center; height: 21px; border-style: dotted; "><strong>N&deg; Serie</strong></td>
                  <td style="width: 25%; text-align: center; height: 21px; border-style: dotted; "><strong>Cantidad</strong></td>
                </tr>';

        foreach ($data_final->lista_materiales as $key) {

            $total_clp_materiales += $key->valor;
                $html_lista_materiales .=
                '<tr style="height: 23px;">
                <td style="width: 25%; text-align: center; height: 21px; border-style: dotted; ">' . $key->id_material . '</td>
                <td style="width: 25%; text-align: center; height: 21px; border-style: dotted; ">' . $key->descripcion_material . '</td>
                <td style="width: 25%; text-align: center; height: 21px; border-style: dotted; ">' . $key->n_medidor . '</td>
                <td style="width: 25%; text-align: center; height: 21px; border-style: dotted; ">' . $key->cantidad . '</td>
                </tr>';
        }

        $html_lista_materiales .= '</tbody>
                </table>';
    }

    $cuerpo_html .= '
        <!-- MATERIALES -->
            ' . $html_lista_materiales;
            

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

            $celda_arriba = '<td style="width: 40%; text-align: center; height: 100px;"><img src="' . $img . '" style="height: 190px; width: 320px;"></td>';
            $celda_abajo = '<td style="width: 40%; text-align: center; height: 30px;">
                <p>' . $data_final->firma_usuario->nombre_completo . '</p>
                <p>' . $data_final->firma_usuario->nombre_perfil . '</p>
                </td>';
            $data_firmas[] = (object) ['nombre' => 'firma_usuario', 'celda_arriba' => $celda_arriba, 'celda_abajo' => $celda_abajo];
        }

        if (count($data_firmas) > 0) {

            $cuerpo_html .= '<table style="border-collapse: collapse; width: 100%;" border-style: none;" border="0">
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

    $cuerpo_html .= '</div></div></body>';
    //  echo $cuerpo_html;

    //echo json_encode($data_final);
    $nombre_archivo = "Reporte_orden_N_" . $id_orden . "_" . date("dmY");
    $data_return = generaPDFParametros($id_orden, $nombre_archivo, $cuerpo_html);
    $informacion["base_64"] = $data_return;
    $informacion["nombre_archivo"] = $nombre_archivo;
    echo json_encode($informacion);
}