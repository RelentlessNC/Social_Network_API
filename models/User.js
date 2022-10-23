const mongoose = require('mongoose');

// TODO: Define a new schema named `userSchema` for the subdocument
const userSchema = new mongoose.Schema({
    username: { type: String },
    email: ,
    thoughts: ,
    friends: ,
});


// TODO: Create a model named `User`
const User = mongoose.model('User', userSchema);

// TODO: Create a new instance of the model including the subdocuments

User.create({});

module.exports = User;