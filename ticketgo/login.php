<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<title>로그인 | 티켓GO</title>
<link rel="stylesheet" type="text/css" href="styles/common.css" />
<link rel="stylesheet" type="text/css" href="styles/login.css" />
<style type="text/css">

</style>
</head>

<body>
<?php include ('header.html')?>

<div class="naming">
	<ul>
		<li><img src="images/common/로고&notice.jpg" /></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/index.php">메인페이지</a></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/concert.php">콘서트목록</a></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/concert_info.php">콘서트정보</a></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/reserve.php">예매하기</a></li>
		<li class="on"><a href="http://xduathx012.dothome.co.kr/ticketgo/login.php">로그인</a></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/myticket.php">나의티켓</a></li>
	</ul>
</div>
<!-- header 끝 -->



<div id="content">
	<div class="login">
		<div class="login_top">
			<h3>로그인</h3>
			<p>티켓GO 홈페이지에 오신 것을 환영합니다.</p>
			<form action="" method="post" class="in_box">
				<fieldset>
					<legend class="screen_out">로그인</legend>
					<dl>
						<dt><label for="userId">아이디</label></dt>
						<dd><input type="text" id="userId" name="userId"></dd>
					</dl>
					<dl class="pw">
						<dt><label for="userPw">비밀번호</label></dt>
						<dd><input type="password" id="userPw" name="userPw"></dd>
					</dl>
				</fieldset>
			</form>

			<button type="button">로그인</button>
			<form action="" method="post" class="save">
				<fieldset>
					<legend class="screen_out">아이디저장</legend>
					<label for="idSave"><input type="checkbox" id="idSave" name="idSave" />아이디 저장</label>
				<ul>
					<li><a href="">아이디 찾기</a></li>
					<li><a href="">비밀번호 찾기</a></li>
				</ul>
				</fieldset>
			</form>
		</div>

		<ul>
			<li class="kakao"><a href=""><span></span>카카오계정 로그인</a></li>
			<li class="facebook"><a href=""><span></span>페이스북계정 로그인</a></li>
			<li class="twitter"><a href=""><span></span>트위터계정 로그인</a></li>
		</ul>
		<button type="button">회원가입</button>
	</div>
</div>



<?php include ('footer.html')?>

</body>
</html>
