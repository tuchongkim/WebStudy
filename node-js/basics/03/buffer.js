// 버퍼(buffer) 살펴보기

// 문자 하나가 이진값 하나에 대응
// 노드의 버퍼는 크기가 고정되어 있고 내용이 이진값으로 저장된다
// 문자열 형태로 보기 위해서는 fs 모듈의 readFile() 함수의 utf8 옵션을 사용하거나, buffer 모듈의 toString() 함수를 이용

const fs = require("fs");

fs.readFile("example.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);  // 이진 데이터 표시
        console.log("\n");
        console.log(data.toString());  // 문자열로 변환해서 표시
    }
});
