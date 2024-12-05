




$(document).ready(function(){



	//헤더
	$(window).resize(function(){
		var winH = $(this).height();
		$("#banner").height(winH);

		var winS = $(window).width();
		if(winS>750){
			$("#header .gnb").css("display","block");
		}else{
			$("#header .gnb").css("display","none");
			$("#header p.menu").removeClass("on");
		}


		var offT1 = $("#contents .disco").offset().top;
		var offT2 = $("#contents .profile").offset().top;
		var offT3 = $("#contents .gallery").offset().top;
		var offT4 = $("#contents .video").offset().top;

		$("#header .gnb ul li").click(function(e){
			e.preventDefault();
			$(this).addClass("on").siblings().removeClass("on");
			
			var winS = $(window).width();
			if(winS < 750){
				$("#header .gnb").css("display","none");
				$("#header p.menu").removeClass("on");
			}
			
			var inN = $(this).index();
		
			if( inN == 0 ){
				$("html,body").stop().animate({scrollTop:offT1 -100 });
			}else if( inN ==1 ){
				$("html,body").stop().animate({scrollTop:offT2 -100 });
			}else if( inN ==2 ){
				$("html,body").stop().animate({scrollTop:offT3 -80 });
			}else{
				$("html,body").stop().animate({scrollTop:offT4 +20 });
			}
		});

	}).resize();

	$("#header p.menu").click(function(){
		$(this).toggleClass("on");
		$("#header .gnb").fadeToggle();
	});

	//스크롤시 헤더
	$(window).scroll(function(){
		var windowTop = $(this).scrollTop();
		$("#contents > div").each(function(){
			var inN = $(this).index();
			if(windowTop >= $(this).offset().top-200){
				$("#header .gnb ul li").eq(inN).addClass("on").siblings().removeClass("on");
			}
		});
		if(windowTop<offT1-200){
			$("#header .gnb ul li").removeClass("on");
		}
	});

	
	//앨범
	var offT1 = $("#contents .disco").offset().top;

	$("#contents .disco > ul li").click(function(){
		var inN = $(this).index();
		var color = ["#c3d7c4","#e2bfbb","#bbc7ca","#ecd5c1","#bbdcdc","#a3c7a0"];
		var altit = ["The Fifth Season","REMEMBER ME","비밀정원","COLORING BOOK","내 얘길 들어봐","WINDY DAY"];

		$("#contents .disco .album > img").attr("src","image/album/album0"+(inN+1)+".jpg");
		$("#contents .disco .album > img").attr("alt",altit[inN]);
		$("#contents .disco .track ul li").eq(inN).show().siblings().hide();

		$("html,body").stop().animate({scrollTop:offT1-50});
		
		$("#contents .disco .album .track").css("border","4px solid"+color[inN]+"");
		$("#contents .disco .album .track ul li b:after").css("background-color","#a3c7a0");

	});
	
	//프로필
	$("#contents .profile ul li").click(function(e){
		e.preventDefault();
		var inN = $(this).index()+1;
		$("#contents .profile .profile_1").css({"background":"url('image/profile/0"+inN+"_gallery_1.jpg') no-repeat right center","background-size":"cover"});
		$("#contents .profile .profile_2").css({"background":"url('image/profile/0"+inN+"_gallery_2.jpg') no-repeat left center","background-size":"cover"});
		$(this).addClass("on").siblings().removeClass("on");
	});
	
	//갤러리
	$("#contents .gallery ul li").click(function(){
		var inN = $(this).index();
		$(".gallery_bg").fadeIn();
		$(".gallery_look img").fadeIn();

		$(".gallery_look img").attr("src","image/gallery/gallery_"+(inN+1)+"_big.jpg");
		$(".gallery_look img").attr("alt","갤러리 이미지0"+(inN+1));

	});

	$(".gallery_bg").click(function(){
		$(this).fadeOut();
		$(".gallery_look img").fadeOut();
		$(".gallery_look img").attr("src","");
		$(".gallery_look img").attr("alt","");
	});



	

	
});


