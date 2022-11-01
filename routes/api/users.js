// /api/users GET all users
// GET a single user by its _id and populated thought and friend data
// POST a new user:
// example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }
// PUT to update a user by its _id
// DELETE to remove a user by its _id
// BONUS: Remove a user's associated thoughts when deleted.

const { default: mongoose } = require('mongoose');
const { User } = require('../../models');

// api/users/:userId/friends/:friendId 
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list

const router = require('express').Router();

router.post('/', (req, res) => {
    const newUser = new User({ username: req.body.username, email: req.body.email });
    newUser.save();
    if (newUser) {
        res.status(201).json(newUser);
    } else {
        res.status(500).json({ error: 'Error' });
    }
});

router.get('/:id', (req, res) => {
    User.findOne({ _id: req.params.id }, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ error: 'Error' });
        }
    });
});

router.delete('/:id', (req, res) => {
    User.findOneAndDelete({ _id: req.params.id },
        (err, result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(500).json({ error: 'Error' });
            }
        }
    )
});

router.get('/', (req, res) => {
    User.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ error: 'Error' });
        }
    });
});