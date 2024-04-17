/* fs 모듈 연습 */

// existsSync()로 파일 존재 여부를 확인하고 unlinkSync()로 파일을 삭제

const fs = require("fs");

if (!fs.existsSync("./text-1.txt")) {  // 파일이 없다면
    console.log("file does not exist");
} else {  // 파일이 있다면
    fs.unlinkSync("./text-1.txt");
    console.log("file deleted");
}