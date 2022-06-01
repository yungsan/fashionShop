const express = require("express");
const router = express.Router();
const multer = require("../uploads/multer");
const isLogged = require("../middleware/isLogged");
const usersController = require("../controllers/usersController");

router
  .route("/login")
  .get(usersController.loginRender)
  .post(usersController.login);

router
  .route("/register")
  .get(usersController.register)
  .post(multer.single("avatar"), usersController.addNewUser);

router.route("/:id").put(multer.single("avatar"), usersController.updateUser);

router.route("/").get(isLogged, usersController.index);

module.exports = router;
