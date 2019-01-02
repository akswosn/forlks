var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
    title: String,
    contents: String,
});

module.exports = mongoose.model('posts', postsSchema);