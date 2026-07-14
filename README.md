# 자바스크립트&제이쿼리
## 프로젝트 제작 시 항상 준비해야하는 파일, 폴더 순서
1. 프로젝트 **폴더명 영문으로 의미있게** 작성하기
2. `index.html`, `README.md` 생성
3. `styles`, `scripts`, `images` 폴더 생성
4. `styles/reset.css` `styles/index.css` 생성
5. `scripts/index.js` 생성
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹&앱에서 사용하는 실제 대상(버튼, 링크, 이미지 등), 보통 변수로 데이터(객체)를 저장해서 사용
* 이벤트: 웹&앱에서 이용하는 사용자의 행동(클릭, 터치, 드래그)
    *  `<button onclick="클릭시 실행되는 함수">`
* 함수: 2번 이상 반복되는 실행내용
    * 함수 생성과 호출을 각각 다르게 구분함
    * 함수 생성: `function 함수명(){함수 호출 시 반복 실행할 내용;}` 생성만으로는 절대 결과가 실행되지 않음. 반드시 호출 별도로 진행해야함
    * 함수 호출: 위 함수생성 바깥쪽에 `함수명()` 작성, 이벤트와 함께 사용하기도 함. `onclick="함수명();"`
### 변수(데이터(객체)를 저장하는 저장소)
* 변수키워드 변수명 대입연산자 대입값
* `let user_name='홍길동';`
// user_name이란 변수를 생성해서 '홍길동'이란 데이터를 대입한다.
1. `var`: 오래된 선언방식, 이름 중복 가능 
2. `let`: 이름 중복 불가능, 재사용(수정) 가능
3. `const`: 이름 중복 불가능, 재사용(수정) 불가능
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
## DOM(Document Object Model)
### JS에서 제어하고 싶은 HTML요소가 있을 경우 순서
1. 제어하고 싶은 HTML 수와 class, id 등 확인
2. 용도에 맞게 변수명 생성 `const 변수명`
3. 2번 변수에 대입연산자로 객체 대입하기
    * `document.querySelector('HTML대상')`
    * `const 변수명 =document.querySelector('대상')`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
    * `console.log(검사하고싶은 변수명);`
    * 콘솔 결과화면에서 `null`또는 오류가 없는지 확인
    * `null`이 뜬다면 HTML script 작성위치로 가서 defer 속성 추가
        * `<script src="경로" defer></script>`
## 실제 요소 크기와 관계없는 다양한 디자인 포인트 만드는 방법
### CSS의 가상선택자(: 실제 태그 없이 가상의 요소를 만듬)
### after, before
* `선택자::after`
* `선택자::before`
* 가상선택자의 필수 속성: `content`, `display`, `width`, `height`, `position`
### 작성예시
`선택자::after {`
    `content:''; display:block;`
    `width:가로크기px; height:세로크기px;`
    `position:absolute; left rught top bottom 등의 위치좌표 추가 작성`
`}`
* after, berfore가 적용된 부모 선택자(부모 선택자::before/after)에 `position"rerative` 기준잡기
# form 태그 관련 요약 정리
## form태그와 action, method
* form: 사용자가 입력하는 정보를 서버에 저장하기 위해 서버를 지정하는 태그
    * 검색, 로그인, 회원가입 등의 주제로 묶여있는 그룹
* action: 입력받은 정보가 처리되는 서버 주소 지정
    * 그룹에 작성 또는 선택된 사용자 정보를 전달하는 서버 주소 
* method: 데이터를 서버로 전송하는 HTTP 방식 지정 속성
    * 데이터를 보내는 전송 방식
    * get: 공개, 입력한 데이터가 URL 뒤에 쿼리스트링형태로 붙어서 전송
    * post: 보안, 주소창에 데이터를 노출시키지 않고 HTTP body 속에 데이터를 숨겨서 전송
## input태그와 type
* input: 사용자가 입력 또는 선택이 가능하도록 사용하는 태그
* type: **작성 종류**에 따라 달라지는 속성(필수속성) 
## name속성
* action으로 저장된 사이트 서버 위치에 사용자가 입력한 데이터를 전송할 때 구분하는 데이터 명칭
* 이름 tom, 아이디 tom -> 값만 보고 구분을 정확히 못하는 경우 name필수
* userName => tom, userId => tom `name=userName` 
* 입력 양식: 서버 저장명/데이터 구분 명칭
* 선택 양식: 서버 그룹명
## value속성
* 입력 양식: 입력창에 미리 채워둘 기본값 지정/ 처음부터 입력된 초기값(쇼핑몰의 수량 1)
* 선택 양식: 서버 저장명/데이터 구분 명칭
## id, class속성
* js, css에서 구분하기 위한 디자인 또는 동적 프로그래밍 용도 이름
* id: 중복될 수 없는 그룹명
* class: 중복이 가능한 그룹명
