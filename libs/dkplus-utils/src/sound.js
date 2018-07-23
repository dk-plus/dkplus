/**
 * 音频相关
 * @author: dkplus<dkplus@qq.com>
 * date: 2018-07-23
 */
const Sound = (() => {
  // 该模块
  const _e = {};

  // 全局操作数据
  const _g = {
    ele: {},
    data: {},
    music: {
      musicList: [],
      bgMusic: document.createElement('audio'),
      clickMusic: document.createElement('audio'),
      muted: false,
    }
  };

  // 初始化方法
  _e.init = () => {
    _e.initSource();
  }

  // 初始化音频资源
  function initSource() {
    preLoad(_g.music.musicList, () => {
      console.log('All music sources are already');
    });
  }

  /**
   * 预加载一段音频
   * @param {string} src 音乐url
   * @param {function} callback 成功加载回调函数
   */
  _e.preLoad = (src, callback) => {
    let audio = document.createElement('audio');
    audio.src = src;

    audio.oncanplaythrough = () => {
      callback && typeof callback === 'function' && callback();
    }
  }

  /**
   * 预加载一组音频
   * @param {Array} musicArr 音频url数组列表
   * @param {function} callback 成功加载回调函数
   */
  _e.preLoadMusics = (musicArr, callback) => {
    musicArr.forEach((music, index, arr) => {
      if (index < arr.length-1) {
        preLoad(music);
      }
      if (index === arr.length-1) {
        preLoad(music, callback);
      }
    });
  }

  /**
   * 播放背景音乐
   * @param {Object} option 音频属性对象
   */
  _e.playBgMusic = (option) => {
    let _opt = {
      src: '',
      loop: false,
      autoplay: false,
    }
    Object.assign(_opt, option);

    _g.music.bgMusic = _opt;
    _g.music.bgMusic.play();
  }

  /**
   * 播放点击音乐
   * @param {Object} option 音频属性对象
   */
  _e.playClickMusic = (option) => {
    let _opt = {
      src: '',
      loop: false,
      autoplay: false,
    }
    Object.assign(_opt, option);

    _g.music.clickMusic = _opt;
    _g.music.clickMusic.play();
  }

  // 暂停背景音乐
  _e.pauseBgMusic = () => {
    _g.music.bgMusic.pause();
  }

  // 暂停点击音乐
  _e.pauseClickMusic = () => {
    _g.music.clickMusic.pause();
  }

  _e.stop = () => {}

  // 全局静音
  _e.toggleMute = () => {
    _g.music.muted = !_g.music.muted;

    _g.music.bgMusic.muted = _g.music.muted;
    _g.music.bgMusic.volume = _g.music.muted?0:1;
    _g.music.clickMusic.muted = _g.music.muted;
    _g.music.clickMusic.volume = _g.music.muted ? 0 : 1;
  }

  return _e;
})();

module.exports = Sound;