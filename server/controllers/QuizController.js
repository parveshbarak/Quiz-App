'use strict';
const QuizServices = require('../services/QuizServices');

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
};

module.exports = QuizController;
