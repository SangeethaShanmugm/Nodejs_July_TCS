// const express = require("express");
// const { MongoClient } = require('mongodb');
// const bodyParser = require('body-parser');
// const moviesRouter = require("./routes/movies")
import express from "express"
import { MongoClient } from 'mongodb'
import bodyParser from 'body-parser'
import { moviesRouter } from "./routes/movies.js"
const app = express();
const PORT = 5000;
// req => what we send to server
// res => what we receive from server

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// Connection URL
const MONGO_URL = 'mongodb://127.0.0.1:27017';
// 'mongodb://localhost:27017';

//mongodb connection 
function createConnection() {
    const client = new MongoClient(MONGO_URL)
    client.connect()
    console.log("Mongodb is connected")
    return client
}

export const client = createConnection();


app.get("/", (req, res) => {
    res.send("Hello Everyone");
});

app.use("/movies", moviesRouter)

app.listen(PORT, () => console.log("Server started on the PORT", PORT))



