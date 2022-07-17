'use strict';
const QuizServices = require('../services/QuizServices');
const ResponseServices = require('../services/ResponseServices');

const QuizController = {
  addQuiz: async function (req, res) {
    try {
      req.body.author = req.user._id;
      const data = await QuizServices.addData(req.body);
      const response = {
        success: 1,
        msg: 'Quiz added',
        data: data,
      };
      return res.status(201).json(response);
    } catch (e) {
      const response = {
        success: 0,
        msg: 'Server error',
        error: e.message,
      };
      return res.status(500).json(response);
    }
  },
  ownQuiz: async function (req, res) {
    try {
      const filter = {
        author: req.user._id,
      };
      const data = await QuizServices.getData(filter);
      const response = {
        success: 1,
        msg: 'Your created quiz',
        data: data,
      };
      return res.status(200).json(response);
    } catch (e) {
      const response = {
        success: 0,
        msg: 'Server error',
        error: e.message,
      };
      return res.status(500).json(response);
    }
  },
  getQuizWithResponse: async function (req, res) {
    try {
      const quizId = req.params.id;
      const filter = {
        author: req.user._id,
        _id: quizId,
      };
      const quizData = await QuizServices.getData(filter);
      if (quizData.length > 0) {
        const quiz = quizData[0];
        const responses = await ResponseServices.getData({
          quizId: req.params.id,
        });
        const response = {
          success: 1,
          msg: 'Quiz responses',
          data: { quiz, responses },
        };
        return res.status(200).json(response);
      }
      const response = {
        success: 1,
        msg: 'Quiz not found',
      };
      return res.status(404).json(response);
    } catch (e) {
      const response = {
        success: 0,
        msg: 'Server error',
        error: e.message,
      };
      return res.status(500).json(response);
    }
  },
  getQuizForm: async function (req, res) {
    try {
      const filter = {
        authorId: req.params.authorId,
        _id: req.params.id,
        endTime: { $gt: new Date() },
      };
      const project = {
        title: 1,
        description: 1,
        questions: 1,
      };
      const data = await QuizServices.getData(filter, project);
      const response = {
        success: 1,
        msg: 'Quiz for attempt',
        data: data,
      };
      return res.status(200).json(response);
    } catch (e) {
      const response = {
        success: 0,
        msg: 'Server error',
        error: e.message,
      };
      return res.status(500).json(response);
    }
  },
};

module.exports = QuizController;
