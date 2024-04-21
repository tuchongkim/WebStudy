/* http 모듈로 서버 만들기 */

// 요청 객체 살펴보기

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);  // req 객체를 터미널 창에 표시
});

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
});
