$(document).ready(function(){



	/* css */
	$(".event_look").css("border-radius","5px");
	$(".same").css("border-radius","5px");
	$(".inner_menu ul li a").css("border-radius","7px");

/* ��� */
	var currentBn =0;
	var nextBn;
	var linum = $(".banner ul li").size()-1;
	$(".banner ul li").css("left","250%");
	$(".banner ul li").eq(0).css("left","50%");

	// ���� ������ ��
	$(".banner .btn .next").click(function(){
		nextBn = currentBn +1;
		if(currentBn==linum){nextBn=0}
		$(".banner ul li").eq(currentBn).stop().animate({left:"-130%"});
		$(".banner ul li").eq(nextBn).css("left","200%");	
		$(".banner ul li").eq(nextBn).stop().animate({left:"50%"});	
		currentBn = nextBn;
		return false;
	});

	// ���� ������ ��
	$(".banner .btn .prev").click(function(){
		nextBn = currentBn-1;
		if(currentBn==0){nextBn=linum}
		$(".banner ul li").eq(currentBn).stop().animate({left:"200%"}); //���� �ִ°� ��������
		$(".banner ul li").eq(nextBn).css("left","-130%");		//���� �ð� �տ� ���
		$(".banner ul li").eq(nextBn).stop().animate({left:"50%"});	//���� �ð� ��Ÿ��
		currentBn = nextBn;
		return false;
	});

	function AutoBanner(){
		setInterval(function(){
			$(".banner .btn .next").click();
		},3000);
	}
	AutoBanner();




/* �̺�Ʈ ����Ʈ ������ */

	// ��ư �����
	var eventnum = $(".event_bottom>div").eq(0).find(">ul>li").size();
	var eventbtn='';
	for(var i=0; i<eventnum; i++){
		eventbtn +="<a href=''>"+(i+1)+"</a>"
	};
	$(".inner_event .btn").prepend(eventbtn);
	$(".inner_event .btn a").first().addClass("on");


	// �̺�Ʈ ������
	var currentEl=0;
	var nextEl;
	$(".inner_event .btn a").click(function(e){
		e.preventDefault();
		nextEl=$(this).index();

		$(this).addClass("on").siblings().removeClass("on");
		
		var same = $(".event_box4 ul li");
		if(currentEl != nextEl){
			if(currentEl<nextEl){	//�����ʿ��� ����
				for(var i=0;i<5;i++){
					$(".event_bottom div").eq(i).find("ul li").eq(currentEl).stop().animate({left:"-100%"},400);
					$(".event_bottom div").eq(i).find("ul li").eq(nextEl).stop().css("left","100%").animate({left:0},400);
				}
			}else{	//���ʿ��� ����
				for(var i=0;i<5;i++){
					$(".event_bottom div").eq(i).find("ul li").eq(currentEl).stop().animate({left:"100%"},400);
					$(".event_bottom div").eq(i).find("ul li").eq(nextEl).stop().css("left","-100%").animate({left:0},400);
				}
			} 
			currentEl = nextEl;
		}
	});


		// �ڵ����
	function eventAuto(){
			setInterval(function(){
				var autonum = currentEl+1
				if(autonum>2){autonum=0;}
				$(".inner_event .btn a").eq(autonum).click();
			},3000);
	}

	 eventAuto();


/* ��ũ�� ������ ��Ÿ�� */
	$(".wrap_box1 p").css("opacity","0");


	$(window).scroll(function(){
		var windowTop = $(this).scrollTop();
		var boxH = $(".wrap_box1").height()*2;
		var boxTop = $(".wrap_box1").offset().top - boxH;
/*		
		var boxH2 = $(".wrap_box2").height()*2;
		var boxTop2 = $(".wrap_box2").offset().top - boxH;
*/
		if(windowTop >= boxTop){
			$(".wrap_box1 .txt1").animate({opacity:1,left:300},1000);
			$(".wrap_box1 .txt2").animate({opacity:1,left:400},1000);
		}


		
	});






	

});