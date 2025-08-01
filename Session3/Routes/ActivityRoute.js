const express = require("express");
const { getAllUsers, getUserByGender, getUser } = require("../Controllers/ActivityController");
const AuthMiddleware = require("../Middlewares/AuthMiddleware");
const router = express.Router();

router.get("/users", AuthMiddleware,  getAllUsers);
router.get("/users/search", getUserByGender);
router.get("/user/:firstName", getUser);


module.exports = router;