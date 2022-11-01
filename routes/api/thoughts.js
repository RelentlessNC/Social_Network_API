// /api/thoughts
// GET to get all thoughts
// GET to get a single thought by its _id
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// example data
// {
//     "thoughtText": "Here's a cool thought...",
//     "username": "lernantino",
//     "userId": "5edff358a0fcb779aa7b118b"
//   }

// PUT to update a thought by its _id
// DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value

const { default: mongoose } = require('mongoose');
const { Thought } = require('../../models');

const router = require('express').Router();

router.post('/', (req, res) => {
    const newThought = new Thought({ thoughtText: req.body.thoughtText, username: req.body.username, userId: req.body.userId });
    newThought.save();
    if (newThought) {
        res.status(201).json(newThought);
    } else {
        res.status(500).json({ error: 'Error' });
    }
});

router.delete('/:id', (req, res) => {
    Thought.findByIdAndDelete({ _id: req.params.id },
        (err, result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(500).json({ error: 'Error' });
            }
        })
});

router.get('/:id', (req, res) => {
    Thought.findOne({ _id: req.params.id },
        (err, result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(500).json({ error: 'Error' });
            }
        })
});

router.get('/', (req, res) => {
    Thought.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ error: 'Error' });
        }
    })
});