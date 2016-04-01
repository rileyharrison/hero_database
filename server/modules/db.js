var mongoose = require("mongoose");

var mongoURI = 'mongodb://localhost/my_heroes_db';

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on("error", function(err){
    console.log("mongo connection error", err);

});

mongoDB.once("open", function(err){
    console.log("mongo connection OPEN");
});

module.exports = mongoDB;
