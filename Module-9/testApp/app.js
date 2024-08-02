import express from 'express'
import fs from "fs"
const app = express()
const PORT = 4000

app.get("/", (req, res) => {
    res.send('<h1>Welcome to Testing App with File System</h1>')
})

app.get("/movies", (req, res) => {
    fs.readFile('./db.json', (err, result) => {
        if (err) throw err
        res.send(JSON.parse(result))
    })

})


app.get("/mytext", (req, res) => {
    fs.readFile('./myText.txt', 'utf-8', (err, data) => {
        if (err) throw err
        res.send(data)
    })

})

app.get("/appendText", (req, res) => {
    fs.appendFile('./myText.txt', 'everyone\n', (err) => {
        if (err) throw err
        else {
            fs.readFile("./myText.txt", "utf-8", (err, data) => {
                if (err) throw err
                res.send(data)
            })
        }

    })

})



app.listen(PORT, () => console.log("Server started on port", PORT))