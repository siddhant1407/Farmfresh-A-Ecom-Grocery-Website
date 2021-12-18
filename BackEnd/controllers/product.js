const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

var upload = multer({ storage: storage })

exports.createProduct = 
(req, res) =>
 {
  
 
  const product = new Product(req.body);

  product.productImagePath = req.file.path;
 
  product.save((err, category) => 
  {
    if (err) 
    {

      if(err.code === 11000 || err.code === 11001)
      {
        return res.status(400).json({
          error: "Duplicate Value " +req.body.name +",Value must be unique",
         
        });
      }
      else
      {
        return res.status(400).json({
          error: "NOT able to save category in DBs",
          messgae : err
         
        });
      }
      }

     
    res.json({ category });
  });
};


exports.getAllproduct =
   (req, res) => 
  {
    Product.find().exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "NO categories found"
        });
      }
      res.json(product);
    });
  };


exports.getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Product not found"
        });
      }
      req.product = product;
      next();
    });
};


exports.getProduct = (req, res) => {
    req.product.photo = undefined;
    return res.json(req.product);
  };



exports.deleteProduct = (req, res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the product"
      });
    }
    res.json({
      message: "Deletion was a success",
      deletedProduct
    });
  });
};



exports.updateProduct = (req, res) => {
    
    const product = req.product;
   
    product.name = req.body.name;
    product.hdescription = req.body.hdescription;
    product.description = req.body.description;
    product.price = req.body.price;
    product.stock = req.body.stock;
  
    product.save((err, updatedProduct) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update product",
          problem: err 
        });
      }
      res.json(updatedProduct);
    });
  };



