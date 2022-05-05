/*** window ***/

// 전역변수 초기화
var really = "Really?";
window.really; // === 'Really?'

// 브라우저 창 종료
window.close();

// 브라우저 창 생성
window.open("https://www.naver.com");

// 팝업 창 생성
var popup = window.open("", "", "width=200,height=200");
popup.document.write("안녕하세요");

// URI 인코딩
window.encodeURI("https://www.example.com/?name=홍길동&age=26"); // https://www.example.com/?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=26

// URI 디코딩
window.decodeURI("https://www.example.com/?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=26"); // https://www.example.com/?name=홍길동&age=26

// n초 후 콜백 함수 실행
setTimeout(function () {
  alert("1초 뒤");
}, 1000);

// n초마다 콜백 함수 실행
setInterval(function () {
  console.log("1초마다");
});

// 특정 엘리먼트의 style 정보 조회
console.log(getComputedStyle(document.getElementById("app-root")));

/*** navigator ***/
// 브라우저 or 운영체제 정보 제공

navigator.userAgent; // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...
navigator.language; // "ko"
navigator.cookieEnabled; // true
navigator.vendor; // "Google Inc"

/*** screen ***/
// 브라우저 화면 정보 제공

screen.availWidth; // 1280
screen.availHeight; // 672
screen.colorDepth; // 24

/*** location ***/
// 주소 정보 제공

location.host; // "www.zerocho.com"
location.hostname; // "www.zerocho.com"
location.protocol; // "https:"
location.href; // "https://www.zerocho.com/category/Javascript/post/..."
location.pathname; // "/category/Javascript/post/..."

/*** history ***/
// 페이지 이동 기록 관련 정보 제공

history.forward(); // 앞으로가기
history.back(); // 뒤로가기
history.go(-1); // 이동하기 (앞 또는 뒤)
history.length; // 저장된 URL 개수

/*** document ***/
// 현재 페이지 관련 정보 제공
