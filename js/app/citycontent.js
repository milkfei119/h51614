define(['jquery','myutil','app/myfn'],function ($,x,url) {
    function getNavData(contents) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/walkList');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
                var walk = JSON.parse(xhr.responseText);
                console.log(walk);
                var ul = $("<ul></ul>");
                walk.forEach(function(elem,index){
                	var li = $("<li></li>");
                	var img1 = $("<img/>");
                	img1.attr('src',elem.imgurl);
                	li.append(img1);
                	var div = $("<div></div>");
                	div.attr('class','detail');
                	var div1 = $("<div></div>");
                	div1.attr('class','detail_top');
                	var span = $("<span></span>");
                	span.html(elem.address);
                	div1.append(span);
                	var p1 = $("<p></p>");
              		var span3 = $("<span></span>");
                	span3.html(elem.soldCount);
                	p1.append(span3);
                	var span4 = $("<span></span>");
                	span4.html("次已售");
                	p1.append(span4); 
                	div1.append(p1);
                	var p = $("<p></p>");
                	var span1 = $("<span></span>");
                	span1.html(elem.browseCount);
                	p.append(span1);
                	var span2 = $("<span></span>");
                	span2.html("次浏览");
                	p.append(span2);
                	div1.append(p);
                	div.append(div1);
                	var h2 = $("<h2></h2>");
                	var a = $("<a></a>");
                	a.html(elem.title);
                	a.attr('href','#');
                	h2.append(a);
                	div.append(h2);
                	var ul1 = $("<ul></ul>");
                	elem.introduce.forEach(function(elem,index){
                		var li1 = $("<li></li>");
                		var img = $("<img />");
                		img.attr('src','images/content-star.jpg');
                		li1.append(img);
                		var nobr = $("<nobr></nobr>");
                		var p2 = $("<p></p>");
                		p2.html(elem);
                		nobr.append(p2);
                		li1.append(nobr);
                		ul1.append(li1);
                	})
                	div.append(ul1);
                	var div2 = $("<div></div>");
                	div2.attr('class','price');
                	var span5 = $("<span></span>");
                	span5.html(elem.oldPrice+"元");
                	div2.append(span5);
                	var em = $("<em></em>");
                	em.html(elem.newPrice);
                	div2.append(em);
                	var span7 = $("<span></span>");
                	span7.html("元起");
                	div2.append(span7);
                	div.append(div2);
                	var div3 = $("<div></div>");
                	div3.attr('class','buy');
                	var a1 = $("<a></a>");
                	a1.html("立即预定");
                	div3.append(a1);
                	div.append(div3);
                	li.append(div);
                	ul.append(li);
                })
                contents.append(ul);
            }
        }
    }
    return getNavData;
});