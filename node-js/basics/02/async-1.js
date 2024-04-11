// 중간에 시간이 걸리는 작업이 있는 경우 - A C B

function displayA() {
    console.log('A');
}
function displayB() {
    setTimeout(() => {
        console.log('B');
    }, 2000);  // setTimeout을 이용해 2초 뒤에 실행
}
function displayC() {
    console.log('C');
}

displayA();
displayB();
displayC();