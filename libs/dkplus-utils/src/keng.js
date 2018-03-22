// 判断是否数组，不能用typeof和constructor
function isArray(arr) {
  if (Array.isArray !== undefined) {
    return Array.isArray(arr);
  }
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    return true;
  }
}