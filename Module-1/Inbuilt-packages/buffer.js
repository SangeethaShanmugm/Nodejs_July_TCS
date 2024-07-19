var buffer1 = Buffer.from("123456789")
var buffer2 = Buffer.from("HELLO")

console.log(buffer1.toString())
console.log(buffer2.toString())

var result = buffer2.copy(buffer1, 2)//12HELLO89
console.log(result) //5
//buffer1[2] becomes buffer2[0] 'H'
//buffer1[3] becomes buffer2[1] 'E'


console.log("After copy")
console.log(buffer1.toString())//12HELLO89
console.log(buffer2.toString())//HELLO

console.log(Buffer.concat([buffer1, buffer2]).toString())//12HELLO89HELLO
console.log(buffer1.equals(buffer2))//false

console.log(Buffer.compare(buffer1, buffer2))//ASCII characters
//buffer1 => 12HELLO89
// buffer2 => HELLO