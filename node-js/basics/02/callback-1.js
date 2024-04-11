// 손님이 커피를 주문하면 3초 후에 준비되었다고 알려 주는 프로그램
// '커피 주문' 함수와 '커피 완료 표시' 함수 사이의 비동기 처리 필요

// function order(coffee) {
//     // 커피 주문
//     // 3초 기다린 후 완료 표시
// }
// function display(result) {
//     // 커피 완료 표시
// }


// 콜백 함수 사용
const order = (coffee, callback) => {
    console.log(`${coffee} 주문 접수`);
    setTimeout(() => {
        callback(coffee);
    }, 3000);
}
const display = (result) => {
    console.log(`${result} 완료!`);
}

order('아메리카노', display);