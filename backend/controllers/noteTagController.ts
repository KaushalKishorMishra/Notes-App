import { NextFunction, Request, Response } from "express";
import { NoteTagsRepository } from "../repository/noteTagsRepository";

export class NoteTagsController {

  static createNoteTag = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { NoteId, TagId } = req.body;
    try {
      await NoteTagsRepository.create({ NoteId, TagId });
      const newNoteTag = await NoteTagsRepository.getNoteTagsByNoteId(String(NoteId));
      res
        .status(201)
        .json({ message: `Successfully added new noteTag.`, newNoteTag });
    } catch (error) {
      console.error(`Error in creating a new noteTag!: ${error}`);
      res.status(500).send(`Error in creating a new noteTag!: ${error}`);
    }
  };

  static updateNoteTag = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { NoteId, TagId } = req.body;
    const { id } = req.params;
    if (!(await NoteTagsRepository.findByPK(Number(id)))) {
      res.status(404).send(`NoteTag with id ${id} not found!`);
    } else {
      try {
        const updatedNoteTag = await NoteTagsRepository.update(
          { NoteId, TagId },
          Number(id)
        );
        res
          .status(200)
          .json({ message: `Successfully updated noteTag: ${updatedNoteTag}` });
      } catch (error) {
        console.error(`Error in updating noteTag!: ${error}`);
        res.status(500).send(`Error in updating noteTag!: ${error}`);
      }
    }
  };

  static delete = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!await NoteTagsRepository.findByPK(Number(id))) {
      res.status(404).send(`NoteTag with id ${id} not found!`);
    } else {
      try {
        const deletedNoteTag = await NoteTagsRepository.delete(Number(id));
        res
          .status(200)
          .json({ message: `Successfully deleted noteTag: ${deletedNoteTag}` });
      } catch (error) {
        console.error(`Error in deleting noteTag!: ${error}`);
        res.status(500).send(`Error in deleting noteTag!: ${error}`);
      }
    }
  };

  static getNoteTagsAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const noteTags = await NoteTagsRepository.getNoteTagsAll();
      res.status(200).json({ noteTags });
    } catch (error) {
      console.error(`Error in getting all noteTags!: ${error}`);
      res.status(500).send(`Error in getting all noteTags!: ${error}`);
    }
  };

  static getNoteTagsByNoteId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    try {
      const noteTags = await NoteTagsRepository.getNoteTagsByNoteId(String(id));
      res.status(200).json({ noteTags });
    } catch (error) {
      console.error(`Error in getting all noteTags!: ${error}`);
      res.status(500).send(`Error in getting all noteTags!: ${error}`);
    }
  };

  static getNoteTagsByTagId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    try {
      const noteTags = await NoteTagsRepository.getNoteTagsByTagId(Number(id));
      res.status(200).json({ noteTags });
    } catch (error) {
      console.error(`Error in getting all noteTags!: ${error}`);
      res.status(500).send(`Error in getting all noteTags!: ${error}`);
    }
  };
}
