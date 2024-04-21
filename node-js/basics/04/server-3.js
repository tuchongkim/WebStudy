/* http 모듈로 서버 만들기 */

// 응답 객체 살펴보기
// 응답 객체는 헤더와 본문을 만들어서 보내야 한다

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method);  // 요청 메서드 확인

    res.setHeader("Content-Type", "text/plain");  // 응답 헤더
    // res.writeHead(200, {"Content-Type": "text/plain"});  // 상태코드를 추가하고 싶은 경우
    res.write("Hello Node");  // 응답 본문
    res.end();  // 응답 종료
});

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
});