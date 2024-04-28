const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


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
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.send("Login success");
    } else {
        res.send("Login failed");
    }
});

module.exports = { getRegister, registerUser, getLogin, loginUser };