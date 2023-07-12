const User = require('../models/user_model');

// creates User object based on request from client
exports.createUser = (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.password, 
    });

    // Saves the new User object to the database and sends a query to MongoDB
    newUser.save()
        .then((savedUser) => {
            // Sends successful HTTP request to the client
            res.status(201).json(newUser);
        })
        .catch(err => {
            // Sends error HTTP request to the client
            res.status(500).send(err);
        });
};
