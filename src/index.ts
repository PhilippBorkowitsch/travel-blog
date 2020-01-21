const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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
  const user = new User({
    userName: "Birgitt",
    password: "Markus",
    email: "haha@haha.haha",
    salt: "willstDuMich"
  });

  const post = new Post({
    text: "abcd",
    userId: 1
  });

  const comment = new Comment({
    text: "abc",
    userId: 1,
    postId: 1
  });
  user
    .save()
    .then(() => {
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
app.get("/comment/post/:postId", commentConnector.getComments);
app.post("/comment", commentConnector.postComment);

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Server running at ${port}`));
