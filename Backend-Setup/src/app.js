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

export default app;
