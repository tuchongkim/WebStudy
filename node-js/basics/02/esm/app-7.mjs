// ES 모듈 시스템에서 모듈 가져오기

// 둘 이상의 함수나 변수의 이름을 바꿔서 가져오기
import { hi as hello, goodbye as bye } from "./greeting-1.mjs";

hello("홍길동");
bye("홍길동");