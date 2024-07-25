import { client } from "./app.js";


function getAllMovies() {
    return client.db("nodejs_tcs1").collection("movies").find().toArray();
}

function getMoviesById(movieid) {
    return client.db("nodejs_tcs1").collection("movies").findOne({ id: movieid });
}

function addMovies(newMovie) {
    return client.db("nodejs_tcs1").collection("movies").insertOne(newMovie);
}

function deleteMovieById(movieid) {
    return client.db("nodejs_tcs1").collection("movies").deleteOne({ id: movieid });
}

function updateMovieById(movieid, updatedMovie) {
    return client.db("nodejs_tcs1").collection("movies").updateOne({ id: movieid }, { $set: updatedMovie });
}
export { getAllMovies, getMoviesById, addMovies, deleteMovieById, updateMovieById }