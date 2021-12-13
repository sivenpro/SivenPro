<?php

// 	error_reporting(E_ALL);
// 	ini_set('display_errors', '1');

	session_start();
	include("../../conexion/config/connection.php");

	$username = mysqli_real_escape_string($conn,$_POST['username']);
	$password = mysqli_real_escape_string($conn,$_POST['password']);

	$query = "SELECT * FROM	usuarios
			  WHERE	nombre = '$username'
			  AND pass = '$password'
			  AND estado = 'ACTIVO'";
			 // echo $query;
	
	$result = mysqli_query($conn, $query);
	$num_row = mysqli_num_rows($result);
	$row = mysqli_fetch_array($result);

	if( $num_row >=1 ){

		$_SESSION['interno_id'] = $row['id_usuario'];	// id del usuario
		$_SESSION['interno_usuario'] = $row['nombre'];	//usuario conectado
		$_SESSION['interno_avatar'] = $row['avatar'];	// avatar del usuario
		$_SESSION['interno_empresa'] = $row['empresa'];	// empresa del usuario	
		$_SESSION['interno_direccion'] = $row['direccion'];	// direccion del usuario		
		$_SESSION['interno_email'] = $row['correo'];	// correo electronico de usuario
		$_SESSION['interno_nombre'] = $row['nombre_completo'];	// nombre de usuario
		$_SESSION['tipo_perfil'] = $row['tipo_perfil'];
		$perfil_asociado = $_SESSION['tipo_perfil'];
		
		$query = "SELECT *
			  	  FROM perfiles
			  	  WHERE id_perfil = '$perfil_asociado'";

		$result = mysqli_query($conn, $query);
		$row=mysqli_fetch_array($result);

		// 0 no tiene acceso
		// 1 tiene acceso

		$_SESSION['sivenpro_admin_general'] = $row['admin_general']; //administrador general
		$_SESSION['sivenpro_admin'] = $row['administrador']; //administrador 
		$_SESSION['sivenpro_bodeguero'] = $row['bodeguero']; // acceso bodeguero 		
		$_SESSION['sivenpro_contador'] = $row['contador']; //acceso contador 
		$_SESSION['nombre_perfil'] = $row['nombre'];

		if($row['nombre']==""){
			echo "Login sin acceso";
		}else{
			echo "Log Ok";
		}

	}
	else{
		$_SESSION = array();
		unset($_SESSION);
        session_destroy();
		echo "Log Error";
	}
?>
