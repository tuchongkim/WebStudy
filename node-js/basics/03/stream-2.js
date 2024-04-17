// 스트림(stream) 살펴보기

// 스트림은 한 곳에서 다른 곳으로 데이터가 이동하는 것, 즉 데이터 흐름을 가리킨다.
// 라이터블 스트림(writable stream) = 데이터를 기록하는 스트림

const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt", "utf-8");
const writeStream = fs.createWriteStream("./writeMe.txt");

readStream.on("data", (chunck) => {
    console.log("new chunck arrived:");
    writeStream.write(chunck);  // chunck 단위(버퍼크기)로 읽어와서 writeMe.txt 파일에 기록
});
