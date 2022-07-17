'use strict';
const e = require('express');
const Response = require('../models/Response');

const ResponseServices = {
  addData: async function (formData) {
    let data;
    try {
      const dataObj = await Response(formData);
      data = dataObj.save();
    } catch (e) {
      throw Error(e.message);
    }
    return data;
  },
  getData: async function (
    filter,
    select = [],
    sort = { _id: -1 },
    skip = 0,
    limit = 20
  ) {
    let data = [];
    try {
      data = await Response.find(filter)
        .select(select)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean();
    } catch (e) {
      throw Error(e.message);
    }
    return data;
  },
  updateData: async function (filter, updateData) {
    let data = {};
    try {
      data = await Response.findOneAndUpdate(filter, updateData, {
        multi: false,
        new: true,
      });
    } catch (e) {
      throw Error(e.message);
    }
    return data;
  },
  compareResponse: async function (ques, res) {
    let correct = 0,
      wrong = 0;
    const quesMap = {};
    try {
      ques.forEach((q) => {
        quesMap[q._id] = q.correctans;
      });
      res.forEach((r) => {
        if (quesMap[r.quesId] == r.ans) correct++;
        else wrong++;
      });
    } catch (e) {
      throw Error(e.message);
    }
    return { correct, wrong };
  },
};

module.exports = ResponseServices;
