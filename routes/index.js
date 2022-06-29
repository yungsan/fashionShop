const express = require('express');
const router = express.Router();
const getData = require('../middleware/crawler/getData');
const productsModel = require('../model/productsModel');


router.post('/crawler', getData);

router.get('/', async function(req, res, next) {
  const data = await productsModel.find({}).limit(8);
  res.render('home', { title: 'Fashion Shop', data });
});

module.exports = router;
