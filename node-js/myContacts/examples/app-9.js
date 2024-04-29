/* 미들웨어 사용하기 */

const express = require("express");
const errorhandler = require("./middlewares/errorhandler");  // 오류 처리를 위한 미들웨어
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Node!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));  // 라우터 미들웨어 추가

// 테스트 코드
app.get("/test", (req, res, next) => {
    const error = new Error("테스트용 에러");
    error.status = 401;
    next(error);
});

app.use(errorhandler);  // 오류 처리를 위한 미들웨어는 라우터가 추가된 이후에 추가해야 함

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});