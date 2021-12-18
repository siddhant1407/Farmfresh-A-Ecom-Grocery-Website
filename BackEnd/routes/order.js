const express = require("express");
const router = express.Router();



const {createOrder} = require("../controllers/order");

//create
router.post("/order",createOrder);


module.exports = router;
