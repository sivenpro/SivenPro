$(document).ready(function() {
    contador_stock();
    contador_ventas();
    producto_mas_vendido();
    producto_menos_vendido();
});

  var session="<?php echo $_SESSION['nombre_perfil'];?>";

  if (session=="Bodeguero"){
    $("#link_total_ventas").hide();
  }

  if (session=="Contador"){
    $("#link_productos").hide();
  }


  var contador_stock = function(){
    $.ajax({
      url: 'modulos/dashboard/lee_stock.php',
      type: 'POST',
      success: function(data){
        var json_info = JSON.parse( data );
        $("#contador_stock").html(json_info['data'][0].contador);
        $("#total_stock").html('$'+json_info['data'][0].total);
        $("#fecha_stock").html('- '+json_info['data'][0].fecha_stock);
      }
    });
  }


  var contador_ventas = function(){
    $.ajax({
      url: 'modulos/dashboard/lee_ventas.php',
      type: 'POST',
      success: function(data){
        var json_info = JSON.parse( data );
        $("#productos_ventas").html(json_info['data'][0].contador_ventas+' Vendidos');
        $("#contador_ventas").html('$'+json_info['data'][0].contador);
        $("#fecha_ventas").html('- '+json_info['data'][0].fecha_ventas);
      }
    });
  }


  var producto_mas_vendido = function(){
    $.ajax({
      url: 'modulos/dashboard/lee_mas_vendido.php',
      type: 'POST',
      success: function(data){
        var json_info = JSON.parse( data );
        $("#contador_exito").html(json_info['data'][0].total_ventas+' Vendidos');
        $("#producto_exito").html(json_info['data'][0].producto);
        $("#precio_exito").html('Total: $'+json_info['data'][0].contador);
        $("#precio_exito_individual").html('Precio individual: $'+json_info['data'][0].precio_ind);
        $("#fecha_exito").html('- '+json_info['data'][0].fecha_ventas);
      }
    });
  }


  var producto_menos_vendido = function(){
    $.ajax({
      url: 'modulos/dashboard/lee_menos_vendido.php',
      type: 'POST',
      success: function(data){
        var json_info = JSON.parse( data );
        $("#contador_menos").html(json_info['data'][0].total_ventas+' Vendidos');
        $("#producto_menos").html(json_info['data'][0].producto);
        $("#precio_menos").html('Total: $'+json_info['data'][0].contador);
        $("#precio_menos_individual").html('Precio individual: $'+json_info['data'][0].precio_ind);
        $("#fecha_menos").html('- '+json_info['data'][0].fecha_ventas);
      }
    });
  }


  // Funciones al clickear en cuadros

  $("#link_productos").click(function(){
    $.ajax({
      type: 'POST',
      url: "modulos/inventario/productos/lista.php",
      success: function(data){
        $("#cargacontent").html(data);
      }
    });
    $("#titulo_superior").text('Registrar Producto');
  });


  $("#link_total_ventas").click(function(){
    $.ajax({
      type: 'POST',
      url: "modulos/inventario/guia_despacho/lista.php",
      success: function(data){
        $("#cargacontent").html(data);
      }
    });
    $("#titulo_superior").text('Guías de Despacho');
  });