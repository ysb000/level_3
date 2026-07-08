//dom01.js
//목표)글쓰기 CTA 버튼 터치(클릭)시 글쓰기 팝업 실행되는 기능
// 1. 팝업과 팝업 배경 숨기기
//1-1. 팝업, 배경 자바스크립트 객체(변수) 등록
const popup = document.querySelector('.write_popup');
const popup_bg = document.querySelector('.popup_bg');
// 콘솔에 변수를 출력해서 변수가 정상인지 확인
// null : 변수의 데이터가 존재하지 않는다.
// html에 연결한 script는 적힌 순서대로 읽기 때문에 먼저 작성하면 js를 먼저 읽고 body를 읽기 때문에 null이 뜬 것 -> script 태그 뒤에 defer 속성 추가  
console.log(popup);
console.log(popup_bg);
//자바스크립트에서 동적으로 스타일(CSS) 수정하기
// 스타일(CSS) == 자바스크립트 속성
//객체.속성; | 객체.함수();
// 객체.style.css속성=값;
// popup.style.border = '1px solid red';
// popup.style.backgroundColor = 'yellow';
// popup.style.fontSize = '2em';
// popup.style.padding = '15px 30px'; 
popup.style.display = 'none';
popup_bg.style.display ='none';
// 2. CTA 클릭 시 위 1번 대상 보이기
//팝업 실행 목적 함수 생성
function popupShow(){
    popup.style.display = 'block';
    popup_bg.style.display = 'block';
};
function popupHide(){
    popup.style.display = 'none';
    popup_bg.style.display = 'none';
};