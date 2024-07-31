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
    var token = localStorage.getItem("authToken")
    console.log(token)
    if (!token) {
        res.redirect("/")
    }
    jwt.verify(token, config.secret, (err, verifiedToken) => {
        console.log(verifiedToken.id)
        if (err) {
            res.redirect("/")
        }
        user.findById(verifiedToken.id, { password: 0 }, (err, user) => {
            if (err) {
                res.redirect("/")
            }
            if (!user) {
                res.redirect("/")
            }

            res.render("profile.ejs", { user })
            console.log(user.name)
        })
    })

})



router.get("/logout", async (req, res) => {
    localStorage.removeItem("authToken")
    res.redirect("/")

})



module.exports = router