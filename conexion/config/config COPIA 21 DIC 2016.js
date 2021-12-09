Ext.namespace("Heron");
Ext.namespace("Heron.options");
Ext.namespace("Heron.options.layertree");

 
   var tab;
   if(perfil_usu !="")
    {
    var acces = acces_s;
    var menus_ = acces.split(","); 
      console.log(perfil_usu+"||||"+menus_);
       
   }
   
    

 function confrm_ext(){
    
     window.location='../login/logout.php';
 }

 
 function asi2(id){
     tab=Ext.getCmp('tabs');
switch(id){


case 'g_i':
tab.add({
            title: 'Gestión Informes' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/generador/Gestion_Informes/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'ldp':
tab.add({
            title: 'Línea Distribución Primaria' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/linea_distribucion_primaria/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'cg':
tab.add({
            title: 'Concesión Geo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/concesion_geo/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;
case 'sg':
tab.add({
            title: 'Servicio Geo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/servicio_geo/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;
case 'traz':
tab.add({
            title: 'Trazado' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/trazado/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;
case 'tra':
tab.add({
            title: 'Tramo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tramo/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;
case 'tra_geo':
tab.add({
            title: 'Tramo Geo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tramo_geo/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'ot':
tab.add({
            title: 'Operación Tramo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/operacion_trazado/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'pro':
tab.add({
            title: 'Proyecto' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/proyecto/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'val':
tab.add({
            title: 'Válvula' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/valvula/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'emr':
tab.add({
            title: 'Estación Medición Regulación' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/emr/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'hi':
tab.add({
            title: 'Hito' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/hito/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'cru':
tab.add({
            title: 'Cruce' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/cruce/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tp':
tab.add({
            title: 'Tipo Servicio' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_servicio/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'zt':
tab.add({
            title: 'Zona Tarifaria' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/zona_tarifaria/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'gas_c':
tab.add({
            title: 'Gas Cargado' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/gas_cargado/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'gas_r':
tab.add({
            title: 'Gas Recibido' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/gas_recibido/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'gas_p':
tab.add({
            title: 'Gas Producido' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/gas_producido/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'gas_e':
tab.add({
            title: 'Gas Entregado' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/gas_entregado/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'num_c':
tab.add({
            title: 'Número Cliente' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/numero_cliente/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break; 

case 'con_p':
tab.add({
            title: 'Consumo Propio' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/consumo_propio/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show(); 

break;

case 'ccg':
tab.add({
            title: 'Contrato Compra Gas' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/contrato_compra_gas/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'em_gdr':
tab.add({
            title: 'Emergencias' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/emergencias_gdr/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'acc_gdr':
tab.add({
            title: 'Accidentes' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/accidentes_gdr/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'itr_gdr':
tab.add({
            title: 'Intervencion terceros' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/intervencion_terceros_gdr/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'cod_gdr':
tab.add({
            title: 'Codec' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/codec_gdr/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;


case 'edificios':
tab.add({
            title: 'Edificios' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/edificios/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'estacion_compresion':
tab.add({
            title: 'Estación Compresión' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/estacion_compresion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'inmuebles_comerciales':
tab.add({
            title: 'Inmuebles Comerciales' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/inmuebles_comerciales/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'medidor':
tab.add({
            title: 'Medidor' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/medidor/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'reclamos_gdr':
tab.add({
            title: 'Reclamos gdr' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/reclamos_gdr/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'sistema_control_presion':
tab.add({
            title: 'Sistema Control Presión' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/sistema_control_presion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'sistema_deteccion_rotura':
tab.add({
            title: 'Sistema Detección Rotura' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/sistema_deteccion_rotura/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'suministros_provisorios_gdr':
tab.add({
            title: 'Suministros Provisorios gdr' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/suministros_provisorios_gdr/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'trampa':
tab.add({
            title: 'Trampa' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/trampa/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'zona_concesiones':
tab.add({
            title: 'Zona Concesiones' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/zona_concesiones/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'zona_servicio':
tab.add({
            title: 'Zona Servicio' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/zona_servicio/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'causas':
tab.add({
            title: 'Causas' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/causas/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'clases_ubicacion':
tab.add({
            title: 'Clases ubicación' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/clases_ubicacion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'clasificacion_emergencia':
tab.add({
            title: 'Clasificación Emergencia' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/clasificacion_emergencia/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'clasificacion_reclamo':
tab.add({
            title: 'Clasificación Reclamo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/clasificacion_reclamo/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'comunas':
tab.add({
            title: 'Comunas' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/comunas/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'control_corrosion':
tab.add({
            title: 'Control Corrosión' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/control_corrosion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'danio_accidente':
tab.add({
            title: 'Daño Accidente' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/danio_accidente/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'detalle_reclamo':
tab.add({
            title: 'Detalle Reclamo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/detalle_reclamo/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'material_tuberia':
tab.add({
            title: 'Material Tuberia' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/material_tuberia/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'material_tuberia_emergencia':
tab.add({
            title: 'Material Tuberia Emergencia' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/material_tuberia_emergencia/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;
case 'metodo_transmision_datos':
tab.add({
            title: 'Metodo Transmision Datos' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/metodo_transmision_datos/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'notificacion_emergencia':
tab.add({
            title: 'Notificacion Emergencia' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/notificacion_emergencia/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'regiones':
tab.add({
            title: 'Región' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/regiones/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'rubro':
tab.add({
            title: 'Rubro' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/rubro/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'sistema_proteccion':
tab.add({
            title: 'Sistema Protección' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/sistema_proteccion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tiempo_suspension':
tab.add({
            title: 'Tiempo Suspensión' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tiempo_suspension/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_codec':
tab.add({
            title: 'Tipo Codec' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_codec/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_combustible':
tab.add({
            title: 'Tipo Combustible' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_combustible/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_combustible_reclamo':
tab.add({
            title: 'Tipo Combustible Reclamo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_combustible_reclamo/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_concesion':
tab.add({
            title: 'Tipo Concesión' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_concesion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_configuracion_instalacion':
tab.add({
            title: 'Tipo Configuración Instalación' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_configuracion_instalacion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_consumo':
tab.add({
            title: 'Tipo Consumo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_consumo/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_cruce':
tab.add({
            title: 'Tipo Cruce' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_cruce/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_emergencia':
tab.add({
            title: 'Tipo Emergencia' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_emergencia/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_funcion':
tab.add({
            title: 'Tipo Función' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_funcion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_gas':
tab.add({
            title: 'Tipo Gas' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_gas/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_instalacion':
tab.add({
            title: 'Tipo Instalación' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_instalacion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_instalacion_compresion':
tab.add({
            title: 'Tipo Instalación Compresión' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_instalacion_compresion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_medicion':
tab.add({
            title: 'Tipo Medición' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_medicion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_medidor':
tab.add({
            title: 'Tipo Medidor' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_medidor/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_numero_etapas':
tab.add({
            title: 'Tipo Número Etapas' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_numero_etapas/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_proyecto':
tab.add({
            title: 'Tipo Proyecto' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_proyecto/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_reclamo':
tab.add({
            title: 'Tipo Reclamo' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_reclamo/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_sistema_control':
tab.add({
            title: 'Tipo Sistema Control' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_sistema_control/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_sistema_control_presion':
tab.add({
            title: 'Tipo Sistema Control Presión' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_sistema_control_presion/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_sistema_deteccion_rotura':
tab.add({
            title: 'Tipo Sistema Deteccion Rotura' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_sistema_deteccion_rotura/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_trampa':
tab.add({
            title: 'Tipo Trampa' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_trampa/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_transmision_datos':
tab.add({
            title: 'Tipo Transmisión Datos' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_transmision_datos/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_usuario':
tab.add({
            title: 'Tipo Usuario' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_usuario/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'tipo_valvula':
tab.add({
            title: 'Tipo Valvula' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/tipo_valvula/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'usuario':
tab.add({
            title: 'Usuario' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/otros/usuarios/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'clientes_cuartel':
tab.add({
            title: 'Clientes Cuartel' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/clientes_cuartel/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'mcl':
tab.add({
            title: 'Clientes' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/star/mantenedores/clientes/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();

break;

case 'perfil':
tab.add({
            title: 'Perfil Usuario' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/otros/perfil/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
            closable:true
        }).show();
break;

case 'mov':
var dato = tab.add({
            title: 'Movil' ,
            iconCls: 'reportes',
            id: 'ventana_movil',
            html: '<iframe id="frame_movil" src="../../test/osm2/index_escritorio_movil.php?tablet=66&username='+usuario+'" width="100%" height="100%" scrolling="no" align="left" style="border:none" frameBorder="0"></iframe>',
            closable:true
        });
  dato.show();
  mascara_x = new Ext.LoadMask(dato.el, {msg:"Cargando mapa movil"});
  mascara_x.show();

  document.getElementById('frame_movil').onload= function() {
                    mascara_x.hide();
                  };

        

break;
 

    

 
  




}

}

Heron.layout = {
    xtype: 'panel',

    /* Optional ExtJS Panel properties here, like "border", see ExtJS API docs. */
    id: 'hr-container-main',
    layout: 'border',
    border: false,


    /** Any classes in "items" and nested items are automatically instantiated (via "xtype") and added by ExtJS. */
    items: [
    
        {
            
            xtype: 'panel',
            // listeners: {
                        
                        // afterrender: function() {
                        // if(menus_[0]=='true')
                               // {
                                   // Ext.getCmp('modulostar').hide();
                               // }else{Ext.getCmp('modulostar').show()}
                        // if(menus_[1]=='true')
                               // {
                                   // Ext.getCmp('mf').hide();
                               // }else{Ext.getCmp('mf').show();}
                        // if(menus_[2]=='true')
                               // {
                                   // Ext.getCmp('mc').hide();
                               // }else{Ext.getCmp('mc').show();}
                        // if(menus_[3]=='true')
                               // {
                                   // Ext.getCmp('mm').hide();
                               // }else{Ext.getCmp('mm').show();}
                        // if(menus_[4]=='true')
                               // {
                                   // Ext.getCmp('mcl').hide();
                               // }else{ Ext.getCmp('mcl').show();}
                        // if(menus_[5]=='true')
                               // {
                                   // Ext.getCmp('administracion').hide();
                               // }else{Ext.getCmp('administracion').show();} 
                        // if(menus_[6])
                               // {            // Ext.getCmp('modulostar').hide();             // }else{}
                         // }
                        // },
                        
            id: 'hr-menu-left-container',
            layout: 'accordion',
            region: "west",
            
            width: 230,
                  height:550,
            collapsible: true,
            

            
            
                title: "<img border='0' src='gassur-logo.png' style='width: 60%; margin-right: 10%; margin-left:15%;' />",
                cls:'tit_panel',
            
            border: false,
            items: [
                   
                {
                    xtype: 'hr_layertreepanel',
                    border: true,
                              collapsed:true,

                    // The LayerTree tree nodes appearance: default is ugly ExtJS document icons
                    // Other values are 'none' (no icons). May be overridden in specific 'gx_layer' type config.
                    layerIcons : 'bylayertype',

                    // Allow moving layers
                    enableDD: true,

                    // Right-mouse popoup menu
                    contextMenu: [
                        {
                            xtype: 'hr_layernodemenulayerinfo'
                        },
                        {
                            xtype: 'hr_layernodemenuzoomextent'
                        },
                        {
                            xtype: 'hr_layernodemenustyle'
                        },
                        {
                            xtype: 'hr_layernodemenuopacityslider'
                        },
                              {
                            xtype: 'hr_layernodemenuzoomextent2'
                        }
                    ],
                    // Optional, use internal default if not set
                    hropts: Heron.options.layertree
                },

                {
                    xtype: 'hr_htmlpanel',
                    id: 'hr-info-west',
                    border: true,
                    html: Heron.options.info.html,
                    preventBodyReset: true,
                              collapsed:true,
                    title: 'Buscar',                    
                    items: [
                        {
                        xtype: 'panel',
                        title: 'Búsqueda por Dirección',
                        html:'<iframe name="busqueda_direccion" id="busqueda_direccion" width=232 frameborder=0 height=50 src="buscadireccion.php"></iframe>' },
                        {
                        xtype: 'panel',
                        title: 'Búsqueda',
                         tools : [{
                                                 
                            id : 'refresh',
                            //iconCls:'refresh',
                            handler : function(event, toolEl, panel) {
                                
                                 mascara_x = new Ext.LoadMask(panel.el, {msg:"Por favor espere..."});
                                 
                                 document.getElementById("busqueda_cuartel").src='busca_elemento.php?ii='+Math.random();
                                
                                 mascara_x.show();
                                 
                                    document.getElementById('busqueda_cuartel').onload= function() {
                                        mascara_x.hide();
                                    };
                                }
                        }],
                        html:'<iframe name="busqueda_cuartel" id="busqueda_cuartel" width=232 height=150 frameborder=0 src="busca_elemento.php"></iframe>' 

                      },
                       

                          
                           
                    ]
                },
                
                  {
                      
                    xtype: 'hr_htmlpanel',
                    id: 'hr-info-west2',                    
                    border: true,
                    html: Heron.options.info.html,
                              collapsed:true,
                              layout: 'accordion',
                    preventBodyReset: true,
                    title: 'Módulos',                    
                    items: [
                    {
                        xtype: 'panel',
                        title: 'Módulo STAR',
                        cls:'sub_panel_l',
                        id:'modulostar',
                        hidden:eval(menus_[0]),
                        collapsible: true,
                        collapsed:true,            
            
            
                        items: [
                                {

                                    title: 'Gestión Informes',
                                    collapsible: true,
                                    collapsed:true,
                                    cls:'sub_panel',
                                    html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px;"><img src="images.png" alt="vineta" width="6%" style="margin-bottom: -1px;margin-right: 4px;"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'g_i\')">Gestión Informes</a><br></p>'
                                },
                                {
                  
                  
                                    collapsible: true,
                                    collapsed: true,
                                    cls:'sub_panel',
                                    title: 'Mantenedores',                  
                                    html: '<div style="height: 150px; overflow: auto"><p style="font-family: Verdana; font-size: 11px;margin-left:5px;"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'ldp\')">Línea Distribución Primaria</a><br><img src="images.png" style="margin-bottom: -1px; margin-right: 4px;" alt="vineta" ><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'cg\')">Concesión Geo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'sg\')">Servicio Geo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'traz\')">Trazado</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'tra\')">Tramo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'tra_geo\')">Tramo Geo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'ot\')">Operación Trazado</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'pro\')">Proyecto</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'val\')">Válvula</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'emr\')">Estación Medición Regulación</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'hi\')">Hito</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'cru\')">Cruce</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'tp\')">Tipo Servicio</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'zt\')">Zona Tarifaria</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'gas_c\')">Gas Cargado</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'gas_r\')">Gas Recibido</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'gas_p\')">Gas Producido</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'gas_e\')">Gas Entregado</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'num_c\')">Número Cliente</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'con_p\')">Consumo Propio</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'ccg\')">Contrato Compra Gas</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'em_gdr\')">Emergencias</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'acc_gdr\')">Accidentes</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'itr_gdr\')">Intervencion terceros</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'cod_gdr\')">Codec</a> <br> <br> Actualización <br><br> <img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'edificios\')">Edificios</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'estacion_compresion\')">Estación Compresión</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'inmuebles_comerciales\')">Inmuebles Comerciales</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'medidor\')">Medidor</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'reclamos_gdr\')">Reclamos gdr</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'sistema_control_presion\')">Sistema Control Presión</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'sistema_deteccion_rotura\')">Sistema Detección Rotura</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'suministros_provisorios_gdr\')">Suministros Provisorios gdr</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'trampa\')">Trampa</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'zona_concesiones\')">Zona Concesiones</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'zona_servicio\')">Zona Servicio</a></p></div>'
                                                                    
                                },
                {
                  
                  
                  collapsible: true,
                  collapsed: true,
                  cls:'sub_panel',
                  title: 'Listas',                  
                  html: '<div style="height: 150px; overflow: auto"><p style="font-family: Verdana; font-size: 11px;margin-left:5px;"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'causas\')">Causas</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'clases_ubicacion\')">Clases ubicación</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'clasificacion_emergencia\')">Clasificación Emergencia</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'clasificacion_reclamo\')">Clasificación Reclamo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'comunas\')">Comunas</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'control_corrosion\')">Control Corrosión</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'danio_accidente\')">Daño Accidente</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'detalle_reclamo\')">Detalle Reclamo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'material_tuberia\')">Material Tuberia</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'material_tuberia_emergencia\')">Material Tuberia Emergencia</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'metodo_transmision_datos\')">Metodo Transmision Datos</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'notificacion_emergencia\')">Notificacion Emergencia</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'regiones\')">Regiones</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'rubro\')">Rubro</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'sistema_proteccion\')">Sistema Protección</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tiempo_suspension\')">Tiempo Suspensión</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_codec\')">Tipo Codec</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_combustible\')">Tipo Combustible</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_combustible_reclamo\')">Tipo Combustible Reclamo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_concesion\')">Tipo Concesión</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_configuracion_instalacion\')">Tipo Configuración Instalación</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_consumo\')">Tipo Consumo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_cruce\')">Tipo Cruce</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_emergencia\')">Tipo Emergencia</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_funcion\')">Tipo Función</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_gas\')">Tipo Gas</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_instalacion\')">Tipo Instalación</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_instalacion_compresion\')">Tipo Instalación Compresión</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_medicion\')">Tipo Medición</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_medidor\')">Tipo Medidor</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_numero_etapas\')">Tipo Número Etapas</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_proyecto\')">Tipo Proyecto</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_reclamo\')">Tipo Reclamo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_sistema_control\')">Tipo Sistema Control</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_sistema_control_presion\')">Tipo Sistema Control Presión</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_sistema_deteccion_rotura\')">Tipo Sistema Deteccion Rotura</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_trampa\')">Tipo Trampa</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_transmision_datos\')">Tipo Transmisión Datos</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_usuario\')">Tipo Usuario</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'tipo_valvula\')">Tipo Valvula</a></p></div>'
                                  
                }
                                ]
                        
                    },
                    
                    {
                        xtype: 'panel',
                        title: 'Módulo Fuga',
                        hidden:eval(menus_[1]),
                        id:'mf',
                        cls:'sub_panel_l',
                        collapsible: true,      
                        collapsed:true,
                        html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; "onclick="asi2(\'mf\')">Fuga</a><br></p>'                    
                    },
                    
                    {
                        xtype: 'panel',
                        title: 'Módulo Corte',
                        hidden:eval(menus_[2]),
                        id:'mc',
                        cls:'sub_panel_l',                      
                        collapsible: true,  
                        collapsed:true,                     
                        
            items: [
                {

                  html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'clientes_cuartel\')">Clientes Cuartel</a></p>' 
                  
                           


                 },
              
                ]


          },
                    
                    {
                        xtype: 'panel',
                        title: 'Módulo Móvil',
                        id:'mm',
                        hidden:eval(menus_[3]),
                        cls:'sub_panel_l',
                        collapsed:true,
                        collapsible: true,                      
                        html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'mov\')">Movil</a><br></p>'                 
                    },
                    
                    {
                        xtype: 'panel',
                        title: 'Módulo Cliente',
                        hidden:eval(menus_[4]),
                        id:'mcl',
                        cls:'sub_panel_l',
                        collapsed:true,
                        collapsible: true,                      
                        html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'mcl\')">Clientes</a><br></p>'                  
                    },
                       
                    ]
                },
                
                {
                      
                    xtype: 'panel',         
                    collapsed:true, 
                    id:'administracion',
                    hidden:eval(menus_[5]),
                    title: 'Administración',
                   html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'usuario\')">Usuario</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'perfil\')">Perfil</a><br></p>'
                
                },

                {
                    xtype: 'hr_bookmarkspanel',
                    id: 'hr-bookmarks',
                    title:'Marcadores',
                    collapsed:true,
                    border: true,
                    /** The map contexts to show links for in the BookmarksPanel. */
                    hropts: Heron.options.bookmarks
                }
            ]
        },
        {
            
            
            
            xtype:'tabpanel',
            id: 'tabs',
            region:'center',
            deferredRender:false,
            activeTab:0,
            minTabWidth: 115,
            tabWidth:135,
            enableTabScroll:true,
            
            items: [
                {
                    xtype: 'hr_mappanel',
                    id: 'hr-map',
                    iconCls:'planos',
                    title: 'Mapa',
                    region: 'center',
                    collapsible: false,
                    border: false,
                    hropts: Heron.options.map
                }
            ]
                  
            
          
        }, new Ext.Panel({ // raw
                    region:'south',
                    height:35,
                    html: "<span style='font-weight: bold; padding-top: 3px;' id='menu_usuario'><input style='padding: 3px 4px 3px 4px; margin-right: 1%; float: right; background-color: #1248A2; color: #FBFCFD; font-weight: bold; border:none; border-radius: 10%;' type='button' name='Salir' id='Salir' value='Salir' onclick='confrm_ext()'/><label style='padding:4px 0 0 0;float: right; padding-right: 2%;'>Bienvenid@ : "+name_usu+"</label></span>", 
                    style: {
                    borderTop: '1px solid #157fcc',                 
                        }
                })
        // {
            // xtype: 'panel',

            // id: 'hr-menu-right-container',
            // layout: 'accordion',
            // region: "east",
            // width: 440,
            // collapsible: true,
            // split: true,
            // border: true,
            // items: [
            // {
                // xtype:'panel',
                // title:'Informe limpieza rápido',
                // id:'panel-info',
                // border:false,
                 // layout: {
                     // align: 'center',
                     // type: 'vbox'
                     // },
                // flex:1,
                ////html:"<iframe id='marco' name='marco' style='    width: 100%;    height: 147%;    margin-top: -134px;    -webkit-transform: scale(0.7);    margin-left: -90px;' frameborder=0 src=''></iframe>"
                // html:"<iframe id='marco' name='marco' style='    width: 100%; height:100%; zoom:80%' frameborder=0 src=''></iframe>"
        
        // },
                // {
                // xtype:'panel',
                // title:'Informe limpieza completo',
                // id:'panel-info2',
                // border:false,
                // html:"<iframe id='marco2' name='marco2' style='    width: 100%; height:100%; zoom:80%' frameborder=0 src=''></iframe>"
            // },
                // {
                // xtype:'panel',
                // title:'Ingreso de anomalía inspección televisiva',
                // id:'panel-info3',
                // border:false,
                // html:"<iframe id='marco3' name='marco3' style='    width: 100%; height:100%; zoom:80%' frameborder=0 src=''></iframe>"
            // },
                // {
                // xtype:'panel',
                // title:'Listado anomalías inspección televisiva',
                // id:'panel-info4',
                // border:false,
                // html:"<iframe id='marco4' name='marco4' style='    width: 100%; height:100%; zoom:80%' frameborder=0 src=''></iframe>"
            // },
                // {
                    // xtype: 'hr_layerlegendpanel',
                    // id: 'hr-layerlegend-panel',
                    // border: true,
                    // defaults: {
                        // useScaleParameter: true,
                        // baseParams: {
                            // FORMAT: 'image/png'
                        // }
                    // },

                    // /* Should Legend Image URL be fetched from WMS Capabilities? */
                    // legendFromCapabilities: false,
                     // /* Should Legend Image URL be fetched from WMS Capabilities for these URL patterns? */
                    // legendFromCapabilitiesPatterns: ['dino', 'arcgis'],
                    // hropts: {
                       //// Preload Legends on initial startup
                       //// Will fire WMS GetLegendGraphic's for WMS Legends
                       //// Otherwise Legends will be loaded only when Layer
                       //// becomes visible. Default: false
                        // prefetchLegends: false
                    // }
                // }
            // ]
        // }
    ]
};
        