const router = require('express').Router();
const userRoutes = require('./api/users');
const thoughtRoutes = require('./api/thoughts');

router.use('/api/thoughts', thoughtRoutes);
router.use('/api/users', userRoutes);

module.exports = router;