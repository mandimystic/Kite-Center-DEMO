const contactRouter = require('express').Router();
const Contact = require('../models/contact');

contactRouter.post('/', async (request, response) => {
    const {name, email, phone} = request.body;
    
    if (!name || !email || !phone) {
        return response.status ('Todos los espacios son requeridos')
    }

    const newContact = new Contact({
        name,
        email,
        phone
    })

    const savedContact = await newContact.save();
    
})


module.exports = contactRouter;