/**
 * 
 * @authors dkplus (dkplus@qq.com)
 * @date    2017-07-22 21:30:36
 * @version $1.0$
 */
var watcher = null;
if (window.navigator.geolocation) {
	//获取地理位置
	// navigator.geolocation.getCurrentPosition(successCallback, errorCallback, option);
	watcher = navigator.geolocation.watchPosition(successCallback, errorCallback, option);
}else{
	//不支持定位
	alert("你的浏览器不支持定位")
}
var option = {
	enableAcurracy: true,
	maximumAge: 60000,
	timeout: 45000
};
/**
 * @param  {position获取的地理位置数据}
 * @return {[type]}
 */
function successCallback(position) {
	console.log(position);
	var output = "";

	output += "你的地理位置已经成功获取\n\n";
	output += "纬度："+position.coords.latitude+"\n";
	output += "经度："+position.coords.longitude+"\n";
	output += "精确度："+position.coords.accuracy+"\n";
	// output += "海拔："+position.coords.altitude+"\n";
	// output += "海拔精确度："+position.coords.altitudeAccuracy+"\n";
	// output += "方向："+position.coords.Heading+"\n";
	// output += "速度："+position.coords.Speed+"\n";

	console.log(output);
}
/**
 * @param  {error错误信息}
 * @return {[type]}
 */
function errorCallback(error) {
	switch(error.code){
		case error.PERMISSION_DENIED:
			alert('没有使用geolocation API的权限');
			break;
		case error.POSITION_UNAVAILABLE:
			alert('不能确定位置');
			break;
		case error.TIMEOUT:
			alert('获取位置超时');
			break;
	}
}