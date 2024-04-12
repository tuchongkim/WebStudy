const hi = (name) => {
    console.log(`${name} 님, 안녕하세요?`);
};

const goodbye = (name) => {
    console.log(`${name} 님, 안녕히 가세요.`);
};

// 여러 함수나 변수를 묶어서 내보낼 때 default를 붙이면, 객체 1개를 내보낸 것으로 간주
// 따라서 * as 없이 객체 이름으로 가져올 수 있다.
export default { hi, goodbye };