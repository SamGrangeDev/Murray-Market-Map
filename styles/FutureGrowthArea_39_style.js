var size = 0;
var placement = 'point';
function categories_FutureGrowthArea_39(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Dwellingup DSP':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(241,255,0,1.0)', lineDash: [16.34,3.268,6.536,3.268], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(132,233,203,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pinjarra DSP Prospected Centre Area':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(210,28,64,1.0)', lineDash: [16.34,3.268,6.536,3.268], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(226,124,83,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'North Dandalup DSP Propected Centre':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,163,219,1.0)', lineDash: [16.34,3.268,6.536,3.268], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(47,62,202,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ravenswood DSP Position Centre':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(132,233,255,1.0)', lineDash: [16.34,3.268,6.536,3.268], lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(215,51,201,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_FutureGrowthArea_39 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Centre");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_FutureGrowthArea_39(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
