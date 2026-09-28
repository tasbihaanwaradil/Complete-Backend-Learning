//create a server in app.js
import express from "express";

const app = express(); //server instance create
app.use(express.json()); //middleware what data comming from body it will read it By default express can not read data comming from body we use express.json() middleware

//create notes array
const notes = []; //notes create by user will store in this array

//REST APIS
//method : POST
//API: /notes
app.post("/notes", (req, res) => {
  //console.log(req.body); //{ title: 'test_title', description: 'test description' }

  //push tile and description is notes array
  notes.push(req.body);

  // 201 Status code: Created: A new resource has been created.

  res.status(201).json({
    message: "notes created successfully",
  });
});

//get notes created by user
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

//delete notes
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  delete notes[index];
  console.log(index);

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

export default app;
