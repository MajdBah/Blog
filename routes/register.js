const express = require('express');
const router = express.Router();
const controller = require('../controllers/registerController');
const authMiddleWare = require('../middlewares/authMiddleware');

router.post('/', authMiddleWare.guest, controller.resgister)

module.exports = router;