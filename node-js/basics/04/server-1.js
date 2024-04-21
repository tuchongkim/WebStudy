/* http 모듈로 서버 만들기 */

// 서버 만들기 - createServer()
// http.createServer([옵션][, 콜백]);
// returns a new instance of http.Server

const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request from client");
});


// 서버 실행하기 - listen()
// server.listen(포트[, 호스트][, 콜백]);
// https://nodejs.org/docs/latest/api/net.html#serverlisten

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
});