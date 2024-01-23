import { Request, Response, NextFunction } from "express";
import { NoteRepository } from "../repository/noteRepository";

export const createNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, image, noteStatus } = req.body;
  try {
    const newNote = await NoteRepository.create({
      title,
      description,
      image,
      noteStatus,
    });
    res
      .status(201)
      .json({ message: `Successfully added new note: ${newNote}` });
  } catch (error) {
    console.error(`Error in creating a new note!: ${error}`);
    res.status(500).send(`Error in creating a new note!: ${error}`);
  }
};
