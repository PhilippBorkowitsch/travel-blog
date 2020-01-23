const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

import * as userConnector from "./connectors/user.connector";
import * as postConnector from "./connectors/post.connector";
import * as imageConnector from "./connectors/image.connector";
import * as commentConnector from "./connectors/comment.connector";

import { sequelize } from "./db";
import { User } from "./models/User.model";
import { Comment } from "./models/Comment.model";
import { Post } from "./models/Post.model";
import { Image } from "./models/Image.model";

sequelize.addModels([User, Comment, Post, Image]);

sequelize.sync({ force: true }).then(() => {
  const userAndrea = new User({
    userName: "Andrea",
    password: "test123",
    email: "andrea.celina.sp@gmail.com",
    salt: "willstDuMich"
  });

  const userPhilipp = new User({
    userName: "Philipp",
    password: "test123",
    email: "philipp.borkowitsch@hpe.com",
    salt: "willstDuMich"
  });

  const post = new Post([
    {
      title: "fixtitletest",
      text: "abcd",
      date: "Mon_13_01_2020",
      userId: 1
    }
  ]);

  const comment = new Comment({
    text: "abc",
    name: "Testperson",
    userId: 1,
    postId: 1
  });

  userAndrea
    .save()
    .then(() => {
      return userPhilipp.save();
    })
    .then(userPhilipp => {
      return post.save();
    })
    .then(() => {
      return comment.save();
    });
});

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * User routes
 */
app.get("/user", userConnector.getUsers);
app.get("/user/:id", userConnector.getUser);
app.post("/user", userConnector.postUser);

/**
 * Post routes
 */
app.get("/post", postConnector.getPosts);
app.post("/post", postConnector.postPost);

/**
 * Image routes
 */
app.get("/image", imageConnector.getImages);
app.get("/image/post/:postId", imageConnector.getImagesOfPost);
app.get("/image/:id", imageConnector.getImage);
app.post("/image", imageConnector.postImage);

/**
 * Comment routes
 */
app.get("/comment", commentConnector.getComments);
app.get("/comment/post/:postId", commentConnector.getCommentsOfPost);
app.post("/comment", commentConnector.postComment);

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Server running at ${port}`));
