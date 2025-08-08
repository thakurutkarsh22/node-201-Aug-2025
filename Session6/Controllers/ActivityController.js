const userData = require("../usersData");

const SECRET_PASSWORD = "asdf1234";

function getAllUsers (req, res) {
    const count = userData.data.length;
    res.json({data: userData.data, totalNumberOfUser: count});
}

function getUserByGender (req, res) {
    const queryParams = req.query; 
    const searchedGender = queryParams.gender;

    const filteredData = userData.data.filter(user => user.gender === searchedGender)
    res.json(filteredData);
}

function getUser (req, res) {
    const params = req.params; 
    const searchedFirstName = params.firstName

    const filteredData = userData.data.filter(user => user.name.first === searchedFirstName)
    res.json(filteredData);
}

module.exports = {getAllUsers, getUserByGender, getUser}