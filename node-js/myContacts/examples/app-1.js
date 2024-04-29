/* express를 이용한 서버 만들기 */

const express = require("express");  // express 패키지 가져오기
const app = express();  // app이라는 변수에 express 객체를 저장
const port = 3000;  // port 변수에 포트 번호 저장

// http 요청(메서드) 중에서 GET 요청을 처리할 때는 get() 함수 사용
app.get("/", (req, res) => {  // root(/)에서 GET을 요청하면 콜백 함수를 실행
    res.status(200);  // 상태 코드 설정
    res.send("Hello Node!");  // 응답을 화면에 표시
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});



/* 익스프레스에서 사용하는 형식
app.METHOD(path, handler)
    - app: express로 만든 인스턴스
    - METHOD: GET, POST, PUT, DELETE처럼 HTTP 요청에서 사용하는 메서드
    - path: 요청 URL
    - handler: 실행할 콜백 함수
*/
