'use strict';
const AuthServices = require('./services/AuthServices');

const users = [
  {
    email: 'jane@gmail.com',
    name: 'Jane',
    password: AuthServices.generatePassword('123456'),
  },
  {
    email: 'admin@gmail.com',
    name: 'Admin',
    password: AuthServices.generatePassword('123456'),
  },
  {
    email: 'mia@gmail.com',
    name: 'Mia',
    password: AuthServices.generatePassword('123456'),
  },
];