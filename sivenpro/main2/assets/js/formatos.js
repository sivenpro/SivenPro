function formatoPesos(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
  
function formatoUF(num) {
    return (
      num
        .toFixed(2)
        .replace('.', ',') 
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    ) 
  }

  function mostrarTotalCLP(e,tipoMonedaServicio){
    valorEnCLP = '0';
    valorEnUF = '0';
    const inputCantidad = document.getElementById('textoTotal');
    const inputCantidadUF = document.getElementById('textoTotalUF');
    let cantidadIngresada = e;
    if(tipoMonedaServicio == 'CLP'){
      let valorDiv = (valorUnitarioServicio / valorActualUF) * cantidadIngresada;
      let valorPesos = valorUnitarioServicio * cantidadIngresada;
      valorPesos = valorPesos.toFixed(0);
      valorDiv = Number(valorDiv);
      valorEnUF = formatoUF(valorDiv);
      valorEnCLP = formatoPesos(valorPesos);
    }else{
      let valorMulti = (valorUnitarioServicio * cantidadIngresada) * valorActualUF;
      valorMulti = Number(valorMulti).toFixed();
      valorEnCLP = formatoPesos(valorMulti);
      valorEnUF = formatoUF(valorUnitarioServicio * cantidadIngresada);
    }

    inputCantidad.textContent = 'Valor total en CLP : ' + valorEnCLP;
    inputCantidadUF.textContent = 'Valor total en UF : ' + valorEnUF;
    
  }

  function valorUF(){
    $.ajax({
             type: 'POST',
              url: "administrar/estado_pago/readServiciosValorUF.php",
            }).done(function(data) {
                var jsonUF = JSON.parse(data);
                valorActualUF = jsonUF;
            })

  }

  function limpiarTextoTotal(){
    const inputCantidad = document.getElementById('textoTotal');
    const inputCantidadUf = document.getElementById('textoTotalUF');
    inputCantidad.textContent = '';
    inputCantidadUf.textContent = '';
  }