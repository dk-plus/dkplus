/**
 * 判断平台
 * author: dkplus<dkplus@qq.com>
 */
const platform = (function(){
  //获取ua信息
  var userAgent = navigator.userAgent.toLowerCase();
  //判断ua
  function getPlatform() {
    var ua = 'unknown';
    if (userAgent.indexOf('windows') > -1) {
      ua = 'windows';
    }
    if (userAgent.indexOf('android') > -1) {
      ua = 'android';
    }
    if (userAgent.indexOf('iphone') > -1) {
      ua = 'iphone';
    }
    if (userAgent.indexOf('ipad') > -1) {
      ua = 'ipad';
    }
    if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1) {
      ua = 'ios';
    }
    return ua
  }

  function init() {
    getPlatform();
  }

  return {
    init: init
  }

})();

module.exports = platform;