function async1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async 1 is completed");
            resolve("Result from async1");
        }, 1000);
    });
}

function async2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async 2 is completed");
            resolve("Result from async2");
        }, 1000);
    });
}

function async3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async 3 is completed");
            resolve("Result from async3");
        }, 1000);
    });
}
// async1()
// async2()
// async3()

async1()
    .then((result1) => {
        console.log(result1);
        return async2();
    })
    .then((result2) => {
        console.log(result2);
        return async3();
    })
    .then((result3) => {
        console.log(result3);
        console.log("All async func completed");
    })
    .catch((error) => {
        console.log(error);
    });


// //promise all

// let p1 = Promise.resolve(30)
// let p2 = 100
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "😀")
// })


// let p4 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, "Error occured")
// })


// Promise.all([p1, p2, p3, p4])
//     .then(function (values) {
//         console.log(values)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })