var express = require('express');
var router = express.Router();
/*GEThome page.*/
router.get('/', function(req, res, next){
  const context = {
    title: 'profile',
    name: 'Carlos',
    age: 15,
    position: 'instructor',
    hobies: ['cars, hacking, Supra'],
  }
res.render('profile', context);
});

module.exports = router;
