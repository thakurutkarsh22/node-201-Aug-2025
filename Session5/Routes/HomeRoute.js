const express = require("express");
const { route } = require("./ActivityRoute");
const { HomeResponse, ContactResponse } = require("../Controllers/HomeController");
const router = express.Router();

router.get('/', HomeResponse)
router.get('/home', HomeResponse)
router.get("/contacts", ContactResponse)

module.exports = router;