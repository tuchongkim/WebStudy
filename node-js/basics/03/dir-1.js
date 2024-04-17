/* fs 모듈 연습 */

// 디렉터리 만들기 - mkdirSync(), mkdir()

const fs = require("fs");

if (fs.existsSync("./test")) {  // 디렉터리가 있다면
    console.log("directory already exists");
} else {  // 디렉터리가 없다면
    fs.mkdir("./test", (err) => {
        if (err) {
            console.error(err);
        }
        console.log("folder created");
    });
}
