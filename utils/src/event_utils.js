// 事件处理工具
var EventUtil = {
    // 添加事件处理
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        }else if (element.attachEvent) {
            element.attachEvent('on'+type, handler);
        }else {
            element['on' + type] = handler;
        }
    },
    // 获取事件
    getEvent: function (event) {
        return event ? event : window.event;
    },
    // 获取事件源
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    // 取消事件默认行为
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
    },
    // 移除事件处理
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(element, type, handler);
        }else if (element.detachEvent) {
            element.detachEvent('on'+type, handler);
        }else {
            element['on' + type] = null;
        }
    },
    // 停止冒泡
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    },
    // 获取相关元素
    getRelatedTarget: function (event) {
        if (event.getRelatedTarget) {
            return event.getRelatedTarget;
        }else if (event.toElement) {
            return event.toElement;
        }else if (event.fromElement) {
            return event.fromElement;
        }else {
            return null;
        }
    },
    // 获取鼠标按键
    getButton: function (event) {
        if (document.implementation.hasFeature('MouseEvents', '2.0')) {
            return event.button;
        }else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    // 鼠标滚轮滚动时显示detail的值
    getWheelDelta: function (event) {
        if (event.whellDelta) {
            //opera的正负号颠倒
            return (client.engine.opera && client.engine.opera < 9.5 ? -client.whellDelta :event.whellDelta);
        }else {
            //火狐的值为正负3，其他浏览器为正负120
            return -event.delta * 40;
        }
    },
    // 获取键码
    getCharCode: function (event) {
        if (typeof event.charCode == 'number') {
            return event.charCode;
        }else {
            return event.keycode;
        }
    }
}

module.exports = EventUtil;