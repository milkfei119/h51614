/**
 * Created by Administrator on 2016/11/7.
 */
//全局配置
requirejs.config({
    baseUrl:'js/lib',//配置第一个属性，管理require模块加载根路径
    paths:{
        'app':'../app',
        'jquery':'jquery-3.1.1',
        'myutil':'../app/myutil'
    },
    shim:{
        'myutil': {
            exports:'createXHR'
        }
    }
});
/*一个文件只能有一个模块*/
define(['jquery','app/indexnav','app/indexmenu','app/indexbanner','app/textsuggest'],function($,nav,menu,banner,suggest){
	/*顶部广告关闭*/
	$(".top_background img").on('click',function(){
		$(".top_background img").hide();
		$(".top_background").slideUp();
	})
	/*放大镜出现搜索框*/
	$(".glass").on('mouseenter',function(){
		$(".glass input").animate({right:221},'fast');		
	})
	$(".glass").on('mouseleave',function(){
		$(".glass input").animate({right:0},'fast');
	});
	$(".glass input").focus(function(){
		$(".glass").unbind('mouseleave');
		$(this).css('right','221px');
	})
	$(".glass input").blur(function(){
		$(".glass input").animate({right:0},'fast');
		$(".glass").on('mouseleave',function(){
			$(".glass input").animate({right:0},'fast');
		});
		$(".glass input").val('');
		$(".text_suggest").empty();
		$(".text_suggest").css('display','none');
	})
	/*建议搜索框*/
	var sug = $(".text_suggest");
	suggest(sug);
	
    //调用nav模块的方法
    /*nav*/
    var nul = $(".nav ul");
    nav(nul);
    /*menu*/
    var mul = $(".trval_list ul");
    menu(mul);
    /*banner*/
    var content = $("#content");
    banner(content);

    
});
