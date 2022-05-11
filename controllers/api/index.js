const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentrateRoutes = require('./comment-rate-routes');
// const commentRoutes = require('./comment-routes');
// const rateRoutes = require('./rate-routes');

router.use('/users', userRoutes);
router.use('/commentrates', commentrateRoutes);
// router.use('/comments', commentRoutes);
// router.use('/rates', rateRoutes);

module.exports = router;