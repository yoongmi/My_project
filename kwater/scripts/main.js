
$(document).ready(function(){






/* 배너 */
	// 버튼 생성
	var listNum = $("#content .banner>ul>li").size();	
	var bann_btn ="<div class='indicator'>";
	for(var i=0; i<listNum; i++){
		bann_btn += "<a href=''>"+(i+1)+"</a>";
	}
	bann_btn +="</div>";
	
	$(".banner .btn").append(bann_btn);
	$(".banner .btn .indicator a").eq(0).addClass("on");
	

	// 배너 돌리기
	var current=0;
	$(".banner .btn .indicator a").click(function(){
		var btnNum = $(this).index();
		$(".banner>ul>li").eq(btnNum).fadeIn(900).siblings().fadeOut(900);
		$(this).addClass("on").siblings().removeClass("on");
		current = btnNum;
		return false;
	});

	//리스트 개수
	var listNum = $(".banner>ul>li").size();

	// 자동 타이머 배너
	var auto;
	function bannerAuto(){
		auto = setInterval(function(){
			var n = current + 1;
			if(n>listNum-1){n=0}
			$(".banner .btn .indicator a").eq(n).click();
		},3000);
	}
	bannerAuto();
	
	//일시정지
		$(".banner .btn .stop").click(function(){
			clearInterval(auto);
			$(this).hide().siblings(".play").show();
			return false;
		});
	//재생
		$(".banner .btn .play").click(function(){
			bannerAuto();
			$(this).hide().siblings(".stop").show();
			return false;
		});
	
	
	//wave		
		function waveAuto(){
			setInterval(function(){
				$(".banner .wave").animate({top:741},800,function(){
					$(".banner .wave").animate({top:761},800);	
				});
			},1600);
		};
		waveAuto();

	/* 배너 안 메뉴?*/
	// 물결배경 넣기.
	var innerlist = $(".inner_go li").size();
	for(var i=0; i<innerlist;i++){
		$(".inner_go li").eq(i).find("a span>span").css({"background":"url(images/main/quick"+i+".png)"});
	}

	$(".inner_go li>a>span").css("border-radius","50%");

	// 마우스 올릴때
	$(".inner_go li").mouseenter(function(){
		var numi = $(this).index();
		$(".inner_go li").eq(numi).find(">a>span>span").stop().animate({top:"-70px"},400,"easeInSine",function(){
				$(".inner_go li").eq(numi).find(">a>span>span").stop().animate({top:"-50px"},300,"easeInSine",function(){
						$(".inner_go li").eq(numi).find(">a>span>span").stop().animate({top:"-100px"},400,function(){
								$(".inner_go li").eq(numi).find(".icon2").stop().fadeIn(50);
						});
				});
		});
	});

	// 마우스 뗄때
	$(".inner_go li").mouseleave(function(){
		var numi = $(this).index();
		$(".inner_go li").eq(numi).find(">a>span>span").stop().animate({top:"-50px"},400,"easeInSine",function(){
				$(".inner_go li").eq(numi).find(">a>span>span").stop().animate({top:"-70px"},300,"easeInSine",function(){
						$(".inner_go li").eq(numi).find(">a>span>span").stop().animate({top:"0"},300,"easeInSine",function(){
							$(".inner_go li").eq(numi).find(".icon2").stop().fadeOut(50);	
						});
				});
		});
	});
	
	// 물방울 넣기
	for(var i=0; i<innerlist; i++){
		$(".inner_go li").eq(i).find(".icon2").css("background","url(images/main/quickslide"+i+".png)");
	}
	$(".inner_go li .icon2").hide();

//배너끝

	/* 탭메뉴 */
	$(".inner_tab>div button").hide();
	$(".inner_tab>div.on button").show();
	$(".inner_tab>div .seclist").hide();
	$(".inner_tab>.on .seclist").show();

	$(".inner_tab div p").click(function(){
		var divNum = $(this).parents("div").index();
		$(this).parent("div").addClass("on").siblings().removeClass("on");
		$(this).parent("div").siblings().find("button").hide();
		$(this).siblings(".seclist").show().parent("div").siblings().find(".seclist").hide();
		return false;
	});

	$(".inner_tab div h3").click(function(){
		var divNum = $(this).parents("div").index();
		$(this).parent("div").addClass("on").siblings().removeClass("on");
		$(this).siblings("button").show().parent("div").siblings().find("button").hide();
		$(this).siblings(".seclist").show().parent("div").siblings().find(".seclist").hide();
		return false;
	});


	//이전 눌렀을때
		var divnum = $(".inner_tab div").size();
		for(var i=0; i<divnum; i++){
			var liwidth = $(".inner_tab div").eq(i).find("ul li").width();
			var lisize = $(".inner_tab div").eq(i).find("ul li").size()+1;
			$(".inner_tab div").eq(i).find("ul").width((liwidth*lisize)+(15*lisize));
		}
		$(".inner_tab div ul").css("margin-left","-15px")
		

		// 공지사항
	//	$(".inner_tab .sec_notice ul").width("1705px");
		$(".inner_tab .sec_notice .prev").click(function(){
			// 맨 뒤에 있는 리스트 맨 앞으로. 한칸식 애니메이트
			$(".inner_tab .sec_notice ul").prepend($(".inner_tab .sec_notice li").last());
			$(".inner_tab .sec_notice li").first().css("margin-left","-410px").stop().animate({marginLeft:"15px"},400);
			//$(".inner_tab .sec_notice li").eq(1).css("margin-left","15px");
	
			return false;
		});

		// 분양정보
	//	$(".inner_tab .sec_info ul").width("2026px");
		$(".inner_tab .sec_info .prev").click(function(){
			// 맨 뒤에 있는 리스트 맨 앞으로. 한칸식 애니메이트
			$(".inner_tab .sec_info ul").prepend($(".inner_tab .sec_info li").last());
			$(".inner_tab .sec_info li").first().css("margin-left","-410px").stop().animate({marginLeft:"15px"},400);
			//$(".inner_tab .sec_info li").eq(1).css("margin-left","15px");
	
			return false;
		});

		// 보도자료
		//$(".inner_tab .sec_recruit ul").width("2026px");
		$(".inner_tab .sec_recruit .prev").click(function(){
			// 맨 뒤에 있는 리스트 맨 앞으로. 한칸식 애니메이트
			$(".inner_tab .sec_recruit ul").prepend($(".inner_tab .sec_recruit li").last());
			$(".inner_tab .sec_recruit li").first().css("margin-left","-410px").stop().animate({marginLeft:"15px"},400);
			//$(".inner_tab .sec_recruit li").eq(1).css("margin-left","15px");
	
			return false;
		});

		// 채용공고
	//	$(".inner_tab .sec_news ul").width("2026px");
		$(".inner_tab .sec_news .prev").click(function(){
			// 맨 뒤에 있는 리스트 맨 앞으로. 한칸식 애니메이트
			$(".inner_tab .sec_news ul").prepend($(".inner_tab .sec_news li").last());
			$(".inner_tab .sec_news li").first().css("margin-left","-410px").stop().animate({marginLeft:"15px"},400);
			//$(".inner_tab .sec_news li").eq(1).css("margin-left","15px");
	
			return false;
		});
		

	//다음 눌렀을때

		// 공지사항
		//$(".inner_tab .sec_notice ul").width("1705px");
		$(".inner_tab .sec_notice .next").click(function(){
			// 맨 앞에 있는 리스트 맨 뒤로. 한칸식 애니메이트
			$(".inner_tab .sec_notice li").first().stop().animate({marginLeft:"-410px"},400,function(){
				$(".inner_tab .sec_notice ul").append($(".inner_tab .sec_notice li").eq(0));
				$(".inner_tab .sec_notice li").last().stop().animate({marginLeft:"15px"},0);	
			});
		//	$(".inner_tab .sec_notice li").eq(1).css("margin-left","0");
			return false;
		});

		// 분양정보
		//$(".inner_tab .sec_info ul").width("2026px");
		$(".inner_tab .sec_info .next").click(function(){
		// 맨 뒤에 있는 리스트 맨 앞으로. 한칸식 애니메이트
		$(".inner_tab .sec_info li").first().stop().animate({marginLeft:"-410px"},400,function(){
			$(".inner_tab .sec_info ul").append($(".inner_tab .sec_info li").eq(0));
			$(".inner_tab .sec_info li").last().stop().animate({marginLeft:"15px"},0);
		});
		//$(".inner_tab .sec_info li").eq(1).css("margin-left","0");
		return false;
		});

		// 보도자료
	//	$(".inner_tab .sec_news ul").width("1705px");
		$(".inner_tab .sec_news .next").click(function(){
		// 맨 뒤에 있는 리스트 맨 앞으로. 한칸식 애니메이트
		$(".inner_tab .sec_news li").first().stop().animate({marginLeft:"-410px"},400,function(){
			$(".inner_tab .sec_news ul").append($(".inner_tab .sec_news li").eq(0));
			$(".inner_tab .sec_news li").last().stop().animate({marginLeft:"15px"},0);
		});
		//$(".inner_tab .sec_news li").eq(1).css("margin-left","0");
		return false;
		});

		// 채용공고
	//	$(".inner_tab .sec_recruit ul").width("1705px");
		$(".inner_tab .sec_recruit .next").click(function(){
		// 맨 뒤에 있는 리스트 맨 앞으로. 한칸식 애니메이트
		$(".inner_tab .sec_recruit li").first().stop().animate({marginLeft:"-410px"},400,function(){
			$(".inner_tab .sec_recruit ul").append($(".inner_tab .sec_recruit li").eq(0));
			$(".inner_tab .sec_recruit li").last().stop().animate({marginLeft:"15px"},0);
		});
		//$(".inner_tab .sec_recruit li").eq(1).css("margin-left","0");
		return false;
		});




	/* 이너 배너 */
	// 버튼 생성
	var bannerNum = $(".inner_banner li").size();
	var innerbanner_btn ="<div class='btn'>";
		for(var i=0; i<bannerNum; i++){
			innerbanner_btn += "<a href=''>"+(i+1)+"</a>";
		}
		innerbanner_btn +="</div>";
	
	$(".inner_banner").append(innerbanner_btn);
	$(".banner .btn .indicator a").eq(0).addClass("on");
	
	$(".inner_banner .btn a").eq(0).addClass("on");
	// 배너 돌리기
	var current2=0;
	$(".inner_banner .btn a").click(function(){
		var btnNum2 = $(this).index();
		$(".inner_banner li").eq(btnNum2).fadeIn(400).siblings().fadeOut(400);
		$(this).addClass("on").siblings().removeClass("on");
		current2 = btnNum2;
		return false;
	});

	//리스트 개수
	var listNum2 = $(".inner_banner li").size();

	// 자동 타이머 배너

	function inbannerAuto(){
			setInterval(function(){
			var n2 = current2 + 1;
			if(n2>listNum2-1){n2=0}
			$(".inner_banner .btn a").eq(n2).click();
		},4000);
	}
	



	/* 실시간 수자원 현황 */
	
	// 다음 눌렀을 때
		var dlW = $(".sec_livewater .live_box dl").width();
		var dlNum = $(".sec_livewater .live_box dl").size();
		$(".sec_livewater .live_box").width(dlW*2);

		var currentEl = 0;
		var nextEl;

	
		$(".inner_box1 .sec_livewater .next").click(function(e){
			e.preventDefault();
		
			$(".sec_livewater .live_box dl").eq(0).stop().animate({left:"-50%"},400);
		
			$(".sec_livewater .live_box dl").eq(1).css("left","50%").stop().animate({left:"0"},400);
			$(".sec_livewater .live_box").append($(".sec_livewater .live_box dl").eq(0));
			
			$(".sec_livewater .live_box dl").eq(0).addClass("on").siblings().removeClass("on");
		
		});

	
	// 이전 눌렀을 때
		$(".inner_box1 .sec_livewater .prev").click(function(e){
			e.preventDefault();
			$(".sec_livewater .live_box").prepend($(".sec_livewater .live_box dl").last());
			$(".sec_livewater .live_box dl").eq(0).css("left","-50%").stop().animate({left:"0"},400);
		
			$(".sec_livewater .live_box dl").eq(1).stop().animate({left:"50%"},400);
			
			
			$(".sec_livewater .live_box dl").eq(0).addClass("on").siblings().removeClass("on");
		
		});

	// 자동
	var liveauto 
	function livewaterAuto(){
			auto3= setInterval(function(){
			$(".inner_box1 .sec_livewater .next").click();
		},5000);
	}


// 일시정지
	$(".inner_box1 .sec_livewater .stop").click(function(){
			clearInterval(auto3);
			$(this).hide().siblings(".play").show();
	});

	$(".inner_box1 .sec_livewater .play").click(function(){
			livewaterAuto();
			$(this).hide().siblings(".stop").show();
	});




/* 카드로 보는 */
$(".sec_box1 .btn a").click(function(){
	var secboxNum = $(this).index();
	$(".sec_box1 dl").eq(secboxNum).fadeIn(500).siblings("dl").fadeOut(500);
	$(this).addClass("on").siblings().removeClass("on");
	return false;
});

/* 사보 */
$(".sec_box2 .btn a").click(function(){
	var secboxNum2 = $(this).index();
	if( secboxNum2 == 1){
		$(".sec_box2 div").eq(1).fadeIn(500).siblings(".box_sabo").fadeOut(500);
	}else{
		$(".sec_box2 div").eq(0).fadeIn(500).siblings(".box_letter").fadeOut(500);
	}
	$(this).addClass("on").siblings().removeClass("on");
	return false;
});



/* 공유 */
	var shareNum = 1;
	var sharelistNum = $(".inner_box3 .sec_share li").size();

	// 다음 눌렀을 때
		$(".inner_box3 .btn .next").click(function(e){
			e.preventDefault();

			$(".inner_box3 .sec_share li").eq(0).stop().animate({left:"-100%"},400);
		
			$(".inner_box3 .sec_share li").eq(1).css("left","100%").stop().animate({left:"0"},400);
			$(".inner_box3 .sec_share ul").append($(".inner_box3 .sec_share li").eq(0));
			
			$(".inner_box3 .sec_share li").eq(0).addClass("on").siblings().removeClass("on");
			
			if(shareNum>(sharelistNum-1)){ shareNum = 0;}
			shareNum+= 1;
			$(".inner_box3 .sec_share strong").text(shareNum);
		});

	
	// 이전 눌렀을 때
		$(".inner_box3 .sec_share .prev").click(function(e){
			e.preventDefault();

			$(".inner_box3 .sec_share ul").prepend($(".inner_box3 .sec_share li").last());

			$(".inner_box3 .sec_share li").eq(0).css("left","-100%").stop().animate({left:"0"},400);
		
			$(".inner_box3 .sec_share li").eq(1).stop().animate({left:"100%"},400);
			
			
			$(".inner_box3 .sec_share li").eq(0).addClass("on").siblings().removeClass("on");

			if(shareNum<2){ shareNum = 10;}
			shareNum= shareNum-1;
			$(".inner_box3 .sec_share strong").text(shareNum);
		
		});

	// 자동
		var shareauto; 
		function shareboxAuto(){
				auto4= setInterval(function(){
				$(".inner_box3 .btn .next").click();
			},4000);
		}
		

	// 일시정지
		$(".inner_box3 .btn .stop").click(function(){
				clearInterval(auto4);
				$(this).hide().siblings(".play").show();
				return false;
		});

		$(".inner_box3 .btn .play").click(function(){
				shareboxAuto();
				$(this).hide().siblings(".stop").show();
				return false;
		});




});