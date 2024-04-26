// '/about' 경로로 GET 요청이 들어왔을 때 
// 'This is the About page'라는 메시지를 보내는 라우터 미들웨어를 추가하세요.
// Router 객체를 사용해서 작성하세요.

const express = require("express");
const app = express();
const router = express.Router();

const port = 3000;

router.get("/", (req, res) => {
    res.send("This is the About page");
});

// '/about' 경로에서 사용할 미들웨어 함수 등록
app.use("/about", router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});