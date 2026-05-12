// const buffer = new Buffer.from("Jobaaj")

// console.log(buffer.toString())
// console.log(buffer.toJSON())

const fs = require("fs");

// const read = fs.readFileSync("text.txt", "utf-8")
// console.log(read)

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello\n");
writeStream.write("Nodejs\n");

writeStream.end();


const readStream = fs.createReadStream("output.txt")

console.log(readStream)