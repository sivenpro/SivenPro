<?php
    session_start();
    // error_reporting(E_ALL);
    // ini_set('display_errors', '1');
    
    if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
        echo "no tienes los permisos";
        die();
    }

    include("../../../../../conexion/config/connection.php");
    date_default_timezone_set('America/Santiago');
    /* $conn es la conexión ! */

    $id = mysqli_real_escape_string($conn, $_POST["id"]);
    $user = mysqli_real_escape_string($conn, $_POST["user"]);
    $username = mysqli_real_escape_string($conn, $_POST["n_usuario"]);
    $password = mysqli_real_escape_string($conn, $_POST["n_cpass"]);
    $nombre_completo = mysqli_real_escape_string($conn, $_POST["nombre_completo"]);
    $perfil_unico = mysqli_real_escape_string($conn, $_POST["perfil-unico"]);
    $direccion = mysqli_real_escape_string($conn, $_POST["direccion"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $comuna = mysqli_real_escape_string($conn, $_POST["comuna"]);
    $opcion = mysqli_real_escape_string($conn, $_POST["opcion"]);
    $primera_foto = mysqli_real_escape_string($conn, $_POST["wizard-picture_0"]);
    $imagen = $_FILES["file"]["name"];
    $foto_firma = mysqli_real_escape_string($conn, $_POST["up_firma"]);
    $color = mysqli_real_escape_string($conn, $_POST["color"]);
    $informacion = [];
    $hoy = date("d-m-Y");
    $hora = date("H:i:s");


    switch ( $opcion ) {
        case 'registrar':
            if ($username!= "" && $password!= "" && $nombre_completo!= "" && $email!= "") {
                $existe = existe_usuario($username, $conn);
                if ( $existe > 0) {
                    $informacion["respuesta"] = "EXISTE";
                    echo json_encode($informacion);
                }else {
                        registrar($id, $username, $password, $nombre_completo, $perfil_unico, $direccion, $email, $comuna, $primera_foto, $foto_firma, $conn);
                    }
                    
            }else {
                $informacion["respuesta"] = "VACIO";
                echo json_encode($informacion);
            }
            break;
        case 'modificar':            
            modificar($id, $username, $password, $nombre_completo, $perfil_unico, $direccion, $email, $comuna, $conn);
            break;
        case 'eliminar':
            eliminar($id, $conn);
            break;
        case 'subir_foto':
            subir_foto($id, $user, $hoy, $hora, $conn);
            break;
        case 'subir_foto_firma':
            subir_foto_firma($id, $username, $hoy, $hora, $conn);
            break;
        default:
            $informacion["respuesta"] = "OPCION_VACIA";
            echo json_encode($informacion);
            break;
    }


    function registrar($id, $username, $password, $nombre_completo, $perfil_unico, $direccion, $email, $comuna, $primera_foto, $foto_firma, $conn){
        if ($primera_foto=="" || $primera_foto == null) {
            $primera_foto="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";
        }
        $query = "INSERT INTO id18070131_sivenpro.usuarios(
                                                     nombre,
                                                     pass,
                                                     nombre_completo,
                                                     tipo_perfil,
                                                     direccion,
                                                     correo,
                                                     comuna,
                                                     url_firma,
                                                     avatar
                                                     )
                         VALUES                      (
                                                     '$username',
                                                     md5('$password'),
                                                     '$nombre_completo',
                                                     '$perfil_unico',
                                                     '$direccion',
                                                     '$email',
                                                     '$comuna',
                                                     '$foto_firma',
                                                     '$primera_foto'
                                                     )
                  ";
         $resultado = mysqli_query($conn, $query);
         verificar_resultado( $resultado );
         cerrar( $conn );
     }


    function modificar($id, $username, $password, $nombre_completo, $perfil_unico, $direccion, $email, $comuna, $conn){
        if ($password=="") {
            $contrasena="";
        }else{
            $contrasena="pass=md5('$password'),";
        }
            $query="UPDATE id18070131_sivenpro.usuarios SET nombre='$username',
                                                                  $contrasena
                                                                  nombre_completo='$nombre_completo',
                                                                  tipo_perfil='$perfil_unico',
                                                                  direccion='$direccion',
                                                                  correo='$email',
                                                                  comuna='$comuna'
                                                    WHERE id_usuario='$id'";
                                                    //  echo $query;
            $resultado = mysqli_query($conn, $query);
            verificar_resultado( $resultado );
            cerrar( $conn );
    }

    function eliminar($id, $conn){
        $query="UPDATE id18070131_sivenpro.usuarios SET estado='ELIMINADO' WHERE id_usuario='$id'";
        $resultado = mysqli_query($conn, $query);
        verificar_resultado( $resultado );
        cerrar( $conn );
    }


    function subir_foto($id, $user, $hoy, $hora, $conn){
        if ($_FILES["file"]["name"] != "") {
            $image = $_FILES["file"]["tmp_name"];
            $type = pathinfo($image, PATHINFO_EXTENSION);
            $data = file_get_contents($image);
            $base64 = base64_encode($data);
            if ($id=="" || $id==null) {
                $informacion["respuesta"] = $base64;
                echo json_encode($informacion);
            }else{
                $query="UPDATE id18070131_sivenpro.usuarios SET avatar='$base64'
                        WHERE id_usuario='$id'";
            $resultado = mysqli_query($conn, $query);
            cerrar( $conn );
            $informacion["respuesta"] = "SUBE";
            echo json_encode($informacion);
            }
        }else{
            $informacion["respuesta"] = "ERROR NO CARGA";
            echo json_encode($informacion);
        }
    }


    function subir_foto_firma($id, $username, $hoy, $hora, $conn){    
        if ($_FILES["file"]["name"] != "") {
            $test = explode(".", $_FILES["file"]["name"]);
            $extension = end($test);
            if ($extension == "jpg" || $extension == "png" || $extension == "jpeg"){
                $image = $_FILES["file"]["tmp_name"];
                $type = pathinfo($image, PATHINFO_EXTENSION);
                $data = file_get_contents($image);
                $base64 = base64_encode($data);

                if ($id=="" || $id==null) {
                    $informacion["respuesta"] = $base64;
                    echo json_encode($informacion);
                }else{
                    $query="UPDATE id18070131_sivenpro.usuarios SET url_firma='data:image/png;base64,$base64', posee_firma='Si'
                            WHERE id_usuario='$id'";
                    $resultado = mysqli_query($conn, $query);
                    cerrar( $conn );
                    $informacion["respuesta"] = "SUBE_FIRMA";
                    echo json_encode($informacion);
                }
            }else{
                $informacion["respuesta"] = "ERROR_FORMATO";
                echo json_encode($informacion);
            }
        }else{
            $informacion["respuesta"] = "FIRMA_VACIA";
            echo json_encode($informacion);
        }
    }

    
    function verificar_resultado($resultado){
        if (!$resultado) $informacion["respuesta"] = "ERROR";
        else    $informacion["respuesta"] = "BIEN";
        echo json_encode($informacion);
    }

    function cerrar( $conn ){
        mysqli_close($conn);
    }

    function existe_usuario($username, $conn){
        $query = "SELECT nombre FROM id18070131_sivenpro.usuarios WHERE nombre='$username' and estado='ACTIVO'";
        $resultado = mysqli_query($conn, $query);
        $existe_usuario = mysqli_num_rows( $resultado );       
        return $existe_usuario;
    }

?>