import fs from "fs/promises"
import path from "path"

type Like = {
    blogId: number,
    userId: number,
}

class LikeSchema {

    private readonly filePath: string

    constructor() {
        this.filePath = path.resolve("./server/data/like.json")
    }

    private async readFile<T>(): Promise<T> {
        const file = await fs.readFile(this.filePath, "utf-8")
        return JSON.parse(file) as T
    }

    private async writeFile(data: unknown) {
        return await fs.writeFile(this.filePath, JSON.stringify(data), 'utf-8')
    }

    async getLike(blogId: number) {
        const query = await this.readFile<Like[]>()
        const likes = query.filter(x => x.blogId === blogId)
        return likes
    }

    async createLike(payload: { blogId: number, userId: number }) {
        const query = await this.readFile<Like[]>()
        const index = query.findIndex(x => x.userId === payload.userId && x.blogId === payload.blogId)
        if (index === -1) {
            query.push(payload)
            await this.writeFile(query)
            return payload
        }


        query.slice(index, 1)
        await this.writeFile(query)
        return false



    }

}

export default LikeSchema