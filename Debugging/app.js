const fs = require("fs");

function readUser() {
  try {
    fs.readFile("user.json", "utf-8", (err, data) => {
      //   console.log("Raw data : ", data);
      debugger;
      const user = JSON.parse(data);
      console.log(user.name);
    });
  } catch (err) {
    console.log("Error Message", err.message);
  }
}

readUser();
