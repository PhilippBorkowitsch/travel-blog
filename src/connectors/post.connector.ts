import { Request, Response, NextFunction } from "express";
import { Post } from "../models/Post.model";

export const postPost = (req: Request, res: Response, next: NextFunction) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    date: req.body.date,
    citation: req.body.citation,
    song: req.body.song,
    userId: req.body.userId
  });

  post
    .save()
    .then(() => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

export const getPosts = (req: Request, res: Response, next: NextFunction) => {
  Post.scope("full")
    .findAll()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
