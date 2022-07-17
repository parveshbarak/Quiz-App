'use strict';

const router = require('express').Router();

const ResponseController = require('../controllers/ResponseController');

router.route('/register').post(ResponseController.register);
router.route('/submit').patch(ResponseController.submitResponse);

module.exports = router;
