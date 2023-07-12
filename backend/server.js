require('dotenv').config(); // load environment variables from .env file
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const connectDatabase = require('./database');

connectDatabase();

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});