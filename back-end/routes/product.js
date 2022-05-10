const express = require("express");
const Product = require('../models/product')
router = express.Router();

router.post('/product', async (req, res) => {
    const payload = req.body
    const product = new Product(payload)
    await product.save()
    res.send(product)
    res.status(200).end()
  })

router.get('/allproduct', async (req, res)=>{
  var allproduct = (await Product.find({}))
  res.json(allproduct)
})


router.get('/specificproduct/:id', async (req, res)=>{
    const { id } = req.params
    const product = await Product.find({_id : id})
    res.json(product)
})


  exports.router = router;
