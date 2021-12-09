<?

function verificaFormatoFecha($val){
  $val2 = str_replace("/","-",$val);
  $val2 = explode('-',$val2);
  $cantidadDatosArreglo = count($val2);
  $cantidadCaracteres = strlen($val2[0]);
  switch ($cantidadDatosArreglo) {
    case '1':
      return formatoFechaY($val);
      break;
    case '2':
      return formatoFechaYM($val,$cantidadCaracteres);
    break;
    case '3';
    return formatoFechaYMD($val);
    break;
    default:
        return false;
      break;
  }
}

function formatoFechaYMD($val){
  $val = str_replace("/","-",$val);
  $fechaFormateada = date("Y-m-d", strtotime($val));
  return $fechaFormateada; 
}

function formatoFechaYM($val,$cantidadCaracteres){
  if($cantidadCaracteres==4){
    $val = $val . '-01';
  }else{
    $val = '01-' . $val;
  }
  $val = str_replace("/","-",$val);
  $fechaFormateada = date("Y-m", strtotime($val));
  return $fechaFormateada; 
}

function formatoFechaY($val){
  $fechaFormateada = date("Y", strtotime($val));
  return $fechaFormateada; 
}

?>