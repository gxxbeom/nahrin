$(document).on("pagecreate","#layout",function(){
	
	/* 오른쪽으로 밀때: New Product */
	$("#slide1").swiperight(function(){	
		$(this).children().removeClass('active');
		$(this).stop().animate({left: '30px'},"slow",function(){
			$(this).prepend($(this).children().last());
			$(this).children(':nth-child(2)').addClass('active')
			$(this).css("left","-320px");
		});	
	});
	/*왼쪽으로 밀때: New Product */
	$("#slide1").swipeleft(function(){	
		$(this).children().removeClass('active');
		$(this).stop().animate({left: "-660px"},"slow",function(){
			$(this).append($(this).children().first());
			$(this).children(':nth-child(2)').addClass('active');
			$(this).css("left","-320px");
		});	
	});
	
	/* 오른쪽으로 밀때: Best Product */
	$("#slide2").swiperight(function(){	
		//alert('dd');
		$(this).children().removeClass('active');
		$(this).stop().animate({right: "-670"},"slow",function(){
			$(this).prepend($(this).children().last());
			$(this).children(":nth-child(7)").addClass('active');
			$(this).css("right","-320px");
		});	
	});
	/* 왼쪽으로 밀때: Best Product */
	$("#slide2").swipeleft(function(){	
		console.log($(this).children().width());
		$(this).children().removeClass('active');
		$(this).stop().animate({right: '30px'},"slow",function(){
			$(this).append($(this).children().first());
			$(this).children(":nth-child(7)").addClass('active');
			$(this).css("right","-320px");
		});	
	});


	
});//////////////////all end