// 둘 이상의 변수를 객체로 받아서 사용하기
// 객체명 { key: value, key: value, ... }
// property = 'key: value' 한쌍

const users = require("./users");
const hello = require("./hello");

console.log(users);
hello(users.user3);  // 객체의 특정 프로퍼티의 value를 가져오는 방법 (객체명.키)