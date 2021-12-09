<?php

$host = "localhost";
$usuario = "id18070131_root";
$pass = "Damian.199919";
$bdname = "id18070131_sivenpro";


$conn = new mysqli($host, $usuario, $pass, $bdname);
mysqli_set_charset($conn, 'utf8');

if (!$conn){
  die('Could not connect: ' . mysql_error());
}

?>
