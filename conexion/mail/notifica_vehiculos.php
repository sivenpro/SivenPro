<?php
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

inserta_correo_notificacion($conn);
envia_correo_notificacion($conn);

function inserta_correo_notificacion($conn){

    $consulta = "SELECT * FROM sistema_interno_vehiculos.vehiculos WHERE estado_vehiculo = 'En Servicio' AND estado = 'ACTIVO' 
                AND n_patente NOT IN (SELECT v_patente_vehiculo FROM sistema_interno_vehiculos.salida_diaria WHERE DATE_FORMAT(fecha_trabajo,'%Y-%m-%d') = DATE(NOW()))";
    // echo $consulta;
    $ejecuta = mysqli_query($conn,$consulta);

    while ($fila = mysqli_fetch_assoc($ejecuta)){
        $patente = $fila["n_patente"];
        $modelo = $fila["modelo"];
        $funcion = $fila["funcion"];

        $consulta_ = "SELECT MAX(v_proyectos) AS proyecto FROM sistema_interno_vehiculos.salida_diaria WHERE v_patente_vehiculo = '$patente'";
        $ejecuta_ = mysqli_query($conn,$consulta_);
        $fila_p = mysqli_fetch_assoc($ejecuta_);
        $proyecto = $fila_p["proyecto"];

        $tabla .= "<tr><td>".$proyecto."</td><td>".$patente."</td><td>".$modelo."</td><td>".$funcion."</td></tr>";
    }

    $asunto = "Vehículos sin registros de salida";
    $tabla = "<style>table, th, td {border: 1px solid black;border-collapse: collapse;}</style><strong>Estimado/a,</strong> <br> a continuación se presentan los vehículos que no han registrado salida el día de hoy. <br><br> <table><tr><th>Proyecto</th><th>N° Patente</th><th>Modelo</th><th>Función</th></tr>".$tabla."</table>";
    // echo $tabla;

    $query_admin = "SELECT nombre_completo,correo FROM sistema_interno.usuarios WHERE tipo_perfil in ('1','7','11')";
    $resultado_admin = mysqli_query($conn, $query_admin);

    while ($rw = mysqli_fetch_assoc($resultado_admin)) {
        $nombre = $rw["nombre_completo"];
        $correo = $rw["correo"];

        $query_insert = "INSERT INTO sistema_interno_vehiculos.correos_vehiculos(asunto,cuerpo,nombre_solicitante,email_solicitante,nombre_receptor,email_receptor,fecha_insertado)
                        VALUES ('$asunto','$tabla','Terragis','alertas@idgterragis.cl','$nombre','$correo',now())";
        $resultado_insert = mysqli_query($conn,$query_insert) or die(mysqli_error($conn));
    }
}


function envia_correo_notificacion($conn){

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->Host = "smtpout.secureserver.net";
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    // $mail->SMTPDebug = 1;
    $mail->SMTPSecure = "tls";
    $mail->Username = "alertas@idgterragis.com";
    $mail->Password = "K1i2n3o4!";
    $mail->From = "alertas@idgterragis.cl";
    $mail->FromName = "Terragis - Notificación Vehículos";
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);

    $correos_pendientes = "SELECT * FROM sistema_interno_vehiculos.correos_vehiculos WHERE estado_notificacion = 'Pendiente'";
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
            $query_update = "UPDATE sistema_interno_vehiculos.correos_vehiculos SET estado_notificacion = 'Enviado', fecha_envio = NOW() WHERE id = '$id'";
            $result_ = mysqli_query($conn,$query_update) or die(mysqli_error($conn));
        } 	 
    }
}
?>
