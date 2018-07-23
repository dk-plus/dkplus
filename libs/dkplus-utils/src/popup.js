const artT = require('art-template');

const Popup = (() => {
  // 该模块
  const _e = {};

  // 全局操作数据
  const _g = {
    ele: {
      root: '#popup',
      content: '#popup .content',
      closeBtn: '.close-btn',
      okBtn: '',
      cancelBtn: '',
    },
    data: {},
  };

  // 开发配置
  const config = {
    mockMode: false,
  };

  // 初始化
  _e.init = () => {
    appendPopup();
  }

  // 添加弹窗节点
  _e.appendPopup = () => {
    let popup = document.createElement('div');
    popup.id = _g.ele.root.split('#')[1];

    document.querySelector('body').appendChild(popup);
  }

  // 显示弹窗
  _e.show = (option) => {
    let _opt = {
      title: '',
      content: '',
      closeBtn: true,
      onOk: () => {},
      onCancel: () => {},
      onHide: () => {},
    }
    Object.assign(_opt, option);
    
    if (_opt.title && typeof _opt.title === 'string') {
      render({
        title: _opt.title
      });
    }

    if (_opt.content) {
      document.querySelector(_g.ele.content).innerHTML = _opt.content;
    }

    if (!_opt.closeBtn) {
      document.querySelector(_g.ele.closeBtn).style.display = 'none';
    }

    _g.ele.okBtn.addEventListener('click', () => {
      _opt.onOk();
    });

    _g.ele.cancelBtn.addEventListener('click', () => {
      _opt.onCancel();
    });

    _g.ele.closeBtn.addEventListener('click', () => {
      _opt.onHide();
    });

    document.querySelector(_g.ele.root).style.display = 'block';
  }

  // 隐藏弹窗
  _e.hide = () => {
    document.querySelector(_g.ele.root).style.display = 'none';
  }

  // 内容模板1
  _e.template_1 = (content) => {
    const tpl = require('./template_1.tpl')();
    const tplRender = artT.compile(tpl);
    return tplRender(content);
  }

  // 内容模板2
  _e.template_2 = (content) => {
    const tpl = require('./template_2.tpl')();
    const tplRender = artT.compile(tpl);
    return tplRender(content);
  }

  // 渲染
  function render(data) {
    const tpl = require('./indexFile.tpl')();
    const tplRender = artT.compile(tpl);

    document.querySelector(_g.ele.root).innerHTML = tplRender(data);
  }

  return _e;
})();

module.exports = Popup;