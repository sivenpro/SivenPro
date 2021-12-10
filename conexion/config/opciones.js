OpenLayers.Util.onImageLoadErrorColor = "transparent";
OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
Ext.BLANK_IMAGE_URL = 'http://cdnjs.cloudflare.com/ajax/libs/extjs/3.4.1-1/resources/images/default/s.gif';
var url = document.URL.split('/')[2];
urlgeos = url.split(':');
var refresh2;
var wfs;
var wfs2;
var wfs3;
var idsv = '';
var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;




/*var layerListeners = {
    featureclick: function(e) {
        log(e.object.name + " says: " + e.feature.id + " clicked.");
        return false;
    },
    nofeatureclick: function(e) {
        log(e.object.name + " says: No feature clicked.");
    }
};*/





refresh2 = new OpenLayers.Strategy.Refresh({
    force: true,
    active: true,
    params: {
        'idsv': idsv,
        'r': Math.random()
    }
});
refresh3 = new OpenLayers.Strategy.Refresh({
    force: true,
    active: true,
    params: {
        'idsv': idsv,
        'r': Math.random()
    }
});
refresh5 = new OpenLayers.Strategy.Refresh({
    force: true,
    active: true,
    params: {
        'idsv': idsv,
        'r': Math.random()
    }
});
refresh2_ = new OpenLayers.Strategy.Refresh({
    force: true,
    active: true,
    params: {
        'idsv': idsv,
        'r': Math.random()
    }
});
refresh3_ = new OpenLayers.Strategy.Refresh({
    force: true,
    active: true,
    params: {
        'idsv': idsv,
        'r': Math.random()
    }
});
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
var saveStrategy2 = new OpenLayers.Strategy.Save();
/*saveStrategy.events.register("success", '', ChangesSuccess);
saveStrategy.events.register("failure", '', ChangesFailed);*/



var estilodefault = new OpenLayers.Style({
  pointRadius: 10, // sized according to type attribute,from getCircleFeature
  fillColor: '#ff0000',
  //graphicXOffset: 10,
  strokeColor: "#FA5858",
  strokeWidth: 1,
  graphicZIndex: 1,
  fillOpacity:0.10
  //graphicName:circle,start,cross,triangle

});



var estiloselect = new OpenLayers.Style({

  pointRadius: 20, // sized according to type attribute,from getCircleFeature
  fillColor: '#fff',
  //graphicXOffset: 10,
  strokeColor: "#fff",
  strokeWidth: 2,
  graphicZIndex: 1,
  fillOpacity:0.10
  //graphicName:circle,start,cross,triangle

});



function moveEnd(event) {
    UpdateKmlLayer();
}

function UpdateKmlLayer() {
    refresh2.refresh();
    refresh3.refresh();
    refresh2_.refresh();
    refresh3_.refresh();
    refresh5.refresh();
};

function onFeatureSelect(event) {
    console.log("onFeatureSelect (opciones.js) : ",event);
    var feature = event.feature;
    var popup = new OpenLayers.Popup.FramedCloud("chicken", feature.geometry.getBounds().getCenterLonLat(), new OpenLayers.Size(100, 100), "<div align='center'><b>" + feature.attributes.name + "</b></div>" + feature.attributes.description, null, true, onFeatureUnselect);
    popup.panMapIfOutOfView = true;
    //popup.closeOnMove=true;
    eliminaVentanas();
    feature.popup = popup;
    map.addPopup(popup);
    selectedFeature = feature;
}

function onFeatureUnselect(event) {
    select.unselectAll();
    eliminaVentanas();
    var feature = selectedFeature;
    if (feature.popup) {
        map.removePopup(feature.popup);
        feature.popup.destroy();
        delete feature.popup;
    }
}

