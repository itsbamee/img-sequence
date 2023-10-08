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
