'use strict';
const User = require('../models/User');

const UserServices = {
  addUser: async function (formData) {
    let data;
    try {
      const dataObj = await User(formData);
      data = await dataObj.save();
    } catch (e) {
      throw Error(e.message);
    }
    return data;
  },
  getUser: async function (
    filter,
    select = [],
    sort = { _id: -1 },
    skip = 0,
    limit = 1
  ) {
    let data = [];
    try {
      data = await User.find(filter)
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
  updateUser: async function (filter, updateData) {
    let data = {};
    try {
      data = await User.findOneAndUpdate(filter, updateData, {
        multi: false,
        new: true,
      });
    } catch (e) {
      throw Error(e.message);
    }
    return data;
  },
};

module.exports = UserServices;
