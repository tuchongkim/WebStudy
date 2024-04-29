/* express를 이용한 서버 만들기 */

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Node!");
});

// 모든 연락처 가져오기 (GET)
app.get("/contacts", (req, res) => {
    res.status(200).send("Contacts Page");  // 메서드 체이닝(method chaining): 여러 함수를 연결해서 사용
});

// 새 연락처 추가하기 (POST)
app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts");
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});