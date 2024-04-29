/* EJS(Embedded Javascript) 템플릿 엔진 사용하기 */

const express = require("express");
const dbConnect = require("./config/dbConnect");

const port = 3000;

const app = express();

app.set("view engine", "ejs");  // 뷰(view)에서 사용할 템플릿 엔진 설정
app.set("views", "./views");  // 템플릿 엔진이 템플릿 파일을 어디에서 찾을지 경로를 설정

// load public files
app.use(express.static("./public"));

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});