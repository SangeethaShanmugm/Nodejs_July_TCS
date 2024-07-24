const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const fs = require("fs");
const app = express();
const PORT = 5000;
// req => what we send to server
// res => what we receive from server

app.get("/", (req, res) => {
    res.send("Hello Everyone");
});

// Connection URL
const mongourl = 'mongodb://127.0.0.1:27017';
// 'mongodb://localhost:27017';

MongoClient.connect(mongourl, (err, client) => {
    if (err) throw err;
    const db = client.db("nodejs_tcs1")
    console.log("Connected successfully to mongodb");
    app.listen(PORT, () => console.log("The server started on the port", PORT));

});


