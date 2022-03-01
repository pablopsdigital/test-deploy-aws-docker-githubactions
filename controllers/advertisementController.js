'use strict';

const AdvertisementModel = require('../models/Advertisement.js');

const exampleAdvertisementMethod = async (req, res, next) => {
  try {
    const advertisements = await AdvertisementModel.find({});
    res.status(200).json({data: advertisements});
  } catch (error) {
    res.status(500).send({
      message: 'An error occurred.'
    });
    next(err);
  }
};

module.exports = {
  exampleAdvertisementMethod
};
