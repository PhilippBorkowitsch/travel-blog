import {Model, Column, Table, BelongsTo, Scopes, CreatedAt, UpdatedAt, ForeignKey, HasMany, DefaultScope} from "sequelize-typescript";
import { Image } from "./Image.model";
import { User } from "./User.model";

@DefaultScope(() => ({
    include: [Image, User],
}))

@Table
export class Post extends Model<Post> {
    
    @Column
    title: string;

    @Column
    text: string;

    @Column
    citation: string;

    @Column
    song: string;

    @HasMany(() => Image)
    images: Image[];

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;
    
}
