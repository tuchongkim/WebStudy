/* fs 모듈 연습 */

// 파일 삭제 및 내용이 있는 디렉터리 삭제하기 - rmSync(), rm()

const fs = require("fs");

fs.rm("./test2", { recursive: true }, (err) => {  // test2 디렉터리 안에 있는 test3, test4 디렉터리를 반복하면서 rm() 함수 실행
    if (err) {
        console.error(err);
    } else {
        console.log("directory deleted");
    }
});