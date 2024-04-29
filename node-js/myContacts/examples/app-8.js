/* 미들웨어 사용하기 */

const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Node!");
});

// 바디 파서 미들웨어의 함수 중 json() 과 urlencoded() 함수는 express 자체에서도 사용 가능
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});