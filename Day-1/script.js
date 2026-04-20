// console.log(__dirname)
// console.log(__filename)

// console.log(process.argv)

// let command = process.argv[2];

// if (command == "start") {
//   console.log("server is starting");
// } else if (command == "stop") {
//   console.log("server stopped");
// } else {
//   console.log("unknown problem");
// }

// console.log(process.env.PORT)

const add = (a, b) => a + b;

module.exports = add;

export default function app(x){
    return x * x * x
}

