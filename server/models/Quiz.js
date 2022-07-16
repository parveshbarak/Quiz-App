'use strict';
const mongoose = require('mongoose');

const quizSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is requied'],
    },
    questions: [
      {
        questionText: {
          type: String,
          required: true,
        },
        options: [{ optionId: String, optionText: String }],
        correctans: String,
      },
    ],
    starred: {
      type: Number,
      default: 0,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    publish: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quiz', quizSchema);
