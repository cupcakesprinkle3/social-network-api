const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const reactionRoutes = require('./reaction-routes');

router.use('/users', userRoutes);
// add prefix of `/thoughts` to routes created in `thought-routes.js`
router.use('/thoughts', thoughtRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;