const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
          if (err) {
            res.status(401).json("Token is not valid");
          }
          req.user = user;
          next();
        });
    }
    else{
        res.status(401).json("You are not authenticated!");
    }
}

const verifyTokenandAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("You Are Not Allowed To do That!")
        }
    })
}

const verifyTokenandAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You Are Not Admin!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenandAuthorization,
  verifyTokenandAdmin,
};