const express = require("express")
const axios = require("axios")

const PORT = 8080
const HOST = '0.0.0.0'
const app = express()

const searchUrl = "https://restcountries.com/v3.1/all"

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(searchUrl)
        const responseJSON = response.data
        res.json({ source: "Docker Microservice", ...responseJSON })
    } catch (err) {
        res.send(err)
    }

})
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)