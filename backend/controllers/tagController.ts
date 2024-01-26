import { NextFunction, Request, Response } from "express";
import { TagRepository } from "../repository/tagRepository";
import { NoteTagsRepository } from "../repository/noteTagsRepository";

export class TagControllers {
  static createTag = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { tagName, tagStatus } = req.body;
    const tag = await TagRepository.findByName(tagName);
    if (tag) {
      res.status(409).send(`Tag with name ${tagName} already exists!`);
    } else {
      try {
        const newTag = await TagRepository.create({
          tagName,
          tagStatus,
        });
        res
          .status(201)
          .json({ message: `Successfully added new tag.`, newTag });
      } catch (error) {
        console.error(`Error in creating a new tag!.`, error);
        res.status(500).send(`Error in creating a new tag!: ${error}`);
      }
    }
  };

  static updateTag = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { tagName, tagImage, tagStatus } = req.body;
    const { id } = req.params;
    if (!(await TagRepository.findByPK(Number(id)))) {
      res.status(404).send(`Tag with id ${id} not found!`);
    } else {
      try {
        await TagRepository.update({ tagName, tagStatus }, Number(id));
        const updatedTag = await TagRepository.findByPK(Number(id));
        res
          .status(200)
          .json({ message: `Successfully updated tag.`, updatedTag });
      } catch (error) {
        console.error(`Error in updating tag!: ${error}`);
        res.status(500).send(`Error in updating tag!: ${error}`);
      }
    }
  };

  static deleteTag = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const tag = await TagRepository.findByPK(Number(id));
    if (!tag) {
      res.status(404).send(`Tag with id ${id} not found!`);
    } else {
      try {
        const deletedTag = await TagRepository.findByPK(Number(id));
        await NoteTagsRepository.deleteTagByTagId(Number(id));
        await TagRepository.delete(Number(id));
        res
          .status(200)
          .json({ message: `Successfully deleted tag.`, deletedTag });
      } catch (error) {
        console.error(`Error in deleting tag!: ${error}`);
        res.status(500).send(`Error in deleting tag!: ${error}`);
      }
    }
  };

  static getAllTags = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if ((await TagRepository.findAll()) === null) {
      res.status(404).send(`No tags found!`);
    } else {
      try {
        const allTags = await TagRepository.findAll();
        res.status(200).json({ allTags });
      } catch (error) {
        console.error(`Error in retrieving all tags!: ${error}`);
        res.status(500).send(`Error in retrieving all tags!: ${error}`);
      }
    }
  };

  static getTagByName = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { tagName } = req.params;

    if ((await TagRepository.findByName(tagName)) === null) {
      res.status(404).send(`Tag with name ${tagName} not found!`);
    } else {
      try {
        const tag = await TagRepository.findByName(tagName);
        if (!tag) {
          res.status(404).send(`Tag with name ${tagName} not found!`);
        } else {
          res.status(200).json({ tag });
        }
      } catch (error) {
        console.error(`Error in retrieving tag by name!: ${error}`);
        res.status(500).send(`Error in retrieving tag by name!: ${error}`);
      }
    }
  };

  static getTagByTagStatus = async(
    req:Request,
    res:Response,
    next:NextFunction
  ) =>{
    const {tagStatus} = req.params;
    if((await TagRepository.findTagByStatus(tagStatus)) === "active" || "inactive"){
      console.log("I am here");
      res.status(404).send(`Tag with status ${tagStatus} not found!`);
  }
  else{
      try{
          const tag = await TagRepository.findTagByStatus(tagStatus);
          console.log("I am here",tag);
          if(!tag){
              res.status(404).send(`Tag with status ${tagStatus} not found!`);
          }
          else{
              res.status(200).json({tag});
          }
      }
      catch(error){
          console.error(`Error in retrieving tag by status!: ${error}`);
          res.status(500).send(`Error in retrieving tag by status!: ${error}`);
      }
  }
}

}
