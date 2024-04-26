/* 미들웨어 사용하기 */

const express = require("express");
const app = express();
const router = express.Router();  // 라우터 객체의 인스턴스 생성

const port = 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Node!");
});

// 모든 연락처 가져오기 (GET)
router.get("/contacts", (req, res) => {
    res.status(200).send("Contacts Page");
});

// 새 연락처 추가하기 (POST)
router.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts");
});

// 연락처 상세 보기 (GET/:id)
router.get("/contacts/:id", (req, res) => {
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// 연락처 수정하기 (PUT/:id)
router.put("/contacts/:id", (req, res) => {
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// 연락처 삭제하기 (DELETE/:id)
router.delete("/contacts/:id", (req, res) => {
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

// 미들웨어 등록하기
app.use(router);

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});