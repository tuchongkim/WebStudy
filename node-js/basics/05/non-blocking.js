// 논블로킹 IO

const fs = require("fs");

const data = fs.readFile("example.txt", "utf-8", (err, data) => {  // readFile()이 비동기 함수이기 때문에 뒤의 코드를 먼저 실행하고 readFile()을 실행
    if (err) {
        console.error(err);
    }
    console.log(data);  // example.txt를 다 읽어왔다면 데이터를 화면에 표시
});
console.log("코드 끝!");  // 파일을 읽기 전에 실행 됨