const express = require("express");
const router = express.Router();
const { getContact, createContact, getContacts, updateContact, deleteContact } = require("../Controllers/contactController");
const validateToken = require("../middleware/validateTokenhandler");

// router.route("/").get(getContacts); 

// router.route("/").post(createContact); 

// router.route("/:id").get(getContact); 

// router.route("/:id").put(updateContact); 

// router.route("/:id").delete(deleteContact); 

//efficent way

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;