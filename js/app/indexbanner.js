define(['jquery','myutil','app/myfn'],function ($,x,url) {
    function getBannerData(content) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/banner');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
                var banners = JSON.parse(xhr.responseText);
                console.log(banners);
                banners.forEach(function (elem, index) {
                    var img = $("<img/>");
                    img.attr('src',elem.imgUrl);
                    content.append(img);                  
                })
                /*图片轮播*/
                    var index=0;
                    $(".slider-li li").eq(index).css('background','#ff7467');
                    var timer;
                    function nextFun(){
                        index++;
                        if(index>3){
                            index=0;
                        }
                        $(".slider-li li").css('background','rgba(128,11,39,0.5)');
                        $(".slider-li li").eq(index).css('background','#ff7467');
                        $('#content').animate({left:index*-1583},500);
                        // $('#content').delay(2500);                     
                    }
                    content.css('left','0px');
                    timer=setInterval(nextFun,3000);
                    content.on('mouseenter',function(){
                        clearInterval(timer);
                    }).on('mouseleave',function(){
                        timer=setInterval(nextFun,3000);
                    })                      
                    $(".slider-li li").on('click',function(){
                        // clearInterval(timer);
                        index = $(this).index();
                        $('#content').animate({left:index*-1583},500);
                        console.log(index);
                        $(".slider-li li").css('background','rgba(128,11,39,0.5)');
                        $(".slider-li li").eq(index).css('background','#ff7467');
                        $(this).on('mousemove',function(){
                            clearInterval(timer); 
                        }).on('mouseleave',function(){
                            timer=setInterval(nextFun,3000);
                        })  
                                             
                    })
                    /*下一张*/
                    $(".back-right").on('click',function(){
                        index += 1;
                        if(index>3){
                            index=0;
                        }
                        $('#content').animate({left:index*-1583},500);
                        console.log(index);
                        $(".slider-li li").css('background','rgba(128,11,39,0.5)');
                        $(".slider-li li").eq(index).css('background','#ff7467');
                        $(this).on('mousemove',function(){
                            clearInterval(timer); 
                        }).on('mouseleave',function(){
                            timer=setInterval(nextFun,3000);
                        })
                                            
                    })
                    /*上一张*/
                    $(".back-left").on('click',function(){
                        index -= 1;
                        if(index<0){
                            index=3;
                        }
                        $('#content').animate({left:index*-1583},500);
                        console.log(index);
                        $(".slider-li li").css('background','rgba(128,11,39,0.5)');
                        $(".slider-li li").eq(index).css('background','#ff7467');
                        $(this).on('mousemove',function(){
                            clearInterval(timer); 
                        }).on('mouseleave',function(){
                            timer=setInterval(nextFun,3000);
                        })                     
                    })
            }

        }
    }
    return getBannerData;
});