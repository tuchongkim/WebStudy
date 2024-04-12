// ES 모듈 시스템에서 모듈 가져오기

// 모듈에서 가져와야하는 것들이 많은 경우 모두 가져오기 - import * as
import * as say from "./greeting-1.mjs";  // say 객체에 모두 저장

say.hi("홍길동");
say.goodbye("홍길동");