require ('dotenv').config();
const express = require ('express');
const app = express ();
const mongoose = require('mongoose');
const path = require('path');
const contactRouter = require('./controllers/contacts');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');


(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.log(error);
    }
    })();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Rutas frontend

app.use('/', express.static(path.resolve('views', 'home')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/kiter', express.static(path.resolve('views', 'kiter')));
app.use('/styles', express.static(path.resolve('views', 'styles')));
app.use('/img', express.static(path.resolve('img')));

// Rutas backend

app.use('/api/contacts', contactRouter);

app.use(morgan('tiny'));

module.exports = app;