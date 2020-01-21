import {
  Model,
  Column,
  Table,
  BelongsTo,
  Scopes,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  DefaultScope
} from "sequelize-typescript";
import { User } from "./User.model";
import { Post } from "./Post.model";
@Scopes(() => ({
  full: {
    include: [User, Post]
  }
}))
@Table
export class Comment extends Model<Comment> {
  @Column
  text: string;

  @Column
  name: string;

  @ForeignKey(() => Post)
  @Column
  postId: number;

  @BelongsTo(() => Post)
  post: Post;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
