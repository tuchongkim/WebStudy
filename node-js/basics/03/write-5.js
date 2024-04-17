/* fs 모듈 연습 */

// 기존 파일에 내용 추가하기 - appendFileSync(), appendFile() 함수

const fs = require("fs");

fs.appendFile("./text-2.txt", "\n\n 새로운 내용 추가", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("appending to file");
});
