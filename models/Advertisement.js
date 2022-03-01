'use strict';

//Import mongoose module
const mongoose = require('mongoose');

//Definition the schema of advertisement
const advertisementSchema = mongoose.Schema(
  {
    name: {type: String, maxLength: 100, required: true, index: true},
    description: {type: String, required: true},
    sale: {type: Boolean, required: true, index: true},
    price: {type: Number, required: true},
    image: {type: String, maxLength: 500},
    gallery: [],
    tags: {
      type: [String],
      required: true,
      enum: ['tag1', 'tag2', 'tag3'],
      default: ['uncategorized']
    },
    name: {type: String, maxLength: 100, required: true, index: true},
    author: {type: mongoose.Schema.Types.ObjectID, ref: 'User'}
  },
  {timestamps: true}
);

// Create the model
const Advertisement = mongoose.model('Advertisement', advertisementSchema);

// Export model
module.exports = Advertisement;
