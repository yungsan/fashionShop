const express = require("express");
const router = express.Router();
const multer = require("../uploads/multer");
const usersController = require("../controllers/usersController");
const isLogged = require('../middleware/isLogged');

router
  .route("/login")
  .get(usersController.loginRender)
  .post(usersController.login);

router
  .route("/register")
  .get(usersController.register)
  .post(multer.single("avatar"), usersController.addNewUser);

// router.get('/profile', isLogged, usersController.index);
router.get("/", isLogged, usersController.index);

module.exports = router;
