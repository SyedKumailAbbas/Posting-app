const express = require('express');
const { Post } = require('../models');

const router = express.Router();

// adding post on database
router.post("/",  async (req, res) => {
  const post = req.body;
  await Post.create(post)
  res.json(post)
  console.log("hello post api");
});



//getting all post
router.get("/",  async (req, res) => {
  const allpost=await Post.findAll({});
  res.json(allpost)
 
});


//getting post by id
router.get(`/byid/:id`, async (req,res)=>{
  const pid=req.params.id
  const post=await Post.findByPk(pid)
  res.json(post)
})


module.exports = router;

//getting post when user search by title
// router.get(`/search/:value`,async(req,res)=>{
//   const title=req.params.value
//   const post = await Post.findAndCountAll({
//     where :{
//       Title:{
//         [Op.like]:`%${title}%`
//       }
//     }
//   })
//   res.json(post)
// })


