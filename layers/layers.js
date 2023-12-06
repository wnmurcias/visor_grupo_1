var wms_layers = [];

var format_5112_0 = new ol.format.GeoJSON();
var features_5112_0 = format_5112_0.readFeatures(json_5112_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5112_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5112_0.addFeatures(features_5112_0);
var lyr_5112_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5112_0, 
                style: style_5112_0,
                interactive: true,
                title: '<img src="styles/legend/5112_0.png" /> 5112'
            });
var format_2321_1 = new ol.format.GeoJSON();
var features_2321_1 = format_2321_1.readFeatures(json_2321_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2321_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2321_1.addFeatures(features_2321_1);
var lyr_2321_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2321_1, 
                style: style_2321_1,
                interactive: true,
                title: '<img src="styles/legend/2321_1.png" /> 2321'
            });
var format_7101_2 = new ol.format.GeoJSON();
var features_7101_2 = format_7101_2.readFeatures(json_7101_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7101_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7101_2.addFeatures(features_7101_2);
var lyr_7101_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7101_2, 
                style: style_7101_2,
                interactive: true,
                title: '<img src="styles/legend/7101_2.png" /> 7101'
            });
var format_4101_3 = new ol.format.GeoJSON();
var features_4101_3 = format_4101_3.readFeatures(json_4101_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4101_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4101_3.addFeatures(features_4101_3);
var lyr_4101_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4101_3, 
                style: style_4101_3,
                interactive: true,
                title: '<img src="styles/legend/4101_3.png" /> 4101'
            });
var format_5128_4 = new ol.format.GeoJSON();
var features_5128_4 = format_5128_4.readFeatures(json_5128_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5128_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5128_4.addFeatures(features_5128_4);
var lyr_5128_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5128_4, 
                style: style_5128_4,
                interactive: true,
                title: '<img src="styles/legend/5128_4.png" /> 5128'
            });
var format_2311_5 = new ol.format.GeoJSON();
var features_2311_5 = format_2311_5.readFeatures(json_2311_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2311_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2311_5.addFeatures(features_2311_5);
var lyr_2311_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2311_5, 
                style: style_2311_5,
                interactive: true,
                title: '<img src="styles/legend/2311_5.png" /> 2311'
            });
var format_5124_6 = new ol.format.GeoJSON();
var features_5124_6 = format_5124_6.readFeatures(json_5124_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_6.addFeatures(features_5124_6);
var lyr_5124_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124_6, 
                style: style_5124_6,
                interactive: true,
                title: '<img src="styles/legend/5124_6.png" /> 5124'
            });

        var lyr_OSMStandard_7 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Grupo1_7Oct2018_EPSG9377_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Grupo1_7Oct2018_EPSG9377",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Grupo1_7Oct2018_EPSG9377_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8225064.673056, 544339.985207, -8223052.413736, 547375.512856]
                            })
                        });
var format_4107_9 = new ol.format.GeoJSON();
var features_4107_9 = format_4107_9.readFeatures(json_4107_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_9.addFeatures(features_4107_9);
var lyr_4107_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4107_9, 
                style: style_4107_9,
                interactive: true,
                title: '<img src="styles/legend/4107_9.png" /> 4107'
            });
var format_2321_10 = new ol.format.GeoJSON();
var features_2321_10 = format_2321_10.readFeatures(json_2321_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2321_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2321_10.addFeatures(features_2321_10);
var lyr_2321_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2321_10, 
                style: style_2321_10,
                interactive: true,
                title: '<img src="styles/legend/2321_10.png" /> 2321'
            });
var format_7101_11 = new ol.format.GeoJSON();
var features_7101_11 = format_7101_11.readFeatures(json_7101_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7101_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7101_11.addFeatures(features_7101_11);
var lyr_7101_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7101_11, 
                style: style_7101_11,
                interactive: true,
                title: '<img src="styles/legend/7101_11.png" /> 7101'
            });
var format_4101_12 = new ol.format.GeoJSON();
var features_4101_12 = format_4101_12.readFeatures(json_4101_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4101_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4101_12.addFeatures(features_4101_12);
var lyr_4101_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4101_12, 
                style: style_4101_12,
                interactive: true,
                title: '<img src="styles/legend/4101_12.png" /> 4101'
            });
var format_5128_13 = new ol.format.GeoJSON();
var features_5128_13 = format_5128_13.readFeatures(json_5128_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5128_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5128_13.addFeatures(features_5128_13);
var lyr_5128_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5128_13, 
                style: style_5128_13,
                interactive: true,
                title: '<img src="styles/legend/5128_13.png" /> 5128'
            });
var format_2311_14 = new ol.format.GeoJSON();
var features_2311_14 = format_2311_14.readFeatures(json_2311_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2311_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2311_14.addFeatures(features_2311_14);
var lyr_2311_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2311_14, 
                style: style_2311_14,
                interactive: true,
                title: '<img src="styles/legend/2311_14.png" /> 2311'
            });
var format_5124_15 = new ol.format.GeoJSON();
var features_5124_15 = format_5124_15.readFeatures(json_5124_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_15.addFeatures(features_5124_15);
var lyr_5124_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124_15, 
                style: style_5124_15,
                interactive: true,
                title: '<img src="styles/legend/5124_15.png" /> 5124'
            });
