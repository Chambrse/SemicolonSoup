var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var postRegister = require('../blogPosts/register.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res,next) {
  res.render('about');
});

router.get('/contact', function(req, res,next) {
  res.render('contact');
});

router.get('/post', function(req, res,next) {
  res.render('samplePost');
});

router.get('/post/:postName', function(req, res, next) {
  console.log(postRegister);
  let postMetaData = postRegister[req.params.postName];

  res.render('post', {
    title: postMetaData.title,
    subtitle: postMetaData.subtitle,
    date: postMetaData.date,
    body: fs.readFileSync(path.resolve(__dirname, `../blogPosts/${req.params.postName}.html`))
  });
});

module.exports = router;
