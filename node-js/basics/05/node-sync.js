// node.js 에서의 동기 처리

const fs = require("fs");

let files = fs.readdirSync("./");  // 동기함수 -> 이 작업이 끝나기 전까지 뒤의 내용을 표시하지 않음
console.log(files);  // 디렉터리 내용을 보여주는 작업

console.log("Code is done.");  // 텍스트를 보여주는 작업
