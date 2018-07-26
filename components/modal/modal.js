const artT = require('art-template');

const Modal = (() => {
  // 该模块
  const _e = {};

  // 全局操作数据
  const _g = {
    ele: {
      root: '',
      closeBtn: '.close-btn',
      mask: '.mask'
    },
    data: {},
  };

  // 初始化
  _e.init = () => {
    render();
    clickClose();
  }

  /**
   * 显示modal
   * @param {object} option 参数对象
   * {
      content, 内容，支持html和string
      callback, 回调函数，渲染内容后可对html的元素监听
      closeBtn, false | true 是否显示关闭按钮
      clickMask, false | true点击蒙层是否关闭modal
    }
   */
  _e.show = (option) => {
    let {
      content, 
      callback,
      closeBtn, 
      clickMask
    } = option;

    closeBtn && show(_g.ele.closeBtn);
    closeBtn || hide(_g.ele.closeBtn);
    clickMask && clickMask();

    setTimeout(() => {
      callback && typeof callback === 'function' && callback();
    }, 0);
  }

  // 关闭modal
  _e.hide = () => {
    hide($(_g.ele.root));
  }

  function $(ele) {
    let eleArr = document.querySelectorAll(ele);
    if (eleArr.length > 1) {
      return eleArr;
    }
    return document.querySelector(ele);
  }

  function show(ele) {
    $(ele).style.display = 'block';
  }

  function hide(ele) {
    $(ele).style.display = 'none';
  }

  function clickMask() {
    $(_g.ele.mask).addEventListener('click', () => {
      _e.hide();
    });
  }

  function clickClose() {
    $(_g.ele.closeBtn).addEventListener('click', () => {
      _e.hide();
    })
  }

  // 渲染
  function render() {
    const tpl = require('./modal.tpl')();
    const tplRender = artT.compile(tpl);

    document.querySelector(_g.ele.root).innerHTML = tplRender(_g.data);
  }

  return _e;
})();

module.exports = Modal;