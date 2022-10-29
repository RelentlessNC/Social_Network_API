const { Schema, model } = require('mongoose');
import isEmail from 'validator/lib/isEmail';

// TODO: Define a new schema named `userSchema` for the subdocument
const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { String, required: true, unique: true, validate: [isEmail, 'Enter a valid emial'] },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


// TODO: Create a model named `User`
const User = model('User', userSchema);

// TODO: Create a new instance of the model including the subdocuments

User.create({});

module.exports = User;