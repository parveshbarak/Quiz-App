'use strict';
const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    browser: {
      type: String,
      required: true,
    },
    score: {
      correct: {
        type: Number,
        required: true,
      },
      wrong: {
        type: Number,
        required: true,
      },
    },
    time: {
      type: Number,
      required: true,
    },
    feedback: {
      description: { type: String },
      rating: { type: Number },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Response', responseSchema);
