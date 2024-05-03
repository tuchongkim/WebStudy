const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

// @desc Landing page
// @route GET /
// @route GET /home
router.get(
    ["/", "/home"],
    asyncHandler(async (req, res) => {
        const locals = {
            title: "Home"
        };
        const data = await Post.find({});  // DB에 있는 데이터 모두 가져오기
        res.render("index", { locals, data, layout: mainLayout });
    })
);

// @desc Individual post
// @route GET post/:id
router.get(
    "/post/:id",
    asyncHandler(async (req, res) => {
        const data = await Post.findOne({ _id: req.params.id });  // 데이터 1개 가져오기
        res.render("post", { data, layout: mainLayout });
    })
);

// @desc About page
// @route GET /about
router.get("/about", (req, res) => {
    const locals = {
        title: "About"
    };
    res.render("about", { locals, layout: mainLayout });
});

module.exports = router;