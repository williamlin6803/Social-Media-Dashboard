const express = require('express');
const router = express.Router();
const User = require('./models/user_model');

// Route to create a new user and save it to the database
router.post('/', (req, res) => {
    const { username, email, password } = req.body;

    const newUser = new User({
        username,
        email,
        password
    });

    newUser.save()
        .then(() => {
            console.log('User created and saved');
            res.status(201).json(newUser);
        })
        .catch((error) => {
            console.error('Error saving user:', error);
            res.status(500).json({ error: 'Failed to save user' });
        });
});

// Route to retrieve all users from the database
router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            console.log('Users retrieved:', users);
            res.status(200).json(users);
        })
        .catch((error) => {
            console.error('Error retrieving users:', error);
            res.status(500).json({ error: 'Failed to retrieve users' });
        });
});

module.exports = router;
