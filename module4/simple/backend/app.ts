import express, { Application } from "express"
import todo from "./data.json"

const app: Application = express()


app.use(express.json())

app.get("/api", async (req, res) => {
    return res.json(todo)
})

app.post("/api/create", async (req, res) => {
    const body = req.body as typeof todo[number]
    body.id = todo.length + 1
    todo.push(body)
    return res.status(201).send(body)
})

app.put("/api/update", async (req, res) => {
    const body = req.body as typeof todo[number];

    todo.forEach((task) => {
        if (task.id === body.id) {
            task.finished = !task.finished
        }

    })

    return res.json(todo)
})

// Route to delete a task
app.delete('/api/delete', async (req, res) => {

    const body = req.body as { id: number }

    todo.forEach((task, index) => {
        if (task.id === body.id) {
            todo.splice(index, 1)
        }
    })


    res.status(204).send({ msg: "Deleted" });
});



export default app