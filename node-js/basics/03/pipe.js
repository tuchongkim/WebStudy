// 2개의 스트림을 연결하는 pipe() 함수
// fs.readStream.pipe(writeStream [,옵션])

// 작동 방식
// 1. 리더블 스트림에서 데이터를 읽는다
// 2. 읽은 데이터를 라이터블 스트림으로 기록한다
// 3. 라이터블 스트림에 다 기록할 때까지 리더블 스트림에서 읽고 쓰기를 계속 반복한다
// 4. 리더블 스트림에서 더 이상 읽을 데이터가 없거나, 라이터블 스트림에 더 이상 쓸 데이터가 없으면 pipe() 함수가 자동 종료된다

const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt", "utf-8");
const writeStream = fs.createWriteStream("./writePipe.txt");

readStream.pipe(writeStream);