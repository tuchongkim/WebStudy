/* fs 모듈 연습 */

// 비동기 처리로 파일 읽기 - readFile()

const fs = require("fs");

fs.readFile("./example.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});