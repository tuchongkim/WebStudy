const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const adminLayout = "../views/layouts/admin";
const adminLayoutBefore = "../views/layouts/admin-nologout";
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require("../models/Post");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

// Check login 미들웨어
const checkLogin = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        res.redirect("/admin");
    } else {
        try {
            const decoded = jwt.verify(token, jwtSecret);
            req.userId = decoded.userId;
            next();
        } catch (error) {
            res.redirect("/admin");
        }
    }
};

// @desc Admin page
// @route GET /admin
router.get(
    "/admin",
    asyncHandler(async (req, res) => {
        const locals = {
            title: "관리자 페이지",
        };
        res.render("admin/index", { locals, layout: adminLayoutBefore });
    })
);

// @desc Check admin login
// @route POST /admin
router.post(
    "/admin",
    asyncHandler(async (req, res) => {
        const { username, password } = req.body;

        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(401).json({ message: "일치하는 사용자가 없습니다."});
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: "비밀번호가 일치하지 않습니다."});
        }

        const token = jwt.sign({ id: user._id }, jwtSecret);

        res.cookie("token", token, { httpOnly: true });

        res.redirect("/allPosts");
    })
);

// @desc Get all posts
// @route GET /allPosts
router.get(
    "/allPosts",
    checkLogin,
    asyncHandler(async (req, res) => {
        const locals = {
            title: "Posts",
        };
        const data = await Post.find();
        res.render("admin/allPosts", { locals, data, layout: adminLayout });
    })
);

// @desc Admin logout
// @route GET /logout
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
});

// @desc Admin - Add post
// @route GET /add
router.get(
    "/add",
    checkLogin,
    asyncHandler(async (req, res) => {
        const locals = {
            title: "게시물 작성",
        };
        res.render("admin/add", { locals, layout: adminLayout });
    })
);

// @desc Admin - Add post
// @route POST /add
router.post(
    "/add",
    checkLogin,
    asyncHandler(async (req, res) => {
        const { title, body } = req.body;

        const newPost = new Post({
            title: title,
            body: body,
        });

        await Post.create(newPost);

        res.redirect("/allPosts");
    })
);

// @desc Admin - Edit post
// @route GET /edit/:id
router.get(
    "/edit/:id",
    checkLogin,
    asyncHandler(async (req, res) => {
        const locals = {
            title: "게시물 편집",
        };
        const data = await Post.findOne({ _id: req.params.id });
        res.render("admin/edit", { locals, data, layout: adminLayout });
    })
);

// @desc Admin - Edit post
// @route PUT /edit/:id
router.put(
    "/edit/:id",
    checkLogin,
    asyncHandler(async (req, res) => {
        await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            body: req.body.body,
            createdAt: Date.now(),
        });
        res.redirect("/allPosts");
    })
);

// @desc Admin - Delete post
// @route DELETE /delete/:id
router.delete(
    "/delete/:id",
    checkLogin,
    asyncHandler(async (req, res) => {
        await Post.deleteOne({ _id: req.params.id });
        res.redirect("/allPosts");
    })
);


/* 관리자 등록을 위한 코드

// @desc Register administrator
// @route GET /register
router.get("/register", asyncHandler(async (req, res) => {
    res.render("admin/index", { layout: adminLayoutBefore });
}));

// @desc Register administrator
// @route POST /register
router.post("/register", asyncHandler(async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
    });
    res.json(`user created: ${user}`);
}));

*/

module.exports = router;