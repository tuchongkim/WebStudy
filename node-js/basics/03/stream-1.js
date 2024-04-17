// 스트림(stream) 살펴보기

// 스트림은 한 곳에서 다른 곳으로 데이터가 이동하는 것, 즉 데이터 흐름을 가리킨다.
// 리더블 스트림(readable stream) = 데이터를 읽기 위한 스트림

const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt");

readStream.on("data", (chunck) => {  // 스트림에서 데이터를 읽어 올 때마다 버퍼 크기만큼 터미널 창에 표시.
    console.log("new chunck received:");
    console.log(chunck);
});

readStream.on("end", () => {  // 스트림에서 데이터를 모두 읽어 왔다면 파일 읽기가 끝났다고 터미넡 창에 표시
    console.log("finished reading data");
});

readStream.on("error", (err) => {  // 스트림에서 오류가 발생하면 오류 메시지를 터미널 창에 표시
    console.log(`Error reading the file: ${err}`);
});