// ES 모듈 시스템에서 모듈 내보내기

// 여러 개 내보내기
const hi = (name) => {
    console.log(`${name} 님, 안녕하세요?`);
};

const goodbye = (name) => {
    console.log(`${name} 님, 안녕히 가세요.`);
};

export { hi, goodbye };