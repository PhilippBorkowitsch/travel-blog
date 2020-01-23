import {
  Model,
  Column,
  Table,
  BelongsTo,
  Scopes,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  HasMany,
  DefaultScope
} from "sequelize-typescript";
import { Image } from "./Image.model";
import { User } from "./User.model";
import { Comment } from "./Comment.model";

@Scopes(() => ({
  full: {
    include: [User, Comment, Image]
  }
}))
@Table
export class Post extends Model<Post> {
  @Column
  title: string;

  @Column
  text: string;

  @Column
  date: string;

  @Column
  citation: string;

  @Column
  song: string;

  @HasMany(() => Image)
  images: Image[];

  @HasMany(() => Comment)
  comments: Comment[];

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
