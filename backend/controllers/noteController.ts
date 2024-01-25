import { Request, Response, NextFunction } from "express";
import { NoteRepository } from "../repository/noteRepository";

export class NoteControllers {
  static createNote = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { title, description, image, noteStatus } = req.body;
    if (await NoteRepository.findByName(title)) {
      res.status(409).send(`Note with title ${title} already exists!`);
    } else {
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
    }
  };

  static updateNote = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { title, description, image, noteStatus } = req.body;
    const { id } = req.params;
    if (!(await NoteRepository.findByPK(String(id)))) {
      res.status(404).send(`Note with id ${id} not found!`);
    } else {
      try {
        const updatedNote = await NoteRepository.update(
          { title, description, image, noteStatus },
          String(id)
        );
        res
          .status(200)
          .json({ message: `Successfully updated note: ${updatedNote}` });
      } catch (error) {
        console.error(`Error in updating note!: ${error}`);
        res.status(500).send(`Error in updating note!: ${error}`);
      }
    }
  };

  static deleteNote = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const note = await NoteRepository.findByPK(String(id));
    if (!note) {
      res.status(404).send(`Note with id ${id} not found!`);
    } else {
      try {
        const deletedNote = await NoteRepository.delete(String(id));
        res
          .status(200)
          .json({ message: `Successfully deleted note: ${deletedNote}` });
      } catch (error) {
        console.error(`Error in deleting note!: ${error}`);
        res.status(500).send(`Error in deleting note!: ${error}`);
      }
    }
  };

  static getAllNotes = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!(await NoteRepository.findAll())) {
      res.status(404).send(`No notes found!`);
    } else {
      try {
        const notes = await NoteRepository.findAll();
        res.status(200).json({ notes });
      } catch (error) {
        console.error(`Error in getting all notes!: ${error}`);
        res.status(500).send(`Error in getting all notes!: ${error}`);
      }
    }
  };

  static getNoteByName = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { title } = req.params;
    if ((await NoteRepository.findByName(title)) === null) {
      res.status(404).send(`Note with title ${title} not found!`);
    } else {
      try {
        const note = await NoteRepository.findByName(title);
        res.status(200).json({ note });
      } catch (error) {
        console.error(`Error in getting note by name!: ${error}`);
        res.status(500).send(`Error in getting note by name!: ${error}`);
      }
    }
  };
}
