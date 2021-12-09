
/**
 * D_Iefines s_tettings f_aor t_lhe H_oeron App layout wihtin Layout.js.
 *
 * The layout specifies a hierarchy of ExtJS (Panel) and GeoExt and Heron MC components.
 * For convenience specific settings within this layout are defined here
 * for structuring and reuse purposes.
 *
 **/

OpenLayers.Util.onImageLoadErrorColor = "transparent";
OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
Ext.BLANK_IMAGE_URL = 'http://cdnjs.cloudflare.com/ajax/libs/extjs/3.4.1-1/resources/images/default/s.gif';

var url=document.URL.split('/')[2];
urlgeos=url.split(':');
var refresh2;
var wfs;
var idsv='';
refresh2 = new OpenLayers.Strategy.Refresh({force: true, active: true, params: { 'idsv':idsv,'r': Math.random()}});
refresh3 = new OpenLayers.Strategy.Refresh({force: true, active: true, params: { 'idsv':idsv,'r': Math.random()}});
refresh4 = new OpenLayers.Strategy.Refresh({force: true, active: true, params: { 'idsv':idsv,'r': Math.random()}});
refresh5 = new OpenLayers.Strategy.Refresh({force: true, active: true, params: { 'idsv':idsv,'r': Math.random()}});
refresh2_= new OpenLayers.Strategy.Refresh({force: true, active: true, params: { 'idsv':idsv,'r': Math.random()}});
refresh3_= new OpenLayers.Strategy.Refresh({force: true, active: true, params: { 'idsv':idsv,'r': Math.random()}});


var gg = new OpenLayers.Projection("EPSG:4326");
var sm = new OpenLayers.Projection("EPSG:900913");

function guardo_ok(e) {
    console.log('guardo ok');
	console.log(e);
}


 var estilo_edicion = new OpenLayers.StyleMap({
                "default": new OpenLayers.Style(null, {
                    rules: [
                        new OpenLayers.Rule({
                            symbolizer: {
                                "Point": {
                                    pointRadius: 5,
                                    graphicName: "square",
                                    fillColor: "white",
                                    fillOpacity: 0.25,
                                    strokeWidth: 1,
                                    strokeOpacity: 1,
                                    strokeColor: "#333333"
                                },
                                "Line": {
                                    strokeWidth: 3,
                                    strokeOpacity: 1,
                                    strokeColor: "#666666"
                                }
                            }
                        })
                    ]
                }),
                "select": new OpenLayers.Style({
                    strokeColor: "#00ccff",
                    strokeWidth: 4
                }),
                "temporary": new OpenLayers.Style(null, {
                    rules: [
                        new OpenLayers.Rule({
                            symbolizer: {
                                "Point": {
                                    pointRadius: 5,
                                    graphicName: "square",
                                    fillColor: "white",
                                    fillOpacity: 0.25,
                                    strokeWidth: 1,
                                    strokeOpacity: 1,
                                    strokeColor: "#333333"
                                },
                                "Line": {
                                    strokeWidth: 3,
                                    strokeOpacity: 1,
                                    strokeColor: "#00ccff"
                                }
                            }
                        })
                    ]
                })
            });
			
			
			  var saveStrategy = new OpenLayers.Strategy.Save();
			 // saveStrategy.events.register('success', null, 'guardo_ok');
			
			  
			  
			
