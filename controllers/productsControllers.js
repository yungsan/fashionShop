const productsModel = require('../model/productsModel');
const { propfind } = require('../routes');
const cloudinary = require('../uploads/cloudinary');

class ProductsControllers{

  async index(req, res){
    const products = await productsModel.find({});
    res.render('products/showAllProducts', { data: products });
  }

  async detail(req, res){
    const data = await productsModel.findOne({ _id: req.params.id });
    res.json(data);
  }

  addNewProductRender(req, res){
    res.render('products/addNewProduct');
  }

  async addNewProduct(req, res){
    // return res.json(req.body)
    try {
      const location = `products/${req.body.name}`
      const thumbnail = req.files['thumbnail'][0].path.replace(/\\/g, "/");
      const gallery = req.files['gallery'].map(data => {
        data.path = data.path.replace(/\\/g, "/");
        return data;
      });
     
      // upload thumbnail
      await cloudinary.uploader.upload(thumbnail, { 
        folder: location,
        use_filename: true
       },(err, rs) => {
        console.log('result', rs, 'err', err);
        req.body.thumbnail = rs.url;
      })
      
      // upload gallery
      let data = [];
      for (const file of gallery) {

        await cloudinary.uploader.upload(file.path, { 
          folder: location,
          use_filename: true
         },(err, rs) => {
          console.log('result', rs, 'err', err);
          data.push(rs.url);
        })

      }

      req.body.gallery = data;
      
      await productsModel.create(req.body);
      
      return res.redirect('/products');

    } catch (err) {
      res.json(err);
    }
  }

}

module.exports = new ProductsControllers();