var format_3101_16 = new ol.format.GeoJSON();
var features_3101_16 = format_3101_16.readFeatures(json_3101_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_16.addFeatures(features_3101_16);
var lyr_3101_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_16, 
                style: style_3101_16,
                interactive: true,
                title: '<img src="styles/legend/3101_16.png" /> 3101'
            });
var group_1 = new ol.layer.Group({
                                layers: [lyr_OSMStandard_7,lyr_Grupo1_7Oct2018_EPSG9377_8,lyr_4107_9,lyr_2321_10,lyr_7101_11,lyr_4101_12,lyr_5128_13,lyr_2311_14,lyr_5124_15,lyr_3101_16,],
                                title: "1"});
var group_json = new ol.layer.Group({
                                layers: [lyr_5112_0,lyr_2321_1,lyr_7101_2,lyr_4101_3,lyr_5128_4,lyr_2311_5,lyr_5124_6,],
                                title: "json"});

lyr_5112_0.setVisible(true);lyr_2321_1.setVisible(true);lyr_7101_2.setVisible(true);lyr_4101_3.setVisible(true);lyr_5128_4.setVisible(true);lyr_2311_5.setVisible(true);lyr_5124_6.setVisible(true);lyr_OSMStandard_7.setVisible(true);lyr_Grupo1_7Oct2018_EPSG9377_8.setVisible(true);lyr_4107_9.setVisible(true);lyr_2321_10.setVisible(true);lyr_7101_11.setVisible(true);lyr_4101_12.setVisible(true);lyr_5128_13.setVisible(true);lyr_2311_14.setVisible(true);lyr_5124_15.setVisible(true);lyr_3101_16.setVisible(true);
var layersList = [group_json,group_1];
lyr_5112_0.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_2321_1.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_7101_2.set('fieldAliases', {'CODIGO_NOM': 'CODIGO_NOM', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', });
lyr_4101_3.set('fieldAliases', {'CODIGO_USO': 'CODIGO_USO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'ROTACION': 'ROTACION', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', });
lyr_5128_4.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', });
lyr_2311_5.set('fieldAliases', {'TIPO_MATER': 'TIPO_MATER', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', });
lyr_5124_6.set('fieldAliases', {'ESTADO_DRE': 'ESTADO_DRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', });
lyr_4107_9.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_2321_10.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_7101_11.set('fieldAliases', {'CODIGO_NOM': 'CODIGO_NOM', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', });
lyr_4101_12.set('fieldAliases', {'CODIGO_USO': 'CODIGO_USO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'ROTACION': 'ROTACION', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', });
lyr_5128_13.set('fieldAliases', {'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', });
lyr_2311_14.set('fieldAliases', {'TIPO_MATER': 'TIPO_MATER', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', });
lyr_5124_15.set('fieldAliases', {'ESTADO_DRE': 'ESTADO_DRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', });
lyr_3101_16.set('fieldAliases', {'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUP': 'ESTADO_SUP', 'NUMERO_CAR': 'NUMERO_CAR', 'ACCESIBILI': 'ACCESIBILI', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RuleID': 'RuleID', 'TempId': 'TempId', 'Shape_Leng': 'Shape_Leng', });
lyr_5112_0.set('fieldImages', {'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_2321_1.set('fieldImages', {'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_7101_2.set('fieldImages', {'CODIGO_NOM': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', });
lyr_4101_3.set('fieldImages', {'CODIGO_USO': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'ROTACION': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', });
lyr_5128_4.set('fieldImages', {'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', });
lyr_2311_5.set('fieldImages', {'TIPO_MATER': 'Range', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_5124_6.set('fieldImages', {'ESTADO_DRE': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'DISPERSION': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_4107_9.set('fieldImages', {'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_2321_10.set('fieldImages', {'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_7101_11.set('fieldImages', {'CODIGO_NOM': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', });
lyr_4101_12.set('fieldImages', {'CODIGO_USO': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'ROTACION': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', });
lyr_5128_13.set('fieldImages', {'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', });
lyr_2311_14.set('fieldImages', {'TIPO_MATER': 'Range', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_5124_15.set('fieldImages', {'ESTADO_DRE': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'DISPERSION': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_3101_16.set('fieldImages', {'TIPO_VIA': 'Range', 'ESTADO_SUP': 'TextEdit', 'NUMERO_CAR': 'TextEdit', 'ACCESIBILI': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RuleID': 'Range', 'TempId': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_5112_0.set('fieldLabels', {});
lyr_2321_1.set('fieldLabels', {});
lyr_7101_2.set('fieldLabels', {});
lyr_4101_3.set('fieldLabels', {});
lyr_5128_4.set('fieldLabels', {});
lyr_2311_5.set('fieldLabels', {});
lyr_5124_6.set('fieldLabels', {});
lyr_4107_9.set('fieldLabels', {});
lyr_2321_10.set('fieldLabels', {});
lyr_7101_11.set('fieldLabels', {});
lyr_4101_12.set('fieldLabels', {});
lyr_5128_13.set('fieldLabels', {});
lyr_2311_14.set('fieldLabels', {});
lyr_5124_15.set('fieldLabels', {});
lyr_3101_16.set('fieldLabels', {});
lyr_3101_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});