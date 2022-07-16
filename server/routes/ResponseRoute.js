'use strict';

const router = require('express').Router();

const ResponseController = require('../controllers/ResponseController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.route('/submit').post(ResponseController.submitResponse);

router.route('/quizid');

module.exports = router;
