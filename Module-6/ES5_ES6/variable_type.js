// var  => we can redeclare and reassign ✅
// let => we cannot redeclare but can reassign ✅
// const  => neither redeclare nor reassign ✅

// var a = 10
// var a  => declaration
// a = 10 => assignment

//var  - redeclaration
var a = 10
var a = 20
console.log(a) // 20


//var  -> reassignment

var b = 10
b = 20
console.log(b)


//let  => redeclare 

// let z = 50
// let z = 100
// console.log(z)


//let  => reassign

let z = 50
z = 100
console.log(z)

//const - redeclare 

// const x = 20
// const x = 60

// console.log(x)


//const - reassign
// const x = 20
// x = 60

// console.log(x)


//var  => global ,functional scope
//let, const  => block scope

console.log(func())

function func() {
    var data = "Hello";
    return data
}


{
    var y1 = 10;
    var y2 = 20
}

console.log(y1)
console.log(y2)

//scope = > lifetime of a variable
//Can a block hold var or will it leak outside?


//function  => ES5

function double() {
    var n = 20
    return n * 2
}

console.log("double =>", double())

//es6 => arrow function 

const double1 = (n) => n * 2

console.log("double1", double1(20))


//object => {K: V}

var obj1 = {
    name: "Jack",
    age: 20
}
console.log(obj1)
console.log(obj1.name, obj1.age)

//destructuring

const { name, age } = obj1
console.log("destructuring", name, age)

//assign  - ES5

var o1 = {
    firstName: "John",
    lastName: "Andrew",
}

var o2 = {
    age: 20,
    city: "London"
}
var o3 = Object.assign(o1, o2)
console.log("es5-assign", o3)

//es6 => spread operator

var o3 = { ...o1, ...o2 }
console.log("es6-assign", o3)

//es5 => string literals

//An Avenger is an action movie with rating of 5 and its from category Hollywood.

var movieName = "Avenger"
var type = "Action"
var rating = 5
var category = "Hollywood"

var output = "An " + movieName + " is an " + type + " movie with rating of " + rating +
    " and its from category " + category + ""

console.log(output)


//es6 -> template literals
// `` => backtick  + interpolation ${} => substitute value

var output = `An ${movieName} is an ${type} movie with rating of ${rating} and its from category ${category}`

console.log("es6 output =>", output)


var x = new Set()
x.add(1)
x.add(2)
x.add(3)
x.add(3)
x.add("hello")
x.add("hello")
var result = { a: 1, b: 2 }
x.add(result)

console.log(x)