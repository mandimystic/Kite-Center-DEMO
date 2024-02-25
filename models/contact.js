const { ReturnDocument } = require('mongodb');
const mongoose = require ('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    // service:{
    //     type: String,
    //     required: true
    // }
})

contactSchema.set ('toJSON', {
     transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id;
        delete returnedObject.__v;
     }
});

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact