const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title: String,
    content: String,
    viewCount: Number,
    createTime: String,
    updateTime: String,
    author: String,
    isPublish: Boolean,
    coverImg: String,
});
