import {Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, HasMany, DefaultScope} from "sequelize-typescript";
import { Comment } from "./Comment.model";
import { Post } from "./Post.model";

@DefaultScope(() => ({
    attributes: ['id', 'userName', 'email'],
    include: [Comment, Post],
}))

@Scopes(() => ({
    full: {
      include: [Comment, Post],
    },
  }))

@Table
export class User extends Model<User> {
    
    @Column
    userName!: string;

    @Column
    email!: string;

    @Column
    password!: string;

    @Column
    salt!: string;

    @HasMany(() => Comment)
    comments: Comment[];

    @HasMany(() => Post)
    posts: Post[];

}
