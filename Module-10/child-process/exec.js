
const fs = require("fs")
const child_process = require("child_process")

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.exec('node test.js ' + i, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack)//stack tracing error
            console.log(error.code)//error code
            console.log(error.signal)//process exit 
        }
        console.log('stdout' + stdout)
        console.log('stderr', stderr)
    })

    workerProcess.on('exit', function (code) {
        console.log('child process exited' + code)
    })


}