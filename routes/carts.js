const express = require("express");
const router = express.Router();
const isLogged = require("../middleware/isLogged");
const cartsController = require("../controllers/cartsController");

router.get('/', isLogged, cartsController.index);
router.post('/addToCart', isLogged, cartsController.addToCart);

module.exports = router;