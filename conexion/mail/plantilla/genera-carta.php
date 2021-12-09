<?php

/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/

setlocale(LC_ALL, "es_ES", 'Spanish_Spain', 'Spanish');
  

	
	
require_once __DIR__ . '/vendor/autoload.php';




$mysql_db_hostname = "gis.gassur.cl";
//Usuario MySql
$mysql_db_user = "uinter";
//Clave MySql
$mysql_db_password = '4P2$th=!z7D2hQF';





//open mysql server
$connection = mysql_connect($mysql_db_hostname,$mysql_db_user,$mysql_db_password);
if (!$connection){
	die("Not connected:".mysql_error());
}


 mysql_query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

	

$id=$_POST['id'];  // ID es el id interno del LLAE que anteriormente se usaba para identificarlo, ahora se debe usar el n_llae_sap... ya no se ocupa
$nombre=$_POST['nombre']; // nombre de la persona que lo solicito
$empresa=$_POST['empresa']; // nombre de la empresa que lo solicito	
$fono=$_POST['fono']; // telefono
$localidad=$_POST['localidad']; // hay localidades donde no existe el servicio de gassur , por consecuencia la respuesta de la carta es 'Sin'
$n_plano=$_POST['n_plano'];
$n_llae_sap=$_POST['n_llae_sap']; // es el nuevo identificador del LLAE 
$cargo=$_POST['cargo']; // era el cargo de la persona que solicitaba el llae, no se si en el nuevo formulario existe este campo. 
$correlativo_gassur=$_POST['correlativo_gassur'];


$sector=$_POST['sector'];

$tipo=$_POST['tipo']; // se refiera a que tipo de carta debe generar, es una variable interna. ejemplo = linea 68 


$date = \DateTime::createFromFormat("d/m/Y", date('d/m/Y'));

$fechacarta= strftime("%d %B de %Y", $date->getTimestamp());

//echo ´$id;


$anio=date('Y');

if ($localidad=="OTROS")
	$localidad='Otra Comuna';

