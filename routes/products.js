const express = require("express");
const router = express.Router();
const multer = require("../uploads/multer");
const isLogged = require('../middleware/isLogged');
const productsControllers = require("../controllers/productsControllers");

router
  .route("/addNewProduct")
  .get(isLogged, productsControllers.addNewProductRender)
  .post(
    multer.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
      {
        name: "gallery",
        maxCount: 15,
      },
    ]),
    productsControllers.addNewProduct
  );

router.get("/detail/:id", productsControllers.detail);

router.get("/", productsControllers.index);

module.exports = router;
