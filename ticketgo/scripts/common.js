
$(document).ready(function(){


	$("#monthly p").mouseenter(function(e){
		e.preventDefault();
		$("#monthly").stop().animate({marginTop:0},400);
		$(".naming").stop().animate({top:155},400);
		$(this).addClass("on");
	});

	$("#monthly").mouseleave(function(){
		$(".naming").stop().animate({top:0},400);
		$("#monthly").stop().animate({marginTop:"-155px"},400);
		$(this).removeClass("on");
	});


	var name = ["Musical","Concert","Play","Classic","Sports","Exhibit","Family","Ranking","Customize"];
	var name02 =["뮤지컬","콘서트","연극","클래식/무용","스포츠/레저","전시/행사","아동/가족","랭킹","맞춤공연"] 

/* 메인메뉴 */
	$("#header .gnb>li").mouseenter(function(){
		var indexnum = $(this).index();
		$(this).find(">a").text(name[indexnum]);
		$(this).find("ul").stop().fadeIn();
		
	});

	$("#header .gnb>li").mouseleave(function(){
		var indexnum = $(this).index();
		$(this).find(">a").text(name02[indexnum]);
		$(this).find("ul").stop().hide();
	});

	$("#header .gnb>li ul").mouseover(function(){
		$(".search_box").fadeOut();
	});
	

	/* 검색 */
	$("#header .side_menu .search").click(function(){
		$("#header .search_box").fadeIn();
	});

	

	$("#header .search_box input").focus(function(){
		$(this).val("");
	});

	$(".search_box .close_btn").click(function(){
		$(this).parents(".search_box").fadeOut(600);
	});



	var winH = $(window).height()/2;
	var quickmenu = $("#quick_menu");
	var qmenuH = quickmenu.height();
	var headerH = $("#header").height();
	var monthlyH = $("#monthly").height();
	var bannerH = $(".banner").height();
	var quickmenuH = $("#quick_menu").height;
	var stan = winH-(qmenuH);
	var stan2 = headerH+bannerH+monthlyH;
 

	$("#quick_menu").css("top",stan2+100);
	$(window).scroll(function(){
			var winTop = $(this).scrollTop();
			if(winTop>stan2){
				quickmenu.stop().animate({top:winTop+stan+50},200);
			}else{
				quickmenu.stop().animate({top:stan2});
			}

			if(winTop>50 ){
				$(".naming").stop().animate({opacity:0.95},600);
				$(".naming").css("top","0");
			}else{
				$(".naming").stop().animate({opacity:1},600);
				$(".naming").css("top","0");
			}

	});


	$("#quick_menu p").click(function(){
		$("html,body").stop().animate({scrollTop:0},600);
		return false;
	});

	var quickH = $("#quick_menu .recent ul").height();
	var quicksize = $("#quick_menu .recent li").size();
	$("#quick_menu .more").click(function(){
		$("#quick_menu .recent ul").animate({height:(quickH*quicksize)-5+"px"});
		$("#quick_menu .more a").text("닫기");

		if($("#quick_menu .recent").height()>200){
			$("#quick_menu .recent ul").animate({height:110});
			$("#quick_menu .more a").text("더보기");
		}
		
		return false;
	});





});