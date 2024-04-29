const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;


// @desc Get register page
// @route Get /register
const getRegister = asyncHandler(async (req, res) => {
    res.render("register");
});

// @desc Register user
// @route POST /register
const registerUser = asyncHandler(async (req, res) => {
    const { username, password, password2 } = req.body;
    if (password === password2) {
        const hashedPassword = await bcrypt.hash(password, 10);  // bcrypt를 이용해 비밀번호 암호화
        const user = await User.create({ username, password: hashedPassword });  // 새 사용자 등록
        res.status(201).json({ message: "Register successful", user });  // user 내용과 함께 성공 메시지 출력
    } else {
        res.send("Register Failed");
    }
});

// @desc Get login page
// @route Get /
const getLogin = asyncHandler(async (req, res) => {
    res.render("home");
});

// @desc Login user
// @route Post /
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;  // 클라이이언트가 보낸 사용자 이름과 비밀번호 추출

    const user = await User.findOne({ username: username });  // username으로 DB 조회

    if (!user) {  // 일치하는 사용자가 없다면 오류 메시지 표시
        return res.status(401).json({ message: "일치하는 사용자가 없습니다."});
    }

    // 입력된 비밀번호와 사용자의 비밀번호 비교
    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {  // 비밀번호가 일치하지 않으면 오류 메시지 표시
        return res.status(401).json({ message: "비밀번호가 일치하지 않습니다."});
    }

    // 사용자 ID를 기반으로 JWT 토큰 생성 (4시간 동안 유효)
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "4h" });  // jwt.sign(페이로드, 비밀키, [옵션,콜백])
    // 생성된 토큰을 쿠키에 저장
    res.cookie("token", token, { httpOnly: true });  // res.cookie(name, value, option)

    // 로그인에 성공하면 '/contacts' 페이지로 이동
    res.redirect("/contacts");
});

// @desc Logout user
// @route GET /logout
const logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
};

module.exports = { getRegister, registerUser, getLogin, loginUser, logout };