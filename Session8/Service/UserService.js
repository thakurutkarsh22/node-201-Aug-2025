const { default: mongoose } = require("mongoose");
const UserModel = require("../Models/UserModel");
class UserService {

    static async createUsers(name, age, email, password) {
        

        const userObj = UserModel({
            name, age, email, password,
        })

        try {
            const response = await userObj.save();
            return response;
        } catch(error) {
            return error;
        }
    }

    static async getUserById(id) {

    }

    static async getAllUsers() {
        
    }
}

module.exports = UserService;