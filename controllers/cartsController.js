const cartsModel = require('../model/cartsModel');

class cartsController{
  async index(req, res, next){
    const data = await cartsModel.find({ userID: req.loginToken._id });
    
    res.json(data);
  }

  async addToCart(req, res, next){
    console.log(req.body);
    try {
      await cartsModel.create(req.body)
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new cartsController();