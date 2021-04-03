window.onload = function(){
	$(".cards ul li").click(function(){
		var card = $(".cards");
		var ul = $(".cards ul");
		var li = $(".cards ul li");
		
		if(card.hasClass("action")){
			if($(this).hasClass("show")){
				$(this).removeClass("show");
				card.removeClass("action");
				li.removeClass("show");
			}else{
				li.removeClass("show");
				$(this).addClass("show");
			}
		
		}else{
			$(this).addClass("show");
			card.addClass("action");
		}
	});
};