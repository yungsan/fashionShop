const productsModel = require('../model/productsModel');
const usersModel = require('../model/usersModel');
const cloudinary = require('../uploads/cloudinary');
const priceFormat = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

class ProductsControllers{

  async index(req, res){
    const products = await productsModel.find({});
    res.render('products/showAllProducts', { data: products, title: 'Products', priceFormat });
  }

  async detail(req, res){
    const data = await productsModel.findOne({ _id: req.params.id });
    return res.render('products/detailProduct', { data, priceFormat});
  }

  async addNewProductRender(req, res){
    const author = await usersModel.findOne({ _id: req.loginToken._id });
    res.render('products/addNewProduct', { author: author.username });
  }

  async addNewProduct(req, res){
    try {
      const location = `products/${req.body.name}`
      const thumbnail = req.files['thumbnail'][0].path.replace(/\\/g, "/");
      if (req.files['gallery']) {
        const gallery = req.files['gallery'].map(data => {
          data.path = data.path.replace(/\\/g, "/");
          return data;
        });

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
      }
      
     
      // upload thumbnail
      await cloudinary.uploader.upload(thumbnail, { 
        folder: location,
        use_filename: true
       },(err, rs) => {
        console.log('result', rs, 'err', err);
        req.body.thumbnail = rs.url;
      })
      
      // upload gallery
      
      await productsModel.create(req.body);
      
      return res.redirect('/products');

    } catch (err) {
      res.json(err);
    }
  }

}

module.exports = new ProductsControllers();