/* fs 모듈 연습 */

// fs 모듈 가져오기
const fs = require("fs");

// 동기 처리로 디렉턱리 읽기 - readdirSync()
let syncFiles = fs.readdirSync("./");
console.log(syncFiles);

// 비동기 처리로 디렉터리 읽기 - readdir()
fs.readdir("./", (err, asyncFiles) => {
    if (err) {
        console.error(err);
    }
    console.log(asyncFiles);
});
