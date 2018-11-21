var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err,data){
    if(err) {
      console.log("err :", err);
    }
      res.send(data);
  })

});

module.exports = router;
