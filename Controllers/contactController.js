const asyncHandler = require("express-async-handler")
//@desc Get all contacts
//@route GET /api/contacts
//access public 
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

//@desc Create new contacts
//@route POST /api/contacts
//access public 
const createContact = asyncHandler(async (req, res) => {
    console.log("The Reqest body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are mandatory !")
    }
    res.status(201).json({ message: "Create contact" });
});
//@desc Get single contacts
//@route GET /api/contacts/:id
//access public 
const getContact = asyncHandler(async (req, res) => {
    res.status(202).json({ message: `Get contact for ${req.params.id}` });
});

//@desc update single contacts
//@route PUT /api/contacts/:id
//access public 
const updateContact = asyncHandler(async (req, res) => {
    res.status(203).json({ message: `update contact for ${req.params.id}` });
});

//@desc Get single contacts
//@route DELETE single /api/contacts/:id
//access public 
const deleteContact = asyncHandler(async (req, res) => {
    res.status(204).json({ message: `Delete contact for ${req.params.id}` });
});
module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }
