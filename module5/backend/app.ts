import express, { Application } from "express"
import todo from "./data.json"

const app: Application = express()


app.use(express.json())

//! Disable And Enable This According To Chapter
//! FROM 
app.use("/api", (req, res, next) => {
    const randomNumber = Math.random();

    setTimeout(() => {
        if (randomNumber < 0.1) {
            res.status(500).json({ error: "Randomly Generated Error" });
        } else {
            next();
        }
    }, 1000);

})
//! TO

app.get("/api/todo", async (req, res) => {
    return res.json(todo)
})

app.get("/api/todo/:id", async (req, res) => {
    const { id } = req.params
    const data = todo.filter(x => x.id === Number(id))[0]
    return res.json(data)
})

app.get('/api/error', async (req, res) => {
    return res.status(401).send("Error")
})

app.get("/api/search", async (req, res) => {
    const { task } = req.query as { task: string }
    const data = todo.filter(x => x.task.toLowerCase().includes(task.toLowerCase()))
    return res.json(data)
})

app.post("/api/todo/create", async (req, res) => {
    const body = req.body as typeof todo[number]
    body.id = todo.length + 1
    body.finished = false
    todo.push(body)
    return res.status(201).send(body)
})

app.put("/api/todo/update", async (req, res) => {
    const body = req.body as typeof todo[number];

    todo.forEach((task) => {
        if (task.id === body.id) {
            task.task = body.task
            task.finished = !task.finished
        }

    })

    return res.json(todo)
})

// Route to delete a task
app.delete('/api/todo/delete', async (req, res) => {

    const body = req.body as { id: number }

    todo.forEach((task, index) => {
        if (task.id === body.id) {
            todo.splice(index, 1)
        }
    })


    res.status(204).send({ msg: "Deleted" });
});


export default app