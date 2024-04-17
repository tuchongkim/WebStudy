/* fs 모듈 연습 */

// 기존 파일에 내용 추가하기 - writeFileSync(), writeFile() 함수의 flag 옵션

const fs = require("fs");

let content = `
================================
새로운 내용을 추가해 보겠습니다.
================================
`;

fs.writeFileSync("./text-1.txt", content, { flag: "a" });