function selecciona_elemento(elemento){
	
	//var evt;
	
	//evt.features[0].data=elemento.attributes;
	
	ventana=Ext.getCmp('panel-info');
		ventana2=Ext.getCmp('panel-info2');
		ventana3=Ext.getCmp('panel-info3');
		ventana4=Ext.getCmp('panel-info4');
	
										
		
      
		
        // Features available: popup at geo-location
        //this.location = this.map.getLonLatFromPixel(evt.xy);
		//console.log(evt.features[0].data);
		var da_form = elemento.attributes.Snippet;
		var tipo_form = da_form.split("|");
	    var tipo_form2 = tipo_form[0].split("#");
		
		var orden=elemento.attributes.name;
		
		var datos = elemento.attributes.address;
		var st = datos.split("|");
		var subcuenca=st[0];
		var material=st[1];
		var diametro=st[2];
		var longitud=st[2];
		
		
		//console.log(st);

		identifica=elemento.attributes.description;

		 mascara = new Ext.LoadMask(ventana.el, {msg:"Por favor espere..."});
		 mascara2 = new Ext.LoadMask(ventana2.el, {msg:"Por favor espere..."});
		 mascara3 = new Ext.LoadMask(ventana3.el, {msg:"Por favor espere..."});
		 mascara4 = new Ext.LoadMask(ventana4.el, {msg:"Por favor espere..."});
		

		

	    console.log(identifica);
		//http://servidor/machform/view.php?id=39661&element_3=5096&element_28=1095&ii=84.97075964104533
		//http://servidor/machform/manage_entries_plano.php?id=39661&iff=2&filtro=5096

		//document.getElementById("marco2").style='        margin-top: -54px;    -webkit-transform: scale(0.8);    margin-left: -40px;';			

		 
		if (tipo_form[1] == 0){
			
		//	document.getElementById("marco").style=' width: 149%;    height: 147%;    margin-top: -163px;    -webkit-transform: scale(0.7);    margin-left: -90px';			

			document.getElementById("marco").src="../../../../machform/view.php?id=41047&element_3="+identifica+"&element_13="+subcuenca+"&element_5="+longitud+"&ii="+Math.random();
//http://servidor/machform/view.php?id=26010&element_8=38619&element_9=2&element_10=175&element_39=0048&element_7=90&ii=54.171037331072355
		}
		if (tipo_form[1] == 2 || tipo_form[1] == 1){
			
		//	document.getElementById("marco").style='     width: 149%;    height: 127%;    margin-top: -66px;    transform: scale(0.85);    margin-left: -57px;';			
			document.getElementById("marco").src="../../../../machform/view_entry_plano.php?form_id=41047&entry_id="+tipo_form2[1]+"&iff=2";
		

		}
			
		//evt.features[0].style.strokeColor="#ffffff";
		//evt.features[0].style.strokeWidth=2;
		//evt.features[0].style.strokeDashstyle= 'dot';
		//evt.features[0].layer.redraw();
		//ventana.show();
	    mascara.show();
		mascara2.show();
		mascara3.show();
		mascara4.show();
		
		
		document.getElementById('marco').onload= function() {
			
		     mascara.hide();
			 mascara2.show();
		     mascara3.show();
		     mascara4.show();
			 if (tipo_form[1] == 0){
							document.getElementById("marco2").src="../../../../machform/view.php?id=26010&element_8="+identifica+"&element_9="+orden+"&element_10="+diametro+"&element_39="+subcuenca+"&element_7="+longitud+"&ii="+Math.random();

			}
			
			
			if (tipo_form[1] == 2 || tipo_form[1] == 1){
					document.getElementById("marco2").src="../../../../machform/view_entry_plano.php?form_id=26010&entry_id="+tipo_form2[0]+"&iff=2";
			}
			
		
		    document.getElementById("marco3").src="../../../../machform/view.php?id=39661&element_3="+identifica+"&element_28="+subcuenca+"&ii="+Math.random();
			document.getElementById("marco4").src="../../../../machform/manage_entries_plano.php?id=39661&iff=2&filtro="+identifica+"&ii="+Math.random();
			
		
			
			
		};
		document.getElementById('marco2').onload= function() {
			mascara2.hide();
		};
		document.getElementById('marco3').onload= function() {
			mascara3.hide();
		};
		document.getElementById('marco4').onload= function() {
			mascara4.hide();
		};
		
        //this.show();
}


		function moveEnd(event) {
//eliminaVentanas();
    // if(editor)
    // editor.editLayer.removeAllFeatures();
    UpdateKmlLayer();
	
}


	function UpdateKmlLayer() {
  
	
	refresh2.refresh();
	refresh3.refresh();
	refresh2_.refresh();
	refresh3_.refresh();
	refresh4.refresh();
	refresh5.refresh();
	
	

	

	};

        function onFeatureSelect(event) {
	
		
            var feature = event.feature;
			
		
	
          
            var popup = new OpenLayers.Popup.FramedCloud("chicken", 
                feature.geometry.getBounds().getCenterLonLat(),
                new OpenLayers.Size(100,100),
                "<div align='center'><b>"+feature.attributes.name + "</b></div>" + feature.attributes.description,
                null, true, onFeatureUnselect
            );
			popup.panMapIfOutOfView=true;
			//popup.closeOnMove=true;
			eliminaVentanas();
            feature.popup = popup;
            map.addPopup(popup);
			
			selectedFeature = feature;
			/*	
				setTimeout(function(){
				var existe=$("[name='existe']:checked").val();
   var embancada=$("[name='embancada']:checked").val();
	 var escalines=$("[name='escalines']:checked").val();
	if (embancada=="SI")
		$("[name='embancada']").eq(0).attr("checked",true)
		else
		$("[name='embancada']").eq(1).attr("checked",true)
    if (escalines=="BUENO")
		$("[name='escalines']").eq(0).attr("checked",true)
		else
		$("[name='escalines']").eq(1).attr("checked",true)
	  if (existe=="SI")
		$("[name='existe']").eq(0).attr("checked",true)
		else
		$("[name='existe']").eq(1).attr("checked",true)

	 
},1000);*/	
        }
		
		
        function onFeatureUnselect(event) {
		
		 select.unselectAll();
			
eliminaVentanas();
            var feature = selectedFeature;
            if(feature.popup) {
                map.removePopup(feature.popup);
                feature.popup.destroy();
                delete feature.popup;
            }
        }
/*
 * Common settings for MapPanel
 * These will be assigned as "hropts" within the MapPanel config
 */
