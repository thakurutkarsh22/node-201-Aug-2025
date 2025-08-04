const express = require("express");
require('dotenv').config() // load my .env file in process.env
const HomeRoute = require("./Routes/HomeRoute")
const ActivityRoute = require("./Routes/ActivityRoute");
const BlogRoute = require("./Routes/BlogRoute");
const AuthMiddleware = require("./Middlewares/AuthMiddleware");
const { default: mongoose } = require("mongoose");



const PORT = process.env.PORT;

const server = express();

server.use('/', HomeRoute)

server.get("/fitness", AuthMiddleware, (req, res, next) => {
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

server.use("/api/v1/activity", ActivityRoute);


server.use("/blogs", BlogRoute)



const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;
// database connection 
mongoose.connect(`${dbHost}:${dbPort}/${dbName}`)
.then(() => {
    console.log("thumbs up DB IS CONNECTED")
})





server.listen(PORT, () => {
     console.log("THumbs up every thins is good port listning is active on expressJS", PORT)
})