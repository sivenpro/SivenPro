<?php

session_start();

$arreglo = array();

$perfil_administrador = $_SESSION['sivenpro_admin'];
$perfil_bodeguero = $_SESSION['sivenpro_bodeguero'];
$perfil_contador = $_SESSION['sivenpro_contador'];

$dashboard->modulo = "Dashboard";
$dashboard->texto = "Dashboard";
$dashboard->titulo = "Dashboard";
$dashboard->icono = "dashboard";

$inventario->modulo = "listaInventario";
$inventario->texto = "Inventario";
$inventario->titulo = "Inventario";
$inventario->icono = "subject";

$administracion->modulo = "listaAdministracion";
$administracion->texto = "Administración";
$administracion->titulo = "Administración";
$administracion->icono = "add_moderator";


if($perfil_administrador == 1){

  array_push($arreglo, $dashboard);

  $inventario->submenu[] = ['titulo' => 'Lista de Productos', 'modulo' => 'listaProductos', 'texto' => 'Lista de Productos', 'icono' => 'note_add'];
  $inventario->submenu[] = ['titulo' => 'Guía de Despacho', 'modulo' => 'listaGuia', 'texto' => 'Guía de Despacho', 'icono' => 'subject'];
  array_push($arreglo, $inventario);

  $administracion->submenu[] = ['titulo' => 'Perfiles', 'modulo' => 'listaPerfiles', 'texto' => 'Perfiles', 'icono' => 'assignment_ind'];
  $administracion->submenu[] = ['titulo' => 'Usuarios', 'modulo' => 'listaUsuarios', 'texto' => 'Usuarios', 'icono' => 'people_alt'];
  array_push($arreglo, $administracion);

}


if($perfil_administrador == 0 && $perfil_bodeguero == 1 && $perfil_contador == 0){

  array_push($arreglo, $dashboard);
    
  $productos->modulo = "listaProductos";
  $productos->texto = "Lista de Productos";
  $productos->titulo = "Lista de Productos";
  $productos->icono = "note_add";
  array_push($arreglo, $productos);

  $despacho->modulo = "listaGuia";
  $despacho->texto = "Guía de Despacho";
  $despacho->titulo = "Guía de Despacho";
  $despacho->icono = "subject";
  array_push($arreglo, $despacho);

}


if($perfil_administrador == 0 && $perfil_bodeguero == 0 && $perfil_contador == 1){

  array_push($arreglo, $dashboard);

  $productos->modulo = "listaProductos";
  $productos->texto = "Lista de Productos";
  $productos->titulo = "Lista de Productos";
  $productos->icono = "note_add";
  array_push($arreglo, $productos);

  $despacho->modulo = "listaGuia";
  $despacho->texto = "Guía de Despacho";
  $despacho->titulo = "Guía de Despacho";
  $despacho->icono = "subject";
  array_push($arreglo, $despacho);

}

$lateralJSON = json_encode($arreglo);
echo $lateralJSON;

?>