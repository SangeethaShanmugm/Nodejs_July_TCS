import express from 'express';
import path from "path"
import http from "http"
let io = require("socket.io")
const iplocate = require("node-iplocate")
const publicIp = require("public-ip")
const LocalStorage = require("node-localstorage").LocalStorage
let localStorage = new LocalStorage("./scratch")


let app = express();
const PORT = 4000

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index.html")
})

// app.listen(PORT, () => console.log("Server started on the PORT", PORT))

let server = http.createServer(app).listen(PORT,
    () => console.log("Server started on the PORT", PORT))


io = require("socket.io").listen(server)

//handle socket

io.sockets.on("connection", (socket) => {
    var list = io.sockets.sockets
    console.log(list)
    var users = Object.keys(list)
    console.log(users)


    //set nickname

    socket.on("nick", (nick) => {
        socket.set("nickText", nick)
        socket.emit("userList", users)
    })

    //set chat

    socket.on("chat", (data) => {
        socket.get("nickText", (err, nick) => {
            //get public ip address
            publicIp.v4().then((ip) => {
                iplocate(ip).then((results) => {
                    console.log("Public Ip address", results)
                    let response = JSON.stringify(results.city)
                    console.log(response)
                    localStorage.setItem("userlocal", response)
                })
            })

            let nickname = err ? "Anonymous" : nick
            let payload = {
                message: data.message,
                nick: nickname,
                location: localStorage.getItem("userlocal")
            }

            console.log(payload)


            socket.emit("chat", payload)
            socket.broadcast.emit("chat", payload)
        })
    })
})