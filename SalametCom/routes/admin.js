var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
router.get('/',checkLogin, function(req, res, next) {
  var user = req.session.user;
  console.log("im in admin + "+req.session.user);
  //after the login sucsses eill going to the calenderr page
  res.render('calender');
});

function checkLogin(req,res,next)
{
  if(!req.session.user)
  {
    res.redirect('/auth/login');
  }
  else
    next();
}

module.exports = router;
