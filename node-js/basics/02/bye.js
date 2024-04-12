// 작별 인사말을 내보내는 함수
const bye = (name) => {
    console.log(`${name} 님, 안녕히 가세요.`);
};

// 다른 파일에서 사용할 수 있게 export
module.exports = bye;