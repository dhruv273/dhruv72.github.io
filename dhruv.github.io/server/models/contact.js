/**
 * File Name:Contact.js
 * Author's Name: Dhruv vyas
 * Student ID:100734385
 * WebSite Name:My portfolio
 * file Description:this is a contact file
 */
let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    contactNumber: String,
    emailAddress: String
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('contact', contactSchema);