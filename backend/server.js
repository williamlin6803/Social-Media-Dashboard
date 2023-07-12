require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const connectDatabase = require('./database');
const userController = require('./controllers/user_controller');
const userDatabase = require('./testuserdatabase');

connectDatabase();

app.use(express.json());

app.get('/users/:email', userDatabase.findUserByEmail);

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});
