const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');
const authMiddleWare = require('../middlewares/authMiddleware');

router.post('/', authMiddleWare.guest, controller.login);

router.get('/me', authMiddleWare.authenticated, controller.me);

module.exports = router;

