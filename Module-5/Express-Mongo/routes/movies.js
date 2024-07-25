import express from "express"

import { getAllMovies, getMoviesById, addMovies, deleteMovieById, updateMovieById } from "../helper.js"

const router = express.Router()

router.get("/", async (req, res) => {
    const result = await getAllMovies()
    res.send(result);
});

//get particular movie by id 

router.get("/:movieid", async (req, res) => {
    const { movieid } = req.params
    console.log(movieid, req.params)
    const result = await getMoviesById(movieid)
    result ? res.send(result) : res.status(400).send({ message: "No movies found" })
});

router.post("/", async (req, res) => {
    const newMovie = req.body
    console.log(newMovie)
    const result = await addMovies(newMovie)
    res.send(result)
});


router.delete("/:movieid", async (req, res) => {
    const { movieid } = req.params
    console.log(movieid, req.params)
    const result = await deleteMovieById(movieid)
    res.send(result)
});


router.put("/:movieid", async (req, res) => {
    const { movieid } = req.params
    const updatedMovie = req.body
    console.log(updatedMovie)
    const result = await updateMovieById(movieid, updatedMovie)
    res.send(result)
});


export const moviesRouter = router