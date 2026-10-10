import express from "express";
import noteModel from "./models/note.model.js";

const app = express();
app.use(express.json());

//Create a note
app.post("/notes", async (req, res) => {
  const data = req.body; /*{title, description}*/

  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "note created successfully",
  });
});

// Get notes
app.get("/notes", async (req, res) => {
  const getAllNotes = await noteModel.find();

  res.status(200).json({
    message: "Notes fetched successfully",
    getAllNotes,
  });
});

// Get note by id
app.get("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const getNoteById = await noteModel.findOne({
    _id: id,
  });

  res.status(200).json({
    message: "note fetch successfully",
    getNoteById,
  });
});

//delete a note
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const deleteNoteById = await noteModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "note deleted",
    deleteNoteById,
  });
});

//update note
app.patch("/notes/:id", async (req, res) => {
  const updatedNote = await noteModel.findOneAndUpdate(
    { _id: req.params.id },
    { description: req.body.description },
    { title: req.body.title },
    { new: true, runValidators: true },
  );

  res.status(200).json({
    message: "Note is updated sucessfully",
    updatedNote,
  });
});

export default app;

//find() always returns array of abject []
//findOne() {} else null
