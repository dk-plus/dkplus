/**
 * 图片懒加载
 * author: dkplus<dkplus@qq.com>
 */
const $ = require('jquery');

const lazy = (function(){
  var _lazy = 'lazy';//标识懒加载图片
  var _ignore = 'lazy-loaded';//成功加载完毕
  var _src = 'data-img';//图片资源

  function loadImg(success, error) {
    //找到需要懒加载的图片
    $(_lazy+':not('+_ignore+')').map((i, item) => {
      var img = new Image();
      img.src = $(item).attr(_src);
      //成功加载
      img.onload = () => {
        $(item).src = img.src;
        if (success && typeof success === 'function') {
          success(item);
        }
      }
      //加载失败
      img.onerror = () => {
        error(item);
      }
      //加载完毕添加忽略标志
      $(item).addClass(_ignore);
    });
  }

  function init() {
    setTimeout(() => {
      loadImg();
    }, 0);
  }

  return {
    init: init
  }
})();

module.exports = lazy;