const router = require("express").Router();
const User = require("../Models/User");
const cryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//Registeration

router.post("/register", async(req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
  });
  try{
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  }
  catch(err){
    res.status(500).json(err)
  }
});

//Login

router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(404).json("Wrong Credentails");

        const hashedPassword = cryptoJS.AES.decrypt(
          user.password,
          process.env.PASS_SEC
        ).toString(cryptoJS.enc.Utf8);
        hashedPassword !== req.body.password &&
          res.status(404).json("Wrong Credentails");
        const {password, ...others} = user._doc

        const accessToken = jwt.sign({
          id:user.id,
          isAdmin:user.isAdmin
        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
        )
        // res.status(200).json(user.username+" Logined Successfully")
        res.status(200).json({...others,accessToken});
    }
    catch(err){
        res.status(404).json(err)
    }
    
})

module.exports = router;
