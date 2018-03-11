var info = (function () {
  var _fn;
  var _opt = {
    opt_aty: {
      id: null
    },
    opt_share: {
      title: '',
      content: '',
      icon: ''
    }
  }

  var startRequestData = function (fn, options) {
    var callback = (typeof fn !== 'undefined' ? fn : _fn);
    var config = (typeof options !== 'undefined' ? options : _opt);

    requestData(config.opt_aty.id, function (data) {
      
      if (typeof config.opt_share !== 'undefined') {
        config.opt_share.title = data.shareTitle || config.opt_share.title;
      }

      callback && callback(data);
    });
  }

  var init = function (fn, options) {
    _fn = fn;
    _opt = options;

    startRequestData();
  }
  return {

  }
})();

module.exports = info;