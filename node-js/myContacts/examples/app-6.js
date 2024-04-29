/* 미들웨어 사용하기 */

const express = require("express");
const app = express();
const router = express.Router();

const port = 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Node!");
});

// 라우터 객체를 사용하면 요청 URL을 기준으로 코드를 간단하게 정리할 수 있다
// 1. 요청 URL이 '/contacts'인 경우
router
    .route("/contacts")
    .get((req, res) => {
        // 모든 연락처 가져오기
        res.status(200).send("Contacts Page");
    })
    .post((req, res) => {
        // 새 연락처 추가하기
        res.status(201).send("Create Contacts");
    })

// 2. 요청 URL이 '/contacts/:id'인 경우
router
    .route("/contacts/:id")
    .get((req, res) => {
        // 연락처 상세 보기
        res.status(200).send(`View Contact for ID: ${req.params.id}`);
    })
    .put((req, res) => {
        // 연락처 수정하기
        res.status(200).send(`Update Contact for ID: ${req.params.id}`);       
    })
    .delete((req, res) => {
        // 연락처 삭제하기
        res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
    })

app.use(router);

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});