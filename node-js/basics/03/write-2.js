/* fs 모듈 연습 */

// 파일 존재 여부 확인하기 - existsSync()

const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8");
if (fs.existsSync("text-1.txt")) {  // text-1.txt 파일이 있다면
    console.log("file already exists");
} else {  // text-1.txt 파일이 없다면
    fs.writeFileSync("text-1.txt", data);
}