/* fs 모듈 연습 */

// 동기 처리로 파일에 쓰기 - writeFileSync()

const fs = require("fs");

const data = fs.readFileSync("./example.txt", "utf8");  // 파일 내용을 문자열 형태로 읽어와서
fs.writeFileSync("./text-1.txt", data);  // text-1.txt에 기록