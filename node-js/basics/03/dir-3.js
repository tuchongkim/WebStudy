/* fs 모듈 연습 */

// 빈 디렉터리 삭제하기 - rmdirSync(), rmdir()

const fs = require("fs");

if (fs.existsSync("./test")) {  // 삭제할 디렉터리가 있다면
    fs.rmdir("./test", (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("directory deleted");
        }
    });
} else {  // 삭제할 디렉터리가 없다면
    console.log("directory does not exist");
}