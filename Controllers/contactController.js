const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET /api/contacts
//access private 
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//access private 
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
        user_id: req.user.id
    })
    res.status(200).json(contact);
});
//@desc Get single contacts
//@route GET /api/contacts/:id
//access private 
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
//access private 
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not Found");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("user don't have the permission to update other user contact");
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

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("user don't have the permission to delete other user contact");
    }
    await Contact.deleteOne();
    //await Contact.remove() in  which doesn't work since this method is used to removes everything instead of the document you found.
    res.status(200).json(contact);
});
module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }
