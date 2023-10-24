const express=require('express')
const {Comment}=require('../models')

const router = express.Router();

router.post("/",  async (req, res) => {
    const cmnt = req.body;
    await Comment.create(cmnt)
    res.json(cmnt);
    console.log("hello comment api")
})


router.get(`/:postid`,  async (req, res) => {
    const postid = req.params.postid;
    // res.send("all comments are here")
    const allcomments=await Comment.findAll({
        where :{
            PostPid:postid
    }});

    res.json(allcomments);
})
module.exports=router