Ext.namespace("Heron.options.map");
Heron.options.map.settings = {
    projection: 'EPSG:4326',
	displayProjection: new OpenLayers.Projection("EPSG:4326"),
	  //units: 'm',
    
			 eventListeners: {
            "moveend": moveEnd
        },
					
							
							
	
    units: 'dd',
   //  resolutions: [860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105, 0.0525, 0.0123],
    maxExtent: '-180.0, -90.0, 180.0, 90.0',
	//maxResolution: '0.01',
    center: '-71, -35',
    xy_precision: 3,
    max_features: 10,
    zoom: 3,
    theme: null,
	  numZoomLevels: 19,

    /**
     * Useful to always have permalinks enabled. default is enabled with these settings.
     * MapPanel.getPermalink() returns current permalink
     *
     **/
    permalinks: {
        /** The prefix to be used for parameters, e.g. map_x, default is 'map' */
        paramPrefix: 'map',

        /** Encodes values of permalink parameters ? default false*/
        encodeType: false,
        /** Use Layer names i.s.o. OpenLayers-generated Layer Id's in Permalinks */
        prettyLayerNames: true
    }

    /** You can always control which controls are to be added to the map. */
    /* controls : [
     new OpenLayers.Control.Attribution(),
     new OpenLayers.Control.ZoomBox(),
     new OpenLayers.Control.Navigation({dragPanOptions: {enableKinetic: true}}),
     new OpenLayers.Control.LoadingPanel(),
     new OpenLayers.Control.PanPanel(),
     new OpenLayers.Control.ZoomPanel(),
     new OpenLayers.Control.OverviewMap(),
     new OpenLayers.Control.ScaleLine({geodesic: true, maxWidth: 200})
     ] */
};

// TODO see how we can set/override Map OpenLayers Controls
//Heron.options.map.controls = [new OpenLayers.Control.ZoomBox(),
//			new OpenLayers.Control.ScaleLine({geodesic: true, maxWidth: 200})];
Ext.namespace("Heron.options.wfs");



Heron.options.wfs.downloadFormats = [
    {
        name: 'CSV',
        outputFormat: 'csv',
        fileExt: '.csv'
    },
    {
        name: 'GML (version 2.1.2)',
        outputFormat: 'text/xml; subtype=gml/2.1.2',
        fileExt: '.gml'
    },
//    {
//        name: 'ESRI Shapefile (zipped)',
//        outputFormat: 'SHAPE-ZIP',
//        fileExt: '.zip'
//    },
    {
        name: 'GeoJSON',
        outputFormat: 'json',
        fileExt: '.json'
    }
];

/*
 * Layers to be added to the map.
 * Syntax is defined in OpenLayers Layer API.
 * ("isBaseLayer: true" means the layer will be added as base/background layer).
 */

 
 
  wfs = new OpenLayers.Layer.Vector(
            "Redes__vector",{
			  strategies: [new OpenLayers.Strategy.BBOX(), saveStrategy],
                projection: new OpenLayers.Projection("EPSG:4326"),
				 styleMap: estilo_edicion,
                protocol: new OpenLayers.Protocol.WFS({
                    version: "1.1.0",
                    srsName: "EPSG:4326",
                    url: "http://192.168.0.52:9090/geoserver/wfs",
                    featureNS :  "http://inggepro/sistema_interno",
                    featureType: "fuera_antiguo",
                    geometryName: "SHAPE",
					 
                    schema: "http://192.168.0.52:9090/geoserver/wfs/DescribeFeatureType?version=1.1.0&typename=sistema_interno_antiguo:fuera_antiguo"
                }) ,
				'displayInLayerSwitcher':false,
			visibility:false
			
       
          
            
			});

