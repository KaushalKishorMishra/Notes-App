import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repository/userRepository";
import { bcryptServices } from "../services/bcrypt";

export class UserControllers {

    static signUp = async (
        req:Request,res:Response,next:NextFunction
    )=>{
        const {name,password, email, phone, gender, date_of_birth} = req.body;

        if(await UserRepository.findOne(email)){
            res.status(409).send(`User with email ${email} already exists!`);
        }else if(await UserRepository.findOne(phone)){
            res.status(409).send(`User with phone ${phone} already exists!`);
        }else{
            try{
                const hashedPassword = await bcryptServices.encryptPassword(password);
                
            }catch{

            }

        }
        
    }
}