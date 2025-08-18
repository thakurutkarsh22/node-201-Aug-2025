const express = require("express");
const { getAllUsers, getUserByGender, getUser } = require("../Controllers/ActivityController");
const { AuthMiddleware } = require("../Middlewares/AuthMiddleware");

const router = express.Router();
const passport = require("passport");


const AuthMiddleware1 = passport.authenticate("jwt", {session: false, failureRedirect: "/fitness"})

router.get("/users", AuthMiddleware1 ,  getAllUsers);
router.get("/users/search", getUserByGender);
router.get("/user/:firstName", getUser);


module.exports = router;