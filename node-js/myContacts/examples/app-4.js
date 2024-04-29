/* express를 이용한 서버 만들기 */

const express = require("express");
const app = express();
const port = 3000;
// const path = require("path");

app.get("/", (req, res) => {
    // const headers = req.headers;
    // res.send(headers);
    res.status(200);
    res.send("Hello Node!");
});

// 모든 연락처 가져오기 (GET)
app.get("/contacts", (req, res) => {
    // res.sendFile(__dirname + "/assets/contacts.html");
    res.status(200).send("Contacts Page");
});

// 새 연락처 추가하기 (POST)
app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts");
});

// 연락처 상세 보기 (GET/:id)
app.get("/contacts/:id", (req, res) => {
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// 연락처 수정하기 (PUT/:id)
app.put("/contacts/:id", (req, res) => {
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// 연락처 삭제하기 (DELETE/:id)
app.delete("/contacts/:id", (req, res) => {
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});