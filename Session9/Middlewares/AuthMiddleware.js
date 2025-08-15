const SECRET_PASSWORD = process.env.SERVER_PASSWORD;

function AuthMiddleware(req, res, next) {
    
    const headers = req.headers;
    const givenPasswordAuthorization = headers.authorization; // user is giving from postman 

    if(givenPasswordAuthorization === SECRET_PASSWORD) {
        //  its a good request
        next();
    } else {
        //  its a bad request 
        res.status(403).json({message: "please login or send the password"})
    }

}

module.exports = AuthMiddleware;