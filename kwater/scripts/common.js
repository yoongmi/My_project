
$(document).ready(function(){


 $("#header .menu_area>ul>li").mouseenter(function(){
		$("#header").stop().animate({height:364});
		$(this).parents(".menu_area").stop().animate({height:305});//css("height","305px");
});

 $("#header .menu_area").mouseleave(function(){
		$("#header").stop().animate({height:141});
		$(this).stop().animate({height:82});
});

$("#header .menu_area>ul>li ").mouseenter(function(){
		$(this).addClass("on");
		
});

$("#header .menu_area>ul>li ").mouseleave(function(){
		$(this).removeClass("on");
		
});




//검색

	$(".menu_area fieldset span").click(function(){
		$(this).fadeOut(500).siblings(".cancel").fadeIn(500);
		$(".menu_area fieldset").stop().animate({width:300},500,"easeInQuint");
		$(".menu_area fieldset p").stop().animate({width:300},500,"easeInQuint",function(){
			$(this).siblings(".find").fadeIn(500);	
			$(".menu_area fieldset input").fadeIn(500);
		});
		return false;
	});
/*
	$(".menu_area fieldset .find").click(function(e){
		e.preventDefault();
		$("#frm").submit();
		return false;
	});
*/
	$(".menu_area fieldset .cancel").click(function(){
		$(this).siblings(".find").fadeOut(300);
		$(this).fadeOut(500).siblings("span").fadeIn(300);
		$(".menu_area fieldset input").fadeOut(300);
		$(".menu_area fieldset").delay(300).animate({width:53},500,"easeOutQuint");
		$(".menu_area fieldset p").delay(300).animate({width:0},500,"easeOutQuint");
		return false;
	});

	$(".menu_area fieldset input").focus(function(){
		$(this).val(" ");
	});



/* top */

	
$(".topButton").hide();

$(window).scroll(function(){
	var widTop = $(this).scrollTop();
	var headerTop = $("#header").height();
	if(widTop>headerTop){
		$(".topButton").fadeIn(1000);
	}else{
		$(".topButton").fadeOut(800);
	}
	
	$(".topButton button").click(function(){
		$("html,body").stop().animate({scrollTop:0},600)
		return false;
	});

		

});


		var winH = $(window).height()/2;
		var quickmenu = $("#quickmenu");
		var qmenuH = quickmenu.height()/2;
$(window).scroll(function(){
		var winTop = $(this).scrollTop();
		quickmenu.stop().animate({top:winTop+(winH-qmenuH)},400);
});



$("#quickmenu li ").mouseover(function(){
	$(this).css("background-color","#fead12");
});
$("#quickmenu li").mouseleave(function(){
	$(this).css("background-color","#fff");
});








});