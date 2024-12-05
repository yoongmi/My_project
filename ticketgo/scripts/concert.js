
$(document).ready(function(){



	$(".all_list li").mouseenter(function(){
		$(this).find("a").css("background","rgba(31,30,63,0.8) url(images/concert/concert_bul.gif) no-repeat 50% 40%");
		$(this).find("p").show();
		$(this).find("dt").css({"bottom":"220px","color":"#f2f2f7"});
		$(this).find("dd.place").css({"bottom":"190px","color":"#f2f2f7"});
		$(this).find("dd.date").css({"bottom":"170px","color":"#f2f2f7"});
	});

	$(".all_list li").mouseleave(function(){
		$(this).find("a").css("background","transparent");
		$(this).find("p").hide();
		$(this).find("dt").css({"bottom":"57px","color":"#334356"});
		$(this).find("dd.place").css({"bottom":"30px","color":"#334356"});
		$(this).find("dd.date").css({"bottom":"10px","color":"#334356"});
	});



	var name = ["all","in","out","fes","talk"];
	var linum;
	$(".tab_menu .on li").click(function(){
		linum =$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".all_list ul li").hide();
		$(".all_list ul ."+name[linum]+"").show();
		$(".btn").hide();
		if(linum==0){$(".btn").show()}
		return false;
	});
	

	var name2 = ["all_list","com_list","part_list","end_list","open_list"];
	$(".tab_menu>ul>li").click(function(){
		var indexnum = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(this).find("ul").show().parent().siblings().find("ul").hide();
		
		$("#content ."+name2[indexnum]+"").show().siblings().hide();

		return false;
	});


	$(".all_list .btn .indicator a").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		return false;
	});
	
	
	
});