Heron.options.map.layers = [
    /*
     * ==================================
     *            BaseLayers
     * ==================================
     */
//	May use new NASA WMTS : http://onearth.jpl.nasa.gov/wms.cgi?request=GetCapabilities
new OpenLayers.Layer.OSM('OpenStreetMap','',{  
resolutions: [156543.03390625, 78271.516953125, 39135.7584765625,
                      19567.87923828125, 9783.939619140625, 4891.9698095703125,
                      2445.9849047851562, 1222.9924523925781, 611.4962261962891,
                      305.74811309814453, 152.87405654907226, 76.43702827453613,
                      38.218514137268066, 19.109257068634033, 9.554628534317017,
                      4.777314267158508, 2.388657133579254, 1.194328566789627,
                      0.5971642833948135, 0.25, 0.1, 0.05],
        serverResolutions: [156543.03390625, 78271.516953125, 39135.7584765625,
                            19567.87923828125, 9783.939619140625,
                            4891.9698095703125, 2445.9849047851562,
                            1222.9924523925781, 611.4962261962891,
                            305.74811309814453, 152.87405654907226,
                            76.43702827453613, 38.218514137268066,
                            19.109257068634033, 9.554628534317017,
                            4.777314267158508, 2.388657133579254,
                            1.194328566789627, 0.5971642833948135],
        transitionEffect: 'resize'}),

							new OpenLayers.Layer.Google(
									"Google Satelital",
									{type: google.maps.MapTypeId.SATELLITE, visibility: false},
									{singleTile: false, buffer: 0, isBaseLayer: true}

							),

                            new OpenLayers.Layer.Google(
                     									"Google Callejero", // the default
                     									{type: google.maps.MapTypeId.ROADMAP, visibility: false},
                     									{singleTile: false, buffer: 0, isBaseLayer: true}
                     							),
												
							new OpenLayers.Layer.Google(
                     									"Google Híbrido", // the default
                     									{type: google.maps.MapTypeId.HYBRID, visibility: true},
                     									{singleTile: false, buffer: 0, isBaseLayer: true}
                     							),	
												
							new OpenLayers.Layer.Google(
									"Google Terreno",
									{type: google.maps.MapTypeId.TERRAIN, visibility: false},
									{singleTile: false, buffer: 0, isBaseLayer: true}
							),
							
							
	new OpenLayers.Layer.WMS("Imágenes globales",
            "http://maps.opengeo.org/geowebcache/service/wms",
            {layers: "bluemarble"},
            {singleTile: false, isBaseLayer: true, visibility: false, noLegend: true, transitionEffect: 'resize'}),

    new OpenLayers.Layer.WMS(
            "Imagen mundial",
            'http://www2.demis.nl/wms/wms.ashx?WMS=BlueMarble',
            {layers: "Earth Image", format: 'image/png'},
            {singleTile: true, isBaseLayer: true, visibility: false, noLegend: true, transitionEffect: 'resize'}
    ),

    new OpenLayers.Layer.WMS(
            "Esquema mundial",
            'http://www2.demis.nl/wms/wms.ashx?WMS=WorldMap',
            {layers: "Countries,Borders,Coastlines", format: 'image/png'},
            {singleTile: true, isBaseLayer: true, visibility: false, noLegend: true, transitionEffect: 'resize'}
    ),

   

    new OpenLayers.Layer.Image(
            "Ninguno",
            Ext.BLANK_IMAGE_URL,
            OpenLayers.Bounds.fromString(Heron.options.map.settings.maxExtent),
            new OpenLayers.Size(10, 10),
            {resolutions: Heron.options.map.settings.resolutions, isBaseLayer: true, visibility: false, displayInLayerSwitcher: true, transitionEffect: 'resize'}
    ),

    /*
     * ==================================
     *            Overlays
     * ==================================
     */
   /* new OpenLayers.Layer.WMS(
            "World Soil Resources (FAO)",
            'http://data.fao.org/geoserver/ows?',
            {layers: "GEONETWORK:wsres25_1111", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer'
                }
            }}
    ),*//*
    new OpenLayers.Layer.WMS(
            "Zonas ecológicas (FAO)",
            'http://data.fao.org/geoserver/ows?',
            {layers: "GEONETWORK:eco_zone_1255", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, transitionEffect: 'resize'}
    ),
    new OpenLayers.Layer.WMS(
            "Ciudades mundo (FAO)",
            'http://data.fao.org/geoserver/ows?',
            {layers: "GEONETWORK:esri_cities_12764", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: true, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }}
    ),*/
	new OpenLayers.Layer.Vector( "Redes",
   
                    { 
					  //styleMap: myStyle,
					strategies: [
			new OpenLayers.Strategy.BBOX(),
			
			refresh4
		],
                      protocol: new OpenLayers.Protocol.HTTP({
                       
					     url: "../../../../gearth/sinnueva/capas/capa_Tramos_rapida.php?tipo=orden&idsv="+idsv,
						       params: {
       'r':Math.random(),
	   'idsv':idsv
	   
      
    },
                        format: new OpenLayers.Format.KML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 4
                })
                      }),
                      projection: gg,
					   eventListeners: {
          "featureselected": console.log(this),
                "featureunselected": onFeatureUnselect
        }

                    }),
	new OpenLayers.Layer.Vector( "Cámaras",
   
                    {
				
					  //styleMap: myStyle,
					strategies: [
			new OpenLayers.Strategy.BBOX(),
			
			refresh2
		],
                      protocol: new OpenLayers.Protocol.HTTP({
                       
					     url: "../../../../gearth/sinnueva/capas/capa_Camaras.php?idsv="+idsv,
						       params: {
       'r':Math.random(),
	   'idsv':idsv
	   
      
    },
                        format: new OpenLayers.Format.KML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 4
                })
                      }),
                      projection: gg,
					   eventListeners: {
          "featureselected": onFeatureSelect,
                "featureunselected": onFeatureUnselect
        }

                    }),
					
						new OpenLayers.Layer.Vector( "Flujos",
   
                    { 
					  //styleMap: myStyle,
					strategies: [
			new OpenLayers.Strategy.BBOX(),
			
			refresh5
		],
                      protocol: new OpenLayers.Protocol.HTTP({
                       
					     url: "../../capas/capa_Flujos.php?idsv="+idsv,
						       params: {
       'r':Math.random(),
	   'idsv':idsv
	   
      
    },
                        format: new OpenLayers.Format.KML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 4
                })
                      }),
                      projection: gg,
					 /*  eventListeners: {
          "featureselected": onFeatureSelect,
                "featureunselected": onFeatureUnselect
        }*/

                    }),
					
					new OpenLayers.Layer.Vector( "GPS",
   
                    { 
					  //styleMap: myStyle,
					strategies: [
			new OpenLayers.Strategy.BBOX(),
			new OpenLayers.Strategy.Refresh({interval: 30000, force: true})
		],
                      protocol: new OpenLayers.Protocol.HTTP({
                       
					     url: "../../../../gearth/sinnueva/capas/capa_GPS_intermedio.php?",
						       params: {
       'r':Math.random(),
	   'idsv':idsv
	   
      
    },
                        format: new OpenLayers.Format.KML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 4
                })
                      }),
                      projection: gg,
					   eventListeners: {
          "featureselected": onFeatureSelect,
                "featureunselected": onFeatureUnselect
        }

                    }),

		
	   new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
