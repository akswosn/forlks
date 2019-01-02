var mongoose    = require('mongoose');

var state = {
  db: null,
}
//DB URL
//var url = "mongodb://forlks:akswo3390@13.59.159.219:27017/forlks";
var url = "mongodb://forlks:akswo3390@127.0.0.1:27017/forlks";
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

exports.connect = function(next) {
  if (state.db) return next()

  mongoose.connect(url, function(err, db) {
    if (err) return next(err)
    state.db = db
    next()
  })
}

exports.get = function() {
  return state.db
}

exports.close = function(next) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      next(err)
    })
  }
}
