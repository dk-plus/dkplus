# dkplus
> 这是一个本人根据自己频繁使用的代码写的一个库。
主要内容涉及UI布局、移动页端开发、简化jsAPI的小工具

## 目录
* dkplus-rem
  - rem.js //移动端适配屏幕，保持比例大小不变
* dkplus-ui
  - flex.less //用flex布局写的简单mixin
  - mixin.less
  - reset.less
* dkplus-utils
  - screen.js //简化屏幕相关的api
  - array.js //数组的相关操作

## 用法 Usage
```javascript
//引入dkplus
var dkplus = require('dkplus');

//使用
dkplus.array.indexOfUniq([1,2,3,4,1,2]);
```
test