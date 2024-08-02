const fs = require("fs")

const child_process = require("child_process")

for (var i = 0; i < 3; i++) {
    var worker_process = child_process.fork("test.js", [i])

    worker_process.on('exit', function (code) {
        console.log('child process exited' + code)
    })
}