const usersModel = require("../model/usersModel");
const productsModel = require("../model/productsModel");
const cloudinary = require("../uploads/cloudinary");
const jwt = require("jsonwebtoken");
const defaultImage = 'https://res.cloudinary.com/dfib3gi7p/image/upload/v1654083880/resources/default_Thumbnail_s5whby.jpg';

class usersController {
  async index(req, res) {
    const token = await req.loginToken;
    const user = await usersModel.findOne({ _id: token._id });
    const products = await productsModel.find({ author: user.username });
    if (!products || !user) {
      return res.redirect('/account');
    }
    res.render("users/profile", { user, products });
  }

  loginRender(req, res) {
    res.render("auth/login", { title: "Login" });
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await usersModel.findOne({ username, password });

      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      res.cookie("loginToken", token, { signed: true });

      res.redirect(`/account`);
    } catch (error) {
      res.json(error);
    }
  }

  logout(req, res){
    res.clearCookie("loginToken");
    res.redirect('/account');
    res.end();
  }

  register(req, res) {
    res.render("auth/register");
  }

  async addNewUser(req, res) {
    try {
      const location = `avatar/${req.body.username}`;
      if (req.file) {
        const avatar = req.file.path.replace(/\\/g, "/");
        await cloudinary.uploader.upload(
          avatar,
          {
            folder: location,
            use_filename: true,
          },
          (err, rs) => {
            console.log("result", rs, "err", err);
            req.body.avatar = rs.url;
          }
        );
      } else{
        req.body.avatar = defaultImage;
      }
      

      await usersModel.create(req.body);
      res.redirect("/account");

    } catch (error) {
      res.json(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      if (req.file) {
        const location = `avatar/${req.body.username}`;
        const avatar = req.file.path.replace(/\\/g, "/");
        await cloudinary.uploader.upload(
          avatar,
          {
            folder: location,
            use_filename: true,
          },
          (err, rs) => {
            console.log("result", rs, "err", err);
            req.body.avatar = rs.url;
          }
        );
      }
      await usersModel.updateOne({ _id: req.params.id }, req.body);
      res.redirect("/account");
    } catch (error) {
      res.json(error);
    }
  }

  async deleteUser(req, res, next){
    await usersModel.deleteOne({ _id: req.body.id });
    next();
  }

}

module.exports = new usersController();
