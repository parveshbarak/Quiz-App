'use strict';
const ResponseServices = require('../services/ResponseServices');

const ResponseController = {
  submitResponse: async function (req, res) {
    try {
      const data = await ResponseServices.addData(req.body);
      const response = {
        success: 1,
        msg: 'Response submitted',
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
};

module.exports = ResponseController;
