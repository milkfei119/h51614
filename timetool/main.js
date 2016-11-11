// 实现打印
function print(mag){
	var now = new Date();
	var now = new Date();
	var year=now.getFullYear();
	var month = now.getMonth()+1;
	var date = now.getDate();
	var day = now.getDay()+1;
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	console.log("当前时间："+year+"-"+month+"-"+date+"-"+" "+hours+":"+minutes+":"+seconds+" 打印内容："+msg);
}
exports.pringt = pring //对外开放