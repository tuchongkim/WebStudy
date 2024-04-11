/// 비동기 처리 (콜백 함수 사용) - A B C

function displayA() {
    console.log('A');
}
function displayB(callback) {
    setTimeout(() => {
        console.log('B');
        callback();
    }, 2000);
}
function displayC() {
    console.log('C');
}

displayA();
displayB(displayC);