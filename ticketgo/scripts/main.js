
$(document).ready(function(){



/* 배너 */

	//버튼 생성
	var bannerNum = $("#content .banner ul li").size();

	var indicator="<div class='indicator'><p>";

	for(var i=0; i<bannerNum; i++){
		indicator += "<a href=''>"+(i+1)+"</a>";
	}
	indicator += "</p></div>";
	
	$("#content .banner .banner_btn").append(indicator);
	$("#content .banner .indicator p a").first().addClass("on");

	

	var currentEl = 0, nextEl;
	// 다음으로 넘어가기.
	$("#content .banner .next").click(function(){
		nextEl = currentEl +1;
		if(currentEl>=bannerNum-1){nextEl=0}

		$("#content .banner ul li").eq(currentEl).stop().animate({left:"-100%"},800);
		$("#content .banner ul li").eq(nextEl).stop().css("left","100%").animate({left:"0"},800);

		$(".banner .banner_btn .indicator p a").eq(nextEl).addClass("on").siblings().removeClass("on");
		currentEl = nextEl;
		return false;
	});

	// 이전으로 넘어가기.
	$("#content .banner .prev").click(function(){
		nextEl = currentEl -1;
		if(currentEl==0){nextEl=6}

		$("#content .banner ul li").eq(currentEl).stop().animate({left:"100%"},800);
		$("#content .banner ul li").eq(nextEl).stop().css("left","-100%").animate({left:"0"},800);

		$(".banner .banner_btn .indicator p a").eq(nextEl).addClass("on").siblings().removeClass("on");
		currentEl = nextEl;
		return false;
	});

	//버튼 누르면 
	
	$(".banner .banner_btn .indicator p a").click(function(){
		var anum = $(this).index();
		nextEl = anum;
		$(this).addClass("on").siblings().removeClass("on");
		$("#content .banner ul li").eq(currentEl).stop().animate({left:"-100%"},800);
		$("#content .banner ul li").eq(nextEl).stop().css("left","100%").animate({left:"0"},800);
		currentEl = nextEl; 
		return false;
	});


	//자동배너
	function AutoBanner(){
		setInterval(function(){
			$("#content .banner .next").click();
		},6000);
	}
	AutoBanner();

	//버튼 없었다가 배너 위에 마우스 올리면 나타남.
	$(".banner .banner_btn>a").hide();
	$(".banner").mouseenter(function(){
		$(".banner .banner_btn>a").stop().fadeIn(600);
	});
	$(".banner").mouseleave(function(){
		$(".banner .banner_btn>a").stop().fadeOut(400);
	});


/* 홍보영상 */
	$(".box1 .media dl dt").click(function(){
		$(this).siblings("dd").show().parents("li").siblings().find("dd").hide();
		$(this).parents("li").addClass("on").siblings().removeClass("on");
		return false;
	});

/* 랭킹 */
//	$(".ranking .rank_tab li").addClass("on");
	var ranknum = $(".ranking .rank_tab li").size();
	//for(var i=0; i<ranknum;i++){}
	var num=0;
	$(".ranking .rank_tab li").mouseenter(function(){
		var num = $(this).index();
		for(var i=0; i<ranknum;i++){
		$(".ranking .rank_tab li").eq(i).css("background","url(images/main/rank0"+(i+1)+"_tap_ov.png) no-repeat");
		}
		$(this).css("background","url(images/main/rank0"+(num+1)+"_tap.png) no-repeat");
		$(".ranking .rank_list>div").eq(num).addClass("on").siblings().removeClass("on");
		$(".ranking .rank_tab li").eq(num).addClass("on").siblings().removeClass("on");
		
		if($(".inner").find("ul").css("margin-left","0")==true){
			$(".ranking .rank_list>div").eq(num).find(".btn .next").hide();
			$(".ranking .rank_list>div").eq(num).find(".btn .prev").show();
		}else{
			$(".ranking .rank_list>div").eq(num).find(".btn .prev").hide();
			$(".ranking .rank_list>div").eq(num).find(".btn .next").show();
		}

	});


	// 마우스 빠져나갈때 유지.
	for(var i=0; i<ranknum;i++){
		$(".ranking .rank_tab li").eq(i).css("background","url(images/main/rank0"+(i+1)+"_tap_ov.png) no-repeat");
		}
		$(".ranking .rank_tab li.on").css("background","url(images/main/rank0"+(num+1)+"_tap.png) no-repeat");

	// 랭킹 이동
	$(".rank_list>div .btn .prev").hide();
	$(".rank_list>div .btn .next").click(function(){
		$(this).parent().siblings(".inner").find("ul").animate({marginLeft:"-1015px"});
		$(this).siblings(".prev").fadeIn(600);
		$(this).fadeOut(600);
		return false;
	});

	$(".rank_list>div .btn .prev").click(function(){
		$(this).parent().siblings(".inner").find("ul").animate({marginLeft:"0"});
		$(this).siblings(".next").fadeIn(600);
		$(this).fadeOut(600);
		return false;
	});


	/* 마우스올리면 커지고 그림자.*/
	$(".inner_li .list li").mouseenter(function(){
		$(this).css("box-shadow","3px 3px 5px #333");
	});
	
	$(".inner_li .list li").mouseleave(function(){
		$(this).css("box-shadow","none");
	});

	//박스 오면 마우스 생김.
	$(".inner_li .btn").hide();

	$(".concert").mouseenter(function(){
		$(this).find(".btn").fadeIn(600);
	});
	$(".concert").mouseleave(function(){
		$(this).find(".btn").fadeOut(400);
	});

	$(".play").mouseenter(function(){
		$(this).find(".btn").fadeIn(600);
	});
	$(".play").mouseleave(function(){
		$(this).find(".btn").fadeOut(400);
	});

	$(".etc").mouseenter(function(){
		$(this).find(".btn").fadeIn(600);
	});
	$(".etc").mouseleave(function(){
		$(this).find(".btn").fadeOut(400);
	});



	$(".concert .btn .next").click(function(){
		$(this).parent().siblings(".list").find("li").eq(0).css("margin-left","-238px");
		$(".concert .list ul").append($(".concert .list ul li").eq(0));
		$(".concert .list li").last().css("margin-left","7px");
		return false;
	});

	$(".concert .btn .prev").click(function(){
		$(".concert .list ul").prepend($(".concert .list ul li").last());
		//$(".concert .list li").last().css("margin-left","0");
		return false;
	});



	$(".play .btn .next").click(function(){
		$(this).parent().siblings(".list").find("li").eq(0).css("margin-left","-238px");
		$(".play .list ul").append($(".play .list ul li").eq(0));
		$(".play .list li").last().css("margin-left","7px");
		return false;
	});

	$(".play .btn .prev").click(function(){
		$(".play .list ul").prepend($(".play .list ul li").last());
		//$(".concert .list li").last().css("margin-left","0");
		return false;
	});



	$(".etc .btn .next").click(function(){
		$(this).parent().siblings(".list").find("li").eq(0).css("margin-left","-238px");
		$(".etc .list ul").append($(".etc .list ul li").eq(0));
		$(".etc .list li").last().css("margin-left","7px");
		return false;
	});

	$(".etc .btn .prev").click(function(){
		$(".etc .list ul").prepend($(".etc .list ul li").last());
		//$(".concert .list li").last().css("margin-left","0");
		return false;
	});


});