const express = require("express");
const router = express.Router();
var multer  = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,file.originalname);
  }
});

var upload = multer({ storage: storage })
const {
  getProductById,createProduct,getAllproduct,getProduct,
  updateProduct,deleteProduct,} = require("../controllers/product");

//common to all
router.param("productId", getProductById);

//create
router.post("/product",upload.single('productImage'),createProduct);

//read
router.get("/product",getAllproduct);
router.get("/product/:productId", getProduct);

//delete
router.delete("/product/:productId",deleteProduct);

//update
router.put("/product/:productId",updateProduct);


module.exports = router;
