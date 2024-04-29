/* 미들웨어 사용하기 */

const express = require("express");
const app = express();

const port = 3000;

// '/'로 요청이 들어오는 경우의 라우트 코드
app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Node!");
});

// '/contacts'로 요청이 들어오는 경우의 라우트 코드
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});