const UserService = require("../Service/UserService");
const { validateCreateuserInput } = require("../validators/createUserInputValidator");

function getAllUsers(req, res) {

}

async function createUser(req, res) {
    const body = req.body;
    const {name, age, email, password} = body;

    // we can call this function here also validateCreateuserInput

    try {
        const response = await UserService.createUsers(name, age, email, password);
        res.status(201).json(response);
    } catch(error) {
        res.status(500).json(error);
    }
}


module.exports = {getAllUsers, createUser}