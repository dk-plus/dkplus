// 创建xhr对象
function createXHR() {
    if (typeof XMLHttpRequest !=undefined) {
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject != undefined) {
        if (typeof arguments.callee.activeXString != 'string') {
            var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],i,len;
            for (i = 0; len = versions.length; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {
                    // skip
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    }else {
        throw new Error('不支持xhr对象');
    }
}

// 编码url参数
function addURLParam(url, name, value) {
    url += (url.indexOf('?') === -1? '?' : '&');
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
    return url;
}

// ajax以及发送表单
function ajax(method, url, asyn, data) {
    var xhr = createXHR();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.staus == 304) {
                callback(xhr.responseText);
            }else {
                console.log('获取ajax数据失败');
            }
        }
    };

    xhr.open(method, url, asyn);
    var form = null;
    if (data) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        form = document.getElementById(data);
    }
    xhr.send(form);
}

module.exports = {
    createXHR,
    addURLParam,
    ajax
}