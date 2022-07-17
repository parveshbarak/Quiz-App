'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const mongodb = require('./config/db');

/**
 * @description import custom route
 */
const AuthRoute = require('./routes/AuthRoute');
const QuizRoute = require('./routes/QuizRoute');
const ResponseRoute = require('./routes/ResponseRoute');

app.use(cors());

mongodb();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
  })
);

app.get('/api', (req, res) => {
  var response = {
    success: 1,
    message: 'Welcome to new era of Collections',
  };
  res.status(200).json(response);
});

app.use('/auth', AuthRoute);
app.use('/quiz', QuizRoute);
app.use('/response', ResponseRoute);

/**
 * @description Page NOT FOUND Error
 */
app.use((req, res) => {
  return res.status(404).json({
    success: 0,
    message: `NOT FOUND ${req.originalUrl}`,
  });
});

const { PORT, NODE_ENV } = process.env;

app.listen(PORT || 8080, () => {
  console.log(`server is listing in ${NODE_ENV} on ${PORT} `);
});
