
const fs = require('fs');

// fs.open("./cool.txt", (err, file) => {
//     if (err) console.log(err)
//     console.log("File opened successfully")
// })

// fs.stat("./cool.txt", (err, stats) => {
//     console.log(stats.isFile())
//     console.log(stats.isDirectory())
//     console.log(stats.isCharacterDevice())
//     //The isCharacterDevice() method is used to determine if a given file is a character device. Character devices are types of devices that transfer data character by character, such as keyboards, mice, or serial ports. This is in contrast to block devices, which transfer data in large blocks (like hard drives).
//     console.log(stats.isSocket())
// })


// fs.readFile("./cool123.txt", "utf-8", (err, data) => {
//     if (err) console.log("Error❌", err)
//     console.log("The content of the file is =>", data)
// })

const quote = "\nLive more, worry less😀😀"

// fs.appendFile("./cool.txt", quote, (err) => {
//     console.log("Completed appending data")
// })

// fs.unlink("./toRemove.txt", (err) => {
//     if (err) console.log(err)
//     console.log("Deleted successfully")
// })


//object  => {K:V}


const user = {
    name: "Jack",
    age: 20
}

console.log(user)

const userData = JSON.stringify(user)
console.log(userData)


const userParse = JSON.parse(userData)
console.log(userParse)


const movie = {
    name: "The Avengers",
    type: "Hollywood"
}

const movieData = JSON.stringify(movie)

console.log(movieData)//{"name":"The Avengers","type":"Hollywood"}

fs.writeFile("movies.json", movieData, (err, movieData) => {
    console.log("WriteFile Success")
})