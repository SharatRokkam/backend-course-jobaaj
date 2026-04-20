// importing the events from nodejs
const EventEmitter = require("events");

//create an instance or example of EventEmitter
const emitter = new EventEmitter();

// define or create an event
emitter.on("greet", (arg) => {
  console.log(`Hello! ${arg.technology} Learners, ${arg.message}`);
});

//trigger or call the event
emitter.emit("greet", {
  technology: "Express",
  message: "Hope you are enjoying",
});
