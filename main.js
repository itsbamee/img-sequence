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
const imgs = createImgs(section, 200);
// const imgs = createImgs(section, 200, ['img', 'abc', 'png']);

//동적으로 200개의 imgDOM 생성
// for (let i = 0; i < 200; i++) {
// 	const img = document.createElement('img');
// 	const src = document.createAttribute('src');
// 	src.value = `img/pic${i}.jpg`;
// 	img.setAttributeNode(src);
// 	section.append(img);
// }

//마우스 움직일때마다 img갯수에 맞게 백분율 변환한 값을 정수(퍼센트)로 반환
window.addEventListener('mousemove', (e) => {
	let percent = parseInt((e.pageX / window.innerWidth) * imgs.length);

	imgs.forEach((img) => (img.style.display = 'none'));
	imgs[percent].style.display = 'block';
});

//프레임요소와 갯수를 인수로 받아서 동적 이미지 생성해주는 함수로 만들기 (함수호출 위에서해주기)
function createImgs(frame, num, fileInfo = ['img', 'pic', 'jpg']) {
	for (let i = 0; i < num; i++) {
		const img = document.createElement('img');
		const src = document.createAttribute('src');
		src.value = `${fileInfo[0]}/${fileInfo[1]}${i}.${fileInfo[2]}`;
		img.setAttributeNode(src);
		frame.append(img);
	}
	return frame.querySelectorAll('img');
}
