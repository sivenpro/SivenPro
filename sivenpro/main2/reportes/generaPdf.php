<?php
//DEBE RECIBIR: NRO DE CODIGO PARA HEADER Y UN DIV CON EL BODY DESDE HTML
//DEBE RECIBIR ORDEN DE MANTENIMIENTO TAMBIEN (ES TAN SOLO UN NRO, TODO DEBIESE VENIR POR POST!!!)
    // error_reporting(E_ALL);
    // ini_set('display_errors', '1');

    require __DIR__ . '/vendor/autoload.php';

    //Dependencias de Html2pdf
    //---------
    use Spipu\Html2Pdf\Exception\ExceptionFormatter;
    //Permite mostrar errores de Html2Pdf si llegan a pasar. Depende de un Try Catch.
    use Spipu\Html2Pdf\Exception\Html2PdfException;
    //Libreria de Html2Pdf
    use Spipu\Html2Pdf\Html2Pdf;


function generaPDFParametros($id_orden, $nombre_archivo, $html_body_pdf){

     //$absolute_path = dirname(__FILE__) . $ruta_archivo_pdf;
     $absolute_path = dirname(__FILE__) . "/../modulos/inventario/materiales/biblioteca/pdf";
     $absolute_logo = dirname(__FILE__) . "/terragis.png";
     $absolute_logo2 = dirname(__FILE__) . "/gassur.png";
     $absolute_css = dirname(__FILE__) . "/estilo.css";
     //print $absolute_logo;
     $hora_generado = date("d-m-Y");
     $estructura_pdf_final = "";
     $header = '<head><link rel="stylesheet" type="text/css" href="' . $absolute_css . '"></head>
     <body>
         <div id="cabecera" style="margin-bottom:-4%;">
            <img src="' . $absolute_logo2 . '" />
            <img style="margin-top:9%;" src="' . $absolute_logo . '" />
            
            <p>Fecha generado: ' . $hora_generado . '</p>
            <h3>Registro N&deg;: ' . $id_orden . '</h3>';
             
     $header .= '</div>';

     $estructura_pdf_final .= $header;
     $estructura_pdf_final .= $html_body_pdf;

    //  if (!file_exists($absolute_path)) {
    //      mkdir($absolute_path, 0777, true);
    //  }

     $html2pdf = new Html2Pdf('P', 'A4', 'es', 'true', 'UTF-8'); //modificar el codigo para cuando el alto de la pagina no alcance para toda la informacion

     //$html2pdf->setModeDebug();
     $html2pdf->setTestTdInOnePage(false);

     $html2pdf->pdf->SetDisplayMode('fullpage');
     $html2pdf->writeHTML($estructura_pdf_final);

     //Primer parametro contiene el directorio donde se va a guardar el archivo PDF y el nombre del archivo.
     //Segundo parametro indica que hacer al momento de generar el Pdf. 'F' significa que va a crear el archivo dentro de un directorio local.
     $html2pdf->output($absolute_path . '/' . $nombre_archivo . '.pdf', 'F');

     $pdf_creado = $absolute_path . '/' . $nombre_archivo . '.pdf';
     //$type = pathinfo($pdf_creado, PATHINFO_EXTENSION);
     $data_return = file_get_contents($pdf_creado);
     $base64 = base64_encode($data_return);
     return $base64;

}