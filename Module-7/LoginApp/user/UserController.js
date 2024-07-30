const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
const user = require("../Model/user")
const jwt = require("jsonwebtoken")
const config = require("../config")


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())


router.get("/profile", async (req, res) => {

    res.render("profile.ejs")
})


module.exports = router