"Codigo_tramo", "http://192.168.0.52:9090/geoserver/sistema_interno/wms",                   
				   {
                        "LAYERS": 'sistema_interno:fuera_view',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1.5,  
						// minResolution:0.6,
						//  singleTile: true, 
                       ratio: 1, 
					     visibility:false,
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
								strategies: [new OpenLayers.Strategy.BBOX()],
                        yx : {'EPSG:32719' : false}
                    } 
                ),
	 new OpenLayers.Layer.WMS(
            "Redes_vector",
           "http://192.168.0.52:9090/geoserver/sistema_interno/ows?",   
            {layers: "fuera_view", transparent: true, format: 'image/png'},
            { opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false,  projection: sm, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                          srsName: "EPSG:900913",
                    featureType: "fuera_view",
					  featureNS: "http://inggepro/sistema_interno",
					//outputFormat: "json",
          //  readFormat: "application/vnd.ogc.gml",
                   // featureNS: "http://192.168.0.52:9090/geoserver/sistema_interno/",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }}
    ),
	
	
		/*new OpenLayers.Layer.Vector("Redes_consultable_", {
            protocol: new OpenLayers.Protocol.HTTP({
                url: "http://192.168.0.52:9090/geoserver/sistema_interno/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sistema_interno:fuera_view&maxFeatures=5000&outputFormat=application/json",
                  format: new OpenLayers.Format.GeoJSON()
            }),
         	strategies: [new OpenLayers.Strategy.BBOX()]
        }),*/

	
	wfs,
	
	      new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
"Predios", "http://192.169.233.173:9090/geoserver/postgis/wms",                   
				   {
                        "LAYERS": 'postgis:predios_gran_conce',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1.5,  
						// minResolution:0.6,
						//  singleTile: true, 
                       ratio: 1, 
					     visibility:false,
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
								strategies: [new OpenLayers.Strategy.BBOX()],
                        yx : {'EPSG:32719' : false}
                    } 
                ),
				  new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
