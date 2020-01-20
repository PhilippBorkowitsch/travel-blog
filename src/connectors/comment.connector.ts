import { Request, Response, NextFunction } from "express";
import { Comment } from "../models/Comment.model";

export const postComment = (req: Request, res: Response, next: NextFunction) => {
    const comment = new Comment({
        text: req.body.text,
        userId: req.body.userId,
    });

    comment.save().then(() => {
        comment.save().then(() => {
            res
                .status(200)
                .json(comment);
        }).catch((err) => {
            res
                .status(400)
                .json(err);
        });
    });
};

export const getComments = (req: Request, res: Response, next: NextFunction) => {
    Comment.scope('full').findAll().then((comments) => {
        res
            .status(200)
            .json(comments);
    }).catch((err) => {
        res
            .status(400)
            .json(err);
    });
};

export const getCommentsOfPost = (req: Request, res: Response, next: NextFunction) => {
    Comment.scope('full').findAll({
        where: {
            postId: req.params.postId,
        }
    }).then((comments) => {
        res
            .status(200)
            .json(comments);
    }).catch((err) => {
        res
            .status(400)
            .json(err);
    });
};
