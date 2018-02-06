const $ = require('zeptojs');

const $sound;
const _opt = {
    musicBtn: Config.opt_btn.musicBtn,
    musicSrc: Config.opt_src.musicSrc
}

const initConfig = function(opt) {
    _opt = opt;
}

const initMusic = function(src) {
    const audio = document.createElement('audio');
    audio.src = src;
    audio.loop = true;
}
$(_opt.musicBtn).on('click',function () {
    audio.play();
});

