/* http 모듈로 서버 만들기 */

// html 페이지 서빙하기
// res 객체에서 헤더를 만들 때 Content-Type 속성을 text/html로 지정
// 읽기 스트림을 사용해서 index.html을 읽어와서 파이프로 연결

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
    readStream.pipe(res);
});

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
});
