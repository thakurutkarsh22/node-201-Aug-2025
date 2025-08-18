const { JWT_KEY } = require("../Middlewares/AuthMiddleware");

const JwtStratergy = require("passport-jwt").Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY
}

const jwtStratergy = new JwtStratergy(options, (payload, done) => {
    // done is like next 
    console.log("payload in jwtStratergy", payload);

    try {
        // we can do multiple things log the user find the user 
        return done(null, true);
    } catch(error) {
        return done(error, false);
    }
})

module.exports = (passport) => {
    passport.use(jwtStratergy);
}