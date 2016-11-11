$(document).ready(function(){
	$(".trval_list ul li").on("mouseenter",function(){
	//	$(this).css("background-color","#dfdfdf");
	//	$(this).children().css('color','red');
		$("trval_list_detail div").eq($(this).index()).show().on("mouseenter",function(){
			$(this).show();
		}).on("mouseout",function(){
			$(this).hide();
		});
	}).on("mouseout",function(){
		$("trval_list_detail div").eq($(this).index()).hide();
	})
	console.log($(".trval_list ul li"));
})