"Ejes", "http://192.169.233.173:9090/geoserver/postgis/wms",                   
				   {
                        "LAYERS": 'postgis:ejes_gran_conce',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 3,  
						 minResolution:0.2,
						  singleTile: true, 
                       ratio: 1, 
					     visibility:false,
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
                        yx : {'EPSG:32719' : false}
                    } 
                ),
					new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Ejes Los Angeles", 
	"http://"+urlgeos[0]+":9090/geoserver/cite/wms",                   
				   {
                        "LAYERS": 'cite:ejes_la',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true,
						tiled:true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
							 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
					   //  featureType: "pdev1l",
					   	  featureType: "MultiLineString",
						   geometryName: "the_geom",
                        featureNS: 'http://opengeo.org',
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
				new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Soleras Los Angeles", 
	"http://"+urlgeos[0]+":9090/geoserver/cite/wms",                   
				   {
                        "LAYERS": 'cite:soleras_la',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true,
						tiled:true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
							 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
					   //  featureType: "pdev1l",
					   	  featureType: "MultiLineString",
						   geometryName: "the_geom",
                        featureNS: 'http://opengeo.org',
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
				
				new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Predios los angeles", 
	"http://"+urlgeos[0]+":9090/geoserver/cite/wms",                   
				   {
                        "LAYERS": 'cite:predios_la',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true,
						tiled:true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
							 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
					   //  featureType: "pdev1l",
					   	  featureType: "MultiLineString",
						   geometryName: "the_geom",
                        featureNS: 'http://opengeo.org',
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
				
				/*new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Clientes los Angeles", 
	"http://"+urlgeos[0]+":9090/geoserver/cite/wms",                   
				   {
                        "LAYERS": 'cite:todo_cliente_cuartel',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true,

						tiled:true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						visibility: false,
							 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
					   //  featureType: "pdev1l",
					   	  featureType: "MultiLineString",
						   geometryName: "the_geom",
                        featureNS: 'http://opengeo.org',
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
		new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Redes los angeles1", 
	"http://"+urlgeos[0]+":9090/geoserver/cite/wms",                   
				   {
                        "LAYERS": 'cite:red_la_cuartel',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true,
						tiled:true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
							 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
					   //  featureType: "pdev1l",
					   	  featureType: "MultiLineString",
						   geometryName: "the_geom",
                        featureNS: 'http://opengeo.org',
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),*/
				
					new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Válvulas Los Angeles", 
	"http://"+urlgeos[0]+":9090/geoserver/cite/wms",                   
				   {
                        "LAYERS": 'cite:componentes_la',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true,
						tiled:true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
							 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
					   //  featureType: "pdev1l",
					   	  featureType: "MultiLineString",
						   geometryName: "the_geom",
                        featureNS: 'http://opengeo.org',
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
				
						new OpenLayers.Layer.Vector("Válvulas Los Angeles_", {
            protocol: new OpenLayers.Protocol.HTTP({
                url: "http://192.169.233.173:9090/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:componentes_la&maxFeatures=3309&outputFormat=application/json",
                  format: new OpenLayers.Format.GeoJSON()
            }),
         	strategies: [new OpenLayers.Strategy.BBOX()]
        }),
				
				new OpenLayers.Layer.Vector("Clientes los Angeles_", {
            protocol: new OpenLayers.Protocol.HTTP({
                url: "http://192.169.233.173:9090/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:todo_cliente_cuartel&maxFeatures=3309&outputFormat=application/json",
                  format: new OpenLayers.Format.GeoJSON()
            }),
         	strategies: [new OpenLayers.Strategy.BBOX()]
        }),
				new OpenLayers.Layer.Vector("Redes Los Angeles_", {
            protocol: new OpenLayers.Protocol.HTTP({
                url: "http://192.169.233.173:9090/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:red_la_cuartel&maxFeatures=5000&outputFormat=application/json",
                  format: new OpenLayers.Format.GeoJSON()
            }),
         	strategies: [new OpenLayers.Strategy.BBOX()]
        }),
	/*new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Redes otros estilo", 
	"http://"+urlgeos[0]+":9090/geoserver/postgis/ows?",                   
				   {
                        "LAYERS": 'postgis:redes',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
						
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						strategies: [new OpenLayers.Strategy.BBOX()],
						 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
                        featureNS: 'http://prueba.com/postgis3',
						  featureType: "pdev1",
						   geometryName: "the_geom",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),	*/
	/*new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Pedro de valdivia potenciales", 
	"http://"+urlgeos[0]+":9090/geoserver/postgis/ows?",                   
				   {
                        "LAYERS": 'postgis:pdev1',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
						
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						strategies: [new OpenLayers.Strategy.BBOX()],
						 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
                        featureNS: 'http://prueba.com/postgis3',
						  featureType: "pdev1",
						   geometryName: "MultiLineString",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),	*/		

		/*		new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Pedro de valdivia clientes", 
	"http://"+urlgeos[0]+":9090/geoserver/postgis/ows?",                   
				   {
                        "LAYERS": 'postgis:pdev7',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
						
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						strategies: [new OpenLayers.Strategy.BBOX()],
						 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
                        featureNS: 'http://prueba.com/postgis5',
						  featureType: "pdev7",
						   geometryName: "MultiLineString",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),	*/
				
		/*	new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Clientes Otros", 
	"http://"+urlgeos[0]+":9090/geoserver/postgis/ows?",                   
				   {
                        "LAYERS": 'postgis:cli',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
						
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						strategies: [new OpenLayers.Strategy.BBOX()],
						 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
                        featureNS: 'http://prueba.com/postgis2',
						  featureType: "cli",
						   geometryName: "MultiLineString",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),*/
				
		/*				new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Redes Otros Carpetas", 
	"http://"+urlgeos[0]+":9090/geoserver/cite/ows?",                   
				   {
                        "LAYERS": 'cite:red_wgs84',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
						
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						strategies: [new OpenLayers.Strategy.BBOX()],
						 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
                        featureNS: 'http://prueba.com/postgis8',
						  featureType: "red_wgs84",
						   geometryName: "MultiLineString",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
					new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Redes Otros", 
	"http://"+urlgeos[0]+":9090/geoserver/postgis/ows?",                   
				   {
                        "LAYERS": 'postgis:redes',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
						
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						strategies: [new OpenLayers.Strategy.BBOX()],
						 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
                        featureNS: 'http://prueba.com/postgis3',
						  featureType: "redes",
						   geometryName: "MultiLineString",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
			
	  new OpenLayers.Layer.Vector("Wwwwwww", {
            strategies: [new OpenLayers.Strategy.BBOX()],
            protocol: new OpenLayers.Protocol.WFS({
                url:  "http://"+urlgeos[0]+":9090/geoserver/postgis/ows?", 
                  featureNS: 'http://prueba.com/postgis',
						  featureType: "idsv7504",
						   geometryName: "MultiLineString"
            })
			
			
			}
			)
			,*/
		
				
  /*  new OpenLayers.Layer.WMS(
            "Ciudades del mundo(geo)",
            'http://suite.opengeo.org/geoserver/ows?',
            {layers: "cities", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        featurePrefix: 'world',
                        featureNS: 'http://opengeo.org',
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }}
    ),*/
 new OpenLayers.Layer.WMS(
            "Redes Los Angeles",
           "http://"+urlgeos[0]+":9090/geoserver/cite/ows?",   
            {layers: "red_la_cuartel", transparent: true, format: 'image/png'},
            { opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                          srsName: "EPSG:4326",
                    featureType: "red_la_cuartel",
                    featureNS: "http://192.169.233.173:9090/geoserver/cite",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }}
    ),
	new OpenLayers.Layer.WMS(
            "Clientes Los Angeles",
           "http://"+urlgeos[0]+":9090/geoserver/cite/ows?",   
            {layers: "todo_cliente_cuartel", transparent: true, format: 'image/png'},
            { opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                          srsName: "EPSG:4326",
                    featureType: "todo_cliente_cuartel",
                    featureNS: "http://192.169.233.173:9090/geoserver/cite",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }}
    )
				/*	new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
"Soleras", "http://192.169.233.173:9090/geoserver/postgis/wms",                   
				   {
                        "LAYERS": 'postgis:soleras_gran_conce',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1.6,  
						 minResolution:0.2,
						  singleTile: true, 
                       ratio: 1, 
					     visibility:false,
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
                        yx : {'EPSG:32719' : false}
                    } 
                )
 		
				/*
				
				new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Red idsv7504 sin bbox", 
	"http://"+urlgeos[0]+":9090/geoserver/postgis/ows?",                   
				   {
                        "LAYERS": 'postgis:idsv7504',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
                        featureNS: 'http://prueba.com/postgis',
						  featureType: "idsv7504",
						   geometryName: "MultiLineString",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
				
				new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Red idsv7504 bbox", 
	"http://"+urlgeos[0]+":9090/geoserver/postgis/ows?",                   
				   {
                        "LAYERS": 'postgis:idsv7504',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
						
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						strategies: [new OpenLayers.Strategy.BBOX()],
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
                        featureNS: 'http://prueba.com/postgis',
						  featureType: "idsv7504",
						   geometryName: "MultiLineString",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
				
				new OpenLayers.Layer.WMS(
                   // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
		"Clientes GasSur", 
	"http://"+urlgeos[0]+":9090/geoserver/postgis/ows?",                   
				   {
                        "LAYERS": 'postgis:cli',
                        "STYLES": '',
                        format:   'image/png',
						transparent: true
						
		
                    },
                    {
                        buffer: 0,
						 maxResolution : 1,  
					//minZoomLevel: 20,						
                        displayOutsideMaxExtent: true,
                        isBaseLayer: false,
						strategies: [new OpenLayers.Strategy.BBOX()],
						 outputFormat: "application/json",
        readFormat: new OpenLayers.Format.GeoJSON(),
						 featureInfoFormat: 'application/vnd.ogc.gml',
                        yx : {'EPSG:32719' : false},
						 metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                       // featurePrefix: 'world',
                        featureNS: 'http://prueba.com/postgis2',
						  featureType: "cli",
						   geometryName: "MultiLineString",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
                    } 
                ),
	/*			
	  new OpenLayers.Layer.Vector("Wwwwwww", {
            strategies: [new OpenLayers.Strategy.BBOX()],
            protocol: new OpenLayers.Protocol.WFS({
                url:  "http://"+urlgeos[0]+":9090/geoserver/postgis/ows?", 
                  featureNS: 'http://prueba.com/postgis',
						  featureType: "idsv7504",
						   geometryName: "MultiLineString"
            })
			
			
			}
			)
			,
		
		*/		

/*
    new OpenLayers.Layer.WMS(
            "Ciudades del mundo(geo)",
            'http://suite.opengeo.org/geoserver/ows?',
            {layers: "cities", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        featurePrefix: 'world',
                        featureNS: 'http://opengeo.org',
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }}
    ),
    new OpenLayers.Layer.Vector("USA States (OpenGeo, WFS)", {
        minScale: 15000000,
        strategies: [new OpenLayers.Strategy.BBOX()],
        styleMap: new OpenLayers.StyleMap(
                {'strokeColor': '#222222', 'fillColor': '#eeeeee', graphicZIndex: 1, fillOpacity: 0.8}),
        visibility: true,
        protocol: new OpenLayers.Protocol.WFS({
            url: 'http://suite.opengeo.org/geoserver/ows?',
            featurePrefix: 'usa',
            featureType: "states",
            featureNS: 'http://census.gov'
        })
    }),
    new OpenLayers.Layer.WMS(
            "USA States (OpenGeo)",
            'http://suite.opengeo.org/geoserver/ows?',
            {layers: "states", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'usa',
                    featureNS: 'http://census.gov',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    /* No feature info, strange GML response from KNMI...ESRI? 
    new OpenLayers.Layer.WMS(
            "Meteosat",
            'http://msgcpp-ogc-realtime.knmi.nl/msgrt.cgi?',
            {layers: "lwe_precipitation_rate", transparent: true, format: 'image/png'},
            {singleTile: true, opacity: 0.6, isBaseLayer: false, visibility: false, noLegend: false, transitionEffect: 'resize'}
    )
    /* FOR DEBUGGING ESRI GFI !
     new OpenLayers.Layer.WMS(
     "Coastal Conditions",
     'http://arcserve.lawr.ucdavis.edu/arcgis/services/CSMW/Coastal_Conditions/MapServer/WMSServer?',
     {layers: "Coastal Conditions", transparent: true, format: 'image/png'},
     {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.esri.wms_featureinfo_xml', transitionEffect: 'resize'}
     ) */
];

// See ToolbarBuilder.js : each string item points to a definition
// in Heron.ToolbarBuilder.defs. Extra options and even an item create function
// can be passed here as well. "-" denotes a separator item.
Heron.options.map.toolbar = [
    {type: "scale", options: {width: 110}},
    {type: "-"} ,
    {type: "featureinfo", options: {
        popupWindow: {
            width: 360,
            height: 200,
            featureInfoPanel: {
                showTopToolbar: true,

                // Should column-names be capitalized? Default true.
                columnCapitalize: true,

                // displayPanels option values are 'Table' and 'Detail', default is 'Table'
                // displayPanels: ['Table', 'Detail']
                // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
                // 'GeoPackage' needs heron.cgi with GDAL 1.1+ !!
                exportFormats: ['CSV', 'XLS', 'GMLv2', 'Shapefile', 'GeoPackage', 'GeoJSON', 'WellKnownText'],
                maxFeatures: 10
            }
        }
    }},
    {type: "-"} ,
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "coordinatesearch", options: {onSearchCompleteZoom: 8, fieldLabelX: 'lon', fieldLabelY: 'lat'}},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "-"},
    {type: "measurelength", options: {geodesic: true}},
    {type: "measurearea", options: {geodesic: true}},
    {type: "-"},
    {type: "addbookmark"},
    {type: "help", options: {tooltip: 'Help and info for this example', contentUrl: 'help.html'}}
];

