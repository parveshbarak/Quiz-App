'use strict';
const ResponseServices = require('../services/ResponseServices');
const QuizServices = require('../services/QuizServices');

const ResponseController = {
  register: async function (req, res) {
    try {
      const filter = {
        quizId: req.body.quizId,
        username: req.body.username,
      };
      const existsData = await ResponseServices.getData(filter);
      if (existsData.length > 0) {
        const response = {
          success: 0,
          msg: 'Quiz already taken',
        };
        return res.status(400).json(response);
      }
      const formData = {
        quizId: req.body.quizId,
        username: req.body.username,
        browser: req.body.browser,
      };
      const data = await ResponseServices.addData(formData);
      const response = {
        success: 1,
        msg: 'Registration Completed',
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
  submitResponse: async function (req, res) {
    try {
      const quizId = req.body.quizId;
      const filter = {
        username: req.body.username,
        quizId: quizId,
      };
      const existsData = await ResponseServices.getData(filter);
      if (existsData.length === 0) {
        const response = {
          success: 0,
          msg: 'First register yourself',
        };
        return res.status(400).json(response);
      }
      const quizdata = await QuizServices.getData(
        { _id: quizId },
        { questions: 1 }
      );
      const { questions } = quizdata[0];
      const { correct, wrong } = await ResponseServices.compareResponse(
        questions,
        req.body.response
      );
      const formData = {
        score: { correct, wrong },
        time: req.body.time,
        feedback: req.body.feedback,
      };
      const data = await ResponseServices.updateData(filter, {
        $set: formData,
      });
      const response = {
        success: 1,
        msg: 'Response submitted',
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

module.exports = ResponseController;
