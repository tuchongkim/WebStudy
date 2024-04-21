// 자바스크립트의 비동기 처리

// setTimeout 함수 자체가 시간 지연을 포함하는 함수이기 때문에
// 시간 지연을 0초로 지정하더라도 나중에 처리

console.log("첫 번째 작업");
setTimeout(() => {
    console.log("두 번째 작업");
}, 0);
console.log("세 번재 작업");