Ext.namespace("Heron.options.map");
Heron.options.map.settings = {
    projection: 'EPSG:4326',
    displayProjection: new OpenLayers.Projection("EPSG:4326"),
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
    zoom: 12,
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


Ext.namespace("Heron.options.wfs");
Heron.options.wfs.downloadFormats = [{
    name: 'CSV',
    outputFormat: 'csv',
    fileExt: '.csv'
}, {
    name: 'GML (version 2.1.2)',
    outputFormat: 'text/xml; subtype=gml/2.1.2',
    fileExt: '.gml'
}, {
    name: 'GeoJSON',
    outputFormat: 'json',
    fileExt: '.json'
}];

/*wfs = new OpenLayers.Layer.Vector(
"Redes__vector", {
    strategies: [new OpenLayers.Strategy.BBOX(), saveStrategy],
    projection: new OpenLayers.Projection("EPSG:32718"),
    styleMap: estilo_edicion,
    protocol: new OpenLayers.Protocol.WFS({
        srsName: new OpenLayers.Projection("EPSG:32718"),
        version: "1.1.0",
        url: "http://" + urlgeos[0] + ":8080/geoserver/wfs",
        featureNS: "http://gassur/postgis",
        featureType: "toda_red",
        geometryName: "SHAPE",
        schema: "http://" + urlgeos[0] + ":8080/geoserver/wfs/DescribeFeatureType?version=1.1.0&typename=postgis:toda_red"
    }),
    'displayInLayerSwitcher': true,
    visibility: true
});*/

if(name_usu=="apa"){

        Heron.options.map.layers = [
        /*
         * ==================================
         *           capas bases
         * ==================================
         */

            new OpenLayers.Layer.OSM('OpenStreetMap', '', {
                resolutions: [156543.03390625, 78271.516953125, 39135.7584765625,
                    19567.87923828125, 9783.939619140625, 4891.9698095703125,
                    2445.9849047851562, 1222.9924523925781, 611.4962261962891,
                    305.74811309814453, 152.87405654907226, 76.43702827453613,
                    38.218514137268066, 19.109257068634033, 9.554628534317017,
                    4.777314267158508, 2.388657133579254, 1.194328566789627,
                    0.5971642833948135, 0.25, 0.1, 0.05
                ],
                serverResolutions: [156543.03390625, 78271.516953125, 39135.7584765625,
                    19567.87923828125, 9783.939619140625,
                    4891.9698095703125, 2445.9849047851562,
                    1222.9924523925781, 611.4962261962891,
                    305.74811309814453, 152.87405654907226,
                    76.43702827453613, 38.218514137268066,
                    19.109257068634033, 9.554628534317017,
                    4.777314267158508, 2.388657133579254,
                    1.194328566789627, 0.5971642833948135
                ],
                transitionEffect: 'resize'
            }),

            /*nuevas capas bases*/
            new OpenLayers.Layer.OSM("Humanitario",["http://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png",
                "http://b.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png",
                "http://c.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png"],
                {
                    /*attribution: "&copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> and contributors, under an <a href='http://www.openstreetmap.org/copyright' title='ODbL'>open license</a>. Humanitarian style by <a href='http://hot.openstreetmap.org'>H.O.T.</a>",*/
                        "tileOptions": {
                            "crossOriginKeyword": null
                        },
                    sigleTile: false,
                    buffer: 0,
                    isbaseLayer:true
                }),

            new OpenLayers.Layer.OSM("Stamen Color", ["http://tile.stamen.com/watercolor/${z}/${x}/${y}.png"],
                {
                    /*attribution: "&copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> and contributors, under an <a href='http://www.openstreetmap.org/copyright' title='ODbL'>open license</a>. Watercolour style by <a href='http://stamen.com'>Stamen Design</a>",*/
                    "tileOptions": {
                        "crossOriginKeyword": null
                    },
                    sigleTile: false,
                    buffer: 0,
                    isbaseLayer:true
            }),

            new OpenLayers.Layer.OSM("Stamen Toner", ["http://tile.stamen.com/toner/${z}/${x}/${y}.png"],
                {
                    /*attribution: "&copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> and contributors, under an <a href='http://www.openstreetmap.org/copyright' title='ODbL'>open license</a>. Toner style by <a href='http://stamen.com'>Stamen Design</a>",*/
                    "tileOptions": {
                        "crossOriginKeyword": null
                    },
                    sigleTile: false,
                    buffer: 0,
                    isbaseLayer:true
                }),

            new OpenLayers.Layer.OSM("CartoDB Gris (sin etiquetas)",
                   ["http://a.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png",
                    "http://b.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png",
                    "http://c.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png",
                    "http://d.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png"],
                    {
                        /*attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>",*/
                        sigleTile: false,
                        buffer: 0,
                        isbaseLayer:true
                    }),

            new OpenLayers.Layer.OSM("CartoDB Gris",
                   ["http://a.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png",
                    "http://b.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png",
                    "http://c.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png",
                    "http://d.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png"],
                    {
                        /*attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>",*/
                        sigleTile: false,
                        buffer: 0,
                        isbaseLayer:true
                    }),
            new OpenLayers.Layer.OSM("CartoDB Oscuro",
                   ["http://a.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png",
                    "http://b.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png",
                    "http://c.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png",
                    "http://d.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png"],
                    {
                        /*attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>",*/
                        sigleTile: false,
                        buffer: 0,
                        isbaseLayer:true
                    }),
            new OpenLayers.Layer.OSM("CartoDB Oscuro (sin etiquetas)",
                   ["http://a.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png",
                    "http://b.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png",
                    "http://c.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png",
                    "http://d.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png"],
                    {
                        /*attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>",*/
                        sigleTile: false,
                        buffer: 0,
                        isbaseLayer:true
                    }),

            new OpenLayers.Layer.OSM("Wikimedia",
               ["https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png"],
                {
                    /*attribution: "&copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> and contributors, under an <a href='http://www.openstreetmap.org/copyright' title='ODbL'>open license</a>. <a href='https://www.mediawiki.org/wiki/Maps'>Wikimedia's new style (beta)</a>",*/
                    "tileOptions": {
                        "crossOriginKeyword": null
                    },
                    sigleTile: false,
                    buffer: 0,
                    isbaseLayer:true
                }),

            /************************************************/

            new OpenLayers.Layer.Google("Google Satelital", {
                type: google.maps.MapTypeId.SATELLITE,
				  transitionEffect: null,
                visibility: false
            }, {
                singleTile: false,
                buffer: 20000,
                isBaseLayer: true,
				  transitionEffect: null
            }),
            new OpenLayers.Layer.Google("Google Callejero", // the default
                {
                    type: google.maps.MapTypeId.ROADMAP,
                    visibility: false
                }, {
                    singleTile: false,
                    buffer: 0,
                    isBaseLayer: true
                }),
            new OpenLayers.Layer.Google("Google Híbrido", // the default
                {
                    type: google.maps.MapTypeId.HYBRID,
                    visibility: true,
					 transitionEffect: null
                }, {
                    singleTile: false,
                    buffer: 0,
                    isBaseLayer: true,
					 transitionEffect: null
                }),
            new OpenLayers.Layer.Google("Google Terreno", {
                type: google.maps.MapTypeId.TERRAIN,
                visibility: false
            }, {
                singleTile: false,
                buffer: 0,
                isBaseLayer: true
            }),

            //COMIENZO APA

            new OpenLayers.Layer.Vector("Red AP estilo", {
            projection: new OpenLayers.Projection("EPSG:32719"),
         maxResolution: 50,
                minResolution: 0.1,
            protocol: new OpenLayers.Protocol.HTTP({
                srsName: new OpenLayers.Projection("EPSG:32719"),
                featureType: "apa:redap",
                featureNS: "http://inggepro/apa",
                geometryName: "SHAPE",
                version: "1.1.0",
                //   srsName: new OpenLayers.Projection("EPSG:32718"),
                url: "http://" + urlgeos[0] + ":8080/geoserver/apa/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=apa:redap&maxFeatures=5000&outputFormat=application/json",
                format: new OpenLayers.Format.GeoJSON()
            }),
            visibility: false,
            strategies: [new OpenLayers.Strategy.BBOX()]
        }),

            new OpenLayers.Layer.WMS("Anti-golpe ariete", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:antigolpeariete",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:antigolpeariete",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

            new OpenLayers.Layer.WMS("Área Urbana", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:areaurbana",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:areaurbana",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),


            new OpenLayers.Layer.WMS("Atraviesos", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:atraviesos",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:atraviesos",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),


            new OpenLayers.Layer.WMS("Curvas de nivel", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:curvasnivel",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:curvasnivel",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

            new OpenLayers.Layer.WMS("Ejes Calles", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:ejescalles",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:ejescalles",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

            new OpenLayers.Layer.WMS("Macromedidores", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:macromedidores",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:macromedidores",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

            new OpenLayers.Layer.WMS("Napas", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:napas",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:napas",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Recintos", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:recintos",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:recintos",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),


          new OpenLayers.Layer.WMS("Reductora Presión", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:reductorapresion",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:reductorapresion",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Servidumbre", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:servidumbres",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:servidumbres",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Tipo Suelo", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:tiposuelo",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:tiposuelo",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Trazado Calles", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:trazadocalles",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:trazadocalles",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Uniones domiciliarias", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:unionesdomiciliarias",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:unionesdomiciliarias",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),



          new OpenLayers.Layer.WMS("PCP", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:pcp",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:pcp",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Sector Calidad", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:sectorcalidad",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:sectorcalidad",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Flujos", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:flujo",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:flujo",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Camaras AS", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:camaras",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:camaras",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Conduccion AS", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:conduccionas",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:conduccionas",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Sector AS", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:sectoras",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:sectoras",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Red AS", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:redas",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:redas",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Servicio AP", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:servicioap",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:servicioap",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Grifos", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:grifos",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:grifos",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Válvulas", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:valvulas",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:valvulas",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),



          new OpenLayers.Layer.WMS("Conduccion AP", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:conduccionap",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:conduccionap",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Cuarteles", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:cuartel",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:cuartel",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Sector Presión AP", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:sectorpresion",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:sectorpresion",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Red AP", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:redap",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:redap",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),

          new OpenLayers.Layer.WMS("Clientes", "http://" + urlgeos[0] + ":8080/geoserver/wms/apa?", {
                layers: "apa:arranques",
                renderers: renderer,
                transparent: true,
                tiled: 'true',
                format: 'image/png8'
                }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: false,
                noLegend: true,
                projection: sm,
                maxResolution: 50,
                minResolution: 0.1,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "apa:arranques",
                        featureNS: "http://inggepro/apa",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }
            }),


        ];

}else{



    Heron.options.map.layers = [
    /*
     * ==================================
     *           capas bases
     * ==================================
     */


        new OpenLayers.Layer.OSM('OpenStreetMap', '', {
            resolutions: [156543.03390625, 78271.516953125, 39135.7584765625,
                19567.87923828125, 9783.939619140625, 4891.9698095703125,
                2445.9849047851562, 1222.9924523925781, 611.4962261962891,
                305.74811309814453, 152.87405654907226, 76.43702827453613,
                38.218514137268066, 19.109257068634033, 9.554628534317017,
                4.777314267158508, 2.388657133579254, 1.194328566789627,
                0.5971642833948135, 0.25, 0.1, 0.05
            ],
            serverResolutions: [156543.03390625, 78271.516953125, 39135.7584765625,
                19567.87923828125, 9783.939619140625,
                4891.9698095703125, 2445.9849047851562,
                1222.9924523925781, 611.4962261962891,
                305.74811309814453, 152.87405654907226,
                76.43702827453613, 38.218514137268066,
                19.109257068634033, 9.554628534317017,
                4.777314267158508, 2.388657133579254,
                1.194328566789627, 0.5971642833948135
            ],
            transitionEffect: 'resize'
        }),
		
		   /*nuevas capas bases*/
            new OpenLayers.Layer.OSM("Humanitario",["http://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png",
                "http://b.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png",
                "http://c.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png"],
                {
                    /*attribution: "&copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> and contributors, under an <a href='http://www.openstreetmap.org/copyright' title='ODbL'>open license</a>. Humanitarian style by <a href='http://hot.openstreetmap.org'>H.O.T.</a>",*/
                        "tileOptions": {
                            "crossOriginKeyword": null
                        },
                    sigleTile: false,
                    buffer: 0,
                    isbaseLayer:true
                }),

            new OpenLayers.Layer.OSM("Stamen Color", ["http://tile.stamen.com/watercolor/${z}/${x}/${y}.png"],
                {
                    /*attribution: "&copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> and contributors, under an <a href='http://www.openstreetmap.org/copyright' title='ODbL'>open license</a>. Watercolour style by <a href='http://stamen.com'>Stamen Design</a>",*/
                    "tileOptions": {
                        "crossOriginKeyword": null
                    },
                    sigleTile: false,
                    buffer: 0,
                    isbaseLayer:true
            }),

            new OpenLayers.Layer.OSM("Stamen Toner", ["http://tile.stamen.com/toner/${z}/${x}/${y}.png"],
                {
                    /*attribution: "&copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> and contributors, under an <a href='http://www.openstreetmap.org/copyright' title='ODbL'>open license</a>. Toner style by <a href='http://stamen.com'>Stamen Design</a>",*/
                    "tileOptions": {
                        "crossOriginKeyword": null
                    },
                    sigleTile: false,
                    buffer: 0,
                    isbaseLayer:true
                }),

            new OpenLayers.Layer.OSM("CartoDB Gris (sin etiquetas)",
                   ["http://a.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png",
                    "http://b.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png",
                    "http://c.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png",
                    "http://d.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png"],
                    {
                        /*attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>",*/
                        sigleTile: false,
                        buffer: 0,
                        isbaseLayer:true
                    }),

            new OpenLayers.Layer.OSM("CartoDB Gris",
                   ["http://a.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png",
                    "http://b.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png",
                    "http://c.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png",
                    "http://d.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png"],
                    {
                        /*attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>",*/
                        sigleTile: false,
                        buffer: 0,
                        isbaseLayer:true
                    }),
            new OpenLayers.Layer.OSM("CartoDB Oscuro",
                   ["http://a.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png",
                    "http://b.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png",
                    "http://c.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png",
                    "http://d.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png"],
                    {
                        /*attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>",*/
                        sigleTile: false,
                        buffer: 0,
                        isbaseLayer:true
                    }),
            new OpenLayers.Layer.OSM("CartoDB Oscuro (sin etiquetas)",
                   ["http://a.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png",
                    "http://b.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png",
                    "http://c.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png",
                    "http://d.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png"],
                    {
                        /*attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>",*/
                        sigleTile: false,
                        buffer: 0,
                        isbaseLayer:true
                    }),

            new OpenLayers.Layer.OSM("Wikimedia",
               ["https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png"],
                {
                    /*attribution: "&copy; <a href='http://www.openstreetmap.org/'>OpenStreetMap</a> and contributors, under an <a href='http://www.openstreetmap.org/copyright' title='ODbL'>open license</a>. <a href='https://www.mediawiki.org/wiki/Maps'>Wikimedia's new style (beta)</a>",*/
                    "tileOptions": {
                        "crossOriginKeyword": null
                    },
                    sigleTile: false,
                    buffer: 0,
                    isbaseLayer:true
                }),
				
				
        new OpenLayers.Layer.Google("Google Satelital", {
            type: google.maps.MapTypeId.SATELLITE,
            visibility: false
        }, {
            singleTile: false,
            buffer: 0,
            isBaseLayer: true
        }),
        new OpenLayers.Layer.Google("Google Callejero", // the default
            {
                type: google.maps.MapTypeId.ROADMAP,
                visibility: false
            }, {
                singleTile: false,
                buffer: 0,
                isBaseLayer: true
            }),
        new OpenLayers.Layer.Google("Google Híbrido", // the default
            {
                type: google.maps.MapTypeId.HYBRID,
                visibility: true
            }, {
                singleTile: false,
                buffer: 0,
                isBaseLayer: true
            }),
        new OpenLayers.Layer.Google("Google Terreno", {
            type: google.maps.MapTypeId.TERRAIN,
            visibility: false
        }, {
            singleTile: false,
            buffer: 0,
            isBaseLayer: true
        }),

        /*wfs = new OpenLayers.Layer.Vector(
        "Redes__vector", {
            strategies: [new OpenLayers.Strategy.BBOX(), saveStrategy],
            projection: new OpenLayers.Projection("EPSG:32718"),
            styleMap: estilo_edicion,
            protocol: new OpenLayers.Protocol.WFS({
                srsName: new OpenLayers.Projection("EPSG:32718"),
                version: "1.1.0",
                url: "http://" + urlgeos[0] + ":8080/geoserver/wfs",
                featureNS: "http://gassur/postgis",
                featureType: "toda_red",
                geometryName: "SHAPE",
                schema: "http://" + urlgeos[0] + ":8080/geoserver/wfs/DescribeFeatureType?version=1.1.0&typename=postgis:toda_red"
            }),
            'displayInLayerSwitcher': true,
            visibility: true
        }),*/

        wfs = new OpenLayers.Layer.Vector("Radios__vector", {
            strategies: [new OpenLayers.Strategy.BBOX(), saveStrategy],
            projection: new OpenLayers.Projection("EPSG:32718"),
            protocol: new OpenLayers.Protocol.WFS({
                srsName: new OpenLayers.Projection("EPSG:32718"),
                version: "1.1.0",
                url:  "http://" + urlgeos[0] + ":8080/geoserver/wfs",
                featureNS: "http://inggepro/gassur",
                featureType: "radio_impacto",
                geometryName: "SHAPE",
                schema: "http://" + urlgeos[0] + ":8080/geoserver/wfs/DescribeFeatureType?version=1.1.0&typename=nuevogassur:radio_impacto"
            }),
            'displayInLayerSwitcher': true,
            visibility: true
        }),


        /*new OpenLayers.Layer.Image("Nada",
                Ext.BLANK_IMAGE_URL,
                OpenLayers.Bounds.fromString(Heron.options.map.settings.maxExtent),
                new OpenLayers.Size(10, 10),{
                    resolutions: Heron.options.map.settings.resolutions,
                    isBaseLayer: true,
                    visibility: false,
                    displayInLayerSwitcher: true,
                    transitionEffect: 'resize'
                }
        ),*/

        /*wfs2 = new OpenLayers.Layer.WMS(
              "Radios__vector",
              "http://" + urlgeos[0] + ":8080/geoserver/nuevogassur/wms",
              {layers: 'nuevogassur:radio_impacto'},
              {'opacity': 0.4, 'isBaseLayer': false, 'visibility': true}
        )*/


        /*wfs2 = new OpenLayers.Layer.Vector(
            "Radios__vector", {
                strategies: [new OpenLayers.Strategy.BBOX(), saveStrategy],
                projection: new OpenLayers.Projection("EPSG:32718"),
                protocol: new OpenLayers.Protocol.WFS({
                    version: "1.1.0",
                    url: "http://" + urlgeos[0] + ":8080/geoserver/wfs",
                    featurePrefix: "nuevogassur",
                    featureType: "radio_impacto2",
                    featureNS: "http://inggepro/gassur",
                    //geometryName: "SHAPE",
                    schema: "http://" + urlgeos[0] + ":8080/geoserver/wfs/DescribeFeatureType?version=1.1.0&typename=nuevogassur:radio_impacto2"
                })
        }),*/

        new OpenLayers.Layer.WMS(
            // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
            "Radio Impacto", "http://" + urlgeos[0] + ":8080/geoserver/wms?", {
                "LAYERS": 'nuevogassur:radio_impacto',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 80,
                minResolution: 0.2,
                singleTile: true,
                ratio: 1,
                visibility: true,
			   projection: sm,
                //minZoomLevel: 20,
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                yx: {'EPSG:32718': false},
                metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "nuevogassur:radio_impacto",
                    featureNS: "http://inggepro/gassur",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }),

       /*impacto = new OpenLayers.Layer.Vector("Radios__vector","http://" + urlgeos[0] + ":8080/geoserver/nuevogassur/ows?", {
                layers: 'nuevogassur:radio_impacto2',
                transparent: true,
                tiled: 'true',
                format: 'image/png'
            }, {
                opacity: 0.9,
                isBaseLayer: false,
                visibility: true,
                projection: sm,
                maxResolution: 200,
                minResolution: 0.02,
                featureInfoFormat: 'application/vnd.ogc.gml',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "nuevogassur:radio_impacto2",
                        featureNS: "http://inggepro/gassur",
                        outputFormat: "json",
                        //readFormat: "application/vnd.ogc.gml",
                        // featureNS: "http://192.168.0.52:9090/geoserver/sistema_interno/",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }


        }),*/



   new OpenLayers.Layer.WMS(
            "llae_consulta",
          "http://"+urlgeos[0]+":8080/geoserver/nuevogassur/ows?",    
            {layers: "llae_tablets", transparent: true, format: 'image/png'},
            { opacity: 0.9, isBaseLayer: false, visibility: true, noLegend: true,  
             maxResolution : 50,  
                         minResolution:0.2,
                projection: sm, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                          srsName: "EPSG:4326",
                    featureType: "llae_tablets",
                      featureNS:   "http://gassur/postgis",
                    //outputFormat: "json",
            //readFormat: "application/vnd.ogc.gml",
                   // featureNS: "http://192.168.0.52:9090/geoserver/sistema_interno/",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                }}
    ),


        new OpenLayers.Layer.WMS("Red Los Angeles", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:red_los_angeles",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "cite:red_los_angeles",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Troncal Laja", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:troncal_laja",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "cite:troncal_laja",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Válvulas de corte", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:valvulas",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "cite:valvulas",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        /*new OpenLayers.Layer.WMS("Tramos Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:Tramos",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:4326",
                    featureType: "cite:Tramos",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Subestaciones Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:Subestaciones",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:4326",
                    featureType: "cite:Subestaciones",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Postes Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:Postes",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:4326",
                    featureType: "cite:Postes",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Operadores Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:Operadores",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:4326",
                    featureType: "cite:Operadores",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Empalmes Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:Empalmes",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:4326",
                    featureType: "cite:Empalmes",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("PostesKML Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:Postes2",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:4326",
                    featureType: "cite:Postes2",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("TramosKML Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:Tramos2",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:4326",
                    featureType: "cite:Tramos2",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("SubestacionesKML Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:Subestaciones2",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:4326",
                    featureType: "cite:Subestaciones2",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),*/
        new OpenLayers.Layer.Vector("Redes estilo", {
            projection: new OpenLayers.Projection("EPSG:32718"),
            protocol: new OpenLayers.Protocol.HTTP({
                srsName: new OpenLayers.Projection("EPSG:32718"),
                featureType: "cite:granConcepcionRedesGassurM3",
                featureNS: "http://inggepro/gis",
                geometryName: "SHAPE",
                version: "1.1.0",
                //   srsName: new OpenLayers.Projection("EPSG:32718"),
                url: "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:granConcepcionRedesGassurM3&maxFeatures=5000&outputFormat=application/json",
                format: new OpenLayers.Format.GeoJSON()
            }),
            visibility: false,
            strategies: [new OpenLayers.Strategy.BBOX()]
        }),
        redes = new OpenLayers.Layer.WMS("Redes", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:granConcepcionRedesGassurM3",
            transparent: true,
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.2,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "cite:granConcepcionRedesGassurM3",
                    featureNS: "http://inggepro/gis",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.Vector("Clientes estilo", {
            projection: new OpenLayers.Projection("EPSG:32718"),
            protocol: new OpenLayers.Protocol.HTTP({
                srsName: new OpenLayers.Projection("EPSG:32718"),
                featureType: "cite:clientes-consumo-enero",
                featureNS: "http://gassur/cite",
                geometryName: "SHAPE",
                version: "1.1.0",
                //   srsName: new OpenLayers.Projection("EPSG:32718"),
                url: "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:clientes-consumo-enero&maxFeatures=5000&outputFormat=application/json",
                format: new OpenLayers.Format.GeoJSON()
            }),
            visibility: false,
            strategies: [new OpenLayers.Strategy.BBOX()]
        }),
        /*    new OpenLayers.Layer.Vector("Clientes estilo", {
                protocol: new OpenLayers.Protocol.HTTP({
                    url: "http://"+urlgeos[0]+":8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:clientes-consumo-enero&maxFeatures=5000&outputFormat=application/json",
                      format: new OpenLayers.Format.GeoJSON()

                }),
                    visibility:false,
                strategies: [new OpenLayers.Strategy.BBOX()]
            }),*/
        new OpenLayers.Layer.WMS("Clientes", "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?", {
            layers: "cite:clientes-consumo-enero",
            transparent: true,
            format: 'image/png'
        }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            maxResolution: 50,
            minResolution: 0.2,
            projection: sm,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "cite:clientes-consumo-enero",
                    featureNS: "http://gassur/postgis",
                    //outputFormat: "json",
                    //readFormat: "application/vnd.ogc.gml",
                    // featureNS: "http://192.168.0.52:9090/geoserver/sistema_interno/",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        /*wfs,
        wfs2,*/
        new OpenLayers.Layer.Vector("Limites administrativos estilo", {
            projection: new OpenLayers.Projection("EPSG:32718"),
            protocol: new OpenLayers.Protocol.HTTP({
                srsName: new OpenLayers.Projection("EPSG:32718"),
                featureType: "cite:Limites_administrativos_8reg",
                featureNS: "http://gassur/cite",
                geometryName: "SHAPE",
                version: "1.1.0",
                //   srsName: new OpenLayers.Projection("EPSG:32718"),
                url: "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:Limites_administrativos_8reg&maxFeatures=5000&outputFormat=application/json",
                format: new OpenLayers.Format.GeoJSON()
            }),
            visibility: false,
            strategies: [new OpenLayers.Strategy.BBOX()]
        }),
        new OpenLayers.Layer.WMS(
            // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
            "Limites Administrativos", "http://" + urlgeos[0] + ":8080/geoserver/cite/wms", {
                "LAYERS": 'cite:Limites_administrativos_8reg',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 200,
                minResolution: 0.2,
                singleTile: true,
                ratio: 1,
                visibility: false,
                //minZoomLevel: 20,
                projection: new OpenLayers.Projection("EPSG:900913"),
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "Limites_administrativos_8reg",
                        featureNS: "http://gassur/cite",
                        outputFormat: "json",
                        //readFormat: "application/vnd.ogc.gml",
                        // featureNS: "http://192.168.0.52:9090/geoserver/sistema_interno/",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                },
                yx: {
                    'EPSG:32719': true
                }
            }),

        /*new OpenLayers.Layer.WMS(
            "Radioimpacto2", "http://" + urlgeos[0] + ":8080/geoserver/nuevogassur/wms", {
                "LAYERS": 'nuevogassur:radio_impacto',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 200,
                minResolution: 0.2,
                singleTile: true,
                ratio: 1,
                visibility: false,
                //minZoomLevel: 20,
                projection: new OpenLayers.Projection("EPSG:900913"),
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "radio_impacto",
                        featureNS: "http://gassur/cite",
                        outputFormat: "json",
                        //readFormat: "application/vnd.ogc.gml",
                        // featureNS: "http://192.168.0.52:9090/geoserver/sistema_interno/",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                },
                yx: {
                    'EPSG:32719': true
                }
            }),*/

        new OpenLayers.Layer.Vector("Localidades Secundarias estilo", {
            projection: new OpenLayers.Projection("EPSG:32718"),
            protocol: new OpenLayers.Protocol.HTTP({
                srsName: new OpenLayers.Projection("EPSG:32718"),
                featureType: "cite:Localidades_secundarias_puntos",
                featureNS: "http://gassur/cite",
                geometryName: "SHAPE",
                version: "1.1.0",
                //   srsName: new OpenLayers.Projection("EPSG:32718"),
                url: "http://" + urlgeos[0] + ":8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:Localidades_secundarias_puntos&maxFeatures=5000&outputFormat=application/json",
                format: new OpenLayers.Format.GeoJSON()
            }),
            visibility: false,
            strategies: [new OpenLayers.Strategy.BBOX()]
        }),
        new OpenLayers.Layer.WMS(
            // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
            "Localidades secundarias", "http://" + urlgeos[0] + ":8080/geoserver/cite/wms", {
                "LAYERS": 'cite:Localidades_secundarias_puntos',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 200,
                minResolution: 0.2,
                singleTile: true,
                ratio: 1,
                visibility: false,
                //minZoomLevel: 20,
                projection: new OpenLayers.Projection("EPSG:900913"),
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                metadata: {
                    wfs: {
                        protocol: 'fromWMSLayer',
                        srsName: "EPSG:32718",
                        featureType: "Localidades_secundarias_puntos",
                        featureNS: "http://gassur/cite",
                        //outputFormat: "json",
                        //readFormat: "application/vnd.ogc.gml",
                        // featureNS: "http://192.168.0.52:9090/geoserver/sistema_interno/",
                        downloadFormats: Heron.options.wfs.downloadFormats
                    }
                },
                yx: {
                    'EPSG:32719': true
                }
            }),
        new OpenLayers.Layer.WMS(
            // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
            "Soleras", "http://" + urlgeos[0] + ":8080/geoserver/postgis/wms", {
                "LAYERS": 'cite:soleras_gran_conce',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 80,
                minResolution: 0.2,
                singleTile: true,
                ratio: 1,
                visibility: false,
                //minZoomLevel: 20,
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                yx: {
                    'EPSG:32719': false
                }
            }),
        new OpenLayers.Layer.WMS(
            // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
            "Predios", "http://" + urlgeos[0] + ":8080/geoserver/postgis/wms", {
                "LAYERS": 'cite:predios_gran_conce',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 80,
                minResolution: 0.2,
                //  singleTile: true,
                ratio: 1,
                visibility: false,
                //minZoomLevel: 20,
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                strategies: [new OpenLayers.Strategy.BBOX()],
                yx: {
                    'EPSG:32719': false
                }
            }),
        new OpenLayers.Layer.WMS(
            // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
            "Ejes Los Aangeles", "http://" + urlgeos[0] + ":8080/geoserver/postgis/wms", {
                "LAYERS": 'cite:ejes_los_angeles',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 80,
                minResolution: 0.2,
                singleTile: true,
                ratio: 1,
                visibility: false,
                //minZoomLevel: 20,
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                yx: {
                    'EPSG:32719': false
                }
            }),
        new OpenLayers.Layer.WMS(
            // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
            "Soleras Los Angeles", "http://" + urlgeos[0] + ":8080/geoserver/postgis/wms", {
                "LAYERS": 'cite:soleras_los_angeles',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 80,
                minResolution: 0.2,
                singleTile: true,
                ratio: 1,
                visibility: false,
                //minZoomLevel: 20,
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                yx: {
                    'EPSG:32719': false
                }
            }),
        new OpenLayers.Layer.WMS(
            // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
            "Predios Los Angeles", "http://" + urlgeos[0] + ":8080/geoserver/postgis/wms", {
                "LAYERS": 'cite:predios_los_angeles',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 80,
                minResolution: 0.2,
                //  singleTile: true,
                ratio: 1,
                visibility: false,
                //minZoomLevel: 20,
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                strategies: [new OpenLayers.Strategy.BBOX()],
                yx: {
                    'EPSG:32719': false
                }
            }),
        new OpenLayers.Layer.WMS(
            // "Red Fondo", "http://"+urlgeos[0]+":9090/geoserver/redes_as/wms",
            "Ejes", "http://" + urlgeos[0] + ":8080/geoserver/postgis/wms", {
                "LAYERS": 'cite:ejes_gran_conce',
                "STYLES": '',
                format: 'image/png',
                transparent: true
            }, {
                buffer: 0,
                maxResolution: 80,
                minResolution: 0.2,
                singleTile: true,
                ratio: 1,
                visibility: false,
                //minZoomLevel: 20,
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                yx: {
                    'EPSG:32719': false
                }
            }),

            /*COMIENZO COELCHA*/

        new OpenLayers.Layer.WMS("Caminos Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:caminos",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:caminos",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),

        new OpenLayers.Layer.WMS("Clientes Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:clientes",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:clientes",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Clientes retirados Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:clientesretirados",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:clientesretirados",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Equipos electricos Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:equiposelectricos",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:equiposelectricos",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Estructuras Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:estructuras",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:estructuras",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Límites concesión Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:limitesconcesion",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:limitesconcesion",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Localidades secundarias Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:localidadessecundarias",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:localidadessecundarias",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Postes BT Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:postesbt",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:postesbt",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Postes MT Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:postesmt",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:postesmt",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Predios Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:prediostodo",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:prediostodo",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Redes eléctricas Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:redeselectricas",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: true,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:redeselectricas",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Referencias Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:referencias",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:referencias",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Subestaciones Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:subestaciones",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:subestaciones",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        }),
        new OpenLayers.Layer.WMS("Todared Coelcha", "http://" + urlgeos[0] + ":8080/geoserver/wms/Coelcha?", {
            layers: "Coelcha:todared",
            transparent: true,
            tiled: 'true',
            format: 'image/png'
            }, {
            opacity: 0.9,
            isBaseLayer: false,
            visibility: false,
            noLegend: true,
            projection: sm,
            maxResolution: 50,
            minResolution: 0.1,
            featureInfoFormat: 'application/vnd.ogc.gml',
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    srsName: "EPSG:32718",
                    featureType: "Coelcha:todared",
                    featureNS: "http://inggepro/coelcha",
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
        })


    ];

}

// See ToolbarBuilder.js : each string item points to a definition
// in Heron.ToolbarBuilder.defs. Extra options and even an item create function
// can be passed here as well. "-" denotes a separator item.
//Ya está definido en config.js
/*Heron.options.map.toolbar = [
    {type: "scale",
        options: {
        width: 110
        }
    },
    {type: "-"},
    {type: "featureinfo",
        options: {
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
        }
    },
   {type: "featureinfo1",
        options: {
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
        }
    },
   {type: "-"},
   {type: "pan"},
   {type: "zoomin"},
   {type: "zoomout"},
   {type: "zoomvisible"},
   {type: "coordinatesearch",
        options: {
        onSearchCompleteZoom: 8,
        fieldLabelX: 'lon',
        fieldLabelY: 'lat'
        }
    },
   {type: "-"},
   {type: "zoomprevious"},
   {type: "zoomnext"},
   {type: "-"},
   {type: "measurelength",
        options: {
        geodesic: true
        }
    },
    {type: "measurearea",
        options: {
        geodesic: true
        }
    },
   {type: "-"},
   {type: "addbookmark"},
   {type: "help",
        options: {
        tooltip: 'Help and info for this example',
        contentUrl: 'help.html'
    }}];*/


// The content of the HTML info panel.
var DeleteFeature = OpenLayers.Class(OpenLayers.Control, {
    initialize: function(layer, options) {
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
        this.layer = layer;
        this.handler = new OpenLayers.Handler.Feature(this, layer, {
            click: this.clickFeature
        });
    },
    clickFeature: function(feature) {
        console.log(feature);
        // if feature doesn't have a fid, destroy it
        if (feature.fid == undefined) {
            this.layer.destroyFeatures([feature]);
        } else if (parseInt(feature.attributes.identifica) < 500000) {
            Ext.Msg.alert('Imposible', 'No tienes permiso -entre otras cosas- para eliminar tramos essbio');
        } else {
            feature.state = OpenLayers.State.DELETE;
            this.layer.events.triggerEvent("afterfeaturemodified", {
                feature: feature
            });
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
    if (!index) {
        index = 0;
    }
    var current = features[index];
    if (current && current.layer === wfs) {
        wfs.drawFeature(features[index], "select");
    }
    var prev = features[index - 1];
    if (prev && prev.layer === wfs) {
        wfs.drawFeature(prev, "default");
    }
    ++index;
    if (index <= features.length) {
        window.setTimeout(function() {
            flashFeatures(features, index)
        }, 300);
    }
}

Ext.namespace("Heron.options.info");
Heron.options.info.html = '<div class="hr-html-panel-body">' + '</div>';
/*
 * Values for BookmarksPanel (bookmarks to jump to specific
 * layers/zoom/center on map.
 */
Ext.namespace("Heron.options.bookmarks");
Heron.options.bookmarks = [//{

    //id: 'id_3_',
    //name: 'Coelcha',
    //desc: 'Coelcha',
    //layers: ['Redes eléctricas'],
    //x: -8112720.4329462,
    //y: -4505504.1946143,
    //zoom: 12
//},{
    //id: 'id_1_',
    //name: 'Posición inicial',
    //desc: 'GasSur',
    //layers: ['Redes', 'Clientes'],
    //x: -8132548.896,
    //y: -4417221.837,
    //zoom: 17
//}, {
    //id: 'id_2_',
    //name: 'Los Ángeles',
    //desc: 'GasSur',
    //layers: ['Redes', 'Clientes'],
    //x: -8052563.77,
    //y: -4503360.19,
    //zoom: 17
//}
{
    id: 'id_1_',
    name: 'Posición inicial',
    desc: 'GasSur',
    layers: [],
    x: -8022830.487695312,
    y: -5711986.248899536,
    zoom: 14
}
];


