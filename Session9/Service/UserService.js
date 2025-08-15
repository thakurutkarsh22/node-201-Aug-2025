const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const UserModel = require("../Models/UserModel");
const { JWT_KEY } = require("../Middlewares/AuthMiddleware");

class UserService {

    static async createUsers(name, age, email, password) {
        console.log("createUsers", password);
        // Hash the password 

        const hashedPasswor = await UserService.encryptPassword(password);
    
        const userObj = UserModel({
            name, age, email, password: hashedPasswor,
        })


        try {
            const response = await userObj.save();
            return response;
        } catch(error) {
            return error;
        }
    }

    static async login(email, password) {
        const userArray = await UserService.getUserByEmail(email);


        if(!userArray || !userArray.length) {
            return {
                isLogged: false,
            }
        } else {
            const user = userArray[0];
            const usersHashedPassword = user.password; // this password is hashed from DB 
            const res = await bcrypt.compare(password, usersHashedPassword) // true, false

            let token = "";
            if(res) {
                token = jwt.sign({username:user.email, nationality: "Indian" }, JWT_KEY, {
                    expiresIn: "20000ms"
                })
            }

            return {
                isLogged: res,
                token: token,
            }
        }

    }

    static async encryptPassword(plainPassword){
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(plainPassword, salt);
        return hashPassword;
    }

    static async getUserByEmail(email) {
        const user = await UserModel.find({email: email});
        return user;
    }

    static async getAllUsers() {
        
    }
}

module.exports = UserService;