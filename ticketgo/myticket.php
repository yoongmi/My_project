<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<title>나의 티켓 | 티켓Go</title>
<link rel="stylesheet" type="text/css" href="styles/common.css" />
<link rel="stylesheet" type="text/css" href="styles/myticket.css" />
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
		<li><a href="http://xduathx012.dothome.co.kr/ticketgo/login.php">로그인</a></li>
		<li class="on"><a href="http://xduathx012.dothome.co.kr/ticketgo/myticket.php">나의티켓</a></li>
	</ul>
</div>
<!-- 헤더끝 -->

<div id="content">
	<h3><span>나의티켓</span></h3>
	<div class="lnb">
		<ul>
			<li><a href="">내정보</a><span></span></li>
			<li><a href="">쿠폰</a><span></span></li>
			<li><a href="">포인트</a><span></span></li>
			<li class="on"><a href="">예매내역</a><span></span></li>
			<li><a href="">취소내역</a><span></span></li>
			<li><a href="">예매대기</a><span></span></li>
			<li><a href="">나의 관람후기</a><span></span></li>
		</ul>
	</div>
	<div class="reserve_list">
		<h4>예매내역</h4>
		<table summary="예매일, 예매번호, 공연명, 공연일자, 매수, 배송현황 순으로 알려주는 테이블">
			<caption class="screen_out"></caption>
			<colgroup>
				<col width="71px" />
				<col width="106px" />
				<col width="" />
				<col width="93px" />
				<col width="56px" />
				<col width="104px" />
			</colgroup>
			<thead>
				<tr>
					<th scope="col">예매일</th>
					<th scope="col">예매번호</th>
					<th scope="col">공연명</th>
					<th scope="col">공연일자</th>
					<th scope="col">매수</th>
					<th scope="col">배송현황</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2017.10.11</td>
					<td>O17093136963I</td>
					<td class="pic"><img src="images/myticket/poster_01.gif" /><span>뮤지컬 &#60서편제&#62</span></td>
					<td class="date">2017.10.27<span>20시00분</span></td>
					<td>1매</td>
					<td>현장수령</td>
				</tr>
				<tr class="more01">
					<td colspan="6">
						<p>자세한내용<span></span></p>
						<ul>
							<li class="info01">
								티켓정보
								<ul>
									<li>날짜<span>2017년 10월 27일</span></li>
									<li>회차<span>20시 00분</span></li>
									<li>좌석<span>SR석 가구역 11열-7</span></li>
								</ul>
							</li>
							<li class="info02">
								결제정보
								<ul class="cashInfo01">
									<li>티켓금액<span>143,300원</span></li>
									<li>수수료<span>1,000원</span></li>
									<li>배송비<span>0원</span></li>
								</ul>
								<ul class="cashInfo02">
									<li>쿠폰<span>-0원</span></li>
									<li>예매권<span>-0원</span></li>
									<li>포인트<span>-0원</span></li>
								</ul>
							</li>
							<li class="info03">총결제금액<span>144,000원</span></li>
						</ul>
					</td>
				</tr>
				<tr>
					<td>2017.09.01</td>
					<td>M17186428742R</td>
					<td class="pic"><img src="images/myticket/musical_poster_01.gif" /><span>2017 &#60엠.버터플라이 M.Butterfly&#62</span></td>
					<td class="date">2017.09.09<span>18시30분</span></td>
					<td>1매</td>
					<td>수령완료</td>
				</tr>
				<tr class="more01">
					<td colspan="6">
						<p>자세한내용<span></span></p>
						<ul>
							<li class="info01">
								티켓정보
								<ul>
									<li>날짜<span>2017년 09월 09일</span></li>
									<li>회차<span>18시 30분</span></li>
									<li>좌석<span>R석 다구역 1열-13</span></li>
								</ul>
							</li>
							<li class="info02">
								결제정보
								<ul class="cashInfo01">
									<li>티켓금액<span>40,000원</span></li>
									<li>수수료<span>1,000원</span></li>
									<li>배송비<span>0원</span></li>
								</ul>
								<ul class="cashInfo02">
									<li>쿠폰<span>-0원</span></li>
									<li>예매권<span>-0원</span></li>
									<li>포인트<span>-0원</span></li>
								</ul>
							</li>
							<li class="info03">총결제금액<span>41,000원</span></li>
						</ul>
					</td>
				</tr>
				<tr>
					<td>2017.07.03</td>
					<td>P6873299890Y</td>
					<td class="pic"><img src="images/myticket/poster_02.gif" /><span>뮤지컬 &#60오! 당신이 잠든 사이&#62</span></td>
					<td class="date">2017.07.12<span>16시00분</span></td>
					<td>1매</td>
					<td>수령완료</td>
				</tr>
				<tr class="more01">
					<td colspan="6">
						<p>자세한내용<span></span></p>
						<ul>
							<li class="info01">
								티켓정보
								<ul>
									<li>날짜<span>2017년 07월 12일</span></li>
									<li>회차<span>16시 00분</span></li>
									<li>좌석<span>A구역 8열-11</span></li>
								</ul>
							</li>
							<li class="info02">
								결제정보
								<ul class="cashInfo01">
									<li>티켓금액<span>45,000원</span></li>
									<li>수수료<span>1,000원</span></li>
									<li>배송배<span>0원</span></li>
								</ul>
								<ul class="cashInfo02">
									<li>쿠폰<span>-0원</span></li>
									<li>예매권<span>-45,000원</span></li>
									<li>포인트<span>-0원</span></li>
								</ul>
							</li>
							<li class="info03">총결제금액<span>1,000원</span></li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

</div>



<?php include ('footer.html')?>

</body>
</html>
