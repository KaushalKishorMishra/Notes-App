import { NextFunction, Request, Response } from "express";
import { TokenRepository } from "../repository/tokenRepository";


export class TokenController {

    static createToken = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const { purpose, value, expiry, userId } = req.body;
        const tokenData = { purpose, value, expiry, userId };
        const token = await TokenRepository.create(tokenData);
        if (!token) {
            res.status(404).send(`Token not created!`);
        } else {
            try {
                res.status(200).json({ message: `Successfully created token.`, token });
            } catch (error) {
                console.error(`Error in creating token!: ${error}`);
                res.status(500).send(`Error in creating token!: ${error}`);
            }
        }
        
    }

    static getAllToken = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const token = await TokenRepository.findAll({});
        if (!token) {
            res.status(404).send(`Token not found!`);
        } else {
            try {
                res.status(200).json({ message: `Successfully retrieved token.`, token });
            } catch (error) {
                console.error(`Error in retrieving token!: ${error}`);
                res.status(500).send(`Error in retrieving token!: ${error}`);
            }
        }
    }

    static getUserTokens = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const userId  = req.params;
        const tokens = await TokenRepository.findAll({ where: { userId } });
        if (!tokens) {
            res.status(404).send(`Tokens with userId ${userId} not found!`);
        } else {
            try {
                res.status(200).json({ message: `Successfully retrieved tokens.`, tokens });
            } catch (error) {
                console.error(`Error in retrieving tokens!: ${error}`);
                res.status(500).send(`Error in retrieving tokens!: ${error}`);
            }
        }
    }

}