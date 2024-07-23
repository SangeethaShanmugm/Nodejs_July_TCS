const express = require("express")
const request = require("request")
const app = express()

const PORT = 9000

const url = "https://api.openweathermap.org/data/2.5/weather?lat=12.97&lon=77.59&appid=8c1ec4792e12f7163397d4380a2e0ad0"

//setup ejs

app.use(express.static(__dirname + "/public")) //css
app.set("views", "./src/views")//pages
app.set("view engine", "ejs")//choosing ejs template


app.get("/", (req, res) => {
    res.send("Welcome to Weather App")
})

app.get("/getWeather", (req, res) => {
    request(url, (err, response, body) => {
        if (err) {
            console.log(err)
        } else {
            const output = JSON.parse(body)
            // res.send(output);
            res.render("main", { output, title: "Weather App" })
        }

    })

})



app.listen(PORT, () => console.log("Server started on port", PORT))