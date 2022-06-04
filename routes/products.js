const express = require("express");
const router = express.Router();
const multer = require("../uploads/multer");
const isLogged = require("../middleware/isLogged");
const productsController = require("../controllers/productsController");

router
  .route("/addNewProduct")
  .get(isLogged, productsController.addNewProductRender)
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
    productsController.addNewProduct
  );

router.route("/edit/:id").get(productsController.editProductRender);
router.get("/detail/:id", productsController.detail);

router
  .route("/")
  .get(productsController.index)
  .delete(productsController.delete);

module.exports = router;
