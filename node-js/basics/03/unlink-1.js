/* fs 모듈 연습 */

// 동기 처리로 파일 삭제하기 - unlinkSync()

const fs = require("fs");

fs.unlinkSync("./text-1.txt");
console.log("file deleted");