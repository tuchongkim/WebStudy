// 프로미스를 사용해 피자 주문하기
// 프로미스(promise) 객체는 처리에 성공했을 때와 성공하지 않았을 때의 반환 결과를 약속해 둔 것.
// 성공/실패 결과값을 받아서 프로미스를 실행하는 함수가 then() 과 catch().

let likePizza = true;
const pizza = new Promise((resolve, reject) => {
    if (likePizza)
        resolve('피자를 주문합니다!');
    else
        reject('피자를 주문하지 않습니다.');
});

pizza
    .then(result => console.log(result))
    .catch((err) => console.log(err));