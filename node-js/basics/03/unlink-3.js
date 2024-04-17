/* fs 모듈 연습 */

// 비동기 처리로 파일 삭제하기 - unlink()

const fs = require("fs");

if (!fs.existsSync("./text-2.txt")) {  // 파일이 없다면
    console.log("file does not exist");
} else {  // 파일이 있다면
    fs.unlink("./text-2.txt", () => {  // unlink()의 콜백함수에는 매개변수가 없음
        console.log("file deleted");
    });
}