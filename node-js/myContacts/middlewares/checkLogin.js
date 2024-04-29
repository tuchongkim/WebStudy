/* 회원 전용 서비스에 접속하는 경우 로그인한 상태인지 확인하는 미들웨어 */

const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const checkLogin = async (req, res, next) => {
    // 캐시 처리에 관한 설정
    res.setHeader("Cache-control", "no-cache, no-store, must-revalidate");  // 브라우저 캐시 사용x, 서버 응답을 캐시에 저장x, 반드시 재확인

    // 요청에 포함된 쿠키에서 토큰값 가져오기
    const token = req.cookies.token;

    if (!token) {  // 토큰이 없을 경우 로그인 페이지로 이동
        return res.redirect("/");
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);  // 토큰 해석
        req.username = decoded.username;  // 토큰의 사용자 이름을 요청하고 사용자 이름에 할당
        next();
    } catch (error) {
        return res.status(401).json({ message: "로그인이 필요합니다."});
    }
};

module.exports = checkLogin;