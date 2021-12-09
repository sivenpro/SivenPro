<?php
session_start();
if($_SESSION["interno_id"] == 0 || $_SESSION["interno_id"] == NULL){
    echo "no tienes los permisos";
    die();
}

// error_reporting(E_ALL);
// ini_set('display_errors', '1');

include("../../../gassur/config/connection.php");
include("generaPdf_formularios.php");
$id_registro = $_POST["id_registro"];

/* $conn es la conexión ! */

$query = "SELECT r.*, p.nombre as plantilla, u.nombre_completo as ins_entrada, us.nombre_completo as ins_salida, t.horario as nombre_turno
          FROM sistema_interno_formularios.respuestas_checklist r
          JOIN sistema_interno_formularios.plantillas p ON p.id = r.id_plantilla
          JOIN sistema_interno.usuarios u ON u.id = r.inspector_entrada
          JOIN sistema_interno.usuarios us ON us.id = r.inspector_salida
          JOIN sistema_interno_formularios.turnos t ON t.id = r.turno 
          WHERE r.id='$id_registro'";
// echo $query;

$resultado = mysqli_query($conn, $query);
if (!$resultado) {
    die("Error en la consulta || " . $query);
} else {
    $data_final = mysqli_fetch_assoc($resultado);

    $sql_firma = "SELECT a.nombre_completo, c.nombre as nombre_perfil, url_firma, DATE_FORMAT(b.fecha_registro,'%d-%m-%Y') as fecha_modif_
                  FROM sistema_interno.usuarios a
                  INNER JOIN sistema_interno_formularios.respuestas_checklist b ON a.nombre = b.usuario
                  INNER JOIN sistema_interno.perfiles c ON a.tipo_perfil = c.id
                  WHERE b.id='$id_registro' LIMIT 1";

    $data_final["firma_usuario"] = null;
    $resultado = mysqli_query($conn, $sql_firma);
    while ($da = mysqli_fetch_assoc($resultado)) {
        $data_final["firma_usuario"] = (object) $da;
    }

    $cuerpo_html = "";
    $data_final = (object) $data_final;
    $fecha_ = $data_final->fecha;
    $fecha_emision = date('d-m-Y', strtotime($fecha_));

    if($data_final->observaciones_eq!="")$obs_eq = "<p><strong>Observaciones: </strong>".$data_final->observaciones_eq."</p>";
    if($data_final->observaciones_form!="")$obs_form = "<p><strong>Observaciones: </strong>".$data_final->observaciones_form."</p>";
    if($data_final->observaciones_equipo!="")$obs_equipo = "<p><strong>Observaciones: </strong>".$data_final->observaciones_equipo."</p>";
    if($data_final->observaciones_instr!="")$obs_instr = "<p><strong>Observaciones: </strong>".$data_final->observaciones_instr."</p>";
    if($data_final->observaciones_herram!="")$obs_herram = "<p><strong>Observaciones: </strong>".$data_final->observaciones_herram."</p>";
    if($data_final->observaciones_herram2!="")$obs_herram2 = "<p><strong>Observaciones: </strong>".$data_final->observaciones_herram2."</p>";
    if($data_final->observaciones_herram3!="")$obs_herram3 = "<p><strong>Observaciones: </strong>".$data_final->observaciones_herram3."</p>";
    if($data_final->observaciones_herram4!="")$obs_herram4 = "<p><strong>Observaciones: </strong>".$data_final->observaciones_herram4."</p>";
    if($data_final->observaciones_fitt!="")$obs_fitt = "<p><strong>Observaciones: </strong>".$data_final->observaciones_fitt."</p>";
    if($data_final->observaciones_fitt2!="")$obs_fitt2 = "<p><strong>Observaciones: </strong>".$data_final->observaciones_fitt2."</p>";
    if($data_final->observaciones_fitt3!="")$obs_fitt3 = "<p><strong>Observaciones: </strong>".$data_final->observaciones_fitt3."</p>";
    if($data_final->observaciones_fitt4!="")$obs_fitt4 = "<p><strong>Observaciones: </strong>".$data_final->observaciones_fitt4."</p>";
    if($data_final->observaciones_reg!="")$obs_reg = "<p><strong>Observaciones: </strong>".$data_final->observaciones_reg."</p>";
    if($data_final->observaciones_med!="")$obs_med = "<p><strong>Observaciones: </strong>".$data_final->observaciones_med."</p>";
    if($data_final->observaciones_sellos!="")$obs_sellos = "<p><strong>Observaciones: </strong>".$data_final->observaciones_sellos."</p>";
    if($data_final->observaciones_seg!="")$obs_seg = "<p><strong>Observaciones: </strong>".$data_final->observaciones_seg."</p>";

    $cuerpo_html .= '<h3 style="margin-top:-30px;margin-bottom:5%;text-align:center;">'.$data_final->plantilla.'</h3>';
    
    //AQUI LLENAR LOS CAMPOS DE INFORMACION DINAMICOS //SI UNA TABLA DE DATOS NO TIENE INFORMACION, QUE NO SE CONSTRUYA
    $cuerpo_html .= '<div style="font-size: larger; margin-left:5%;line-height:180%;margin-bottom:-20px;">
                        <p><strong>Fecha: </strong>'.$fecha_emision.'</p>
                        <p><strong>Turno: </strong>'.$data_final->nombre_turno.'</p>
                        <p><strong>Inspector de entrada: </strong>'.$data_final->ins_entrada.'</p>
                        <p><strong>Inspector de salida: </strong>'.$data_final->ins_salida.'</p>
                        <p>&nbsp;</p>
                        <p><h4>VEHÍCULO Y EQUIPAMIENTO</h4></p><p>Furgón Peugeot Expert LGGB-13</p>
                        <p><strong>Kilómetro inicial: </strong>'.$data_final->kilometro_inicial.'</p>
                        <p><strong>Documentos en móvil y al día: </strong>'.$data_final->documentos.'</p>
                        <p><strong>Estado de carrocería: </strong>'.$data_final->estado_carrocería.'</p>
                        <p><strong>Limpieza: </strong>'.$data_final->limpieza.'</p>
                        <p><strong>Luces: </strong>'.$data_final->luces.'</p>
                        <p><strong>Combustible (+ 1/2 estanque): </strong>'.$data_final->combustible.'</p>
                        <p><strong>Tarjeta de Combustible COPEC: </strong>'.$data_final->tarjeta_combustible_COPEC.'</p>
                        <p><strong>Estado Neumáticos: </strong>'.$data_final->estado_neumaticos.'</p>
                        <p><strong>Neumático Repuesto (Operativo): </strong>'.$data_final->neumatico_repuesto.'</p>
                        <p><strong>Llave Neumáticos: </strong>'.$data_final->llave_neumaticos.'</p>
                        <p><strong>Botiquín: </strong>'.$data_final->botiquin.'</p>
                        <p><strong>Triángulos: </strong>'.$data_final->triangulos.'</p>
                        <p><strong>Extintor (Operativo): </strong>'.$data_final->extintor_eq.'</p>
                        <p><strong>Gata (Operativa): </strong>'.$data_final->gata.'</p>
                        <p><strong>GPS: </strong>'.$data_final->GPS.'</p>
                        '.$obs_eq.'
                        <div style="page-break-after: always; margin-left:5%;">
                        <p><h4>FORMULARIOS</h4></p>
                        <p><strong>Formulario Orden de Servicio: </strong>'.$data_final->formulario_OS.'</p>
                        <p><strong>Carta de Defecto Crítico: </strong>'.$data_final->carta_defecto.'</p>
                        <p><strong>Formulario PH: </strong>'.$data_final->formulario_PH.'</p>
                        <p><strong>Libro de Obra: </strong>'.$data_final->libro_obra.'</p>
                        <p><strong>Volante visita: </strong>'.$data_final->volante_visita.'</p>
                        '.$obs_form.'
                        <p>&nbsp;</p>
                        <p><h4>EQUIPOS/INSTRUMENTOS</h4></p><p>(Corresponde equipos e instrumentos operativos y en buenas condiciones. Si equipo se encuentra fuera de servicio se debe descontar y registrar observación)</p>
                        <p><strong>Sewerin Snooper Mini (o simil.): </strong>'.$data_final->seweri.'</p>
                        <p><strong>Detector de gas Draguer: </strong>'.$data_final->detector_ga.'</p>
                        <p><strong>Detector de Voltaje: </strong>'.$data_final->detector_voltaj.'</p>
                        <p><strong>Equipo ERA c/ cilindro AC: </strong>'.$data_final->equipo_ER.'</p>
                        <p><strong>Repuesto Cilindros AC (cargado 2216 PSI): </strong>'.$data_final->repuesto_cilindro.'</p>
                        <p><strong>Obturadores Grandes: </strong>'.$data_final->obturadores_grande.'</p>
                        <p><strong>Obturadores Chicos: </strong>'.$data_final->obturadores_chico.'</p>
                        <p><strong>Linterna Intrínsica c/cargador: </strong>'.$data_final->linterna_intrinsic.'</p>
                        '.$obs_equipo.'<p>&nbsp;</p>
                        <p><strong>Linterna Intrínsica para casco: </strong>'.$data_final->linterna_intrinsica_casc.'</p>
                        <p><strong>Linterna Intrínsica de Mano (c/ Pilas): </strong>'.$data_final->linterna_intrinsica_man.'</p>
                        <p><strong>Equipo Iluminación Autónomo: </strong>'.$data_final->equipo_iluminacion.'</p>
                        <p><strong>Extractor de Gas: </strong>'.$data_final->extractor_gas.'</p>
                        <p><strong>Huincha de medir: </strong>'.$data_final->huincha.'</p>
                        <p><strong>Columna de gas: </strong>'.$data_final->columna_gas.'</p>
                        <p><strong>Kit conexión Columna de agua: </strong>'.$data_final->kit_conexion.'</p>
                        <p><strong>Manómetro Digital Rango 0 - 16 bar: </strong>'.$data_final->manometro_digital.'</p>
                        <p><strong>Pilas AA: </strong>'.$data_final->pilas_AA.'</p>
                        <p><strong>Pilas AAA: </strong>'.$data_final->pilas_AAA.'</p>
                        <p><strong>Radio Portátil Motorola: </strong>'.$data_final->radio_portatil.'</p>
                        <p><strong>Batería Repuesto Radio Portátil: </strong>'.$data_final->bateria_repuesto_radio.'</p>
                        <p><strong>Batería externa Celular c/cable: </strong>'.$data_final->bateria_externa_celular.'</p>
                        '.$obs_instr.'
                        <p>&nbsp;</p>
                        <p><h4>HERRAMIENTAS</h4></p><p>(Corresponde a herramientas operativas y en buenas condiciones. Si herramienta se encuentra defectuosa se debe descontar y registrar observación)</p>
                        <p><strong>Maceta Goma: </strong>'.$data_final->maceta_goma.'</p>
                        <p><strong>Maceta Fierro 4Lb: </strong>'.$data_final->maceta_fierro.'</p>
                        <p><strong>Escobilla Bronce: </strong>'.$data_final->escobilla_bronce.'</p>
                        <p><strong>Marco Sierra c/hoja: </strong>'.$data_final->marco_sierra.'</p>
                        <p><strong>Repuesto Hoja Sierra: </strong>'.$data_final->repuesto_hoja.'</p>
                        <p><strong>Napoleón 24": </strong>'.$data_final->napoleon_24.'</p>
                        <p><strong>Punto: </strong>'.$data_final->punto.'</p>
                        <p><strong>Llave Tubería 315mm: </strong>'.$data_final->llave_tubería_315mm.'</p>
                        <p><strong>Llave Stillson 12": </strong>'.$data_final->llave_stillson_12.'</p>
                        <p><strong>Llave Stillson 18": </strong>'.$data_final->llave_stillson_18.'</p>
                        <p><strong>Llave Francesa 6": </strong>'.$data_final->llave_francesa_6.'</p>
                        <p><strong>Llave Francesa 8": </strong>'.$data_final->llave_francesa_8.'</p>
                        '.$obs_herram.'<p>&nbsp;</p>
                        <p><strong>Llave Francesa 12": </strong>'.$data_final->llave_francesa_12.'</p>
                        <p><strong>Llave Francesa 15": </strong>'.$data_final->llave_francesa_15.'</p>
                        <p><strong>Juego de Dados 8-32mm: </strong>'.$data_final->juego_dados_8_32mm.'</p>
                        <p><strong>Juego completo llave Punta - Corona: </strong>'.$data_final->juego_puntaCorona.'</p>
                        <p><strong>Juego de Atornilladores 6 Pz.: </strong>'.$data_final->juego_atornilladores.'</p>
                        <p><strong>Juego Llave Allen 10 pzas. (mm): </strong>'.$data_final->juego_llave_allen10pzas.'</p>
                        <p><strong>Juego Llave Allen (in): </strong>'.$data_final->juego_llave_allen.'</p>
                        <p><strong>Llave Allen 3/8": </strong>'.$data_final->llave_allen3_8.'</p>
                        <p><strong>Llave Allen 5/16": </strong>'.$data_final->llave_allen5_16.'</p>
                        <p><strong>Juego de Llaves TORX 8 pz.: </strong>'.$data_final->juego_llaves_TORX8pz.'</p>
                        <p><strong>Alicate Universal 7": </strong>'.$data_final->alicate_universal_7.'</p>
                        <p><strong>Alicate Picoloro 10": </strong>'.$data_final->alicate_picoloro_10.'</p>
                        <p><strong>Alicate Caimán 10": </strong>'.$data_final->alicate_caiman_10.'</p>
                        '.$obs_herram2.'<p>&nbsp;</p>
                        <p><strong>Cortatubo 1/8 - 1.1/8": </strong>'.$data_final->cortatubo.'</p>
                        <p><strong>Chuzo Fierro: </strong>'.$data_final->chuzo_fierro.'</p>
                        <p><strong>Chuzo Bronce: </strong>'.$data_final->chuzo_bronce.'</p>
                        <p><strong>Pala Metálica: </strong>'.$data_final->pala_metalica.'</p>
                        <p><strong>Pala Bronce: </strong>'.$data_final->pala_bronce.'</p>
                        <p><strong>Picota Bronce: </strong>'.$data_final->picota_bronce.'</p>
                        <p><strong>Escobillón: </strong>'.$data_final->escobillon.'</p>
                        <p><strong>Ganchos Cámara: </strong>'.$data_final->ganchos_camara.'</p>
                        <p><strong>Chimenea: </strong>'.$data_final->chimenea.'</p>
                        <p><strong>Pértiga Cobre: </strong>'.$data_final->pertiga_cobre.'</p>
                        <p><strong>Soplete c/cartucho Butano: </strong>'.$data_final->soplete.'</p>
                        <p><strong>Repuesto cartucho Butano: </strong>'.$data_final->repuesto_cartucho.'</p>
                        <p><strong>Pintura Spray Roja: </strong>'.$data_final->pintura_spray_roja.'</p>
                        <p><strong>Pintura Spray Amarilla: </strong>'.$data_final->pintura_spray_amarilla.'</p>
                        '.$obs_herram3.'<p>&nbsp;</p>
                        <p><strong>Masilla Epóxica (Tubos): </strong>'.$data_final->masilla_epoxica.'</p>
                        <p><strong>Cinta Fibra Vidrio 3M: </strong>'.$data_final->cinta_fibra_3M.'</p>
                        <p><strong>Masilla Filler Mastic (Rollo): </strong>'.$data_final->masilla_filler.'</p>
                        <p><strong>Quix: </strong>'.$data_final->quix.'</p>
                        <p><strong>Solución Jabonosa: </strong>'.$data_final->solucion_jabonosa.'</p>
                        <p><strong>Bidón: </strong>'.$data_final->bidon.'</p>
                        <p><strong>Huaipe: </strong>'.$data_final->huaipe.'</p>
                        <p><strong>WD-40: </strong>'.$data_final->WD_40.'</p>
                        <p><strong>Grasa BR-2 (Molikote): </strong>'.$data_final->grasa_BR2.'</p>
                        '.$obs_herram4.'</div>
                        
                        <div style="page-break-after: always; margin-left:5%;">
                        <p><h4>FITTING</h4></p>
                        <p><strong>Cap 1/2" SO Cobre: </strong>'.$data_final->cap_1_2_SO_cobre.'</p>
                        <p><strong>Cap 3/4" SO Cobre: </strong>'.$data_final->cap_3_4_SO_cobre.'</p>
                        <p><strong>Cap 1" SO Cobre: </strong>'.$data_final->cap_1_SO_cobre.'</p>
                        <p><strong>Cap 1-1/4" SO Cobre: </strong>'.$data_final->cap_1_1_4_SO_cobre.'</p>
                        <p><strong>Copla 1/2" SO Cobre: </strong>'.$data_final->copla_1_2_SO_cobre.'</p>
                        <p><strong>Copla 3/4" SO Cobre: </strong>'.$data_final->copla_3_4_SO_cobre.'</p>
                        <p><strong>Copla 1" SO Cobre: </strong>'.$data_final->copla_1_SO_cobre.'</p>
                        <p><strong>Copla 1-1/4" SO Cobre: </strong>'.$data_final->copla_1_1_4_SO_cobre.'</p>
                        <p><strong>Tapagorro 1/2" HI Bronce: </strong>'.$data_final->tapagorro_1_2_bronce.'</p>
                        <p><strong>Tapagorro 3/4" HI Bronce: </strong>'.$data_final->tapagorro_3_4_bronce.'</p>
                        '.$obs_fitt.'<p>&nbsp;</p>
                        <p><strong>Tapatornillo 1/2" HE Bronce: </strong>'.$data_final->tapatornillo_1_2_bronce.'</p>
                        <p><strong>Tapatornillo 3/4" HE Bronce: </strong>'.$data_final->tapatornillo_3_4_bronce.'</p>
                        <p><strong>Tapagorro 1/2" Galvanizado: </strong>'.$data_final->tapagorro_1_2_galvanizado.'</p>
                        <p><strong>Tapagorro 3/4" Galvanizado: </strong>'.$data_final->tapagorro_3_4_galvanizado.'</p>
                        <p><strong>Tapagorro 1" Galvanizado: </strong>'.$data_final->tapagorro_1_galvanizado.'</p>
                        <p><strong>Tapagorro 1-1/2" Galvanizado: </strong>'.$data_final->tapagorro_1_1_2_galvanizado.'</p>
                        <p><strong>Tapagorro 1-1/4" Galvanizado: </strong>'.$data_final->tapagorro_1_1_4_galvanizado.'</p>
                        <p><strong>Tapagorro 2" Galvanizado: </strong>'.$data_final->tapagorro_2_galvanizado.'</p>
                        <p><strong>Tapatornillo 1/2" Galvanizado: </strong>'.$data_final->tapatornillo_1_2_galvanizado.'</p>
                        <p><strong>Tapatornillo 3/4" Galvanizado: </strong>'.$data_final->tapatornillo_3_4_galvanizado.'</p>
                        '.$obs_fitt2.'<p>&nbsp;</p>
                        <p><strong>Tapatornillo 1" Galvanizado: </strong>'.$data_final->tapatornillo_1_galvanizado.'</p>
                        <p><strong>Tapatornillo 1-1/4" Galvanizado: </strong>'.$data_final->tapatornillo_1_1_4_galvanizado.'</p>
                        <p><strong>Tapatornillo 1-1/2" Galvanizado: </strong>'.$data_final->tapatornillo_1_1_2_galvanizado.'</p>
                        <p><strong>Tapatornillo 2" Galvanizado: </strong>'.$data_final->tapatornillo_2_galvanizado.'</p>
                        <p><strong>Bushing 1"x 3/4" Galvanizado: </strong>'.$data_final->bushing1x_3_4_galvanizado.'</p>
                        <p><strong>Bushing 1-1/4" x 1" Galvanizado: </strong>'.$data_final->bushing_1_1_4x1_galvanizado.'</p>
                        <p><strong>Bushing 3/4" x1/2" Galvanizado: </strong>'.$data_final->bushing_3_4x1_2_galvanizado.'</p>
                        <p><strong>Bushing 1/2" Bronce: </strong>'.$data_final->bushing_1_2_bronce.'</p>
                        <p><strong>Niple 1/2" Bronce: </strong>'.$data_final->niple_1_2_bronce.'</p>
                        <p><strong>Niple 3/4" Galvanizado: </strong>'.$data_final->niple_3_4_galvanizado.'</p>
                        <p><strong>Niple 1-1/4" Galvanizado: </strong>'.$data_final->niple_1_1_4_galvanizado.'</p>
                        <p><strong>Soldadura Plata: </strong>'.$data_final->soldadura_plata.'</p>
                        <p><strong>Soldadura Estaño: </strong>'.$data_final->soldadura_estanio.'</p>
                        '.$obs_fitt3.'<p>&nbsp;</p>
                        <p><strong>Fundente: </strong>'.$data_final->fundente.'</p>
                        <p><strong>Pasta Soldar: </strong>'.$data_final->pasta_soldar.'</p>
                        <p><strong>Lija: </strong>'.$data_final->lija.'</p>
                        <p><strong>Teflón 1/2": </strong>'.$data_final->teflon_1_2.'</p>
                        <p><strong>Teflón 3/4": </strong>'.$data_final->teflon_3_4.'</p>
                        <p><strong>Teflón Pasta: </strong>'.$data_final->teflon_pasta.'</p>
                        '.$obs_fitt4.'
                        <p>&nbsp;</p>
                        <p><h4>REGULADORES Y MEDIDORES</h4></p>
                        <p><strong>Regulador B6 20 mbar: </strong>'.$data_final->Regulador_B6_20.'</p>
                        <p><strong>Regulador B6 35 mbar: </strong>'.$data_final->Regulador_B6_35.'</p>
                        <p><strong>Regulador B10 20 mbar: </strong>'.$data_final->Regulador_B10_20.'</p>
                        <p><strong>Regulador B10 35 mbar: </strong>'.$data_final->Regulador_B10_35.'</p>
                        <p><strong>Regulador B10 50 mbar: </strong>'.$data_final->Regulador_B10_50.'</p>
                        <p><strong>Regulador B25 20 mbar: </strong>'.$data_final->Regulador_B25_20.'</p>
                        <p><strong>Regulador B40 20 mbar: </strong>'.$data_final->Regulador_B40_20.'</p>
                        <p><strong>Regulador B40 35 mbar: </strong>'.$data_final->Regulador_B40_35.'</p>
                        <p><strong>Regulador Dival 500 BP 0,018-0,020 bar: </strong>'.$data_final->Regulador_Dival_500BP0_020.'</p>
                        <p><strong>Regulador Dival 500 BP 0,018-0,024 bar: </strong>'.$data_final->Regulador_Dival_500BP0_024.'</p>
                        <p><strong>Regulador Dival 500 BP 0,035 bar: </strong>'.$data_final->Regulador_Dival_500BP0_035.'</p>
                        <p><strong>Regulador Dival 500 TR 1,2 bar: </strong>'.$data_final->Regulador_Dival_500TR1_2.'</p>
                        <p><strong>Regulador Artefacto 1/2": </strong>'.$data_final->Regulador_artefacto1_2.'</p>
                        <p><strong>Regulador Artefacto 3/4": </strong>'.$data_final->Regulador_artefacto3_4.'</p>
                        '.$obs_reg.'</div>

                        <div style="page-break-after: always; margin-left:5%;">
                        <p><strong>Medidor G4: </strong>'.$data_final->medidor_G4.'</p>
                        <p><strong>Codo Esferocónico 3/4": </strong>'.$data_final->codo_3_4.'</p>
                        <p><strong>Válvula 3/4": </strong>'.$data_final->valvula_3_4.'</p>
                        <p><strong>Válvula 1": </strong>'.$data_final->valvula_1.'</p>
                        <p><strong>Válvula 1_1/4": </strong>'.$data_final->valvula_1_1_4.'</p>
                        <p><strong>Válvula 1_1/2": </strong>'.$data_final->valvula_1_1_2.'</p>
                        <p><strong>Válvula 2": </strong>'.$data_final->valvula_2.'</p>
                        <p><strong>Curva Corta 1" X 1.1/4": </strong>'.$data_final->curva_corta_1.'</p>
                        <p><strong>Conector con Espiga 1-1/4" x 1": </strong>'.$data_final->conector_espiga_1_4_x1.'</p>
                        <p><strong>Conector con Espiga 1-1/4" x 3/4": </strong>'.$data_final->conector_espiga_3_4.'</p>
                        <p><strong>Con. Br Bushing 1.1/4"HI x 1"HE: </strong>'.$data_final->con_Br_Bushing.'</p>
                        <p><strong>Conector con Espiga 1.1/2" x 1": </strong>'.$data_final->conector_espiga_1_2_x1.'</p>
                        '.$obs_med.'
                        <p>&nbsp;</p>
                        <p><h4>SELLOS Y EMPAQUETADURAS</h4></p>
                        <p><strong>Sello Corte American Meter: </strong>'.$data_final->sello_corte_american.'</p>
                        <p><strong>Sello Corte Gallus 2000 (Med-G4) : </strong>'.$data_final->sello_corte_gallus.'</p>
                        <p><strong>Sello Corte Medidor G1.6: </strong>'.$data_final->sello_corte_medidorG1_6.'</p>
                        <p><strong>Sello Corte Medidor G10: </strong>'.$data_final->sello_corte_medidorG10.'</p>
                        <p><strong>Empaquetadura American Meter: </strong>'.$data_final->empaquetadura_american.'</p>
                        <p><strong>Empaquetadura ABB G1.6: </strong>'.$data_final->empaquetadura_ABB.'</p>
                        <p><strong>Empaquetadura 2" Nitrilo (G16 y G25): </strong>'.$data_final->empaquetadura_nitriloG16_G25.'</p>
                        <p><strong>Empaquetadura 2.1/2" Nitrilo (G40) : </strong>'.$data_final->empaquetadura_nitriloG40.'</p>
                        <p><strong>Golilla Plana 1/2" (verde) : </strong>'.$data_final->golilla_plana_1_2_verde.'</p>
                        <p><strong>Sello Roll In Rojo: </strong>'.$data_final->sello_rollIn_Rojo.'</p>
                        <p><strong>Sello Roll In Amarillo : </strong>'.$data_final->sello_rollIn_Amarillo.'</p>
                        <p><strong>Sello Roll In Azul : </strong>'.$data_final->sello_rollIn_Azul.'</p>
                        <p><strong>Sello Roll In Blanco: </strong>'.$data_final->sello_rollIn_Blanco.'</p>
                        '.$obs_sellos.'</div>
                        
                        <div style="margin-left:5%;">
                        <p><h4>SEGURIDAD</h4></p><p>(Materiales de seguridad operativos y en buenas condiciones. Si existen elementos en malas condiciones se debe descontar y registrar observación)</p>
                        <p><strong>Botas de Agua: </strong>'.$data_final->botas_agua.'</p>
                        <p><strong>Conos 18": </strong>'.$data_final->conos_18.'</p>
                        <p><strong>Conos 36": </strong>'.$data_final->conos_36.'</p>
                        <p><strong>Barra Extensible rojo/blanco: </strong>'.$data_final->barra_rojo_blanco.'</p>
                        <p><strong>Uniforme Bombero: </strong>'.$data_final->uniforme_bombero.'</p>
                        <p><strong>Casco Bombero: </strong>'.$data_final->casco_bombero.'</p>
                        <p><strong>Rodilleras (par): </strong>'.$data_final->rodilleras.'</p>
                        <p><strong>Extintor: </strong>'.$data_final->extintor_seg.'</p>
                        <p><strong>Cinta Peligro: </strong>'.$data_final->cinta_peligro.'</p>
                        <p><strong>Cinta Gas Sur: </strong>'.$data_final->cinta_gassur.'</p>
                        <p><strong>Capa de Agua: </strong>'.$data_final->capa_agua.'</p>
                        '.$obs_seg.'</div>
                    </div>';


    //AQUI AGREGAR FIRMAS E IMAGENES PARA ELLAS
    if ($data_final->firma_usuario != null) {

        $html_firmas = "";
        $data_firmas = null;

        if ($data_final->firma_usuario != null) {

            if ($data_final->firma_usuario->url_firma != "") {
                $img = $data_final->firma_usuario->url_firma;
            }
            else{
                $img = dirname(__FILE__) . "/../biblioteca/firmas/default.png";
            }

            $celda_arriba = '<td style="width: 90%; text-align: center; height: 100px;"><img src="' . $img . '" style="height: 190px; width: 320px;"></td>';
            $celda_abajo = '<td style="width: 100%; text-align: center; height: 30px;">
                <p style="font-size:17px;">' . $data_final->firma_usuario->nombre_completo . '</p>
                <p style="font-size:14px;">' . $data_final->firma_usuario->nombre_perfil . '</p>
                </td>';
            $data_firmas[] = (object) ['nombre' => 'firma_usuario', 'celda_arriba' => $celda_arriba, 'celda_abajo' => $celda_abajo];
        }

        if (count($data_firmas) > 0) {

            $cuerpo_html .= '<table style="border-collapse: collapse;" width: 100%; border-style: "none"; border="0";>
                    <tbody>
                    <tr style="height: 200px;">';

            foreach ($data_firmas as $key) {
                $cuerpo_html .= $key->celda_arriba;
            }

            $cuerpo_html .= '</tr>';
            $cuerpo_html .= '<tr style="height: 50px;">';

            foreach ($data_firmas as $key) {
                $cuerpo_html .= $key->celda_abajo;
            }

            $cuerpo_html .= '</tr></tbody></table>';
        }
    }


    // echo $cuerpo_html;

    //echo json_encode($data_final);
    $nombre_archivo = "Registro_Checklist_N_" . $id_registro . "_" . date("dmY");
    $data_return = generaPDFParametros($id_registro, $nombre_archivo, $cuerpo_html);
    $informacion["base_64"] = $data_return;
    $informacion["nombre_archivo"] = $nombre_archivo;
    echo json_encode($informacion);
}