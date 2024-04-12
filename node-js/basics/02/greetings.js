const user = "홍길동";  // 사용자 이름 가져오기(모듈1)

// 인사하는 함수
const hello = (name) => {
    console.log(`${name} 님, 안녕하세요?`); // 터미널 창에 표시하기(모듈2)
}

hello(user);