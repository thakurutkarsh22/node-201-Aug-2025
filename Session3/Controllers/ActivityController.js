const userData = require("../usersData");

function getAllUsers (req, res) {
    const count = userData.data.length;
    res.json({data: userData.data, totalNumberOfUser: count});
}

function getUserByGender (req, res) {
    const queryParams = req.query; // this takes everything after ? 
    const searchedGender = queryParams.gender; // alien from the postman 

    const filteredData = userData.data.filter(user => user.gender === searchedGender)
    res.json(filteredData);
}

function getUser (req, res) {
    const params = req.params; // will take that starts with :
    const searchedFirstName = params.firstName

    const filteredData = userData.data.filter(user => user.name.first === searchedFirstName)
    res.json(filteredData);
}

module.exports = {getAllUsers, getUserByGender, getUser}