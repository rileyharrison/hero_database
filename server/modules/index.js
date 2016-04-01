var express = require("express");
var router = express.Router();
var path = require("path");

var Heroes = require("../models/Heroes.js");

router.get("/hero", function(req,res){
    Heroes.find({}, function(err,data){
        if(err){
            console.log("error in index get heroes")
        };
        res.send(data);
    });
});

router.post("/hero", function(req,res){
    console.log("req body in post hero", req.body);
    var addedHero = new Heroes({"alias": req.body.alias, "first_name": req.body.first_name, "last_name": req.body.last_name, "city": req.body.city, "power_name": req.body.power_name});
    addedHero.save(function(err,data){
        if(err){
            console.log("error saving hero", err);
        }
        res.send(data);
    });
});
router.delete("/hero/:id", function(req,res){
    console.log("in index.js for delete id:", req.params.id);
    Heroes.remove({_id:req.params.id}, function(err,data){
        if(err){
            console.log("error in delete hero id:", req.params.id, err);
        };
        res.status(200).send();
    });
});
router.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});
module.exports = router;
