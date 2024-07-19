var util = require("util")

var text = "Congratulations %s on his %dth birthday😀"


var result = util.format(text, "John", 11)

console.log(result)

const name = "Jack"
const age = 30

const formattedString = util.format("Name:  %s, Age: %d", name, age)
console.log(formattedString)


