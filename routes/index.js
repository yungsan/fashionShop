const express = require('express');
const router = express.Router();
const getData = require('../middleware/crawler/getData');

router.post('/crawler', getData);

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Fashion Shop' });
});

module.exports = router;
