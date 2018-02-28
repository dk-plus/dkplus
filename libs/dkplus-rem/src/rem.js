const $ = require('zeptojs');

var _e = {};

var PSD_WIDTH = 720;
var FONT_SIZE = 50;
var TIMES = 2;

function init(psdWidth, fontSize, times){
    if (psdWidth) {
        PSD_WIDTH = psdWidth;
    }
    if (fontSize) {
        FONT_SIZE = fontSize;
    }
    if (times) {
        TIMES = times;
    }

    setFontSize();

    window.onresize = function() {
        setFontSize();
    }
}
function setFontSize(){
    var clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (clientWidth/(PSD_WIDTH/TIMES))*FONT_SIZE + 'px';
}

module.export = {
    init
}