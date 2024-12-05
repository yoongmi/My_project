<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<title>정보목록 | K-water</title>
<link rel="stylesheet" type="text/css" href="styles/common.css"/>
<link rel="stylesheet" type="text/css" href="styles/sub_common.css"/>
<link rel="stylesheet" type="text/css" href="styles/info_list.css"/>
<style type="text/css">

</style>
<script type="text/javascript"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="scripts/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="scripts/common.js"></script>
<script type="text/javascript" src="scripts/sub_common.js"></script>
</head>

<body>
<!-- header -->
<?php include ('sub_header.html')?>
<!-- header END -->
<div id="quickmenu">
	<ul>
		<li><IMG SRC="images/common/로고&notice.jpg"></li>
		<li><a href="http://xduathx.dothome.co.kr/k-water/index.php">메인페이지</a></li>
		<li><a href="http://xduathx.dothome.co.kr/k-water/article.php">보도자료</a></li>
		<li><a href="http://xduathx.dothome.co.kr/k-water/event.php">이벤트 안내</a></li>
		<li><a href="http://xduathx.dothome.co.kr/k-water/notice.php">공지사항</a></li>
		<li class="on"><a href="http://xduathx.dothome.co.kr/k-water/info_list.php">정보목록</a></li>
	</ul>
</div>

<div class="topButton">
		<button type="button">top</button>
	</div>


<div id ="banner">
	<img src="images/sub_common/sVisual04.jpg" alt="" />
</div>
<!-- banner END -->


<div id="inner">
	<div class="lnb">
		<h2><a href="">열린경영</a></h2>
		<ul>
			<li class="on">
				<a href="">정보공개/공표<span></span></a>
				<ul>
					<li><a href="">제도안내</a></li>
					<li><a href="">정보공개 청구</a></li>
					<li><a href="">불복구제절차 및 방법</a></li>
					<li class="on"><a href="">정보목록</a></li>
					<li><a href="">사전정보공표</a></li>
					<li><a href="">공공데이터개방</a></li>
					<li class="group">
						<a href="">사업실명제<span></span></a>
						<ul>
							<li><a href="">사업실명제 개요</a></li>
							<li><a href="">대상사업</a></li>
						</ul>	
					</li>
				</ul>
			</li>
			<li>
				<a href="">경영공시</a>
			</li>
			<li>	
				<a href="">지속가능경영<span></span></a>
				<ul>
					<li><a href="">체계</a></li>
					<li><a href="">윤리경영</a></li>
					<li>
						<a href="">환경경영</a>
						<ul>
							<li><a href="">소개</a></li>
							<li><a href="">기후변화 대응</a></li>
							<li><a href="">환경가치 창출</a></li>
						</ul>
					</li>
					<li><a href="">동반성장</a></li>
				</ul>
			</li>
			<li>
				<a href="">사회공헌<span></span></a>
				<ul>
					<li><a href="">개요</a></li>
					<li><a href="">주요활동</a></li>
					<li>
						<a href="">물사랑나눔단</a>
						<ul>
							<li><a href="">소개</a></li>
							<li><a href="">나눔활동</a></li>
							<li><a href="">사랑나눔캘린더</a></li>
						</ul>	
					</li>
				</ul>
			</li>
			<li>	
				<a href="">물 이야기<span></span></a>
				<ul>
					<li><a href="">물과 생활</a></li>
					<li>
						<a href="">물과 통계</a>
						<ul>
							<li><a href="">쉬운 물통계</a></li>
							<li><a href="">우리나라 물통계</a></li>
						</ul>
					</li>
					<li>
						<a href="">웹툰</a>
						<ul>
							<li><a href="">스노우달</a></li>
						</ul>
					</li>
					<li><a href="">실시간정보</a></li>
					<li><a href="">인포그래픽</a></li>
				</ul>
			</li>
		</ul>
	</div><!-- .lnb End -->
	
	<div class="sec_info">
		<h3>정보목록</h3>
		<p class="list_notice">
			<strong><span></span>NOTICE</strong>
			<em>※2016년 3월 이전 정보목록은 아래와 같이 홈페이지에서 공개하고 있으며,<br />
			문서 내용은 정보공개 청구를 통해 이용할 수 있습니다<br />
			※ 3월 이후 정보목록은 공공기관의 정보공개에 관한 법률 제8조(정보목록의 작성·비치등)에<br />
			따라 대한민국정보공개포털(www.open.go.kr)에서 공개하고 있으니, 많은 이용 부탁드립니다.</em>
			<a href=""><span>정보목록보기 <strong>+</strong></span></a>
		</p>

		<form action="" method="post">
			<fieldset>
				<legend class="screen_out">정보목록 검색</legend>
				<dl class="division">
					<dt><label for="division">담당부서</label></dt>
					<dd>
						<select id="division" name="division" title="담당부서">
							<option value="전체">전체</option>
							<option value="4대강관리처">4대강관리처</option>
							<option value="4대강사업단">4대강사업단</option>
							<option value="4대강사업본부">4대강사업본부</option>
							<option value="ERP추진단">ERP추진단</option>
							<option value="K-WATER교육원">K-WATER교육원</option>
							<option value="K-WATER연구원">K-WATER연구원</option>
							<option value="K-water교육원">K-water교육원</option>
							<option value="K-water연구원">K-water연구원</option>
							<option value="MTV건설단">MTV건설단</option>
							<option value="MTV사업처">MTV사업처</option>
							<option value="T-water 준비단">T-water 준비단</option>
							<option value="감사실">감사실</option>
							<option value="강원지역본부">강원지역본부</option>
							<option value="강정보건설단">강정보건설단</option>
						</select>
					</dd>
				</dl>
				<dl class="date">
					<dt><label for="from">생산일자</label></dt>
					<dd>
						<input type="text" id="from" name="from" title="생산 시작일 - 예)2015.06.06"/> 부터 ~ <input type="text" id="to" name="to" title="생산 종료일자 - 예)2015.10.06"/> 까지
					</dd>
				</dl>
				<dl class="tit">
					<dt><label for="content2">주제어</label></dt>
					<dd>
						<select id="search_title" name="search_title" title="분류">
							<option value="all">전체</option>
							<option value="title">제목</option>
							<option value="number">문서번호</option>
						</select>
						<input type="text" id="content2" name="content2" title="검색할 주제어"/>
					</dd>
				</dl>
				<button type="button"><span></span><br />검색</button>
			</fieldset>
		</form>

		<p class="path">
			<span>HOME</span><em></em><span>열린경영</span><em></em><span>정보공개/공표</span><em></em><span><strong>정보목록</strong></span>
		</p>
		<p class="share">
			<a href="" class="twitter">트위터로 공유</a><em></em>
			<a href="" class="facebook">페이스북으로 공유</a>
		</p>

	</div><!-- .sec_info End -->
</div><!-- #inner End -->


<!-- footer -->
 <?php include ('footer.html')?>
<!-- footer END -->



<script type="text/javascript">

</script>
</body>
</html>
