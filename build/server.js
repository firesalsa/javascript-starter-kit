import "../src/style.css";

import express from "express";
import path from "path";

const port = 3000;
const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
  if (err) {
    // TODO replace with logger
    console.log(err);
  } else {
    // TODO replace with logger
    console.info("Successfully started server \nListening on port 3000");
  }
});
