<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<title></title>
<link rel="stylesheet" type="text/css" href="style/common.css"/>
<link rel="stylesheet" type="text/css" href="style/sub_common.css"/>
<link rel="stylesheet" type="text/css" href="style/login.css"/>

<style type="text/css">

</style>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript돌" src="scripts/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="scripts/common.js"></script>
<script type="text/javascript">
$(document).ready(function(){

});
</script>
</head>

<body>
<?php include ('header.html')?>
<div id="quickmenu">
		<ul>
			<li><IMG SRC="images/common/로고&notice.jpg"></li>
			<li><a href="http://xduathx.dothome.co.kr/dunkin/index.php">메인페이지</a></li>
			<li class="on"><a href="http://xduathx.dothome.co.kr/dunkin/login.php">로그인</a></li>
			<li><a href="http://xduathx.dothome.co.kr/dunkin/nutritional.php">영양정보</a></li>
			<li><a href="http://xduathx.dothome.co.kr/dunkin/sandwiches.php">샌드위치</a></li>
		</ul>
	</div>
<div id="content">
	<div class="inner">
		<h3>로그인<span></span></h3>
		<div class="sec_form">
			<p class="welcomTxt">던킨도너츠 홈페이지에 오신 것을 환영합니다.</p>
			<form action="" method="post">
				<fieldset>
					<legend class="screen_out">로그인</legend>
					<dl>
						<dt><label for="userid">아이디</label></dt>
						<dd><input type="text" id="userid" name="userid" /></dd>
					</dl>
					<dl>
						<dt><label for="userpw">비밀번호</label></dt>
						<dd><input type="text" id="userpw" name="userpw" /></dd>
					</dl>
					
					<button type="button">로그인</button>
				</fieldset>
			</form>
			<ul>
				<li><a href="">아이디/패스워드 찾기</a></li>
				<li><a href="">회원정보 수정</a></li>
				<li class="join"><a href="">SPC통합 회원가입</a></li>
			</ul>
		</div>

		<div class="online_membership">
			<p>던킨도너츠 온라인 회원 혜택!</p>
			<ul>
				<li class="member1"><span></span>다양한 정보와 온라인<br/>이벤트 참여</li>
				<li class="member2"><span></span>월별 신제품, 이벤트<br/>정보 메일링</li>
				<li class="member3"><span></span>우수고객 점포 오픈<br/>행사 초대</li>
			</ul>
		</div>
		<div class ="survice">
			<ul>
				<li>
					<dl class="survice_box1">
						<dt>SPC 통합회원서비스</dt>
						<dd>하나의 ID/Password로 SPC가 운영하는 사이트(던킨도너츠, 해피포인트카드, 파리바게뜨, 베스킨라빈스, 파리크라상, 파스쿠찌, SPC그룹, 우리밀愛를 한번에!! 간단한 동의 절차만 거치면 하나의 ID/Password로 제휴사이트를 로그인 하실 수 있습니다.</dd>
					</dl>
				</li>
				<li>
					<dl class="survice_box2">
						<dt>고객센터</dt>
						<dd><span>· 운영시간</span>월~금 09:00~17:30 토/일요일 휴무</dd>
						<dd><span>· Tel. </span>080-555-3131(수신자부담)</dd>
					</dl>
				</li>
			</ul>
		</div>
	</div><!-- .inner END -->
</div><!-- #content END -->

<?php include ('footer.html')?>

<script type="text/javascript">

</script>
</body>
</html>
