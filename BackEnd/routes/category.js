const express = require('express')
const router = express.Router();

const {createCategory,getAllCategory,getCategory,getCategoryById,
    removeCategory,updateCategory} = require("../controllers/category");

//create
router.post("/category", createCategory);         

//common to all
router.param("categoryId", getCategoryById);

//read
router.get("/categories", getAllCategory);      
router.get("/category/:categoryId", getCategory);    

//delete
router.delete("/category/:categoryId",removeCategory);     

//update
router.put("/category/:categoryId", updateCategory);       
    


module.exports = router;
