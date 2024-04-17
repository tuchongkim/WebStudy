/* fs 모듈 연습 */

// 동기 처리로 파일 읽기 - readFileSync()

const fs = require("fs");

const dataBuffer = fs.readFileSync("./example.txt");  // 파일 내용을 버퍼 형태로 저장
console.log(dataBuffer);

const dataString = fs.readFileSync("./example.txt", "utf-8");  // 파일 내용을 문자열 형태로 저장 (인코딩 옵션 사용)
console.log(dataString);