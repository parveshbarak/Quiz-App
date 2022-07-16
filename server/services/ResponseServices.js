'use strict';
const Response = require('../models/Response');

const ResponseServices = {
  addData: async function (formData) {
    let data;
    try {
     const dataObj = await Response(formData);
     data= dataObj.save();
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
};

module.exports = ResponseServices;
