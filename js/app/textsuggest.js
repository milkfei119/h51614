define(['jquery','myutil','app/myfn'],function ($,x,url){
	function textSuggest(sug){
		var baseurl = url.getBaseURL() + '/key?kw=';
		$(".search-text").keyup(function(){
			sug.show();
			sug.empty();
			var str = $(".search-text").val();
			$.ajax({
				type:"GET",
				url:baseurl+''+str,
				success:function(data){
					console.log(data);
					var news = data.data.list;
					var ul = $("<ul></ul>");
					$(news).each(function(index,elem){
						var li = $("<li></li>");
						if(elem.hasOwnProperty('src')==true){							
							var p = $("<p></p>");
							var img = $('<img/>');
							img.attr('src',elem.src);
							p.append(img);
							var p1 = $('<p></p>');
							p1.html(elem.en_name);
							p.append(p1);
							var p2 = $('<p></p>');
							p2.html(elem.belong_name);
							p.append(p2);
							li.append(p);
							ul.append(li);
						}else{
							var p = $('<p></p>');
							p.html(elem.word);
							li.append(p);
							ul.append(li);
						}
					})
					sug.append(ul);
				}
			})
		})
	}
	return textSuggest;
})
