// 컨트롤러에서 async-handler를 사용해 예외처리를 간단하게 작성
const asyncHandler = require("express-async-handler");

// 데이터베이스 모델을 연결해서 사용하기 위해 모델을 import
const Contact = require("../models/contactModel");


// @desc Get all contacts
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    const users = [
        { name: "John", email: "john@aaa.bbb", phone: "123456789" },
        { name: "Jane", email: "jane@aaa.bbb", phone: "67891234" },
    ];
    res.render("getAll", { heading: "User List", users: users});  // heading과 users 변수를 getAll.ejs 파일에 전달
});

// @desc Create a contact
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).send("Create Contacts");
});

// @desc Get contact
// @route Get /contacts/:id
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.status(200).send(contact);
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name, email, phone } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
        id,
        { name, email, phone },
        { new: true }  // 수정한 결과(도큐먼트)를 화면에 보여주고 싶을 때 사용
    );
    res.status(200).send(updatedContact);
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

module.exports = { 
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};