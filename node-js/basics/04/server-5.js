/* http 모듈로 서버 만들기 */

// 라우팅 이해하기
// 클라이이언트에서 들어오는 요청에 따라 그에 맞는 함수를 실행하는 것

const http = require("http");

const server = http.createServer((req, res) => {
    // 요청 메서드와 URL 가져오기
    const { method, url } = req;
    res.setHeader("Content-Type", "text/plain");

    // URL에 따라 응답을 다르게 처리
    if (method === "GET" && url === "/home") {
        res.statusCode = 200;
        res.end("HOME");
    } else if (method === "GET" && url === "/about") {
        res.statusCode = 200;
        res.end("ABOUT");
    } else {
        res.statusCode = 404;
        res.end("NOT FOUND");
    }
});

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
});