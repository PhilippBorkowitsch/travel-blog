import { Request, Response, NextFunction } from "express";
import { Image } from "../models/Image.model";

export const postImage = (req: Request, res: Response, next: NextFunction) => {
  const image = new Image({
    imageName: req.body.imageName,
    description: req.body.description,
    postId: req.body.postId
  });

  image
    .save()
    .then(() => {
      res.status(200).json(image);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

export const getImages = (req: Request, res: Response, next: NextFunction) => {
  Image.findAll()
    .then(images => {
      res.status(200).json(images);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

export const getImage = (req: Request, res: Response, next: NextFunction) => {
  Image.findOne({
    where: {
      id: req.body.id
    }
  })
    .then(image => {
      res.status(200).json(image);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

export const getImagesOfPost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Image.scope("full")
    .findAll({
      where: {
        postId: req.params.postId
      }
    })
    .then(image => {
      res.status(200).json(image);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
