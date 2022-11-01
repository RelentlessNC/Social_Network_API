const { Schema, model } = require('mongoose');

// TODO: Define a new schema named `thoughtSchema` for the subdocument
const thoughtSchema = new Schema({
    thoughtText: { type: String, require: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [reactionSchema],
});

const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: new ObjectId },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});


// TODO: Create a model named `Thought`
const Thought = model('Thought', thoughtSchema);

// TODO: Create a new instance of the model including the subdocuments

Thought.create({});

module.exports = Thought;