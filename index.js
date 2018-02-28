// const DKRem = require('./libs/dkplus-rem/src/rem.js');
const DKArray = require('./libs/dkplus-utils/src/array.js');
const DKscreen = require('./libs/dkplus-utils/src/screen.js');
const DKPlatform = require('./libs/dkplus-utils/src/platform.js');
const DKLazy = require('./libs/dkplus-utils/src/lazy.js');

console.log('hello dkplus');

const dkplus = {
    // rem: DKRem,
    array: DKArray,
    screen: DKscreen,
    platform: DKPlatform,
    lazy: DKLazy
}

module.exports = dkplus;