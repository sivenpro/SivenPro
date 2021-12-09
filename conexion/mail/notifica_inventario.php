<?
// error_reporting(E_ALL);
// ini_set('display_errors', '1');

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'lib/Exception.php';
require 'lib/PHPMailer.php';
require 'lib/SMTP.php';

include "../config/connection.php";
date_default_timezone_set('America/Santiago');
$id_registro = mysqli_real_escape_string($conn, $_POST["id_registro"]);
$id_orden = mysqli_real_escape_string($conn, $_POST["id_orden"]);
$informacion = [];

inserta_correo_notificacion($id_registro, $id_orden, $conn);
envia_correo_notificacion($conn);
// die();


function inserta_correo_notificacion($id_registro, $id_orden, $conn){

    $consulta ="SELECT a.*, DATE_FORMAT(b.fecha_modif,'%d-%m-%Y') as fecha, b.direccion, c.nombre_completo as usuario
                FROM sistema_interno.materiales_ssee a
                INNER JOIN sistema_interno.registro_ssee b ON a.id_registro = b.id
                INNER JOIN sistema_interno.usuarios c ON a.nombre_usuario = c.nombre
                WHERE a.id_registro='$id_registro' AND a.estado = 'ACTIVO'";
    // echo $consulta;
    $ejecuta = mysqli_query($conn,$consulta);

    while ($fila = mysqli_fetch_assoc($ejecuta)){
        $fecha = $fila["fecha"];
        $usuario = $fila["usuario"];
        $direccion = $fila["direccion"];
        $id_material = $fila["id_material"];
        $descripcion = $fila["descripcion_material"];
        $cantidad = $fila["cantidad"];
        $n_serie = $fila["n_medidor"];

        $tabla .= "<tr><td>".$id_material."</td><td>".$descripcion."</td><td>".$cantidad."</td><td>".$n_serie."</td></tr>";
    }

    $asunto = "Materiales asignados a OS: ".$id_orden."";
    $tabla = "<style>table, th, td {border: 1px solid black;border-collapse: collapse;}</style><strong>Estimado/a,</strong> <br> se han asignado materiales a la Orden de Servicio: <strong>".$id_orden."</strong>, a continuación se presenta toda la información:<br><br> <strong>Orden de Servicio:</strong> ".$id_orden."<br><strong>Dirección:</strong> ".$direccion."<br><strong>Fecha:</strong> ".$fecha."<br><strong>Usuario:</strong> ".$usuario." <br><br> <table><tr><th>N° Material</th><th>Descripción</th><th>Cantidad</th><th>N° Serie</th></tr>".$tabla."</table>";
    // echo $tabla;

    $query_admin = "SELECT nombre_completo,correo FROM sistema_interno.usuarios WHERE tipo_perfil = '1' OR nombre='jesus.milano'";
    $resultado_admin = mysqli_query($conn, $query_admin);

    while ($rw = mysqli_fetch_assoc($resultado_admin)) {
        $nombre = $rw["nombre_completo"];
        $correo = $rw["correo"];

        $query_insert = "INSERT INTO sistema_interno.notificaciones(asunto,cuerpo,nombre_solicitante,email_solicitante,nombre_receptor,email_receptor,fecha_insertado)
                        VALUES ('$asunto','$tabla','Terragis','alertas@idgterragis.cl','$nombre','$correo',now())";
                        // echo $query_insert;
        $resultado_insert = mysqli_query($conn,$query_insert) or die(mysqli_error($conn));
    }
}


function envia_correo_notificacion($conn){

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->Host = "smtpout.secureserver.net";
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    // $mail->SMTPDebug = 4;
    $mail->SMTPSecure = "tls";
    $mail->Username = "alertas@idgterragis.com";
    $mail->Password = "K1i2n3o4!";
    $mail->From = "alertas@idgterragis.cl";
    $mail->FromName = "Terragis - Notificación Inventario";
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);

    
    $correos_pendientes = "SELECT * FROM sistema_interno.notificaciones WHERE estado_notificacion = 'Pendiente'";
    $resultado_correos = mysqli_query($conn, $correos_pendientes);

    while ($row = mysqli_fetch_assoc($resultado_correos)) {
        
        $nombre_solicitante = $row['nombre_solicitante'];
        $correo_solicitante = $row['email_solicitante'];
        $nombre_receptor = $row['nombre_receptor'];
        $correo_receptor = $row['email_receptor'];
        $asunto = $row['asunto'];
        $cuerpo = $row['cuerpo'];
        $id = $row['id'];
        
        $mail->addAddress($correo_solicitante, $nombre_solicitante); //dirigido
        $mail->addAddress($correo_receptor, $nombre_receptor);
        $mail->Subject = $asunto;
        $mail->Body = $cuerpo."<br><br><br> No responder este correo.";

       if (!$mail->send()) {
            $msg = "Error al enviar notificación: " . $mail->ErrorInfo;
        } else {
            $msg = "Enviado";
            $query_update = "UPDATE sistema_interno.notificaciones SET estado_notificacion = 'Enviado', fecha_envio = NOW() WHERE id = '$id'";
            $result_ = mysqli_query($conn,$query_update) or die(mysqli_error($conn));
            $informacion["respuesta"] = "ENVIA_CORREO";
            echo json_encode($informacion);
        }
    }
}