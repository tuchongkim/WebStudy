/* fs 모듈 연습 */

// 비동기 처리로 파일에 쓰기 - writeFile()

const fs = require("fs");

fs.readFile("./example.txt", "utf8", (err, data) => {  // 콜백함수에서
    if (err) {  // 오류가 있다면 오류를 표시
        console.error(err);
    }
    // 오류가 없다면 writeFile() 함수를 사용해 example.txt에서 읽은 내용을 text-2.txt 파일에 기록
    fs.writeFile("./text-2.txt", data, (err) => {  // writeFile()의 콜백함수에서는 오류가 있는 지만 체크
        if (err) {
            console.log(err);
        }
        console.log("text-2.txt is saved!");
    });
});
