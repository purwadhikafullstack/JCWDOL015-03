import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type IUser = {
    id: number;
    role: string
}

export const verifyToken = async ( req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")
        if (!token) throw "token empty"

        const verifiedToken = verify(token, process.env.SECRET_JWT!)
        req.userAuth = verifiedToken as IUser 
        
        next()
    } catch (err) {
        res.status(404).send({
            status: 'error',
            msg: err
        })
    }
}

export const checkSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.userAuth?.role !== 'SUPER_ADMIN') throw "unauthorized!"

        next()
    } catch (err) {
        res.status(400).send({
            status: 'error',
            msg: err
        })
    }
}

export const checkStoreAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.userAuth?.role !== 'STORE_ADMIN') throw "unauthorized!"

        next()
    } catch (err) {
        res.status(400).send({
            status: 'error',
            msg: err
        })
    }
}