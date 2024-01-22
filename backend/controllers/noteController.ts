import { Request, Response } from "express";
import db from "../models/index";

export const createNote = async (req: Request, res: Response) => {
  const { title, description, image, noteStatus } = req.body;
  try {
    const newNote = await db.Note.create({
      title,
      description,
      image,
      noteStatus,
    });
    res.status(201).send(newNote);
  } catch (error) {
    res.status(500).send(error);
  }
};
