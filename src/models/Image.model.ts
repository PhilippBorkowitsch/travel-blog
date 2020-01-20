import {Model, Column, Table, BelongsTo, Scopes, CreatedAt, UpdatedAt, ForeignKey, DefaultScope} from "sequelize-typescript";
import { Post } from "./Post.model";

@DefaultScope(() => ({
    include: [Post],
}))

@Table
export class Image extends Model<Image> {

    @Column
    imageName!: string;

    @Column
    description: string;

    @ForeignKey(() => Post)
    @Column
    postId: number;

    @BelongsTo(() => Post)
    post: Post;
}