if ($tipo=='Sin'){
 $str = <<<EOF
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
	<META HTTP-EQUIV="CONTENT-TYPE" CONTENT="text/html; charset=utf-8">
	
	<STYLE TYPE="text/css">
	<!--
		@page { size: 8.5in 11in; margin-left: 0.98in; margin-right: 1.18in; margin-top: 0.5in; margin-bottom: 0.59in }
		
		P.cjk { so-language: es-ES }
		H1 { margin-top: 0in; margin-bottom: 0in; direction: ltr; widows: 2; orphans: 2 }
		H1.western { font-family: "Times New Roman", serif; font-size: 12pt; font-weight: normal }
		H1.cjk { font-size: 12pt; so-language: es-ES; font-weight: normal }
		H1.ctl { font-size: 10pt; font-weight: normal }
		
		p.western2 { font-size: 9px;  }
		
		H4 { margin-top: 0in; margin-bottom: 0in; direction: ltr; text-align: justify; widows: 2; orphans: 2 }
		H4.western { font-family: "Arial Narrow", serif; font-weight: normal }
		H4.cjk { font-family: "Times New Roman"; so-language: es-ES; font-weight: normal }
		H4.ctl { font-family: "Times New Roman" }
		A:link { color: #0000ff; so-language: zxx }
	-->
	</STYLE>
</HEAD>
<BODY LANG="es-CL" LINK="#0000ff" DIR="LTR">
<DIV TYPE=HEADER>
	<P STYLE="margin-bottom: 0in"><IMG SRC="CARTAS_LLAE_215_18_Respuesta_Solicitud_de_Planos_html_ed84242a.jpg" NAME="Imagen 1" ALIGN=BOTTOM WIDTH=129 HEIGHT=77 BORDER=0></P>
</DIV>
<P CLASS="western" STYLE="margin-bottom: 0in"><BR>
</P>
<P CLASS="western" style="font-weight:bold" ALIGN=RIGHT STYLE="margin-left: 1.97in; text-indent: 0.49in">
$localidad, $fechacarta
</P>
<BR>
<BR>
<P CLASS="western" ALIGN=JUSTIFY STYLE="margin-left: 1.97in; text-indent: 0.49in; margin-bottom: 0in">
                                                                     
  <FONT FACE="Arial Narrow, serif"><FONT SIZE=2 STYLE="font-size: 11pt">N°
LLAE $n_llae_sap/$anio- OP</FONT></FONT></P>
<P CLASS="western" ALIGN=JUSTIFY STYLE="margin-bottom: 0in"><BR>
</P>


<span ALIGN=JUSTIFY>
Sr(a).
<BR>
$nombre
<BR>
$empresa
<BR>
F/$fono
<BR>
<U><B>Presente</B></U>
</span>


</P>

<P CLASS="western" ALIGN=RIGHT STYLE="margin-bottom: 0in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=2 STYLE="font-size: 11pt"><U><B>Ref.:
Solicitud de Planos </B></U></FONT></FONT>
</P>
<P ALIGN=JUSTIFY STYLE="margin-left: 2.95in; text-indent: -0.88in; margin-bottom: 0in">
         
</P>
<P ALIGN=LEFT STYLE="margin-bottom: 0in; font-weight: normal"><BR>
</P>



<P ALIGN=LEFT STYLE="margin-bottom: 0in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=3><FONT SIZE=2 STYLE="font-size: 11pt"><SPAN STYLE="font-weight: normal">De
nuestra consideración:</SPAN></FONT></FONT></FONT></P>
<P ALIGN=JUSTIFY STYLE="margin-left: 0in; margin-bottom: 0in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=3><FONT SIZE=2 STYLE="font-size: 11pt"><SPAN STYLE="font-weight: normal">	</SPAN></FONT></FONT></FONT></P>
<P CLASS="western" STYLE="margin-top: 0.19in; margin-bottom: 0.19in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=2 STYLE="font-size: 11pt">En
respuesta a solicitud de plano de red de gas natural en $sector, $localidad.
Gas Sur informa que no posee redes de distribución de gas Natural en
el sector solicitado. </FONT></FONT>
</P>
<P CLASS="western" ALIGN=JUSTIFY STYLE="margin-bottom: 0in">
</P>

<P CLASS="western" ALIGN=JUSTIFY STYLE="margin-bottom: 0in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=2 STYLE="font-size: 11pt">Sin
otro particular, le saluda atentamente,</FONT></FONT></P>
<P CLASS="western" STYLE="margin-bottom: 0in"><BR>
</P>

<BR><BR><BR>

<div ALIGN=MIDDLE align="middle">
<img style="margin-left:180px;margin-bottom:-30px" src="CARTAS_LLAE_215_18_Respuesta_Solicitud_de_Planos_html_b8bf00e6.jpg" >
</div>

<P CLASS="western" ALIGN=CENTER style="font-size:14px">

<span  STYLE="margin-bottom: -15px"><FONT FACE="Arial Narrow, serif"><FONT SIZE=14px><B>ERICA
DIAZ</B>
<br>
CONTROL TECNICO ACTIVO</FONT></FONT></span>

</P>




<P CLASS="western2" STYLE="font-size: 11px">
edp/cre
<BR>
c.c.: Archivo  
</P>
</BODY>
</HTML>
EOF;
}
else{
	
	$str = <<<EOF
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
	<META HTTP-EQUIV="CONTENT-TYPE" CONTENT="text/html; charset=utf-8">
	
	<STYLE TYPE="text/css">
	<!--
		@page { size: 8.8in 12in; margin-left: 0.98in; margin-right: 1.18in; margin-top: 0px; margin-bottom: 0px }
		
		P.cjk { so-language: es-ES }
		H1 { margin-top: 0in; margin-bottom: 0in; direction: ltr; widows: 2; orphans: 2 }
		H1.western { font-family: "Times New Roman", serif; font-size: 12pt; font-weight: normal }
		H1.cjk { font-size: 12pt; so-language: es-ES; font-weight: normal }
		H1.ctl { font-size: 10pt; font-weight: normal }
		
		p.western2 { font-size: 9px;  }
		
		H4 { margin-top: 0in; margin-bottom: 0in; direction: ltr; text-align: justify; widows: 2; orphans: 2 }
		H4.western { font-family: "Arial Narrow", serif; font-weight: normal }
		H4.cjk { font-family: "Times New Roman"; so-language: es-ES; font-weight: normal }
		H4.ctl { font-family: "Times New Roman" }
		A:link { color: #0000ff; so-language: zxx }
	-->
	</STYLE>
</HEAD>
<BODY LANG="es-CL" LINK="#0000ff" DIR="LTR">

	<IMG  SRC="CARTAS_LLAE_215_18_Respuesta_Solicitud_de_Planos_html_ed84242a.jpg" NAME="Imagen 1" ALIGN=BOTTOM WIDTH=129 HEIGHT=77 BORDER=0>


<P CLASS="western" style="font-weight:bold" ALIGN=RIGHT STYLE="margin-left: 1.97in; text-indent: 0.49in;font-size: 11px">
$localidad, $fechacarta
N° LLAE $correlativo_gassur/$anio- OP
</P>





<span ALIGN=JUSTIFY style="font-size: 11px">
Sr(a).
<BR>
$nombre
<BR>
$cargo
<BR>
$empresa
<BR>
F/$fono
<BR>
<U><B>Presente</B></U>
</span>


</P>

<P CLASS="western" ALIGN=RIGHT STYLE="margin-bottom: 0in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=2 STYLE="font-size: 11px"><U><B>Ref.:
Solicitud de Planos </B></U></FONT></FONT>
</P>
<P ALIGN=JUSTIFY STYLE="margin-left: 2.95in; text-indent: -0.88in; margin-bottom: 0in">
         



<P ALIGN=LEFT STYLE="margin-bottom: 0in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=3><FONT SIZE=2 STYLE="font-size: 11px"><SPAN STYLE="font-weight: normal">De
nuestra consideración:</SPAN></FONT></FONT></FONT></P>
<P ALIGN=JUSTIFY STYLE="margin-left: 0in; margin-bottom: 0in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=3><FONT SIZE=2 STYLE="font-size: 11pt"><SPAN STYLE="font-weight: normal">	</SPAN></FONT></FONT></FONT></P>
<P ALIGN=JUSTIFY CLASS="western" STYLE="margin-top: 0.19in; margin-bottom: 0.19in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=2 STYLE="font-size: 12px">
En respuesta a solicitud de plano de red de gas natural en $sector, $localidad.
Gas Sur informa que posee redes de distribución de gas Natural como se indica en Planos adjuntos N° $n_llae_sap, y una Copia del plano N° $n_plano.pdf
<br>
<br>
Es del caso, que la  principal causa de accidentes en Redes de Distribución de Gas, tiene su origen en trabajos o labores desarrollados por terceros, sin cumplir los procedimientos exigidos en la ley y que resguardan no sólo la seguridad de las instalaciones y redes de gas de nuestra propiedad, sino que además, protegen el medio ambiente y la integridad de las personas. En efecto, si una empresa o un particular ejecutan obras de cruzamiento, paralelismos u otros sobre la Red de Distribución de Gas, sin conocer su trazado o sin seguir los procedimientos técnicos adecuados, puede causar daños tan graves como lesiones y/o muerte de personas, cortes en el abastecimiento de gas a nuestros clientes y daños al medio ambiente, a la propiedad pública y privada. 
<br>
<br>
Como tenemos la certeza que Uds. comparten nuestra preocupación, les solicitamos que todas las obras que vuestra empresa realice para la ejecución del proyecto, y que afecten las redes de distribución de propiedad de Gas Sur S.A., consideren los procedimientos de seguridad que se encuentran dispuestos en la normativa vigente y que Gas Sur S.A. les impartirá si Uds. así lo solicitan, y cuya implementación es necesaria para asegurar que no ocurran accidentes.
<br>
<br>
Por lo antes expuesto y según Decreto 280 artículo Nº 8, les solicitamos que nos contacten a nuestro teléfono 6002001919, con el objeto de <b>programar una inspección en terreno</b> y coordinar trabajos en puntos de interferencias, si los hubiere, informando los procedimientos que se deberán seguir, cronograma de las obras a desarrollar por su empresa, de manera de prevenir graves accidentes a las personas y onerosos daños a nuestras instalaciones o de terceros. Además solicitamos considerar las cotas reflejadas en los planos adjuntos como <b>“referenciales”</b>, por lo que se deben coordinar en terreno las calicatas correspondientes para determinar las distancias reales.
<br>
Por último, expresamos a usted que cualquier daño que se produzca en las instalaciones de propiedad de Gas Sur S.A., se considerará daño a la propiedad privada, lo que nos da el derecho para efectuar las acciones de cobro que correspondan.
</FONT></FONT>
</P>
<P CLASS="western" ALIGN=JUSTIFY STYLE="margin-bottom: 0in">
</P>

<P CLASS="western" ALIGN=JUSTIFY STYLE="margin-bottom: 0in"><FONT FACE="Arial Narrow, serif"><FONT SIZE=2 STYLE="font-size: 11px">Sin
otro particular, le saluda atentamente,</FONT></FONT></P>
<P CLASS="western" STYLE="margin-bottom: 0in"><BR>
</P>

<div ALIGN=MIDDLE align="middle">
<img style="margin-left:180px;margin-bottom:-30px" src="CARTAS_LLAE_215_18_Respuesta_Solicitud_de_Planos_html_b8bf00e6.jpg" >
</div>

<P CLASS="western" ALIGN=CENTER style="font-size:12px">

<span  STYLE="margin-bottom: -15px"><FONT FACE="Arial Narrow, serif"><FONT SIZE=12px><B>ERICA
DIAZ</B>
<br>
CONTROL TECNICO ACTIVO</FONT></FONT></span>
</P>
<P CLASS="western2" STYLE="font-size: 11px">
ed/cre
<BR>
c.c.: Archivo  
</P>
</BODY>
</HTML>
EOF;
}


//echo $str;

$mpdf = new \Mpdf\Mpdf();

//$stylesheet = file_POST_contents('style.css');
//$mpdf->WriteHTML($stylesheet, 1);



$mpdf->Bookmark('Start of the document');




$mpdf->WriteHTML($str);


//$mpdf->Output();

$filename='carta_'.$id;

mkdir("/var/www/html/test/osm2/uploadllae/server/php/files/gassur/fotos/$id");

// First save it to the server somewhere 
$mpdf->Output("/var/www/html/test/osm2/uploadllae/server/php/files/gassur/fotos/$id/".$filename.".pdf", "F"); // Make sure the path is valid and writing permissions are set correctly to prevent writing errors.



// Then get the contents from the PDF

//echo 'hice';

$content = chunk_split(base64_encode($mpdf->Output("/var/www/html/test/osm2/uploadllae/server/php/files/gassur/fotos/´$id/".$filename.".pdf", "S")));


// header("Content-type:application/pdf");



// header("Content-Disposition:attachment;filename='$filename.pdf'");

echo "../../../../test/osm2/uploadllae/server/php/files/gassur/fotos/$id/".$filename.".pdf";



// readfile("/var/www/html/test/osm2/uploadllae/server/php/files/gassur/fotos/´$id/".$filename.".pdf");

$query2 = "update gassur_otros.llae set posee_carta='Sí' where id=".$id;
$result2 = mysql_query($query2);



?>


