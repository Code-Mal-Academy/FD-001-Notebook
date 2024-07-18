import { Router } from "express";
import db from "../db";

const blogRouter: Router = Router()

blogRouter.get("/", async (req, res) => {
    const data = await db.blog.getAllBlog()
    return res.status(200).send(data)
})

blogRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await db.blog.getSpecificBlog(Number(id))
        return res.status(200).send(data)
    } catch (err) {
        return res.status(401).send(err)
    }
})

blogRouter.get('/search', async (req, res) => {
    const { title } = req.params as { title: string }
    try {
        const data = await db.blog.searchBlog(title)
        return res.status(200).send(data)
    } catch (err) {
        return res.status(401).send(err)
    }
})

blogRouter.put("/like", async (req, res) => {
    //@ts-expect-error //! Defined
    const userId = req.userId
    const payload = req.body as { blogId: number }
    const data = await db.like.createLike({ userId: userId, blogId: payload.blogId })
    if (data === false) {
        return res.status(204).send({ msg: "Deleted" })
    }
    return res.status(201).send(data)
})

blogRouter.post('/blog/comment', async (req, res) => {
    //@ts-expect-error //! Defined
    const userId = req.userId
    const payload = req.body as { text: string, blogId: number }

    const data = await db.comment.createComment({ userId, ...payload })
    return res.status(201).send(data)


})

export default blogRouter