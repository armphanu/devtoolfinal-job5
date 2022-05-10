
const express = require("express");
const Major = require('../models/major')
router = express.Router();
// router.get('/login/:username', async (req, res) => {
//     const { username } = req.params
//     const user = await User.find({user_name : username})
//     res.json(user)
//   })


// router.get('/loginbyid/:id', async (req, res) => {
//     const { id } = req.params
//     const user = await User.find({_id : id})
//     res.json(user)
  // })

router.get('/post', async (req, res)=>{
    var allpost = (await Major.find({}))
    res.json(allpost)
})
  

exports.router = router;