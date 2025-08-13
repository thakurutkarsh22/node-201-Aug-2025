const express = require("express");
const { createUser, login } = require("../Controllers/UserController");
const { getAllUsers } = require("../Controllers/ActivityController");
const validateInputMiddleware = require("../Middlewares/InputValidatorUserMiddleware");

const router = express.Router();

router.post("/createUser",validateInputMiddleware, createUser);
router.post("/login", login);
router.get("/getAllUsers", getAllUsers);


module.exports = router;