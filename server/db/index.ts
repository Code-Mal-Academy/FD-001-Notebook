import BlogSchema from "./blog";
import CommentSchema from "./comment";
import LikeSchema from "./like";
import UserSchema from "./user";

class DB {

    user: UserSchema
    blog: BlogSchema
    like: LikeSchema
    comment: CommentSchema

    constructor() {
        this.user = new UserSchema()
        this.blog = new BlogSchema()
        this.like = new LikeSchema()
        this.comment = new CommentSchema()
    }
}

const db = new DB()

export default db