'use strict';
const UserServices = require('../services/UserServices');
const AuthServices = require('../services/AuthServices');

const AuthController = {
  register: async function (req, res) {
    try {
      const existUser = await UserServices.getUser({
        email: req.body.email,
      });
      if (existUser.length > 0) {
        const response = {
          success: 0,
          msg: 'User already registred',
        };
        return res.status(400).json(response);
      }
      const formData = {
        email: req.body.email,
        password: await AuthServices.generatePassword(req.body.password),
        name: req.body.name,
      };
      console.log(formData);
      const user = await UserServices.addUser(formData);
      console.log(user);
      const token = await AuthServices.generateToken({
        userId: user.userId,
        success: 1,
      });
      user.password = undefined;
      const response = {
        success: 1,
        msg: 'Registration successfully',
        data: { user, token },
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
  login: async function (req, res) {
    try {
      const existUser = await UserServices.getUser({
        email: req.body.email,
      });
      if (existUser.length === 0) {
        const response = {
          success: 0,
          msg: 'User is not registred',
        };
        return res.status(400).json(response);
      }
      const user = existUser[0];
      const isMatched = await AuthServices.verifyPassword(
        req.body.password,
        user.password
      );
      if (!isMatched) {
        const response = {
          success: 0,
          msg: 'Wrong Credentials',
        };
        return res.status(400).json(response);
      }
      delete user.password;
      const token = await AuthServices.generateToken({
        success: 1,
        userId: user.userId,
      });
      const response = {
        success: 1,
        msg: 'Login Success',
        data: { user, token },
      };
      return res.status(200).json(response);
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

module.exports = AuthController;
