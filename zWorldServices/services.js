var express = require('express');
var app = express();
var fs = require('fs');
//存储从文件读取的数据
var navdata = null;
var menudata = null;
var bannerdata = null;
var freedata = null;
var walkdata = null;
fs.readFile('data/index/nav.json',function(err,data){
	if(err)
		console.log(err);
	navdata = data;
	fs.readFile('data/index/menu.json',function(err0,data0){
		if(err0)
			console.log(err0);
		menudata = data0;
		fs.readFile('data/index/banner.json',function(err1,data1){
			if(err1)
				console.log(err1);
			bannerdata = data1;
				fs.readFile('data/index/freeWalk.json',function(err2,data2){
				if(err2)
					console.log(err2);
				freedata = data2;
					fs.readFile('data/index/cityWalkList.json',function(err3,data3){
					if(err3)
						console.log(err3);
					walkdata = data3;
					app.listen(9000);
					console.log("服务已经启动");
				});
			});
		});
	});
});

//提供web服务功能
app.use(express.static('www'));

app.all("/*",function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();

})
app.get("/nav",function(req,res,next){
	console.log("我是nav");
	res.header("Content-type","application/json");
	res.send(navdata);

})
app.get("/menu",function(req,res,next){
	console.log("我是菜单");
	res.header("Content-type","application/json");
	res.send(menudata);

})
app.get("/banner",function(req,res,next){
	res.header("Content-type","application/json");
	res.send(bannerdata);
})
app.get("/freewalk",function(req,res,next){
	res.header("Content-type","application/json");
	res.send(freedata);
})
app.get("/walkList",function(req,res,next){
	console.log("我是citywalk");
	res.header("Content-type","application/json");
	res.send(walkdata);
})
var http = require('http');
//suggest组件
/*app.get('/sitesearch/:keyword' , function (req , res) {
	var url = req.params.keyword;
    // 查询本机ip
    // http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
    var sreq = http.request({
        host:     'z.qyer.com', // 目标主机
        path:     '/qcross/home/ajax?action=sitesearch&keyword='+url, // 目标路径
        method:   'get' // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
}*/


app.get('/key',function(req,res){

    //获取用户传递过来的参数
    var arg = req.query['kw'];
    httpSearch(arg,function(info){
        res.send(JSON.parse(info));
    });
    console.log(req.query['kw']);
});

function httpSearch(kwVal,callback){
    http.get('http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=' + kwVal, function(httpRes) {
        var buffers = [];
        httpRes.on('data', function(chunk) {
            buffers.push(chunk);
        });
        httpRes.on('end', function(chunk) {
            var wholeData = Buffer.concat(buffers);
            var dataStr = wholeData.toString('utf8');
            callback(wholeData);
        });
    }).on('error', function(e) {
        console.log(e);
    });
}
