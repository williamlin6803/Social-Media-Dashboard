const User = require('../models/user_model');

exports.createUser = (callback) => {
    // Creates a new instance of the User object in memory
    const newUser = new User({
        email: 'williamlintest@gmail.com',
        password: 'hashedPassword', 
    });
    /*  // creates User object based on request from client
        exports.createUser = (req, res) => {
            const newUser = new User({
                email: req.body.email,
                password: req.body.password, 
            });
    */
    // Saves the new User object to the database and sends a query to MongoDB
    newUser.save()
        .then((savedUser) => {
            callback(savedUser);
            // Sends successful HTTP request to the client
            // res.status(201).json(newUser);
        })
        .catch(err => {
            console.log(err);
            // Sends error HTTP request to the client
            // res.status(500).send(err);
        });
};
