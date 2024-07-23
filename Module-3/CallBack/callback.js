const fs = require("fs")
// without callback

// function add(a, b) {
//     return a + b
// }

// function multiply(a, b) {
//     return a * b
// }

// function doMath() {
//     const result1 = add(a, b)
//     const result2 = multiply(a, b)
//     return { sum: result1, product: result2 }
// }

// const a = 5
// const b = 3

// console.log(doMath(a, b))

// with callback

function add(a, b, callback) {
    const result = a + b
    callback(result)
}

function multiply(a, b, callback) {
    const result = a * b
    callback(result)
}


function doMath(a, b, callback) {
    add(a, b, (sum) => {
        multiply(a, b, (product) => {
            callback({ sum, product })
        })
    })
}
const a = 5
const b = 3

doMath(a, b, (results) => {
    console.log(results)
})





//callback in synchronous and asynchronous

//asynchronous => writeFile()

// const [, , noOfFiles] = process.argv
// console.log(noOfFiles)

// const quote = "No beauty shines than that of a good heart"
// //backup => text-1.html, text-2.html, text-3.html.....text-5.html
// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote, () => {
//         console.log(`Completed writing file text-${i}.html`)
//     })
// }

//Synchronous => writeFileSync()

const [, , noOfFiles] = process.argv
// console.log(noOfFiles)

const quote = "No beauty shines than that of a good heart"
//backup => text-1.html, text-2.html, text-3.html.....text-5.html
// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFileSync(`./backup/text-${i}.html`, quote)
//     console.log(`Completed writing file text-${i}.html`)
// }


//callback abstraction 

function fetchData(callback) {

    setTimeout(() => {
        const data = { message: "Data fetched successfully" }
        callback(null, data)
    }, 3000)
}

function handleData(err, data) {
    if (err) { console.log(err) }
    else { console.log(data) }
}

fetchData(handleData)

//callback chaining

const cart = ["shoes", "pants", "accessories", "watch"]

// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.orderSection()
//         })
//     })
// })

//Inversion of control => callback hell => pyramid of doom

//callback chaining

function timeToDelay(sec, callback) {
    setTimeout(callback, sec * 2000)
}

console.log("Start Time")

timeToDelay(2, () => {
    console.log("TwoSeconds")
    timeToDelay(3, () => {
        console.log("ThreeSeconds")
        timeToDelay(4, () => {
            console.log("FourSeconds")
            timeToDelay(5, () => {
                console.log("FiveSeconds")
            })
        })
    })
})


//promise

let txt = "hello123"


const promise = new Promise((resolve, reject) => {
    if (txt == "hello") {
        resolve("There is a text")
    } else {
        reject("There is no text")
    }
})

console.log(promise)

//promise chaining => .then(), error => .catch()

createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateOrderSection(paymentInfo))
    .then((paymentInfo) => updateWallet(paymentInfo))

