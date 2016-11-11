define(['jquery','myutil','app/myfn'],function ($,x,url) {
    function getMenuData(mul) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/menu');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
                var menus = JSON.parse(xhr.responseText);
                console.log(menus);
                menus.forEach(function (elem,index) {
                    var li = $("<li></li>");
                    var img = $("<img/>");
                    img.attr('src',elem.Img);
                    li.append(img);
                    var h2 = $("<h2></h2>");
                    h2.html(elem.title);
                    li.append(h2);
                    var p = $("<p></p>");       
                    elem.mainCity.forEach(function(elem,index){
                       var a = $("<a></a>");
                       a.html(elem);
                       a.attr('href','#');
                       p.append(a); 
                    })
                    li.append(p);
                    var b = $("<b></b>");
                    b.html(">");
                    li.append(b);
                    var div = $("<div></div>");
                    div.attr('class','travel_list_detail');
                    var ul = $("<ul></ul>");
                    div.append(ul);
                    elem.moreCity.forEach(function(elem,index){
                    	var lis = $("<li></li>");
                        var h3 = $("<h3></h3>");
                        h3.html(elem.cityName);
                        lis.append(h3);
                        var section = $("<section></section>");
                        elem.items.forEach(function(elem,index){
                            if(elem.indexOf('http') == -1){
                                var a = $("<a></a>");
                                a.attr('href','#');
                                a.html(elem);
                                section.append(a);
                            }else{
                                var img = $("<img/>");
                                img.attr('src',elem);
                                img.attr('class','listimg');
                                section.append(img);
                            }
                        })
                        lis.append(section);
                        ul.append(lis);
                    })
                    if(elem.hasOwnProperty('moreCityImg') == true){
                    	var lis = $("<li></li>");
                    	var img = $("<img/>");
	                    img.attr('src',elem.moreCityImg);
	                    img.attr('class','morecity');
	                    lis.append(img)
	                    ul.append(lis);
                    }                   
                    li.append(div);
                    mul.append(li);
                    $("travel_list_detail li:eq(0)").css('display','block');
                    li.on("mouseenter",function(){
                        $(this).children('div').show();
                        $(this).css('background','#fff');
                        $(this).children('h2').css('color','#323232');
                        $(this).children('a').css('color','#959595');
                    }).on("mouseleave",function(){
                        $(this).children('div').hide();
                        $(this).css('background','none');
                        $(this).children('h2').css('color','#fff');
                        $(this).children('a').css('color','#c0c0c0');
                    })
                })
            }
            
        }
    }

    return getMenuData;
});