// The content of the HTML info panel.


var DeleteFeature = OpenLayers.Class(OpenLayers.Control, {
            initialize: function(layer, options) {
                OpenLayers.Control.prototype.initialize.apply(this, [options]);
                this.layer = layer;
                this.handler = new OpenLayers.Handler.Feature(
                    this, layer, {click: this.clickFeature}
                );
            },
            clickFeature: function(feature) {
				console.log(feature);
                // if feature doesn't have a fid, destroy it
                if(feature.fid == undefined) {
                    this.layer.destroyFeatures([feature]);
				}
				else if(parseInt(feature.attributes.identifica) < 500000){					
					Ext.Msg.alert('Imposible', 'No tienes permiso -entre otras cosas- para eliminar tramos essbio');	
				}
                 else {
                    feature.state = OpenLayers.State.DELETE;
                    this.layer.events.triggerEvent("afterfeaturemodified", 
                                                   {feature: feature});
                    feature.renderIntent = "select";
                    this.layer.drawFeature(feature);
                }
            },
            setMap: function(map) {
                this.handler.setMap(map);
                OpenLayers.Control.prototype.setMap.apply(this, arguments);
            },
            CLASS_NAME: "OpenLayers.Control.DeleteFeature"
        });
		

 function flashFeatures(features, index) {
            if(!index) {
                index = 0;
            }
            var current = features[index];
            if(current && current.layer === wfs) {
                wfs.drawFeature(features[index], "select");
            }
            var prev = features[index-1];
            if(prev && prev.layer === wfs) {
                wfs.drawFeature(prev, "default");
            }
            ++index;
            if(index <= features.length) {
                window.setTimeout(function() {flashFeatures(features, index)}, 300);
            }
        }
		
Ext.namespace("Heron.options.info");
Heron.options.info.html =
        '<div class="hr-html-panel-body">' +
               
                '</div>';

/*
 * Values for BookmarksPanel (bookmarks to jump to specific
 * layers/zoom/center on map. 
 */
 

			
			
Ext.namespace("Heron.options.bookmarks");
Heron.options.bookmarks =
        [
            {
                id: 'id_world_europe',
                name: 'Posición inicial',
                desc: 'Inggepro',
                layers: ['Redes',  'GPS'],
                x: -8136919.840,
                y: -4417552.666,
                zoom: 16
            }
           
        ];
