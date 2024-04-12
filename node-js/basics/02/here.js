/* 글로벌 모듈에 있는 변수나 함수는 require 함수 없이 그대로 사용할 수 있다.
ex) 글로벌 모듈에 있는 객체 중 하나인 console 객체에서 log() 함수를 사용할 때는 앞에 global을 붙이지 않고도 사용 가능:
global.console.log("hello"); 대신 console.log("hello");
*/

console.log(`현재 모듈이 있는 폴더 이름: ${__dirname}`);  // __dirname: 현재 모듈이 있는 폴더 이름을 가져오는 글로벌 변수
console.log(`현재 모듈이 있는 파일 이름: ${__filename}`);  // __filename: 현재 모듈이 있는 폴더 이름을 가져오는 글로벌 변수