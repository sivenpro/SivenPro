Ext.namespace("Heron");
Ext.namespace("Heron.options");
Ext.namespace("Heron.options.layertree");

/**
 * Defines the entire layout of a Heron webapp using ExtJS-style.
 *
 * The layout specifies a hierarchy of ExtJS (Panel) components.
 * Each component is either a container of components (xtype: 'panel', i.e. an ExtJS Panel)
 * or a specific leaf component like a map panel (xtype: 'hr_mappanel') or simple HTML
 * panel (xtype: 'hr_htmlpanel'). Each component has a 'xtype' string and component-specific options.
 * The 'xtype' defines the component widget class .
 * For a container-type (xtype: 'panel') the options should include a 'layout' (like 'border' or 'card',
 * and an array of 'items' with each element being a component (another container or a leaf widget component).
 *
 * In order to distinguish ExtJS-specific config options from those that are Heron-specific,
 * the later are prefixed with "hr". These are defined outside this file to allow quick custimization.
 *
 * Specific config options for ExtJS components can be found in the API docs:
 * http://docs.sencha.com/ext-js/3-4/#!/api
 *
 * This is the core config, mainly the layout of a Heron browser application for all examples.
 * Many of the options refer to Javascript variables that are defined within
 * the DefaultOptions*.js. In particular Layers and specific widgets. This has been done
 * to create a reusable config for all examples. Each example may also add a 3rd refinement
 * using a local Config.js file. The names of the config files and variables like Heron.options.bookmarks
 * don't matter. They are just a convenience as to break up a large configuration into
 * the more stable common parts and the more variable parts. As it is all JSON/JavaScript, we
 * can use variables, in our case namespaced, like "Heron.options.bookmarks" as to avoid conflicts in
 * the global JS namespace. (If we would have XML configs we would have to resort to xlinks).
 *
 **/
 
   var tab;
   if(perfil_usu !="")
    {
	var acces = acces_s;
	var menus_ = acces.split(","); 
	  console.log(perfil_usu+"||||"+menus_);
	   
   }
   
 	var tienda = new Ext.data.JsonStore({
    id:'id',
    //totalProperty:'totalcount',
    root:'data',
	autoLoad:true,
	
    url: '../../../../intranet/consultas/lista_zonas.php',  
    fields:[{ name:'id', type:'string' },
            { name:'zona' ,type:'string' }
            ]

                                                       
});

		var store_analista = new Ext.data.JsonStore({
    id:'id',
    //totalProperty:'totalcount',
    root:'data',
	autoLoad:true,
	
    url: '../../../../intranet/consultas/lista_analistas.php',  
    fields:[{ name:'id' },
            { name:'nombre' ,type:'string' }
            ]

                                                       
});

	var store_subcuencas = new Ext.data.JsonStore({
    id:'id',
    //totalProperty:'totalcount',
    root:'data',
	autoLoad:true,
	
    url: '../../../../intranet/consultas/lista_subcuencas.php',  
    fields:[{ name:'id' },
            { name:'zona' ,type:'string' }
            ]

                                                       
});

 function confrm_ext(){
	 //location.reload('../login/logout.php');
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
            html: '<iframe src="../modulos/star/mantenedores/Accidentes_gdr/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
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

case 'usuario':
tab.add({
            title: 'Usuario' ,
            iconCls: 'reportes',
            html: '<iframe src="../modulos/otros/usuarios/" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>',
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
 

	

 
  formCategoriesEssbio = new Ext.FormPanel({
       
        frame : true,
        width : 300,
        height: 400,
		    buttonAlign : 'center',
          		
      
        items : [{
              xtype: 'fieldset',
              title: ' Responsable',
              width: 250,
             // layout: {
             //     type: 'table',
             //     columns: 1
             // },
               items : [{
               	fieldLabel : 'Analista',
                name : 'analista',
            
               xtype: 'checkboxcombo',
               width : 120,
			   valueField: 'id',  
			   displayField: 'nombre',  			 
			
               store: store_analista,
			 //  value: store_analista.data.first().data.nombre,
               autoLoad: true,
			//   forceSelection: true,
     
        allowBlank: true,
        triggerAction: 'all',
        mode: 'local'
               }
				]
          	},
          	{
              xtype: 'fieldset',
              title: 'Ubicación',
              width: 250,
           // layout: {
           //     type: 'table',
           //     columns: 2
           // },
               items : [{
               	fieldLabel:'Zona / Contrato',
                name : 'zona',
               allowBlank:true,
               xtype: 'checkboxcombo',
               width : 120,
			    multiSelect: true, 
               store:tienda,
			      valueField: 'zona',  
			   displayField: 'zona',  	
               autoLoad: true,
			  //  value: tienda.data.first().data.zona,
			//  forceSelection: true,
     
      
        triggerAction: 'all',
        mode: 'local'
               },
               {
               	fieldLabel:'Cuartel',
                name : 'Cuartel',
               allowBlank:true,
               xtype: 'checkboxcombo',
               width : 120,
               store:store_subcuencas,
			      valueField: 'zona',  
				//   multiSelect: true, 
			   displayField: 'zona',  	
               autoLoad: true,
			    typeAhead: true,
			 //    value: store_subcuencas.data.first().data.zona,
			//  forceSelection: true,
     
      
        triggerAction: 'all',
        mode: 'local'
               }
				]
          	},
			{
              xtype: 'fieldset',
              title: 'Tipo de tramos',
              width: 250,
           // layout: {
           //     type: 'table',
           //     columns: 2
           // },
               items : [{
               	fieldLabel:'Tipo',
                name : 'tipo',
               allowBlank:true,
               xtype: 'combo',
               width : 120,
			    multiSelect: true, 
               store:['Ambos','Superiores a 500000','Inferiores a 500000'],
			    //  valueField: 'zona',  
			 //  displayField: 'zona',  	
               autoLoad: true,
			  //  value: tienda.data.first().data.zona,
			//  forceSelection: true,
     
      
        triggerAction: 'all',
        mode: 'local'
               },{
               	fieldLabel:'Limpieza',
                name : 'fechas',
               allowBlank:true,
               xtype: 'combo',
               width : 120,
			    multiSelect: true, 
               store:['Ambos','Lavados','Pendientes'],
			    //  valueField: 'zona',  
			 //  displayField: 'zona',  	
               autoLoad: true,
			  //  value: tienda.data.first().data.zona,
			  forceSelection: true,
     
      
        triggerAction: 'all',
        mode: 'local'
               }
              
				]
          	},

          	{
              xtype: 'fieldset',
              title: 'Periodo',
              width: 250,
              //layout: {
                  //type: 'table',
                  //columns: 2
              //},
               items : [
            
				{
               fieldLabel : 'Fecha inicio',
               labelAlign: 'top',
                name : 'fecha_inicio',
                allowBlank:true,
				format: 'd/m/Y',
                xtype: 'datefield',
                renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                width : 120
            },  {
                fieldLabel : 'Fecha fin',
                name : 'fecha_fin',
				format: 'd/m/Y',
                allowBlank:true,
                xtype: 'datefield',
                renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                width : 120
            }]
          	}]
				
    });

       var dialogo_essbio = new Ext.Window({
                title:'Generar archivo SHP filtrado'
				 ,modal: true
				,x:3
				,y:275
                ,width       : 278
                ,height      : 425
                ,plain       : true
				
                ,items: [formCategoriesEssbio]
				  ,buttons: [{
                    text     : 'Generar',
                    disabled : false,
					 handler  : function(){
					
				
					if (formCategoriesEssbio.getForm().findField('fecha_inicio').getValue()!="")
					a=formCategoriesEssbio.getForm().findField('fecha_inicio').getValue().format("Y-m-d");
					else
					a='';
					if (formCategoriesEssbio.getForm().findField('fecha_fin').getValue()!="")
					b=formCategoriesEssbio.getForm().findField('fecha_fin').getValue().format("Y-m-d");
					else
					b='';
				
				
				
				
				
					c=formCategoriesEssbio.getForm().findField('subcuenca').getValue();
					d=formCategoriesEssbio.getForm().findField('zona').getValue();
					e=formCategoriesEssbio.getForm().findField('analista').getValue();
					f=formCategoriesEssbio.getForm().findField('tipo').getRawValue();
					g=formCategoriesEssbio.getForm().findField('fechas').getRawValue();
				
					window.location.href='../../../gearth2/sin/exportar_formato_essbio.php?idsv='+c+'&desde='+a+'&hasta='+b+'&zona='+d+'&analista='+e+"&tipo="+f+"&fechas="+g;
					//dialogo_essbio.hide();
					
					//   dialogo_essbio.hide();
                    }
                },{
                    text     : 'Cerrar',
              handler  : function(){
                        dialogo_essbio.hide();
                    }
                }]
            });
dialogo_essbio.show();
 break;

case 'r_l':
	tab.add({
              title: 'Reporte Limpieza rápido' ,
            iconCls: 'reportes',
            html: '<iframe src="../../../../machform/manage_entries_plano.php?id=41047" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>'
                    ,
            closable:true
        }).show();

break;

case 'r_l_2':
	tab.add({
              title: 'Reporte Limpieza completo' ,
            iconCls: 'reportes',
            html: '<iframe src="../../../../machform/manage_entries_plano.php?id=26010" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>'
                    ,
            closable:true
        }).show();

break;

case 'r_i':
	tab.add({
              title: 'Reporte Inspección' ,
            iconCls: 'reportes',
            html: '<iframe src="../../../../machform/manage_entries_plano.php?id=39661" width="100%" height="100%" scrolling="auto" align="left" style="border:none"></iframe>'
                    ,
            closable:true
        }).show();

break;


case 'g_s_i':

 formCategories3 = new Ext.FormPanel({
        frame : true,
        width : 260,   
        height: 360,
		scrollable:'true',
		    buttonAlign : 'center',
          	  labelAlign: 'left',
           // labelStyle: 'font-weight:bold;',
            labelWidth: 1,	
      
        items : [
		
              {
		layout:'hbox',			  
			 // fieldLabel : 'identificas',
                name : 'identificas',
				
                allowBlank:false,
                xtype: 'textarea',
                width : 205,
				height:265,
				
             
				}]
				
    });
	
	
	
 var win = new Ext.Window({
                title:'Generar shape según lista de tramos'
				 ,modal: true
				,x:3
				,y:65
                ,width       : 240
                ,height      : 350
                ,plain       : true
			
				
                ,items: [formCategories3]
				  ,buttons: [{
                    text     : 'Generar',
                    disabled : false,
					 handler  : function(){
					
					if (formCategories3.getForm().findField('identificas').getValue()=="" ){
							formCategories3.getForm().findField('identificas').markInvalid('');
							
					}
					else
					{
					var identificas='';
					var i;
					c=formCategories3.getForm().findField('identificas').getValue();
					entered = c;
					lines = entered.split(/\n/);
					for(i=0;i<lines.length;i++) {
							if (lines[i]!="")
								identificas=identificas+','+lines[i];
					}
					
					identificas=identificas.substring(1, identificas.length);
					
					
			window.location.href='../../../../gearth2/sin/exportar_formato_essbio_temporal.php?identifica='+identificas;

					
					
				/*	   var formm= new Ext.form.FormPanel( {
                    renderTo: Ext.getBody(),
                      method: 'POST',
					 url: '../../../../gearth2/sin/exportar_formato_essbio_temporal.php'
                });
				
				
				 var hiddenForm = new Ext.FormPanel({
            id:'hiddenForm',
            region: 'south',
            method: 'POST',
			 url: '../../../../gearth2/sin/exportar_formato_essbio_temporal.php',
            height: 0,
            standardSubmit: true,
            hidden:true,
            items:[
                {xtype:'hidden', name:'identifica', value:identificas}
              
            
            ],
        });

		
		win.add(hiddenForm);
				
				hiddenForm.getForm().submit();
				console.log(formm);
				*/
				
					/*Ext.Ajax.request({
						   url: '../../../../gearth2/sin/exportar_formato_essbio_temporal.php',
						    method: 'POST',      
						    params: {
        identifica: identificas
		},
		  success: function(r){
			//  console.log('exportar_essbio_identificas');
			 var resp    = Ext.decode(r.responseText); 
    Ext.DomHelper.append(Ext.getBody(), { 
      tag:          'iframe', 
	  
      frameBorder:  0, 
      width:        0, 
      height:       0, 
      css:          'display:none;visibility:hidden;height:0px;', 
      src:          resp.downloadUrl 
    }); 
		  },                                    
    failure: function(){alert('Ocurrió un error al generar archivo shape');}
    			
						});*/
					win.hide();
					}
					//   win.hide();
                    }
                },{
                    text     : 'Cerrar',
              handler  : function(){
                        win.hide();
                    }
                }]
            });
			 
    
            win.show();

			break;
			
case 't_p_i':
//Ext.MessageBox.getDialog().body.child('input').dom.type='password';
 // var msgbox= Ext.MessageBox.prompt('Ingrese subcuenca', 'Por favor, ingrese la subcuenca para generar el archivo comprimido:', showResultText2222a);
 
     formCategories3 = new Ext.FormPanel({
        frame : true,
        width : 260,
        height: 360,
		    scrollable: 'true',
		    buttonAlign : 'center',
          	  labelAlign: 'left',
           // labelStyle: 'font-weight:bold;',
            labelWidth: 1,	
      
        items : [
		
              {
		layout:'hbox',			  
			 // fieldLabel : 'identificas',
                name : 'identificas',
				
                allowBlank:false,
                xtype: 'textarea',
                width : 205,
				        height:265,
				
             
				}]
				
    });
	
 var win = new Ext.Window({
                title:'Agregar tramos pendientes Inspección'
				 ,modal: true
				,x:3
				,y:65
                ,width       : 240
                ,height      : 350
                ,plain       : true
			
				
                ,items: [formCategories3]
				  ,buttons: [{
                    text     : 'Agregar',
                    disabled : false,
					 handler  : function(){
					
					if (formCategories3.getForm().findField('identificas').getValue()=="" ){
							formCategories3.getForm().findField('identificas').markInvalid('');
							
					}
					else
					{
					var identificas='';
					var i;
					c=formCategories3.getForm().findField('identificas').getValue();
					entered = c;
					lines = entered.split(/\n/);
					for(i=0;i<lines.length;i++) {
							if (lines[i]!="")
								identificas=identificas+','+lines[i];
					}
					
					identificas=identificas.substring(1, identificas.length);
					
					Ext.Ajax.request({
						   url: '../../../../intranet/agrega_pendiente.php',
						    method: 'POST',      
						    params: {
        identifica: identificas
		},
		  success: function(){alert('Se han definido correctamente '+(i)+' tramos pendientes.');},                                    
    failure: function(){alert('Ocurrió un error al definir tramos pendientes.');}
    			
						});
					win.hide();
					}
					//   win.hide();
                    }
                },{
                    text     : 'Cerrar',
              handler  : function(){
                        win.hide();
                    }
                }]
            });
			 
    
            win.show();
			
 
 break;

 
 
  case 'mantenedor_subcuencas':
 tab.add({
            title: 'Mantenedor Subcuencas' ,
            iconCls: 'reportes',
            html: '<iframe src="../../../../gearth/sin/mantenedor/" width="100%" height="100%" scrolling="no" align="left" style="border:none"></iframe>'
                    ,
            closable:true
        }).show();
break;

 case 't_p_l':
//Ext.MessageBox.getDialog().body.child('input').dom.type='password';
 // var msgbox= Ext.MessageBox.prompt('Ingrese subcuenca', 'Por favor, ingrese la subcuenca para generar el archivo comprimido:', showResultText2222a);
 
     formCategories3 = new Ext.FormPanel({
        frame : true,
        width : 260,
        height: 360,
		scrollable:'true',
		    buttonAlign : 'center',
          	  labelAlign: 'left',
           // labelStyle: 'font-weight:bold;',
            labelWidth: 1,	
      
        items : [
		
              {
		layout:'hbox',			  
			 // fieldLabel : 'identificas',
                name : 'identificas',
				
                allowBlank:false,
                xtype: 'textarea',
                width : 205,
				height:265,
				
             
				}]
				
    });
	
 var win = new Ext.Window({
                title:'Agregar tramos pendientes Limpieza'
				 ,modal: true
				,x:3
				,y:65
                ,width       : 240
                ,height      : 350
                ,plain       : true
			
				
                ,items: [formCategories3]
				  ,buttons: [{
                    text     : 'Agregar',
                    disabled : false,
					 handler  : function(){
					
					if (formCategories3.getForm().findField('identificas').getValue()=="" ){
							formCategories3.getForm().findField('identificas').markInvalid('');
							
					}
					else
					{
					var identificas='';
					var i;
					c=formCategories3.getForm().findField('identificas').getValue();
					entered = c;
					lines = entered.split(/\n/);
					for(i=0;i<lines.length;i++) {
							if (lines[i]!="")
								identificas=identificas+','+lines[i];
					}
					
					identificas=identificas.substring(1, identificas.length);
					
					Ext.Ajax.request({
						   url: '../../../../intranet/agrega_pendiente_limpieza.php',
						    method: 'POST',      
						    params: {
        identifica: identificas
		},
		  success: function(){alert('Se han definido correctamente '+(i)+' tramos pendientes.');},                                    
    failure: function(){alert('Ocurrió un error al definir tramos pendientes.');}
    			
						});
					win.hide();
					}
					//   win.hide();
                    }
                },{
                    text     : 'Cerrar',
              handler  : function(){
                        win.hide();
                    }
                }]
            });
			 
    
            win.show();
			
 
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
							   // { 		   // Ext.getCmp('modulostar').hide(); 			   // }else{}
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
                        title: 'Búsqueda por Cuarteles',
						 tools : [{
												 
							id : 'refresh',
							//iconCls:'refresh',
							handler : function(event, toolEl, panel) {
								
								 mascara_x = new Ext.LoadMask(panel.el, {msg:"Por favor espere..."});
								 
								 document.getElementById("busqueda_cuartel").src='buscacuarteles.php?ii='+Math.random();
								
								 mascara_x.show();
								 
									document.getElementById('busqueda_cuartel').onload= function() {
										mascara_x.hide();
									};
								}
						}],
                        html:'<iframe name="busqueda_cuartel" id="busqueda_cuartel" width=232 height=50 frameborder=0 src="buscacuarteles.php"></iframe>' },
                        {
                        xtype: 'panel',			
                        title: 'Búsqueda por Tramo',
                        html:'<iframe id="busqueda_tramo" id="busqueda_tramo" width=232 frameborder=0 height=150 src="busca_elemento.php"></iframe>' },
						   {
                        xtype: 'panel',			
                        title: 'Búsqueda por Tramos',
                        html:'<iframe id="busqueda_tramo_tags" id="busqueda_tramo_tags" width=232 frameborder=0 height=550 src="buscatramos-tags.php"></iframe>' }
						   
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
									html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px;"><img src="images.png" alt="vineta" width="-6%" style="margin-bottom: -1px;margin-right: 4px;"><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'g_i\')">Gestión Informes</a><br></p>'
								},
								{
                  
                  
									collapsible: true,
									collapsed: true,
									cls:'sub_panel',
									title: 'Mantenedores',                  
									html: '<div style="height: 150px; overflow: auto"><p style="font-family: Verdana; font-size: 11px;margin-left:5px;><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'ldp\')">Línea Distribución Primaria</a><br><img src="images.png" style="margin-bottom: -1px; margin-right: 4px;" alt="vineta" ><a href="#" style="text-decoration:none;margin-bottom: -4px;" onclick="asi2(\'cg\')">Concesión Geo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'sg\')">Servicio Geo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'traz\')">Trazado</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'tra\')">Tramo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'tra_geo\')">Tramo Geo</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'ot\')">Operación Trazado</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'pro\')">Proyecto</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'val\')">Válvula</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'emr\')">Estación Medición Regulación</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'hi\')">Hito</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'cru\')">Cruce</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'tp\')">Tipo Servicio</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'zt\')">Zona Tarifaria</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'gas_c\')">Gas Cargado</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'gas_r\')">Gas Recibido</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'gas_p\')">Gas Producido</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'gas_e\')">Gas Entregado</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'num_c\')">Número Cliente</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'con_p\')">Consumo Propio</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'ccg\')">Contrato Compra Gas</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'em_gdr\')">Emergencias</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'acc_gdr\')">Accidentes</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'itr_gdr\')">Intervencion terceros</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'cod_gdr\')">Codec</a></p></div>'
									 								
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
						html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; "onclick="asi2(\'g_i\')">Gestión Informes</a><br></p>'					
					},
					
					{
						xtype: 'panel',
						title: 'Módulo Corte',
						hidden:eval(menus_[2]),
						id:'mc',
						cls:'sub_panel_l',						
						collapsible: true,	
						collapsed:true,						
						html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'g_i\')">Gestión Informes</a><br></p>'					
					},
					
					{
						xtype: 'panel',
						title: 'Módulo Móvil',
						id:'mm',
						hidden:eval(menus_[3]),
						cls:'sub_panel_l',
						collapsed:true,
						collapsible: true,						
						html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'g_i\')">Gestión Informes</a><br></p>'					
					},
					
					{
						xtype: 'panel',
						title: 'Módulo Cliente',
						hidden:eval(menus_[4]),
						id:'mcl',
						cls:'sub_panel_l',
						collapsed:true,
						collapsible: true,						
						html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'g_i\')">Gestión Informes</a><br></p>'					
					},
					   
                    ]
                },
				
				{
					  
                    xtype: 'panel',         
					collapsed:true, 
					id:'administracion',
					hidden:eval(menus_[5]),
                    title: 'Administración',
                   html: '<p style="font-family: Verdana; font-size: 11px;margin-left:5px"><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'usuario\')">Usuario</a><br><img src="images.png" alt="vineta" style="margin-bottom: -1px; margin-right: 4px;" width="-6%"><a href="#" style="text-decoration:none;margin-bottom: -4px; " onclick="asi2(\'perfil\')">Perfil</a><br></p>'
				
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
					html: "<div style='font-weight: bold; padding-top: 3px;' id='menu_usuario'><input style='padding: 3px 4px 3px 4px; margin-right: 1%; float: right; background-color: #1248A2; color: #FBFCFD; font-weight: bold; border:none; border-radius: 10%;' type='button' name='Salir' id='Salir' value='Salir' onclick='confrm_ext()'/><label style='padding:4px 0 0 0;float: right; padding-right: 2%;'>Bienvenid@ : "+name_usu+"</label></div>", 
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
