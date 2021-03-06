'use strict';

const router = require('express').Router();

const QuizController = require('../controllers/QuizController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.route('/create').post(AuthMiddleware.protect, QuizController.addQuiz);
router.route('/own').get(AuthMiddleware.protect, QuizController.ownQuiz);

router
  .route('/:id/responses')
  .get(AuthMiddleware.protect, QuizController.getQuizWithResponse);

router.route('/:id/author/:authorId').get(QuizController.getQuizForm);

module.exports = router;
