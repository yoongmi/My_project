$(document).ready(function(){

	$("#monthly p").click(function(e){
		e.preventDefault();
		var top = $("#monthly .inner ul").height();
		if(top=="214"){
			$("#monthly .inner ul").stop().animate({"height":4});
		}else{
			$("#monthly .inner ul").stop().animate({"height":214});	
		}
		return false;
	});

	
	$(".gnb>li").mouseenter(function(){
		$("#header").stop().animate({"height":477});
		var indexnum = $(this).index();
		$(this).find(">ul").stop().fadeIn(200).parent("li").siblings().find(">ul").fadeOut(200);
		$(this).find(">a span").stop().fadeIn(800).css("display","block");
	});

	$(".gnb>li").mouseleave(function(){
		$(".gnb>li>a span").hide();
	});


	$(".gnb").mouseleave(function(){
		var indexnum = $(this).index();
		$("#header").stop().animate({"height":176});
	});




/* °Ë»öÃ¢ */
	$("#search .search_bg").css("background-color","rgba(0,0,0,0.5)")
	$("#search .search_box").css({"display":"block","opacity":"0","z-index":"10"});
	
	$(".header_top .search").click(function(){
		$("#search .search_box").css("z-index","90").animate({opacity:1,top:80});
		$("#search .search_bg").fadeIn(500);
		return false;
	});

	$(".search_box .close_icon").click(function(){
		$("#search .search_box").css({"opacity":"0","z-index":"10"}).css("top","10px");
		$("#search .search_bg").hide();
		return false;
	});



/* family site */
	$(".footer_left dl dt").click(function(){
		var footerT = $(".footer_left dl dd ul").height();
		if(footerT == 0){
			$(".footer_left dl dd ul").css("height","227");
			$(".footer_left dl dt").css("background","url(images/common/family_size_on.png) no-repeat  100% 0");
		}else{
			$(".footer_left dl dd ul").css("height","0");
				$(".footer_left dl dt").css("background","url(images/common/family_size_off.png) no-repeat  100% 0");
		}
	});
	






});