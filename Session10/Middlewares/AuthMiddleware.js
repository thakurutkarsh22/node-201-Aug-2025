const jwt = require("jsonwebtoken");
const JWT_KEY = "ASdjasljfglasudfgo3782qrgfa8w74r";


function AuthMiddleware(req, res, next) {
    
    const headers = req.headers;
    const bearerToken = headers.authorization;
    const token = bearerToken?.split(" ")[1];

    if(!token) {
        res.status(401).json({message: "please login!!"})
    } else {
        // 1. verify the token 
        jwt.verify(token, JWT_KEY, (err, decodedJWT ) => {
            console.log("decodedJWT", decodedJWT);

            if(err) {
                res.status(401).json({message: "please re-login", err})
            } else {
                // I can modify the request 
                
                next();
            }
        })


    }

}

module.exports = {AuthMiddleware, JWT_KEY};