# 자바스크립트&제이쿼리
## 프로젝트 제작 시 항상 준비해야하는 파일, 폴더 순서
1. 프로젝트 **폴더명 영문으로 의미있게** 작성하기
2. `index.html`, `README.md` 생성
3. `styles`, `scripts`, `images` 폴더 생성
4. `styles/reset.css` `styles/index.css` 생성
5. `scripts/index.js` 생성
## 자바스크립트
### 객체, 속성, 함수 작성 문법
* 태그 예) `<a href="./index.html"></a>`
* 태그 예) `<video src="./cat/mp4" autoplay>`
* `객체.속성;`
    * 객체의 속성 읽기
    * 예) `a.href;`
    * 예) `video.src;`, `video.autoplay;` 
* `객체.속성 = '값';`
    * 객체의 속성 값을 대입(변경을 위한 대입)
    * 대입 시 기존값이 있으면? 기존값 자동제거되고 새로운 값 대입
    * 예) `a.href = './reset.css';`
    * 예) `video.src = './coffee.mp4';`,`video.autoplay = 0;` 
* `객체.함수();`
    * 객체를 실행
    * `객체.함수() = '값';` (X)