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

// Callback function to print the user data
const printUserData = (user) => {
    console.log('User created:', user);
};

userController.createUser(printUserData); // Pass the callback function to createUser


app.get('/users/:email', userDatabase.findUserByEmail);

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});
