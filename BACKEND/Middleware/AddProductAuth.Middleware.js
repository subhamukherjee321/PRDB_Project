const key = process.env.secretKey;
const jwt = require("jsonwebtoken");

const authenticator = (req,res,next)=> {
    const token = req.headers.auth;
    try {
        if(token){
            const decoded = jwt.verify(token, key);
            if(decoded){
                req.body.sellerID = decoded.id; 
                next()
            }else{
                res.status(400).send({message:"Login again"});
            }
        }else{
            res.status(400).send({message:"Login First"});
        }
        
    } catch (err) {
        console.log(err.message);
        res.status(400).send({message:"Login First"});
    }
}

module.exports = authenticator;