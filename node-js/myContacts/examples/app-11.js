/* 미들웨어 사용하기 */

const express = require("express");
const app = express();

const port = 3000;

const requestTime = (req, res, next) => {
    let today = new Date();  // Date 객체 만들기
    let now = today.toLocaleTimeString();  // 현재 시간을 문자열로 변환
    req.requestTime = now;  // req 객체에 requestTime 속성 추가하기
    next();
};

app.use(requestTime);  // requestTime 미들웨어 사용

app.route("/").get((req, res) => {
    const responseText = `Hello Node ! \n요청 시간 : ${req.requestTime}`;
    res.set("Content-type", "text/plain");
    res.send(responseText);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));  // 라우터 미들웨어

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});