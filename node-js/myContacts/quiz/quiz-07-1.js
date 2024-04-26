// '/users' 경로로 GET 요청이 들어왔을 때 사용자 정보(users)를 JSON 형태로 반환하는 라우터 미들웨어를 작성하세요.

// 사용자 정보
const users = [
    { id: 1, name: "Kim" },
    { id: 2, name: "Lee" },
    { id: 3, name: "Park" },
];

const express = require("express");
const app = express();

const port = 3000;

app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
