/* 몽고DB 연결하기 */

const mongoose = require("mongoose");  // mongoose 모듈 임포트
require("dotenv").config();  // dotenv 모듈의 config() 함수 실행

// 데이터베이스에 접속
// async, await을 이용한 비동기 처리
const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT);  // process 글로벌 객체를 사용하여 환경변수에 접근
        console.log("DB Connected");
    } catch(err) {
        console.log(err);
    }
}

module.exports = dbConnect;