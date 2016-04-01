var express = require("express");
var app = express();
var db = require("./modules/db.js");
var index = require("./modules/index.js");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.set("port", process.env.PORT || 4242);

app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("listening on port ", app.get("port"));
});
