const User = require("../Models/User")
const { verifyTokenandAuthorization, verifyTokenandAdmin } = require("./verifyToken")

const router = require("express").Router()
const CryptoJS = require("crypto-js")

//Update
router.put("/:id",verifyTokenandAuthorization,async(req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Delete
router.delete("/delete/:id",verifyTokenandAuthorization,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User Has Been Deleted SuccessFully....")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Get User
router.get("/get/:id",verifyTokenandAdmin,async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Get All User
router.get("/get",verifyTokenandAdmin,async(req,res)=>{
    const query = req.query.new
    try{
        const user = query ? await User.find().sort({_id:-1}).limit(5) :  await User.find()
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Stats
router.get("/stats",verifyTokenandAdmin, async (req,res)=>{
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
    try{
        const stats = await User.aggregate([
            {
                $match : { createdAt :{$gte : lastYear}}
            },
            {
                $project : {
                    month : {$month : "$createdAt"}
                },
            },
            {
                $group : {
                    _id : "$month",
                    total : {$sum : 1}
                }
            }
        ])
        res.status(200).json(stats)
    }
    catch(err){
        res.status(500).json("Stats Are Not Available")
    }
})

module.exports = router