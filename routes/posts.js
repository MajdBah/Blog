const express = require('express');
const router = express.Router();

const controller = require('../controllers/postController');
const authMiddleWare = require('../middlewares/authMiddleware');


router.post('/', authMiddleWare.authenticated, controller.create);

router.get('/', controller.list);

router.get('/:id', controller.details);

router.put('/:id', authMiddleWare.authenticated, controller.update);

router.delete('/:id', authMiddleWare.authenticated, controller.delete);

module.exports = router;