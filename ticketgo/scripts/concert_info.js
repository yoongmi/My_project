
$(document).ready(function(){


	var winH = $(window).height()/2;
	var quickmenu = $("#quick_menu");
	var qmenuH = quickmenu.height();
	var headerH = $("#header").height();
	var monthlyH = $("#monthly").height();
	var innerH = $(".inner").height();
	var quickmenuH = $("#quick_menu").height;
	var stan = winH-(qmenuH);
	var stan2 = headerH+innerH+monthlyH;
 
	

	var list01 = $(".list01").offset().top-200;
	var list02 = $(".list02").offset().top-200;
	var list03 = $(".list03").offset().top-200;
	var list04 = $(".list04").offset().top-200;
	var list05 = $(".list05").offset().top-200;

	var offNum = [list01,list02,list03,list04,list05];
	
	$("#quick_menu").css("top",stan2);

	$(window).scroll(function(){
			var winTop = $(this).scrollTop();
			if(winTop>stan2){
				quickmenu.stop().animate({top:winTop+stan+stan},200);
			}else{
				quickmenu.stop().animate({top:stan2});
			};

			$(".tab_menu .on>ul li").click(function(){
				var Num = $(this).index();
				$("html,body").stop().animate({scrollTop:offNum[Num]},600);
				return false;
			});
	});	

	var date = new Date();
	var finish = new Date(2019,07,22);
	var diffDay = finish.getTime()-date.getTime();
	var dday = Math.ceil(diffDay/1000/60/60/24);
	var dday1 = Math.floor(diffDay/1000/60/60/24/10);
	
	$(".info .inner .dday").find("em").text(3);
	$(".info .inner .dday").find("strong").text(1);
});