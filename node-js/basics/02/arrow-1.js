// 아래 함수 표현식을 화살표 함수로 바꾸기

// 함수 표현식
// let hi = function() {
//     return '안녕하세요?';
// };

// 화살표 함수 - 실행할 내용이 return문 한 줄이라면, return과 중괄호 모두 생략 가능
// let hi = () => { return '안녕하세요?' };
let hi = () => '안녕하세요?';
console.log(hi());