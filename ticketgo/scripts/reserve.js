
$(document).ready(function(){


	// 스크롤

	var infoof = $(".info_box").offset().top;
	var infoH = $(".info_box").height();
	var info = infoof + infoH;
	var rightbox = $(".right_box").height();
	var leftbox = $(".left_box").height();
	var ticketf = $(".ticket").offset().top;
	var ticketH = $(".ticket").height();
	var ticket = ticketf + ticketH;

	var footerH = $("#footer").height();
	var footerf = $("#footer").offset().top;
	var footert = footerH + footerf;

	var stand = info+leftbox;
	//alert(stand);

	$(window).scroll(function(){
		var winTop = $(this).scrollTop();
		if(winTop>info){
			$(".right_box").stop().animate({top:winTop-rightbox},200);
			if(winTop>stand/1.5){
				$(".right_box").stop().animate({top:leftbox-rightbox},200);
			}
		}else{
			$(".right_box").stop().animate({top:0},200);
		}
		
		

	});










	/* 다 비워두기 */
	$(".right_box .right_inner .ticket_info dl dd").text("");
	$(".right_box .right_inner .pay_info .PInfo01 dd").text("");
	$(".right_box .right_inner .pay_info .PInfo02 dd").text("");
	$(".right_box .right_inner .pay_info .PInfo03 dd").text("");
	$(".right_box .right_inner .pay_info .PInfo06 dd").text("0원");

	/* 날짜 선택 */
	$(".left_box .date .date01 ul li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".right_inner .TInfo01 dd").text($(this).text());
	});

	// 회차선택
	$(".left_box .date .date02 ul li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".right_inner .TInfo02 dd").text($(this).text());
	});



		



	// 예매가능
	var srindexNum;
	var total="0";
	$(".left_box .date .date03 ul li").click(function(){
		srindexNum = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		var string = $(this).text().substr(0,3);
		$(".right_inner .TInfo03 dd").text(string+" 랜덤 좌석");

		if(string=="SR석"){
			$(".right_box .right_inner .pay_info .PInfo01 dd").text("143,000원");
		}else if(string=="R석 "){
			$(".right_box .right_inner .pay_info .PInfo01 dd").text("121,000원");
		}else{
			$(".right_box .right_inner .pay_info .PInfo01 dd").text("99,000원");
		}

		$(".right_box .right_inner .pay_info .PInfo02 dd").text("1,000원");



		//총결제금액
			var cash =["143000","121000","99000"];
			total = Number(cash[srindexNum])+1000;
			$(".right_box .right_inner .pay_info .PInfo06 dd").text(total+"원");

		
	});


	//할인적용
		$(".pay .sale .coupon").focus(function(){
			$(this).val("");
		});
	
	
		//포인트
		var in_name
		$(".sale .btn02").click(function(){
			in_name = $(".sale .point input").val();
			$(".right_box .right_inner .pay_info .PInfo05 dd").text("-"+in_name+"원");
			$(".right_box .right_inner .pay_info .PInfo06 dd").text(total-in_name+"원");
		});

		
		$(".ticket #ticket01").click(function(){
			$(".right_box .right_inner .pay_info .PInfo03 dd").text("0원");
		});

		$(".ticket #ticket02").click(function(){
			$(".right_box .right_inner .pay_info .PInfo03 dd").text("3,000원");
			total += 3000;
			$(".right_box .right_inner .pay_info .PInfo06 dd").text(total-in_name+"원");
		});

		
});