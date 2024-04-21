// 비동기 처리

// 방법2. promise 객체 사용

const fs = require("fs").promises;  // 뒤에 .promises를 붙여야 FS 모듈에 있는 promise 반환 함수 사용 가능

fs.readdir("./")
    .then((result) => console.log(result))  // readdir() 함수를 실행해 성공했다면 then 함수로 연결
    .catch((err) => console.error(err));  // readdir() 함수를 실행하는데 실패했다면 catch 함수로 연결
