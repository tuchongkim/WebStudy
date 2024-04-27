/* MVC 패턴에 맞게 수정하기 */

const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
} = require("../controllers/contactController");

router
    .route("/")
    .get(getAllContacts)
    .post(createContact);

router
    .route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;