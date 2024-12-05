<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<title></title>
<link rel="stylesheet" type="text/css" href="style/common.css"/>
<link rel="stylesheet" type="text/css" href="style/sub_common.css"/>
<link rel="stylesheet" type="text/css" href="style/nutritional.css"/>

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
<? include ('header.html')?>

<div id="quickmenu">
		<ul>
			<li><IMG SRC="images/common/로고&notice.jpg"></li>
			<li><a href="http://xduathx.dothome.co.kr/dunkin/index.php">메인페이지</a></li>
			<li><a href="http://xduathx.dothome.co.kr/dunkin/login.php">로그인</a></li>
			<li class="on"><a href="http://xduathx.dothome.co.kr/dunkin/nutritional.php">영양정보</a></li>
			<li><a href="http://xduathx.dothome.co.kr/dunkin/sandwiches.php">샌드위치</a></li>
		</ul>
	</div>


<div id="content">
	<div class="inner">
		<p class="infomation">NUTRITIONAL INFORMATION</p>
		<h3><span></span>영양정보</h3>
		<div class="nutri_search">
			<form action="" method="post">
				<fieldset>
					<legend class="screen_out">영양정보 검색</legend>
					<dl class="prod_tit">
						<dt><label for="product_tit">제품명</label></dt>
						<dd><input type="text" id="product_tit" name="product_tit" /></dd>
					</dl>
					<dl class="component">
						<dt>성분별</dt>
						<dd>
							<select id="nutri01" name="nutri01">
								<option value="">전체</option>
								<option value="">열량</option>
								<option value="">당류</option>
								<option value="">단백질</option>
								<option value="">포화지방</option>
								<option value="">나트륨</option>
							</select>
						</dd>
						<dd>
							<select id="nutri02" name="nutri02">
								<option value="">전체</option>
								<option value="">높은순</option>
								<option value="">낮은순</option>
							</select>
						</dd>
					</dl>
					<dl class="alle">
						<dt>알레르기</dt>
						<dd>
							<label for="food01-1"><input type="checkbox" id="food01-1" name="food01-1"/><span></span><em>밀</em></label>
							<label for="food02-1"><input type="checkbox" id="food02-1" name="food02-1"/><span></span>대두</label>
							<label for="food03-1"><input type="checkbox" id="food03-1" name="food03-1"/><span></span>계란</label>
							<label for="food04-1"><input type="checkbox" id="food04-1" name="food04-1"/><span></span>우유</label>
							<label for="food05-1"><input type="checkbox" id="food05-1" name="food05-1"/><span></span>땅콩</label>
							<label for="food06-1"><input type="checkbox" id="food06-1" name="food06-1"/><span></span>돼지고기</label>
							<label for="food07-1"><input type="checkbox" id="food07-1" name="food07-1"/><span></span>복숭아</label>
							<label for="food08-1"><input type="checkbox" id="food08-1" name="food08-1"/><span></span>쇠고기</label>
							<label for="food09-1"><input type="checkbox" id="food09-1" name="food09-1"/><span></span>닭고기</label>
							<label for="food10-1"><input type="checkbox" id="food10-1" name="food10-1"/><span></span>호두</label>
							<label for="food11-1"><input type="checkbox" id="food11-1" name="food11-1"/><span></span>새우</label>
							<label for="food12-1"><input type="checkbox" id="food12-1" name="food12-1"/><span></span>오징어</label>
							<label for="food13-1"><input type="checkbox" id="food13-1" name="food13-1"/><span></span>토마토</label>
							<label for="food14-1"><input type="checkbox" id="food14-1" name="food14-1"/><span></span>메밀</label>
							<label for="food15-1"><input type="checkbox" id="food15-1" name="food15-1"/><span></span>조개류</label>
						</dd>
					</dl>
					<p>※ 모든 제품은 밀, 대두, 계란, 우유, 땅콩, 돼지고기, 복숭아, 쇠고기, 닭고기, 호두, 새우, 오징어, 토마토, 메밀, 조개류를 사용한 제품과 같은 제조 시설에서 제조되었습니다.</p>
					<button type="button">검색</button>
				</fieldset>
			</form>
			
		</div>

		<p class="total">총<span>180건</span> 검색되었습니다.</p>

		<div class="search_results">
			<p>SEARCH RESULTS</p>
			<table summary = "">
				<caption class="screen_out">search_result</caption>
				<colgroup>
					<col width="22%">
					<col width="9.5%">
					<col width="9.5%">
					<col width="9.5%">
					<col width="9.5%">
					<col width="9.5%">
					<col width="9.5%">
					<col width="">
				</colgroup>
				<thead>
					<tr>
						<th scope="col">제품명</th>
						<th scope="col">열량(kcal)</th>
						<th scope="col">1회 제공량(g)</th>
						<th scope="col">당류(g)</th>
						<th scope="col">단백질(g)</th>
						<th scope="col">포화지방(g)</th>
						<th scope="col">나트륨(mg)</th>
						<th scope="col">알레르기 성분</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>(앳홈) 치킨 브리또</td>
						<td class="bg">260</td>
						<td>130</td>
						<td class="bg">3</td>
						<td>15</td>
						<td class="bg">3.5</td>
						<td>880</td>
						<td class="bg">밀,대두,우유,쇠고기,닭고기,토마토,조개류</td>
					</tr>
					<tr>
						<td>(앳홈) 치킨퀘사디아</td>
						<td class="bg">190</td>
						<td>99</td>
						<td class="bg">2</td>
						<td>13</td>
						<td class="bg">3</td>
						<td>640</td>
						<td class="bg">밀,대두,우유,닭고기,토마토</td>
					</tr>
					<tr>
						<td>(앳홈) 크림치즈프렛즐</td>
						<td class="bg">250</td>
						<td>99</td>
						<td class="bg">5</td>
						<td>7</td>
						<td class="bg">3</td>
						<td>310</td>
						<td class="bg">밀,대두,우유</td>
					</tr>
					<tr>
						<td>(앳홈) 고르곤졸라피자</td>
						<td class="bg">446</td>
						<td>130</td>
						<td class="bg">7</td>
						<td>19</td>
						<td class="bg">8</td>
						<td>490</td>
						<td class="bg">밀,우유</td>
					</tr>
					<tr>
						<td>(앳홈) 그릭슈바인 소시지로 만든 핫도그</td>
						<td class="bg">270</td>
						<td>85</td>
						<td class="bg">7</td>
						<td>7</td>
						<td class="bg">4.9</td>
						<td>380</td>
						<td class="bg">밀,대두,계란,우유,돼지고기,쇠고기</td>
					</tr>
					<tr>
						<td>Since 1950, 던킨 클래식</td>
						<td class="bg">225</td>
						<td>47</td>
						<td class="bg">9</td>
						<td>3</td>
						<td class="bg">6</td>
						<td>140</td>
						<td class="bg">밀,대두,계란,우유</td>
					</tr>
					<tr>
						<td>가을타는 밤</td>
						<td class="bg">250</td>
						<td>65</td>
						<td class="bg">12</td>
						<td>4</td>
						<td class="bg">7</td>
						<td>270</td>
						<td class="bg">밀,대두,우유,땅콩</td>
					</tr>
					<tr>
						<td>고구마가 맛있구마</td>
						<td class="bg">220</td>
						<td>62</td>
						<td class="bg">8</td>
						<td>3</td>
						<td class="bg">4.9</td>
						<td>263</td>
						<td class="bg">밀,대두,우유</td>
					</tr>
					<tr>
						<td>과육듬뿍 스트로베리필드</td>
						<td class="bg">200</td>
						<td>62</td>
						<td class="bg">13</td>
						<td>3</td>
						<td class="bg">5</td>
						<td>190</td>
						<td class="bg">밀,대두,우유</td>
					</tr>
					<tr>
						<td>그린티라떼(R)</td>
						<td class="bg">350</td>
						<td>370</td>
						<td class="bg">18</td>
						<td>18</td>
						<td class="bg">9</td>
						<td>217</td>
						<td class="bg">우유</td>
					</tr>
					<tr>
						<td>그린티라떼(S)</td>
						<td class="bg">280</td>
						<td>296</td>
						<td class="bg">15</td>
						<td>14</td>
						<td class="bg">7</td>
						<td>174</td>
						<td class="bg">우유</td>
					</tr>
					<tr>
						<td>그린티라떼</td>
						<td class="bg">0</td>
						<td>0</td>
						<td class="bg">0</td>
						<td>0</td>
						<td class="bg">0</td>
						<td></td>
						<td class="bg">우유</td>
					</tr>
					<tr>
						<td>낙엽이 옥수수 번 베이글</td>
						<td class="bg">320</td>
						<td>110</td>
						<td class="bg">6</td>
						<td>9</td>
						<td class="bg">3</td>
						<td>340</td>
						<td class="bg">밀,대두,계란,우유</td>
					</tr>
				</tbody>
			</table>
			<div class="btn">
				<a href="" class="prev">이전</a>
				<a href="" class="on">1</a>
				<a href="">2</a>
				<a href="">3</a>
				<a href="">4</a>
				<a href="">5</a>
				<a href="">6</a>
				<a href="">7</a>
				<a href="">8</a>
				<a href="">9</a>
				<a href="" class="next">다음</a>
			</div>
		</div>
	</div><!-- .inner END -->
</div><!-- #content END -->

<? include ('footer.html')?>


<script type="text/javascript">

</script>
</body>
</html>
