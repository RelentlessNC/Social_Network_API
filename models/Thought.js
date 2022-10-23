const mongoose = require('mongoose');

// TODO: Define a new schema named `thoughtSchema` for the subdocument
const thoughtSchema = new mongoose.Schema({
    thoughtText: ,
    createdAt: ,
    username: ,
    reactions: reactionSchema,
});

const reactionSchema = new mongoose.Schema({
    reactionId: ,
    reactionBody: ,
    username: ,
    createdAt: ,
})


// TODO: Create a model named `Library`
const Thought = mongoose.model('Thought', thoughtSchema);

// TODO: Create a new instance of the model including the subdocuments

Thought.create({});

module.exports = Thought;