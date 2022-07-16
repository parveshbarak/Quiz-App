'use strict';
const Quiz = require('../models/Quiz');

const UserServices = {
  addData: async function (formData) {
    let data;
    try {
      const dataObj = await Quiz(formData);
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
      data = await Quiz.find(filter)
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
};

module.exports = UserServices;
