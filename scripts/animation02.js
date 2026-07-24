//1. 서브메뉴 초기 숨기기
//2. 메인메뉴를 클릭하면 서브메뉴 보이기
// 변수 생성
const mainMenu2 = document.querySelector('.gnb > ul > li:nth-child(2)');
const subMenu = document.querySelector('.gnb .sub');
console.log(mainMenu2, subMenu)

//1. 서브메뉴 초기 숨기기
subMenu.style.display = 'none'

//2. 메인메뉴를 클릭하면 서브메뉴 보이기
mainMenu2.addEventListener('click',subMenuShow)
function subMenuShow() {
    subMenu.style.display = 'flex';
}
