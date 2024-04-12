let remainingTime = 3000;  // 남은 시간을 3초로 설정
const waitingInterval = 500;  // 대기 시간 간격을 0.5초로 설정

// waitingInterval(0.5초)마다 함수 실행
const timer = setInterval(() => {
    // 남은 시간 표시
    console.log(`${remainingTime / 1000}초 남음`);
    remainingTime -= waitingInterval;  // 남은 시간 감소

    if (remainingTime <= 0) {
        // 남은 시간이 0 이하일 경우 'Hi' 메시지를 표시하고 타이머 종료
        console.log("Hi");
        clearInterval(timer);
    }
}, waitingInterval);