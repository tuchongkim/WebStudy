// 서버에서의 블로킹 IO - 시간이 많이 걸리는 작업이 존재하는 경우

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.end("HOME");
    } else if (req.url === "/about") {  // about 요청 뿐만 아니라 이후에 다른 요청을 하더라도 모두 멈추게 됨
        for (let i = 0; i< 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);  // 터미널 창에 모두 표시하기 전까지 다른 작업을 할수가 없음
            }
        }
        res.end("ABOUT");
    } else {
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("server listening on port 3000");
});
