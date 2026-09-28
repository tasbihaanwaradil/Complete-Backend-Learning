//start a server in server.js
import express from "express";

const app = express(); //server instance create

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about", (req, res) => {
  res.send("This is Tasbiha's About page");
});

app.listen(3000); //to start server on port 3000
