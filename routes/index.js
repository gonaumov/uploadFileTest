var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
  console.log("entering in POST controller");
  console.log(req.body);
  res.send('POST request to the homepage');
})

module.exports = router;
