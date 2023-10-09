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
  const id=req.params.id
  const post=await Post.findByPk(id)
  res.json(post)
})


module.exports = router;
