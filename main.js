/*
  1. 동적으로 200개의 이미지 dom 생성
  2. 마우스 움직일때마다 포인터의 가로 좌표값을 200분율로 변환
  3. 변환된 마우스 포인터의 현재 200분율 위치의 이미지만 보임처리
  4. 이미지요소의 소스요소 로딩, 에러 상황에 따라 분기처리
  5. 이미지 소스가 모두 렌더링되기 전까지 마스크화면 출력
  6. 이미지소스가 로딩되는 과정을 100분율로 변환해서 로딩바 형태로 화면출력
  7. 이미지소스 로딩 완료시 마스크 제거
*/

const section = document.querySelector('section');

for (let i = 0; i < 200; i++) {
	const img = document.createElement('img');
	const src = document.createAttribute('src');
	src.value = `img/pic${i}.jpg`;
	img.setAttributeNode(src);
	section.append(img);
}

window.addEventListener('mousemove', (e) => {
	//백분율 : (현재수치값 / 전체수치값) * 100(or200 : 200분율을 구한다면)
	//이미지 갯수에 따른 포인터 위치값 백분율 (현재위치/전체브라우저 넓이)*이미지갯수
	const curPos = e.pageX;
	const wid = window.innerWidth; //콘솔창 뺀 내부, (콘솔창 포함은 outerWidth)
	const num = 200;
	let percent = (curPos / wid) * num;
	//parseInt(변환할 수) : 실수값에서 소수점 아래를 버려서 정수로 반환
	percent = parseInt(percent);
	console.log(percent);
});
