const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
require("dotenv").config();

const connectDb = asyncHandler(async () => {
    // .env 파일에 있는 값을 이용해 DB 접속
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB connected: ${connect.connection.host}`);  // DB 연결 성공시 터미널에 출력
});

module.exports = connectDb;