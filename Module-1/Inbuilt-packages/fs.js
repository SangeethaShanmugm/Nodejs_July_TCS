const fs = require("fs")

console.log("Hello everyone😀")

const quote = "Make everyday a little less ordinarily😀"

fs.writeFileSync("awesome.pdf", quote)

//callback function => function inside another function

fs.writeFile("fun.html", quote, (error) => {
    console.log("File written successfully")
})