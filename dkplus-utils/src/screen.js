/**
 * 屏幕相关api简化
 * 
 * author: dkplus <dkplus@qq.com>
 * version: $1.0.0$
 */

const screen = (function(){

    // 获取屏幕宽度
    function getScreenWidth() {
        var width = document.body.clientWidth || document.documentElement.clientWidth;
        return width;
    }

    // 获取屏幕高度
    function getScreenHeight() {
        var height = document.body.clientHeight || document.documentElement.clientHeight;
        return height;
    }

    // 获取文档高度
    function getDocHeight() {
        var docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        return docHeight;
    }

    // 获取元素高度
    function getEleHeight(ele) {
        var eleHeight = ele.scrollHeight || offsetHeights;
        return eleHeight;
    }

    // 获取元素离文档顶部的距离
    function getDistanceToDocTop(ele) {
        var distance = ele.offsetTop;
        return distance;
    }

    // 获取文档已滚动的距离
    function getDocScroll() {
        var distance = document.documentElement.scrollTop;
        return distance;
    }

    // 获取元素离窗口顶部的距离
    function getDistanceToWindowTop(ele) {
        var distance = getDistanceToDocTop(ele) - getDocScroll();
        return distance;
    }

    return {
        getScreenWidth,
        getScreenHeight,
        getDocHeight,
        getEleHeight,
        getDistanceToDocTop,
        getDocScroll,
        getDistanceToWindowTop
    }
})();

module.exports = screen;