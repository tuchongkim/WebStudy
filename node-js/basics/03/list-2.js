/* fs 모듈 연습 */

// fs.readdir()의 withFileTypes 옵션
// 기본값은 false. 만약 true로 지정하면 파일 목록을 문자열이 아닌 디렉토리 항목으로 표시.
// 디렉토리 항목 예시 - Dirent { name: 'example.txt', path: './', [Symbol(type)]: 1 }

const fs = require("fs");

fs.readdir("./", { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});