// 사용자로부터 받은 비밀번호가 ‘myPassword’라는 문자열을 해시한 값과 일치하는지 판단하는 함수를 작성하세요.

const bcrypt = require("bcrypt");

async function validatePassword(userPassword) {
    const hashedUserPW = await bcrypt.hash(userPassword, 10);
    const isMatch = await bcrypt.compare("myPassword", hashedUserPW);
    if (isMatch) {
        console.log("비밀번호가 일치합니다.");
    } else {
        console.log("비밀번호가 일치하지 않습니다.");
    }
};

const userInput1 = "userPassword";
const userInput2 = "myPassword";

validatePassword(userInput1);
validatePassword(userInput2);