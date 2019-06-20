const mongoose = require('mongoose');
const schema = require('../schemas/article');

module.exports = mongoose.model('Article', schema);
