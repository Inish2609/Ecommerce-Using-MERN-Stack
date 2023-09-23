const { verifyTokenandAdmin } = require("./verifyToken");
const Product = require("../Models/Product")

const router = require("express").Router();

//Create
router.post("/",verifyTokenandAdmin, async (req,res)=>{
    const newProduct = new Product(req.body)
    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Update
router.put("/:id",verifyTokenandAdmin,async(req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },{
            new:true,
        })
        res.status(200).json(updatedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Delete
router.delete("/:id",verifyTokenandAdmin,async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product Has Been Deleted SuccessFully....")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Get Product
router.get("/find/:id",async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err)
    }
})

//Get All Product
router.get("/find",async(req,res)=>{
    const qNew = req.query.new
    const qcategories = req.query.categories
    try{
        let product
        if(qNew){
            product = await Product.find().sort({createdAt : -1}).limit(1)
        }
        else if(qcategories){
            product = await Product.find({
                categories : {
                    $in : [qcategories]
                }
            })
        }
        else{
            product = await Product.find()
        }
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
