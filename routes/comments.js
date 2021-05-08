const express = require('express');
const router = express.Router();
const controller = require('../controllers/commentController');
const authMiddleWare = require('../middlewares/authMiddleware');

router.post('/:postId', authMiddleWare.authenticated, controller.create);

module.exports = router;