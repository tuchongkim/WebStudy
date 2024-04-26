const mongoose = require("mongoose");

// 스키마 만들기
const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,  // 속성값의 유형
            required: true,  // 필수 속성인지 여부
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
            required: [true, "전화번호는 꼭 기입해 주세요."],  // 필수 속성, 오류 메시지도 함께 지정
        },
    },
    {
        timestamps: true,  // 데이터베이스에 연락처를 추가하거나 수정한 시간을 지동으로 기록
    }
);

// 모듈로 변환 (모델 이름은 대문자로 시작, 단수형만 사용)
const Contact = mongoose.model("Contact", contactSchema);

// 모듈 export
module.exports = Contact;