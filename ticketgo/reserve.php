<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<title>예매하기 | 티켓GO</title>
<link rel="stylesheet" type="text/css" href="styles/common.css" />
<link rel="stylesheet" type="text/css" href="styles/reserve.css" />
<style type="text/css">

</style>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="scripts/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="scripts/common.js"></script>
<script type="text/javascript" src="scripts/reserve.js"></script>
</head>

<body>
<?php include ('header.html')?>

<div class="naming">
	<ul>
		<li><img src="images/common/로고&notice.jpg" /></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/index.php">메인페이지</a></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/concert.php">콘서트목록</a></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/concert_info.php">콘서트정보</a></li>
		<li class="on"><a href="http://xduathx012.dothome.co.kr/ticketgo/reserve.php">예매하기</a></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/login.php">로그인</a></li>
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/myticket.php">나의티켓</a></li>
	</ul>
</div>
<!-- header 끝 -->


<div id="content">
	<div class="info_box">
		<dl>
			<dt>2017 김연우 크리스마스 콘서트 &#60오마이갓연우&#62</dt>
			<dd class="txt">9회 연속 전회 전석 매진 신화! 지금까지 만난 관객수만 무려 16만명! 공연 하나로 역대급 신화를 쓰고 있는 남자우리는 그를 '김연우'라 쓰고 '연우신','갓연우'라 부른다. 라이브로 경험할 수 있는 모든 것! 겨울의 백미, 크리스마스에만 열리는 절대 공연이 펼쳐진다. 당신이 기다려 온 놀라운 크리스마스!</dd>
			<dd class="pic"><img src="images/reserve/concert_poster.gif" /></dd>
		</dl>
	</div>

	<div class="left_box">
		<div class="date">
			<ul>
				<li class="date01">
					<span>날짜선택</span>
					<ul>
						<li>2017년 12월 22일</li>
						<li>2017년 12월 23일</li>
						<li>2017년 12월 24일</li>
						<li>2017년 12월 25일</li>
					</ul>
				</li>
				<li class="date02">
					<span>회차선택</span>
					<ul>
						<li>19시 00분</li>
					</ul>
				</li>
				<li class="date03">
					<span>예매가능 좌석</span>
					<ul>
						<li>SR석 1000석</li>
						<li>R석 2000석</li>
						<li>S석 4000석</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="sit">
			<p>좌석선택</p>
			<p class="sit_select"><img src="images/reserve/sit.png" /></p>
		</div>
		<div class="pay">
			<table summary="할인적용, 결제수단 순으로 알려줌.">
				<legend class="screen_out">할인적용,결제수단</legend>
				<thead>
					<tr>
						<th scope="col">할인적용</th>
						<th scope="col">결제수단</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="sale">
							<form action="" method="post">
								<fieldset>
									<input type="text" id="coupon" name="coupon" class="coupon" value="쿠폰 또는 예매권의 번호를 넣어주세요"/>
								</fieldset>
							</form>
							<button type="button" class="btn01">등록</button>
							<p>보유포인트 0P</p>
							<form action="" method="post">
								<fieldset>
									<dl class="point">
										<dt>사용포인트</dt>
										<dd><input type="text" id="point" name="point" title="1000원 단위만 사용 가능합니다." /></dd>
									</dl>
								</fieldset>
							</form>
							<button type="button" class="btn02">적용</button>
						</td>
						<td class="cash">
							<form action="" method="post">
								<fieldset>
									<p>
										<label for="card"><input type="radio" id="card" name="payment" /><span>신용카드</span></label>
										<label for="bank"><input type="radio" id="bank" name="payment" /><span>무통장입금</span></label>
									</p>
									<dl class="kind">
										<dt>카드종류</dt>
										<dd>
											<select id="card_list" name="card_list">
												<option value="">KB국민카드</option>
												<option value="">BC카드</option>
												<option value="">롯데카드</option>
												<option value="">현대카드</option>
												<option value="">외환카드</option>
												<option value="">삼성카드</option>
												<option value="">우리카드</option>
												<option value="">신한카드</option>
											</select>
										</dd>
									</dl>
									<dl class="divi">
										<dt>카드구분</dt>
										<dd>
											<input type="radio" id="card01" name="card" /><label for="card01"><span>개인카드</span></label>
											<input type="radio" id="card02" name="card" /><label for="card02"><span>법인카드</span></label>
										</dd>
									</dl>
								</fieldset>
							</form>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="ticket">
			<table summary="티켓 수령을 정하는 테이블.">
				<thead>
					<tr>
						<th scope="col">티켓수령</th>
						<th scope="col">
							<form action="" method="post">
								<label for="ticket01"><input type="radio" id="ticket01" name="ticket" />현장수령</label>
								<label for="ticket02"><input type="radio" id="ticket02" name="ticket" />배송(3,000원)</label>
							</form>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="2">예매번호<span>T83281372345E</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<div class="right_box">
		<div class="right_inner">
			<div class="ticket_info">
				<p>티켓정보</p>
				<dl class="TInfo01">
					<dt>날짜</dt>
					<dd>2017년 12월 24일</dd>
				</dl>
				<dl class="TInfo02">
					<dt>회차</dt>
					<dd>19시 00분</dd>
				</dl>
				<dl class="TInfo03">
					<dt>좌석</dt>
					<dd>SR석 가구역 11열-7</dd>
				</dl>
			</div>
			<div class="pay_info">
				<p>결제정보</p>
				<dl class="PInfo01">
					<dt>티켓금액</dt>
					<dd>146,000원</dd>
				</dl>
				<dl class="PInfo02">
					<dt>수수료</dt>
					<dd>1,000원</dd>
				</dl>
				<dl class="PInfo03">
					<dt>배송비</dt>
					<dd>0원</dd>
				</dl>
				<dl class="line01 PInfo04">
					<dt>쿠폰/예매권</dt>
					<dd>-0원</dd>
				</dl>
				<dl class="PInfo05">
					<dt>포인트</dt>
					<dd>-0원</dd>
				</dl>
				<dl class="line01 total PInfo06">
					<dt>총결제금액</dt>
					<dd>144,000원</dd>
				</dl>
			</div>
		</div>
		<button type="button">결제하기</button>
	</div>
</div>




<?php include ('footer.html')?>


</body>
</html>
