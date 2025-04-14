const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
//@desc Get all contacts
//@route GET /api/contacts
//access public 
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//access public 
const createContact = asyncHandler(async (req, res) => {
    console.log("The Reqest body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are mandatory !");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(200).json(contact);
});
//@desc Get single contacts
//@route GET /api/contacts/:id
//access public 
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contac Not Found");
    }
    res.status(200).json(contact);
});

//@desc update single contacts
//@route PUT /api/contacts/:id
//access public 
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not Found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedContact);
});

//@desc Get single contacts
//@route DELETE single /api/contacts/:id
//access public 
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();
    //await Contact.remove() in which doesn't work since this method is used to removes everything instead of the document you found.
    res.status(200).json(contact);
});
module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }
