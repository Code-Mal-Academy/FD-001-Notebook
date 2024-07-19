import express, { Application } from "express"
import todo from "./data.json"

const app: Application = express()

app.get("/api", async (req, res) => {
    return res.json({ msg: "Hello" })
})

app.get("/api/todo", async (req, res) => {
    return res.json(todo)
})

export default app