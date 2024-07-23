const request = require("request")

const url = "https://jsonplaceholder.typicode.com/posts/1"

//Make a GET request

request(url, { json: true }, (error, response, body) => {
    if (error) {
        console.log("An error occured", error)
        return;
    }
    if (response.statusCode !== 200) {
        console.error("Unexpected status code", response.statusCode)
    }
    console.log("response", body)
})