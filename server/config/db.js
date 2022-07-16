'use strict';
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
        process.env.MONGO_LOCAL_URL ||
        'mongodb://gulshan:1alyxstar@localhost:27017/quiz?authSource=admin',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log('mongoDB connected: ', conn.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connectDB;
