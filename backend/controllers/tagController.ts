import { NextFunction, Request, Response } from "express";
import { TagRepository } from "../repository/tagRepository";

export const createTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { tagName, tagImage, tagStatus } = req.body;
  try {
    const newTag = await TagRepository.create({
      tagName,
      tagImage,
      tagStatus,
    });
    res.status(201).json({ message: `Successfully added new tag: ${newTag}` });
  } catch (error) {
    console.error(`Error in creating a new tag!: ${error}`);
    res.status(500).send(`Error in creating a new tag!: ${error}`);
  }
};
