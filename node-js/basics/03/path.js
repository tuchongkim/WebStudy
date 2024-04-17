/* path 모듈 연습 */

// path 모듈 가져오기
const path = require("path");

// 경로 연결하기 - join()
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);  // some\work\ex.txt

// 경로 추출하기 - dirname()
console.log(`파일 절대 경로: ${__filename}`);  // 파일 절대 경로: C:\Users\rhinotck\Desktop\tuchongkim\projects\web-study\node-js\basics\03\path.js
const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);  // 경로만: C:\Users\rhinotck\Desktop\tuchongkim\projects\web-study\node-js\basics\03

// 파일 이름 추출하기 - basename()
const fn = path.basename(__filename);
const fn2 = path.basename(__filename, '.js');
console.log(`파일 이름: ${fn}`);  // 파일 이름: path.js
console.log(`파일 이름(확장자 제외): ${fn2}`);  // 파일 이름(확장자 제외): path

// 파일 확장자 추출하기 - extname()
const ext = path.extname(__filename);
console.log(`파일 확장자: ${ext}`);  // 파일 확장자: .js
console.log(path.basename(__filename, ext));  // path

// 경로를 객체로 변환하기 - parse()
const parsedPath = path.parse(__filename);
console.log(parsedPath);
