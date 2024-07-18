import fs from "fs/promises"
import path from "path"
import db from ".."

type Blog = {
    id: number,
    title: string,
    text: string,
}

class BlogSchema {

    private readonly filePath: string

    constructor() {
        this.filePath = path.resolve("./server/data/blog.json")
    }


    private async readFile<T>(): Promise<T> {
        const file = await fs.readFile(this.filePath, "utf-8")
        return JSON.parse(file) as T
    }

    private async writeFile(data: unknown) {
        return await fs.writeFile(this.filePath, JSON.stringify(data), 'utf-8')
    }

    async getAllBlog() {
        const blog = await this.readFile<Blog[]>()
        return blog
    }

    async getSpecificBlog(id: number) {
        const query = await this.readFile<Blog[]>()
        const blogs = query.filter(x => x.id === id)
        if (!blogs) throw new Error("Blog Not Found")
        const comment = await db.comment.getComment(blogs[0].id)
        const likes = await db.like.getLike(blogs[0].id)
        const newBlog = {
            ...blogs[0],
            comments: comment,
            likes: likes,
        }
        return newBlog
    }

    async searchBlog(title: string) {
        const query = await this.readFile<Blog[]>()
        const blogs = query.filter(x => x.title.includes(title))
        if (!blogs) throw new Error("Blog Not Found")
        return blogs[0]
    }




    async createBlog(blog: Omit<Blog, "id">) {
        const query = await this.readFile<Blog[]>()
        const filtered = query.filter(x => x.title === blog.title)
        if (filtered) throw new Error("Blog Already Exists")
        const newBlog = { ...blog, id: query.length + 1 }
        query.push(newBlog)
        await this.writeFile(query)
        return newBlog
    }

    async editBlog(blog: Blog) {
        const query = await this.readFile<Blog[]>()
        const filtered = query.filter(x => x.id === blog.id)
        if (!filtered) throw new Error("Blog Doesn't Exists")

        query.forEach(val => {
            if (val.id === blog.id) {
                val.text = blog.text
                val.title = blog.title
            }
        })

        await this.writeFile(query)

        return filtered
    }
}

export default BlogSchema