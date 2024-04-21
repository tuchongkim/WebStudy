// 비동기 처리

// 방법 3. async, await 사용

const fs = require("fs").promises;  // await을 붙일 수 있는 함수는 promise를 반환하는 메서드여야 함

async function readDirAsync() {
    try {
        const files = await fs.readdir("./");
        console.log(files);
    } catch {
        console.error(err);
    }
}

readDirAsync();