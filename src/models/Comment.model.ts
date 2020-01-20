import {Model, Column, Table, BelongsTo, Scopes, CreatedAt, UpdatedAt, ForeignKey, DefaultScope} from "sequelize-typescript";
import { User } from "./User.model";

@DefaultScope(() => ({
    attributes: ['id', 'userName', 'email'],
    include: [User],
}))

@Table
export class Comment extends Model<Comment> {
    
    @Column
    text: string;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;
    
}
