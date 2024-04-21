// 비동기 처리

// 직접 비동기로 동작하는 함수 작성
// 방법1. 콜백함수

const fs = require("node:fs");

fs.readdir("./", (err, files) => {  // 1. readdir() 함수 실행 -> 2. callback 함수 실행
    if (err) {
        console.error(err);
    }
    console.log(files);
});

console.log("Code is done.");