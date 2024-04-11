// 익명으로 콜백 함수 작성하기
// 콜백 함수를 사용할 때 한번만 실행하는 경우 함수 안에 익명함수로 직접 작성
// 콜백이 계속 반복되는 상태(콜백 지옥)가 발생하면 유지 보수가 힘들어지기 때문에 다른 방법 사용 -> promise, ansync/await

// 1초 간격으로 'A -> B -> C -> D -> STOP' 표시
function displayLetter() {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => {
            console.log("C");
            setTimeout(() => {
                console.log("D");
                setTimeout(() => {
                    console.log("STOP");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

displayLetter();