ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([794106.482448, 6055763.652080, 796278.250419, 6056950.463693]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Colector_1 = new ol.format.GeoJSON();
var features_Colector_1 = format_Colector_1.readFeatures(json_Colector_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Colector_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_1.addFeatures(features_Colector_1);
var lyr_Colector_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_1, 
                style: style_Colector_1,
                popuplayertitle: 'Colector',
                interactive: false,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_1_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_1_1.png" /> VERIFICADO<br />\
    <img src="styles/legend/Colector_1_2.png" /> SEMI VERIFICADO<br />' });
var format_Cmara_2 = new ol.format.GeoJSON();
var features_Cmara_2 = format_Cmara_2.readFeatures(json_Cmara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Cmara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_2.addFeatures(features_Cmara_2);
var lyr_Cmara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_2, 
                style: style_Cmara_2,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_2_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Cmara_2_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_2_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_2_3.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_2_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_2_5.png" /> SIN ACCESO<br />\
    <img src="styles/legend/Cmara_2_6.png" /> NO INSPECCIONABLE<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_1,lyr_Cmara_2,],
                                fold: 'open',
                                title: 'Levantamiento'});

lyr_GoogleSatelite_0.setVisible(true);lyr_Colector_1.setVisible(true);lyr_Cmara_2.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,group_Levantamiento];
lyr_Colector_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', 'TIPO': 'TIPO', 'MATERIALIDAD': 'MATERIALIDAD', 'IDENTIFICA': 'IDENTIFICA', 'PROF_RAD_INI_MM': 'PROF_RAD_INI_MM', 'PROF_RAD_FIN_MM': 'PROF_RAD_FIN_MM', 'VIVIENDAS_LOCALES': 'VIVIENDAS_LOCALES', });
lyr_Cmara_2.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'DIAMETRO SALIDA 1': 'DIAMETRO SALIDA 1', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', 'COMUNA': 'COMUNA', 'PROFUNDIDAD ENTRADA 1': 'PROFUNDIDAD ENTRADA 1', 'PROFUNDIDAD ENTRADA 2': 'PROFUNDIDAD ENTRADA 2', 'PROFUNDIDAD ENTRADA 3': 'PROFUNDIDAD ENTRADA 3', 'PROFUNDIDAD ENTRADA 4': 'PROFUNDIDAD ENTRADA 4', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'TERRENO INACCESIBLE': 'TERRENO INACCESIBLE', 'RECINTO PARTICULAR O VIVIENDA': 'RECINTO PARTICULAR O VIVIENDA', 'CAMARA NUEVA': 'CAMARA NUEVA', 'REQUIERE LIMPIEZA': 'REQUIERE LIMPIEZA', 'DUDA?': 'DUDA?', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'NAPA': 'NAPA', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'E (m) RTK': 'E (m) RTK', 'N (m) RTK': 'N (m) RTK', 'ELEV (m) RTK': 'ELEV (m) RTK', 'PROFUNDIDAD (m) RTK': 'PROFUNDIDAD (m) RTK', 'COTA ANILLO (m) RTK': 'COTA ANILLO (m) RTK', 'COTA FONDO (m) RTK': 'COTA FONDO (m) RTK', 'DIAMETRO SALIDA 3': 'DIAMETRO SALIDA 3', 'ESCURRIMIENTO': 'ESCURRIMIENTO', 'UBICACION REFERENCIAL': 'UBICACION REFERENCIAL', 'OBSERVACIONES UBICACION': 'OBSERVACIONES UBICACION', 'OBSERVACIONES CONEXIONES': 'OBSERVACIONES CONEXIONES', 'E (m)': 'E (m)', 'N (m)': 'N (m)', 'COTA ANILLO (m)': 'COTA ANILLO (m)', 'PROFUNDIDAD (m)': 'PROFUNDIDAD (m)', 'COTA RADIER (m)': 'COTA RADIER (m)', 'Q_APORTE': 'Q_APORTE', 'Q_PEAS_LPS': 'Q_PEAS_LPS', 'Q_RILES_LPS': 'Q_RILES_LPS', 'VIVIENDAS': 'VIVIENDAS', 'HABITANTES': 'HABITANTES', 'TIRANTE_MEDIDO_MM': 'TIRANTE_MEDIDO_MM', 'ESPESOR_SEDIMENTO_MM': 'ESPESOR_SEDIMENTO_MM', });
lyr_Colector_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'ValueMap', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', 'TIPO': 'ValueMap', 'MATERIALIDAD': 'ValueMap', 'IDENTIFICA': 'TextEdit', 'PROF_RAD_INI_MM': 'Range', 'PROF_RAD_FIN_MM': 'Range', 'VIVIENDAS_LOCALES': 'Range', });
lyr_Cmara_2.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'DIAMETRO ENTRADA 1': 'ValueMap', 'DIAMETRO ENTRADA 2': 'ValueMap', 'DIAMETRO ENTRADA 3': 'ValueMap', 'DIAMETRO ENTRADA 4': 'ValueMap', 'DIAMETRO ENTRADA 5': 'ValueMap', 'DIAMETRO SALIDA 1': 'ValueMap', 'DIAMETRO SALIDA 2': 'ValueMap', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', 'COMUNA': 'TextEdit', 'PROFUNDIDAD ENTRADA 1': 'TextEdit', 'PROFUNDIDAD ENTRADA 2': 'TextEdit', 'PROFUNDIDAD ENTRADA 3': 'TextEdit', 'PROFUNDIDAD ENTRADA 4': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'FALLA ESTRUCTURAL': 'CheckBox', 'TERRENO INACCESIBLE': 'CheckBox', 'RECINTO PARTICULAR O VIVIENDA': 'CheckBox', 'CAMARA NUEVA': 'CheckBox', 'REQUIERE LIMPIEZA': 'CheckBox', 'DUDA?': 'CheckBox', 'ESTADO CANAL': 'ValueMap', 'ESTADO BANQUETA': 'ValueMap', 'NAPA': 'ValueMap', 'EMBANCAMIENTO': 'ValueMap', 'ESTADO ESCALINES': 'ValueMap', 'E (m) RTK': 'TextEdit', 'N (m) RTK': 'TextEdit', 'ELEV (m) RTK': 'TextEdit', 'PROFUNDIDAD (m) RTK': 'TextEdit', 'COTA ANILLO (m) RTK': 'TextEdit', 'COTA FONDO (m) RTK': 'TextEdit', 'DIAMETRO SALIDA 3': 'ValueMap', 'ESCURRIMIENTO': 'ValueMap', 'UBICACION REFERENCIAL': 'ValueMap', 'OBSERVACIONES UBICACION': 'TextEdit', 'OBSERVACIONES CONEXIONES': 'TextEdit', 'E (m)': 'TextEdit', 'N (m)': 'TextEdit', 'COTA ANILLO (m)': 'TextEdit', 'PROFUNDIDAD (m)': 'TextEdit', 'COTA RADIER (m)': 'TextEdit', 'Q_APORTE': 'TextEdit', 'Q_PEAS_LPS': 'TextEdit', 'Q_RILES_LPS': 'TextEdit', 'VIVIENDAS': 'TextEdit', 'HABITANTES': 'TextEdit', 'TIRANTE_MEDIDO_MM': 'TextEdit', 'ESPESOR_SEDIMENTO_MM': 'TextEdit', });
lyr_Colector_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ESTADO': 'hidden field', 'DIAMETRO': 'hidden field', 'CAMARA_INICIO': 'hidden field', 'CAMARA_FINAL': 'hidden field', 'OBSERVACIONES': 'hidden field', 'TIPO': 'hidden field', 'MATERIALIDAD': 'hidden field', 'IDENTIFICA': 'hidden field', 'PROF_RAD_INI_MM': 'hidden field', 'PROF_RAD_FIN_MM': 'hidden field', 'VIVIENDAS_LOCALES': 'hidden field', });
lyr_Cmara_2.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'hidden field', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'hidden field', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'COTA SALIDA': 'hidden field', 'DIAMETRO ENTRADA 1': 'hidden field', 'DIAMETRO ENTRADA 2': 'hidden field', 'DIAMETRO ENTRADA 3': 'hidden field', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'DIAMETRO SALIDA 1': 'hidden field', 'DIAMETRO SALIDA 2': 'hidden field', 'HALLAZGO 1': 'inline label - visible with data', 'HALLAZGO 2': 'inline label - visible with data', 'COMUNA': 'hidden field', 'PROFUNDIDAD ENTRADA 1': 'hidden field', 'PROFUNDIDAD ENTRADA 2': 'hidden field', 'PROFUNDIDAD ENTRADA 3': 'hidden field', 'PROFUNDIDAD ENTRADA 4': 'hidden field', 'PROFUNDIDAD FONDO': 'hidden field', 'FALLA ESTRUCTURAL': 'hidden field', 'TERRENO INACCESIBLE': 'hidden field', 'RECINTO PARTICULAR O VIVIENDA': 'hidden field', 'CAMARA NUEVA': 'hidden field', 'REQUIERE LIMPIEZA': 'hidden field', 'DUDA?': 'hidden field', 'ESTADO CANAL': 'hidden field', 'ESTADO BANQUETA': 'hidden field', 'NAPA': 'hidden field', 'EMBANCAMIENTO': 'hidden field', 'ESTADO ESCALINES': 'hidden field', 'E (m) RTK': 'hidden field', 'N (m) RTK': 'hidden field', 'ELEV (m) RTK': 'hidden field', 'PROFUNDIDAD (m) RTK': 'hidden field', 'COTA ANILLO (m) RTK': 'hidden field', 'COTA FONDO (m) RTK': 'hidden field', 'DIAMETRO SALIDA 3': 'hidden field', 'ESCURRIMIENTO': 'hidden field', 'UBICACION REFERENCIAL': 'hidden field', 'OBSERVACIONES UBICACION': 'hidden field', 'OBSERVACIONES CONEXIONES': 'hidden field', 'E (m)': 'hidden field', 'N (m)': 'hidden field', 'COTA ANILLO (m)': 'hidden field', 'PROFUNDIDAD (m)': 'hidden field', 'COTA RADIER (m)': 'hidden field', 'Q_APORTE': 'hidden field', 'Q_PEAS_LPS': 'hidden field', 'Q_RILES_LPS': 'hidden field', 'VIVIENDAS': 'hidden field', 'HABITANTES': 'hidden field', 'TIRANTE_MEDIDO_MM': 'hidden field', 'ESPESOR_SEDIMENTO_MM': 'hidden field', });
lyr_Cmara_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});