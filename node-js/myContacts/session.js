const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const app = express();

// 세션 등록하기
app.use(
    session({
        secret: "secret code",  // 쿠키 변조를 막기 위한 세선 비밀 키 (필수값)
        resave: false,  // 변경할 내용이 없을 때도 세션을 저장할 것인지 여부: 저장X
        saveUninitialized: true,  // 초기화되지 않은 세션을 저장할지 여부: 저장
        store: MongoStore.create({ mongoUrl: process.env.DB_CONNECT }),  // 세션 데이터를 저장할 위치: 몽고DB
        cookie: { maxAge: 60 * 60 * 24 * 1000 },  // 쿠키 요효 기간: 24시간 (밀리초 단위)
    })
);

// 사용자가 방문할때마다 카운터를 1씩 증가
app.get("/", (req, res) => {
    if (req.session.count) {  // 세션에 count가 있다면
        req.session.count++;
        res.send(`${req.session.count}번째 방문입니다.`);
    } else {  // 세션에 count가 없다면
        req.session.count = 1;  // 세션 객체에 새로운 데이터(count) 추가
        res.send("첫 번쨰 방문입니다.");
    }
});

// 세션 정보를 활용해 /session 경로로 접속했을 때 세션 ID 표시
app.get("/session", (req, res) => {
    res.send(`session ID : ${req.sessionID}`);
});

// req.session.destroy() 함수를 이용해서 세션을 삭제
app.get("/delete-session", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.clearCookie("connect.sid");
            res.send("세션 삭제");
        }
    });
});

app.listen(5000, () => {
    console.log("Server listening on port 5000");
})