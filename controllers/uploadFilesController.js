'use strict';

const exampleMethod = async (req, res, next) => {
  try {
    res.status(200).json({data: 'resultQuery'});
  } catch (error) {
    res.status(500).send({
      message: 'An error occurred while consulting the list of experiences.'
    });
    next(err);
  }
};

module.exports = {
  exampleMethod
};
