define(['jquery','myutil','app/myfn'],function ($,x,url) {
    function getNavData(nul) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/nav');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
                var navs = JSON.parse(xhr.responseText);
                console.log(navs);
                navs.forEach(function (elem, index) {
                    var li = $("<li></li>");
                    var a = $("<a></a>");
                    a.html(elem.list);
                    a.attr('href','#')
                    li.append(a);
                    nul.append(li);
                })
                $(".nav ul li").on('mouseenter',function(){
                    $(this).css('background','#f5f5f5');
                    $(this).children().css('color','#00b081');
                }).on('mouseout',function(){
                    $(this).css('background','none');
                    $(this).children().css('color','#323232');
                })
            }
        }
    }
    return getNavData;
});