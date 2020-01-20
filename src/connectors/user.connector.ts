import { Request, Response, NextFunction } from "express";
import crypto from 'crypto';
import { User } from "../models/User.model";
import { check, sanitize, validationResult } from "express-validator";

export const postUser = async (req: Request, res: Response, next: NextFunction) => {
    
    await check("email", "Email is not valid").isEmail().run(req);
    await check("password", "Password cannot be blank").isLength({min: 1}).run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(errors.array());
    }

    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto.pbkdf2Sync(req.body.userPassword, salt,
        10000, 512, 'sha512')
        .toString('hex');

    const user = new User({
        userName: req.body.userName,
        email: req.body.userEmail,
        password: hashedPassword,
        salt, 
    });

    user.save().then(() => {
        res
            .status(200)
            .json({
                userName: user.userName,
                email: user.email,
            });
    }).catch((err) => {
        res
            .status(500)
            .json({
                err: err.message,
            });
    });
};

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
    User
        .scope('full')
        .findAll()
        .then((users: User[]) => {
            res
                .status(200)
                .json(users);
        }).catch((err) => {
            res
                .status(500)
                .json({
                    err: err.message,
                });
        });
};

export const getUser = (req: Request, res: Response, next: NextFunction) => {
    User
        .scope('full')
        .findOne({
            where: {
                id: req.params.id
            },
        })
        .then((user: User) => {
            res
                .status(200)
                .json(user);
        }).catch((err) => {
            res
                .status(500)
                .json({
                    err: err.message,
                });
        });
};

