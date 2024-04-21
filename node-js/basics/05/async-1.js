// 자바스크립트의 비동기 처리

// 싱글 스레드에서는 한 번에 하나의 작업만 처리할 수 있기 때문에
// 시간이 오래 걸리는 작업은 나중에 처리

console.log("첫 번째 작업");
setTimeout(() => {
    console.log("두 번째 작업");
}, 3000);
console.log("세 번째 작업");
