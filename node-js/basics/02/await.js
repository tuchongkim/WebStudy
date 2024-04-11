// 비동기 처리를 위한 async & await

// 서버에서 사용자 자료를 가져와서 users 변수에 할당한 후 터미널 창에 표시
async function init() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")  // 서버에서 가져오기
    const users = await response.json();  // 가져온 결과를 객체로 변환해서 users에 저장
    console.log(users);  // users 표시
}

init();