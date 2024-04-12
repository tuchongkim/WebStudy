// require() 함수를 이용해서 모듈을 import
// 모듈을 가져올 때는 모듈 파일의 경로를 상대 경로로 지정. 확장자(.js)는 생략가능.

const user = require("./user");  // user.js에서 user 가져오기
const hello = require("./hello");  // hello.js에서 hello 가져오기

hello(user);  // 모듈에서 가져온 user 변수와 hello 함수 사용하기