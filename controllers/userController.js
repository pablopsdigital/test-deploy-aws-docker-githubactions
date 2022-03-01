'use strict';

const UserModel = require('../models/User.js');

const exampleUserMethod = async (req, res, next) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({data: users});
  } catch (error) {
    res.status(500).send({
      message: 'An error occurred.'
    });
    next(err);
  }
};

module.exports = {
  exampleUserMethod
};
