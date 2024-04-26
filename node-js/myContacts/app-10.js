/* 미들웨어 사용하기 */

const express = require("express");
const app = express();
const router = express.Router();

const port = 3000;

// 로그인을 처리하는 미들웨어 함수
const logger = (req, res, next) => {
    console.log("User Logged");
    next();
};

// app.use(logger);

app.route("/").get((req, res) => {
    res.status(200).send("Hello Node!");
});

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));  // 라우터 미들웨어

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});