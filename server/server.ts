import express, { Application } from "express"
import authRouter from "./routes/auth.route"
import blogRouter from "./routes/blog.route"

const app: Application = express()


app.use("/api/blogs", blogRouter)
app.use('/api/auth', authRouter)

app.get("/api", async (req, res) => {
    return res.send({ msg: "Hello World" })
})



export default app