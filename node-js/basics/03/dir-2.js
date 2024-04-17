/* fs 모듈 연습 */

// 여러 계층의 디렉터리 만들기 - mkdirSync(), mkdir()의 recursive 옵션 사용

const fs = require("fs");

if (fs.existsSync("./test2/test3/test4")) {  // 디렉터리가 있다면
    console.log("directory already exists");
} else {  // 디렉터리가 없다면
    fs.mkdir("./test2/test3/test4", { recursive: true }, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("folder created");
    });
}