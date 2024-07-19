import fs from "fs/promises"
import path from "path"
import db from ".."

type Comment = {
    id: number,
    text: string,
    blogId: number,
    userId: number
}

class CommentSchema {

    private readonly filePath: string

    constructor() {
        this.filePath = path.resolve("./server/data/comment.json")
    }


    private async readFile<T>(): Promise<T> {
        const file = await fs.readFile(this.filePath, "utf-8")
        return JSON.parse(file) as T
    }

    private async writeFile(data: unknown) {
        return await fs.writeFile(this.filePath, JSON.stringify(data), 'utf-8')
    }

    async getComment(blogId: number) {
        const query = await this.readFile<Comment[]>()
        const filtered = query.filter(x => x.blogId === blogId)

        for (let i = 0; i < filtered.length; i++) {
            const user = await db.user.getUserById(filtered[i].userId)
            const author = {
                username: user.username,
                email: user.email
            }

            //@ts-expect-error //! Ignore
            filtered[i].author = author
        }


        return filtered
    }


    async createComment(comment: Omit<Comment, "id">) {
        const query = await this.readFile<Comment[]>()
        const filtered = query.filter(x => x.blogId === x.blogId)
        if (filtered) throw new Error("User Exists")
        const newComment = { ...comment, id: query.length + 1 }
        query.push(newComment)
        await this.writeFile(query)

        const subQuery = await db.user.getUserById(comment.userId)

        const fullComment = {
            ...newComment,
            author: {
                username: subQuery.username,
                email: subQuery.email
            }
        }

        return fullComment
    }





}

export default CommentSchema