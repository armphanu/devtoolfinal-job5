const express = require("express");
router = express.Router();
const User = require('../models/user')
const Product = require('../models/product')


router.put('/comment/:productid', async (req, res)=>{
    const { productid } = req.params
    const filter = { _id: productid };
    let doc = await Product.findOneAndUpdate(filter, req.body, {
        returnOriginal: false
        });
        doc.save()
        res.send(doc)
})


router.put('/replycomment/:productid', async (req, res)=>{
    const { productid } = req.params
    const filter = { _id: productid };
    let doc = await Product.findOneAndUpdate(filter, req.body, {
        returnOriginal: false
        });
        doc.save()
        res.send(doc)
})



// router.put('/replycomment/:productid', async (req, res)=>{
//     const { productid } = req.params
//     const filter = { _id: productid };
//     let doc = await Product.findOneAndUpdate(filter, req.body, {
//         returnOriginal: false
//         });
//         doc.save()
//         res.send(doc)
// })


// router.put('/like/:postid', async (req, res)=>{
//     const { postid } = req.params
//     const filter = { _id: postid };
//     let doc = await Post.findOneAndUpdate(filter, req.body, {
//         returnOriginal: false
//         });
//         doc.save()
//         res.send(doc)
// })

// router.put('/report/:postid', async (req, res)=>{
//     const { postid } = req.params
//     const filter = { _id: postid };
//     let doc = await Post.findOneAndUpdate(filter, req.body, {
//         returnOriginal: false
//         });
//         doc.save()
//         res.send(doc)
// })






exports.router = router;