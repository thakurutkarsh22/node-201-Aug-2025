const express = require("express");
const { HomeResponse, ContactResponse } = require("./Controllers/HomeController");
const { getAllUsers, getUserByGender, getUser } = require("./Controllers/ActivityController");
const PORT = 8089;

const server = express();

server.get('/', HomeResponse)

server.get('/home', HomeResponse)

server.get("/contacts", ContactResponse)

server.get("/fitness", (req, res) => {
    const dietChart = {
            name: "utkarhs",
            age: 28,
            height:180,
            weight: 75,
            diet: ["eggs", "protiesn"],
            gymAdrre: {
                street: "110089",
                pincode: 999999
            },
            shouldSleep8Hours: true,
        }

        // res.json is NOT available in nodejs // behind the scenes .json is setting the header and doing json stringify as well 
    res.status(202).json(dietChart);
})



// ACtivity 


// 1. Get all the users 

server.get("/api/v1/activity/users", getAllUsers);

// 2. You want to get USer BY gender 
// by using query params: https://www.google.com/search?q=dhoni

server.get("/api/v1/activity/users/search", getUserByGender);

// 3. get information about only 1 USER
// Method:  Params : https://pokeapi.co/api/v2/pokemon/pikachu
server.get("/api/v1/activity/user/:firstName", getUser);


server.listen(PORT, () => {
     console.log("THumbs up every thins is good port listning is active on expressJS", PORT)
})